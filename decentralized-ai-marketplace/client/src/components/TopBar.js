import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function TopBar({ account, onConnect }) {
  const truncatedAccount = account
    ? `${account.slice(0, 6)}...${account.slice(-4)}`
    : null;

  return (
    <header className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
        {/* Gradient brand text — now visible */}
        <h2 className="topbar-brand">
          Omni Marketplace
        </h2>
        <div className="topbar-search">
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search multi-chain models..." />
        </div>
      </div>

      <div className="topbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button className="topbar-icon-btn">
          <span className="material-symbols-outlined">notifications</span>
          <span className="notification-dot"></span>
        </button>

        {/* Multi-Chain Wallet Connection */}
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          {/* Ethereum Connection */}
          {account ? (
            <button className="topbar-connect outline" style={{ color: 'var(--tertiary)', padding: '0.5rem 1rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }}>
                token
              </span>
              {truncatedAccount}
            </button>
          ) : (
            <button className="topbar-connect outline" onClick={onConnect} style={{ padding: '0.5rem 1rem' }}>
              Connect EVM
            </button>
          )}

          {/* Solana Connection */}
          <WalletMultiButton className="solana-wallet-button" style={{ 
            height: '38px', 
            fontSize: '14px', 
            backgroundColor: '#512da8',
            borderRadius: '20px',
            lineHeight: '38px'
          }} />
        </div>
      </div>
    </header>
  );
}
