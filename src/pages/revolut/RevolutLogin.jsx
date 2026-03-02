import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutLogin() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [email, setEmail] = useState('')

  const handleContinue = (e) => {
    e.preventDefault()
    if (email.trim()) navigate(flowPath('/flow/revolut-dashboard'))
  }

  return (
    <div className="revolut-flow-layout">
    <div className="revolut-step">
      <Link to={flowPath('/flow/revolut-landing')} className="revolut-step-back">←</Link>
      <h1 className="revolut-step-title">Enter email address</h1>
      <p className="revolut-step-subtitle">You&apos;ll need this email address to access your business account</p>
      <form onSubmit={handleContinue}>
        <input
          type="email"
          className="revolut-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="revolut-divider"><span>or</span></div>
        <button type="button" className="revolut-btn-social">Log in with Google</button>
        <button type="button" className="revolut-btn-social">Log in with Apple</button>
        <button type="submit" className="revolut-btn-primary" disabled={!email.trim()}>Continue</button>
      </form>
    </div>
    </div>
  )
}
