import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { DashboardHeader } from '../components/DashboardHeader'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './WalletFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function WalletFlow() {
  const { flowPath } = useCompany()
  const location = useLocation()
  const path = location.pathname
  const isBalances = path === '/flow/wallet' || path.endsWith('/wallet') || path.includes('/flow/wallet/balance') || path.includes('display-currencies') || path.includes('new-transfer') || path.includes('new-conversion') || path.includes('global-accounts') || path.includes('conversions')
  const isTransactions = path.includes('/transactions')
  const isLinkedAccounts = path.includes('/linked-accounts')
  const isSettings = path.includes('/settings')

  return (
    <div className="dashboard wallet-flow">
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
          <div className="wallet-sidebar-wrap active-wrap">
            <Link to={flowPath('/flow/wallet')} className="wallet-active">Wallet</Link>
            <div className="sidebar-sub">
              <Link to={flowPath('/flow/wallet/global-accounts')}>Global accounts</Link>
              <Link to={flowPath('/flow/wallet/conversions')}>Conversions</Link>
            </div>
          </div>
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
        <DashboardHeader email={EMAIL} className="wallet-header">
          <nav className="wallet-tabs">
            <Link to={flowPath('/flow/wallet')} className={isBalances ? 'active' : ''}>Balances</Link>
            <Link to={flowPath('/flow/wallet/transactions')} className={isTransactions ? 'active' : ''}>Transactions</Link>
            <Link to={flowPath('/flow/wallet/linked-accounts')} className={isLinkedAccounts ? 'active' : ''}>Linked Accounts</Link>
            <Link to={flowPath('/flow/wallet/settings')} className={isSettings ? 'active' : ''}>Settings</Link>
          </nav>
        </DashboardHeader>
        <Outlet />
      </div>
    </div>
  )
}
