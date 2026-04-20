// scheduler/index.js
const { Worker } = require('bullmq');
const { Pool } = require('pg');
const fetch = require('node-fetch');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://neel@localhost:5432/blockchain_solana'
});

const worker = new Worker('inference_jobs', async (job) => {
    console.log(`Processing Job ${job.id}...`);
    const { jobId, modelId, inputIpfs } = job.data;

    try {
        // 1. Fetch Model Metadata
        const modelRes = await pool.query('SELECT ipfs_hash FROM models WHERE id = $1', [modelId]);
        const modelIpfs = modelRes.rows[0]?.ipfs_hash || 'mock-model-hash';

        // 2. Assign to Compute Nodes (In this prototype, we just call the local worker)
        // In reality, we'd pick 2 nodes from the compute_nodes table.
        const workerUrl = process.env.WORKER_URL || 'http://localhost:8000/run';
        
        const response = await fetch(workerUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ modelIpfs, inputIpfs })
        });

        const result = await response.json();
        console.log(`Worker result for job ${jobId}:`, result);

        // 3. Consensus & Finalization (Simulated)
        if (result.status === 'success') {
            await pool.query(
                'UPDATE jobs SET status = $1, consensus_output_hash = $2 WHERE id = $3',
                ['completed', result.outputHash, jobId]
            );
            console.log(`Job ${jobId} completed successfully.`);
            
            // 4. Mock On-Chain Payout
            console.log(`[MOCK] Triggering Solana payout for job ${jobId} with output ${result.outputHash}`);
        } else {
            throw new Error('Worker failed');
        }

    } catch (err) {
        console.error(`Error processing job ${jobId}:`, err);
        await pool.query('UPDATE jobs SET status = $1 WHERE id = $2', ['failed', jobId]);
    }
}, { 
    connection: { host: 'localhost', port: 6379 } 
});

console.log('Scheduler/Worker started...');
