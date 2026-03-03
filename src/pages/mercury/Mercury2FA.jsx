import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function Mercury2FA() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  return (
    <div className="mercury-step">
      <div className="mercury-card">
        <h1 className="mercury-step-title">Two-factor authentication</h1>
        <p className="mercury-step-subtitle">Save these backup codes in a secure place. You can use them to access your account if you lose your phone.</p>
        <div style={{ background: '#f9fafb', borderRadius: 8, padding: 24, fontFamily: 'monospace', marginBottom: 24 }}>
          <p style={{ margin: '0 0 8px' }}>XXXX XXXX XXXX</p>
          <p style={{ margin: '0 0 8px' }}>XXXX XXXX XXXX</p>
          <p style={{ margin: 0 }}>XXXX XXXX XXXX</p>
        </div>
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <button type="button" className="mercury-btn-secondary" style={{ flex: 1 }}>Copy</button>
          <button type="button" className="mercury-btn-secondary" style={{ flex: 1 }}>Print</button>
          <button type="button" className="mercury-btn-secondary" style={{ flex: 1 }}>Download</button>
        </div>
        <button type="button" className="mercury-btn-primary" onClick={() => navigate(flowPath('/flow/mercury-dashboard'))}>Next</button>
      </div>
    </div>
  )
}
