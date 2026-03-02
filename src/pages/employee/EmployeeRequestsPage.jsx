import React from 'react'
import { Link } from 'react-router-dom'
import './EmployeeRequestsPage.css'

export function EmployeeRequestsPage() {
  return (
    <div className="employee-requests">
      <div className="employee-requests-header">
        <div>
          <h1 className="employee-requests-title">Spend requests</h1>
          <p className="employee-requests-subtitle">Create spend requests and manage their progress.</p>
        </div>
        <Link to="/flow/employee/requests/create" className="employee-requests-btn">+ Create request</Link>
      </div>

      <div className="employee-requests-empty">
        <span className="employee-requests-empty-icon">📋</span>
        <h2>No requests yet</h2>
        <p>Create a spend request to get started.</p>
        <Link to="/flow/employee/requests/create" className="employee-requests-btn">Create request</Link>
      </div>
    </div>
  )
}
