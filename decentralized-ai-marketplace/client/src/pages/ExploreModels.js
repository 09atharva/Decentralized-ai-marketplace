import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['All', 'NLP', 'Vision', 'Audio', 'Code'];
const networks = ['All', 'Ethereum', 'Solana'];

const modelsData = [
  { id: 1, name: 'Ether-70B Quantum', owner: 'neural_labs.eth', price: '0.0042 ETH', network: 'Ethereum', tags: ['NLP', 'Reasoning'], desc: 'Ultra-low latency model optimized for recursive reasoning and synthetic data generation.', featured: true },
  { id: 2, name: 'Vision-X Pro', owner: 'synth_architect', price: '0.0008 ETH', network: 'Ethereum', tags: ['Computer Vision', 'Object Detection'] },
  { id: 6, name: 'SolanaLlama-8B', owner: 'sol_dev.sol', price: '0.25 SOL', network: 'Solana', tags: ['NLP', 'Fast'], desc: 'Hyper-fast inference on Solana Devnet.' },
  { id: 8, name: 'Grok-1 (LTS)', owner: 'x-ai.sol', price: '1.50 SOL', network: 'Solana', tags: ['Reasoning', 'DeFi'], desc: 'Enterprise-grade reasoning model for complex financial analysis.' },
  { id: 9, name: 'Stable Diffusion 3', owner: 'creative.sol', price: '0.50 SOL', network: 'Solana', tags: ['Image Gen', 'Media'], desc: 'High-fidelity image generation powered by decentralized GPU nodes.' },
  { id: 3, name: 'AudioGen v2', owner: 'echo_systems', price: '0.0015 ETH', network: 'Ethereum', tags: ['Audio', 'Synthesis'] },
  { id: 7, name: 'SerumPredict AI', owner: 'defi_whale', price: '0.50 SOL', network: 'Solana', tags: ['Finance', 'Predictions'] },
  { id: 10, name: 'Sora-Lite', owner: 'video.sol', price: '5.00 SOL', network: 'Solana', tags: ['Video Gen', 'Media'], desc: 'Text-to-video generation using ultra-high compute clusters.' },
  { id: 4, name: 'LogicGrid 7B', owner: 'logic_foundry', price: '0.0005 ETH', network: 'Ethereum', tags: ['Code', 'Fine-tuned'] },
];

export default function ExploreModels() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeNetwork, setActiveNetwork] = useState('All');
  const navigate = useNavigate();

  const filteredModels = modelsData.filter(m => 
    (activeCategory === 'All' || m.tags.includes(activeCategory)) &&
    (activeNetwork === 'All' || m.network === activeNetwork)
  );

  return (
    <div className="page-enter">
      {/* Hero Header */}
      <div style={{ marginBottom: '3rem', maxWidth: '48rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
          Omni Marketplace
        </h1>
        <p style={{ color: 'rgb(148 163 184)', fontSize: '1.125rem', lineHeight: 1.6, fontWeight: 300 }}>
          Securely deploy and exchange high-compute intelligence across Ethereum and Solana. Access the world's most performant synthetic brains on any chain.
        </p>
      </div>

      {/* Filter Bar */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem',
        padding: '0.5rem', background: 'rgba(25,28,34,0.5)', borderRadius: 'var(--radius-3xl)', backdropFilter: 'blur(8px)'
      }}>
        {/* Category Filter */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', padding: '0 0.5rem' }}>Category:</span>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-2xl)', fontSize: 11, fontWeight: 600, border: 'none', cursor: 'pointer',
              background: activeCategory === cat ? 'rgba(111,0,190,0.2)' : 'var(--surface-container-high)',
              color: activeCategory === cat ? 'var(--on-secondary-container)' : 'rgb(148 163 184)',
            }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Network Filter */}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1rem' }}>
          <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--tertiary)', textTransform: 'uppercase', padding: '0 0.5rem' }}>Chain:</span>
          {networks.map(net => (
            <button key={net} onClick={() => setActiveNetwork(net)} style={{
              padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-2xl)', fontSize: 11, fontWeight: 600, border: 'none', cursor: 'pointer',
              background: activeNetwork === net ? 'rgba(111,0,190,0.2)' : 'var(--surface-container-high)',
              color: activeNetwork === net ? 'var(--tertiary)' : 'rgb(148 163 184)',
            }}>
              {net}
            </button>
          ))}
        </div>

        <div style={{ marginLeft: 'auto', padding: '0 1rem', fontSize: 12, color: 'rgb(100 116 139)', fontWeight: 500 }}>
          Showing {filteredModels.length} Models
        </div>
      </div>

      {/* Model Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {filteredModels.map(model => (
          <div key={model.id} className="glass-card" style={{
            borderRadius: 'var(--radius-3xl)', padding: '1.5rem', cursor: 'pointer',
            transition: 'all 0.3s ease',
            border: model.featured ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.05)'
          }}
          onClick={() => navigate(`/model/${model.id}`)}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-container-high)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(50,53,60,0.4)'}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 'var(--radius-2xl)', 
                background: model.network === 'Solana' ? 'rgba(20,241,149,0.1)' : 'rgba(111,0,190,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <span className="material-symbols-outlined" style={{ 
                  color: model.network === 'Solana' ? '#14F195' : 'var(--primary)',
                  fontSize: 24
                }}>
                  {model.network === 'Solana' ? 'bolt' : 'hub'}
                </span>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>{model.name}</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: 9, color: model.network === 'Solana' ? '#14F195' : '#8B5CF6', fontWeight: 800 }}>{model.network.toUpperCase()}</span>
                    <span style={{ fontSize: 10, color: 'rgb(100 116 139)' }}>By {model.owner}</span>
                </div>
              </div>
              <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <span style={{ display: 'block', fontSize: 10, color: 'rgb(100 116 139)' }}>Price</span>
                <span className="font-mono" style={{ fontSize: 12, color: 'var(--tertiary)', fontWeight: 700 }}>{model.price}</span>
              </div>
            </div>
            
            <p style={{ fontSize: '0.8rem', color: 'rgb(148 163 184)', marginBottom: '1.25rem', height: '2.4rem', overflow: 'hidden' }}>
                {model.desc || "Decentralized AI inference model running securely on-chain."}
            </p>

            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.5rem' }}>
              {model.tags.map(tag => (
                <span key={tag} className="badge badge-category" style={{ fontSize: 8, padding: '2px 8px' }}>{tag}</span>
              ))}
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgb(100 116 139)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>verified</span>
                <span style={{ fontSize: 10 }}>Trust Score: 98%</span>
              </div>
              <button style={{
                padding: '0.4rem 1.2rem', borderRadius: 'var(--radius-xl)',
                background: 'var(--primary)',
                border: 'none',
                fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                color: '#fff', cursor: 'pointer'
              }}>
                Run Inference
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
