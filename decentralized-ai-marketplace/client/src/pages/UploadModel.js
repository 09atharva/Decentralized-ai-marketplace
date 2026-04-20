import React from 'react';

export default function UploadModel() {
  return (
    <div className="page-enter" style={{ maxWidth: '72rem', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <span className="badge badge-category">Compute-Node</span>
          <span className="font-mono" style={{ color: 'var(--tertiary)', fontSize: 12 }}>0x4F...E921</span>
        </div>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', marginBottom: '1rem' }}>
          Register New Intelligence
        </h1>
        <p style={{ color: 'var(--on-surface-variant)', maxWidth: '40rem', lineHeight: 1.7 }}>
          Deploy your neural weights to the Synthetic Ether network. High-performance models are incentivized with automated compute dividends. Ensure your IPFS hash is pinned before finalization.
        </p>
      </div>

      {/* Form Layout */}
      <div className="grid-12" style={{ alignItems: 'flex-start' }}>
        {/* Main Form */}
        <div className="col-span-8" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Core Identity */}
          <div style={{ background: 'var(--surface-container-low)', borderRadius: 'var(--radius-2xl)', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined">identity_platform</span>
              Model Specification
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'rgb(148 163 184)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Intelligence Name</label>
                <input className="ether-input" type="text" placeholder="e.g. Llama-3-Synth-70B" />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'rgb(148 163 184)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Architecture Description</label>
                <textarea className="ether-input ether-textarea" placeholder="Define model capabilities, training set characteristics, and optimized use cases..." rows="5" />
              </div>
            </div>
          </div>

          {/* IPFS Upload */}
          <div style={{
            background: 'var(--surface-container-low)', borderRadius: 'var(--radius-2xl)', padding: '2rem',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, right: 0, padding: '1rem', opacity: 0.1 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 80 }}>cloud_upload</span>
            </div>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined">database</span>
              IPFS Deployment
            </h2>
            <div style={{
              border: '2px dashed rgba(70,69,84,0.3)', borderRadius: 'var(--radius-2xl)',
              padding: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(11,14,20,0.5)', cursor: 'pointer', transition: 'background-color 0.2s ease'
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%', background: 'var(--surface-container-high)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'
              }}>
                <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '1.875rem' }}>upload_file</span>
              </div>
              <p style={{ fontWeight: 500, marginBottom: 4 }}>Drag and drop model weights (.safetensors, .bin)</p>
              <p style={{ color: 'rgb(100 116 139)', fontSize: 12 }}>Maximum file size: 50GB per node instance</p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
                <button className="btn-ghost" style={{ padding: '0.5rem 1.5rem', borderRadius: 'var(--radius-sm)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Select Files
                </button>
                <button style={{
                  padding: '0.5rem 1.5rem', borderRadius: 'var(--radius-sm)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
                  background: 'transparent', border: '1px solid rgba(70,69,84,0.4)', color: 'rgb(148 163 184)', cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  Connect IPFS Desktop
                </button>
              </div>
            </div>

            {/* Progress */}
            <div style={{ marginTop: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)', fontSize: 14 }}>sync</span>
                  <span style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'rgb(203 213 225)', fontStyle: 'italic' }}>Uploading Shards...</span>
                </div>
                <span className="font-mono" style={{ color: 'var(--tertiary)', fontSize: '0.875rem' }}>64.2%</span>
              </div>
              <div className="compute-track" style={{ height: 6, borderRadius: 999, overflow: 'hidden' }}>
                <div className="compute-fill" style={{ width: '64.2%', position: 'relative' }}>
                  <div style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: 8, background: 'rgba(255,255,255,0.4)', filter: 'blur(2px)' }} />
                </div>
              </div>
              <div style={{ marginTop: '0.75rem', display: 'flex', justifyContent: 'space-between' }}>
                <span className="font-mono" style={{ fontSize: 10, color: 'rgb(100 116 139)' }}>CID: QmXoyp...3n8tJ</span>
                <span className="font-mono" style={{ fontSize: 10, color: 'rgb(100 116 139)' }}>1.2 GB / 1.8 GB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Monetization */}
          <div className="glass-panel" style={{ borderRadius: 'var(--radius-2xl)', padding: '1.5rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
            <h2 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--secondary)' }}>payments</span>
              Monetization
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Inference Price (per 1k tokens)</label>
                <div style={{ position: 'relative' }}>
                  <input className="ether-input font-mono" type="number" defaultValue="0.00420" step="0.00001" style={{ paddingRight: '3rem' }} />
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--secondary)', fontWeight: 700, fontSize: 12 }}>ETH</span>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 10, fontWeight: 700, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Access Control</label>
                <select className="ether-input ether-select" style={{ fontSize: '0.875rem' }}>
                  <option>Public Open-Source</option>
                  <option>Restricted Inference Only</option>
                  <option>Private Workspace</option>
                </select>
              </div>
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(70,69,84,0.2)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: '0.5rem' }}>
                  <span style={{ color: 'rgb(148 163 184)' }}>Network Fee (2%)</span>
                  <span className="font-mono">0.000084 ETH</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                  <span style={{ color: 'rgb(148 163 184)' }}>Node Maintenance</span>
                  <span className="font-mono" style={{ color: 'var(--tertiary)' }}>Automated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div style={{ background: 'var(--surface-container-low)', borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
            <div style={{
              height: 192, position: 'relative', background: 'var(--surface-container-highest)',
              overflow: 'hidden'
            }}>
              <img src="/images/hero-neural.png" alt="Preview" style={{
                width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)', opacity: 0.4,
                transition: 'all 0.3s ease'
              }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface-container-low), transparent)' }} />
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 4 }}>Preview Visualization</p>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.125rem' }}>Untitled Intelligence</h3>
              </div>
            </div>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['LLM', '70B', 'FP16'].map(tag => (
                  <span key={tag} style={{
                    padding: '0.25rem 0.5rem', background: 'rgba(221,183,255,0.1)', color: 'var(--secondary)',
                    fontSize: 10, fontWeight: 700, borderRadius: 'var(--radius-sm)', border: '1px solid rgba(221,183,255,0.2)'
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Deploy Button */}
          <button className="btn-pulse" style={{
            width: '100%', padding: '1rem', borderRadius: 'var(--radius-2xl)',
            fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em',
            boxShadow: '0 0 30px rgba(173,198,255,0.2)',
            transition: 'box-shadow 0.3s ease'
          }}>
            Deploy to Synthetic Ether
          </button>
          <p style={{ fontSize: 10, textAlign: 'center', color: 'rgb(100 116 139)', padding: '0 1rem', lineHeight: 1.6 }}>
            By deploying, you agree to the Automated Intelligent License Agreement and network slashing protocols for invalid output data.
          </p>
        </div>
      </div>

      {/* Status Bar */}
      <div style={{
        position: 'fixed', bottom: 0, right: 0, width: 'calc(100% - 16rem)', height: 40,
        background: 'rgba(11,14,20,0.8)', backdropFilter: 'blur(12px)', padding: '0 2rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderTop: '1px solid rgba(255,255,255,0.05)', zIndex: 40
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--tertiary)' }} />
            <span className="font-mono" style={{ fontSize: 10, color: 'var(--tertiary)' }}>Network Status: Optimal</span>
          </div>
          <span className="font-mono" style={{ fontSize: 10, color: 'rgb(100 116 139)' }}>Gas: 18 Gwei</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span className="font-mono" style={{ fontSize: 10, color: 'rgb(100 116 139)' }}>Lat: 24ms</span>
          <span className="font-mono" style={{ fontSize: 10, color: 'rgb(100 116 139)' }}>Uptime: 99.98%</span>
        </div>
      </div>
    </div>
  );
}
