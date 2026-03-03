import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryProfilePicture() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  return (
    <div className="mercury-flow-layout mercury-dashboard-layout">
      <aside className="mercury-dashboard-sidebar">
        <Link to={flowPath('/flow/mercury-dashboard')} className="mercury-logo mercury-sidebar-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          Mobbin
        </Link>
        <nav className="mercury-sidebar-nav" style={{ marginTop: 8 }}>
          <Link to={flowPath('/flow/mercury-settings')} className="mercury-step-back" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 24 }}>
            ← Settings
          </Link>
          <div className="mercury-sidebar-section" style={{ marginTop: 16 }}>Company</div>
          <Link to={flowPath('/flow/mercury-categories')}>Categories</Link>
          <div className="mercury-sidebar-section" style={{ marginTop: 16 }}>Personal</div>
          <Link to={flowPath('/flow/mercury-notifications')}>Notifications</Link>
          <Link to={flowPath('/flow/mercury-profile-picture')} className="active">My Profile</Link>
          <Link to={flowPath('/flow/mercury-change-password')}>Security</Link>
        </nav>
      </aside>
      <main className="mercury-dashboard-main">
        <div className="mercury-dashboard-content" style={{ padding: 32, maxWidth: 480 }}>
        <div className="mercury-card" style={{ padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 className="mercury-step-title">Add profile picture</h1>
          <button type="button" className="mercury-step-back" onClick={() => navigate(flowPath('/flow/mercury-dashboard'))}>×</button>
        </div>
        <p className="mercury-step-subtitle" style={{ marginBottom: 16 }}>Images should be at least 256x256 pixels.</p>
        <p className="mercury-step-subtitle" style={{ marginBottom: 24 }}>They will only be visible to those on your team, not recipients.</p>
        <p className="mercury-label" style={{ marginBottom: 8 }}>Upload new profile picture</p>
        <div style={{ border: '2px dashed var(--mercury-border)', borderRadius: 8, padding: 32, textAlign: 'center', marginBottom: 24, background: '#f9fafb' }}>
          <span style={{ fontSize: 32, color: 'var(--mercury-muted)' }}>📄</span>
          <p style={{ margin: '8px 0 4px' }}>Drag and drop here or click to upload</p>
          <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: 0 }}>You may upload one JPEG or PNG file</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button type="button" className="mercury-btn-secondary mercury-btn-inline" onClick={() => navigate(flowPath('/flow/mercury-dashboard'))}>Cancel</button>
        </div>
        </div>
        </div>
      </main>
    </div>
  )
}
