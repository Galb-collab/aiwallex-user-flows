import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './LoggingInFlow.css'

export function LoggingInFlow() {
  const location = useLocation()
  const is2FA = location.pathname.includes('/verify-2fa')

  return (
    <div className={`logging-in-flow ${is2FA ? 'logging-in-flow--2fa' : ''}`}>
      <header className="logging-in-header">
        <Link to="/" className="logging-in-back-flows">← Flows</Link>
        <Link to="/" className="logging-in-logo">
          <span className="logo-icon">A</span>
          Airwallex
        </Link>
      </header>
      <main className="logging-in-main">
        <Outlet />
      </main>
      <footer className="logging-in-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> airwallex</span>
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
