# Decentralized AI Marketplace with DeFi Yield (Solana)

## 🌟 Key Features
1. **AI Model Hosting**: Pay-per-inference using USDC.
2. **DeFi Yield Vault**: Idle user funds are staked in **Meteora/Jupiter** yield pools.
3. **Smart Routing**: Pay in any SPL token (SOL, JUP, etc.), auto-swap to USDC via Jupiter.
4. **Capital Efficiency**: Real-time yield tracking and automated settlement.

## 🚀 Ports & Services

| Service | Port | Description |
| :--- | :--- | :--- |
| **Frontend** | 5175 | React + Tailwind DeFi Dashboard. |
| **Gateway** | 4003 | Node.js API with Jupiter/Vault integration. |
| **Worker** | 8003 | Python compute node. |
| **Database** | 5432 | PostgreSQL (`blockchain_defi`). |

## 🛠 Setup

### 1. Database
```bash
psql -d blockchain_defi -f db/schema.sql
```

### 2. Run All
- **Gateway**: `cd gateway && node server.js`
- **Worker**: `cd worker && source venv/bin/activate && python app.py`
- **Frontend**: `cd client && npm run dev -- --port 5175`

## 🧠 Architecture
- **Anchor (Rust)**: Manages the Yield Vault PDA and Escrows.
- **Jupiter API**: Fetches real-time quotes for multi-token payments.
- **FastAPI**: High-performance inference simulation.
