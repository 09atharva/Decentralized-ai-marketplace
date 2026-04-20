import React from 'react';

const GaugeCircle = ({ percentage, color, label, sublabel }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ position: 'relative', width: 128, height: 128, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="128" height="128" style={{ transform: 'rotate(-90deg)' }}>
        <circle cx="64" cy="64" r="58" fill="transparent" stroke="var(--surface-container-highest)" strokeWidth="8" />
        <circle cx="64" cy="64" r="58" fill="transparent" stroke={color} strokeWidth="8"
          strokeDasharray={364.4} strokeDashoffset={364.4 * (1 - percentage / 100)} />
      </svg>
      <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ fontSize: '1.5rem', fontWeight: 900 }}>{label}</span>
        <span style={{ fontSize: 8, color: 'rgb(100 116 139)', textTransform: 'uppercase', fontWeight: 700 }}>{sublabel}</span>
      </div>
    </div>
  </div>
);

const jobHistoryData = [
  { id: '#66291', model: 'Stable Diffusion XL', duration: '12m 45s', reward: '0.008 ETH', status: 'Success' },
  { id: '#66288', model: 'Mistral 7B v0.2', duration: '1h 04m', reward: '0.042 ETH', status: 'Success' },
  { id: '#66284', model: 'DeepSeek Coder', duration: '44m 12s', reward: '0.021 ETH', status: 'Success' },
  { id: '#66281', model: 'Whisper Large v3', duration: '02m 11s', reward: '0.001 ETH', status: 'Success' },
  { id: '#66277', model: 'Llama-2-70B', duration: '--', reward: '0.000 ETH', status: 'Aborted' },
];

