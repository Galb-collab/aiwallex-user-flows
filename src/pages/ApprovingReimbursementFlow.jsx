import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DashboardHeader } from '../components/DashboardHeader'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './ExpensesFlow.css'
import './ApprovingReimbursementFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

const REPORT_DATE = '18 November 2025'
const REPORT_ID = 'Reimbursement report 2025-11-27'
const AMOUNT = '5.00 SGD'
const SUBMITTER = 'Alex Smith'

const TABLE_ROWS = [
  { id: '1', reportName: '-', user: 'Sam Lee', submissionDate: '-', amount: '0.00 SGD', status: 'Draft' },
  { id: '2', reportName: 'Reimbursement report 2...', user: 'Alex Smith', submissionDate: '2025-11-27', amount: '5.00 SGD', meta: '1 reimbursement', status: 'Pending your approval' },
  { id: '3', reportName: 'Reimbursement report 2...', user: 'Sam Lee', submissionDate: '-', amount: '5.00 SGD', meta: '1 reimbursement', status: 'Draft' },
  { id: '4', reportName: 'Reimbursement report 2...', user: 'Sam Lee', submissionDate: '-', amount: '0.00 SGD', status: 'Draft' },
]

const FILTERING_PATH = '/flow/spend-general/expenses-spend/filtering-reimbursement'

const ACTIVITY = [
  { icon: '✈', time: 'Nov 27, 2025, 3:05 PM (UTC+08:00)', who: 'Alex Smith', action: 'Submitted report' },
  { icon: '👁', current: true, who: 'Sam Lee (me)', action: 'Pending approval' },
]

