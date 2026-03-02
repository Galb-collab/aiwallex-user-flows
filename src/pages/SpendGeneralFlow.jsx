import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { DashboardHeader } from '../components/DashboardHeader'
import './Dashboard.css'
import './SpendGeneralFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

const SPEND_FEATURES = [
  { id: 'cards', title: 'Cards', description: 'Cards that flex for your teams but play by your rules.', action: 'Create a card', icon: '💳', path: '/flow/cards' },
  { id: 'expenses', title: 'Expenses', description: 'One view for every card tap, claim, and reimbursement.', action: 'Learn more', icon: '📱', path: '/flow/spend-general/expenses-spend' },
  { id: 'bills', title: 'Bills', description: 'Upload, match, and approve invoices in minutes.', action: 'Learn more', icon: '📄', path: '/flow/bills' },
  { id: 'purchase-orders', title: 'Purchase orders', description: 'Get a real-time view of your committed spend, from initial order to final payment.', action: 'Learn more', icon: '📋', badge: 'Available on Grow plan', path: '/flow/spend-general/purchase-orders' },
  { id: 'vendors', title: 'Vendors', description: 'Centralise vendor data, track payments, and automate vendor management workflows.', action: 'Learn more', icon: '🏢', path: '/flow/vendors' },
  { id: 'requests', title: 'Requests', description: 'Empower employees to request what they need, aligning every dollar with company policy.', action: 'Learn more', icon: '✋', path: '/flow/requests' },
]

export function SpendGeneralFlow() {
  const { info } = useCompany()
  return (
    <div className="dashboard spend-general">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <a href="#dashboard">Dashboard</a>
          <div className="sidebar-nav-item active-wrap">
            <a href="#spend" className="active">Spend <span className="tag">New</span></a>
            <div className="sidebar-sub">
              <Link to="/flow/spend-general/expenses-spend">Expenses</Link>
              <Link to="/flow/bills">Bills</Link>
              <Link to="/flow/spend-general/purchase-orders">Purchase orders</Link>
              <Link to="/flow/vendors">Vendors</Link>
              <Link to="/flow/completing-setup-spend">Complete setup</Link>
              <Link to="/flow/requests">Requests</Link>
              <Link to="/flow/cards">Cards</Link>
            </div>
          </div>
          <Link to="/flow/billing">Billing <span className="tag">New</span></Link>
          <a href="#reports">Reports</a>
          <Link to="/flow/settings">Settings</Link>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{BUSINESS_NAME} Account | {BUSINESS_NAME}</div>
          <Link to="/flow/wallet">Wallet</Link>
          <Link to="/flow/transfers">Transfers</Link>
          <a href="#cards">Cards</a>
          <a href="#payments">Payments</a>
          <Link to="/flow/rewards">Rewards</Link>
          <Link to="/flow/rewards/security">Security</Link>
          <a href="#statements">Statements</a>
        </div>
        <div className="sidebar-footer">
          <span className="logo-icon small">A</span>
          <span>AIwallex</span>
        </div>
      </aside>
      <div className="dashboard-main">
        <DashboardHeader email={EMAIL} />
        <div className="spend-content">
          <h1 className="spend-title">
            <span className="spend-title-icon">⚡</span>
            Spend
          </h1>

          <div className="spend-hero">
            <div className="spend-promo-card">
              <span className="spend-promo-badge">Airwallex Spend</span>
              <h2 className="spend-promo-title">Close faster, spend smarter</h2>
              <p className="spend-promo-desc">Consolidate and automate spend management in one AI-powered platform.</p>
              <Link to="/flow/completing-setup-spend" className="spend-get-started">Get started</Link>
            </div>
            <div className="spend-video-card">
              <div className="spend-video-placeholder">
                <span className="spend-video-play">▶</span>
                <span className="spend-video-label">Introducing Airwallex Spend</span>
              </div>
              <p className="spend-video-caption">Let AI remove manual processes of entering invoice details.</p>
            </div>
          </div>

          <div className="spend-features">
            {SPEND_FEATURES.map((f) => (
              <div key={f.id} className="spend-feature-card">
                {f.badge && <span className="spend-feature-badge">{f.badge}</span>}
                <div className="spend-feature-visual">{f.icon}</div>
                <h3 className="spend-feature-title">{f.title}</h3>
                <p className="spend-feature-desc">{f.description}</p>
                {f.path ? (
                  <Link to={f.path} className="spend-feature-link">{f.action} →</Link>
                ) : (
                  <a href={`#${f.id}`} className="spend-feature-link">{f.action} →</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className="spend-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Spend - General</span>
      </footer>
    </div>
  )
}
