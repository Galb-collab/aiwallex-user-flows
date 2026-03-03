import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryApplicationDocuments() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  const handleNext = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/mercury-application/expected-activity'))
  }

  return (
    <div className="mercury-step" style={{ maxWidth: 900, flexDirection: 'row', gap: 48 }}>
      <aside style={{ width: 200, flexShrink: 0 }}>
        <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>4/6</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Company info</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Company address</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Ownership details</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-primary)', fontWeight: 600 }}>Company documents</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>Expected activity</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>Follow-up questions</div>
      </aside>
      <main style={{ flex: 1 }}>
        <h1 className="mercury-step-title">Company documents</h1>
        <p className="mercury-step-subtitle">Upload your formation documents, EIN letter, and any other required documents.</p>
        <form onSubmit={handleNext}>
          <div style={{ border: '2px dashed var(--mercury-border)', borderRadius: 12, padding: 48, textAlign: 'center', marginBottom: 24 }}>
            <p style={{ color: 'var(--mercury-muted)' }}>Drag and drop or click to upload</p>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', marginTop: 8 }}>PDF, PNG, or JPEG. Max 10MB</p>
          </div>
          <div className="mercury-btn-group">
            <button type="button" className="mercury-btn-secondary" onClick={() => navigate(-1)}>Back</button>
            <button type="submit" className="mercury-btn-primary" style={{ flex: 1 }}>Next</button>
          </div>
        </form>
      </main>
    </div>
  )
}
