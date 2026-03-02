import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { DashboardHeader } from '../../components/DashboardHeader'
import '../Dashboard.css'
import '../SpendGeneralFlow.css'
import './BillsFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function BillsFlow() {
  return (
    <div className="dashboard spend-general bills-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to="/flow/dashboard">Dashboard</Link>
          <div className="sidebar-nav-item active-wrap">
            <Link to="/flow/spend-general">Spend <span className="tag">New</span></Link>
            <div className="sidebar-sub">
              <Link to="/flow/spend-general/expenses-spend">Expenses</Link>
              <Link to="/flow/bills" className="active">Bills</Link>
              <Link to="/flow/purchase-orders">Purchase orders</Link>
              <Link to="/flow/vendors">Vendors</Link>
              <Link to="/flow/requests">Requests</Link>
            </div>
          </div>
          <Link to="/flow/billing">Billing <span className="tag">New</span></Link>
          <a href="#reports">Reports</a>
          <Link to="/flow/settings">Settings</Link>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{BUSINESS_NAME} Account | {BUSINESS_NAME}</div>
          <a href="#wallet">Wallet</a>
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
        <DashboardHeader email={EMAIL} className="bills-header">
          <nav className="bills-tabs">
            <Link to="/flow/spend-general" className="bills-tab bills-tab-back">← Spend</Link>
            <NavLink to="/flow/bills" end className={({ isActive }) => `bills-tab${isActive ? ' active' : ''}`}>Summary</NavLink>
            <Link to="/flow/settings" className="bills-tab">Settings</Link>
          </nav>
        </DashboardHeader>
        <div className="bills-main">
          <Outlet />
        </div>
      </div>

      <footer className="spend-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Bills</span>
      </footer>
    </div>
  )
}
