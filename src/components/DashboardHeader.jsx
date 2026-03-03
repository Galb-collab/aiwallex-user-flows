import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { ProfileDropdown } from './ProfileDropdown'

export function DashboardHeader({ email = 'samlee@content-mobbin.com', className = '', children, showDashboardActions }) {
  const company = useCompany()
  const flowsLink = company ? company.basePath() : '/'
  const flowPath = company ? company.flowPath : (p) => p
  return (
    <header className={`dashboard-header ${className}`.trim()}>
      {children}
      {showDashboardActions && (
        <div className="dashboard-header-actions">
          <Link to={flowPath('/flow/dashboard/adding-funds')} className="dashboard-action-btn">
            <span className="dashboard-action-icon">💰</span> Add funds
          </Link>
          <Link to={flowPath('/flow/transfers')} className="dashboard-action-btn">
            <span className="dashboard-action-icon">✈</span> Create transfer
          </Link>
          <Link to={flowPath('/flow/cards/creating-a-card-company')} className="dashboard-action-btn">
            <span className="dashboard-action-icon">💳</span> Create card
          </Link>
          <div className="dashboard-view-funds">
            <label htmlFor="dashboard-view-funds-select">View funds in</label>
            <select id="dashboard-view-funds-select" className="dashboard-view-funds-select" defaultValue="USD">
              <option value="USD">USD</option>
              <option value="SGD">SGD</option>
              <option value="GBP">GBP</option>
              <option value="EUR">EUR</option>
            </select>
            <span className="dashboard-view-funds-info" title="Info">ℹ</span>
          </div>
        </div>
      )}
      <div className="dashboard-header-right">
        <Link to={flowsLink} className="dashboard-back-flows">← Flows</Link>
        <ProfileDropdown email={email} />
      </div>
    </header>
  )
}
