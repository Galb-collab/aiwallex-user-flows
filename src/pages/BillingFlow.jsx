import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { DashboardHeader } from '../components/DashboardHeader'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './BillingFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function BillingFlow() {
  const { flowPath, info } = useCompany()
  const location = useLocation()
  const isCustomersArea = location.pathname === flowPath('/flow/billing/customers') || location.pathname === flowPath('/flow/billing/customer-details')
  const isProductsArea = location.pathname === flowPath('/flow/billing/products') || location.pathname === flowPath('/flow/billing/creating-a-product') || location.pathname === flowPath('/flow/billing/creating-a-price')
  const isInvoicesArea = location.pathname === flowPath('/flow/billing/invoices')
  const isSubscriptionsArea = location.pathname === flowPath('/flow/billing/subscriptions')
  const isBillingSettingsArea = location.pathname === flowPath('/flow/billing/billing-settings')
  return (
    <div className="dashboard billing-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to={flowPath('/flow/dashboard')}>Dashboard</Link>
          <Link to={flowPath('/flow/spend-general')}>Spend <span className="tag">New</span></Link>
          <div className="sidebar-nav-item active-wrap">
            <Link to={flowPath('/flow/billing')} className="active">Billing <span className="tag">New</span></Link>
            <div className="sidebar-sub">
              <Link to={flowPath('/flow/billing/customers')} className={isCustomersArea ? 'active' : ''}>Customers</Link>
              <Link to={flowPath('/flow/billing/products')} className={isProductsArea ? 'active' : ''}>Products</Link>
              <Link to={flowPath('/flow/billing/invoices')} className={isInvoicesArea ? 'active' : ''}>Invoices</Link>
              <Link to={flowPath('/flow/billing/subscriptions')} className={isSubscriptionsArea ? 'active' : ''}>Subscriptions</Link>
              <Link to={flowPath('/flow/billing/billing-settings')} className={isBillingSettingsArea ? 'active' : ''}>Billing settings</Link>
            </div>
          </div>
          <Link to={flowPath('/flow/payments-overview')}>Payments overview</Link>
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
<DashboardHeader email={EMAIL} className="billing-header" />
        <Outlet />
      </div>

      <footer className="spend-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>curated by Mobbin</span>
      </footer>
    </div>
  )
}
