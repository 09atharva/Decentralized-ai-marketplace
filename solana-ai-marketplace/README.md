# Solana AI Marketplace Prototype

A production-grade decentralized marketplace for AI inference.

## 🚀 Running Services

| Component | Port | Description |
| :--- | :--- | :--- |
| **Frontend** | 5174 | React/TypeScript SaaS dashboard. |
| **Gateway** | 4001 | Express API for auth and jobs. |
| **Worker** | 8002 | Python FastAPI compute node. |
| **Database** | 5432 | PostgreSQL (`blockchain_solana`). |
| **Redis** | 6379 | Job queuing via BullMQ. |

## 🧠 Architecture

1. **Client (React)**: Connects to Phantom, browse models, triggers Solana Escrow.
2. **Gateway (Node.js)**: Verifies Solana signatures, stores metadata in Postgres.
3. **Scheduler (Node.js)**: Listens for jobs in Redis, assigns to workers.
4. **Worker (Python)**: Simulates GPU inference and deterministic hashing.
5. **Solana Programs (Rust/Anchor)**: Handles USDC escrow and revenue splits.

## 🛠 Setup & Development

### Local Execution (Manual)
1. **Database**: `psql -d blockchain_solana -f db/schema.sql`
2. **Gateway**: `cd gateway && npm start`
3. **Scheduler**: `cd scheduler && npm start`
4. **Worker**: `cd worker && source venv/bin/activate && python app.py`
5. **Frontend**: `cd client && npm run dev`

### Solana Deployment
The Anchor contracts are located in `programs/ai_marketplace`. 
To deploy:
```bash
anchor build
anchor deploy
```
*Note: Requires Solana CLI and Anchor installed.*
