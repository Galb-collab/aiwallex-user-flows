import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DashboardHeader } from '../components/DashboardHeader'

const ADDING_ITEMS_PATH = '/flow/spend-general/expenses-spend/uploading-a-receipt/adding-items'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './ExpensesFlow.css'
import './UploadingReceiptFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function UploadingReceiptFlow() {
  const [panelOpen, setPanelOpen] = useState(false)
  const [uploadStep, setUploadStep] = useState('upload')
  const [showMatchModal, setShowMatchModal] = useState(false)
  const [matchType, setMatchType] = useState('reimbursement')

  const openPanel = () => {
    setPanelOpen(true)
    setUploadStep('upload')
    setShowMatchModal(false)
  }
  const closePanel = () => {
    setPanelOpen(false)
    setUploadStep('upload')
  }

  const handleDropZoneClick = () => {
    if (uploadStep === 'upload') setUploadStep('matching')
  }

  useEffect(() => {
    if (uploadStep !== 'matching') return
    const t = setTimeout(() => setUploadStep('ready'), 2200)
    return () => clearTimeout(t)
  }, [uploadStep])

  const handleReviewAllReceipts = () => {
    setShowMatchModal(true)
    setPanelOpen(false)
  }

  const handleSkipMatch = () => setShowMatchModal(false)

  return (
    <div className="dashboard spend-general expenses-flow uploading-receipt-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to="/flow/dashboard">Dashboard</Link>
          <div className="sidebar-nav-item active-wrap">
            <Link to="/flow/spend-general">Spend <span className="tag">New</span></Link>
            <div className="sidebar-sub">
              <Link to="/flow/spend-general/expenses-spend" className="active">Expenses</Link>
              <Link to="/flow/spend-general">Bills</Link>
              <Link to="/flow/spend-general">Purchase orders</Link>
              <Link to="/flow/spend-general">Vendors</Link>
              <Link to="/flow/spend-general">Requests</Link>
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
        <DashboardHeader email={EMAIL} className="expenses-header">
          <nav className="expenses-tabs">
            <Link to="/flow/spend-general/expenses-spend" className="expenses-tab-back">← Expenses</Link>
            <button type="button" className="active">Summary</button>
          </nav>
        </DashboardHeader>

        <div className="expenses-content">
          <div className="expenses-connect-banner">
            <div className="expenses-connect-logos">
              <span className="expenses-connect-logo" title="Xero">Xero</span>
              <span className="expenses-connect-logo" title="QuickBooks">QuickBooks</span>
              <span className="expenses-connect-logo" title="NetSuite">NetSuite</span>
            </div>
            <p>By connecting your expenses data, we will automatically sync to your favourite accounting software for easy expense reconciliation.</p>
            <button type="button" className="expenses-connect-btn">Connect</button>
            <button type="button" className="expenses-banner-close" aria-label="Close">×</button>
          </div>

          <div className="expenses-title-row">
            <div>
              <h1 className="expenses-page-title">Expenses</h1>
              <p className="expenses-page-subtitle">Manage and approve card expenses and reimbursements</p>
            </div>
            <div className="expenses-title-actions">
              <button type="button" className="expenses-btn secondary">+ Reimbursement report</button>
              <button type="button" className="expenses-btn primary" onClick={openPanel}>Upload receipts</button>
            </div>
          </div>

          <div className="expenses-cards">
            <div className="expenses-card expenses-card-automations">
              <span className="expenses-card-badge">New</span>
              <h3 className="expenses-card-title">Expense automations</h3>
              <p className="expenses-card-desc">Automate your expense coding with mappings and advanced rules.</p>
              <a href="#automations" className="expenses-card-link">Get started →</a>
            </div>
            <div className="expenses-card">
              <h3 className="expenses-card-title">Pending submission</h3>
              <ul className="expenses-card-items">
                <li>Submit my card expenses 0</li>
                <li>Submit my reimbursements 0</li>
              </ul>
            </div>
            <div className="expenses-card">
              <h3 className="expenses-card-title">Pending your approval</h3>
              <ul className="expenses-card-items">
                <li>Approve card expenses 0</li>
                <li>Approve reimbursements 0</li>
              </ul>
            </div>
            <div className="expenses-card">
              <h3 className="expenses-card-title">Awaiting payment</h3>
              <ul className="expenses-card-items">
                <li>Pay reimbursements 0</li>
              </ul>
            </div>
          </div>

          <div className="expenses-sub-tabs ur-sub-tabs">
            <button type="button" className="active">Card expenses</button>
            <button type="button">Reimbursements</button>
          </div>

          <div className="ur-table-placeholder">
            <p>Search and filter card expenses or switch to Reimbursements tab.</p>
          </div>
        </div>
      </div>

      <footer className="spend-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Uploading a receipt</span>
      </footer>

      {panelOpen && (
        <div className="ur-panel-backdrop" onClick={closePanel}>
          <div className="ur-panel" onClick={(e) => e.stopPropagation()}>
            <div className="ur-panel-header">
              <h2 className="ur-panel-title">Receipts</h2>
              <button type="button" className="ur-panel-close" onClick={closePanel} aria-label="Close">×</button>
            </div>
            <div className="ur-panel-body">
              {uploadStep === 'upload' && (
                <>
                  <div className="ur-upload-zone" onClick={handleDropZoneClick}>
                    <span className="ur-upload-icon">📁</span>
                    <span className="ur-upload-icon">📄</span>
                    <h3 className="ur-upload-heading">Upload and match receipts with expenses</h3>
                    <p className="ur-upload-hint">Drag and drop or click to upload</p>
                  </div>
                  <p className="ur-supported">Supported files: PDF, Word, JPG, JPEG, PNG, BMP max 10MB size</p>
                  <div className="ur-other-ways">
                    <p className="ur-other-heading">Additional ways to add receipts</p>
                    <div className="ur-other-item">
                      <span className="ur-other-icon">✉️</span>
                      <span>Email receipts to <strong>receipts@expenses.airwallex.com</strong></span>
                    </div>
                    <div className="ur-other-item">
                      <span className="ur-other-icon">🔄</span>
                      <span>Automatically forward receipts from Google or Outlook</span>
                      <a href="#learn" className="ur-link">Learn more</a>
                    </div>
                    <div className="ur-other-item">
                      <span className="ur-other-icon">📱</span>
                      <span>Download the Airwallex mobile app and get notifications to upload receipts</span>
                      <a href="#learn" className="ur-link">Learn more</a>
                    </div>
                  </div>
                </>
              )}
              {uploadStep === 'matching' && (
                <>
                  <h3 className="ur-step-heading">Matching receipt</h3>
                  <p className="ur-step-desc">Receipts will match with expenses using AI. You can upload more while they match.</p>
                  <div className="ur-upload-zone ur-upload-zone-small">
                    <p className="ur-upload-hint">Drag and drop or upload more</p>
                  </div>
                  <div className="ur-file-item">
                    <span className="ur-file-preview">📄</span>
                    <span className="ur-file-name">receipt.png</span>
                    <span className="ur-file-status">Matching...</span>
                  </div>
                  <button type="button" className="ur-expand-link">Additional ways to add receipts</button>
                </>
              )}
              {uploadStep === 'ready' && (
                <>
                  <div className="ur-ready-icon">✓</div>
                  <h3 className="ur-step-heading">Receipt is ready for review</h3>
                  <p className="ur-step-desc">Submit matched receipts, then add any unmatched to card expenses or reimbursements.</p>
                  <div className="ur-upload-zone ur-upload-zone-small">
                    <p className="ur-upload-hint">Drag and drop or upload more</p>
                  </div>
                  <div className="ur-file-item ur-file-item-ready">
                    <span className="ur-file-preview">K</span>
                    <span className="ur-file-meta">27 Nov 2025</span>
                    <span className="ur-file-name">receipt.png</span>
                  </div>
                  <button type="button" className="ur-expand-link">Additional ways to add receipts</button>
                  <button type="button" className="ur-btn ur-btn-primary" onClick={handleReviewAllReceipts}>Review all receipts</button>
                </>
              )}
            </div>
            <div className="ur-panel-footer">
              <button type="button" className="ur-btn ur-btn-secondary" onClick={closePanel}>Done</button>
            </div>
          </div>
        </div>
      )}

      {showMatchModal && (
        <div className="ur-match-backdrop" onClick={handleSkipMatch}>
          <div className="ur-match-modal" onClick={(e) => e.stopPropagation()}>
            <div className="ur-match-header">
              <h2 className="ur-match-title">Receipt</h2>
              <button type="button" className="ur-match-close" onClick={handleSkipMatch} aria-label="Close">×</button>
            </div>
            <div className="ur-match-body">
              <div className="ur-match-main">
                <h3 className="ur-match-heading">Match this receipt</h3>
                <p className="ur-match-desc">Select whether this receipt is a card expense or reimbursement.</p>
                <div className="ur-match-options">
                  <button type="button" className={`ur-match-card ${matchType === 'expense' ? 'active' : ''}`} onClick={() => setMatchType('expense')}>
                    <span className="ur-match-card-title">Select expense</span>
                    <span className="ur-match-card-desc">Match receipt with card expense</span>
                    {matchType === 'expense' && <button type="button" className="ur-match-change">Change</button>}
                  </button>
                  <button type="button" className={`ur-match-card ${matchType === 'reimbursement' ? 'active' : ''}`} onClick={() => setMatchType('reimbursement')}>
                    <span className="ur-match-card-title">Create reimbursement</span>
                    <span className="ur-match-card-desc">Out of pocket expense</span>
                    {matchType === 'reimbursement' && <button type="button" className="ur-match-change">Change</button>}
                  </button>
                </div>
                {matchType === 'expense' && (
                  <div className="ur-match-section">
                    <label className="ur-match-label">Select card expense</label>
                    <input type="search" className="ur-match-search" placeholder="Search by employee, card nickname, description, or last 4 digits of card number" />
                    <div className="ur-match-empty">
                      <span className="ur-match-empty-icon">💳</span>
                      <p>No existing card expenses. There are no card expenses available to pair with receipts.</p>
                    </div>
                  </div>
                )}
                {matchType === 'reimbursement' && (
                  <div className="ur-match-section">
                    <label className="ur-match-label">Select reimbursement report</label>
                    <input type="search" className="ur-match-search" placeholder="Search by report name, reimbursement description, or merchant" />
                    <button type="button" className="ur-btn ur-btn-new-report">+ New reimbursement report</button>
                    <div className="ur-match-report-list">
                      <Link to={ADDING_ITEMS_PATH} className="ur-match-report-item" onClick={() => setShowMatchModal(false)}>
                        <span className="ur-match-report-name">Reimbursement report 2025-11-27</span>
                        <span className="ur-match-report-meta">0 SGD · 0 reimbursements</span>
                        <span className="ur-match-report-status">Draft</span>
                      </Link>
                    </div>
                  </div>
                )}
                <div className="ur-match-actions">
                  <button type="button" className="ur-btn ur-btn-text danger">Delete receipt</button>
                  <button type="button" className="ur-btn ur-btn-secondary" onClick={handleSkipMatch}>Skip</button>
                </div>
              </div>
              <div className="ur-match-receipt">
                <div className="ur-match-receipt-preview">
                  <span className="ur-receipt-label">Receipt</span>
                  <span className="ur-receipt-business">Business Details · K</span>
                  <span className="ur-receipt-date">11/17/2025, 5:32:50 PM</span>
                  <span className="ur-receipt-items">1 Americano $2.0 · 2 Chocolate Chip Cookie $1.5 · 2 Coke $1.5</span>
                  <span className="ur-receipt-total">Total $5.00</span>
                </div>
                <div className="ur-receipt-actions">
                  <button type="button" className="ur-receipt-btn" aria-label="Expand">⛶</button>
                  <button type="button" className="ur-receipt-btn" aria-label="Download">↓</button>
                </div>
                <p className="ur-receipt-filename">27 Nov 2025-receipt.png</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
