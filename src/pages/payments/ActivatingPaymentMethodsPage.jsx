import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const PAYMENT_METHODS = [
  { id: 'cards', name: 'Card payments', status: 'Active', desc: 'Accept Visa, Mastercard, and other major cards' },
  { id: 'local', name: 'Local payment methods', status: 'Pending', desc: 'Enable bank transfers, e-wallets, and regional methods' },
  { id: 'apple', name: 'Apple Pay', status: 'Inactive', desc: 'One-tap payments for Apple devices' },
  { id: 'google', name: 'Google Pay', status: 'Inactive', desc: 'One-tap payments for Android devices' },
]

export function ActivatingPaymentMethodsPage() {
  const [methods, setMethods] = useState(PAYMENT_METHODS)

  const toggleStatus = (id) => {
    setMethods((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              status: m.status === 'Active' ? 'Inactive' : m.status === 'Inactive' ? 'Active' : m.status,
            }
          : m
      )
    )
  }

  return (
    <div className="payments-content">
      <div className="wallet-content creating-conversion">
        <Link to="/flow/payments" className="wallet-back-link">← Back to Payments</Link>
        <h1 className="wallet-section-title">Activating payment methods</h1>
        <p className="creating-conversion-desc">Enable and configure the payment methods you want to accept from your customers.</p>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Available payment methods</h3>
          {methods.map((m) => (
            <div
              key={m.id}
              className="wallet-overview-row"
              style={{ flexDirection: 'column', alignItems: 'stretch', gap: 8 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{m.name}</strong>
                  <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--psp-text-muted)' }}>{m.desc}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span
                    className={`global-accounts-status global-accounts-status-${m.status?.toLowerCase()}`}
                    style={{ textTransform: 'capitalize' }}
                  >
                    {m.status}
                  </span>
                  {m.status !== 'Pending' && (
                    <button
                      type="button"
                      className="wallet-btn"
                      style={{ fontSize: 13, padding: '6px 12px' }}
                      onClick={() => toggleStatus(m.id)}
                    >
                      {m.status === 'Active' ? 'Deactivate' : 'Activate'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <p style={{ fontSize: 14, color: 'var(--psp-text-muted)' }}>
            Pending methods require additional verification. Contact support to activate.
          </p>
        </div>
      </div>
    </div>
  )
}
