import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { DashboardHeader } from '../../components/DashboardHeader'
import '../Dashboard.css'
import '../SpendGeneralFlow.css'
import '../WalletFlow.css'
import './RewardsFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function RewardsFlow() {
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
          <Link to="/flow/dashboard">Dashboard</Link>
          <Link to="/flow/spend-general">Spend <span className="tag">New</span></Link>
          <Link to="/flow/billing">Billing <span className="tag">New</span></Link>
          <Link to="/flow/payments-overview">Payments overview</Link>
          <Link to="/flow/transfers">Transfers</Link>
          <Link to="/flow/cards">Cards</Link>
          <Link to="/flow/payments">Payments</Link>
          <div className="sidebar-nav-item active-wrap">
            <span className="active">Rewards</span>
            <div className="sidebar-sub">
              <Link to="/flow/rewards" className={isIndex ? 'active' : ''}>Overview</Link>
              <Link to="/flow/rewards/redeem-rewards" className={isRedeem ? 'active' : ''}>Redeem rewards</Link>
              <Link to="/flow/rewards/rewards-activity" className={isActivity ? 'active' : ''}>Rewards activity</Link>
              <Link to="/flow/rewards/security" className={isSecurity ? 'active' : ''}>Security</Link>
              <Link to="/flow/rewards/disabling-two-factor-authentication" className={isDisabling2FA ? 'active' : ''}>Disabling two-factor authentication</Link>
            </div>
          </div>
          <a href="#reports">Reports</a>
          <Link to="/flow/settings">Settings</Link>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{BUSINESS_NAME} Account | {BUSINESS_NAME}</div>
          <Link to="/flow/wallet">Wallet</Link>
          <Link to="/flow/transfers">Transfers</Link>
          <Link to="/flow/cards">Cards</Link>
          <Link to="/flow/payments">Payments</Link>
          <Link to="/flow/rewards">Rewards</Link>
          <Link to="/flow/rewards/security">Security</Link>
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
