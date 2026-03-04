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
      <div className="revolut-login-page">
        <div className="revolut-login-form">
          <Link to={flowPath('/flow/revolut-landing')} className="revolut-landing-logo revolut-login-logo">Revolut</Link>
          <h1 className="revolut-step-title">Welcome back</h1>
          <p className="revolut-step-subtitle">Enter the email associated with your Revolut Business account</p>
          <form onSubmit={handleContinue}>
            <input
              type="email"
              className="revolut-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Link to={flowPath('/flow/revolut-landing')} className="revolut-link revolut-login-lost">Lost access to my email</Link>
            <button type="submit" className="revolut-btn-primary" disabled={!email.trim()}>Continue</button>
            <div className="revolut-divider"><span>or</span></div>
            <button type="button" className="revolut-btn-social">Continue with Google</button>
            <button type="button" className="revolut-btn-social">Continue with Apple</button>
            <p className="revolut-login-signup">Don&apos;t have an account?</p>
            <Link to={flowPath('/flow/revolut-signup')} className="revolut-btn-primary revolut-btn-secondary">Create account</Link>
          </form>
        </div>
        <div className="revolut-login-qr">
          <div className="revolut-qr-placeholder">
            <span className="revolut-splash-r">R</span>
            <span className="revolut-qr-hint">QR code</span>
          </div>
          <p className="revolut-qr-title">Log in with QR code</p>
          <p className="revolut-qr-desc">Scan this code with your phone camera to log in instantly</p>
        </div>
      </div>
      <footer className="revolut-login-footer">
        <button type="button" className="revolut-footer-link">English (United Kingdom) ▼</button>
        <a href="#privacy" className="revolut-footer-link">Privacy Policy</a>
      </footer>
    </div>
  )
}
