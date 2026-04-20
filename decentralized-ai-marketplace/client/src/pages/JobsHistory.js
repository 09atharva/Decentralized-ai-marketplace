import React from 'react';

const jobsData = [
  { id: '#JOB-8821-X', model: 'Llama-3-70B-Instruct', sub: 'Fine-tuning / FP16 Quantized', status: 'Running', progress: 64, time: '02:44:12', dotColor: 'var(--secondary)' },
  { id: '#JOB-9104-Y', model: 'Stable-Diffusion-XL', sub: 'Image Generation Batch', status: 'Pending', progress: 0, time: '--:--:--', dotColor: 'var(--tertiary)' },
  { id: '#JOB-7742-A', model: 'Mistral-7B-v0.2', sub: 'Text Embedding Generation', status: 'Completed', progress: 100, time: '00:12:05', dotColor: 'var(--primary)' },
  { id: '#JOB-4432-P', model: 'Claude-3-Opus-API-Emu', sub: 'Routing Node Sync', status: 'Running', progress: 12, time: '00:04:45', dotColor: 'var(--secondary)' },
  { id: '#JOB-2210-L', model: 'Grok-1-Full-Model', sub: 'Parameter Verification', status: 'Completed', progress: 100, time: '14:22:56', dotColor: 'var(--outline-variant)' },
];

const statusBadgeClass = (status) => {
  switch (status) {
    case 'Running': return 'badge-running';
    case 'Completed': return 'badge-completed';
    case 'Pending': return 'badge-pending';
    default: return '';
  }
};

