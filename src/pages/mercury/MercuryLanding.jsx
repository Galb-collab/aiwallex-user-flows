import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryLanding() {
  const navigate = useNavigate()
  const { flowPath, basePath } = useCompany()
  const [email, setEmail] = useState('')

  const handleOpenAccount = (e) => {
    e.preventDefault()
    if (email.trim()) navigate(flowPath('/flow/mercury-signup/company-name'))
  }

  return (
    <div className="mercury-flow-layout mercury-landing-page">
      <header className="mercury-header mercury-landing-header">
        <Link to={basePath()} className="mercury-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          MERCURY
        </Link>
        <nav className="mercury-landing-nav">
          <a href="#products" className="mercury-nav-link">Products <span className="mercury-nav-chevron">▼</span></a>
          <a href="#solutions" className="mercury-nav-link">Solutions <span className="mercury-nav-chevron">▼</span></a>
          <a href="#resources" className="mercury-nav-link">Resources <span className="mercury-nav-chevron">▼</span></a>
          <a href="#about" className="mercury-nav-link">About <span className="mercury-nav-chevron">▼</span></a>
          <a href="#pricing" className="mercury-nav-link">Pricing</a>
          <Link to={flowPath('/flow/mercury-login')} className="mercury-nav-link">Log In</Link>
          <button type="button" className="mercury-btn-primary mercury-btn-nav" onClick={() => navigate(flowPath('/flow/mercury-signup/company-name'))}>
            Open Account
          </button>
        </nav>
      </header>
      <main className="mercury-landing-hero">
        <h1 className="mercury-landing-headline">Powerful banking. Simplified finances.</h1>
        <p className="mercury-landing-subheadline">
          Apply in 10 minutes<sup>¹</sup> for online business banking that transforms how you operate.
        </p>
        <form onSubmit={handleOpenAccount} className="mercury-landing-cta">
          <input
            type="email"
            className="mercury-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="mercury-btn-primary">Open Account</button>
          <button type="button" className="mercury-btn-secondary mercury-btn-inline" onClick={() => {}}>Contact Sales</button>
        </form>
      </main>
      <div className="mercury-landing-dashboard-preview">
        <div className="mercury-dashboard-preview-inner">
          <div className="mercury-dashboard-preview-topbar">
            <div className="mercury-company-selector">
              <div className="mercury-company-avatar">M</div>
              <span>Skyscape Systems</span>
              <span className="mercury-nav-chevron">▼</span>
            </div>
            <div className="mercury-search-bar">
              <span className="mercury-search-icon">🔍</span>
              Search or jump to
              <span className="mercury-kbd">⌘K</span>
            </div>
            <div className="mercury-topbar-right">
              <span className="mercury-nav-link">Move Money ▼</span>
              <span className="mercury-icon-btn">🔔</span>
              <span className="mercury-icon-btn mercury-avatar">👤</span>
            </div>
          </div>
          <div className="mercury-dashboard-preview-body">
            <aside className="mercury-dashboard-preview-sidebar">
              <div className="mercury-sidebar-item active">Home</div>
              <div className="mercury-sidebar-item">Tasks <span className="mercury-badge">10</span></div>
              <div className="mercury-sidebar-item">Transactions</div>
              <div className="mercury-sidebar-item">Payments ▼</div>
              <div className="mercury-sidebar-item">Cards</div>
              <div className="mercury-sidebar-item">Capital</div>
              <div className="mercury-sidebar-item">Accounts ▼</div>
              <div className="mercury-sidebar-section">Workflows</div>
              <div className="mercury-sidebar-item">Bill Pay</div>
              <div className="mercury-sidebar-item">Invoicing</div>
              <div className="mercury-sidebar-item">Reimbursements</div>
            </aside>
            <div className="mercury-dashboard-preview-main">
              <h2 className="mercury-welcome">Welcome, Jane</h2>
              <div className="mercury-action-buttons">
                <button type="button" className="mercury-btn-primary mercury-btn-inline">Send</button>
                <button type="button" className="mercury-btn-secondary mercury-btn-inline">Request</button>
                <button type="button" className="mercury-btn-secondary mercury-btn-inline">Transfer</button>
                <button type="button" className="mercury-btn-secondary mercury-btn-inline">Deposit</button>
                <button type="button" className="mercury-btn-secondary mercury-btn-inline">Pay Bill</button>
                <button type="button" className="mercury-btn-secondary mercury-btn-inline">Create Invoice</button>
                <span className="mercury-link">Customize</span>
              </div>
              <div className="mercury-dashboard-cards">
                <div className="mercury-balance-card">
                  <h3>Mercury Balance <span className="mercury-check">✓</span></h3>
                  <p className="mercury-balance-amount">$12,582,210.27</p>
                  <p className="mercury-balance-period">Last 30 Days</p>
                  <div className="mercury-balance-graph" />
                </div>
                <div className="mercury-accounts-card">
                  <h3>Accounts</h3>
                  <div className="mercury-account-row">Payroll — $1,149,093.31</div>
                  <div className="mercury-account-row">Operating Expenses — $1,323,267.12</div>
                  <div className="mercury-account-row">Treasury — $6,038,617.42</div>
                  <div className="mercury-account-row">Accounts Payable — $226,727.82</div>
                  <div className="mercury-account-row">Accounts Receivable — $0.00</div>
                  <span className="mercury-link">+2 View all accounts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="mercury-landing-footer">
        Mercury is a financial technology company, not a bank. Banking services provided through Choice Financial Group, Column N.A., and Evolve Bank & Trust; Members FDIC.
      </footer>
    </div>
  )
}
