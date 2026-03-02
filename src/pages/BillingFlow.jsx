import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { DashboardHeader } from '../components/DashboardHeader'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './BillingFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function BillingFlow() {
  const location = useLocation()
  const isCustomersArea = location.pathname === '/flow/billing/customers' || location.pathname === '/flow/billing/customer-details'
  const isProductsArea = location.pathname === '/flow/billing/products' || location.pathname === '/flow/billing/creating-a-product' || location.pathname === '/flow/billing/creating-a-price'
  const isInvoicesArea = location.pathname === '/flow/billing/invoices'
  const isSubscriptionsArea = location.pathname === '/flow/billing/subscriptions'
  const isBillingSettingsArea = location.pathname === '/flow/billing/billing-settings'
  return (
    <div className="dashboard billing-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to="/flow/dashboard">Dashboard</Link>
          <Link to="/flow/spend-general">Spend <span className="tag">New</span></Link>
          <div className="sidebar-nav-item active-wrap">
            <a href="#billing" className="active">Billing <span className="tag">New</span></a>
            <div className="sidebar-sub">
              <Link to="/flow/billing/customers" className={isCustomersArea ? 'active' : ''}>Customers</Link>
              <Link to="/flow/billing/products" className={isProductsArea ? 'active' : ''}>Products</Link>
              <Link to="/flow/billing/invoices" className={isInvoicesArea ? 'active' : ''}>Invoices</Link>
              <Link to="/flow/billing/subscriptions" className={isSubscriptionsArea ? 'active' : ''}>Subscriptions</Link>
              <Link to="/flow/billing/billing-settings" className={isBillingSettingsArea ? 'active' : ''}>Billing settings</Link>
            </div>
          </div>
          <Link to="/flow/payments-overview">Payments overview</Link>
          <a href="#reports">Reports</a>
          <Link to="/flow/settings">Settings</Link>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{BUSINESS_NAME} Account | {BUSINESS_NAME}</div>
          <Link to="/flow/wallet">Wallet</Link>
          <Link to="/flow/transfers">Transfers</Link>
          <Link to="/flow/cards">Cards</Link>
          <a href="#payments">Payments</a>
          <Link to="/flow/rewards">Rewards</Link>
          <Link to="/flow/rewards/security">Security</Link>
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
