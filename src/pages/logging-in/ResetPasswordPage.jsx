import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginFeaturesPanel } from './LoginFeaturesPanel'
import './LoggingInFlow.css'

export function ResetPasswordPage() {
  const navigate = useNavigate()
  const [email] = useState('samlee@content-mobbin.com')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleConfirm = (e) => {
    e.preventDefault()
    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      navigate('/flow/logging-in')
    }
  }

  return (
    <div className="logging-in-layout">
      <div className="logging-in-form-wrap">
        <h1 className="logging-in-title">Reset your password</h1>
        <form onSubmit={handleConfirm} className="logging-in-form">
          <div className="logging-in-field">
            <label>Email</label>
            <input type="email" value={email} readOnly className="logging-in-field-readonly" />
          </div>
          <div className="logging-in-field">
            <label>New password</label>
            <div className="input-with-icon">
              <input
                type={showNewPassword ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New password"
              />
              <button
                type="button"
                className="input-icon-btn"
                onClick={() => setShowNewPassword(!showNewPassword)}
                aria-label={showNewPassword ? 'Hide password' : 'Show password'}
              >
                {showNewPassword ? '🙈' : '👁'}
              </button>
            </div>
          </div>
          <div className="logging-in-field">
            <label>Confirm password</label>
            <div className="input-with-icon">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
              />
              <button
                type="button"
                className="input-icon-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? '🙈' : '👁'}
              </button>
            </div>
          </div>
          <button type="submit" className="logging-in-btn-primary">Confirm</button>
        </form>
      </div>
      <LoginFeaturesPanel />
    </div>
  )
}
