import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryDashboard() {
  const { flowPath, basePath } = useCompany()
  const [showTransferModal, setShowTransferModal] = useState(false)

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
            Search for anything
            <span className="mercury-kbd">⌘K</span>
          </div>
          <div className="mercury-topbar-right">
            <Link to={basePath()} className="mercury-step-back" style={{ marginRight: 16 }}>← Flows</Link>
            <span className="mercury-nav-link">Move Money ▼</span>
            <Link to={flowPath('/flow/mercury-settings')} className="mercury-icon-btn" aria-label="Settings">⚙</Link>
            <button type="button" className="mercury-icon-btn mercury-notification-btn" aria-label="Notifications">🔔</button>
            <Link to={flowPath('/flow/mercury-settings')} className="mercury-topbar-avatar" title="Settings">JL</Link>
          </div>
        </header>

        <div className="mercury-dashboard-content">
          <h1 className="mercury-welcome">Welcome, Jane</h1>
          <div className="mercury-action-buttons">
            <button type="button" className="mercury-btn-primary mercury-btn-inline">✈ Send</button>
            <button type="button" className="mercury-btn-secondary mercury-btn-inline" onClick={() => setShowTransferModal(true)}>↔ Transfer</button>
            <Link to={flowPath('/flow/mercury-fund-account')} className="mercury-btn-secondary mercury-btn-inline mercury-btn-link">+ Deposit</Link>
            <button type="button" className="mercury-btn-secondary mercury-btn-inline">↔ Request</button>
            <Link to={flowPath('/flow/mercury-bill-pay')} className="mercury-btn-secondary mercury-btn-inline mercury-btn-link">↑ Upload Bill</Link>
            <Link to={flowPath('/flow/mercury-invoicing')} className="mercury-btn-secondary mercury-btn-inline mercury-btn-link">📄 Create Invoice</Link>
            <Link to={flowPath('/flow/mercury-categories')} className="mercury-link">Customize</Link>
          </div>
          <div className="mercury-dashboard-widgets">
            <div className="mercury-widget mercury-balance-widget">
              <h3>Mercury balance <span className="mercury-check">✓</span></h3>
              <p className="mercury-balance-amount">$1,987.85</p>
              <div className="mercury-balance-meta">
                <span className="mercury-balance-period">Last 30 days</span>
                <span className="mercury-balance-change negative">−$14.15</span>
              </div>
              <div className="mercury-balance-graph" />
            </div>
            <div className="mercury-widget mercury-accounts-widget">
              <h3>Accounts</h3>
              <div className="mercury-account-item">
                <span className="mercury-account-icon">●</span>
                <span>Checking ..2502</span>
                <span className="mercury-account-balance">$987.85</span>
              </div>
              <div className="mercury-account-item">
                <span className="mercury-account-icon">●</span>
                <span>Savings ..5679</span>
                <span className="mercury-account-balance">$1,000.00</span>
              </div>
              <div className="mercury-widget-sub">
                <p>Accounts for all your needs</p>
                <button type="button" className="mercury-btn-secondary mercury-btn-inline mercury-btn-sm">+ Create account</button>
              </div>
              <div className="mercury-widget-sub mercury-automate">
                <p>Automate transfers</p>
                <span className="mercury-automate-arrow">→</span>
              </div>
            </div>
            <div className="mercury-widget mercury-billpay-widget">
              <h3>Bill Pay</h3>
              <div className="mercury-widget-stats">
                <span><strong>Outstanding</strong> 1</span>
                <span><strong>Overdue</strong> −</span>
                <span><strong>Due soon</strong> 1</span>
              </div>
              <p className="mercury-widget-meta">Inbox 0 items · $0</p>
              <Link to={flowPath('/flow/mercury-bill-pay')} className="mercury-link">View &gt;</Link>
            </div>
            <div className="mercury-widget mercury-invoicing-widget">
              <h3>Invoicing</h3>
              <div className="mercury-widget-stats">
                <span><strong>Overdue</strong> −</span>
                <span><strong>Paid</strong> −</span>
              </div>
              <p className="mercury-widget-meta">Open 1 invoice · $10.60</p>
              <Link to={flowPath('/flow/mercury-invoicing')} className="mercury-link">View &gt;</Link>
            </div>
          </div>
        </div>
      </main>

      {showTransferModal && (
        <MercuryTransferModal onClose={() => setShowTransferModal(false)} />
      )}
    </div>
  )
}

function MercuryTransferModal({ onClose }) {
  const [amount, setAmount] = useState('0.00')
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="mercury-modal-overlay" onClick={onClose}>
      <div className="mercury-transfer-modal" onClick={(e) => e.stopPropagation()}>
        <div className="mercury-transfer-modal-header">
          <div className="mercury-logo">
            <img src="/mercury-logo.png" alt="Mercury" />
            Mobbin
          </div>
          <button type="button" className="mercury-modal-close" onClick={onClose} aria-label="Close">✕</button>
        </div>
        <h2 className="mercury-transfer-modal-title">Transfer funds</h2>

        <div className="mercury-transfer-card">
          <h3>One-time transfer</h3>
          <div className="mercury-transfer-field">
            <label className="mercury-label">Amount</label>
            <input type="text" className="mercury-input" placeholder="$ 0.00" value={amount ? `$ ${amount}` : ''} onChange={(e) => setAmount(e.target.value.replace(/[^0-9.]/g, ''))} />
          </div>
          <div className="mercury-transfer-field">
            <label className="mercury-label">Transfer from</label>
            <select className="mercury-input">
              <option value="">Select an account</option>
            </select>
          </div>
          <div className="mercury-transfer-field">
            <label className="mercury-label">Transfer to</label>
            <select className="mercury-input">
              <option value="">Select an account</option>
            </select>
          </div>
          <label className="mercury-transfer-toggle">
            <input type="checkbox" checked={showDetails} onChange={(e) => setShowDetails(e.target.checked)} />
            <span>Add more details</span>
          </label>
          <div className="mercury-transfer-actions">
            <button type="button" className="mercury-btn-secondary" onClick={onClose}>Back</button>
            <button type="button" className="mercury-btn-primary">Next &gt;</button>
          </div>
        </div>

        <div className="mercury-transfer-card mercury-transfer-auto">
          <span className="mercury-transfer-auto-icon">↻</span>
          <span>Auto transfer rule</span>
          <span className="mercury-nav-chevron">›</span>
        </div>

        <div className="mercury-help-icon">?</div>
      </div>
    </div>
  )
}
