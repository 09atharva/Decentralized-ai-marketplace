const express = require('express');
const cors = require('cors');
const { ethers } = require('ethers');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://neel@localhost:5432/blockchain_project'
});

// Middleware: Authenticate via Signature
const authenticate = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: 'Missing auth header' });

    const [wallet, signature] = authHeader.split(':');
    try {
        const { rows } = await pool.query('SELECT nonce FROM users WHERE wallet_address = $1', [wallet]);
        if (rows.length === 0) return res.status(401).json({ error: 'User not found' });
        
        const nonce = rows[0].nonce;
        const recoveredAddress = ethers.verifyMessage(`Sign this message to login: ${nonce}`, signature);
        
        if (recoveredAddress.toLowerCase() !== wallet.toLowerCase()) {
            return res.status(401).json({ error: 'Invalid signature' });
        }
        
        req.user = { wallet };
        next();
    } catch (err) {
        res.status(401).json({ error: 'Authentication failed' });
    }
};

// Routes
app.post('/api/auth/nonce', async (req, res) => {
    const { wallet } = req.body;
    const nonce = Math.floor(Math.random() * 1000000).toString();
    
    try {
        await pool.query(
            'INSERT INTO users (wallet_address, nonce) VALUES ($1, $2) ON CONFLICT (wallet_address) DO UPDATE SET nonce = $2',
            [wallet, nonce]
        );
        res.json({ nonce });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/models', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM models ORDER BY reputation DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/jobs', authenticate, async (req, res) => {
    const { modelId, inputIpfsHash, chainJobId } = req.body;
    try {
        // Validate model exists
        const { rows: modelRows } = await pool.query('SELECT id FROM models WHERE chain_model_id = $1', [modelId]);
        if (modelRows.length === 0) return res.status(404).json({ error: 'Model not found' });

        const { rows } = await pool.query(
            `INSERT INTO jobs (client_id, model_id, input_ipfs_hash, chain_job_id, status) 
             VALUES ((SELECT id FROM users WHERE wallet_address = $1), $2, $3, $4, 'pending') RETURNING id`,
            [req.user.wallet, modelRows[0].id, inputIpfsHash, chainJobId]
        );
        
        // In prod: publish to BullMQ / Redis for Scheduler to pick up
        res.json({ jobId: rows[0].id, message: 'Job queued' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Gateway running on port ${PORT}`);
});
