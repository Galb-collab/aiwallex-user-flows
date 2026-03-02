import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileDropdown } from './ProfileDropdown'

export function DashboardHeader({ email = 'samlee@content-mobbin.com', className = '', children }) {
  return (
    <header className={`dashboard-header ${className}`.trim()}>
      {children}
      <div className="dashboard-header-right">
        <Link to="/" className="dashboard-back-flows">← Flows</Link>
        <ProfileDropdown email={email} />
      </div>
    </header>
  )
}
