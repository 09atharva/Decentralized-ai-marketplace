// gateway/server.js
const express = require('express');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const nacl = require('tweetnacl');
const bs58 = require('bs58');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://neel@localhost:5432/blockchain_solana'
});

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// 1. Get Nonce for Login
app.get('/auth/nonce', async (req, res) => {
    const { wallet } = req.query;
    if (!wallet) return res.status(400).send('Wallet required');

    let result = await pool.query('SELECT nonce FROM users WHERE wallet_address = $1', [wallet]);
    if (result.rows.length === 0) {
        result = await pool.query('INSERT INTO users (wallet_address) VALUES ($1) RETURNING nonce', [wallet]);
    }
    res.json({ nonce: result.rows[0].nonce });
});

// 2. Verify Signature & Login
app.post('/auth/login', async (req, res) => {
    const { wallet, signature } = req.body;
    const result = await pool.query('SELECT nonce FROM users WHERE wallet_address = $1', [wallet]);
    if (result.rows.length === 0) return res.status(404).send('User not found');

    const nonce = result.rows[0].nonce;
    const message = new TextEncoder().encode(`Sign this message to authenticate: ${nonce}`);
    const signatureUint8 = bs58.decode(signature);
    const pubKeyUint8 = bs58.decode(wallet);

    const isValid = nacl.sign.detached.verify(message, signatureUint8, pubKeyUint8);
    if (!isValid) return res.status(401).send('Invalid signature');

    // Rotate nonce
    await pool.query('UPDATE users SET nonce = uuid_generate_v4() WHERE wallet_address = $1', [wallet]);

    const token = jwt.sign({ wallet }, process.env.JWT_SECRET || 'secret', { expiresIn: '24h' });
    res.json({ token });
});

// 3. Create Job
app.post('/jobs/create', authenticateToken, async (req, res) => {
    const { modelId, inputIpfs } = req.body;
    const result = await pool.query(
        'INSERT INTO jobs (model_id, client_wallet, input_ipfs_hash, status) VALUES ($1, $2, $3, $4) RETURNING id',
        [modelId, req.user.wallet, inputIpfs, 'pending']
    );
    res.json({ jobId: result.rows[0].id });
});

// 4. List Models
app.get('/models', async (req, res) => {
    const result = await pool.query('SELECT * FROM models');
    res.json(result.rows);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Gateway running on port ${PORT}`));
