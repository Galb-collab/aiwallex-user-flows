import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryFundAccount() {
  const { flowPath } = useCompany()

  return (
    <div className="mercury-flow-layout mercury-dashboard-layout">
      <aside className="mercury-dashboard-sidebar">
        <Link to={flowPath('/flow/mercury-dashboard')} className="mercury-logo mercury-sidebar-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          Mobbin
        </Link>
        <nav className="mercury-sidebar-nav">
          <Link to={flowPath('/flow/mercury-dashboard')} className="active">Home</Link>
          <Link to={flowPath('/flow/mercury-transactions')}>Tasks <span className="mercury-badge">10</span></Link>
          <Link to={flowPath('/flow/mercury-transactions')}>Transactions</Link>
          <Link to={flowPath('/flow/mercury-create-recipient')}>Payments <span className="mercury-nav-chevron">▼</span></Link>
          <Link to={flowPath('/flow/mercury-cards')}>Cards</Link>
          <Link to={flowPath('/flow/mercury-dashboard')}>Capital</Link>
          <Link to={flowPath('/flow/mercury-dashboard')}>Accounts <span className="mercury-nav-chevron">▼</span></Link>
          <div className="mercury-sidebar-section">Workflows</div>
          <Link to={flowPath('/flow/mercury-bill-pay')}>Bill Pay</Link>
          <Link to={flowPath('/flow/mercury-invoicing')}>Invoicing <span className="mercury-nav-chevron">▼</span></Link>
          <Link to={flowPath('/flow/mercury-reimbursements')}>Reimbursements</Link>
        </nav>
      </aside>
      <main className="mercury-dashboard-main">
        <header className="mercury-dashboard-topbar">
          <div className="mercury-company-selector">
            <div className="mercury-company-avatar">M</div>
            <span>Mobbin</span>
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
        </header>

        <div className="mercury-fund-account-content">
          <p className="mercury-breadcrumb">Fund account &gt; Finalize setup</p>
          <h1 className="mercury-step-title">Fund your account to get started</h1>

          <div className="mercury-fund-two-col">
            <div className="mercury-fund-card mercury-fund-wire">
              <h3>Domestic wire transfer</h3>
              <span className="mercury-pill">Fastest</span>
              <p className="mercury-fund-desc">Arrives within 1 business day. Best for large transfers.</p>
              <div className="mercury-fund-field">
                <label className="mercury-label">Routing number</label>
                <div className="mercury-copy-field">
                  <span>••••••••••</span>
                  <button type="button" className="mercury-copy-btn" title="Copy">📋</button>
                </div>
              </div>
              <div className="mercury-fund-field">
                <label className="mercury-label">Account number</label>
                <div className="mercury-copy-field">
                  <span>••••••••••</span>
                  <button type="button" className="mercury-copy-btn" title="Copy">📋</button>
                </div>
              </div>
              <button type="button" className="mercury-btn-primary mercury-btn-inline">
                Download Wire Details
              </button>
            </div>

            <div className="mercury-fund-card mercury-fund-ach">
              <h3>ACH transfer</h3>
              <p className="mercury-fund-desc">
                Arrives within 3-5 days. Limits may apply. Some external accounts require approval for ACH transfers. Add Mercury as a trusted account first to avoid any issues.
              </p>
              <button type="button" className="mercury-btn-secondary mercury-btn-inline">
                Connect Bank Account
              </button>
              <Link to={flowPath('/flow/mercury-dashboard')} className="mercury-link" style={{ marginTop: 12, display: 'block' }}>
                Other deposit options
              </Link>
            </div>
          </div>

          <div className="mercury-fund-dashboard-section">
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
            <div className="mercury-dashboard-cards mercury-fund-cards">
              <div className="mercury-balance-card mercury-fund-balance">
                <h3>Mercury balance</h3>
                <p className="mercury-balance-amount">$0.00</p>
                <p className="mercury-balance-period">Last 30 days $0 $0</p>
                <div className="mercury-balance-graph" />
              </div>
              <div className="mercury-accounts-card mercury-fund-accounts">
                <h3>Accounts</h3>
                <div className="mercury-account-row">Checking ..2502 — $0.00</div>
                <div className="mercury-account-row">Savings ..5679 — $0.00</div>
                <p className="mercury-accounts-desc">
                  Accounts for all your needs Create dedicated accounts for operating expenses, taxes, team budgets, and more.
                </p>
                <button type="button" className="mercury-btn-primary mercury-btn-inline">+ Create account</button>
              </div>
            </div>
          </div>
        </div>

        <div className="mercury-help-icon">?</div>
      </main>
    </div>
  )
}
