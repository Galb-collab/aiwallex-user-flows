import React from 'react'
import './EmployeeBillsPage.css'

export function EmployeeBillsPage() {
  return (
    <div className="employee-bills">
      <div className="employee-expenses-header">
        <div>
          <h1 className="employee-expenses-title">Bills</h1>
          <p className="employee-expenses-subtitle">Manage and approve bills.</p>
        </div>
      </div>
      <div className="employee-expenses-card">
        <p className="employee-expenses-empty-text">No bills yet.</p>
      </div>
    </div>
  )
}
