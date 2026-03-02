import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutDashboard() {
  const { flowPath, basePath } = useCompany()

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-dashboard">
        <aside className="revolut-sidebar">
          <div className="revolut-sidebar-header">
            <Link to={basePath()} className="revolut-sidebar-back">← Flows</Link>
            <span className="revolut-sidebar-logo">R Business</span>
          </div>
          <nav className="revolut-sidebar-nav">
            <Link to={flowPath('/flow/revolut-dashboard')} className="active">Home</Link>
            <Link to={flowPath('/flow/revolut-card-selection')}>Cards</Link>
            <Link to={flowPath('/flow/revolut-transfer')}>Transfers</Link>
            <Link to={flowPath('/flow/revolut-receipts')}>Expenses</Link>
            <Link to={flowPath('/flow/revolut-spending-controls')}>Spending controls</Link>
          </nav>
        </aside>
        <main className="revolut-dashboard-main">
          <header className="revolut-dashboard-header">
            <h1>Home</h1>
            <div className="revolut-dashboard-actions">
              <Link to={flowPath('/flow/revolut-add-money')} className="revolut-btn-primary">Add money</Link>
            </div>
          </header>
          <div className="revolut-dashboard-content">
            <div className="revolut-balance-card">
              <span className="revolut-balance-amount">S$1.00</span>
              <span className="revolut-balance-label">Main · SGD - Default</span>
              <div className="revolut-balance-actions">
                <button type="button">...</button>
                <Link to={flowPath('/flow/revolut-account-details')} className="revolut-balance-btn">Details</Link>
                <Link to={flowPath('/flow/revolut-transfer')} className="revolut-balance-btn">Move</Link>
                <Link to={flowPath('/flow/revolut-add-money')} className="revolut-btn-primary">+ Add money</Link>
              </div>
            </div>
            <div className="revolut-widget-card">
              <div className="revolut-widget-progress">3/4</div>
              <p>Complete a few easy steps to get your account up and running</p>
              <Link to={flowPath('/flow/revolut-onboarding/verify-details')} className="revolut-btn-primary">Finish setup</Link>
              <div className="revolut-widget-links">
                <Link to={flowPath('/flow/revolut-billing-details')} className="revolut-link">Billing details</Link>
                <Link to={flowPath('/flow/revolut-accounting-software')} className="revolut-link">Accounting software</Link>
              </div>
            </div>
            <div className="revolut-widget-card">
              <h3>Widgets</h3>
              <div className="revolut-widget-total">Total assets: S$ 3</div>
              <div className="revolut-widget-item">Cash: S$ 3</div>
              <Link to={flowPath('/flow/revolut-exchange')} className="revolut-widget-item revolut-widget-link">Flexible Cash Funds: Start earning →</Link>
            </div>
            <div className="revolut-transactions">
              <h3>Recent transactions</h3>
              <div className="revolut-transaction-item">
                <span>To ••••</span>
                <span>3 min ago</span>
                <span>Completed · Expense</span>
                <span>-S$1</span>
              </div>
              <div className="revolut-transaction-item">
                <span>Main SGD → Main USD</span>
                <span>Nov 13, 5:49 PM</span>
                <span>Completed</span>
                <span>-S$2 +$1.53</span>
              </div>
              <Link to={flowPath('/flow/revolut-dashboard')} className="revolut-link">See all</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
