import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercurySignupEmailVerify() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  return (
    <div className="mercury-step">
      <div className="mercury-header" style={{ marginBottom: 0 }}>
        <Link to={flowPath('/flow/mercury-landing')} className="mercury-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          MERCURY
        </Link>
        <Link to={flowPath('/flow/mercury-login')} className="mercury-link">Log in &gt;</Link>
      </div>
      <div className="mercury-card">
        <h1 className="mercury-step-title">Email Successfully Verified</h1>
        <p className="mercury-step-subtitle">Continue to complete your application.</p>
        <button type="button" className="mercury-btn-primary" onClick={() => navigate(flowPath('/flow/mercury-application/company-info'))}>Continue</button>
        <p className="mercury-step-subtitle" style={{ marginTop: 24, fontSize: 12 }}>Close this tab and return to previous window</p>
      </div>
    </div>
  )
}
