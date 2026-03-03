import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryChangePassword() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [newPass, setNewPass] = useState('')
  const [confirm, setConfirm] = useState('')
  const [logOutOthers, setLogOutOthers] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPass.length >= 10 && newPass === confirm) navigate(flowPath('/flow/mercury-settings'))
  }

  return (
    <div className="mercury-flow-layout">
      <div className="mercury-step" style={{ maxWidth: 480 }}>
        <div className="mercury-header" style={{ marginBottom: 0 }}>
          <Link to={flowPath('/flow/mercury-landing')} className="mercury-logo">
            <img src="/mercury-logo.png" alt="Mercury" />
          </Link>
        </div>
        <div className="mercury-card">
          <h1 className="mercury-step-title">Change password</h1>
          <form onSubmit={handleSubmit}>
            <label className="mercury-label">New password</label>
            <div style={{ position: 'relative' }}>
              <input type="password" className="mercury-input" value={newPass} onChange={(e) => setNewPass(e.target.value)} minLength={10} required style={{ paddingRight: 40 }} />
              <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: 18 }} aria-hidden>👁</span>
            </div>
            <label className="mercury-label">Confirm new password</label>
            <div style={{ position: 'relative' }}>
              <input type="password" className="mercury-input" value={confirm} onChange={(e) => setConfirm(e.target.value)} required style={{ paddingRight: 40 }} />
              <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', fontSize: 18 }} aria-hidden>👁</span>
            </div>
            <label className="mercury-checkbox" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
              <input type="checkbox" checked={logOutOthers} onChange={(e) => setLogOutOthers(e.target.checked)} />
              <span>Log out of all other devices</span>
              <span className="mercury-help-icon" style={{ marginLeft: 4 }} title="When enabled, you will need to log in again on other devices">ⓘ</span>
            </label>
            <button type="submit" className="mercury-btn-primary" disabled={!newPass || newPass.length < 10 || newPass !== confirm}>
              Save Password
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
