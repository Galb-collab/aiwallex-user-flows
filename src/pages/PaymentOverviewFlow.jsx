import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { DashboardHeader } from '../components/DashboardHeader'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './PaymentOverviewFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function PaymentOverviewFlow() {
  const { flowPath, info } = useCompany()
  const location = useLocation()
  const isPaymentActivity = location.pathname === flowPath('/flow/payments-overview') || location.pathname.endsWith('/payments-overview')
  const isDisputes = location.pathname.includes('/disputes')

  return (
    <div className="dashboard payments-overview-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to={flowPath('/flow/dashboard')}>Dashboard</Link>
          <Link to={flowPath('/flow/spend-general')}>Spend <span className="tag">New</span></Link>
          <Link to={flowPath('/flow/billing')}>Billing <span className="tag">New</span></Link>
          <div className="sidebar-nav-item active-wrap">
            <span className="active">Payments overview</span>
            <div className="sidebar-sub">
              <Link to={flowPath('/flow/payments-overview')} className={isPaymentActivity ? 'active' : ''}>Payment activity</Link>
              <Link to={flowPath('/flow/payments-overview/disputes')} className={isDisputes ? 'active' : ''}>Disputes</Link>
            </div>
          </div>
          <a href="#reports">Reports</a>
          <Link to={flowPath('/flow/settings')}>Settings</Link>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{BUSINESS_NAME} Account | {BUSINESS_NAME}</div>
          <Link to={flowPath('/flow/wallet')}>Wallet</Link>
          <Link to={flowPath('/flow/transfers')}>Transfers</Link>
          <Link to={flowPath('/flow/cards')}>Cards</Link>
          <a href="#payments">Payments</a>
          <Link to={flowPath('/flow/rewards')}>Rewards</Link>
          <Link to={flowPath('/flow/rewards/security')}>Security</Link>
        </div>
        <div className="sidebar-footer">
          <span className="logo-icon small">A</span>
          <span>AIwallex</span>
        </div>
      </aside>

      <div className="dashboard-main">
        <DashboardHeader email={EMAIL} className="payments-overview-header" />
        <Outlet />
      </div>
    </div>
  )
}
