import { Head, Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Wallet, Cpu, Zap, Shield, Globe, Layers } from 'lucide-react';

export default function Welcome({ auth }) {
    const [ethAddress, setEthAddress] = useState(null);
    const [solAddress, setSolAddress] = useState(null);

    const connectMetaMask = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setEthAddress(accounts[0]);
            } catch (err) {
                console.error("MetaMask connection failed", err);
            }
        } else {
            alert("Please install MetaMask");
        }
    };

    const connectPhantom = async () => {
        const { solana } = window;
        if (solana && solana.isPhantom) {
            try {
                const response = await solana.connect();
                setSolAddress(response.publicKey.toString());
            } catch (err) {
                console.error("Phantom connection failed", err);
            }
        } else {
            alert("Please install Phantom wallet");
        }
    };

    return (
        <>
            <Head title="Omni AI Marketplace Hub" />
            <div className="min-h-screen bg-[#0a0a0c] text-white selection:bg-purple-500 selection:text-white">
                {/* Background Glow */}
                <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    {/* Header */}
                    <header className="flex justify-between items-center py-8 border-b border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                                <Cpu className="size-6 text-white" />
                            </div>
                            <span className="text-xl font-bold tracking-tight">OMNI AI HUB</span>
                        </div>
                        <div className="flex gap-4">
                            {!ethAddress ? (
                                <button onClick={connectMetaMask} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition text-sm font-medium">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Mirror.svg" className="size-4" />
                                    Connect MetaMask
                                </button>
                            ) : (
                                <div className="px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-xs font-mono">
                                    {ethAddress.slice(0, 6)}...{ethAddress.slice(-4)}
                                </div>
                            )}
                            {!solAddress ? (
                                <button onClick={connectPhantom} className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition text-sm font-medium">
                                    <Zap className="size-4 text-purple-400" />
                                    Connect Phantom
                                </button>
                            ) : (
                                <div className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-xs font-mono">
                                    {solAddress.slice(0, 4)}...{solAddress.slice(-4)}
                                </div>
                            )}
                        </div>
                    </header>

                    {/* Hero Section */}
                    <section className="py-20 text-center">
                        <h1 className="text-6xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                            The Multi-Chain AI <br /> Economy is Here.
                        </h1>
                        <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
                            Access decentralized compute and AI models across Polygon and Solana. 
                            Deploy, run, and monetize AI in a permissionless world.
                        </p>
                    </section>

                    {/* Marketplace Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
                        {/* Polygon Card */}
                        <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                            <div className="relative">
                                <div className="size-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6">
                                    <Layers className="text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Polygon AI</h3>
                                <p className="text-white/40 mb-8 text-sm leading-relaxed">
                                    Enterprise-grade models running on Polygon/Ethereum. Low-latency inference with BullMQ orchestration.
                                </p>
                                <a href="http://localhost:3005" className="inline-flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-purple-300 transition">
                                    ENTER MARKETPLACE <Zap className="size-4" />
                                </a>
                            </div>
                        </div>

                        {/* Solana Card */}
                        <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-teal-500/50 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-b from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                            <div className="relative">
                                <div className="size-12 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-6">
                                    <Zap className="text-teal-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">Solana AI</h3>
                                <p className="text-white/40 mb-8 text-sm leading-relaxed">
                                    Ultra-fast, high-performance AI jobs. Leveraging Solana's low fees and instant finality for real-time applications.
                                </p>
                                <a href="http://localhost:5174" className="inline-flex items-center gap-2 text-sm font-bold text-teal-400 hover:text-teal-300 transition">
                                    ENTER MARKETPLACE <Zap className="size-4" />
                                </a>
                            </div>
                        </div>

                        {/* Solana DeFi Card */}
                        <div className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                            <div className="relative">
                                <div className="size-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6">
                                    <Globe className="text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">AI DeFi Labs</h3>
                                <p className="text-white/40 mb-8 text-sm leading-relaxed">
                                    Specialized financial AI models. Hedge fund strategies, predictive analytics, and algorithmic trading via Solana.
                                </p>
                                <button className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition">
                                    COMING SOON <Shield className="size-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-20 py-10 border-t border-white/5">
                        <div className="text-center">
                            <div className="text-3xl font-bold">1.2M</div>
                            <div className="text-white/30 text-xs uppercase tracking-widest mt-1">Inferences</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">450+</div>
                            <div className="text-white/30 text-xs uppercase tracking-widest mt-1">AI Models</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">$4.2M</div>
                            <div className="text-white/30 text-xs uppercase tracking-widest mt-1">Revenue Shared</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
