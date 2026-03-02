import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutSignupEmail() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [email, setEmail] = useState('')

  const handleContinue = (e) => {
    e.preventDefault()
    if (email.trim()) navigate(flowPath('/flow/revolut-signup/verify-email'))
  }

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
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
        <button type="button" className="revolut-btn-social">Sign up with Google</button>
        <button type="button" className="revolut-btn-social">Sign up with Apple</button>
        <button type="submit" className="revolut-btn-primary" disabled={!email.trim()}>Continue</button>
      </form>
    </div>
  )
}
