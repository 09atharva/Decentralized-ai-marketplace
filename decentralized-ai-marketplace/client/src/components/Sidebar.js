import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const navItems = [
  { path: '/dashboard', icon: 'dashboard', label: 'Dashboard' },
  { path: '/marketplace', icon: 'hub', label: 'Marketplace' },
  { path: '/jobs', icon: 'terminal', label: 'Compute Jobs' },
  { path: '/nodes', icon: 'memory', label: 'Node Registry' },
  { path: '/docs', icon: 'description', label: 'Documentation' },
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        {/* Brand */}
        <div className="sidebar-brand" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
          <h1>Synthetic Ether</h1>
          <p>High-Compute Intelligence</p>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <button
            className="sidebar-deploy-btn"
            onClick={() => navigate('/upload')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
              add_circle
            </span>
            Deploy Model
          </button>

          <nav className="sidebar-nav">
            <NavLink to="/payments" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                payments
              </span>
              <span>Payments</span>
            </NavLink>

            <NavLink to="/settings" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                settings
              </span>
              <span>Settings</span>
            </NavLink>

            <NavLink to="/support" className={({ isActive }) => isActive ? 'active' : ''}>
              <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
                help_outline
              </span>
              <span>Support</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </aside>
  );
}
