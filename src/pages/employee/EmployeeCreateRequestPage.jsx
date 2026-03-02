import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './EmployeeCreateRequest.css'

export function EmployeeCreateRequestPage() {
  const navigate = useNavigate()

  return (
    <div className="employee-create-request">
      <header className="employee-create-request-header">
        <Link to="/" className="employee-create-request-flows">← Flows</Link>
        <div className="employee-create-request-brand">
          <span className="logo-icon">A</span>
          Airwallex Create request
        </div>
        <Link to="/flow/employee/requests" className="employee-create-request-close" aria-label="Close">×</Link>
      </header>

      <main className="employee-create-request-main">
        <h1 className="employee-create-request-title">Request type</h1>
        <div className="employee-create-request-options">
          <button
            type="button"
            className="employee-create-request-option"
            onClick={() => navigate('/flow/employee/requests')}
          >
            <span className="option-icon">💳</span>
            <div className="option-content">
              <h2>Airwallex card</h2>
              <p>Request a company or employee card for expenses and business purchases.</p>
            </div>
          </button>
          <button
            type="button"
            className="employee-create-request-option"
            onClick={() => navigate('/flow/employee/requests')}
          >
            <span className="option-icon">📄</span>
            <div className="option-content">
              <h2>Purchase order</h2>
              <p>Request a purchase order for procurement of goods and services from a vendor.</p>
            </div>
          </button>
        </div>
      </main>

      <footer className="employee-create-request-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> airwallex</span>
        <span>curated by Mobbin</span>
      </footer>
    </div>
  )
}
