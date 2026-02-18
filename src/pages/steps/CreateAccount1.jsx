import React, { useState } from 'react'
import { useOnboarding } from '../../context/OnboardingContext'
import { TestimonialPanel } from '../../components/TestimonialPanel'
import './CreateAccount.css'

function passwordRequirements(pwd) {
  const atLeast8 = (pwd || '').length >= 8
  const upper = /[A-Z]/.test(pwd || '')
  const lower = /[a-z]/.test(pwd || '')
  const numberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>]/.test(pwd || '')
  return { atLeast8, upper, lower, numberOrSymbol, all: atLeast8 && upper && lower && numberOrSymbol }
}

export function CreateAccount1() {
  const { data, updateData, nextStep } = useOnboarding()
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const req = passwordRequirements(data.password)

  const handleNext = (e) => {
    e.preventDefault()
    setError('')
    if (!data.legalFirstName?.trim()) {
      setError('Please enter your legal first name.')
      return
    }
    if (!data.legalLastName?.trim()) {
      setError('Please enter your legal last name.')
      return
    }
    if (!data.password) {
      setError('Please enter a password.')
      return
    }
    if (!req.all) {
      setError('Please meet all password requirements.')
      return
    }
    nextStep()
  }

  return (
    <div className="create-account-layout">
      <div className="create-account-form">
        <h1 className="step-title">Create an AIwallex account</h1>
        <form onSubmit={handleNext}>
          <div className="form-group">
            <label>Business email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => updateData({ email: e.target.value })}
              placeholder="info@company.com"
            />
          </div>
          <div className="form-group">
            <label>Legal first name</label>
            <input
              type="text"
              value={data.legalFirstName}
              onChange={(e) => updateData({ legalFirstName: e.target.value })}
              placeholder="First name"
            />
          </div>
          <div className="form-group">
            <label>Legal last name</label>
            <input
              type="text"
              value={data.legalLastName}
              onChange={(e) => updateData({ legalLastName: e.target.value })}
              placeholder="Last name"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-with-icon">
              <input
                type={showPassword ? 'text' : 'password'}
                value={data.password}
                onChange={(e) => updateData({ password: e.target.value })}
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
            {data.password && (
              <div className="password-requirements">
                <p className="req-title">Your password must have:</p>
                <p className={req.atLeast8 ? 'req-met' : 'req-unmet'}>At least 8 characters long</p>
                <p className={req.upper ? 'req-met' : 'req-unmet'}>One Uppercase character</p>
                <p className={req.lower ? 'req-met' : 'req-unmet'}>One Lowercase character</p>
                <p className={req.numberOrSymbol ? 'req-met' : 'req-unmet'}>One number or symbol</p>
                <p className="req-note">For improved security, avoid passwords used with other websites.</p>
              </div>
            )}
          </div>
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="btn-continue btn-full">Next</button>
        </form>
      </div>
      <TestimonialPanel />
    </div>
  )
}
