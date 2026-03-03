import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import { DashboardHeader } from '../../components/DashboardHeader'
import '../Dashboard.css'
import '../SpendGeneralFlow.css'
import '../WalletFlow.css'
import './CardsFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function CardsFlow() {
  const { flowPath } = useCompany()
  return (
    <div className="dashboard cards-flow cards-flow-standalone">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to={flowPath('/flow/dashboard')}>Dashboard</Link>
          <Link to={flowPath('/flow/spend-general')}>Spend <span className="tag">New</span></Link>
          <Link to={flowPath('/flow/billing')}>Billing <span className="tag">New</span></Link>
          <Link to={flowPath('/flow/payments-overview')}>Payments overview</Link>
          <Link to={flowPath('/flow/reports')}>Reports</Link>
          <Link to={flowPath('/flow/settings')}>Settings</Link>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{BUSINESS_NAME} Account | {BUSINESS_NAME}</div>
          <Link to={flowPath('/flow/wallet')}>Wallet</Link>
          <Link to={flowPath('/flow/transfers')}>Transfers</Link>
          <Link to={flowPath('/flow/cards')} className="active">Cards</Link>
          <Link to={flowPath('/flow/payments')}>Payments</Link>
          <Link to={flowPath('/flow/rewards')}>Rewards</Link>
          <Link to={flowPath('/flow/rewards/security')}>Security</Link>
        </div>
        <div className="sidebar-footer">
          <span className="logo-icon small">A</span>
          <span>Airwallex</span>
        </div>
      </aside>

      <div className="dashboard-main">
        <DashboardHeader email={EMAIL} className="cards-flow-header">
          <nav className="cards-tabs">
            <span className="cards-tab active">Summary</span>
            <Link to={flowPath('/flow/cards/transactions')} className="cards-tab">Transactions</Link>
            <Link to={flowPath('/flow/cards/settings')} className="cards-tab">Settings</Link>
          </nav>
        </DashboardHeader>
        <Outlet />
      </div>
    </div>
  )
}
