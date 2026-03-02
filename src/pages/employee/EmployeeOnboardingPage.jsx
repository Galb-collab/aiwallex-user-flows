import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './EmployeeOnboarding.css'

function passwordRequirements(pwd) {
  const atLeast8 = (pwd || '').length >= 8
  const upper = /[A-Z]/.test(pwd || '')
  const lower = /[a-z]/.test(pwd || '')
  const numberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(pwd || '')
  return { atLeast8, upper, lower, numberOrSymbol, all: atLeast8 && upper && lower && numberOrSymbol }
}

export function EmployeeOnboardingPage() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const req = passwordRequirements(password)

  const handleJoin = (e) => {
    e.preventDefault()
    setError('')
    if (!firstName.trim() || !lastName.trim()) {
      setError('Please enter your legal name.')
      return
    }
    if (!email.trim()) {
      setError('Please enter your business email.')
      return
    }
    if (!req.all) {
      setError('Your password needs to be minimum 8 characters long, with at least one uppercase letter, one lowercase letter and one number.')
      return
    }
    navigate('/flow/employee/onboarding/verify-phone')
  }

  return (
    <div className="employee-onboarding">
      <header className="employee-onboarding-header">
        <Link to="/" className="employee-onboarding-flows">← Flows</Link>
        <Link to="/" className="employee-onboarding-logo">
          <span className="logo-icon">A</span>
          Airwallex
        </Link>
      </header>
      <main className="employee-onboarding-main">
        <div className="employee-onboarding-layout">
          <div className="employee-onboarding-form">
            <h1 className="employee-onboarding-title">Let&apos;s set up your account</h1>
            <form onSubmit={handleJoin}>
              <div className="employee-onboarding-field">
                <label>Legal first name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First name" />
              </div>
              <div className="employee-onboarding-field">
                <label>Legal middle name <span className="optional">(optional)</span></label>
                <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} placeholder="Middle name" />
              </div>
              <div className="employee-onboarding-field">
                <label>Legal last name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last name" />
              </div>
              <div className="employee-onboarding-field">
                <label>Your mobile number</label>
                <div className="employee-onboarding-phone">
                  <select defaultValue="+65">
                    <option value="+65">+65</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select>
                  <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Phone number" />
                </div>
              </div>
              <div className="employee-onboarding-field">
                <label>Business email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              </div>
              <div className="employee-onboarding-field">
                <label>Password</label>
                <div className="input-with-icon">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className={error && !req.all ? 'error' : ''}
                  />
                  <button type="button" className="input-icon-btn" onClick={() => setShowPassword(!showPassword)} aria-label="Toggle visibility">
                    {showPassword ? '🙈' : '👁'}
                  </button>
                </div>
                {password && (
                  <div className="employee-onboarding-password-req">
                    <p className="req-title">Your password must have:</p>
                    <p className={req.atLeast8 ? 'req-met' : 'req-unmet'}>At least 8 characters long</p>
                    <p className={req.upper ? 'req-met' : 'req-unmet'}>One Uppercase character</p>
                    <p className={req.lower ? 'req-met' : 'req-unmet'}>One Lowercase character</p>
                    <p className={req.numberOrSymbol ? 'req-met' : 'req-unmet'}>One number or symbol</p>
                  </div>
                )}
                {error && <p className="employee-onboarding-error">{error}</p>}
              </div>
              <button type="submit" className="employee-onboarding-btn" disabled={!req.all}>
                Join account
              </button>
            </form>
            <div className="employee-onboarding-links">
              <a href="#legal">Legal & Privacy</a>
              <a href="#help">Help Centre</a>
            </div>
          </div>
          <div className="employee-onboarding-promo">
            <div className="employee-onboarding-promo-card">
              <h2>BORDERLESS ACCOUNT</h2>
              <p>Start using your Airwallex Borderless Account now</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="employee-onboarding-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> airwallex</span>
        <span>curated by Mobbin</span>
      </footer>
    </div>
  )
}
