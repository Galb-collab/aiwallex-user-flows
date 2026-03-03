import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import { DashboardHeader } from '../../components/DashboardHeader'
import '../Dashboard.css'
import '../SpendGeneralFlow.css'
import './TransfersFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function TransfersFlow() {
  const { flowPath } = useCompany()
  const location = useLocation()
  const path = location.pathname
  const isIndex = path === '/flow/transfers' || path.endsWith('/transfers')
  const isApprovalWorkflow = path.includes('/transfer-approval-workflow')

  return (
    <div className="dashboard transfers-flow">
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
          <Link to={flowPath('/flow/transfers')} className="active">Transfers</Link>
          <Link to={flowPath('/flow/cards')}>Cards</Link>
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
        <DashboardHeader email={EMAIL} className="transfers-header">
          <nav className="transfers-tabs">
            <Link to={flowPath('/flow/transfers')} className={isIndex ? 'transfers-tab active' : 'transfers-tab'}>Summary</Link>
            <Link to={flowPath('/flow/transfers/transfer-approval-workflow')} className={isApprovalWorkflow ? 'transfers-tab active' : 'transfers-tab'}>Transfer approvals</Link>
            <Link to={flowPath('/flow/transfers/settings')} className={path.includes('/transfers/settings') ? 'transfers-tab active' : 'transfers-tab'}>Settings</Link>
          </nav>
        </DashboardHeader>
        <Outlet />
      </div>
    </div>
  )
}
