import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercurySignupEmailVerify() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  return (
    <div className="mercury-step">
      <div className="mercury-card">
        <h1 className="mercury-step-title">Email Successfully Verified</h1>
        <p className="mercury-step-subtitle">Continue to complete your application.</p>
        <button type="button" className="mercury-btn-primary" onClick={() => navigate(flowPath('/flow/mercury-application/company-info'))}>Continue</button>
        <p className="mercury-step-subtitle" style={{ marginTop: 24, fontSize: 12 }}>Close this tab and return to previous window</p>
      </div>
    </div>
  )
}
