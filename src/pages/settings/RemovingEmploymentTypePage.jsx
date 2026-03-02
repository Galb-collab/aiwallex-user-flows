import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MOCK_TYPES = [
  { id: '1', name: 'Full-time', count: 12 },
  { id: '2', name: 'Part-time', count: 3 },
  { id: '3', name: 'Contractor', count: 5 },
]

export function RemovingEmploymentTypePage() {
  const [selectedId, setSelectedId] = useState(null)
  const [confirmed, setConfirmed] = useState(false)
  const [removed, setRemoved] = useState(false)

  const selected = MOCK_TYPES.find((t) => t.id === selectedId)

  if (removed) {
    return (
      <div className="settings-content">
        <div className="wallet-content creating-conversion">
          <div className="creating-conversion-success">
            <span className="creating-conversion-success-icon">✓</span>
            <h2 className="wallet-section-title">Employment type removed</h2>
            <p className="creating-conversion-success-text">
              The employment type &quot;{selected?.name}&quot; has been removed. Users with this type will need to be reassigned.
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
        <h1 className="wallet-section-title">Removing employment type</h1>
        <p className="creating-conversion-desc">Select an employment type to remove. Users with this type will need to be reassigned to another type.</p>

        <div className="scheduling-transfer-options conversions-options" style={{ marginTop: 24 }}>
          {MOCK_TYPES.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`scheduling-transfer-card conversions-card ${selectedId === t.id ? 'selected' : ''}`}
              onClick={() => setSelectedId(t.id)}
            >
              <span className="scheduling-transfer-card-icon">👤</span>
              <span className="scheduling-transfer-card-title">{t.name}</span>
              <span className="scheduling-transfer-card-subtitle">{t.count} users</span>
            </button>
          ))}
        </div>

        {selected && (
          <div className="wallet-overview-card" style={{ marginTop: 24, maxWidth: 480 }}>
            <h3 className="wallet-card-title">Confirm removal</h3>
            <p className="creating-conversion-desc">
              Removing &quot;{selected.name}&quot; will affect {selected.count} user(s). They will need to be reassigned.
            </p>
            <label style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16, cursor: 'pointer' }}>
              <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} />
              <span>I understand and want to remove this employment type</span>
            </label>
          </div>
        )}

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <Link to="/flow/settings/creating-a-user" className="wallet-btn">Cancel</Link>
          <button
            type="button"
            className="wallet-btn"
            style={{ background: '#dc2626', borderColor: '#dc2626' }}
            onClick={() => setRemoved(true)}
            disabled={!selectedId || !confirmed}
          >
            Remove employment type
          </button>
        </div>
      </div>
    </div>
  )
}
