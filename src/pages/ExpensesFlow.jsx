import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { DashboardHeader } from '../components/DashboardHeader'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './ExpensesFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

const SUMMARY_CARDS = [
  { id: 'automations', label: 'New', title: 'Expense automations', desc: 'Automate your expense coding with mappings and advanced rules.', action: 'Get started →' },
  { id: 'pending-submission', title: 'Pending submission', items: ['Submit my card expenses 0', 'Submit my reimbursements 0'] },
  { id: 'pending-approval', title: 'Pending your approval', items: ['Approve card expenses 0', 'Approve reimbursements 0'] },
  { id: 'awaiting-payment', title: 'Awaiting payment', items: ['Pay reimbursements 0'] },
]

const SETTINGS_FIELDS = [
  { name: 'Merchant', display: true, required: false },
  { name: 'Description', display: true, required: false },
  { name: 'Comments', display: true, required: false },
]

export function ExpensesFlow() {
  const { flowPath } = useCompany()
  const [tab, setTab] = useState('summary')
  const [subTab, setSubTab] = useState('card-expenses')

  return (
    <div className="dashboard spend-general expenses-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to={flowPath('/flow/dashboard')}>Dashboard</Link>
          <div className="sidebar-nav-item active-wrap">
            <Link to={flowPath('/flow/spend-general')}>Spend <span className="tag">New</span></Link>
            <div className="sidebar-sub">
              <Link to={flowPath('/flow/spend-general/expenses-spend')} className="active">Expenses</Link>
              <Link to={flowPath('/flow/bills')}>Bills</Link>
              <Link to={flowPath('/flow/spend-general/purchase-orders')}>Purchase orders</Link>
              <Link to={flowPath('/flow/vendors')}>Vendors</Link>
              <Link to={flowPath('/flow/requests')}>Requests</Link>
            </div>
          </div>
          <Link to={flowPath('/flow/billing')}>Billing <span className="tag">New</span></Link>
          <Link to={flowPath('/flow/reports')}>Reports</Link>
          <Link to={flowPath('/flow/settings')}>Settings</Link>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{BUSINESS_NAME} Account | {BUSINESS_NAME}</div>
          <Link to={flowPath('/flow/wallet')}>Wallet</Link>
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
        <DashboardHeader email={EMAIL} className="expenses-header">
          <nav className="expenses-tabs">
            <Link to={flowPath('/flow/spend-general')} className="expenses-tab-back">← Spend</Link>
            <button type="button" className={tab === 'summary' ? 'active' : ''} onClick={() => setTab('summary')}>Summary</button>
            <button type="button" className={tab === 'automations' ? 'active' : ''} onClick={() => setTab('automations')}>Automations</button>
            <button type="button" className={tab === 'settings' ? 'active' : ''} onClick={() => setTab('settings')}>Settings</button>
          </nav>
        </DashboardHeader>

        <div className="expenses-content">
          {tab === 'summary' && (
            <>
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
                  <Link to={flowPath('/flow/spend-general/expenses-spend/uploading-a-receipt')} className="expenses-btn primary">Upload receipts</Link>
                </div>
              </div>

              <div className="expenses-cards">
                {SUMMARY_CARDS.map((c) => (
                  <div key={c.id} className={`expenses-card ${c.id === 'automations' ? 'expenses-card-automations' : ''}`}>
                    {c.label && <span className="expenses-card-badge">{c.label}</span>}
                    <h3 className="expenses-card-title">{c.title}</h3>
                    {c.desc && <p className="expenses-card-desc">{c.desc}</p>}
                    {c.action && <a href="#automations" className="expenses-card-link">{c.action}</a>}
                    {c.items && (
                      <ul className="expenses-card-items">
                        {c.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="expenses-table-section">
                <div className="expenses-sub-tabs">
                  <button type="button" className={subTab === 'card-expenses' ? 'active' : ''} onClick={() => setSubTab('card-expenses')}>Card expenses</button>
                  <Link to={flowPath('/flow/spend-general/expenses-spend/filtering-reimbursement')} className={subTab === 'reimbursements' ? 'active' : ''}>Reimbursements</Link>
                </div>
                <div className="expenses-table-toolbar">
                  <input type="search" className="expenses-search" placeholder="Search by employee, card nickname, description, or last 4 digits of card number" />
                  <button type="button" className="expenses-download" aria-label="Download">↓</button>
                  <input type="text" className="expenses-date" placeholder="Date from" />
                  <input type="text" className="expenses-date" placeholder="Date to" />
                  <select className="expenses-filter" aria-label="Cardholder"><option>Cardholder</option></select>
                  <span className="expenses-filter-tag">5 statuses ×</span>
                  <button type="button" className="expenses-clear-filters">Clear filters</button>
                </div>
                <div className="expenses-table-wrap">
                  <table className="expenses-table">
                    <thead>
                      <tr>
                        <th>DATE</th>
                        <th>CARD</th>
                        <th>MERCHANT</th>
                        <th>AMOUNT</th>
                        <th>STATUS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="expenses-table-empty">
                        <td colSpan={5}>No card expenses yet</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}

          {tab === 'automations' && (
            <div className="expenses-automations">
              <div className="expenses-automations-head">
                <div>
                  <h1 className="expenses-page-title">Expense automations</h1>
                  <p className="expenses-page-subtitle">Create mappings and rules to automate completion of card expenses and reimbursements.</p>
                </div>
                <button type="button" className="expenses-btn primary">+ New automation</button>
              </div>
              <div className="expenses-automations-toolbar">
                <input type="search" className="expenses-search" placeholder="Search automation name" />
                <select className="expenses-filter" aria-label="Automation type"><option>Automation type</option></select>
                <select className="expenses-filter" aria-label="Airwallex field"><option>Airwallex field</option></select>
                <select className="expenses-filter" aria-label="Accounting field"><option>Accounting field</option></select>
              </div>
              <div className="expenses-automations-table-wrap">
                <table className="expenses-table">
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>TYPE</th>
                      <th>AUTOMATION</th>
                      <th>UPDATED</th>
                    </tr>
                  </thead>
                  <tbody />
                </table>
              </div>
              <div className="expenses-empty-state">
                <div className="expenses-empty-visual">💻🚀</div>
                <h2 className="expenses-empty-title">Precision automation, effortless expenses</h2>
                <p className="expenses-empty-desc">Automate your expense coding with mappings and advanced rules.</p>
              </div>
            </div>
          )}

          {tab === 'settings' && (
            <div className="expenses-settings">
              <div className="expenses-connect-banner">
                <div className="expenses-connect-logos">
                  <span className="expenses-connect-logo" title="Xero">Xero</span>
                  <span className="expenses-connect-logo" title="QuickBooks">QuickBooks</span>
                  <span className="expenses-connect-logo" title="NetSuite">NetSuite</span>
                </div>
                <p>By connecting your expenses data, we will automatically sync to your favourite accounting software for easy expense reconciliation.</p>
                <button type="button" className="expenses-connect-btn">Connect</button>
              </div>

              <section className="expenses-settings-section">
                <div className="expenses-settings-block">
                  <h2 className="expenses-settings-heading">Approvals configuration</h2>
                  <p className="expenses-settings-desc">Create a workflow to route expenses through approval layers based on expense amounts.</p>
                  <button type="button" className="expenses-btn secondary">Manage approvals</button>
                </div>
              </section>

              <section className="expenses-settings-section">
                <h2 className="expenses-settings-heading">Expense form configuration</h2>
                <p className="expenses-settings-desc">Configure the fields in your cardholder&apos;s expense forms to make sure data can be synced correctly.</p>
                <div className="expenses-settings-form">
                  <div className="expenses-settings-row">
                    <span className="expenses-settings-label">Receipt configuration</span>
                    <span className="expenses-settings-value">Not required</span>
                    <button type="button" className="expenses-btn secondary small">Edit</button>
                  </div>
                  <div className="expenses-settings-fields">
                    <div className="expenses-settings-fields-header">
                      <span className="expenses-settings-field-col">Display field</span>
                      <span className="expenses-settings-field-col">Expenses fields</span>
                      <span className="expenses-settings-field-col required-col">Required field</span>
                    </div>
                    {SETTINGS_FIELDS.map((f) => (
                      <div key={f.name} className="expenses-settings-fields-row">
                        <span className="expenses-settings-field-col">
                          <input type="checkbox" checked={f.display} readOnly className="expenses-settings-checkbox" />
                          {f.name}
                        </span>
                        <span className="expenses-settings-field-col" />
                        <span className="expenses-settings-field-col required-col">
                          <label className="expenses-toggle">
                            <input type="checkbox" checked={f.required} readOnly />
                            <span className="expenses-toggle-slider" />
                          </label>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      </div>

      <footer className="spend-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Expenses - spend</span>
      </footer>
    </div>
  )
}