export default function NodeOperatorDashboard() {
  return (
    <div className="page-enter">
      {/* Header */}
      <section style={{ marginBottom: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--tertiary)', animation: 'pulse-dot 1.5s ease-in-out infinite' }} />
            <span style={{ color: 'var(--tertiary)', fontWeight: 500, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Node Online</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.04em' }}>Node-Alpha-791</h2>
          <p style={{ color: 'rgb(148 163 184)', marginTop: 4, fontSize: '0.875rem' }}>Location: US-East (Virginia) • Uptime: 99.98%</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Total Earnings</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--secondary)' }}>4.821 ETH</p>
          </div>
          <div style={{ width: 1, height: 40, background: 'rgba(70,69,84,0.2)' }} />
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 10, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Current Multiplier</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--tertiary)' }}>1.4x</p>
          </div>
        </div>
      </section>

      {/* GPU Monitor */}
      <div className="grid-12" style={{ marginBottom: '2rem' }}>
        <div className="col-span-8 stat-card" style={{ padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, padding: '2rem', opacity: 0.1 }}>
            <span className="material-symbols-outlined" style={{ fontSize: 120, color: 'var(--primary)' }}>memory</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', position: 'relative', zIndex: 10 }}>
            <div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Hardware Real-time Monitor</h3>
              <p style={{ fontSize: 12, color: 'rgb(148 163 184)' }}>NVIDIA RTX 4090 • 24GB VRAM</p>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ padding: '0.25rem 0.75rem', background: 'var(--surface-container-highest)', borderRadius: 'var(--radius-sm)', fontSize: 10, fontWeight: 700, color: 'var(--primary)', letterSpacing: '-0.02em' }}>FP16 ENABLED</span>
              <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(60,221,199,0.1)', color: 'var(--tertiary)', borderRadius: 'var(--radius-sm)', fontSize: 10, fontWeight: 700, letterSpacing: '-0.02em' }}>OPTIMAL TEMP</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', position: 'relative', zIndex: 10 }}>
            <GaugeCircle percentage={72} color="var(--primary)" label="72%" sublabel="Load" />
            <GaugeCircle percentage={89} color="var(--secondary)" label="18.4" sublabel="GB" />
            <GaugeCircle percentage={23} color="var(--tertiary)" label="64°" sublabel="Celsius" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '1rem' }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: 'rgb(148 163 184)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Compute Load</p>
            <p style={{ fontSize: 12, fontWeight: 700, color: 'rgb(148 163 184)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>vRAM Usage</p>
            <p style={{ fontSize: 12, fontWeight: 700, color: 'rgb(148 163 184)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Core Temp</p>
          </div>
        </div>

        {/* Weekly Yield */}
        <div className="col-span-4" style={{
          background: 'var(--surface-container-high)', borderRadius: 'var(--radius-2xl)', padding: '1.5rem',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
        }}>
          <div>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: 4 }}>Weekly Yield</h3>
            <p style={{ fontSize: 12, color: 'rgb(100 116 139)' }}>Estimated rewards based on current traffic</p>
          </div>
          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'flex-end', gap: '0.5rem' }}>
            {[64, 96, 80, 112].map((h, i) => (
              <div key={i} style={{
                flex: 1, height: h, background: 'var(--surface-container-highest)',
                borderRadius: 2, position: 'relative', overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: i === 3 ? '85%' : `${30 + i * 15}%`,
                  background: i === 3 ? 'var(--secondary)' : 'rgba(173,198,255,0.2)'
                }} />
                {i === 3 && (
                  <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', fontSize: 8, fontWeight: 700, color: 'var(--on-secondary)', textTransform: 'uppercase' }}>Today</div>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            {[
              { label: 'Projected Monthly', value: '1.22 ETH', color: 'var(--on-surface)' },
              { label: 'Network Fee (5%)', value: '0.06 ETH', color: 'var(--on-surface)' },
              { label: 'Net Profit', value: '1.16 ETH', color: 'var(--tertiary)' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', padding: '0.5rem 0',
                borderBottom: i < 2 ? '1px solid rgba(70,69,84,0.1)' : 'none'
              }}>
                <span style={{ color: 'rgb(148 163 184)' }}>{item.label}</span>
                <span style={{ fontWeight: i === 2 ? 900 : 700, color: item.color }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Model & Job History */}
      <div className="grid-12">
        {/* Active Model */}
        <div className="col-span-5" style={{
          background: 'var(--surface-container-low)', borderRadius: 'var(--radius-2xl)',
          overflow: 'hidden', display: 'flex', flexDirection: 'column'
        }}>
          <div style={{
            height: 192, position: 'relative', background: 'var(--surface-container-highest)',
            overflow: 'hidden'
          }}>
            <img src="/images/card-server.png" alt="Active model" style={{
              width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4,
              transition: 'transform 0.5s ease'
            }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--surface-container-low), rgba(25,28,34,0.4), transparent)' }} />
            <div style={{ position: 'absolute', bottom: '1rem', left: '1.5rem' }}>
              <span style={{ padding: '0.25rem 0.5rem', background: 'var(--secondary)', color: 'var(--on-secondary)', fontSize: 10, fontWeight: 900, textTransform: 'uppercase', borderRadius: 'var(--radius-sm)', display: 'inline-block', marginBottom: '0.5rem' }}>Active Computation</span>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Llama-3-70B-Instruct</h4>
            </div>
          </div>
          <div style={{ padding: '1.5rem', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {['LLM', 'QUANTIZED'].map(tag => (
                  <span key={tag} style={{ fontSize: 10, fontWeight: 700, padding: '0.25rem 0.5rem', background: 'var(--surface-container-highest)', borderRadius: 'var(--radius-sm)', color: 'rgb(203 213 225)' }}>{tag}</span>
                ))}
              </div>
              <span style={{ fontSize: 12, color: 'rgb(148 163 184)' }}>ID: job_99812_xf</span>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                <span style={{ color: 'rgb(148 163 184)' }}>Context Window Progress</span>
                <span style={{ color: 'var(--primary)' }}>82%</span>
              </div>
              <div className="compute-track">
                <div className="compute-fill" style={{ width: '82%' }} />
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: 'rgba(50,53,60,0.3)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                <p style={{ fontSize: 9, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>Tokens/Sec</p>
                <p style={{ fontSize: '1.125rem', fontWeight: 700 }}>128.4</p>
              </div>
              <div style={{ background: 'rgba(50,53,60,0.3)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                <p style={{ fontSize: 9, color: 'rgb(100 116 139)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 4 }}>Latency</p>
                <p style={{ fontSize: '1.125rem', fontWeight: 700 }}>14ms</p>
              </div>
            </div>
          </div>
        </div>

        {/* Job History */}
        <div className="col-span-7" style={{
          background: 'var(--surface-container-low)', borderRadius: 'var(--radius-2xl)', padding: '1.5rem', overflow: 'hidden'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700 }}>Recent Job History</h3>
            <button style={{ fontSize: 12, color: 'var(--primary)', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table className="ether-table">
              <thead>
                <tr style={{ fontSize: 10 }}>
                  <th style={{ padding: '0 0 1rem 0', fontWeight: 500 }}>Job ID</th>
                  <th style={{ padding: '0 0 1rem 0', fontWeight: 500 }}>Model</th>
                  <th style={{ padding: '0 0 1rem 0', fontWeight: 500 }}>Duration</th>
                  <th style={{ padding: '0 0 1rem 0', fontWeight: 500 }}>Reward</th>
                  <th style={{ padding: '0 0 1rem 0', fontWeight: 500, textAlign: 'right' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {jobHistoryData.map((job, i) => (
                  <tr key={i} style={{ borderTop: i > 0 ? '1px solid rgba(70,69,84,0.05)' : 'none' }}>
                    <td className="font-mono" style={{ fontSize: 12, color: 'rgb(148 163 184)', padding: '1rem 0' }}>{job.id}</td>
                    <td style={{ fontWeight: 700, padding: '1rem 0' }}>{job.model}</td>
                    <td style={{ color: 'rgb(148 163 184)', padding: '1rem 0' }}>{job.duration}</td>
                    <td style={{ color: job.status === 'Aborted' ? 'var(--error)' : 'var(--tertiary)', fontWeight: 700, padding: '1rem 0' }}>{job.reward}</td>
                    <td style={{ textAlign: 'right', padding: '1rem 0' }}>
                      <span className={`badge ${job.status === 'Aborted' ? 'badge-failed' : 'badge-completed'}`}>
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
