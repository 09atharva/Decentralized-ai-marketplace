import React from 'react';

const txData = [
  { id: 'TX-9042-1X9A', status: 'Completed', statusColor: 'var(--tertiary)', type: 'Compute Payout', method: 'L1 Ethereum', methodIcon: 'token', date: 'Oct 12, 2023 14:22', amount: '+0.45 ETH', amountColor: 'var(--on-surface)' },
  { id: 'TX-8113-5V6B', status: 'Completed', statusColor: 'var(--tertiary)', type: 'Model Licensing', method: 'Internal Credit', methodIcon: 'payments', date: 'Oct 10, 2023 09:15', amount: '-0.12 ETH', amountColor: 'var(--error)' },
  { id: 'TX-7552-8K0L', status: 'Pending', statusColor: 'var(--secondary)', type: 'Compute Payout', method: 'L1 Ethereum', methodIcon: 'token', date: 'Oct 08, 2023 21:40', amount: '+1.24 ETH', amountColor: 'var(--on-surface)' },
  { id: 'TX-6221-3Q2M', status: 'Completed', statusColor: 'var(--tertiary)', type: 'Deposit', method: 'MetaMask', methodIcon: 'account_balance_wallet', date: 'Oct 05, 2023 11:05', amount: '+10.00 ETH', amountColor: 'var(--on-surface)' },
];

