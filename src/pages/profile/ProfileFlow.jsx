import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../Dashboard.css'
import '../SpendGeneralFlow.css'
import '../WalletFlow.css'
import '../cards/CardsFlow.css'
import './ProfileFlow.css'
import { DashboardHeader } from '../../components/DashboardHeader'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function ProfileFlow() {
  return (
    <div className="dashboard profile-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to="/flow/dashboard">Dashboard</Link>
          <Link to="/flow/spend-general">Spend</Link>
          <Link to="/flow/billing">Billing</Link>
          <Link to="/flow/payments-overview">Payments overview</Link>
          <Link to="/flow/transfers">Transfers</Link>
          <Link to="/flow/cards">Cards</Link>
          <Link to="/flow/payments">Payments</Link>
          <Link to="/flow/rewards">Rewards</Link>
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
        <DashboardHeader email={EMAIL} className="profile-flow-header" />
        <Outlet />
      </div>
    </div>
  )
}
