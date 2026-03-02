import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { DashboardHeader } from '../components/DashboardHeader'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './ReportsFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

const REPORT_CARDS = [
  { id: 'balance-activity', title: 'Balance activity report', tag: 'Wallet', desc: 'Record of every settled wallet transaction. Used to track running Account balances across currencies.', path: '/flow/reports/generating-balance-activity' },
  { id: 'account-statement', title: 'Account statement', tag: 'Wallet', desc: 'An official statement for a given currency, providing a transaction history and key financial information such as minimum and maximum balance.', path: null },
  { id: 'transaction-reconciliation', title: 'Transaction reconciliation report', tag: 'Wallet', desc: 'Detailed record of pending and settled transactions, including all individual payment attempts within a Payments batch settlement.', path: null },
  { id: 'settlement-fee', title: 'Settlement and fee report', tag: 'Payments', desc: 'Settled payment transactions and fees in the selected date range.', path: null },
  { id: 'external-settlement', title: 'External settlement report', tag: 'Payments', desc: 'Settled transactions of payments processed by an external party, for example Paypal.', path: null },
]

const DOWNLOADS_ROWS = [
  { createdOn: '2025-11-27', type: 'Balance activity report', filename: 'Balance_Activity_Report_2025-11-27.csv', status: 'Completed' },
]

export function ReportsLayout() {
  return (
    <div className="dashboard reports-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to="/flow/dashboard">Dashboard</Link>
          <a href="#spend">Spend <span className="tag">New</span></a>
          <Link to="/flow/billing">Billing <span className="tag">New</span></Link>
          <Link to="/flow/reports" className="active">Reports</Link>
          <Link to="/flow/settings">Settings</Link>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{BUSINESS_NAME} Account | {BUSINESS_NAME}</div>
          <a href="#wallet">Wallet</a>
          <Link to="/flow/transfers">Transfers</Link>
          <a href="#cards">Cards</a>
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
        <DashboardHeader email={EMAIL} className="reports-header" />
        <Outlet />
      </div>
      <footer className="spend-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Reports</span>
      </footer>
    </div>
  )
}

export function ReportsIndex() {
  const [tab, setTab] = useState('reports')
  return (
    <div className="reports-content">
      <div className="reports-tabs">
        <button type="button" className={tab === 'reports' ? 'active' : ''} onClick={() => setTab('reports')}>Reports</button>
        <button type="button" className={tab === 'downloads' ? 'active' : ''} onClick={() => setTab('downloads')}>Downloads</button>
      </div>
      {tab === 'reports' && (
        <div className="reports-cards">
          {REPORT_CARDS.map((card) => (
            <div key={card.id} className="reports-card">
              <div className="reports-card-icon">{card.id === 'balance-activity' ? '👛' : '📄'}</div>
              <h3 className="reports-card-title">{card.title}</h3>
              <span className="reports-card-tag">{card.tag}</span>
              <p className="reports-card-desc">{card.desc}</p>
              {card.path ? <Link to={card.path} className="reports-card-generate">Generate</Link> : <button type="button" className="reports-card-generate" disabled>Generate</button>}
            </div>
          ))}
        </div>
      )}
      {tab === 'downloads' && (
        <>
          <h1 className="reports-downloads-title">Download generated reports</h1>
          <p className="reports-downloads-desc">Download your previously generated reports. Reports are available to download for 30 days after generation.</p>
          <div className="reports-downloads-toolbar">
            <input type="search" className="reports-search" placeholder="Search by filename" aria-label="Search by filename" />
            <input type="date" className="reports-filter" aria-label="Date from" />
            <input type="date" className="reports-filter" aria-label="Date to" />
            <select className="reports-filter" aria-label="Type"><option value="">Type</option></select>
            <select className="reports-filter" aria-label="Status"><option value="">Status</option></select>
          </div>
          <div className="reports-table-wrap">
            <table className="reports-table">
              <thead>
                <tr>
                  <th>CREATED ON</th>
                  <th>TYPE</th>
                  <th>FILENAME</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {DOWNLOADS_ROWS.map((row, i) => (
                  <tr key={i}>
                    <td>{row.createdOn}</td>
                    <td>{row.type}</td>
                    <td>{row.filename}</td>
                    <td><span className="reports-status-pill reports-status-completed">{row.status}</span></td>
                    <td><button type="button" className="reports-download-btn" aria-label="Download">↓</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="reports-pagination"><span>1 of 1</span></div>
        </>
      )}
    </div>
  )
}