export default function JobsHistory() {
  return (
    <div className="page-enter">
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem' }}>
        <div>
          <nav style={{ display: 'flex', gap: '0.5rem', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgb(100 116 139)', marginBottom: '0.5rem' }}>
            <span>Workspace</span> <span>/</span> <span style={{ color: 'var(--primary)' }}>Compute Jobs</span>
          </nav>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', marginBottom: '0.5rem' }}>Active Jobs</h1>
          <p style={{ color: 'rgb(148 163 184)', fontSize: '0.875rem', maxWidth: '28rem' }}>
            Real-time telemetry and management for distributed synthetic intelligence tasks across the global node network.
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button className="btn-ghost" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-xl)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>filter_list</span> Filters
          </button>
          <button className="btn-ghost" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-xl)', fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>download</span> Export Log
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        {[
          { label: 'Total Jobs', value: '1,284', sub: '+12.5%', subColor: 'var(--tertiary)' },
          { label: 'Success Rate', value: '99.2%', sub: 'Stable', subColor: 'var(--tertiary)' },
          { label: 'Compute Load', value: '84.1', sub: 'GFLOPS', subColor: 'var(--secondary)' },
          { label: 'Est. Completion', value: '14m', sub: 'Avg', subColor: 'rgb(100 116 139)' },
        ].map((stat, i) => (
          <div key={i} style={{
            padding: '1.5rem', borderRadius: 'var(--radius-2xl)', background: 'var(--surface-container-low)',
            borderTop: '1px solid rgba(255,255,255,0.05)'
          }}>
            <p style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'rgb(100 116 139)', marginBottom: 4 }}>{stat.label}</p>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.875rem', fontWeight: 900, color: '#fff' }}>{stat.value}</h3>
              <span style={{ color: stat.subColor, fontSize: 12, fontWeight: 700 }}>{stat.sub}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Jobs Table */}
      <div className="glass-panel" style={{ borderRadius: 'var(--radius-2xl)', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}>
        <div style={{ overflowX: 'auto' }}>
          <table className="ether-table">
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Model Architecture</th>
                <th style={{ textAlign: 'center' }}>Status</th>
                <th>Progress</th>
                <th style={{ textAlign: 'right' }}>Run Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {jobsData.map((job, i) => (
                <tr key={i}>
                  <td className="font-mono" style={{ fontSize: 12, color: 'var(--primary)' }}>{job.id}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: 8, height: 8, borderRadius: '50%', background: job.dotColor }} />
                      <div>
                        <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff' }}>{job.model}</p>
                        <p style={{ fontSize: 10, color: 'rgb(100 116 139)' }}>{job.sub}</p>
                      </div>
                    </div>
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <span className={`badge ${statusBadgeClass(job.status)}`}>
                      {job.status === 'Running' && <span className="badge-pulse-dot" />}
                      {job.status}
                    </span>
                  </td>
                  <td style={{ width: 256 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div className="compute-track" style={{ flex: 1 }}>
                        <div style={{
                          height: '100%', borderRadius: 999,
                          width: `${job.progress}%`,
                          background: job.status === 'Completed' ? 'var(--tertiary)' : job.status === 'Running' ? 'linear-gradient(90deg, var(--tertiary), var(--primary))' : 'rgb(51 65 85)',
                          boxShadow: job.status === 'Running' ? '0 0 8px rgba(60,221,199,0.4)' : 'none',
                          transition: 'width 0.5s ease'
                        }} />
                      </div>
                      <span className="font-mono" style={{ fontSize: 12, color: job.progress > 0 ? 'var(--tertiary)' : 'rgb(75 85 99)' }}>
                        {job.progress > 0 ? `${job.progress}%` : '--'}
                      </span>
                    </div>
                  </td>
                  <td className="font-mono" style={{ textAlign: 'right', fontSize: 12, color: 'rgb(148 163 184)' }}>{job.time}</td>
                  <td style={{ textAlign: 'right' }}>
                    <button style={{ padding: '0.5rem', background: 'none', border: 'none', color: 'rgb(100 116 139)', cursor: 'pointer', opacity: 0.5 }}>
                      <span className="material-symbols-outlined" style={{ fontSize: 14 }}>more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{
          padding: '1rem 1.5rem', background: 'var(--surface)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 12, color: 'rgb(100 116 139)'
        }}>
          <p>Showing 5 of 1,284 compute jobs</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
              <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_left</span> Previous
            </button>
            <div style={{ display: 'flex', gap: 4 }}>
              <span className="btn-pulse" style={{ width: 24, height: 24, borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700 }}>1</span>
              <span style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>2</span>
              <span style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>3</span>
            </div>
            <button style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 4 }}>
              Next <span className="material-symbols-outlined" style={{ fontSize: 14 }}>chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid-12" style={{ marginTop: '3rem' }}>
        {/* Chart Card */}
        <div className="col-span-8" style={{
          padding: '2rem', borderRadius: 'var(--radius-2xl)', background: 'var(--surface-container-low)',
          border: '1px solid rgba(70,69,84,0.1)', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 10 }}>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Network Telemetry</h4>
            <div style={{ height: 192, display: 'flex', alignItems: 'flex-end', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {[40, 65, 50, 85, 75, 95, 60, 45, 80, 30].map((h, i) => (
                <div key={i} style={{
                  flex: 1, background: 'rgba(173,198,255,0.2)', height: `${h}%`,
                  borderRadius: '2px 2px 0 0', transition: 'background-color 0.2s ease', cursor: 'pointer'
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(173,198,255,0.4)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(173,198,255,0.2)'} />
              ))}
            </div>
            <p style={{ fontSize: '0.875rem', color: 'rgb(148 163 184)' }}>
              Computation distribution is currently optimized for low-latency inference across North American and European node clusters.
            </p>
          </div>
          <div style={{ position: 'absolute', bottom: -40, right: -40, width: 192, height: 192, background: 'rgba(173,198,255,0.05)', filter: 'blur(80px)', borderRadius: '50%' }} />
        </div>

        {/* Terminal Card */}
        <div className="col-span-4" style={{
          padding: '2rem', borderRadius: 'var(--radius-2xl)',
          background: 'var(--surface-container-lowest)', border: '1px solid rgba(70,69,84,0.1)'
        }}>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '1.5rem' }}>System Terminal</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontFamily: 'monospace', fontSize: 11 }}>
            {[
              { time: '[14:32:01]', tag: 'SYNC', tagColor: 'var(--tertiary)', msg: 'Handshake verified with Node-094' },
              { time: '[14:32:05]', tag: 'INFO', tagColor: 'var(--primary)', msg: 'Allocating 48GB VRAM for #JOB-8821' },
              { time: '[14:32:12]', tag: 'PROC', tagColor: 'var(--secondary)', msg: 'Weights loaded: Mistral-7B-v0.2' },
              { time: '[14:33:00]', tag: 'OK', tagColor: 'var(--tertiary)', msg: 'Job deployment handshake complete.' },
            ].map((log, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem' }}>
                <span style={{ color: 'rgb(75 85 99)' }}>{log.time}</span>
                <span style={{ color: log.tagColor }}>{log.tag}</span>
                <span style={{ color: 'rgb(203 213 225)' }}>{log.msg}</span>
              </div>
            ))}
            <div style={{ paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--primary)' }}>→</span>
              <span className="cursor-blink" style={{ width: 6, height: 16, background: 'var(--primary)' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
