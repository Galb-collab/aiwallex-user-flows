import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import { LoginFeaturesPanel } from './LoginFeaturesPanel'
import './LoggingInFlow.css'

export function ForgotPasswordPage() {
  const { flowPath, info } = useCompany()
  const [method, setMethod] = useState('email')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSendReset = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
  }

  if (sent) {
    return (
      <div className="logging-in-layout">
        <div className="logging-in-form-wrap">
          <Link to={flowPath('/flow/logging-in')} className="logging-in-back">← Back</Link>
          <h1 className="logging-in-title">Forgot password?</h1>
          <p className="logging-in-desc">
            Please enter the email or mobile number you used to register with {info.displayName} to request a password reset.
          </p>
          <div className="logging-in-success-box">
            <span className="logging-in-success-icon">✓</span>
            <div>
              <strong>Done! Check your email</strong>
              <p>Please check your inbox and click the link in the email to reset your password</p>
            </div>
          </div>
          <Link
            to={flowPath('/flow/logging-in/reset-password')}
            className="logging-in-btn-primary"
            style={{ display: 'block', textAlign: 'center', marginTop: 24 }}
          >
            Continue to reset password
          </Link>
        </div>
        <LoginFeaturesPanel />
      </div>
    )
  }

  return (
    <div className="logging-in-layout">
      <div className="logging-in-form-wrap">
        <Link to={flowPath('/flow/logging-in')} className="logging-in-back">← Back</Link>
        <h1 className="logging-in-title">Forgot password?</h1>
        <p className="logging-in-desc">
          Please enter the email or mobile number you used to register with {info.displayName} to request a password reset.
        </p>
        <div className="logging-in-tabs">
          <button
            type="button"
            className={`logging-in-tab ${method === 'email' ? 'active' : ''}`}
            onClick={() => setMethod('email')}
          >
            Email
          </button>
          <button
            type="button"
            className={`logging-in-tab ${method === 'mobile' ? 'active' : ''}`}
            onClick={() => setMethod('mobile')}
          >
            Mobile number
          </button>
        </div>
        <form onSubmit={handleSendReset} className="logging-in-form">
          <div className="logging-in-field">
            <label>Your email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
            />
          </div>
          <button type="submit" className="logging-in-btn-primary">Send reset link</button>
        </form>
      </div>
      <LoginFeaturesPanel />
    </div>
  )
}
