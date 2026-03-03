import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercurySignupLegalName() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleNext = (e) => {
    e.preventDefault()
    if (firstName.trim() && lastName.trim()) navigate(flowPath('/flow/mercury-signup/email-password'))
  }

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
        <h1 className="mercury-step-title">Create your account</h1>
        <p className="mercury-step-subtitle">What&apos;s your legal name?</p>
        <form onSubmit={handleNext}>
          <div className="mercury-form-row mercury-form-two-col">
            <div>
              <label className="mercury-label">First name</label>
              <input type="text" className="mercury-input" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div>
              <label className="mercury-label">Last name</label>
              <input type="text" className="mercury-input" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
          </div>
          <button type="submit" className="mercury-btn-primary" disabled={!firstName.trim() || !lastName.trim()}>Next</button>
        </form>
      </div>
    </div>
  )
}
