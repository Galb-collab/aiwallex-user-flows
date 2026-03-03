import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

const MOCK_WORKFLOWS = [
  { id: '1', name: 'High-value transfers', threshold: '10,000 SGD', status: 'Active' },
  { id: '2', name: 'International transfers', threshold: '5,000 SGD', status: 'Active' },
]

export function DeactivatingWorkflowPage() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [step, setStep] = useState(1)
  const [selectedId, setSelectedId] = useState(null)
  const [confirmed, setConfirmed] = useState(false)

  const selected = MOCK_WORKFLOWS.find((w) => w.id === selectedId)
  const handleClose = () => navigate(flowPath('/flow/transfers'))

  if (step === 1) {
    return (
      <div className="wallet-content creating-conversion">
        <Link to={flowPath('/flow/transfers')} className="wallet-back-link">← Back</Link>
        <h1 className="wallet-section-title">Deactivating a workflow</h1>
        <p className="creating-conversion-desc">Select the workflow you want to deactivate.</p>

        <div className="scheduling-transfer-options conversions-options" style={{ marginTop: 24 }}>
          {MOCK_WORKFLOWS.map((w) => (
            <button
              key={w.id}
              type="button"
              className={`scheduling-transfer-card conversions-card ${selectedId === w.id ? 'selected' : ''}`}
              onClick={() => setSelectedId(w.id)}
            >
              <span className="scheduling-transfer-card-icon">📋</span>
              <span className="scheduling-transfer-card-title">{w.name}</span>
              <span className="scheduling-transfer-card-subtitle">{w.threshold} • {w.status}</span>
            </button>
          ))}
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <button type="button" className="wallet-btn" onClick={handleClose}>Cancel</button>
          <button
            type="button"
            className="wallet-btn wallet-btn-primary"
            onClick={() => setStep(2)}
            disabled={!selectedId}
          >
            Continue
          </button>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="wallet-content creating-conversion">
        <Link to={flowPath('/flow/transfers')} className="wallet-back-link">← Back</Link>
        <h1 className="wallet-section-title">Confirm deactivation</h1>
        <p className="creating-conversion-desc">
          Are you sure you want to deactivate &quot;{selected?.name}&quot;? Transfers above {selected?.threshold} will no longer require approval.
        </p>

        <div className="creating-conversion-form" style={{ marginTop: 24 }}>
          <label className="scheduling-transfer-field" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} />
            <span>I understand that this workflow will be deactivated</span>
          </label>
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <button type="button" className="wallet-btn" onClick={() => setStep(1)}>Back</button>
          <button
            type="button"
            className="wallet-btn wallet-btn-primary"
            onClick={() => setStep(3)}
            disabled={!confirmed}
            style={{ background: '#dc2626' }}
          >
            Deactivate workflow
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="wallet-content creating-conversion">
      <div className="creating-conversion-success">
        <span className="creating-conversion-success-icon">✓</span>
        <h2 className="wallet-section-title">Workflow deactivated</h2>
        <p className="creating-conversion-success-text">
          &quot;{selected?.name}&quot; has been deactivated. Transfers above {selected?.threshold} will no longer require approval.
        </p>
        <Link to={flowPath('/flow/transfers')} className="wallet-btn wallet-btn-primary">Back to Transfers</Link>
      </div>
    </div>
  )
}
