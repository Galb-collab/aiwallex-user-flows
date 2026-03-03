import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import { DashboardHeader } from '../../components/DashboardHeader'
import '../Dashboard.css'
import '../SpendGeneralFlow.css'
import '../WalletFlow.css'
import './RewardsFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function RewardsFlow() {
  const { flowPath } = useCompany()
  const location = useLocation()
  const path = location.pathname
  const isIndex = path === '/flow/rewards' || path.endsWith('/rewards')
  const isSecurity = path.includes('/security')
  const isDisabling2FA = path.includes('/disabling-two-factor-authentication')
  const isRedeem = path.includes('/redeem-rewards')
  const isActivity = path.includes('/rewards-activity')

  return (
    <div className="dashboard rewards-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to={flowPath('/flow/dashboard')}>Dashboard</Link>
          <Link to={flowPath('/flow/spend-general')}>Spend <span className="tag">New</span></Link>
          <Link to={flowPath('/flow/billing')}>Billing <span className="tag">New</span></Link>
          <Link to={flowPath('/flow/payments-overview')}>Payments overview</Link>
          <Link to={flowPath('/flow/transfers')}>Transfers</Link>
          <Link to={flowPath('/flow/cards')}>Cards</Link>
          <Link to={flowPath('/flow/payments')}>Payments</Link>
          <div className="sidebar-nav-item active-wrap">
            <span className="active">Rewards</span>
            <div className="sidebar-sub">
              <Link to={flowPath('/flow/rewards')} className={isIndex ? 'active' : ''}>Overview</Link>
              <Link to={flowPath('/flow/rewards/redeem-rewards')} className={isRedeem ? 'active' : ''}>Redeem rewards</Link>
              <Link to={flowPath('/flow/rewards/rewards-activity')} className={isActivity ? 'active' : ''}>Rewards activity</Link>
              <Link to={flowPath('/flow/rewards/security')} className={isSecurity ? 'active' : ''}>Security</Link>
              <Link to={flowPath('/flow/rewards/disabling-two-factor-authentication')} className={isDisabling2FA ? 'active' : ''}>Disabling two-factor authentication</Link>
            </div>
          </div>
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
        <DashboardHeader email={EMAIL} className="rewards-flow-header" />
        <Outlet />
      </div>
    </div>
  )
}
