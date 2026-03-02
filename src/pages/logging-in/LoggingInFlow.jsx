import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './LoggingInFlow.css'

export function LoggingInFlow() {
  const location = useLocation()
  const { basePath, info } = useCompany()
  const is2FA = location.pathname.includes('/verify-2fa')

  return (
    <div className={`logging-in-flow ${is2FA ? 'logging-in-flow--2fa' : ''}`}>
      <header className="logging-in-header">
        <Link to={basePath()} className="logging-in-back-flows">← Flows</Link>
        <Link to={basePath()} className="logging-in-logo">
          <span className="logo-icon" style={{ background: info.primaryColor }}>{info.logoLetter}</span>
          {info.displayName}
        </Link>
      </header>
      <main className="logging-in-main">
        <Outlet />
      </main>
      <footer className="logging-in-footer">
        <span className="footer-logo"><span className="logo-icon small" style={{ background: info.primaryColor }}>{info.logoLetter}</span> {info.name.toLowerCase()}</span>
        <span>curated by Mobbin</span>
        <span className="logging-in-footer-links">
          <a href="#privacy">Privacy</a>
          <span> - </span>
          <a href="#terms">Terms</a>
        </span>
      </footer>
    </div>
  )
}
