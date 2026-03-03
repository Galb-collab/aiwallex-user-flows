import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryNotifications() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [email, setEmail] = useState(true)
  const [push, setPush] = useState(true)
  const [sms, setSms] = useState(false)

  return (
    <div className="mercury-flow-layout">
      <div className="mercury-step" style={{ maxWidth: 560 }}>
        <div className="mercury-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 className="mercury-step-title">Notifications</h1>
          <button type="button" className="mercury-step-back" onClick={() => navigate(-1)}>×</button>
        </div>
        <p className="mercury-step-subtitle">Choose how you want to be notified about account activity.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <label className="mercury-checkbox">
            <input type="checkbox" checked={email} onChange={(e) => setEmail(e.target.checked)} />
            <span>Email notifications</span>
          </label>
          <label className="mercury-checkbox">
            <input type="checkbox" checked={push} onChange={(e) => setPush(e.target.checked)} />
            <span>Push notifications</span>
          </label>
          <label className="mercury-checkbox">
            <input type="checkbox" checked={sms} onChange={(e) => setSms(e.target.checked)} />
            <span>SMS notifications</span>
          </label>
        </div>
        <button type="button" className="mercury-btn-primary" onClick={() => navigate(-1)}>Save</button>
        </div>
      </div>
    </div>
  )
}
