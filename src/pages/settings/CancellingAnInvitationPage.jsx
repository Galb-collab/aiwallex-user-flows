import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MOCK_INVITATIONS = [
  { id: '1', email: 'jane@company.com', role: 'Member', sent: '2025-02-15' },
  { id: '2', email: 'john@company.com', role: 'Viewer', sent: '2025-02-14' },
]

export function CancellingAnInvitationPage() {
  const [selectedId, setSelectedId] = useState(null)
  const [cancelled, setCancelled] = useState(false)

  const selected = MOCK_INVITATIONS.find((i) => i.id === selectedId)

  if (cancelled) {
    return (
      <div className="settings-content">
        <div className="wallet-content creating-conversion">
          <div className="creating-conversion-success">
            <span className="creating-conversion-success-icon">✓</span>
            <h2 className="wallet-section-title">Invitation cancelled</h2>
            <p className="creating-conversion-success-text">
              The invitation to {selected?.email} has been cancelled. They will no longer receive the invitation email.
            </p>
            <Link to="/flow/settings/creating-a-user" className="wallet-btn wallet-btn-primary">Back to Creating a user</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="settings-content">
      <div className="wallet-content creating-conversion">
        <Link to="/flow/settings/creating-a-user" className="wallet-back-link">← Back to Creating a user</Link>
        <h1 className="wallet-section-title">Cancelling an invitation</h1>
        <p className="creating-conversion-desc">Select a pending invitation to cancel. The user will not receive the invitation email.</p>

        <div className="scheduling-transfer-options conversions-options" style={{ marginTop: 24 }}>
          {MOCK_INVITATIONS.map((inv) => (
            <button
              key={inv.id}
              type="button"
              className={`scheduling-transfer-card conversions-card ${selectedId === inv.id ? 'selected' : ''}`}
              onClick={() => setSelectedId(inv.id)}
            >
              <span className="scheduling-transfer-card-icon">✉</span>
              <span className="scheduling-transfer-card-title">{inv.email}</span>
              <span className="scheduling-transfer-card-subtitle">{inv.role} · Sent {inv.sent}</span>
            </button>
          ))}
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <Link to="/flow/settings/creating-a-user" className="wallet-btn">Cancel</Link>
          <button
            type="button"
            className="wallet-btn"
            style={{ background: '#dc2626', borderColor: '#dc2626' }}
            onClick={() => setCancelled(true)}
            disabled={!selectedId}
          >
            Cancel invitation
          </button>
        </div>
      </div>
    </div>
  )
}
