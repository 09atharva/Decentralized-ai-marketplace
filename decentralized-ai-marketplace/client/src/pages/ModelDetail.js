import React from 'react';

export default function ModelDetail() {
  return (
    <div className="page-enter" style={{ maxWidth: '80rem', margin: '0 auto' }}>
      {/* Header */}
      <section style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', marginBottom: '3rem', flexWrap: 'wrap' }}>
        <div style={{
          width: 128, height: 128, borderRadius: 'var(--radius-2xl)', background: 'var(--surface-container-high)',
          border: '1px solid rgba(70,69,84,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          position: 'relative', overflow: 'hidden', flexShrink: 0
        }}>
          <img src="/images/hero-neural.png" alt="Neural-Synth-70B" style={{
            width: '100%', height: '100%', objectFit: 'cover'
          }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(173,198,255,0.1), transparent)' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span className="badge badge-category">v4.2.0-Alpha</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: 'var(--tertiary)', fontSize: 12, fontWeight: 500 }}>
              <span className="material-symbols-outlined filled" style={{ fontSize: 14 }}>verified</span>
              Verified Provider
            </span>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: '1rem' }}>Neural-Synth-70B</h1>
          <p style={{ color: 'var(--on-surface-variant)', maxWidth: '40rem', lineHeight: 1.7 }}>
            A specialized high-compute model architecture optimized for complex analytical synthesis and multi-step reasoning. Featuring an expanded 128k context window and zero-latency retrieval integration.
          </p>
        </div>
        <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700 }}>Cost per Inference</p>
            <p className="text-gradient" style={{ fontSize: '1.875rem', fontWeight: 900 }}>0.0042 ETH</p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
            <button className="btn-ghost" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-xl)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>share</span> Share
            </button>
            <button className="btn-ghost" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-xl)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>star</span> 1.2k
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        {[
          { label: 'Latency', value: '142ms', sub: '−4.2%', subColor: 'var(--tertiary)', barWidth: '80%' },
          { label: 'Daily Calls', value: '1.2M', sub: '+12k', subColor: 'var(--primary)' },
          { label: 'Uptime', value: '99.98%', sub: 'Stable', subColor: 'var(--tertiary)' },
          { label: 'Token Cap', value: '128k', sub: 'Ctx', subColor: 'rgb(148 163 184)' },
        ].map((stat, i) => (
          <div key={i} style={{
            background: 'var(--surface-container-low)', padding: '1.5rem', borderRadius: 'var(--radius-2xl)',
            border: '1px solid rgba(70,69,84,0.05)'
          }}>
            <p style={{ color: 'rgb(100 116 139)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, marginBottom: '1rem' }}>{stat.label}</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.875rem', fontWeight: 700 }}>{stat.value}</span>
              <span style={{ color: stat.subColor, fontSize: 12, marginBottom: 4 }}>{stat.sub}</span>
            </div>
            {stat.barWidth && (
              <div className="compute-track" style={{ marginTop: '1rem' }}>
                <div className="neon-pulse-fill" style={{ width: stat.barWidth }} />
              </div>
            )}
            {i === 1 && (
              <div style={{ display: 'flex', gap: 4, marginTop: '1rem', height: 24, alignItems: 'flex-end' }}>
                {['50%', '75%', '100%', '66%', '83%'].map((h, j) => (
                  <div key={j} style={{ flex: 1, background: `rgba(173,198,255,${0.2 + j * 0.2})`, height: h, borderRadius: 2 }} />
                ))}
              </div>
            )}
            {i === 2 && (
              <div style={{ display: 'flex', gap: 4, marginTop: '1.5rem' }}>
                {Array.from({ length: 8 }).map((_, j) => (
                  <div key={j} style={{ width: 6, height: 6, borderRadius: '50%', background: j === 6 ? 'var(--error)' : 'var(--tertiary)' }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Workbench */}
      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Model Workbench</h3>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 700, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>JSON Mode</span>
              <div style={{ width: 32, height: 16, background: 'var(--surface-container-highest)', borderRadius: 999, position: 'relative' }}>
                <div style={{ position: 'absolute', right: 2, top: 2, width: 12, height: 12, background: 'var(--primary)', borderRadius: '50%' }} />
              </div>
            </div>
          </div>
          <div style={{
            flex: 1, background: 'var(--surface-container-lowest)', borderRadius: 'var(--radius-2xl)',
            border: '1px solid rgba(70,69,84,0.1)', display: 'flex', flexDirection: 'column', overflow: 'hidden'
          }}>
            <div style={{
              background: 'var(--surface-container-low)', padding: '0.5rem 1rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(70,69,84,0.05)'
            }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(255,180,171,0.4)' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(221,183,255,0.4)' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: 'rgba(60,221,199,0.4)' }} />
              <span className="font-mono" style={{ fontSize: 10, color: 'rgb(100 116 139)', marginLeft: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Input_Prompt.sh</span>
            </div>
            <textarea className="ether-input ether-textarea" style={{
              flex: 1, borderRadius: 0, padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.875rem',
              minHeight: 300, border: 'none', background: 'transparent'
            }} placeholder='{"instruction": "Synthesize the recent market movements of compute-heavy protocol tokens...", "temperature": 0.7}' />
            <div style={{
              padding: '1rem', borderTop: '1px solid rgba(70,69,84,0.05)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              background: 'rgba(25,28,34,0.5)'
            }}>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ fontSize: 10, color: 'rgb(100 116 139)' }}><strong style={{ color: 'rgb(203 213 225)' }}>Tokens:</strong> 42</span>
                <span style={{ fontSize: 10, color: 'rgb(100 116 139)' }}><strong style={{ color: 'rgb(203 213 225)' }}>Cost:</strong> 0.0001 ETH</span>
              </div>
              <button className="btn-pulse" style={{ padding: '0.5rem 2rem', borderRadius: 'var(--radius-xl)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span className="material-symbols-outlined filled" style={{ fontSize: 14 }}>play_arrow</span>
                Run Inference
              </button>
            </div>
          </div>
        </div>

        {/* Output */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, opacity: 0 }}>Output</h3>
          <div className="glass-panel" style={{
            flex: 1, borderRadius: 'var(--radius-2xl)', border: '1px solid rgba(70,69,84,0.1)',
            display: 'flex', flexDirection: 'column', overflow: 'hidden', position: 'relative'
          }}>
            <div style={{
              background: 'rgba(54,57,64,0.3)', padding: '0.5rem 1rem',
              borderBottom: '1px solid rgba(70,69,84,0.05)'
            }}>
              <span className="font-mono" style={{ fontSize: 10, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Output_Log_Realtime</span>
            </div>
            <div style={{ padding: '1.5rem', fontFamily: 'monospace', fontSize: '0.875rem', color: 'var(--on-surface-variant)', overflow: 'auto', flex: 1 }}>
              <p style={{ marginBottom: '1rem' }}><span style={{ color: 'var(--tertiary)' }}>[SYSTEM]:</span> Initializing compute node 0x72a... <span style={{ color: 'rgb(100 116 139)' }}>Done</span></p>
              <p style={{ marginBottom: '1rem' }}><span style={{ color: 'var(--tertiary)' }}>[SYSTEM]:</span> Allocating 70B parameters... <span style={{ color: 'rgb(100 116 139)' }}>Done</span></p>
              <p style={{
                marginBottom: '1rem', color: 'var(--on-surface)', lineHeight: 1.7, fontStyle: 'italic',
                borderLeft: '2px solid rgba(173,198,255,0.2)', paddingLeft: '1rem', padding: '0.25rem 1rem'
              }}>
                Analysis completed. Synthesizing data points across 12 source vectors... Market sentiment exhibits a high degree of correlation with regional energy infrastructure developments. Projected liquidity shifts suggest a migration toward decentralized L2 compute marketplaces by Q3...
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '2rem' }}>
                <span className="cursor-blink" style={{ width: 4, height: 16, background: 'var(--primary)' }} />
                <span style={{ fontSize: 10, color: 'rgb(100 116 139)' }}>Awaiting user prompt...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom: Reviews & Specs */}
      <section style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', paddingTop: '3rem', borderTop: '1px solid rgba(70,69,84,0.1)' }}>
        {/* Reviews */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Community Feedback</h3>
            <button style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Write a Review</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { user: '0xAlpha_Dev', time: '2 days ago', rating: 5, review: "Unbeatable context handling. We swapped our RAG pipeline to use Neural-Synth-70B for the heavy lifting and latency dropped by nearly 30%." },
              { user: 'Quant_Synthetics', time: '1 week ago', rating: 4, review: "Great model, though the cost is a bit higher than competitors. If you need precision over volume, it's worth every gwei." },
            ].map((r, i) => (
              <div key={i} style={{ background: 'var(--surface-container-low)', padding: '1.5rem', borderRadius: 'var(--radius-2xl)', border: '1px solid rgba(70,69,84,0.05)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--surface-container-highest)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--primary)' }}>person</span>
                    </div>
                    <div>
                      <p style={{ fontSize: '0.875rem', fontWeight: 700 }}>{r.user}</p>
                      <p style={{ fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600 }}>{r.time}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', color: 'var(--tertiary)' }}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} className={`material-symbols-outlined ${j < r.rating ? 'filled' : ''}`} style={{ fontSize: 14 }}>star</span>
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--on-surface-variant)', lineHeight: 1.7 }}>{r.review}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs */}
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem' }}>Technical Parameters</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              { label: 'Model Size', value: '70.4 Billion', color: 'var(--primary)' },
              { label: 'Quantization', value: '4-bit GGUF', color: 'var(--secondary)' },
              { label: 'Architecture', value: 'Dense Decoder', color: 'var(--primary)' },
              { label: 'Max Output', value: '8,192 Tokens', color: 'var(--secondary)' },
            ].map((spec, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                padding: '0.75rem 0', borderBottom: '1px solid rgba(70,69,84,0.1)'
              }}>
                <span style={{ fontSize: 12, color: 'rgb(100 116 139)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.15em' }}>{spec.label}</span>
                <span className="font-mono" style={{ fontSize: '0.875rem', color: spec.color }}>{spec.value}</span>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '2rem', background: 'rgba(50,53,60,0.3)', padding: '1.5rem',
            borderRadius: 'var(--radius-2xl)', border: '1px solid rgba(70,69,84,0.1)'
          }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Deployment Tags</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['LLM', 'Reasoning', 'MoE', 'Finance-Tuned'].map(tag => (
                <span key={tag} style={{
                  background: 'rgba(111,0,190,0.2)', color: 'var(--on-secondary-container)',
                  padding: '0.25rem 0.75rem', borderRadius: 999, fontSize: 10, fontWeight: 700
                }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
