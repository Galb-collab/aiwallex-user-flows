import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany, COMPANY } from '../context/CompanyContext'
import './FlowSelector.css'

// Flows in the order they were added (thumbnails: 4 per row)
const FLOW_PATHS = [
  { path: '/flow/logging-in', icon: '🔐', title: 'Logging in', description: 'Log in with email or mobile, Forgot password flow (request reset link, reset password), and 2FA verification with authenticator app.' },
  { path: '/flow/employee', icon: '👤', title: 'Employee Flow', description: 'Employee onboarding, Expenses (with Add bank details), Requests, Profile (with Security and Change password), and Switching to personal view.' },
  { path: '/flow/web-onboarding', icon: '🌐', title: 'Web onboarding', description: 'Full sign-up and onboarding: company size, volume, interests, account creation, phone verification, and dashboard.' },
  { path: '/flow/completing-business-details', icon: '📋', title: 'Completing business details', description: 'Full business onboarding: verify entity, plan, UEN and details, business profile and industry, business owner and ID verification, submitting application (with email verification), and setting up two-factor authentication—all in one flow.' },
  { path: '/flow/requesting-director-authorisation', icon: '📋', title: 'Requesting director authorisation', description: 'Choose how to verify authority (electronic or upload), add directors and emails, send request, confirm, then see the request-sent screen.' },
  { path: '/flow/dashboard', icon: '📊', title: 'Dashboard', description: 'Organisation dashboard with sidebar, pending tasks banner, Global Accounts, Cards, feature cards, Adding funds, and Payments (Accepting a payment). All in one flow.' },
  { path: '/flow/spend-general', icon: '⚡', title: 'Spend - General', description: 'Spend overview, Expenses, Bills, Purchase orders, Vendors, Requests, and Completing a setup. All under one flow.' },
  { path: '/flow/billing', icon: '🧾', title: 'Billing', description: 'Billing dashboard: ARR, active customers, revenue metrics; Customers, Products, Invoices, Subscriptions; Create new, filters, charts.' },
  { path: '/flow/payments-overview', icon: '💳', title: 'Payment Overview', description: 'Payment activity (search, filters, table) and Disputes (banner, filters, empty state) under Payments overview.' },
  { path: '/flow/payments', icon: '💰', title: 'Payments', description: 'Activating payment methods, Payment links, Updating a company profile, Updating an email notification. All under one flow.' },
  { path: '/flow/transfers', icon: '🔄', title: 'Transfers', description: 'Transfer details (with Cancel transfer), Create batch transfer file, Transfer approval workflow, Deactivate workflow. All under one flow.' },
  { path: '/flow/cards', icon: '💳', title: 'Cards', description: 'My cards, Card details, Creating a card (company card), Creating a card (employee card). All under one flow.' },
  { path: '/flow/wallet', icon: '👛', title: 'Wallet', description: 'Balances (total, cash table, Yield card), Global accounts (list + Create global account flow), Transactions, Linked Accounts, Settings; plus Cash balance details, Display currencies, New transfer, Creating conversion.' },
  { path: '/flow/reports', icon: '📊', title: 'Reports', description: 'Reports and Downloads tabs; Balance activity report, Account statement, and other report types. Generating balance activity report is integrated.' },
  { path: '/flow/rewards', icon: '🎁', title: 'Rewards', description: 'Earn cashback and rewards on card spend. Redeem rewards, activity, Security, Disabling two-factor authentication.' },
  { path: '/flow/settings', icon: '⚙', title: 'Settings', description: 'Connections, Creating a user, Developer, Plan & billing, Updating card expenses approvals.' },
]

export function FlowSelector() {
  const navigate = useNavigate()
  const { flowPath, basePath, info, company } = useCompany()
  const [viewMode, setViewMode] = useState('thumbnails') // 'thumbnails' | 'list'
  const hasFlows = company === COMPANY.AIRWALLEX

  return (
    <div className="flow-selector">
      <header className="flow-selector-header">
        <Link to={basePath()} className="logo">
          <span className="logo-icon" style={{ background: info.primaryColor }}>{info.logoLetter}</span>
          {info.name}
        </Link>
        <Link to="/" className="flows-label">← All companies</Link>
      </header>
      <main className="flow-selector-main">
        <div className="flow-selector-toolbar">
          <h1>Choose a flow</h1>
          <p className="flow-selector-subtitle">Select which flow you want to run.</p>
          {hasFlows && (
            <div className="flow-view-toggle">
              <button
                type="button"
                className={`flow-view-btn ${viewMode === 'thumbnails' ? 'active' : ''}`}
                onClick={() => setViewMode('thumbnails')}
                aria-pressed={viewMode === 'thumbnails'}
                title="Thumbnails (4 per row)"
              >
                <span className="flow-view-icon" aria-hidden>⊞</span>
                Thumbnails
              </button>
              <button
                type="button"
                className={`flow-view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
                aria-pressed={viewMode === 'list'}
                title="List view"
              >
                <span className="flow-view-icon" aria-hidden>☰</span>
                List
              </button>
            </div>
          )}
        </div>
        {hasFlows ? (
          <div className={`flow-cards flow-cards--${viewMode}`}>
            {FLOW_PATHS.map((flow) => (
              <button
                key={flow.path}
                type="button"
                className="flow-card"
                onClick={() => navigate(flowPath(flow.path))}
              >
                <span className="flow-card-icon">{flow.icon}</span>
                <h2 className="flow-card-title">{flow.title}</h2>
                <p className="flow-card-desc">{flow.description}</p>
              </button>
            ))}
          </div>
        ) : (
          <div className="flow-selector-empty">
            <p className="flow-selector-empty-text">No flows yet.</p>
            <p className="flow-selector-empty-subtext">Revolut flows will be added here.</p>
          </div>
        )}
      </main>
      <footer className="flow-selector-footer">
        <span className="footer-logo"><span className="logo-icon small" style={{ background: info.primaryColor }}>{info.logoLetter}</span> {info.name.toLowerCase()}</span>
        <span>{info.displayName} User Flows</span>
      </footer>
    </div>
  )
}
