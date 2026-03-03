import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryLogin() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    if (email.trim() && password.trim()) navigate(flowPath('/flow/mercury-dashboard'))
  }

  return (
    <div className="mercury-flow-layout">
      <div className="mercury-step">
        <div className="mercury-header" style={{ marginBottom: 0 }}>
          <Link to={flowPath('/flow/mercury-landing')} className="mercury-logo">
            <img src="/mercury-logo.png" alt="Mercury" />
            MERCURY
          </Link>
          <Link to={flowPath('/flow/mercury-landing')} className="mercury-link">Log in &gt;</Link>
        </div>
        <div className="mercury-card">
          <h1 className="mercury-step-title">Welcome back</h1>
          <p className="mercury-step-subtitle">Enter your email and password to access your account</p>
          <form onSubmit={handleLogin}>
            <label className="mercury-label">Work email</label>
            <input type="email" className="mercury-input" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label className="mercury-label">Password</label>
            <input type="password" className="mercury-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="mercury-btn-primary">Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}
