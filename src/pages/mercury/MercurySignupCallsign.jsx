import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercurySignupCallsign() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [callsign, setCallsign] = useState('mobbin')

  const handleNext = (e) => {
    e.preventDefault()
    if (callsign.trim()) navigate(flowPath('/flow/mercury-signup/eligibility'))
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
        <h1 className="mercury-step-title">Set your Mercury callsign</h1>
        <p className="mercury-step-subtitle">We&apos;ll use this to personalize your bill forwarding email address, referral link, and more. It won&apos;t appear on statements.</p>
        <form onSubmit={handleNext}>
          <label className="mercury-label">Callsign</label>
          <input type="text" className="mercury-input" placeholder="mobbin" value={callsign} onChange={(e) => setCallsign(e.target.value)} required />
          <span style={{ fontSize: 12, color: 'var(--mercury-muted)' }}>Numbers, letters, and dashes only, please.</span>
          <button type="submit" className="mercury-btn-primary" disabled={!callsign.trim()}>Next</button>
        </form>
      </div>
    </div>
  )
}
