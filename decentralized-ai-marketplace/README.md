# Decentralized AI Model Marketplace

A production-grade platform where developers upload AI models, users pay per inference using crypto, and a distributed network of GPU nodes execute the workloads securely.

## 🧠 Architecture Overview

1. **Frontend (React)**: Allows users to connect wallets (MetaMask), browse models, and submit inference requests.
2. **API Gateway (Node.js/Express)**: Handles Web3 wallet signature authentication, rate limiting, and queues jobs.
3. **Scheduler (Node.js/BullMQ)**: Manages the lifecycle of inference jobs, assigning them to available compute nodes.
4. **Worker Nodes (Python/FastAPI)**: Dockerized GPU workers that pull models/data from IPFS and execute them.
5. **Smart Contracts (Solidity)**: Deployed on Polygon. Includes:
   - `ModelRegistry`: Tracks models and their IPFS hashes.
   - `PaymentEscrow`: Locks funds during inference and releases to workers upon success.
   - `NodeStaking`: Manages node operator stakes and slashing for malicious behavior.
6. **Database (PostgreSQL)**: Stores off-chain metadata (job statuses, reputation logs, off-chain profiles).

## 🚀 Setup Steps

### Prerequisites
- Node.js v18+
- Python 3.10+
- Docker & Docker Compose
- PostgreSQL

### 1. Database Setup
```bash
createdb blockchain_project
psql -d blockchain_project -f db/schema.sql
```

### 2. Install Dependencies
Gateway:
```bash
cd gateway
npm install
```

Scheduler:
```bash
cd scheduler
npm install
```

Worker:
```bash
cd worker
pip install -r requirements.txt
```

### 3. Run Locally (Microservices)

Start Redis (for BullMQ) and PostgreSQL via Docker:
```bash
docker-compose up -d redis db
```

Start the Gateway API:
```bash
cd gateway
npm start
```

Start the Scheduler:
```bash
cd scheduler
npm start
```

Start a Local Worker Node:
```bash
cd worker
uvicorn app:app --host 0.0.0.0 --port 8000
```

### 4. Smart Contracts
Compile and deploy contracts using Hardhat or Foundry in the `contracts` directory.

## 🔐 Security Features
- **Wallet Signature Auth**: JWTs are replaced with cryptographic signatures via MetaMask.
- **Payment Escrow**: Users cannot be scammed; funds are locked on-chain and only released on verifiable success.
- **Node Staking & Slashing**: Nodes must stake tokens. If they return incorrect output hashes, they are slashed.

## 📁 Monorepo Structure
- `/client` - React frontend (WIP structure)
- `/contracts` - Solidity smart contracts
- `/gateway` - API Gateway (Web2/Web3 bridge)
- `/scheduler` - BullMQ Job Orchestrator
- `/worker` - Python FastAPI inference node
- `/db` - SQL Schemas and migrations
