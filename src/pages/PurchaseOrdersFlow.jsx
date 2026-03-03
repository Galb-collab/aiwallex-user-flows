import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { DashboardHeader } from '../components/DashboardHeader'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './PurchaseOrdersFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

const PO_FEATURES = [
  {
    id: 'track-spend',
    title: 'Track company spend in real time',
    desc: 'Monitor how much of each PO has been billed to keep budgets on track and improve financial oversight.',
    action: 'Learn more',
    preview: (
      <div className="po-preview-card">
        <div className="po-preview-title">AWXPO-0022</div>
        <div className="po-preview-total">Purchase order total 3,000.00 USD</div>
        <div className="po-preview-badges">
          <span className="po-preview-paid">Paid bills 850.00 USD</span>
          <span className="po-preview-pending">Pending bills 425.00 USD</span>
        </div>
        <table className="po-preview-table">
          <thead>
            <tr><th>BILLS</th><th>AMOUNT</th><th>STATUS</th></tr>
          </thead>
          <tbody>
            <tr>
              <td>License for Marketing Team</td>
              <td>425.00 USD</td>
              <td>Payment in progress</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  {
    id: 'planned-actual',
    title: 'Track planned vs. actual',
    desc: 'See your actual spend against your commitments to make informed purchasing decisions.',
    action: 'Learn more',
    preview: (
      <div className="po-preview-simple">
        <span className="po-preview-id">PO-0022</span>
        <span className="po-preview-amount">8,100.00 USD</span>
      </div>
    ),
  },
  {
    id: 'match-line-items',
    title: 'Match line items instantly',
    desc: 'No more struggling to manually reconcile. Verify bills and pay the right amounts - with speed and confidence.',
    action: 'Learn more',
    preview: (
      <div className="po-preview-simple po-preview-match">
        <span className="po-preview-amount">400.00 USD</span>
        <span className="po-preview-label">Matches PO</span>
      </div>
    ),
  },
  {
    id: 'netsuite',
    title: '2-way sync with NetSuite',
    desc: 'Easily import POs from NetSuite and sync new ones back.',
    action: 'Learn more',
    preview: (
      <div className="po-preview-sync">
        <div className="po-preview-row">AWXPO-0022 <span className="po-status">Open</span></div>
        <div className="po-preview-row">WFHO-0222 <span className="po-status">Open</span></div>
        <div className="po-preview-synced">Synced to Netsuite</div>
      </div>
    ),
  },
]

export function PurchaseOrdersFlow() {
  const { flowPath, info } = useCompany()
  return (
    <div className="dashboard spend-general purchase-orders-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to={flowPath('/flow/dashboard')}>Dashboard</Link>
          <div className="sidebar-nav-item active-wrap">
            <Link to={flowPath('/flow/spend-general')}>Spend <span className="tag">New</span></Link>
            <div className="sidebar-sub">
              <Link to={flowPath('/flow/spend-general/expenses-spend')}>Expenses</Link>
              <Link to={flowPath('/flow/bills')}>Bills</Link>
              <Link to={flowPath('/flow/spend-general/purchase-orders')} className="active">Purchase orders</Link>
              <Link to={flowPath('/flow/vendors')}>Vendors</Link>
              <Link to={flowPath('/flow/requests')}>Requests</Link>
            </div>
          </div>
          <Link to={flowPath('/flow/billing')}>Billing <span className="tag">New</span></Link>
          <Link to={flowPath('/flow/reports')}>Reports</Link>
          <Link to={flowPath('/flow/settings')}>Settings</Link>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{BUSINESS_NAME} Account | {BUSINESS_NAME}</div>
          <Link to={flowPath('/flow/wallet')}>Wallet</Link>
          <Link to={flowPath('/flow/transfers')}>Transfers</Link>
          <Link to={flowPath('/flow/cards')}>Cards</Link>
          <Link to={flowPath('/flow/payments')}>Payments</Link>
          <Link to={flowPath('/flow/rewards')}>Rewards</Link>
          <Link to={flowPath('/flow/rewards/security')}>Security</Link>
        </div>
        <div className="sidebar-footer">
          <span className="logo-icon small">A</span>
          <span>AIwallex</span>
        </div>
      </aside>

      <div className="dashboard-main">
        <DashboardHeader email={EMAIL} className="po-header">
          <Link to={flowPath('/flow/spend-general')} className="po-back-link">← Spend</Link>
          <div className="po-grow-banner">
            <span className="po-grow-icon">✨</span>
            You have discovered a Grow feature
          </div>
        </DashboardHeader>

        <div className="po-content">
          <h1 className="po-title">Control company spend with purchase orders</h1>
          <p className="po-subtitle">Get a real-time view of your committed spend, from initial order to final payment, all in one place.</p>
          <button type="button" className="po-upgrade-btn">Upgrade plan to unlock</button>

          <div className="po-features">
            {PO_FEATURES.map((f) => (
              <div key={f.id} className="po-feature-card">
                <h3 className="po-feature-title">{f.title}</h3>
                <p className="po-feature-desc">{f.desc}</p>
                <a href="#learn" className="po-feature-link">{f.action} →</a>
                <div className="po-feature-preview">{f.preview}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="spend-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Purchase orders</span>
      </footer>
    </div>
  )
}
