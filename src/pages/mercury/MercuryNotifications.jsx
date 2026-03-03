import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryNotifications() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [email, setEmail] = useState(true)
  const [push, setPush] = useState(true)
  const [sms, setSms] = useState(false)

  return (
    <div className="mercury-flow-layout mercury-dashboard-layout">
      <aside className="mercury-dashboard-sidebar">
        <Link to={flowPath('/flow/mercury-dashboard')} className="mercury-logo mercury-sidebar-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          Mobbin
        </Link>
        <nav className="mercury-sidebar-nav" style={{ marginTop: 8 }}>
          <Link to={flowPath('/flow/mercury-dashboard')} className="mercury-step-back" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 24 }}>
            ← Settings
          </Link>
          <div className="mercury-sidebar-section" style={{ marginTop: 16 }}>Company</div>
          <Link to={flowPath('/flow/mercury-categories')}>Categories</Link>
          <div className="mercury-sidebar-section" style={{ marginTop: 16 }}>Personal</div>
          <Link to={flowPath('/flow/mercury-notifications')} className="active">Notifications</Link>
          <Link to={flowPath('/flow/mercury-profile-picture')}>My Profile</Link>
          <Link to={flowPath('/flow/mercury-change-password')}>Security</Link>
        </nav>
      </aside>
      <main className="mercury-dashboard-main">
        <div className="mercury-dashboard-content" style={{ padding: 32, maxWidth: 560 }}>
        <div className="mercury-card" style={{ padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 className="mercury-step-title">Notifications</h1>
          <button type="button" className="mercury-step-back" onClick={() => navigate(flowPath('/flow/mercury-dashboard'))}>×</button>
        </div>
        <p className="mercury-step-subtitle">Choose how you want to be notified about account activity.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <label className="mercury-checkbox">
            <input type="checkbox" checked={email} onChange={(e) => setEmail(e.target.checked)} />
            <span>Email notifications</span>
          </label>
          <label className="mercury-checkbox">
            <input type="checkbox" checked={push} onChange={(e) => setPush(e.target.checked)} />
            <span>Push notifications</span>
          </label>
          <label className="mercury-checkbox">
            <input type="checkbox" checked={sms} onChange={(e) => setSms(e.target.checked)} />
            <span>SMS notifications</span>
          </label>
        </div>
        <button type="button" className="mercury-btn-primary" onClick={() => navigate(flowPath('/flow/mercury-dashboard'))}>Save</button>
        </div>
        </div>
      </main>
    </div>
  )
}
