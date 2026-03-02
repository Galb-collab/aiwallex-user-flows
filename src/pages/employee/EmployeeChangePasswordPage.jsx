import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './EmployeeChangePassword.css'

export function EmployeeChangePasswordPage() {
  const navigate = useNavigate()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState('')

  const handleSave = (e) => {
    e.preventDefault()
    setError('')
    if (!currentPassword) {
      setError('Required')
      return
    }
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    navigate('/flow/employee/profile/security')
  }

  return (
    <div className="employee-change-password">
      <header className="employee-change-password-header">
        <Link to="/" className="employee-change-password-flows">← Flows</Link>
        <div className="employee-change-password-brand">
          <span className="logo-icon">A</span>
          Airwallex Change password
        </div>
        <Link to="/flow/employee/profile/security" className="employee-change-password-close" aria-label="Close">×</Link>
      </header>

      <main className="employee-change-password-main">
        <form onSubmit={handleSave} className="employee-change-password-form">
          <div className="employee-change-password-field">
            <label>Current password</label>
            <div className="input-with-icon">
              <input
                type={showCurrent ? 'text' : 'password'}
                value={currentPassword}
                onChange={(e) => { setCurrentPassword(e.target.value); setError('') }}
                placeholder="Please enter your current password"
                className={error ? 'error' : ''}
              />
              <button type="button" className="input-icon-btn" onClick={() => setShowCurrent(!showCurrent)}>
                {showCurrent ? '🙈' : '👁'}
              </button>
            </div>
            {error && <span className="field-error">{error}</span>}
          </div>
          <div className="employee-change-password-field">
            <label>New password</label>
            <div className="input-with-icon">
              <input
                type={showNew ? 'text' : 'password'}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Please specify a new password"
              />
              <button type="button" className="input-icon-btn" onClick={() => setShowNew(!showNew)}>
                {showNew ? '🙈' : '👁'}
              </button>
            </div>
          </div>
          <div className="employee-change-password-field">
            <label>Confirm new password</label>
            <div className="input-with-icon">
              <input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Please enter your new password again"
              />
              <button type="button" className="input-icon-btn" onClick={() => setShowConfirm(!showConfirm)}>
                {showConfirm ? '🙈' : '👁'}
              </button>
            </div>
          </div>
          <div className="employee-change-password-actions">
            <Link to="/flow/employee/profile/security" className="btn-cancel">Cancel</Link>
            <button type="submit" className="btn-primary">Save</button>
          </div>
        </form>
      </main>

      <footer className="employee-change-password-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> airwallex</span>
        <span>curated by Mobbin</span>
      </footer>
    </div>
  )
}
