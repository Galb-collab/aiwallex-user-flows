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
          <span className="revolut-sidebar-logo">Revolut</span>
        </div>
        <nav className="revolut-sidebar-nav">
          <Link to={flowPath('/flow/revolut-dashboard')} className="active">Home</Link>
          <Link to={flowPath('/flow/revolut-add-money')}>Add money</Link>
          <Link to={flowPath('/flow/revolut-transfer')}>Transfers</Link>
          <Link to={flowPath('/flow/revolut-receipts')}>My receipts</Link>
        </nav>
      </aside>
      <main className="revolut-dashboard-main">
        <header className="revolut-dashboard-header">
          <h1>Revolut Business</h1>
          <div className="revolut-dashboard-actions">
            <Link to={flowPath('/flow/revolut-add-money')} className="revolut-btn-primary">Add money</Link>
          </div>
        </header>
        <div className="revolut-dashboard-content">
          <div className="revolut-balance-card">
            <span className="revolut-balance-label">Main - SGD</span>
            <span className="revolut-balance-amount">S$ 0.00</span>
          </div>
          <div className="revolut-quick-actions">
            <Link to={flowPath('/flow/revolut-add-money')} className="revolut-quick-action">
              <span className="revolut-quick-icon">+</span>
              Add money
            </Link>
            <Link to={flowPath('/flow/revolut-transfer')} className="revolut-quick-action">
              <span className="revolut-quick-icon">→</span>
              Transfer
            </Link>
          </div>
        </div>
      </main>
    </div>
    </div>
  )
}
