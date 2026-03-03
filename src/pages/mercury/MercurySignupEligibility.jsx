import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

const ELIGIBILITY_OPTIONS = [
  'Registered with the SEC',
  'A publicly-traded company',
  'Majority owned by a public company',
  'An internet gambling business',
  { text: 'Dealing with Controlled Substances (THC, other ', link: 'Schedule I drugs', suffix: ')' },
  'Involved in the sale, distribution or manufacturing of firearms or ammunition',
  'A government organization',
  'Part of a tax anticipation program',
  'An adult entertainment business',
]

export function MercurySignupEligibility() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [checked, setChecked] = useState(Array(ELIGIBILITY_OPTIONS.length).fill(false))

  const toggle = (i) => {
    setChecked((prev) => {
      const next = [...prev]
      next[i] = !next[i]
      return next
    })
  }

  const hasAnyChecked = checked.some(Boolean)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (hasAnyChecked) {
      navigate(flowPath('/flow/mercury-landing'))
    } else {
      navigate(flowPath('/flow/mercury-signup/legal-name'))
    }
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
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 24 }}>
            {ELIGIBILITY_OPTIONS.map((opt, i) => (
              <label key={i} className="mercury-checkbox">
                <input type="checkbox" checked={checked[i]} onChange={() => toggle(i)} />
                <span>
                  {typeof opt === 'string' ? opt : (
                    <>
                      {opt.text}
                      <a href="#schedule-i" className="mercury-link mercury-link-underline">Schedule I drugs</a>
                      {opt.suffix}
                    </>
                  )}
                </span>
              </label>
            ))}
          </div>
          <button type="submit" className="mercury-btn-primary">
            {hasAnyChecked ? 'Next' : 'None of the Above'}
          </button>
        </form>
      </div>
    </div>
  )
}
