import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './EmployeeProfilePlaceholder.css'

export function EmployeeProfilePlaceholder({ title }) {
  const location = useLocation()
  const path = location.pathname
  return (
    <div className="employee-profile-placeholder">
      <nav className="employee-profile-nav">
        <Link to="/flow/employee/profile" className={path === '/flow/employee/profile' ? 'active' : ''}>Profile</Link>
        <Link to="/flow/employee/profile/security" className={path.includes('/security') ? 'active' : ''}>Security</Link>
        <Link to="/flow/employee/profile/notifications" className={path.includes('/notifications') ? 'active' : ''}>Notifications</Link>
        <Link to="/flow/employee/profile/accounts" className={path.includes('/accounts') ? 'active' : ''}>Accounts</Link>
        <Link to="/flow/employee/profile/assistants" className={path.includes('/assistants') ? 'active' : ''}>Assistants</Link>
      </nav>
      <div className="employee-profile-placeholder-content">
        <h1>{title}</h1>
        <p>This section is coming soon.</p>
        <Link to="/flow/employee/profile" className="employee-profile-placeholder-back">← Back to Profile</Link>
      </div>
    </div>
  )
}
