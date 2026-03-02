import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './EmployeeVerifyPhone.css'

export function EmployeeVerifyPhonePage() {
  const { flowPath, info } = useCompany()
  const navigate = useNavigate()
  const [code, setCode] = useState('')
  const [resendTimer, setResendTimer] = useState(56)
  const [error, setError] = useState('')

  const handleConfirm = (e) => {
    e.preventDefault()
    setError('')
    if (code.length !== 6) {
      setError('Please enter the 6 digit code for verification.')
      return
    }
    navigate(flowPath('/flow/employee/expenses'))
  }

  return (
    <div className="employee-verify-phone">
      <header className="employee-verify-header">
        <Link to="/" className="employee-verify-flows">← Flows</Link>
        <Link to="/" className="employee-verify-logo">
          <span className="logo-icon">A</span>
          Airwallex
        </Link>
      </header>
      <main className="employee-verify-main">
        <div className="employee-verify-layout">
          <div className="employee-verify-form">
            <Link to={flowPath('/flow/employee/onboarding')} className="employee-verify-back">← Back</Link>
            <h1 className="employee-verify-title">We&apos;ve sent you an SMS</h1>
            <p className="employee-verify-desc">
              Please enter the 6-digit code sent to your phone ending in ***4567
            </p>
            <form onSubmit={handleConfirm}>
              <div className="employee-verify-field">
                <label>Verification code</label>
                <div className="employee-verify-code-row">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={code}
                    onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    placeholder="000000"
                    className={error ? 'error' : ''}
                  />
                  <button type="button" className="employee-verify-resend" disabled={resendTimer > 0}>
                    Resend code ({resendTimer}s)
                  </button>
                </div>
                {error && <p className="employee-verify-error">{error}</p>}
              </div>
              <button type="submit" className="employee-verify-btn" disabled={code.length !== 6}>
                Confirm
              </button>
            </form>
          </div>
          <div className="employee-verify-illustration">
            <div className="employee-verify-phone-mock">
              <div className="employee-verify-phone-screen">
                <span className="employee-verify-phone-time">9:41</span>
                <span className="employee-verify-phone-date">Monday, June 3</span>
                <div className="employee-verify-phone-notification">
                  <strong>Airwallex</strong>
                  <p>Welcome to Airwallex. Your mobile confirmation code is 9...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="employee-verify-footer">
        <a href="#legal">Legal & Privacy</a>
        <a href="#help">Help Centre</a>
        <span>© Airwallex 2025. All rights reserved.</span>
      </footer>
    </div>
  )
}
