import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function DisablingTwoFactorAuthenticationPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [password, setPassword] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const handleClose = () => navigate('/flow/rewards/security')

  if (step === 1) {
    return (
      <div className="rewards-content">
        <div className="wallet-content creating-conversion">
          <Link to="/flow/rewards/security" className="wallet-back-link">← Back to Security</Link>
          <h1 className="wallet-section-title">Disabling two-factor authentication</h1>
          <p className="creating-conversion-desc">
            Disabling 2FA will make your account less secure. You will only need your password to sign in. Enter your password to continue.
          </p>

          <div className="scheduling-transfer-field" style={{ marginTop: 24, maxWidth: 400 }}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
            <button type="button" className="wallet-btn" onClick={handleClose}>Cancel</button>
            <button
              type="button"
              className="wallet-btn"
              style={{ background: '#dc2626', borderColor: '#dc2626' }}
              onClick={() => setStep(2)}
              disabled={!password.trim()}
            >
              Disable 2FA
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="rewards-content">
        <div className="wallet-content creating-conversion">
          <Link to="/flow/rewards/security" className="wallet-back-link">← Back to Security</Link>
          <h1 className="wallet-section-title">Confirm disable 2FA</h1>
          <p className="creating-conversion-desc">
            Disabling two-factor authentication will reduce your account security. Are you sure you want to continue?
          </p>

          <label className="scheduling-transfer-field" style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 24 }}>
            <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} />
            <span>I understand the security implications and want to disable 2FA</span>
          </label>

          <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
            <button type="button" className="wallet-btn" onClick={() => setStep(1)}>Back</button>
            <button
              type="button"
              className="wallet-btn"
              style={{ background: '#dc2626', borderColor: '#dc2626' }}
              onClick={() => setStep(3)}
              disabled={!confirmed}
            >
              Disable 2FA
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rewards-content">
      <div className="wallet-content creating-conversion">
        <div className="creating-conversion-success">
          <span className="creating-conversion-success-icon">✓</span>
          <h2 className="wallet-section-title">Two-factor authentication disabled</h2>
          <p className="creating-conversion-success-text">
            Your account now uses password-only sign in. You can re-enable 2FA later in Security settings.
          </p>
          <Link to="/flow/rewards/security" className="wallet-btn wallet-btn-primary">Back to Security</Link>
        </div>
      </div>
    </div>
  )
}
