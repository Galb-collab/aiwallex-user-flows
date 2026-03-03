import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryACHConfirmation() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  return (
    <div className="mercury-flow-layout">
      <div className="mercury-step" style={{ maxWidth: 480 }}>
        <div className="mercury-card">
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 24 }}>
            <button type="button" className="mercury-modal-close" onClick={() => navigate(flowPath('/flow/mercury-bill-pay'))} aria-label="Close">✕</button>
          </div>
          <h1 className="mercury-step-title">You&apos;ve scheduled an ACH payment.</h1>
          <div style={{ background: '#f9fafb', borderRadius: 12, padding: 24, marginBottom: 24, border: '1px solid var(--mercury-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
              <p style={{ margin: 0 }}>ACH to Mobbin (Mobbin Pte Ltd),</p>
              <span style={{ background: '#e5e7eb', padding: '4px 8px', borderRadius: 4, fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                📅 Scheduled
              </span>
            </div>
            <p style={{ fontSize: 24, fontWeight: 700, margin: '0 0 8px' }}>$10.60</p>
            <p style={{ fontSize: 14, color: 'var(--mercury-muted)', margin: 0 }}>Pay once on Nov 12, 2025.</p>
          </div>
          <button type="button" className="mercury-btn-primary" onClick={() => navigate(flowPath('/flow/mercury-bill-pay'))}>
            Back to Bill Pay
          </button>
        </div>
        <div className="mercury-help-icon">?</div>
      </div>
    </div>
  )
}
