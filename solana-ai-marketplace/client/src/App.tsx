import React, { useMemo, useState, useEffect } from 'react';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { LayoutDashboard, Rocket, Cpu, CreditCard, Activity, Search, Upload } from 'lucide-react';
import axios from 'axios';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

const API_BASE = 'http://localhost:4001';

const Dashboard = () => {
  const { publicKey } = useWallet();
  const [models, setModels] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState('explore');

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const res = await axios.get(`${API_BASE}/models`);
        setModels(res.rows || []);
      } catch (e) {
        // Mock models if API fails
        setModels([
          { id: '1', name: 'LLaMA-3-8B', price_per_run: '0.05', ipfs_hash: 'Qm...' },
          { id: '2', name: 'Stable Diffusion XL', price_per_run: '0.12', ipfs_hash: 'Qm...' },
          { id: '3', name: 'Whisper-Large-v3', price_per_run: '0.02', ipfs_hash: 'Qm...' },
        ]);
      }
    };
    fetchModels();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 border-r border-slate-800 p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-bold">S</div>
          <span className="text-xl font-bold tracking-tight">SolanaAI</span>
        </div>
        
        <nav className="space-y-2">
          {[
            { id: 'explore', label: 'Explore Models', icon: LayoutDashboard },
            { id: 'jobs', label: 'My Jobs', icon: Activity },
            { id: 'nodes', label: 'Compute Nodes', icon: Cpu },
            { id: 'billing', label: 'Billing', icon: CreditCard },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30' : 'hover:bg-slate-800 text-slate-400'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {activeTab === 'explore' && 'Decentralized AI Marketplace'}
              {activeTab === 'jobs' && 'Inference History'}
              {activeTab === 'nodes' && 'Network Status'}
              {activeTab === 'billing' && 'Wallet & Payouts'}
            </h1>
            <p className="text-slate-400">Secure, per-inference AI workloads powered by Solana.</p>
          </div>
          <div className="flex gap-4">
             <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg font-medium transition-all">
               <Upload size={18} />
               Upload Model
             </button>
             <WalletMultiButton className="!bg-purple-600 !hover:bg-purple-700 !rounded-lg !font-semibold" />
          </div>
        </header>

        {activeTab === 'explore' && (
          <>
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
              <input 
                type="text" 
                placeholder="Search by model name, architecture, or task..." 
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-600/50"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {models.map(model => (
                <div key={model.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-purple-600/50 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-purple-600/20 group-hover:text-purple-400 transition-all">
                      <Rocket size={24} />
                    </div>
                    <span className="bg-green-500/10 text-green-500 text-xs font-bold px-2 py-1 rounded tracking-wider uppercase">Active</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{model.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">High-performance AI inference with verified outputs and deterministic hashing.</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                    <div>
                      <span className="text-slate-500 text-xs block mb-1 uppercase tracking-tighter">Price per run</span>
                      <span className="font-bold text-lg">{model.price_per_run} USDC</span>
                    </div>
                    <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-bold text-sm transition-all shadow-lg shadow-purple-600/20">
                      Run Inference
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export const App = () => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);
    const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <Dashboard />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
