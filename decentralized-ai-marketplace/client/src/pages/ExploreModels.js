import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const categories = ['All', 'NLP', 'Vision', 'Audio', 'Code'];

const modelsData = [
  { id: 1, name: 'Ether-70B Quantum', owner: 'neural_labs.eth', price: '0.0042 ETH', tags: ['NLP', 'Reasoning'], desc: 'Ultra-low latency model optimized for recursive reasoning and synthetic data generation. Built on the GQA framework with 128k context window.', featured: true },
  { id: 2, name: 'Vision-X Pro', owner: 'synth_architect', price: '0.0008 ETH', tags: ['Computer Vision', 'Object Detection'] },
  { id: 3, name: 'AudioGen v2', owner: 'echo_systems', price: '0.0015 ETH', tags: ['Audio', 'Synthesis'] },
  { id: 4, name: 'LogicGrid 7B', owner: 'logic_foundry', price: '0.0005 ETH', tags: ['Code', 'Fine-tuned'] },
  { id: 5, name: 'GeoParse Engine', owner: 'terra_map', price: '0.0012 ETH', tags: ['Geo-spatial', 'Vision'] },
];

export default function ExploreModels() {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  return (
    <div className="page-enter">
      {/* Hero Header */}
      <div style={{ marginBottom: '3rem', maxWidth: '48rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
          Neural Marketplace
        </h1>
        <p style={{ color: 'rgb(148 163 184)', fontSize: '1.125rem', lineHeight: 1.6, fontWeight: 300 }}>
          Securely deploy and exchange high-compute intelligence. From LLMs to Computer Vision, browse the ether for the most performant synthetic brains.
        </p>
      </div>

      {/* Filter Bar */}
      <div style={{
        display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem',
        padding: '0.5rem', background: 'rgba(25,28,34,0.5)', borderRadius: 'var(--radius-3xl)', backdropFilter: 'blur(8px)'
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem',
          background: 'var(--surface-container-high)', borderRadius: 'var(--radius-2xl)',
          fontSize: 12, fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.15em', textTransform: 'uppercase'
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>filter_list</span>
          Category
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '0.5rem 1rem', borderRadius: 'var(--radius-2xl)', fontSize: 12, fontWeight: 600, border: 'none', cursor: 'pointer',
              background: activeCategory === cat ? 'rgba(111,0,190,0.2)' : 'var(--surface-container-high)',
              color: activeCategory === cat ? 'var(--on-secondary-container)' : 'rgb(148 163 184)',
              transition: 'all 0.2s ease'
            }}>
              {cat}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: 'auto', padding: '0 1rem', fontSize: 12, color: 'rgb(100 116 139)', fontWeight: 500 }}>
          Showing {modelsData.length} Models
        </div>
      </div>

      {/* Model Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Featured Card */}
        <div className="glass-card" style={{
          gridColumn: 'span 2', borderRadius: 'var(--radius-3xl)', overflow: 'hidden',
          display: 'flex', minHeight: 320, cursor: 'pointer'
        }}
        onClick={() => navigate('/model/1')}>
          <div style={{
            width: '40%', position: 'relative', background: 'var(--surface-container-lowest)',
            overflow: 'hidden'
          }}>
            <img src="/images/hero-neural.png" alt="Ether-70B Quantum" style={{
              width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6,
              transition: 'opacity 0.3s ease, transform 0.5s ease'
            }}
            onMouseEnter={e => { e.target.style.opacity = '1'; e.target.style.transform = 'scale(1.05)'; }}
            onMouseLeave={e => { e.target.style.opacity = '0.6'; e.target.style.transform = 'scale(1)'; }} />
          </div>
          <div style={{ flex: 1, padding: '2rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--tertiary)', fontWeight: 700, display: 'block', marginBottom: 4 }}>Featured Architecture</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>Ether-70B Quantum</h3>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: 12, color: 'rgb(100 116 139)', display: 'block', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>Price per call</span>
                <span className="font-mono" style={{ fontSize: '1.125rem', color: 'var(--primary)', fontWeight: 700 }}>0.0042 ETH</span>
              </div>
            </div>
            <p style={{ color: 'rgb(203 213 225)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem', flex: 1 }}>
              Ultra-low latency model optimized for recursive reasoning and synthetic data generation. Built on the GQA framework with 128k context window.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="badge badge-category">NLP</span>
              <span className="badge badge-category">REASONING</span>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: 10, color: 'rgb(100 116 139)', fontStyle: 'italic' }}>Owner: neural_labs.eth</span>
                <button className="btn-pulse" style={{ width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px rgba(173,198,255,0.2)' }}>
                  <span className="material-symbols-outlined">bolt</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Standard Cards */}
        {modelsData.filter(m => !m.featured).map(model => (
          <div key={model.id} className="glass-card" style={{
            borderRadius: 'var(--radius-3xl)', padding: '1.5rem', cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onClick={() => navigate(`/model/${model.id}`)}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--surface-container-high)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(50,53,60,0.4)'}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 'var(--radius-2xl)', background: 'var(--surface-container-lowest)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid rgba(70,69,84,0.2)'
              }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', opacity: 0.6 }}>hub</span>
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>{model.name}</h4>
                <span style={{ fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 500 }}>
                  By {model.owner}
                </span>
              </div>
              <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <span style={{ display: 'block', fontSize: 10, color: 'rgb(100 116 139)' }}>Price</span>
                <span className="font-mono" style={{ fontSize: 12, color: 'var(--tertiary)' }}>{model.price}</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {model.tags.map(tag => (
                <span key={tag} className="badge badge-category" style={{ fontSize: 9 }}>{tag}</span>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgb(100 116 139)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>schedule</span>
                <span style={{ fontSize: 10, fontWeight: 500 }}>Updated 2h ago</span>
              </div>
              <button style={{
                padding: '0.375rem 1rem', borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--outline-variant)', background: 'none',
                fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em',
                color: 'var(--on-surface)', cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}>
                Details
              </button>
            </div>
          </div>
        ))}

        {/* Deploy Your Own Card */}
        <div style={{
          borderRadius: 'var(--radius-3xl)', padding: '1.5rem', display: 'flex', flexDirection: 'column',
          justifyContent: 'center', alignItems: 'center', textAlign: 'center',
          border: '2px dashed rgba(70,69,84,0.3)', background: 'rgba(50,53,60,0.2)',
          cursor: 'pointer', transition: 'border-color 0.2s ease'
        }}
        onClick={() => navigate('/upload')}
        onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(173,198,255,0.5)'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(70,69,84,0.3)'}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%', background: 'var(--surface-container)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem',
            transition: 'transform 0.2s ease'
          }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>add_circle</span>
          </div>
          <h4 style={{ fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>Deploy Your Own</h4>
          <p style={{ fontSize: 12, color: 'rgb(100 116 139)' }}>Submit your trained weight architecture to the ether registry.</p>
        </div>
      </div>

      {/* Pagination */}
      <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
        <button style={{ width: 40, height: 40, borderRadius: 'var(--radius-2xl)', background: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', color: 'rgb(148 163 184)', cursor: 'pointer' }}>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="btn-pulse" style={{ width: 40, height: 40, borderRadius: 'var(--radius-2xl)', fontSize: '0.875rem', fontWeight: 700 }}>1</button>
        {[2, 3].map(n => (
          <button key={n} style={{ width: 40, height: 40, borderRadius: 'var(--radius-2xl)', background: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', color: 'rgb(148 163 184)', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 700 }}>{n}</button>
        ))}
        <span style={{ color: 'rgb(75 85 99)', padding: '0 0.5rem' }}>...</span>
        <button style={{ width: 40, height: 40, borderRadius: 'var(--radius-2xl)', background: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', color: 'rgb(148 163 184)', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 700 }}>12</button>
        <button style={{ width: 40, height: 40, borderRadius: 'var(--radius-2xl)', background: 'var(--surface-container-high)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', color: 'rgb(148 163 184)', cursor: 'pointer' }}>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  );
}
