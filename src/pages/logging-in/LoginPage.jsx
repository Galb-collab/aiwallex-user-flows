import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LoginFeaturesPanel } from './LoginFeaturesPanel'
import './LoggingInFlow.css'

export function LoginPage() {
  const navigate = useNavigate()
  const [method, setMethod] = useState('email')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    setEmailError('')
    if (!email.trim()) {
      setEmailError('Please enter the email you signed up with.')
      return
    }
    if (!password) {
      return
    }
    navigate('/flow/logging-in/verify-2fa')
  }

  return (
    <div className="logging-in-layout">
      <div className="logging-in-form-wrap">
        <h1 className="logging-in-title">Log in to your account</h1>
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
        <form onSubmit={handleLogin} className="logging-in-form">
          <div className="logging-in-field">
            <label>Business email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setEmailError('') }}
              placeholder="Your email"
              className={emailError ? 'error' : ''}
            />
            {emailError && <span className="logging-in-error">{emailError}</span>}
          </div>
          <div className="logging-in-field">
            <div className="logging-in-field-header">
              <label>Password</label>
              <Link to="/flow/logging-in/forgot-password" className="logging-in-forgot">Forgot password?</Link>
            </div>
            <div className="input-with-icon">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <button
                type="button"
                className="input-icon-btn"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁'}
              </button>
            </div>
          </div>
          <button type="submit" className="logging-in-btn-primary">Log in</button>
          <Link to="/flow/web-onboarding" className="logging-in-btn-secondary">New to Airwallex? Sign up</Link>
        </form>
        <p className="logging-in-sandbox">
          Looking for the sandbox environment? <Link to="/flow/logging-in">Log in to sandbox</Link>
        </p>
      </div>
      <LoginFeaturesPanel />
    </div>
  )
}
