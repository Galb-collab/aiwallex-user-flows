import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryTransactions() {
  const { flowPath, basePath } = useCompany()
  const [selectedTx, setSelectedTx] = useState(0) // 0 = first row selected, null = panel closed

  return (
    <div className="mercury-flow-layout mercury-dashboard-layout">
      <aside className="mercury-dashboard-sidebar">
        <Link to={basePath()} className="mercury-logo mercury-sidebar-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          Mobbin
        </Link>
        <nav className="mercury-sidebar-nav">
          <Link to={flowPath('/flow/mercury-dashboard')}>Home</Link>
          <Link to={flowPath('/flow/mercury-transactions')}>Tasks <span className="mercury-badge">10</span></Link>
          <Link to={flowPath('/flow/mercury-transactions')} className="active">Transactions</Link>
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
            <span className="mercury-nav-link">Move Money ▼</span>
            <button type="button" className="mercury-icon-btn" aria-label="Settings">⚙</button>
            <button type="button" className="mercury-icon-btn mercury-notification-btn" aria-label="Notifications">🔔</button>
            <div className="mercury-topbar-avatar">JL</div>
          </div>
        </header>
        <div className="mercury-transactions-content">
          <div className="mercury-transactions-main">
            <h1 className="mercury-page-title">Transactions</h1>
            <div className="mercury-transactions-toolbar">
              <button type="button" className="mercury-btn-secondary mercury-btn-inline">Data Views ▼</button>
              <button type="button" className="mercury-btn-secondary mercury-btn-inline">Filters</button>
              <button type="button" className="mercury-btn-secondary mercury-btn-inline">Date</button>
              <button type="button" className="mercury-btn-secondary mercury-btn-inline">Keywords</button>
              <button type="button" className="mercury-btn-secondary mercury-btn-inline">Amount</button>
            </div>
            <div className="mercury-transactions-summary">
              <div className="mercury-summary-card">
                <p>Net change this month</p>
                <strong>-$2.55</strong>
              </div>
              <div className="mercury-summary-card">
                <p>Money in</p>
                <strong className="positive">$0.00</strong>
              </div>
              <div className="mercury-summary-card">
                <p>Money out</p>
                <strong>-$2.55</strong>
              </div>
            </div>
            <div className="mercury-transactions-table-wrap">
              <table className="mercury-transactions-table">
                <thead>
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>Date ↓</th>
                    <th>To/From</th>
                    <th>Status</th>
                    <th>Amount</th>
                    <th>Account</th>
                    <th>Method</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={selectedTx === 0 ? 'selected' : ''} onClick={() => setSelectedTx(0)}>
                    <td><input type="checkbox" /></td>
                    <td>Oct 28</td>
                    <td><span className="mercury-tx-icon">G</span> Google Workspace</td>
                    <td><span className="mercury-status-badge mercury-status-pending">Pending</span></td>
                    <td>-$2.55</td>
                    <td>Checking ••2502</td>
                    <td><span className="mercury-method">📄</span></td>
                  </tr>
                  <tr className={selectedTx === 1 ? 'selected' : ''} onClick={() => setSelectedTx(1)}>
                    <td><input type="checkbox" /></td>
                    <td>Oct 28</td>
                    <td><span className="mercury-tx-icon">G</span> GOOGLE *TEMPORARY ..</td>
                    <td><span className="mercury-status-badge mercury-status-failed">Failed</span></td>
                    <td>$0.00</td>
                    <td>Checking ••2502</td>
                    <td><span className="mercury-method">📄</span></td>
                  </tr>
                  <tr className={selectedTx === 2 ? 'selected' : ''} onClick={() => setSelectedTx(2)}>
                    <td><input type="checkbox" /></td>
                    <td>Sep 15</td>
                    <td><span className="mercury-tx-icon">MP</span> MOBBIN PTE. LTD.</td>
                    <td><span className="mercury-status-badge mercury-status-completed">Completed</span></td>
                    <td className="positive">$1,001.00</td>
                    <td>Savings ••5679</td>
                    <td>→ Wire</td>
                  </tr>
                  <tr className={selectedTx === 3 ? 'selected' : ''} onClick={() => setSelectedTx(3)}>
                    <td><input type="checkbox" /></td>
                    <td>Sep 15</td>
                    <td><span className="mercury-tx-icon">MP</span> MOBBIN PTE. LTD.</td>
                    <td><span className="mercury-status-badge mercury-status-completed">Completed</span></td>
                    <td className="positive">$1,001.00</td>
                    <td>Checking ••2502</td>
                    <td>→ Wire</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mercury-transactions-count">4 Transactions <span className="mercury-pagination">‹ ›</span></p>
          </div>
          {selectedTx !== null && selectedTx >= 0 && (
            <aside className="mercury-transaction-detail">
              <div className="mercury-detail-header">
                <h3>Debit Card ••9932</h3>
                <button type="button" className="mercury-detail-close" onClick={() => setSelectedTx(null)}>✕</button>
              </div>
              <div className="mercury-detail-body">
                <p className="mercury-detail-merchant">Google Workspace</p>
                <p className="mercury-detail-meta">Oct 28 at 9:21AM UTC - Mercury Checking ••2502</p>
                <p className="mercury-detail-category">Software <span className="mercury-info">ℹ</span></p>
                <span className="mercury-status-badge">Pending</span>
                <a href="#learn" className="mercury-link">Learn More &gt;</a>
                <div className="mercury-detail-section">
                  <label className="mercury-label">Xero GL Code</label>
                  <input type="text" className="mercury-input" placeholder="Select" />
                  <p className="mercury-input-hint">Review and sync on your Accounting Page.</p>
                </div>
                <div className="mercury-detail-section">
                  <label className="mercury-label">Notes</label>
                  <textarea className="mercury-input" rows={3} placeholder="Add notes" />
                </div>
                <div className="mercury-detail-section">
                  <label className="mercury-label">Attachments</label>
                  <div className="mercury-upload-zone">
                    <span className="mercury-upload-icon">📄</span>
                    <span className="mercury-upload-text">Drag and drop here or click to upload</span>
                    <span className="mercury-upload-hint">You may upload PDF, PNG, or JPEG files</span>
                    <span className="mercury-upload-hint">or email receipts to <a href="mailto:receipts@mercury.com">receipts@mercury.com</a></span>
                  </div>
                </div>
                <div className="mercury-detail-section">
                  <label className="mercury-label">Bank description</label>
                  <p className="mercury-detail-bank">GOOGLE *GSUITE_forma-a</p>
                </div>
              </div>
            </aside>
          )}
        </div>
      </main>
    </div>
  )
}
