import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

const ELIGIBILITY_OPTIONS = [
  'Registered with the SEC',
  'A publicly-traded company',
  'Majority owned by a public company',
  'An internet gambling business',
  'Dealing with Controlled Substances (THC, other Schedule I drugs)',
  'Involved in the sale, distribution or manufacturing of firearms or ammunition',
  'A government organization',
  'Part of a tax anticipation program',
  'An adult entertainment business',
]

export function MercurySignupEligibility() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  const handleNone = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/mercury-signup/legal-name'))
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
        <h1 className="mercury-step-title">Is your company any of the following?</h1>
        <form onSubmit={handleNone}>
          <div style={{ marginBottom: 24 }}>
            {ELIGIBILITY_OPTIONS.map((opt, i) => (
              <label key={i} className="mercury-checkbox">
                <input type="checkbox" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          <button type="submit" className="mercury-btn-primary">None of the Above</button>
        </form>
      </div>
    </div>
  )
}
