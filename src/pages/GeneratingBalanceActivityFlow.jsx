import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DashboardHeader } from '../components/DashboardHeader'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './ReportsFlow.css'
import './GeneratingBalanceActivityFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function GeneratingBalanceActivityFlow() {
  const navigate = useNavigate()
  const [dateFrom, setDateFrom] = useState('2025-10-27')
  const [dateTo, setDateTo] = useState('2025-11-27')
  const [format, setFormat] = useState('csv')
  const [emailNotify, setEmailNotify] = useState(true)
  const [generated, setGenerated] = useState(false)

  const ext = format === 'csv' ? 'csv' : format === 'excel' ? 'xlsx' : format === 'pdf' ? 'pdf' : 'mt940'
  const filename = `Balance_Activity_Report_${dateTo}.${ext}`

  const handleGenerate = () => setGenerated(true)
  const handleClose = () => navigate('/flow/reports')

  const sidebar = (
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
  )

  if (generated) {
    return (
      <div className="dashboard reports-flow generating-balance-flow">
        {sidebar}
        <div className="dashboard-main">
          <DashboardHeader email={EMAIL} className="reports-header" />
          <div className="gba-success-wrap">
            <div className="gba-success-modal">
              <button type="button" className="gba-modal-close" onClick={handleClose} aria-label="Close">x</button>
              <h2 className="gba-success-title">Generation completed</h2>
              <div className="gba-success-illus">Done</div>
              <p className="gba-success-desc">Your download should have started automatically, otherwise you can click <Link to="/flow/reports" className="gba-success-link">here</Link>.</p>
              <Link to="/flow/reports" className="gba-btn gba-btn-primary">Back to Reports</Link>
            </div>
          </div>
          <footer className="spend-footer">
            <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
            <span>AIwallex User Flows - Reports</span>
          </footer>
        </div>
      </div>
    )
  }

  return (
    <div className="dashboard reports-flow generating-balance-flow">
      {sidebar}
      <div className="dashboard-main">
        <header className="dashboard-header reports-header">
          <div className="dashboard-header-right">
            <Link to="/" className="dashboard-back-flows">← Flows</Link>
            <span className="user-email">{EMAIL}</span>
            <div className="user-avatar" />
          </div>
        </header>
        <div className="gba-content">
          <div className="gba-back-row">
            <Link to="/flow/reports" className="gba-back-link">← Reports</Link>
          </div>
          <div className="gba-form-card">
            <div className="gba-form-header">
              <h1 className="gba-form-title">Generate balance activity report</h1>
              <button type="button" className="gba-form-close" onClick={handleClose} aria-label="Close">x</button>
            </div>
            <div className="gba-form-body">
              <div className="gba-form-row">
                <label className="gba-label">Date range</label>
                <div className="gba-date-row">
                  <input type="date" className="gba-input" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
                  <input type="date" className="gba-input" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
                </div>
              </div>
              <div className="gba-form-row">
                <label className="gba-label">Time zone</label>
                <select className="gba-select"><option>Default for account</option></select>
              </div>
              <div className="gba-form-row">
                <label className="gba-label">Currency</label>
                <select className="gba-select"><option>All currencies</option></select>
              </div>
              <div className="gba-form-row">
                <label className="gba-label">File format</label>
                <div className="gba-radio-row">
                  {['csv', 'Excel', 'MT940', 'PDF'].map((opt) => (
                    <label key={opt} className="gba-radio-label">
                      <input type="radio" name="format" checked={format === opt.toLowerCase()} onChange={() => setFormat(opt.toLowerCase())} />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="gba-form-row">
                <label className="gba-label">Transaction Type</label>
                <select className="gba-select"><option>All types</option></select>
              </div>
              <div className="gba-form-row">
                <label className="gba-label">Filename</label>
                <input type="text" className="gba-input" value={filename} readOnly />
              </div>
              <div className="gba-form-row">
                <label className="gba-checkbox-label">
                  <input type="checkbox" checked={emailNotify} onChange={(e) => setEmailNotify(e.target.checked)} />
                  <span>Email me when the report is ready ({EMAIL})</span>
                </label>
              </div>
              <div className="gba-info-box">
                <span className="gba-info-icon">i</span>
                <p>Balance activity reports have been upgraded! Transfers and transfer fees will now be separate records. To download a report with transfers and transfer fees combined, generate the legacy version. <a href="#learn" className="gba-info-link">Learn more</a></p>
              </div>
              <div className="gba-form-actions">
                <button type="button" className="gba-btn gba-btn-secondary">Generate the legacy version</button>
                <button type="button" className="gba-btn gba-btn-primary" onClick={handleGenerate}>Generate</button>
              </div>
            </div>
          </div>
        </div>
        <footer className="spend-footer">
          <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
          <span>AIwallex User Flows - Reports</span>
        </footer>
      </div>
    </div>
  )
}
