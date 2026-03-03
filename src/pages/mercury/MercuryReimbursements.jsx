import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryReimbursements() {
  const { flowPath } = useCompany()

  return (
    <div className="mercury-flow-layout mercury-dashboard-layout">
      <aside className="mercury-dashboard-sidebar">
        <Link to={flowPath('/flow/mercury-dashboard')} className="mercury-logo mercury-sidebar-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          Mobbin
        </Link>
        <nav className="mercury-sidebar-nav">
          <Link to={flowPath('/flow/mercury-dashboard')}>Home</Link>
          <Link to={flowPath('/flow/mercury-transactions')}>Tasks <span className="mercury-badge">10</span></Link>
          <Link to={flowPath('/flow/mercury-transactions')}>Transactions</Link>
          <Link to={flowPath('/flow/mercury-create-recipient')}>Payments <span className="mercury-nav-chevron">▼</span></Link>
          <Link to={flowPath('/flow/mercury-requests')}>Requests</Link>
          <Link to={flowPath('/flow/mercury-cards')}>Cards</Link>
          <Link to={flowPath('/flow/mercury-dashboard')}>Capital</Link>
          <Link to={flowPath('/flow/mercury-dashboard')}>Accounts <span className="mercury-nav-chevron">▼</span></Link>
          <div className="mercury-sidebar-section">Workflows</div>
          <Link to={flowPath('/flow/mercury-bill-pay')}>Bill Pay</Link>
          <Link to={flowPath('/flow/mercury-invoicing')}>Invoicing <span className="mercury-nav-chevron">▼</span></Link>
          <Link to={flowPath('/flow/mercury-reimbursements')} className="active">Reimbursements</Link>
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
            <span className="mercury-icon-btn mercury-avatar">JL</span>
          </div>
        </header>
        <div className="mercury-dashboard-content" style={{ padding: 32 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 24px' }}>Reimbursements</h1>
          <div style={{ background: '#fff', borderRadius: 12, padding: 48, border: '2px dashed var(--mercury-border)', textAlign: 'center' }}>
            <p style={{ margin: '0 0 8px', color: 'var(--mercury-muted)' }}>No reimbursements yet.</p>
            <p style={{ margin: 0, fontSize: 14, color: 'var(--mercury-muted)' }}>Team members can submit expenses for reimbursement.</p>
          </div>
        </div>
      </main>
    </div>
  )
}
