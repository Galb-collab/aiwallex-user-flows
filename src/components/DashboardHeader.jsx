import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { ProfileDropdown } from './ProfileDropdown'

export function DashboardHeader({ email = 'samlee@content-mobbin.com', className = '', children }) {
  const company = useCompany()
  const flowsLink = company ? company.basePath() : '/'
  return (
    <header className={`dashboard-header ${className}`.trim()}>
      {children}
      <div className="dashboard-header-right">
        <Link to={flowsLink} className="dashboard-back-flows">← Flows</Link>
        <ProfileDropdown email={email} />
      </div>
    </header>
  )
}
