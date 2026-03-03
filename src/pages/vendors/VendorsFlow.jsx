import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import { DashboardHeader } from '../../components/DashboardHeader'
import '../Dashboard.css'
import '../SpendGeneralFlow.css'
import '../bills/BillsFlow.css'
import './VendorsFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function VendorsFlow() {
  const { flowPath } = useCompany()
  return (
    <div className="dashboard spend-general vendors-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to={flowPath('/flow/dashboard')}>Dashboard</Link>
          <div className="sidebar-nav-item active-wrap">
            <Link to={flowPath('/flow/spend-general')}>Spend <span className="tag">New</span></Link>
            <div className="sidebar-sub">
              <Link to={flowPath('/flow/spend-general/expenses-spend')}>Expenses</Link>
              <Link to={flowPath('/flow/bills')}>Bills</Link>
              <Link to={flowPath('/flow/spend-general/purchase-orders')}>Purchase orders</Link>
              <Link to={flowPath('/flow/vendors')} className="active">Vendors</Link>
              <Link to={flowPath('/flow/requests')}>Requests</Link>
            </div>
          </div>
          <Link to={flowPath('/flow/billing')}>Billing <span className="tag">New</span></Link>
          <a href="#reports">Reports</a>
          <Link to={flowPath('/flow/settings')}>Settings</Link>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{BUSINESS_NAME} Account | {BUSINESS_NAME}</div>
          <a href="#wallet">Wallet</a>
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
        <DashboardHeader email={EMAIL} className="bills-header">
          <nav className="bills-tabs">
            <Link to={flowPath('/flow/spend-general')} className="bills-tab bills-tab-back">← Spend</Link>
            <NavLink to={flowPath('/flow/vendors')} end className={({ isActive }) => `bills-tab${isActive ? ' active' : ''}`}>Summary</NavLink>
            <Link to={flowPath('/flow/settings')} className="bills-tab">Settings</Link>
          </nav>
        </DashboardHeader>
        <div className="bills-main">
          <Outlet />
        </div>
      </div>

      <footer className="spend-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>curated by Mobbin</span>
      </footer>
    </div>
  )
}
