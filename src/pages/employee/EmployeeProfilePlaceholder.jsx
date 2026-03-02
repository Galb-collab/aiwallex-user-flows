import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './EmployeeProfilePlaceholder.css'

export function EmployeeProfilePlaceholder({ title }) {
  const { flowPath } = useCompany()
  const location = useLocation()
  const path = location.pathname
  return (
    <div className="employee-profile-placeholder">
      <nav className="employee-profile-nav">
        <Link to={flowPath('/flow/employee/profile')} className={path === flowPath('/flow/employee/profile') ? 'active' : ''}>Profile</Link>
        <Link to={flowPath('/flow/employee/profile/security')} className={path.includes(flowPath('/flow/employee/profile/security')) ? 'active' : ''}>Security</Link>
        <Link to={flowPath('/flow/employee/profile/notifications')} className={path.includes(flowPath('/flow/employee/profile/notifications')) ? 'active' : ''}>Notifications</Link>
        <Link to={flowPath('/flow/employee/profile/accounts')} className={path.includes(flowPath('/flow/employee/profile/accounts')) ? 'active' : ''}>Accounts</Link>
        <Link to={flowPath('/flow/employee/profile/assistants')} className={path.includes(flowPath('/flow/employee/profile/assistants')) ? 'active' : ''}>Assistants</Link>
      </nav>
      <div className="employee-profile-placeholder-content">
        <h1>{title}</h1>
        <p>This section is coming soon.</p>
        <Link to={flowPath('/flow/employee/profile')} className="employee-profile-placeholder-back">← Back to Profile</Link>
      </div>
    </div>
  )
}
