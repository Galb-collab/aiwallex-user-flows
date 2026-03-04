import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutDashboard() {
  const { flowPath, basePath } = useCompany()

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-dashboard">
        <header className="revolut-dashboard-topbar">
          <div className="revolut-topbar-left">
            <div className="revolut-topbar-logo">
              <span className="revolut-splash-r revolut-topbar-r">R</span>
              <span>Business</span>
            </div>
            <h1 className="revolut-topbar-title">Home</h1>
          </div>
          <div className="revolut-topbar-right">
            <button type="button" className="revolut-topbar-icon" aria-label="Search">🔍</button>
            <button type="button" className="revolut-topbar-icon" aria-label="Settings">⚙</button>
            <div className="revolut-topbar-avatar" title="Mobbin Pte. Ltd.">MP</div>
            <div className="revolut-topbar-avatar">LA</div>
          </div>
        </header>
        <div className="revolut-dashboard-body">
          <aside className="revolut-sidebar">
            <Link to={basePath()} className="revolut-sidebar-back">← Flows</Link>
            <nav className="revolut-sidebar-nav">
              <Link to={flowPath('/flow/revolut-dashboard')} className="active">
                <span className="revolut-nav-icon">🏠</span> Home
              </Link>
              <Link to={flowPath('/flow/revolut-card-selection')}>
                <span className="revolut-nav-icon">💳</span> Cards <span className="revolut-nav-chevron">›</span>
              </Link>
              <Link to={flowPath('/flow/revolut-transfer')}>
                <span className="revolut-nav-icon">↔</span> Transfers <span className="revolut-nav-chevron">›</span>
              </Link>
              <Link to={flowPath('/flow/revolut-dashboard')}>
                <span className="revolut-nav-icon">🏛</span> Treasury <span className="revolut-nav-chevron">›</span>
              </Link>
              <Link to={flowPath('/flow/revolut-receipts')}>
                <span className="revolut-nav-icon">🧾</span> Expenses
              </Link>
              <Link to={flowPath('/flow/revolut-dashboard')}>
                <span className="revolut-nav-icon">👥</span> Team
              </Link>
              <Link to={flowPath('/flow/revolut-dashboard')}>
                <span className="revolut-nav-icon">🎁</span> Rewards
              </Link>
              <Link to={flowPath('/flow/revolut-dashboard')}>
                <span className="revolut-nav-icon">📊</span> Analytics
              </Link>
            </nav>
          </aside>
          <main className="revolut-dashboard-main">
            <div className="revolut-balance-card">
              <div className="revolut-balance-row">
                <span className="revolut-balance-amount">S$1.00</span>
                <span className="revolut-balance-dropdown">▼</span>
              </div>
              <span className="revolut-balance-label">Main · SGD - Default</span>
              <div className="revolut-balance-actions">
                <button type="button" className="revolut-balance-icon">⋯</button>
                <Link to={flowPath('/flow/revolut-account-details')} className="revolut-balance-btn">Details</Link>
                <Link to={flowPath('/flow/revolut-transfer')} className="revolut-balance-btn">Move</Link>
                <Link to={flowPath('/flow/revolut-add-money')} className="revolut-btn-primary revolut-add-money-btn">+ Add money</Link>
              </div>
            </div>
            <div className="revolut-transactions-card">
              <div className="revolut-transactions-header">
                <span></span>
                <span>Transaction</span>
                <span>Date</span>
                <span>Created by</span>
                <span>Status</span>
                <span>Amount</span>
              </div>
              <div className="revolut-transaction-item">
                <span className="revolut-tx-icon">PT</span>
                <span className="revolut-tx-desc">To 8432384</span>
                <span className="revolut-tx-date">3 minutes ago</span>
                <span className="revolut-tx-created"></span>
                <span className="revolut-tx-status">Completed · <em>Expense</em></span>
                <span className="revolut-tx-amount">-S$ 1</span>
              </div>
              <div className="revolut-transaction-item">
                <span className="revolut-tx-icon">CL</span>
                <span className="revolut-tx-desc">Sent via Payout link 3847238</span>
                <span className="revolut-tx-date">5 minutes ago</span>
                <span className="revolut-tx-created"></span>
                <span className="revolut-tx-status">Completed</span>
                <span className="revolut-tx-amount">-S$ 5</span>
              </div>
              <div className="revolut-transaction-item">
                <span className="revolut-tx-icon">🇸🇬🇺🇸</span>
                <span className="revolut-tx-desc">Main SGD → Main USD</span>
                <span className="revolut-tx-date">Nov 13, 5:49 PM</span>
                <span className="revolut-tx-created"></span>
                <span className="revolut-tx-status">Completed</span>
                <span className="revolut-tx-amount">-S$ 2 +$1.53</span>
              </div>
              <div className="revolut-transaction-item">
                <span className="revolut-tx-icon">+</span>
                <span className="revolut-tx-desc">Money added from</span>
                <span className="revolut-tx-date">Today, 4:28 PM</span>
                <span className="revolut-tx-created"></span>
                <span className="revolut-tx-status">Canceled</span>
                <span className="revolut-tx-amount">S$ 1</span>
              </div>
              <Link to={flowPath('/flow/revolut-dashboard')} className="revolut-link revolut-see-all">See all</Link>
            </div>
          </main>
          <aside className="revolut-dashboard-right">
            <div className="revolut-widget-card revolut-setup-card">
              <div className="revolut-widget-progress">3/4</div>
              <h3>Finish account setup</h3>
              <p>Complete a few easy steps to get your account up and running</p>
              <Link to={flowPath('/flow/revolut-onboarding/verify-details')} className="revolut-btn-primary">Finish setup →</Link>
            </div>
            <div className="revolut-widget-card">
              <h3>Widgets</h3>
              <div className="revolut-widget-total">Total assets <strong>S$ 3</strong></div>
              <div className="revolut-widget-item">
                <span className="revolut-widget-icon">💰</span>
                <span>Cash</span>
                <span className="revolut-widget-value">S$ 3</span>
                <span className="revolut-widget-arrow">→</span>
              </div>
              <Link to={flowPath('/flow/revolut-exchange')} className="revolut-widget-item revolut-widget-link">
                <span className="revolut-widget-icon">📈</span>
                <span>Flexible Cash Funds</span>
                <span className="revolut-widget-sub">Start earning</span>
                <span className="revolut-widget-arrow">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
