-- db/schema.sql
-- Create UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users (Clients & Developers)
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    wallet_address VARCHAR(42) UNIQUE NOT NULL,
    nonce VARCHAR(255) NOT NULL, -- For wallet signature auth
    role VARCHAR(50) DEFAULT 'user', -- 'user', 'developer', 'node_operator'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Models
CREATE TABLE models (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    chain_model_id INTEGER UNIQUE NOT NULL, -- Corresponds to smart contract Model ID
    developer_id UUID REFERENCES users(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    ipfs_hash VARCHAR(255) NOT NULL,
    framework VARCHAR(50) NOT NULL, -- e.g., 'pytorch', 'tensorflow', 'onnx'
    price_per_run DECIMAL(18, 8) NOT NULL,
    reputation INTEGER DEFAULT 100,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Compute Nodes
CREATE TABLE compute_nodes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    operator_id UUID REFERENCES users(id),
    wallet_address VARCHAR(42) UNIQUE NOT NULL,
    gpu_type VARCHAR(100),
    status VARCHAR(50) DEFAULT 'active', -- 'active', 'offline', 'slashed'
    reputation INTEGER DEFAULT 500,
    total_jobs INTEGER DEFAULT 0,
    failed_jobs INTEGER DEFAULT 0,
    last_ping TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Jobs (Inference Requests)
CREATE TABLE jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    chain_job_id INTEGER UNIQUE, -- Corresponds to Escrow Job ID
    client_id UUID REFERENCES users(id),
    model_id UUID REFERENCES models(id),
    input_ipfs_hash VARCHAR(255) NOT NULL,
    output_ipfs_hash VARCHAR(255),
    status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'assigned', 'completed', 'failed'
    assigned_node_id UUID REFERENCES compute_nodes(id),
    amount_paid DECIMAL(18, 8),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP
);

-- Payments Log
CREATE TABLE payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_id UUID REFERENCES jobs(id),
    tx_hash VARCHAR(66) UNIQUE NOT NULL,
    amount DECIMAL(18, 8) NOT NULL,
    status VARCHAR(50) DEFAULT 'confirmed',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reputation / SLA Logs
CREATE TABLE reputation_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    entity_type VARCHAR(50) NOT NULL, -- 'model' or 'node'
    entity_id UUID NOT NULL,
    job_id UUID REFERENCES jobs(id),
    score_change INTEGER NOT NULL,
    reason VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for fast queries
CREATE INDEX idx_jobs_status ON jobs(status);
CREATE INDEX idx_models_developer ON models(developer_id);
CREATE INDEX idx_nodes_operator ON compute_nodes(operator_id);
