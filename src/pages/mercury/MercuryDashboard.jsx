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
          <Link to={flowPath('/flow/mercury-dashboard')}>Reimbursements</Link>
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

        <div className="mercury-dashboard-content">
          <h1 className="mercury-welcome">Welcome, Jane</h1>
          <div className="mercury-action-buttons">
            <button type="button" className="mercury-btn-primary mercury-btn-inline">Send</button>
            <button type="button" className="mercury-btn-secondary mercury-btn-inline">Request</button>
            <button type="button" className="mercury-btn-secondary mercury-btn-inline" onClick={() => setShowTransferModal(true)}>Transfer</button>
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
