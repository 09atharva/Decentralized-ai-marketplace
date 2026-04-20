import React from 'react';
import { Wallet, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Vault() {
  return (
    <div className="page-enter">
      <div style={{ marginBottom: '3rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>Yield Vault</h1>
        <p style={{ color: 'rgb(148 163 184)' }}>Power the network while earning yield on your USDC/SOL.</p>
      </div>

      <div className="grid-12" style={{ gap: '2rem' }}>
        <div className="glass-card col-span-8" style={{ padding: '2.5rem', borderRadius: 'var(--radius-3xl)', background: 'linear-gradient(135deg, rgba(79,70,229,0.1), transparent)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Liquidity Optimization</h3>
                <span style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-xl)', background: 'rgba(20,241,149,0.1)', color: '#14F195', fontSize: 12, fontWeight: 700 }}>LIVE ON SOLANA</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', marginBottom: 8 }}>Total Locked</p>
                    <p style={{ fontSize: '1.75rem', fontWeight: 900 }}>$1.2M <span style={{ fontSize: 12, fontWeight: 400 }}>USDC</span></p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', marginBottom: 8 }}>Current APY</p>
                    <p style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--primary)' }}>8.5%</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', marginBottom: 8 }}>Net Earned</p>
                    <p style={{ fontSize: '1.75rem', fontWeight: 900, color: '#14F195' }}>$0.00</p>
                </div>
            </div>

            <div style={{ background: 'var(--surface-container-low)', padding: '2rem', borderRadius: 'var(--radius-2xl)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h4 style={{ fontWeight: 700, marginBottom: 8 }}>Auto-Compound Engine</h4>
                    <p style={{ fontSize: 12, color: 'rgb(100 116 139)' }}>Your funds are automatically routed to Meteora for maximum capital efficiency.</p>
                </div>
                <button style={{ padding: '0.75rem 2rem', borderRadius: 'var(--radius-xl)', background: '#fff', color: '#000', fontWeight: 700, border: 'none', cursor: 'pointer' }}>Deposit Now</button>
            </div>
        </div>

        <div className="col-span-4 space-y-4">
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-2xl)' }}>
                <ShieldCheck style={{ color: 'var(--tertiary)', marginBottom: 12 }} />
                <h5 style={{ fontWeight: 700, marginBottom: 4 }}>Secured by Anchor</h5>
                <p style={{ fontSize: 11, color: 'rgb(100 116 139)' }}>Smart contracts are audited and verified on Solana Mainnet-beta.</p>
            </div>
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: 'var(--radius-2xl)' }}>
                <TrendingUp style={{ color: 'var(--primary)', marginBottom: 12 }} />
                <h5 style={{ fontWeight: 700, marginBottom: 4 }}>Real-time Rebalancing</h5>
                <p style={{ fontSize: 11, color: 'rgb(100 116 139)' }}>Yield is harvested and reinvested every 60 minutes.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
