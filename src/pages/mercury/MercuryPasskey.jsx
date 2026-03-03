import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryPasskey() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  return (
    <div className="mercury-flow-layout">
      <div className="mercury-step">
        <div className="mercury-card">
          <h1 className="mercury-step-title">Log in faster with passkeys</h1>
          <p className="mercury-step-subtitle">Use Face ID, fingerprint, or a security key to sign in instantly.</p>
          <button type="button" className="mercury-btn-primary" onClick={() => navigate(flowPath('/flow/mercury-dashboard'))}>Add Passkey</button>
          <button type="button" className="mercury-btn-secondary mercury-btn-inline" style={{ marginTop: 12 }} onClick={() => navigate(flowPath('/flow/mercury-dashboard'))}>Not Now</button>
        </div>
      </div>
    </div>
  )
}
