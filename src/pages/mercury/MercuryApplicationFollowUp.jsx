import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryApplicationFollowUp() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  const handleReview = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/mercury-all-set'))
  }

  return (
    <div className="mercury-step" style={{ maxWidth: 900, flexDirection: 'row', gap: 48 }}>
      <aside style={{ width: 200, flexShrink: 0 }}>
        <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>6/6</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Company info</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Company address</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Ownership details</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Company documents</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Expected activity</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-primary)', fontWeight: 600 }}>Follow-up questions</div>
      </aside>
      <main style={{ flex: 1 }}>
        <h1 className="mercury-step-title">Follow-up questions</h1>
        <p className="mercury-step-subtitle">A few more questions to complete your application.</p>
        <form onSubmit={handleReview}>
          <label className="mercury-label">Do you have US operations?</label>
          <select className="mercury-input">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <label className="mercury-label">Where are your main suppliers located?</label>
          <input type="text" className="mercury-input" placeholder="Country or region" />
          <label className="mercury-label">Where will your first deposits come from?</label>
          <select className="mercury-input">
            <option value="investors">Investors</option>
            <option value="revenue">Revenue</option>
            <option value="self">Self</option>
          </select>
          <div className="mercury-btn-group">
            <button type="button" className="mercury-btn-secondary" onClick={() => navigate(-1)}>Back</button>
            <button type="submit" className="mercury-btn-primary" style={{ flex: 1 }}>Review Your Application</button>
          </div>
        </form>
      </main>
    </div>
  )
}
