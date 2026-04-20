-- db/schema.sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    wallet_address VARCHAR(44) PRIMARY KEY,
    nonce UUID DEFAULT uuid_generate_v4(),
    role VARCHAR(20) DEFAULT 'user',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE models (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    onchain_pubkey VARCHAR(44) UNIQUE NOT NULL,
    creator_wallet VARCHAR(44) REFERENCES users(wallet_address),
    name VARCHAR(255) NOT NULL,
    ipfs_hash VARCHAR(255) NOT NULL,
    price_per_run DECIMAL(18, 8) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DeFi Vault Tables
CREATE TABLE vault_deposits (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_wallet VARCHAR(44) REFERENCES users(wallet_address),
    amount_usdc DECIMAL(18, 8) NOT NULL,
    shares DECIMAL(18, 8) NOT NULL,
    last_deposit_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE yield_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    total_value_locked DECIMAL(18, 8) NOT NULL,
    current_apy DECIMAL(5, 2) NOT NULL,
    logged_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE compute_nodes (
    wallet_address VARCHAR(44) PRIMARY KEY REFERENCES users(wallet_address),
    status VARCHAR(20) DEFAULT 'active',
    reputation_score INT DEFAULT 1000,
    staked_amount DECIMAL(18, 8) DEFAULT 0
);

CREATE TABLE jobs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    model_id UUID REFERENCES models(id),
    client_wallet VARCHAR(44) REFERENCES users(wallet_address),
    input_ipfs_hash VARCHAR(255) NOT NULL,
    consensus_output_hash VARCHAR(255),
    status VARCHAR(20) DEFAULT 'pending',
    escrow_pubkey VARCHAR(44) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE job_assignments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    job_id UUID REFERENCES jobs(id),
    node_wallet VARCHAR(44) REFERENCES compute_nodes(wallet_address),
    output_hash VARCHAR(255),
    status VARCHAR(20) DEFAULT 'assigned'
);
