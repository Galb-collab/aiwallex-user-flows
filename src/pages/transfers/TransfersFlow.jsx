import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { DashboardHeader } from '../../components/DashboardHeader'
import '../Dashboard.css'
import '../SpendGeneralFlow.css'
import './TransfersFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function TransfersFlow() {
  const location = useLocation()
  const path = location.pathname
  const isIndex = path === '/flow/transfers' || path.endsWith('/transfers')
  const isTransferDetails = path.includes('/transfer-details')
  const isBatchTransfer = path.includes('/create-batch-transfer')
  const isApprovalWorkflow = path.includes('/transfer-approval-workflow')
  const isDeactivatingWorkflow = path.includes('/deactivating-workflow')

  return (
    <div className="dashboard transfers-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to="/flow/dashboard">Dashboard</Link>
          <Link to="/flow/spend-general">Spend <span className="tag">New</span></Link>
          <Link to="/flow/billing">Billing <span className="tag">New</span></Link>
          <Link to="/flow/payments-overview">Payments overview</Link>
          <div className="sidebar-nav-item active-wrap">
            <span className="active">Transfers</span>
            <div className="sidebar-sub">
              <Link to="/flow/transfers" className={isIndex ? 'active' : ''}>Overview</Link>
              <Link to="/flow/transfers/transfer-details/1" className={isTransferDetails ? 'active' : ''}>Transfer details</Link>
              <Link to="/flow/transfers/create-batch-transfer" className={isBatchTransfer ? 'active' : ''}>Create batch transfer file</Link>
              <Link to="/flow/transfers/transfer-approval-workflow" className={isApprovalWorkflow ? 'active' : ''}>Transfer approval workflow</Link>
              <Link to="/flow/transfers/deactivating-workflow" className={isDeactivatingWorkflow ? 'active' : ''}>Deactivate workflow</Link>
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
        <DashboardHeader email={EMAIL} className="transfers-header" />
        <Outlet />
      </div>
    </div>
  )
}
