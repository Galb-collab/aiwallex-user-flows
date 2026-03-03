import React, { useState, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { DashboardHeader } from '../components/DashboardHeader'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './ExpensesFlow.css'
import './ApprovingReimbursementFlow.css'
import './FilteringReimbursementFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

const TABLE_ROWS = [
  { id: '1', reportName: '-', user: 'Sam Lee', submissionDate: '', amount: '0.00 SGD', meta: '', status: 'Draft' },
  { id: '2', reportName: 'Reimbursement report 2...', user: 'Alex Smith', submissionDate: '2025-11-27', amount: '5.00 SGD', meta: '1 reimbursement', status: 'Pending your approval' },
  { id: '3', reportName: 'Reimbursement report 2...', user: 'Sam Lee', submissionDate: '', amount: '5.00 SGD', meta: '1 reimbursement', status: 'Draft' },
  { id: '4', reportName: 'Reimbursement report 2...', user: 'Sam Lee', submissionDate: '', amount: '0.00 SGD', meta: '', status: 'Draft' },
]

const STATUS_OPTIONS = ['', 'Draft', 'Pending your approval', 'Awaiting payment']

const APPROVING_PATH = '/flow/spend-general/expenses-spend/filtering-reimbursement/approving-reimbursement'

export function FilteringReimbursementFlow() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [searchQuery, setSearchQuery] = useState('')
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [fundingFilter, setFundingFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  const [selectedUsers, setSelectedUsers] = useState([])

  const filteredRows = useMemo(() => {
    return TABLE_ROWS.filter((row) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchReport = row.reportName.toLowerCase().includes(q)
        const matchUser = row.user.toLowerCase().includes(q)
        if (!matchReport && !matchUser) return false
      }
      if (dateFrom && row.submissionDate) {
        if (row.submissionDate < dateFrom) return false
      }
      if (dateTo && row.submissionDate) {
        if (row.submissionDate > dateTo) return false
      }
      if (dateFrom && !row.submissionDate) return false
      if (dateTo && !row.submissionDate) return false
      if (selectedUsers.length > 0 && !selectedUsers.includes(row.user)) return false
      if (statusFilter && row.status !== statusFilter) return false
      if (fundingFilter) return true
      return true
    })
  }, [searchQuery, dateFrom, dateTo, fundingFilter, statusFilter, selectedUsers])

  const hasActiveFilters = !!(searchQuery || dateFrom || dateTo || selectedUsers.length || fundingFilter || statusFilter)

  const clearFilters = () => {
    setSearchQuery('')
    setDateFrom('')
    setDateTo('')
    setFundingFilter('')
    setStatusFilter('')
    setSelectedUsers([])
    setUserDropdownOpen(false)
  }

  const toggleUser = (user) => {
    setSelectedUsers((prev) => (prev.includes(user) ? prev.filter((u) => u !== user) : [...prev, user]))
  }

  const removeDateRange = () => {
    setDateFrom('')
    setDateTo('')
  }

  const showDateRangeChip = dateFrom && dateTo

  return (
    <div className="dashboard spend-general expenses-flow approving-reimb-flow filtering-reimb-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to={flowPath('/flow/dashboard')}>Dashboard</Link>
          <div className="sidebar-nav-item active-wrap">
            <Link to={flowPath('/flow/spend-general')}>Spend <span className="tag">New</span></Link>
            <div className="sidebar-sub">
              <Link to={flowPath('/flow/spend-general/expenses-spend')} className="active">Expenses</Link>
              <Link to={flowPath('/flow/bills')}>Bills</Link>
              <Link to={flowPath('/flow/purchase-orders')}>Purchase orders</Link>
              <Link to={flowPath('/flow/vendors')}>Vendors</Link>
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
          <a href="#cards">Cards</a>
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
        <DashboardHeader email={EMAIL} className="expenses-header">
          <nav className="expenses-tabs">
            <Link to={flowPath('/flow/spend-general/expenses-spend')} className="expenses-tab-back">← Expenses</Link>
            <button type="button" className="active">Summary</button>
          </nav>
        </DashboardHeader>

        <div className="expenses-content ar-list-content">
          <div className="expenses-title-row">
            <div>
              <h1 className="expenses-page-title">Expenses</h1>
              <p className="expenses-page-subtitle">Manage and approve card expenses and reimbursements</p>
            </div>
            <div className="expenses-title-actions">
              <button type="button" className="expenses-btn secondary">+ Reimbursement report</button>
              <button type="button" className="expenses-btn primary">Upload receipts</button>
            </div>
          </div>

          <div className="expenses-cards ar-cards">
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
                <li>Submit my reimbursements 5.00 SGD <span className="ar-badge">3</span></li>
              </ul>
            </div>
            <div className="expenses-card">
              <h3 className="expenses-card-title">Pending your approval</h3>
              <ul className="expenses-card-items">
                <li>Approve card expenses 0</li>
                <li>Approve reimbursements 5.00 SGD <span className="ar-badge">1</span></li>
              </ul>
            </div>
            <div className="expenses-card">
              <h3 className="expenses-card-title">Awaiting payment</h3>
              <ul className="expenses-card-items">
                <li>Pay reimbursements 0</li>
              </ul>
            </div>
          </div>

          <div className="ar-sub-tabs">
            <button type="button">Card expenses</button>
            <button type="button" className="active">Reimbursements</button>
          </div>

          <div className="fr-toolbar">
            <div className="fr-search-row">
              <span className="fr-search-icon" aria-hidden>🔍</span>
              <input
                type="search"
                className="fr-search"
                placeholder="Search by report name, reimbursement description, or merchant"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="button" className="ar-download" aria-label="Download">↓</button>
            </div>
            <div className="fr-filters-row">
              {showDateRangeChip ? (
                <span className="fr-filter-chip">
                  <span className="fr-chip-icon">📅</span>
                  {dateFrom} to {dateTo}
                  <button type="button" className="fr-chip-clear" onClick={removeDateRange} aria-label="Clear date range">×</button>
                </span>
              ) : (
                <>
                  <input
                    type="date"
                    className="fr-filter fr-date"
                    placeholder="Date from"
                    value={dateFrom}
                    onChange={(e) => setDateFrom(e.target.value)}
                    aria-label="Date from"
                  />
                  <input
                    type="date"
                    className="fr-filter fr-date"
                    placeholder="Date to"
                    value={dateTo}
                    onChange={(e) => setDateTo(e.target.value)}
                    aria-label="Date to"
                  />
                </>
              )}
              <div className="fr-dropdown-wrap">
                <button
                  type="button"
                  className="fr-filter fr-dropdown-trigger"
                  onClick={() => setUserDropdownOpen((o) => !o)}
                  aria-expanded={userDropdownOpen}
                  aria-haspopup="listbox"
                >
                  <span className="fr-dropdown-icon">👤</span>
                  User
                </button>
                {userDropdownOpen && (
                  <div className="fr-dropdown-menu" role="listbox">
                    <label className="fr-dropdown-option">
                      <input type="checkbox" checked={selectedUsers.includes('Alex Smith')} onChange={() => toggleUser('Alex Smith')} />
                      Alex Smith
                    </label>
                    <label className="fr-dropdown-option">
                      <input type="checkbox" checked={selectedUsers.includes('Sam Lee')} onChange={() => toggleUser('Sam Lee')} />
                      Sam Lee
                    </label>
                  </div>
                )}
              </div>
              <select
                className="fr-filter fr-select"
                aria-label="Funding account"
                value={fundingFilter}
                onChange={(e) => setFundingFilter(e.target.value)}
              >
                <option value="">Funding account</option>
                <option value="default">Default account</option>
              </select>
              <select
                className="fr-filter fr-select"
                aria-label="Status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">Status</option>
                {STATUS_OPTIONS.filter(Boolean).map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {hasActiveFilters && (
                <button type="button" className="fr-clear-filters" onClick={clearFilters}>Clear filters</button>
              )}
            </div>
          </div>

          <div className="ar-table-wrap">
            <table className="ar-table">
              <thead>
                <tr>
                  <th><input type="checkbox" aria-label="Select all" /></th>
                  <th>REPORT NAME</th>
                  <th>USER</th>
                  <th>SUBMISSION DATE</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filteredRows.map((row) => (
                  <tr
                    key={row.id}
                    className={row.status === 'Pending your approval' ? 'ar-row-clickable' : ''}
                    onClick={row.status === 'Pending your approval' ? () => navigate(flowPath(APPROVING_PATH)) : undefined}
                  >
                    <td><input type="checkbox" aria-label={`Select ${row.reportName}`} onClick={(e) => e.stopPropagation()} /></td>
                    <td>{row.reportName}</td>
                    <td>{row.user}</td>
                    <td>{row.submissionDate || '-'}</td>
                    <td>{row.amount}{row.meta ? ` ${row.meta}` : ''}</td>
                    <td><span className={`ar-status-pill ar-status-${row.status === 'Awaiting payment' ? 'awaiting' : row.status === 'Pending your approval' ? 'pending' : 'draft'}`}>{row.status}</span></td>
                    <td><button type="button" className="ar-row-menu" aria-label="Menu" onClick={(e) => e.stopPropagation()}>⋮</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="ar-pagination">
            <span>{filteredRows.length ? `1-${filteredRows.length} of ${filteredRows.length}` : '0-0 of 0'}</span>
            <select className="ar-rows-select" aria-label="Rows per page"><option>20</option></select>
            <div className="ar-pagination-btns">
              <button type="button" aria-label="First">«</button>
              <button type="button" aria-label="Previous">‹</button>
              <button type="button" className="active">1</button>
              <button type="button" aria-label="Next">›</button>
              <button type="button" aria-label="Last">»</button>
            </div>
          </div>
        </div>
      </div>

      <footer className="spend-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Filtering reimbursement</span>
      </footer>
    </div>
  )
}
