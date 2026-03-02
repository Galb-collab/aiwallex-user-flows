import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { DashboardHeader } from '../../components/DashboardHeader'
import '../Dashboard.css'
import '../SpendGeneralFlow.css'
import '../WalletFlow.css'
import './CardsFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function CardsFlow() {
  const location = useLocation()
  const path = location.pathname
  const isIndex = path === '/flow/cards' || path.endsWith('/cards')
  const isCardDetails = path.includes('/card-details')
  const isCreatingCompany = path.includes('/creating-a-card-company')
  const isCreatingEmployee = path.includes('/creating-a-card') && !path.includes('company')

  return (
    <div className="dashboard cards-flow cards-flow-standalone">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to="/flow/dashboard">Dashboard</Link>
          <Link to="/flow/spend-general">Spend <span className="tag">New</span></Link>
          <Link to="/flow/billing">Billing <span className="tag">New</span></Link>
          <Link to="/flow/payments-overview">Payments overview</Link>
          <div className="sidebar-nav-item active-wrap">
            <span className="active">Cards</span>
            <div className="sidebar-sub">
              <Link to="/flow/cards" className={isIndex ? 'active' : ''}>My cards</Link>
              <Link to={path.includes('/card-details/') ? path : '/flow/cards/card-details/1'} className={isCardDetails ? 'active' : ''}>Card details</Link>
              <Link to="/flow/cards/creating-a-card-company" className={isCreatingCompany ? 'active' : ''}>Creating a card (company card)</Link>
              <Link to="/flow/cards/creating-a-card" className={isCreatingEmployee ? 'active' : ''}>Creating a card (employee card)</Link>
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
        <DashboardHeader email={EMAIL} className="cards-flow-header" />
        <Outlet />
      </div>
    </div>
  )
}
