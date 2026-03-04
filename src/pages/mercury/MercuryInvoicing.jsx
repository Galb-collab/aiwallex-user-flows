import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryInvoicing() {
  const { flowPath, basePath } = useCompany()

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
          <Link to={flowPath('/flow/mercury-cards')}>Cards</Link>
          <Link to={flowPath('/flow/mercury-dashboard')}>Capital</Link>
          <Link to={flowPath('/flow/mercury-dashboard')}>Accounts <span className="mercury-nav-chevron">▼</span></Link>
          <div className="mercury-sidebar-section">Workflows</div>
          <Link to={flowPath('/flow/mercury-bill-pay')}>Bill Pay</Link>
          <Link to={flowPath('/flow/mercury-invoicing')} className="active">Invoicing <span className="mercury-nav-chevron">▼</span></Link>
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
          <div className="mercury-page-header">
            <h1 className="mercury-page-title">Invoicing</h1>
            <button type="button" className="mercury-btn-primary mercury-btn-inline">+ Create Invoice</button>
          </div>
          <div className="mercury-transactions-summary">
            <div className="mercury-summary-card">
              <p>Overdue</p>
              <strong>−</strong>
            </div>
            <div className="mercury-summary-card">
              <p>Paid</p>
              <strong>−</strong>
            </div>
            <div className="mercury-summary-card">
              <p>Open</p>
              <strong>1 invoice · $10.60</strong>
            </div>
          </div>
          <div className="mercury-transactions-table-wrap">
            <table className="mercury-transactions-table">
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>INV-001</td>
                  <td>$10.60</td>
                  <td><span className="mercury-status-badge mercury-status-pending">Open</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
