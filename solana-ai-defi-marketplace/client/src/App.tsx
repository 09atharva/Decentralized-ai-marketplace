import React, { useState, useEffect, useMemo } from 'react';
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { LayoutDashboard, Rocket, Cpu, CreditCard, Activity, TrendingUp, Wallet, ArrowRightLeft } from 'lucide-react';
import axios from 'axios';

import '@solana/wallet-adapter-react-ui/styles.css';

const API_BASE = 'http://localhost:4003';

const DeFiDashboard = () => {
  const [activeTab, setActiveTab] = useState('vault');
  const [stats, setStats] = useState({ tvl: 0, apy: 8.5, protocol: 'Meteora' });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get(`${API_BASE}/defi/vault-stats`);
        setStats(res.data);
      } catch (e) {
        console.error("Failed to fetch DeFi stats");
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="flex min-h-screen bg-black text-slate-100 font-sans">
      {/* Sidebar */}
      <div className="w-72 bg-zinc-950 border-r border-zinc-900 p-8">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-600/40">
            <TrendingUp size={24} className="text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter italic">DEFI-AI</span>
        </div>

        <nav className="space-y-3">
          {[
            { id: 'vault', label: 'Yield Vault', icon: Wallet },
            { id: 'explore', label: 'AI Marketplace', icon: LayoutDashboard },
            { id: 'swap', label: 'Smart Swap', icon: ArrowRightLeft },
            { id: 'activity', label: 'Activity', icon: Activity },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl transition-all duration-300 ${
                activeTab === item.id 
                ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20' 
                : 'text-zinc-500 hover:bg-zinc-900 hover:text-zinc-200'
              }`}
            >
              <item.icon size={22} />
              <span className="font-bold tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-16">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2 uppercase italic">
              {activeTab === 'vault' && 'Capital Efficiency Vault'}
              {activeTab === 'explore' && 'AI Model Registry'}
            </h1>
            <p className="text-zinc-500 font-medium">Earn yield on idle funds while powering the next-gen AI network.</p>
          </div>
          <WalletMultiButton className="!bg-indigo-600 !hover:bg-indigo-700 !rounded-xl !h-12 !px-8 !text-base !font-bold" />
        </header>

        {activeTab === 'vault' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 hover:border-indigo-500/50 transition-colors">
                <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-2">Total Value Locked</p>
                <h2 className="text-4xl font-black text-white">${stats.tvl.toLocaleString()} <span className="text-sm font-medium text-zinc-600 ml-1">USDC</span></h2>
              </div>
              <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 hover:border-indigo-500/50 transition-colors">
                <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-2">Current Variable APY</p>
                <h2 className="text-4xl font-black text-indigo-500">{stats.apy}%</h2>
                <p className="text-xs font-bold text-zinc-700 mt-2 uppercase">Strategy: {stats.protocol}</p>
              </div>
              <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 hover:border-indigo-500/50 transition-colors">
                <p className="text-zinc-500 font-bold text-xs uppercase tracking-widest mb-2">My Lifetime Yield</p>
                <h2 className="text-4xl font-black text-emerald-500">$0.00</h2>
              </div>
            </div>

            {/* Deposit Section */}
            <div className="bg-indigo-600 rounded-3xl p-12 flex items-center justify-between shadow-2xl shadow-indigo-600/20">
              <div className="max-w-md">
                <h3 className="text-3xl font-black mb-4">Ready to fuel your AI workload?</h3>
                <p className="text-indigo-100 font-medium leading-relaxed">Deposit USDC into the vault. We'll automatically route it to Meteora yield pools until you're ready to run an inference job.</p>
              </div>
              <div className="flex gap-4">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-zinc-100 transition-colors">Deposit USDC</button>
                <button className="bg-indigo-700 text-white border border-indigo-400/30 px-8 py-4 rounded-2xl font-black uppercase tracking-tighter hover:bg-indigo-800 transition-colors">Withdraw</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'explore' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[
               { name: 'Grok-1 (LTS)', price: 0.15, tasks: 'Reasoning' },
               { name: 'Stable Diffusion 3', price: 0.25, tasks: 'Image Gen' },
               { name: 'Sora-Lite', price: 1.50, tasks: 'Video Gen' },
             ].map((model, idx) => (
               <div key={idx} className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 group hover:bg-zinc-900 transition-all cursor-pointer">
                  <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                    <Rocket size={24} className="group-hover:text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-2">{model.name}</h3>
                  <span className="inline-block bg-zinc-800 text-zinc-400 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest mb-6">{model.tasks}</span>
                  <div className="flex justify-between items-center pt-6 border-t border-zinc-900">
                    <span className="text-xl font-bold">${model.price} <span className="text-xs text-zinc-500">per job</span></span>
                    <button className="bg-white text-black px-6 py-2 rounded-xl font-black text-sm uppercase tracking-tighter hover:bg-indigo-600 hover:text-white transition-all">Run Job</button>
                  </div>
               </div>
             ))}
          </div>
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
                    <DeFiDashboard />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;
