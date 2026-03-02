import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MOCK_RULES = [
  { id: '1', name: 'Expenses above 500 SGD', threshold: '500 SGD', status: 'Active' },
  { id: '2', name: 'Card transactions above 1,000 SGD', threshold: '1,000 SGD', status: 'Active' },
]

export function UpdatingCardExpensesApprovalsPage() {
  const [rules] = useState(MOCK_RULES)

  return (
    <div className="settings-content">
      <div className="wallet-content">
        <Link to="/flow/settings" className="wallet-back-link">← Back to Settings</Link>
        <h1 className="wallet-section-title">Updating card expenses approvals</h1>
        <p className="global-accounts-desc">Configure when card expenses require approval before they can be submitted.</p>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Approval rules</h3>
          {rules.map((r) => (
            <div key={r.id} className="wallet-overview-row" style={{ flexDirection: 'column', alignItems: 'stretch', gap: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{r.name}</strong>
                  <p style={{ margin: '4px 0 0', fontSize: 14, color: 'var(--psp-text-muted)' }}>Threshold: {r.threshold}</p>
                </div>
                <span className={`global-accounts-status global-accounts-status-${r.status?.toLowerCase()}`}>
                  {r.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24 }}>
          <button type="button" className="wallet-btn wallet-btn-primary">
            + Add approval rule
          </button>
        </div>

        <p style={{ fontSize: 14, color: 'var(--psp-text-muted)', marginTop: 24 }}>
          When a card expense exceeds the threshold, it will require approval from the designated approver before it can be submitted.
        </p>
      </div>
    </div>
  )
}
