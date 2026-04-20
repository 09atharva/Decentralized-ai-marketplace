import React from 'react';

const activityItems = [
  { icon: 'bolt', iconColor: '#14F195', title: 'Solana Inference Complete', sub: 'SolanaLlama-8B processed job #9921 on devnet.', amount: '+0.25 SOL', amountColor: '#14F195', time: 'Just now' },
  { icon: 'cloud_done', iconColor: 'var(--primary)', title: 'LLM-Crystal-70B Deployed', sub: 'Fine-tuning complete. Model live on Ethereum.', amount: '+0.45 ETH', amountColor: 'var(--tertiary)', time: '2 mins ago' },
  { icon: 'shopping_cart', iconColor: 'var(--secondary)', title: 'License Purchased', sub: 'Node Cluster #42 purchased commercial usage for Vision-v4.', amount: '+12.20 ETH', amountColor: 'var(--tertiary)', time: '45 mins ago' },
  { icon: 'sync_alt', iconColor: 'var(--outline)', title: 'Node Synchronization', sub: 'Registry update: 1,402 new validator nodes detected.', amount: '---', amountColor: 'rgb(148 163 184)', time: '2 hours ago' },
];

export default function Dashboard() {
  return (
    <div className="page-enter">
      {/* Header */}
      <section style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <p style={{ color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.15em', fontSize: 10, textTransform: 'uppercase', marginBottom: 4 }}>
            Omni Developer Overview
          </p>
          <h3 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.04em' }}>Workspace Terminal</h3>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div style={{
            background: 'var(--surface-container)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-xl)',
            display: 'flex', alignItems: 'center', gap: '0.5rem'
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tertiary)', boxShadow: '0 0 8px var(--tertiary)' }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--tertiary)' }}>Network Status: Optimal</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid-12" style={{ marginBottom: '2.5rem' }}>
        {[
          { icon: 'payments', iconBg: 'rgba(173,198,255,0.1)', iconColor: 'var(--primary)', label: 'EVM Earnings', value: '142.85 ETH', badge: '+12.5%', badgeColor: 'var(--tertiary)', badgeBg: 'rgba(60,221,199,0.1)', sub: 'verified', glowColor: 'var(--primary)' },
          { icon: 'bolt', iconBg: 'rgba(20,241,149,0.1)', iconColor: '#14F195', label: 'Solana Earnings', value: '1,240.50 SOL', badge: '+24.1%', badgeColor: '#14F195', badgeBg: 'rgba(20,241,149,0.1)', glowColor: '#14F195' },
          { icon: 'api', iconBg: 'rgba(221,183,255,0.1)', iconColor: 'var(--secondary)', label: 'Total API Calls', value: '8.2M', badge: 'Real-time', badgeColor: 'var(--secondary)', badgeBg: 'rgba(221,183,255,0.1)', glowColor: 'var(--secondary)' },
        ].map((stat, i) => (
          <div key={i} className="stat-card col-span-4" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{ padding: '0.5rem', background: stat.iconBg, color: stat.iconColor, borderRadius: 'var(--radius-xl)' }}>
                  <span className="material-symbols-outlined">{stat.icon}</span>
                </span>
                <span style={{ fontSize: 10, fontWeight: 700, color: stat.badgeColor, background: stat.badgeBg, padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)' }}>
                  {stat.badge}
                </span>
              </div>
              <p className="stat-label">{stat.label}</p>
              <h4 className="stat-value">{stat.value}</h4>
              
              {i === 2 && (
                <div style={{ display: 'flex', gap: 4, height: 4, marginTop: '1rem' }}>
                  {[0.4, 0.6, 0.2, 0.8, 1].map((o, j) => (
                    <div key={j} style={{ flex: 1, background: `rgba(221,183,255,${o})`, borderRadius: 999 }} />
                  ))}
                </div>
              )}
            </div>
            <div className="ambient-glow" style={{ background: stat.glowColor }} />
          </div>
        ))}
      </section>

      {/* Main Content */}
      <div className="grid-12">
        {/* Activity Feed */}
        <section className="col-span-8">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h5 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>Cross-Chain Activity</h5>
            <button style={{ fontSize: 12, fontWeight: 700, color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer' }}>View Ledger</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {activityItems.map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1rem', background: i % 2 === 0 ? 'var(--surface-container-lowest)' : 'var(--surface-container-low)',
                borderRadius: 'var(--radius-xl)', transition: 'background-color 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => e.currentTarget.style.background = i % 2 === 0 ? 'var(--surface-container-low)' : 'var(--surface-container-high)'}
              onMouseLeave={e => e.currentTarget.style.background = i % 2 === 0 ? 'var(--surface-container-lowest)' : 'var(--surface-container-low)'}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 'var(--radius-sm)',
                    background: 'var(--surface-container-highest)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: item.iconColor
                  }}>
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h6 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>{item.title}</h6>
                    <p style={{ fontSize: 12, color: 'rgb(100 116 139)' }}>{item.sub}</p>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="font-mono" style={{ display: 'block', fontSize: '0.875rem', color: item.amountColor }}>{item.amount}</span>
                  <span style={{ fontSize: 10, color: 'rgb(75 85 99)', textTransform: 'uppercase', fontWeight: 700 }}>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Model — Solana focus */}
        <section className="col-span-4">
          <div style={{
            background: 'var(--surface-container-highest)', borderRadius: 'var(--radius-3xl)',
            overflow: 'hidden', position: 'relative'
          }}>
            <div style={{ position: 'relative', height: 192, overflow: 'hidden' }}>
              <img
                src="/images/card-fractal.png"
                alt="Solana-Llama Turbo"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5,
                  transition: 'transform 0.7s ease'
                }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface-container-highest), rgba(39,42,49,0.6), transparent)' }} />
            </div>
            <div style={{ padding: '1.5rem', position: 'relative' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(20,241,149,0.2)', color: '#14F195', fontSize: 8, fontWeight: 900, textTransform: 'uppercase', borderRadius: 'var(--radius-sm)' }}>Solana Devnet</span>
                <span style={{ padding: '0.25rem 0.5rem', background: 'var(--tertiary-container)', color: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 8, fontWeight: 900, textTransform: 'uppercase' }}>High Speed</span>
              </div>
              <h5 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#fff', marginBottom: '0.5rem', lineHeight: 1.2 }}>
                SolanaLlama-8B Turbo
              </h5>
              <p style={{ fontSize: 12, color: 'rgb(148 163 184)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Native Solana model with sub-second inference. Powered by the Anchor Escrow protocol.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <div>
                  <p style={{ fontSize: 10, fontWeight: 700, color: 'rgb(100 116 139)', textTransform: 'uppercase' }}>Fee</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: 900, color: '#14F195' }}>
                    0.05 SOL <span style={{ fontSize: 10, color: 'rgb(148 163 184)', fontWeight: 400 }}>/ run</span>
                  </p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: 'rgb(100 116 139)', textTransform: 'uppercase' }}>Network</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: 900, color: 'var(--tertiary)' }}>Solana</p>
                </div>
              </div>
              <button style={{
                width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-xl)', fontWeight: 700,
                background: '#14F195', border: 'none',
                color: '#000', cursor: 'pointer', transition: 'all 0.2s ease'
              }}>
                Launch Solana Node
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
