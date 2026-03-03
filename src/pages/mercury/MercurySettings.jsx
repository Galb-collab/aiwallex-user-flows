import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercurySettings() {
  const { flowPath } = useCompany()

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
          <Link to={flowPath('/flow/mercury-notifications')}>Notifications</Link>
          <Link to={flowPath('/flow/mercury-profile-picture')}>My Profile</Link>
          <Link to={flowPath('/flow/mercury-change-password')}>Security</Link>
        </nav>
      </aside>
      <main className="mercury-dashboard-main">
        <Outlet />
      </main>
    </div>
  )
}
