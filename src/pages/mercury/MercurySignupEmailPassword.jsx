import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercurySignupEmailPassword() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleStart = (e) => {
    e.preventDefault()
    if (email.trim() && password.length >= 10) navigate(flowPath('/flow/mercury-signup/email-verify'))
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
        <h1 className="mercury-step-title">What&apos;s your email and password?</h1>
        <p className="mercury-step-subtitle">You will use this email and password to log in across devices.</p>
        <form onSubmit={handleStart}>
          <label className="mercury-label">Work email</label>
          <input type="email" className="mercury-input" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label className="mercury-label">Password</label>
          <input type="password" className="mercury-input" placeholder="Minimum 10 characters" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={10} />
          {password.length >= 10 && <span style={{ color: 'green', fontSize: 12 }}>✓ Minimum 10 characters</span>}
          <button type="submit" className="mercury-btn-primary" disabled={!email.trim() || password.length < 10}>Start Application</button>
          <p className="mercury-step-subtitle" style={{ marginTop: 24, fontSize: 12 }}>
            By clicking &quot;Start Application&quot;, I agree to Mercury&apos;s <a href="#terms" className="mercury-link">Terms of Use</a>, <a href="#privacy" className="mercury-link">Privacy Policy</a> and to receive electronic communication about my accounts and services per Mercury&apos;s Electronic Communications Agreement, and acknowledge receipt of Mercury&apos;s USA PATRIOT Act disclosure.
          </p>
        </form>
      </div>
    </div>
  )
}
