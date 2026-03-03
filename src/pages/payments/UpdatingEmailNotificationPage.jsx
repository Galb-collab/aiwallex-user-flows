import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

const NOTIFICATION_OPTIONS = [
  { id: 'payment-received', label: 'Payment received', desc: 'When a customer completes a payment', enabled: true },
  { id: 'payment-failed', label: 'Payment failed', desc: 'When a payment attempt fails', enabled: true },
  { id: 'refund-processed', label: 'Refund processed', desc: 'When a refund is completed', enabled: true },
  { id: 'dispute-opened', label: 'Dispute opened', desc: 'When a customer opens a dispute', enabled: true },
  { id: 'weekly-summary', label: 'Weekly summary', desc: 'Weekly digest of payment activity', enabled: false },
]

export function UpdatingEmailNotificationPage() {
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
    <div className="payments-content">
      <div className="wallet-content creating-conversion">
        <Link to={flowPath('/flow/payments')} className="wallet-back-link">← Back to Payments</Link>
        <h1 className="wallet-section-title">Updating an email notification</h1>
        <p className="creating-conversion-desc">Choose which email notifications you want to receive for your payments.</p>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Email notifications</h3>
          {options.map((opt) => (
            <div
              key={opt.id}
              className="wallet-overview-row"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <div>
                <strong>{opt.label}</strong>
                <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--psp-text-muted)' }}>{opt.desc}</p>
              </div>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                <span style={{ fontSize: 14, color: 'var(--psp-text-muted)' }}>
                  {opt.enabled ? 'On' : 'Off'}
                </span>
                <input
                  type="checkbox"
                  checked={opt.enabled}
                  onChange={() => toggle(opt.id)}
                />
              </label>
            </div>
          ))}
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <Link to={flowPath('/flow/payments')} className="wallet-btn">Cancel</Link>
          <button type="button" className="wallet-btn wallet-btn-primary" onClick={handleSave}>
            Save preferences
          </button>
        </div>

        {saved && (
          <div className="cards-toast-success" style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)' }}>
            ✔ Notification preferences updated
          </div>
        )}
      </div>
    </div>
  )
}