export function ApprovingReimbursementFlow() {
  const navigate = useNavigate()
  const [view, setView] = useState('list')
  const [approved, setApproved] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const openReport = () => setView('detail')
  const closeReport = () => setView('list')
  const handleApprove = () => {
    setApproved(true)
    setView('list')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  const rows = TABLE_ROWS.map((r) => ({
    ...r,
    status: r.id === '2' && approved ? 'Awaiting payment' : r.status,
  }))

  if (view === 'detail') {
    return (
      <div className="approving-reimb-flow approving-reimb-detail">
        <header className="ar-header">
          <h1 className="ar-header-title">Report details</h1>
          <div className="ar-header-actions">
            <button type="button" className="ar-icon-btn" aria-label="More options">⋮</button>
            <button type="button" className="ar-icon-btn ar-close" onClick={closeReport} aria-label="Close">×</button>
          </div>
        </header>

        <main className="ar-main">
          <div className="ar-report-meta">
            <span className="ar-report-date">{REPORT_DATE}</span>
            <h2 className="ar-report-title">{REPORT_ID}</h2>
            <span className="ar-status ar-status-pending">Pending your approval</span>
            <p className="ar-report-summary">{AMOUNT} submitted by {SUBMITTER}</p>
          </div>

          <div className="ar-columns">
            <div className="ar-left">
              <section className="ar-section">
                <h3 className="ar-section-title">1 reimbursement in this report</h3>
                <div className="ar-reimb-card">
                  <span>2025-11-17</span>
                  <span>K</span>
                  <span>5.00 USD</span>
                  <span className="ar-amount-sgd">5.00 SGD</span>
                  <span className="ar-arrow">→</span>
                </div>
              </section>
              <section className="ar-section">
                <label className="ar-label">Comments</label>
                <textarea className="ar-textarea" placeholder="Add a comment here" rows={3} />
                <button type="button" className="ar-btn secondary" disabled>Add comment</button>
              </section>
              <section className="ar-section">
                <h3 className="ar-section-title">Report activity</h3>
                <ul className="ar-activity">
                  {ACTIVITY.map((a, i) => (
                    <li key={i} className="ar-activity-item">
                      <span className="ar-activity-icon">{a.icon}</span>
                      <div className="ar-activity-body">
                        {a.time && <span className="ar-activity-time">{a.time}</span>}
                        {a.current && (
                          <div className="ar-current-step">
                            <span className="ar-current-label">Current step</span>
                            <span className="ar-current-who">{a.who}</span>
                            <span className="ar-activity-action">{a.action}</span>
                          </div>
                        )}
                        {!a.current && (
                          <>
                            <span className="ar-activity-who">{a.who}</span>
                            <span className="ar-activity-action">{a.action}</span>
                          </>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="ar-center">
              <section className="ar-section ar-details">
                <div className="ar-details-head">
                  <h3 className="ar-section-title">Reimbursement details</h3>
                  <div className="ar-details-actions">
                    <button type="button" className="ar-btn-link">Itemise</button>
                    <button type="button" className="ar-btn-link">Edit</button>
                  </div>
                </div>
                <dl className="ar-dl">
                  <dt>Amount claimed</dt>
                  <dd>{AMOUNT}</dd>
                  <dt>Transaction amount</dt>
                  <dd>5.00 USD</dd>
                  <dt>Transaction date</dt>
                  <dd>2025-11-17</dd>
                  <dt>Merchant</dt>
                  <dd>K</dd>
                  <dt>Reimbursement description</dt>
                  <dd>Food</dd>
                </dl>
                <label className="ar-label">Comments</label>
                <textarea className="ar-textarea" placeholder="Add a comment here" rows={2} />
                <button type="button" className="ar-btn secondary" disabled>Add comment</button>
              </section>
            </div>

            <div className="ar-right">
              <div className="ar-receipt-preview">
                <div className="ar-receipt-placeholder">
                  <span className="ar-receipt-label">Receipt</span>
                  <span className="ar-receipt-meta">11/17/2025 · 1 Americano $2.0, 2 Chocolate Chip Cookie $1.5, 2 Coke $1.5</span>
                  <span className="ar-receipt-total">Total $5.00</span>
                </div>
                <div className="ar-receipt-actions">
                  <button type="button" className="ar-receipt-icon" aria-label="View">⛶</button>
                  <button type="button" className="ar-receipt-icon" aria-label="Download">↓</button>
                </div>
              </div>
              <button type="button" className="ar-btn secondary" disabled>Add files</button>
            </div>
          </div>
        </main>

        <footer className="ar-footer">
          <span className="ar-footer-logo"><span className="ar-logo-icon">A</span> airwallex</span>
          <div className="ar-footer-actions">
            <button type="button" className="ar-btn secondary">Request resubmission</button>
            <button type="button" className="ar-btn primary" onClick={handleApprove}>Approve</button>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="dashboard spend-general expenses-flow approving-reimb-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to="/flow/dashboard">Dashboard</Link>
          <div className="sidebar-nav-item active-wrap">
            <Link to="/flow/spend-general">Spend <span className="tag">New</span></Link>
            <div className="sidebar-sub">
              <Link to="/flow/spend-general/expenses-spend" className="active">Expenses</Link>
              <Link to="/flow/bills">Bills</Link>
              <Link to="/flow/purchase-orders">Purchase orders</Link>
              <Link to="/flow/vendors">Vendors</Link>
              <Link to="/flow/requests">Requests</Link>
            </div>
          </div>
          <Link to="/flow/billing">Billing <span className="tag">New</span></Link>
          <a href="#reports">Reports</a>
          <Link to="/flow/settings">Settings</Link>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{BUSINESS_NAME} Account | {BUSINESS_NAME}</div>
          <a href="#wallet">Wallet</a>
          <Link to="/flow/transfers">Transfers</Link>
          <a href="#cards">Cards</a>
          <a href="#payments">Payments</a>
          <Link to="/flow/rewards">Rewards</Link>
          <Link to="/flow/rewards/security">Security</Link>
        </div>
        <div className="sidebar-footer">
          <span className="logo-icon small">A</span>
          <span>AIwallex</span>
        </div>
      </aside>

      <div className="dashboard-main">
        <DashboardHeader email={EMAIL} className="expenses-header">
          <nav className="expenses-tabs">
            <button type="button" className="expenses-tab-back" onClick={() => navigate(FILTERING_PATH)}>← Reimbursements</button>
            <button type="button">Summary</button>
          </nav>
        </DashboardHeader>

        <div className="expenses-content ar-list-content">
          <div className="expenses-title-row">
            <div>
              <h1 className="expenses-page-title">Expenses</h1>
              <p className="expenses-page-subtitle">Manage and approve card expenses and reimbursements</p>
            </div>
            <div className="expenses-title-actions">
              <button type="button" className="expenses-btn secondary">+ Reimbursement report</button>
              <button type="button" className="expenses-btn primary">Upload receipts</button>
            </div>
          </div>

          <div className="expenses-cards ar-cards">
            <div className="expenses-card expenses-card-automations">
              <span className="expenses-card-badge">New</span>
              <h3 className="expenses-card-title">Expense automations</h3>
              <p className="expenses-card-desc">Automate your expense coding with mappings and advanced rules.</p>
              <a href="#automations" className="expenses-card-link">Get started →</a>
            </div>
            <div className="expenses-card">
              <h3 className="expenses-card-title">Pending submission</h3>
              <ul className="expenses-card-items">
                <li>Submit my card expenses 0</li>
                <li>Submit my reimbursements 5.00 SGD <span className="ar-badge">3</span></li>
              </ul>
            </div>
            <div className="expenses-card ar-card-approval" onClick={openReport}>
              <h3 className="expenses-card-title">Pending your approval</h3>
              <ul className="expenses-card-items">
                <li>Approve card expenses 0</li>
                <li>Approve reimbursements 5.00 SGD <span className="ar-badge">1</span></li>
              </ul>
            </div>
            <div className="expenses-card">
              <h3 className="expenses-card-title">Awaiting payment</h3>
              <ul className="expenses-card-items">
                <li>Pay reimbursements {approved ? '5.00 SGD 1' : '0'}</li>
              </ul>
            </div>
          </div>

          <div className="ar-sub-tabs">
            <button type="button">Card expenses</button>
            <button type="button" className="active">Reimbursements</button>
          </div>

          <div className="ar-toolbar">
            <input type="search" className="ar-search" placeholder="Search by report name, reimbursement description, or merchant" />
            <button type="button" className="ar-download" aria-label="Download">↓</button>
            <input type="text" className="ar-filter" placeholder="Date from" />
            <input type="text" className="ar-filter" placeholder="Date to" />
            <select className="ar-filter" aria-label="User"><option>User</option></select>
            <select className="ar-filter" aria-label="Funding account"><option>Funding account</option></select>
            <select className="ar-filter" aria-label="Status"><option>Status</option></select>
          </div>

          <div className="ar-table-wrap">
            <table className="ar-table">
              <thead>
                <tr>
                  <th><input type="checkbox" aria-label="Select all" /></th>
                  <th>REPORT NAME</th>
                  <th>USER</th>
                  <th>SUBMISSION DATE</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className={row.id === '2' ? 'ar-row-clickable' : ''} onClick={row.id === '2' ? openReport : undefined}>
                    <td><input type="checkbox" aria-label={`Select ${row.reportName}`} /></td>
                    <td>{row.reportName}</td>
                    <td>{row.user}</td>
                    <td>{row.submissionDate}</td>
                    <td>{row.amount}{row.meta ? ` ${row.meta}` : ''}</td>
                    <td><span className={`ar-status-pill ar-status-${row.status === 'Awaiting payment' ? 'awaiting' : row.status === 'Pending your approval' ? 'pending' : 'draft'}`}>{row.status}</span></td>
                    <td><button type="button" className="ar-row-menu" aria-label="Menu">⋮</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="ar-pagination">
            <span>1-4 of 4</span>
            <select className="ar-rows-select" aria-label="Rows per page"><option>20</option></select>
            <div className="ar-pagination-btns">
              <button type="button" aria-label="First">«</button>
              <button type="button" aria-label="Previous">‹</button>
              <button type="button" className="active">1</button>
              <button type="button" aria-label="Next">›</button>
              <button type="button" aria-label="Last">»</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="spend-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Approving reimbursement</span>
      </footer>

      {showToast && (
        <div className="ar-toast">
          ✔ You successfully approved a report.
        </div>
      )}
    </div>
  )
}
