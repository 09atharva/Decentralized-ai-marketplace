import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import { BrowserProvider } from 'ethers';

export default function Web3Test() {
    const [account, setAccount] = useState(null);
    const [error, setError] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const provider = new BrowserProvider(window.ethereum);
                const accounts = await provider.send("eth_requestAccounts", []);
                setAccount(accounts[0]);
                setError(null);
            } catch (err) {
                setError("Failed to connect wallet: " + err.message);
            }
        } else {
            setError("Please install MetaMask!");
        }
    };

    return (
        <>
            <Head title="Web3 Test" />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    <h1 className="text-2xl font-bold mb-4">Web3 + Laravel Setup</h1>
                    
                    {account ? (
                        <div className="p-4 bg-green-100 text-green-700 rounded mb-4">
                            Connected: {account}
                        </div>
                    ) : (
                        <button
                            onClick={connectWallet}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Connect Wallet
                        </button>
                    )}

                    {error && (
                        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
                            {error}
                        </div>
                    )
                    }

                    <div className="mt-6">
                        <h2 className="text-lg font-semibold">Project Structure</h2>
                        <ul className="list-disc ml-5 mt-2">
                            <li>Laravel (Backend & API)</li>
                            <li>PostgreSQL (Database)</li>
                            <li>Hardhat (Smart Contracts in /hardhat)</li>
                            <li>Inertia.js + React (Frontend)</li>
                            <li>Ethers.js (Web3 interaction)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
