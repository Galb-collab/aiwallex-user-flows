import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import { DashboardHeader } from '../../components/DashboardHeader'
import '../Dashboard.css'
import '../SpendGeneralFlow.css'
import '../WalletFlow.css'
import './PaymentsFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function PaymentsFlow() {
  const { flowPath } = useCompany()
  const location = useLocation()
  const path = location.pathname
  const isIndex = path === '/flow/payments' || path.endsWith('/payments')
  const isActivating = path.includes('/activating-payment-methods')
  const isPaymentLinks = path.includes('/payment-links')
  const isCompanyProfile = path.includes('/updating-company-profile')
  const isEmailNotification = path.includes('/updating-email-notification')

  return (
    <div className="dashboard payments-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to={flowPath('/flow/dashboard')}>Dashboard</Link>
          <Link to={flowPath('/flow/spend-general')}>Spend <span className="tag">New</span></Link>
          <Link to={flowPath('/flow/billing')}>Billing <span className="tag">New</span></Link>
          <Link to={flowPath('/flow/payments-overview')}>Payments overview</Link>
          <div className="sidebar-nav-item active-wrap">
            <span className="active">Payments</span>
            <div className="sidebar-sub">
              <Link to={flowPath('/flow/payments')} className={isIndex ? 'active' : ''}>Overview</Link>
              <Link to={flowPath('/flow/payments/activating-payment-methods')} className={isActivating ? 'active' : ''}>Activating payment methods</Link>
              <Link to={flowPath('/flow/payments/payment-links')} className={isPaymentLinks ? 'active' : ''}>Payment links</Link>
              <Link to={flowPath('/flow/payments/updating-company-profile')} className={isCompanyProfile ? 'active' : ''}>Updating a company profile</Link>
              <Link to={flowPath('/flow/payments/updating-email-notification')} className={isEmailNotification ? 'active' : ''}>Updating an email notification</Link>
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
        <DashboardHeader email={EMAIL} className="payments-flow-header" />
        <Outlet />
      </div>
    </div>
  )
}
