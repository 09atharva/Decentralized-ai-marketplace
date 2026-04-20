import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { BrowserProvider } from 'ethers';

import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';

import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import ExploreModels from './pages/ExploreModels';
import ModelDetail from './pages/ModelDetail';
import JobsHistory from './pages/JobsHistory';
import PaymentsBalance from './pages/PaymentsBalance';
import UploadModel from './pages/UploadModel';
import NodeOperatorDashboard from './pages/NodeOperatorDashboard';

function AppShell({ account, connectWallet, children }) {
  return (
    <div className="layout-shell">
      <Sidebar />
      <TopBar account={account} onConnect={connectWallet} />
      <main className="main-content">
        {children}
      </main>
      {/* Ambient blobs */}
      <div className="ambient-blob" style={{ bottom: 40, right: 40, width: 256, height: 256, background: 'rgba(173,198,255,0.05)', opacity: 0.2 }} />
      <div className="ambient-blob" style={{ top: '50%', left: '25%', width: 384, height: 384, background: 'rgba(221,183,255,0.05)', opacity: 0.1 }} />
    </div>
  );
}

function App() {
  const [account, setAccount] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (err) {
        console.error('Wallet connection failed:', err);
      }
    } else {
      alert('Please install MetaMask to connect your wallet.');
    }
  };

  return (
    <Router>
      <Routes>
        {/* Landing page — full-width, no sidebar */}
        <Route path="/" element={<LandingPage onConnect={connectWallet} />} />

        {/* All app pages — with sidebar + topbar shell */}
        <Route path="/dashboard" element={<AppShell account={account} connectWallet={connectWallet}><Dashboard /></AppShell>} />
        <Route path="/marketplace" element={<AppShell account={account} connectWallet={connectWallet}><ExploreModels /></AppShell>} />
        <Route path="/model/:id" element={<AppShell account={account} connectWallet={connectWallet}><ModelDetail /></AppShell>} />
        <Route path="/jobs" element={<AppShell account={account} connectWallet={connectWallet}><JobsHistory /></AppShell>} />
        <Route path="/payments" element={<AppShell account={account} connectWallet={connectWallet}><PaymentsBalance /></AppShell>} />
        <Route path="/upload" element={<AppShell account={account} connectWallet={connectWallet}><UploadModel /></AppShell>} />
        <Route path="/nodes" element={<AppShell account={account} connectWallet={connectWallet}><NodeOperatorDashboard /></AppShell>} />
        <Route path="*" element={<AppShell account={account} connectWallet={connectWallet}><Dashboard /></AppShell>} />
      </Routes>
    </Router>
  );
}

export default App;
