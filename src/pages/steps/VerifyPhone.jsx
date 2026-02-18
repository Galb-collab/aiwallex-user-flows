import React, { useState, useEffect } from 'react'
import { useOnboarding } from '../../context/OnboardingContext'
import './VerifyPhone.css'

const RESEND_COOLDOWN = 60

export function VerifyPhone() {
  const { data, updateData, nextStep } = useOnboarding()
  const [code, setCode] = useState(data.verificationCode || '')
  const [countdown, setCountdown] = useState(0)
  const [error, setError] = useState('')

  const phoneLast4 = (data.countryCode + data.mobile).slice(-4)

  useEffect(() => {
    if (countdown <= 0) return
    const t = setInterval(() => setCountdown((c) => c - 1), 1000)
    return () => clearInterval(t)
  }, [countdown])

  const handleResend = () => {
    if (countdown > 0) return
    setCountdown(RESEND_COOLDOWN)
    updateData({ mockSentCode: String(Math.floor(100000 + Math.random() * 900000)) })
  }

  const handleConfirm = (e) => {
    e.preventDefault()
    setError('')
    if (code.length !== 6) {
      setError('Please enter the 6-digit code.')
      return
    }
    const validCode = code === data.mockSentCode || code === '123456'
    if (!validCode) {
      setError('Invalid code. Use 123456 for this mock.')
      return
    }
    updateData({ verificationCode: code })
    nextStep()
  }

  return (
    <div className="verify-phone-layout">
      <div className="verify-phone-form">
        <h1 className="step-title">Verify your phone number to create your account</h1>
        <p className="verify-phone-instruction">
          Please enter the 6-digit code sent to your phone ending in {phoneLast4}.
        </p>
        <form onSubmit={handleConfirm}>
          <div className="form-group">
            <label>Verification code</label>
            <div className="code-row">
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                placeholder="000000"
                className="code-input"
              />
              <button
                type="button"
                className={`resend-link ${countdown > 0 ? 'disabled' : ''}`}
                onClick={handleResend}
                disabled={countdown > 0}
              >
                Resend code {countdown > 0 ? `(${countdown}s)` : ''}
              </button>
            </div>
          </div>
          {error && <p className="form-error">{error}</p>}
          <p className="form-note">For this mock, use code: <strong>123456</strong></p>
          <button type="submit" className="btn-continue btn-full">Confirm</button>
        </form>
      </div>
      <div className="verify-phone-mockup">
        <div className="phone-frame">
          <div className="phone-screen">
            <div className="phone-time">9:41</div>
            <div className="phone-date">Monday, June 3</div>
            <div className="phone-notification">
              <span className="notif-app">Messages</span>
              <span className="notif-sender">AIwallex</span>
              <span className="notif-preview">Welcome to AIwallex. Your mobile confirmation code is {data.mockSentCode?.slice(0, 1) || '1'}...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
