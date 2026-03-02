import React from 'react'
import { Link } from 'react-router-dom'
import { DashboardHeader } from '../components/DashboardHeader'
import { useCompletingSetupSpend } from '../context/CompletingSetupSpendContext'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './CompletingSetupSpendFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

const SPEND_FEATURES = [
  { id: 'cards', title: 'Cards', description: 'Cards that flex for your teams but play by your rules.', action: 'Create a card', icon: '💳' },
  { id: 'expenses', title: 'Expenses', description: 'One view for every card tap, claim, and reimbursement.', action: 'Learn more', icon: '📱' },
  { id: 'bills', title: 'Bills', description: 'Upload, match, and approve invoices in minutes.', action: 'Learn more', icon: '📄' },
  { id: 'purchase-orders', title: 'Purchase orders', description: 'Get a real-time view of your committed spend, from initial order to final payment.', action: 'Learn more', icon: '📋', badge: 'Available on Grow plan' },
  { id: 'vendors', title: 'Vendors', description: 'Centralise vendor data, track payments, and automate vendor management workflows.', action: 'Learn more', icon: '🏢' },
  { id: 'requests', title: 'Requests', description: 'Empower employees to request what they need, aligning every dollar with company policy.', action: 'Learn more', icon: '✋' },
]

const TOUR_CONTENT = [
  { title: 'Spend: The future of spend management', desc: 'Global, real-time, and powered by AI - Airwallex Spend is built to scale with your business.', visual: '📱💳' },
  { title: 'Cards', desc: 'Cards that flex for your teams but play by your rules.', visual: '💳' },
  { title: 'Expenses', desc: 'One view for every card tap, claim, and reimbursement.', visual: '📱' },
  { title: 'Bills', desc: 'Upload, match, and approve invoices in minutes.', visual: '📄' },
  { title: 'Purchase orders & Vendors', desc: 'Procure from vendors and manage committed spend in one place.', visual: '📋' },
  { title: 'Requests without the roadblocks', desc: 'Empower employees to ask for what they need, while approvals and policies run smoothly in the background.', badge: 'Requests', visual: '✓' },
]

const TURN_ON_ITEMS = [
  { key: 'cardExpenses', title: 'Card expenses', desc: 'Track employee spend in real-time' },
  { key: 'reimbursements', title: 'Reimbursements', desc: 'Reimburse employees to their bank accounts' },
  { key: 'bills', title: 'Bills', desc: 'Upload, approve, and pay bills globally', info: true },
  { key: 'purchaseOrders', title: 'Purchase orders', desc: 'Procure from vendors and manage committed spend', info: true },
  { key: 'vendors', title: 'Vendors', desc: 'Manage all your vendors in one place', info: true },
  { key: 'requests', title: 'Requests', desc: 'From request to approval, with total control' },
]

export function CompletingSetupSpendFlow() {
  const {
    tourStep,
    showTour,
    showTurnOnModal,
    toggles,
    setToggle,
    nextTourStep,
    prevTourStep,
    skipTour,
    closeTurnOnModal,
    enableSpend,
  } = useCompletingSetupSpend()

  const tour = TOUR_CONTENT[tourStep - 1]

  return (
    <div className="dashboard spend-general completing-setup-spend">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <a href="#dashboard">Dashboard</a>
          <div className="sidebar-nav-item active-wrap">
            <a href="#spend" className="active">Spend <span className="tag">New</span></a>
            <div className="sidebar-sub">
              <Link to="/flow/spend-general/expenses-spend">Expenses</Link>
              <Link to="/flow/bills">Bills</Link>
              <a href="#purchase-orders">Purchase orders</a>
              <Link to="/flow/vendors">Vendors</Link>
              <Link to="/flow/completing-setup-spend" className="active">Complete setup</Link>
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
          <Link to="/flow/cards">Cards</Link>
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
        <DashboardHeader email={EMAIL} className="completing-setup-spend-header">
          <nav className="expenses-tabs" style={{ margin: 0 }}>
            <Link to="/flow/spend-general" className="expenses-tab-back">← Spend</Link>
          </nav>
        </DashboardHeader>
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
              <button type="button" className="spend-get-started">Get started</button>
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
                <a href={`#${f.id}`} className="spend-feature-link">{f.action} →</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showTour && tour && (
        <div className="css-modal-overlay">
          <div className="css-tour-modal">
            <button type="button" className="css-modal-close" onClick={skipTour} aria-label="Close">×</button>
            {tour.badge && <span className="css-tour-badge">{tour.badge}</span>}
            <h2 className="css-tour-title">{tour.title}</h2>
            <p className="css-tour-desc">{tour.desc}</p>
            <div className="css-tour-visual">{tour.visual}</div>
            <div className="css-tour-footer">
              <span className="css-tour-progress">{tourStep}/6</span>
              <div className="css-tour-actions">
                <button type="button" className="css-btn-skip" onClick={skipTour}>Skip tour</button>
                {tourStep > 1 && (
                  <button type="button" className="css-btn-back" onClick={prevTourStep}>Back</button>
                )}
                <button type="button" className="css-btn-next" onClick={nextTourStep}>Next</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showTurnOnModal && (
        <div className="css-modal-overlay">
          <div className="css-turnon-modal">
            <button type="button" className="css-modal-close" onClick={closeTurnOnModal} aria-label="Close">×</button>
            <h2 className="css-turnon-title">Turn on smarter spend today</h2>
            <p className="css-turnon-desc">Activate expenses, bills, requests, and more. You can always adjust these settings as your team grows.</p>
            <p className="css-turnon-plan">Included in your <button type="button" className="css-explore-plan">Explore plan</button></p>
            <ul className="css-turnon-list">
              {TURN_ON_ITEMS.map((item) => (
                <li key={item.key} className="css-turnon-row">
                  <div>
                    <strong>{item.title}</strong>
                    <span className="css-turnon-row-desc">{item.desc}</span>
                    {item.info && <span className="css-turnon-info" title="Info">ℹ</span>}
                  </div>
                  <label className="css-toggle">
                    <input
                      type="checkbox"
                      checked={toggles[item.key]}
                      onChange={(e) => setToggle(item.key, e.target.checked)}
                    />
                    <span className="css-toggle-slider" />
                  </label>
                </li>
              ))}
            </ul>
            <div className="css-turnon-actions">
              <button type="button" className="css-btn-cancel" onClick={closeTurnOnModal}>Cancel</button>
              <button type="button" className="css-btn-enable" onClick={enableSpend}>Enable Spend</button>
            </div>
          </div>
        </div>
      )}

      <footer className="spend-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Completing a setup (spend)</span>
      </footer>
    </div>
  )
}
