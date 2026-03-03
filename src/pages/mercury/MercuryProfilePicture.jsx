import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryProfilePicture() {
  const navigate = useNavigate()

  return (
    <div className="mercury-step">
      <div className="mercury-card" style={{ maxWidth: 480 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 className="mercury-step-title">Profile picture</h1>
          <button type="button" className="mercury-step-back" onClick={() => navigate(-1)}>×</button>
        </div>
        <p className="mercury-step-subtitle">Upload a photo to personalize your account.</p>
        <div style={{ width: 120, height: 120, borderRadius: '50%', background: '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <span style={{ fontSize: 48, color: '#9ca3af' }}>+</span>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button type="button" className="mercury-btn-secondary">Upload</button>
          <button type="button" className="mercury-btn-secondary" onClick={() => navigate(-1)}>Remove</button>
        </div>
      </div>
    </div>
  )
}
