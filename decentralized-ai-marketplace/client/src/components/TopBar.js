import React from 'react';

export default function TopBar({ account, onConnect }) {
  const truncatedAccount = account
    ? `${account.slice(0, 6)}...${account.slice(-4)}`
    : null;

  return (
    <header className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 }}>
        {/* Gradient brand text — now visible */}
        <h2 className="topbar-brand">
          Ether Marketplace
        </h2>
        <div className="topbar-search">
          <span className="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search decentralized models..." />
        </div>
      </div>

      <div className="topbar-actions">
        <button className="topbar-icon-btn">
          <span className="material-symbols-outlined">notifications</span>
          <span className="notification-dot"></span>
        </button>
        <button className="topbar-icon-btn">
          <span className="material-symbols-outlined">account_balance_wallet</span>
        </button>

        {account ? (
          <button className="topbar-connect outline" style={{ color: 'var(--tertiary)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 14, marginRight: 4, verticalAlign: 'middle' }}>
              check_circle
            </span>
            {truncatedAccount}
          </button>
        ) : (
          <button className="topbar-connect outline" onClick={onConnect}>
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  );
}
