# Deployment Guide: Decentralized AI Marketplace

This document provides instructions for deploying the various components of the Decentralized AI Marketplace and the associated Laravel dashboard.

---

## 🏗️ Architecture Overview

1.  **Smart Contracts**: Solidity contracts (Polygon/EVM) for Model Registry, Escrow, and Staking.
2.  **API Gateway**: Node.js/Express bridge between Web3 and the off-chain database.
3.  **Scheduler**: BullMQ service for managing inference job lifecycles.
4.  **Worker Node**: Python/FastAPI service for executing AI workloads.
5.  **Marketplace Client**: React-based frontend for end-users.
6.  **Laravel Dashboard**: Management interface for the broader ecosystem.

---

## 🔐 1. Smart Contract Deployment (Hardhat)

The contracts are located in `/hardhat/contracts`.

1.  **Configure Environment**:
    Edit `hardhat/hardhat.config.js` or create a `.env` in the `hardhat` folder:
    ```env
    POLYGON_URL=your_rpc_url
    PRIVATE_KEY=your_wallet_private_key
    ```
2.  **Deploy**:
    ```bash
    cd hardhat
    npm install
    npx hardhat run scripts/deploy.cjs --network polygon
    ```
    *Note: Save the deployed contract addresses for the Gateway configuration.*

---

## 🚀 2. Backend Services Deployment (Render.com)

The project includes a `render.yaml` blueprint for easy deployment on Render.

1.  **Database & Redis**:
    - Deploy a **Managed PostgreSQL** instance.
    - Deploy a **Managed Redis** instance (required for BullMQ).
2.  **Gateway & Scheduler**:
    - Connect your repository to Render.
    - Render will detect the `render.yaml` and prompt for environment variables:
        - `DATABASE_URL`: Your PostgreSQL connection string.
        - `REDIS_URL`: Your Redis connection string.
        - `CONTRACT_ADDRESS`: The address from Step 1.
3.  **Worker Node**:
    - Deploy as a **Web Service**.
    - **Runtime**: Python 3.10+
    - **Build Command**: `pip install -r requirements.txt`
    - **Start Command**: `uvicorn app:app --host 0.0.0.0 --port 8000`

---

## 💻 3. Frontend Deployment (Vercel / Netlify)

### Vercel (Recommended)
The client contains a `vercel.json` optimized for React.
1.  Go to [Vercel](https://vercel.com).
2.  Import the repository and set the **Root Directory** to `decentralized-ai-marketplace/client`.
3.  Add Environment Variables:
    - `REACT_APP_GATEWAY_URL`: URL of your deployed API Gateway.

### Netlify
Use the `netlify.toml` in the root to configure redirects if deploying from the root directory.

---

## 🐘 4. Laravel Dashboard Deployment

The root Laravel application can be deployed to any PHP-compatible host.
- **Heroku**: Use the included `Procfile`.
- **Render**: Included in the `render.yaml` blueprint.
- **Manual**:
    ```bash
    composer install --optimize-autoloader --no-dev
    php artisan migrate --force
    npm install && npm run build
    ```

---

## 📝 Environment Variable Checklist

| Component | Variable | Description |
| :--- | :--- | :--- |
| **Gateway** | `DATABASE_URL` | PostgreSQL Connection String |
| **Gateway** | `REDIS_URL` | Redis Connection String |
| **Client** | `REACT_APP_GATEWAY_URL` | Production Gateway URL |
| **Worker** | `GATEWAY_URL` | URL of the Gateway for job callbacks |
| **Laravel** | `APP_KEY` | Laravel Application Key |

---

## 🛠️ Local Production Preview
To test the production build locally using Docker:
```bash
docker-compose up --build
```
