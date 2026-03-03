import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryChangePassword() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState('')
  const [newPass, setNewPass] = useState('')
  const [confirm, setConfirm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPass.length >= 10 && newPass === confirm) navigate(-1)
  }

  return (
    <div className="mercury-step">
      <div className="mercury-card" style={{ maxWidth: 480 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 className="mercury-step-title">Change password</h1>
          <button type="button" className="mercury-step-back" onClick={() => navigate(-1)}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="mercury-label">Current password</label>
          <input type="password" className="mercury-input" value={current} onChange={(e) => setCurrent(e.target.value)} required />
          <label className="mercury-label">New password</label>
          <input type="password" className="mercury-input" value={newPass} onChange={(e) => setNewPass(e.target.value)} minLength={10} required />
          <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: '0 0 16px' }}>At least 10 characters</p>
          <label className="mercury-label">Confirm new password</label>
          <input type="password" className="mercury-input" value={confirm} onChange={(e) => setConfirm(e.target.value)} required />
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            <button type="button" className="mercury-btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="mercury-btn-primary" style={{ flex: 1 }}>Update password</button>
          </div>
        </form>
      </div>
    </div>
  )
}
