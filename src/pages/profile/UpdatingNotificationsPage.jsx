import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

const NOTIFICATION_OPTIONS = [
  { id: 'payment-received', label: 'Payment received', enabled: true },
  { id: 'payment-failed', label: 'Payment failed', enabled: true },
  { id: 'transfer-complete', label: 'Transfer complete', enabled: true },
  { id: 'card-activity', label: 'Card activity alerts', enabled: false },
  { id: 'weekly-summary', label: 'Weekly summary', enabled: false },
]

export function UpdatingNotificationsPage() {
  const { flowPath } = useCompany()
  const [options, setOptions] = useState(NOTIFICATION_OPTIONS)
  const [saved, setSaved] = useState(false)

  const toggle = (id) => {
    setOptions((prev) => prev.map((o) => (o.id === id ? { ...o, enabled: !o.enabled } : o)))
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="profile-content">
      <div className="wallet-content creating-conversion">
        <Link to={flowPath('/flow/profile')} className="wallet-back-link">← Back to Profile</Link>
        <h1 className="wallet-section-title">Updating notifications</h1>
        <p className="creating-conversion-desc">Choose which notifications you want to receive.</p>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Email notifications</h3>
          {options.map((opt) => (
            <div
              key={opt.id}
              className="wallet-overview-row"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>{opt.label}</span>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <span style={{ fontSize: 14, color: 'var(--psp-text-muted)' }}>{opt.enabled ? 'On' : 'Off'}</span>
                <input type="checkbox" checked={opt.enabled} onChange={() => toggle(opt.id)} />
              </label>
            </div>
          ))}
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <Link to={flowPath('/flow/profile')} className="wallet-btn">Cancel</Link>
          <button type="button" className="wallet-btn wallet-btn-primary" onClick={handleSave}>
            Save preferences
          </button>
        </div>

        {saved && (
          <div className="cards-toast-success" style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 1001 }}>
            ✔ Notification preferences updated
          </div>
        )}
      </div>
    </div>
  )
}
