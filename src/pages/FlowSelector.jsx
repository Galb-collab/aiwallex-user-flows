import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany, COMPANY } from '../context/CompanyContext'
import './FlowSelector.css'

// Airwallex flows (thumbnails: 4 per row)
const AIRWALLEX_FLOWS = [
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

// Revolut Business flows (combined connected flows)
const REVOLUT_FLOWS = [
  { path: '/flow/revolut-landing', icon: '🏠', title: 'Landing', description: 'Go beyond business as usual. Get started, Log in, Sign up.' },
  { path: '/flow/revolut-login', icon: '🔐', title: 'Log in', description: 'Welcome back, email, Google/Apple, QR code login. Leads to Dashboard.' },
  { path: '/flow/revolut-signup', icon: '📝', title: 'Sign up', description: 'Country → email → verify email → phone → verify phone → passcode → business type. Leads to onboarding.' },
  { path: '/flow/revolut-onboarding', icon: '📋', title: 'Business onboarding', description: 'Name → citizenship → monthly volume → website → tax residency → corporate personnel → verify details → residence permit.' },
  { path: '/flow/revolut-dashboard', icon: '📊', title: 'Dashboard', description: 'Home, balance, widgets, transactions, finish setup. Links to Add money, Transfer, Cards, Receipts, etc.' },
  { path: '/flow/revolut-add-money', icon: '💰', title: 'Add money', description: 'Revtag, Account details (IBAN/ BIC/SWIFT), Exchange (sell/buy currency).' },
  { path: '/flow/revolut-transfer', icon: '🔄', title: 'Transfer', description: 'To Revolut (Revtag), bank account, or international → Recipient address → Review transfer.' },
  { path: '/flow/revolut-card-selection', icon: '💳', title: 'Cards', description: 'Card selection (Plastic/Metal, Gold) → Card request (add note for approver).' },
  { path: '/flow/revolut-receipts', icon: '🧾', title: 'My receipts', description: 'Upload, drag-and-drop, receipt list with Match found.' },
  { path: '/flow/revolut-billing-details', icon: '🏠', title: 'Billing details', description: 'Country, address, ZIP, town/city.' },
  { path: '/flow/revolut-spending-controls', icon: '⚙', title: 'Spending controls', description: 'Limits, categories, merchants, expenses, autofreeze.' },
  { path: '/flow/revolut-accounting-software', icon: '📊', title: 'Accounting software', description: 'Select Xero, QuickBooks, etc.' },
]

// Mercury flows (combined connected flows)
const MERCURY_FLOWS = [
  { path: '/flow/mercury-landing', icon: '🏠', title: 'Landing', description: 'Powerful banking. Simplified finances. Email input, Open Account, Contact Sales, Log In.' },
  { path: '/flow/mercury-login', icon: '🔐', title: 'Log in', description: 'Email and password login. Leads to Dashboard.' },
  { path: '/flow/mercury-signup', icon: '📝', title: 'Sign up', description: 'Company name → Callsign → Eligibility → Legal name → Email/Password → Email verification. Leads to Application.' },
  { path: '/flow/mercury-application', icon: '📋', title: 'Application', description: 'Company info → Address → Ownership → Documents → Expected activity → Follow-up. Leads to All set.' },
  { path: '/flow/mercury-all-set', icon: '✅', title: 'Post-application', description: 'All set → Fund account (wire/ACH) → Passkey → Add team member → 2FA backup codes.' },
  { path: '/flow/mercury-dashboard', icon: '📊', title: 'Dashboard', description: 'Home, Send/Request/Transfer/Deposit/Pay Bill/Create Invoice, balance, accounts, Bill Pay, Invoicing.' },
  { path: '/flow/mercury-transactions', icon: '📄', title: 'Transactions', description: 'Data views, filters, transaction list, net change, money in/out.' },
  { path: '/flow/mercury-cards', icon: '💳', title: 'Cards', description: 'Card list, card details, Create card (virtual/physical, spend controls).' },
  { path: '/flow/mercury-create-recipient', icon: '💸', title: 'Payments', description: 'Create recipient (email, address, tax docs) → Payment details (amount, memo, Schedule ACH).' },
  { path: '/flow/mercury-bill-pay', icon: '📋', title: 'Bill Pay', description: 'Upload bill, inbox, outstanding, mobbin@ap.mercury.com.' },
  { path: '/flow/mercury-invoicing', icon: '🧾', title: 'Invoicing', description: 'Invoice list, open/paid, create invoice.' },
  { path: '/flow/mercury-categories', icon: '⚙', title: 'Settings', description: 'Categories, Notifications, Profile picture, Change password.' },
]

export function FlowSelector() {
  const navigate = useNavigate()
  const { flowPath, basePath, info, company } = useCompany()
  const [viewMode, setViewMode] = useState('thumbnails') // 'thumbnails' | 'list'
  const flows = company === COMPANY.AIRWALLEX ? AIRWALLEX_FLOWS : company === COMPANY.REVOLUT ? REVOLUT_FLOWS : company === COMPANY.MERCURY ? MERCURY_FLOWS : []
  const hasFlows = flows.length > 0

  return (
    <div className="flow-selector">
      <header className="flow-selector-header">
        <Link to={basePath()} className="logo">
          {info.logoUrl ? (
            <img src={info.logoUrl} alt={info.name} className="logo-icon logo-icon-img" />
          ) : (
            <span className="logo-icon" style={{ background: info.primaryColor }}>{info.logoLetter}</span>
          )}
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
            {flows.map((flow) => (
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
            <p className="flow-selector-empty-subtext">{info.displayName} flows will be added here.</p>
          </div>
        )}
      </main>
      <footer className="flow-selector-footer">
        <span className="footer-logo">
          {info.logoUrl ? (
            <img src={info.logoUrl} alt="" className="logo-icon small logo-icon-img" />
          ) : (
            <span className="logo-icon small" style={{ background: info.primaryColor }}>{info.logoLetter}</span>
          )}{' '}
          {info.name.toLowerCase()}
        </span>
        <span>{info.displayName} User Flows</span>
      </footer>
    </div>
  )
}
