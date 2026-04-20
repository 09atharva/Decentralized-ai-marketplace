import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage({ onConnect }) {
  const navigate = useNavigate();

  return (
    <div className="page-enter">
      {/* TopAppBar Navigation Shell */}
      <header style={{
        position: 'fixed', top: 0, right: 0, width: '100%', zIndex: 50,
        background: 'rgba(16,19,26,0.6)', backdropFilter: 'blur(24px)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        height: '4rem', padding: '0 2rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <span className="text-gradient" style={{ fontSize: '1.25rem', fontWeight: 900, letterSpacing: '-0.04em', textTransform: 'uppercase' }}>
            Ether Marketplace
          </span>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
            <a href="#marketplace" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Marketplace</a>
            <a href="#compute" style={{ color: 'rgb(148 163 184)', textDecoration: 'none', transition: 'color 0.2s' }}
               onMouseEnter={e => e.target.style.color = '#f1f5f9'}
               onMouseLeave={e => e.target.style.color = 'rgb(148 163 184)'}>Compute</a>
            <a href="#nodes" style={{ color: 'rgb(148 163 184)', textDecoration: 'none', transition: 'color 0.2s' }}
               onMouseEnter={e => e.target.style.color = '#f1f5f9'}
               onMouseLeave={e => e.target.style.color = 'rgb(148 163 184)'}>Nodes</a>
            <a href="#docs" style={{ color: 'rgb(148 163 184)', textDecoration: 'none', transition: 'color 0.2s' }}
               onMouseEnter={e => e.target.style.color = '#f1f5f9'}
               onMouseLeave={e => e.target.style.color = 'rgb(148 163 184)'}>Docs</a>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'var(--surface-container-lowest)', padding: '0.375rem 1rem', borderRadius: '999px' }}>
            <span className="material-symbols-outlined" style={{ color: 'rgb(148 163 184)', fontSize: 14, marginRight: 8 }}>search</span>
            <input type="text" placeholder="Search AI models..." style={{
              background: 'transparent', border: 'none', color: 'var(--on-surface)', fontSize: '0.875rem', outline: 'none', width: '12rem'
            }} />
          </div>
          <button style={{ padding: '0.5rem', color: 'rgb(148 163 184)', background: 'none', border: 'none', borderRadius: '50%', cursor: 'pointer', transition: 'background 0.2s' }}>
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="btn-pulse" style={{ padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }} onClick={onConnect}>
            Connect Wallet
          </button>
        </div>
      </header>

      <main style={{ paddingTop: '4rem' }}>
        {/* Hero Section */}
        <section style={{
          position: 'relative', minHeight: '90vh', display: 'flex', alignItems: 'center',
          padding: '0 2rem 0 6rem', overflow: 'hidden'
        }}>
          {/* Ambient Glows */}
          <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: 600, height: 600, background: 'rgba(173,198,255,0.1)', filter: 'blur(120px)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: 500, height: 500, background: 'rgba(221,183,255,0.1)', filter: 'blur(100px)', borderRadius: '50%' }} />
          
          <div style={{ zIndex: 10, maxWidth: '56rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.25rem 0.75rem', background: 'var(--surface-container-low)', borderRadius: '999px', marginBottom: '2rem'
            }}>
              <span style={{ display: 'flex', width: 8, height: 8, borderRadius: '50%', background: 'var(--tertiary)' }} />
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--tertiary)' }}>
                Mainnet Live 2.0
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 900, letterSpacing: '-0.04em',
              lineHeight: 0.9, marginBottom: '2rem'
            }}>
              Run AI Models <br />
              <span className="text-gradient">Decentralized</span>
            </h1>

            <p style={{
              fontSize: '1.25rem', color: 'var(--on-surface-variant)', fontWeight: 500,
              lineHeight: 1.6, maxWidth: '36rem', marginBottom: '3rem'
            }}>
              Upload, monetize, and run AI models on a trustless network. Experience performance without the centralized gatekeepers.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <button className="btn-pulse" style={{
                padding: '1rem 2rem', borderRadius: 'var(--radius-md)', fontSize: '1.125rem',
                display: 'flex', alignItems: 'center', gap: '0.5rem'
              }} onClick={() => navigate('/marketplace')}>
                Explore Models
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="btn-ghost" style={{
                padding: '1rem 2rem', borderRadius: 'var(--radius-md)', fontSize: '1.125rem'
              }} onClick={() => navigate('/upload')}>
                Upload Model
              </button>
            </div>
          </div>

          {/* Asymmetric Hero Visual — now VISIBLE */}
          <div style={{
            position: 'absolute', right: '-5%', top: '15%', width: '50%',
          }}>
            <div className="glass-panel" style={{
              padding: '2rem', borderRadius: 'var(--radius-2xl)',
              transform: 'rotate(2deg) scale(1.1)', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              overflow: 'hidden'
            }}>
              <img
                src="/images/hero-neural.png"
                alt="Abstract digital neural network"
                style={{
                  width: '100%', height: 250, objectFit: 'cover',
                  borderRadius: 'var(--radius-xl)', opacity: 0.8,
                  mixBlendMode: 'screen', filter: 'grayscale(0.3)'
                }}
              />
              <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ height: 4, background: 'linear-gradient(to right, var(--primary), transparent)', width: '100%' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div>
                    <p style={{ fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>Active Inference</p>
                    <p className="font-mono" style={{ fontSize: '1.25rem', color: 'var(--tertiary)', letterSpacing: '-0.02em' }}>Llama-3-70B-Instruct</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>Latency</p>
                    <p className="font-mono" style={{ fontSize: '1.25rem', color: 'var(--on-surface)' }}>24ms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section style={{
          padding: '6rem 6rem', background: 'var(--surface-container-lowest)'
        }}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1rem' }}>
              Engineered for <span style={{ color: 'var(--primary)' }}>Intelligence</span>
            </h2>
            <p style={{ color: 'var(--on-surface-variant)', maxWidth: '32rem' }}>
              A specialized infrastructure layer designed for the next generation of decentralized AI development.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem' }}>
            {/* Feature 1 — Pay-per-inference */}
            <div className="card" style={{ gridColumn: 'span 8', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 300, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '1.5rem', display: 'block' }}>payments</span>
                <h3 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Pay-per-inference</h3>
                <p style={{ color: 'var(--on-surface-variant)', maxWidth: '28rem', lineHeight: 1.7 }}>
                  Forget expensive monthly subscriptions. Pay only for the tokens you generate, processed instantly via peer-to-peer microtransactions.
                </p>
              </div>
              {/* Blockchain background image */}
              <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '50%', opacity: 0.2 }}>
                <img src="/images/blockchain.png" alt="" style={{ width: '100%', borderRadius: 'var(--radius-xl)', filter: 'grayscale(1)' }} />
              </div>
            </div>

            {/* Feature 2 — Transparent Pricing */}
            <div className="card" style={{ gridColumn: 'span 4', padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '1.5rem', display: 'block' }}>bar_chart</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Transparent Pricing</h3>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  Real-time market rates for compute. No hidden fees, no enterprise markups. Just pure supply and demand dynamics.
                </p>
              </div>
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid rgba(70,69,84,0.1)' }}>
                  <span style={{ fontSize: 12, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>H100 Node</span>
                  <span className="font-mono" style={{ color: 'var(--tertiary)' }}>$1.42/hr</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid rgba(70,69,84,0.1)' }}>
                  <span style={{ fontSize: 12, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>A100 Node</span>
                  <span className="font-mono" style={{ color: 'var(--tertiary)' }}>$0.89/hr</span>
                </div>
              </div>
            </div>

            {/* Feature 3 — Decentralized Compute */}
            <div className="card" style={{ gridColumn: 'span 12', padding: '2.5rem', display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: 300 }}>
                <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'var(--tertiary)', marginBottom: '1.5rem', display: 'block' }}>memory</span>
                <h3 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>Decentralized Compute</h3>
                <p style={{ color: 'var(--on-surface-variant)', maxWidth: '32rem', lineHeight: 1.7 }}>
                  Our global network of high-performance GPU nodes ensures your models are always available, censorship-resistant, and geographically distributed for low latency.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                  <div style={{ background: 'var(--surface-container-highest)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="font-mono" style={{ fontSize: 12, color: 'var(--primary)' }}>12.4K</span>
                    <span style={{ fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Active Nodes</span>
                  </div>
                  <div style={{ background: 'var(--surface-container-highest)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span className="font-mono" style={{ fontSize: 12, color: 'var(--tertiary)' }}>99.99%</span>
                    <span style={{ fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Uptime</span>
                  </div>
                </div>
              </div>
              <div style={{
                flex: 1, minWidth: 300, minHeight: 200, background: 'var(--surface-container-lowest)',
                borderRadius: 'var(--radius-xl)', padding: '1.5rem', fontFamily: 'monospace', fontSize: 12, color: 'var(--tertiary)',
                position: 'relative', overflow: 'hidden'
              }}>
                <div style={{ position: 'absolute', top: 0, right: 0, padding: '0.5rem', opacity: 0.3 }}>
                  <span className="material-symbols-outlined">terminal</span>
                </div>
                <p style={{ color: 'rgb(100 116 139)', marginBottom: 8 }}>// INITIALIZING COMPUTE HANDSHAKE</p>
                <p style={{ marginBottom: 4 }}>&gt; Requesting peer allocation... <span style={{ color: 'var(--on-surface)' }}>OK</span></p>
                <p style={{ marginBottom: 4 }}>&gt; Loading weights: stable-diffusion-xl <span style={{ color: 'var(--on-surface)' }}>OK</span></p>
                <p style={{ marginBottom: 4 }}>&gt; Verified by zk-SNARK proof: <span style={{ color: 'var(--primary)' }}>0x4F...32A</span></p>
                <p style={{ marginTop: 16, color: 'var(--secondary)' }}>_ Running inference cycle 0042...</p>
                <div className="compute-track" style={{ marginTop: '1rem' }}>
                  <div className="compute-fill" style={{ width: '66%' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Model Showcase */}
        <section style={{ padding: '6rem 6rem', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.875rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.04em' }}>
                Marketplace <span style={{ color: 'var(--secondary)' }}>Trending</span>
              </h2>
              <p style={{ color: 'var(--on-surface-variant)', marginTop: '0.5rem' }}>
                The most powerful open-source models, hosted by the community.
              </p>
            </div>
            <a href="#catalog" style={{ color: 'var(--primary)', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
               onClick={(e) => { e.preventDefault(); navigate('/marketplace'); }}>
              View Full Catalog <span className="material-symbols-outlined">chevron_right</span>
            </a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { name: 'Visionary-Flux-1', category: 'Image Gen', desc: 'Ultra-realistic image generation optimized for decentralized GPU clusters with low memory footprint.', price: '0.004 ETH/1k imgs', img: '/images/card-fractal.png' },
              { name: 'Coda-LLM-v2', category: 'Language', desc: 'Advanced coding assistant with context-aware logic processing. Benchmarked at 94% on HumanEval.', price: '0.0001 ETH/1k toks', img: '/images/card-server.png' },
              { name: 'Sentinel-Audio-7', category: 'Audio', desc: 'Sub-millisecond audio transcription and translation for real-time communication systems.', price: '0.002 ETH/hr', img: '/images/card-eye.png' },
            ].map((model, i) => (
              <div key={i} className="glass-panel" style={{
                padding: '1.5rem', borderRadius: 'var(--radius-2xl)', cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              onClick={() => navigate('/model/1')}>
                <div style={{
                  aspectRatio: '16/9', background: 'var(--surface-container-lowest)',
                  borderRadius: 'var(--radius-xl)', marginBottom: '1.5rem', overflow: 'hidden'
                }}>
                  <img src={model.img} alt={model.name} style={{
                    width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6,
                    transition: 'opacity 0.3s ease'
                  }}
                  onMouseEnter={e => e.target.style.opacity = '1'}
                  onMouseLeave={e => e.target.style.opacity = '0.6'} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em' }}>{model.name}</h4>
                  <span style={{
                    background: 'rgba(111,0,190,0.2)', color: 'var(--on-secondary-container)',
                    padding: '0.125rem 0.5rem', borderRadius: 'var(--radius-sm)', fontSize: 10,
                    fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em'
                  }}>{model.category}</span>
                </div>
                <p style={{ color: 'var(--on-surface-variant)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {model.desc}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(70,69,84,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: 14, color: 'var(--tertiary)' }}>bolt</span>
                    <span className="font-mono" style={{ fontSize: 12 }}>{model.price}</span>
                  </div>
                  <button style={{ color: 'var(--primary)', fontSize: 12, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Test Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ padding: '8rem 2rem' }}>
          <div className="glass-panel" style={{
            maxWidth: '72rem', margin: '0 auto', padding: '4rem', borderRadius: '2rem',
            textAlign: 'center', position: 'relative', overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-50%', left: '-10%', width: 400, height: 400, background: 'rgba(173,198,255,0.2)', filter: 'blur(100px)', borderRadius: '50%' }} />
            <div style={{ position: 'relative', zIndex: 10 }}>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 900, letterSpacing: '-0.04em', marginBottom: '1.5rem' }}>
                Ready to contribute to the <br />
                <span className="text-gradient">Synthetic Ether?</span>
              </h2>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '1.25rem', maxWidth: '36rem', margin: '0 auto 3rem' }}>
                Join thousands of developers and node operators building the first trustless compute network for AI.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                <button className="btn-pulse" style={{
                  padding: '1.25rem 2.5rem', borderRadius: 'var(--radius-md)', fontSize: '1.25rem',
                  transition: 'transform 0.2s ease'
                }} onClick={() => navigate('/dashboard')}>
                  Launch App
                </button>
                <button className="btn-ghost" style={{
                  padding: '1.25rem 2.5rem', borderRadius: 'var(--radius-md)', fontSize: '1.25rem',
                  borderColor: 'var(--outline)'
                }}>
                  Read the Whitepaper
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '4rem 6rem', borderTop: '1px solid rgba(70,69,84,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '3rem', flexWrap: 'wrap' }}>
            <div style={{ maxWidth: '16rem' }}>
              <span style={{ fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase', color: 'var(--on-surface)', display: 'block', marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>
                Synthetic Ether
              </span>
              <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>
                Defining the standard for decentralized intelligence through trustless compute protocols and incentive layers.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
              {[
                { title: 'Network', links: ['Marketplace', 'Explorer', 'Governance', 'Staking'] },
                { title: 'Developers', links: ['Documentation', 'API Keys', 'SDKs', 'Node Setup'] },
                { title: 'Community', links: ['Discord', 'X (Twitter)', 'GitHub'] },
              ].map(group => (
                <div key={group.title}>
                  <h5 style={{ fontSize: 12, fontWeight: 900, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1.5rem' }}>{group.title}</h5>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {group.links.map(link => (
                      <li key={link}>
                        <a href={`#${link}`} style={{ color: 'rgb(148 163 184)', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}
                           onMouseEnter={e => e.target.style.color = '#fff'}
                           onMouseLeave={e => e.target.style.color = 'rgb(148 163 184)'}>{link}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(70,69,84,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            <p>© 2024 Synthetic Ether Labs. All Rights Reserved.</p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <a href="#privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="#terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