export default function PaymentsBalance() {
  return (
    <div className="page-enter" style={{ maxWidth: '80rem', margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 900, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
          Ether Marketplace <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>/</span> Payments
        </h2>
        <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', maxWidth: '32rem' }}>
          Manage your compute credits, view real-time node earnings, and settle transaction balances.
        </p>
      </div>

      <div className="grid-12">
        {/* Balance Card */}
        <div className="col-span-8 stat-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: 256, height: 256, background: 'rgba(173,198,255,0.05)', filter: 'blur(100px)', margin: '-8rem -8rem 0 0' }} />
          <div style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary)', display: 'block', marginBottom: '0.5rem' }}>Total Compute Power</span>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.04em' }}>42.850</span>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--secondary)' }}>ETH</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', marginTop: '0.5rem' }}>≈ $112,403.12 USD</p>
            </div>
            <div style={{ background: 'var(--surface-container-lowest)', padding: '1rem', borderRadius: 'var(--radius-2xl)', border: '1px solid rgba(70,69,84,0.1)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.875rem', color: 'var(--tertiary)' }}>account_balance</span>
            </div>
          </div>
          <div style={{ position: 'relative', zIndex: 10, marginTop: '3rem', display: 'flex', gap: '1rem' }}>
            <button className="btn-pulse" style={{
              flex: 1, padding: '1rem', borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              boxShadow: '0 0 20px rgba(173,198,255,0.15)'
            }}>
              <span className="material-symbols-outlined filled">arrow_upward</span>
              Withdraw Funds
            </button>
            <button className="btn-ghost" style={{
              padding: '1rem 2rem', borderRadius: 'var(--radius-xl)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem'
            }}>
              <span className="material-symbols-outlined">add</span>
              Deposit
            </button>
          </div>
        </div>

        {/* Secondary Stats */}
        <div className="col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ background: 'var(--surface-container-low)', borderRadius: 'var(--radius-2xl)', padding: '1.5rem', border: '1px solid rgba(70,69,84,0.05)' }}>
            <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--on-surface-variant)', display: 'block', marginBottom: '1rem' }}>Pending Rewards</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--tertiary)' }}>1.24 ETH</span>
              <span style={{ fontSize: 12, background: 'rgba(60,221,199,0.1)', color: 'var(--tertiary)', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>Processing</span>
            </div>
            <div className="compute-track" style={{ marginTop: '1.5rem' }}>
              <div className="compute-fill" style={{ width: '70%' }} />
            </div>
          </div>
          <div style={{ background: 'var(--surface-container-low)', borderRadius: 'var(--radius-2xl)', padding: '1.5rem', border: '1px solid rgba(70,69,84,0.05)' }}>
            <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--on-surface-variant)', display: 'block', marginBottom: '1rem' }}>Next Payout</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>Oct 24, 2023</span>
              <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>calendar_today</span>
            </div>
            <p style={{ fontSize: 12, color: 'var(--on-surface-variant)', marginTop: '0.5rem' }}>Automatically dispersed to your wallet.</p>
          </div>
        </div>

        {/* Transaction History */}
        <div className="col-span-12">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Transaction History</h3>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn-ghost" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: 12, fontWeight: 700 }}>Export CSV</button>
              <button className="btn-ghost" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', fontSize: 12, fontWeight: 700 }}>Filters</button>
            </div>
          </div>
          <div style={{ overflow: 'hidden', borderRadius: 'var(--radius-2xl)', background: 'var(--surface-container-lowest)' }}>
            <table className="ether-table">
              <thead>
                <tr>
                  <th>Transaction ID</th>
                  <th>Status</th>
                  <th>Type</th>
                  <th>Method</th>
                  <th>Date</th>
                  <th style={{ textAlign: 'right' }}>Amount</th>
                </tr>
              </thead>
              <tbody>
                {txData.map((tx, i) => (
                  <tr key={i}>
                    <td className="font-mono" style={{ fontSize: 12, color: 'var(--primary)' }}>{tx.id}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: tx.statusColor }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: tx.statusColor }} />
                        <span style={{ fontSize: 12, fontWeight: 500 }}>{tx.status}</span>
                      </div>
                    </td>
                    <td style={{ fontSize: '0.875rem' }}>{tx.type}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="material-symbols-outlined" style={{ fontSize: 14 }}>{tx.methodIcon}</span>
                        <span style={{ fontSize: 12, color: 'var(--on-surface-variant)' }}>{tx.method}</span>
                      </div>
                    </td>
                    <td style={{ fontSize: 12, color: 'var(--on-surface-variant)' }}>{tx.date}</td>
                    <td style={{ textAlign: 'right', fontWeight: 700, color: tx.amountColor }}>{tx.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Billing Info */}
        <div className="col-span-12 glass-panel" style={{
          borderRadius: 'var(--radius-3xl)', padding: '2rem', display: 'flex', alignItems: 'center',
          gap: '2rem', border: '1px solid rgba(70,69,84,0.1)', flexWrap: 'wrap'
        }}>
          <div style={{ flex: 1, minWidth: 300 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>verified_user</span>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Verified Payout Wallet</h4>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Your funds are being sent to <span className="font-mono" style={{ color: 'var(--primary)', background: 'var(--surface-container-lowest)', padding: '2px 8px', borderRadius: 'var(--radius-sm)' }}>0x71C...492b</span>. Ensure this address is correct before proceeding.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button style={{ fontSize: 12, fontWeight: 700, color: 'var(--secondary)', textTransform: 'uppercase', letterSpacing: '0.15em', background: 'none', border: 'none', cursor: 'pointer' }}>Update Address</button>
              <button style={{ fontSize: 12, fontWeight: 700, color: 'var(--on-surface-variant)', textTransform: 'uppercase', letterSpacing: '0.15em', background: 'none', border: 'none', cursor: 'pointer' }}>View on Etherscan</button>
            </div>
          </div>
          <div style={{ width: 1, height: 96, background: 'rgba(70,69,84,0.1)' }} />
          <div style={{ width: 256 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, marginBottom: '0.5rem' }}>
              <span style={{ color: 'var(--on-surface-variant)' }}>Daily Limit</span>
              <span>50.0 ETH</span>
            </div>
            <div style={{ width: '100%', height: 8, background: 'var(--surface-container-highest)', borderRadius: 999, overflow: 'hidden' }}>
              <div style={{ height: '100%', background: 'var(--primary)', width: '85.7%' }} />
            </div>
            <p style={{ fontSize: 10, textAlign: 'center', color: 'var(--on-surface-variant)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
              85.7% of daily quota remaining
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
