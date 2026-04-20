// gateway/server.js
const express = require('express');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const nacl = require('tweetnacl');
const bs58 = require('bs58');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://neel@localhost:5432/blockchain_defi'
});

// Auth Middleware
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

// 1. Web3 Auth (Wallet Signature)
app.get('/auth/nonce', async (req, res) => {
    const { wallet } = req.query;
    let result = await pool.query('SELECT nonce FROM users WHERE wallet_address = $1', [wallet]);
    if (result.rows.length === 0) {
        result = await pool.query('INSERT INTO users (wallet_address) VALUES ($1) RETURNING nonce', [wallet]);
    }
    res.json({ nonce: result.rows[0].nonce });
});

app.post('/auth/login', async (req, res) => {
    const { wallet, signature } = req.body;
    const result = await pool.query('SELECT nonce FROM users WHERE wallet_address = $1', [wallet]);
    const nonce = result.rows[0].nonce;
    const message = new TextEncoder().encode(`Sign this message to authenticate: ${nonce}`);
    const isValid = nacl.sign.detached.verify(message, bs58.decode(signature), bs58.decode(wallet));
    if (!isValid) return res.status(401).send('Invalid signature');
    const token = jwt.sign({ wallet }, process.env.JWT_SECRET || 'secret');
    res.json({ token });
});

// 2. DeFi & Vault Routes
app.get('/defi/vault-stats', async (req, res) => {
    const yieldLog = await pool.query('SELECT * FROM yield_logs ORDER BY logged_at DESC LIMIT 1');
    const tvl = await pool.query('SELECT SUM(amount_usdc) as total FROM vault_deposits');
    res.json({
        tvl: tvl.rows[0].total || 0,
        apy: yieldLog.rows[0]?.current_apy || 8.5,
        protocol: 'Meteora Dynamic Pool'
    });
});

app.get('/defi/quote', async (req, res) => {
    const { inputMint, outputMint, amount } = req.query;
    try {
        const response = await axios.get(`https://quote-api.jup.ag/v6/quote?inputMint=${inputMint}&outputMint=${outputMint}&amount=${amount}&slippageBps=50`);
        res.json(response.data);
    } catch (e) {
        res.status(500).json({ error: 'Jupiter Quote API failed' });
    }
});

// 3. Marketplace
app.get('/models', async (req, res) => {
    const result = await pool.query('SELECT * FROM models');
    res.json(result.rows);
});

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => console.log(`Gateway (DeFi) running on port ${PORT}`));
