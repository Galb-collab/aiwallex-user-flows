import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercurySignupCompanyName() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [companyName, setCompanyName] = useState('')

  const handleNext = (e) => {
    e.preventDefault()
    if (companyName.trim()) navigate(flowPath('/flow/mercury-signup/callsign'))
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
        <h1 className="mercury-step-title">What is your company&apos;s name?</h1>
        <p className="mercury-step-subtitle">This will appear on your Mercury account, but doesn&apos;t have to be your legal or trade name (you&apos;ll add that later).</p>
        <form onSubmit={handleNext}>
          <label className="mercury-label">Company name</label>
          <input type="text" className="mercury-input" placeholder="e.g. Amazon or Apple" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />
          <button type="submit" className="mercury-btn-primary" disabled={!companyName.trim()}>Next</button>
          <p className="mercury-step-subtitle" style={{ marginTop: 24, fontSize: 12 }}>By clicking &quot;Next,&quot; I acknowledge that I&apos;m legally authorized to enter into this agreement on the company&apos;s behalf.</p>
        </form>
      </div>
    </div>
  )
}
