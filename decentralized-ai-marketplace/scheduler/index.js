const { Queue, Worker, QueueEvents } = require('bullmq');
const { Pool } = require('pg');
const Redis = require('ioredis');
require('dotenv').config();

const connection = new Redis(process.env.REDIS_URL || 'redis://127.0.0.1:6379');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://neel@localhost:5432/blockchain_project'
});

const inferenceQueue = new Queue('InferenceJobs', { connection });

// Example function to fetch pending jobs from DB and add to queue
async function enqueuePendingJobs() {
    try {
        const { rows } = await pool.query("SELECT * FROM jobs WHERE status = 'pending'");
        for (const job of rows) {
            await inferenceQueue.add('run_inference', job);
            await pool.query("UPDATE jobs SET status = 'queued' WHERE id = $1", [job.id]);
            console.log(`Queued job: ${job.id}`);
        }
    } catch (err) {
        console.error('Error enqueueing jobs:', err);
    }
}

// In a real scenario, this would distribute jobs to registered Python worker nodes
// Here we simulate the orchestrator logic
const worker = new Worker('InferenceJobs', async job => {
    console.log(`Processing job ${job.data.id}`);
    
    try {
        // 1. Assign to a compute node (simulated logic)
        const { rows: nodes } = await pool.query("SELECT id FROM compute_nodes WHERE status = 'active' LIMIT 1");
        if (nodes.length === 0) throw new Error('No active compute nodes available');
        const nodeId = nodes[0].id;
        
        await pool.query("UPDATE jobs SET status = 'assigned', assigned_node_id = $1 WHERE id = $2", [nodeId, job.data.id]);
        
        // 2. Call the worker node's API (Simulated with a delay)
        // In prod: await axios.post(`http://worker-node-ip/run`, { input_ipfs: job.data.input_ipfs_hash });
        console.log(`Job ${job.data.id} sent to node ${nodeId}`);
        await new Promise(resolve => setTimeout(resolve, 5000)); 
        
        // 3. Complete job
        const mockOutputHash = "QmSimulatedOutputHash" + Date.now();
        await pool.query("UPDATE jobs SET status = 'completed', output_ipfs_hash = $1, completed_at = NOW() WHERE id = $2", [mockOutputHash, job.data.id]);
        
        // 4. Trigger Smart Contract Payment (omitted for brevity, requires ethers.js to call PaymentEscrow.sol `resolveJob`)
        
        console.log(`Job ${job.data.id} completed successfully`);
        return { success: true, outputHash: mockOutputHash };
    } catch (err) {
        console.error(`Job ${job.data.id} failed:`, err);
        await pool.query("UPDATE jobs SET status = 'failed' WHERE id = $1", [job.data.id]);
        throw err;
    }
}, { connection });

const queueEvents = new QueueEvents('InferenceJobs', { connection });

queueEvents.on('completed', ({ jobId, returnvalue }) => {
    console.log(`Job ${jobId} has completed!`);
});

queueEvents.on('failed', ({ jobId, failedReason }) => {
    console.error(`Job ${jobId} has failed with reason ${failedReason}`);
});

// Run scheduler loop
setInterval(enqueuePendingJobs, 10000); // Check for new jobs every 10s
console.log('Scheduler started...');
