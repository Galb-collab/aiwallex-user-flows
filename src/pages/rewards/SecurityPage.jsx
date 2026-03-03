import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function SecurityPage() {
  const { flowPath } = useCompany()

  return (
    <div className="rewards-content">
      <div className="wallet-content">
        <Link to={flowPath('/flow/rewards')} className="wallet-back-link">← Back to Rewards</Link>
        <h1 className="wallet-section-title">Security</h1>
        <p className="global-accounts-desc">Manage your account security settings.</p>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Two-factor authentication (2FA)</h3>
          <div className="wallet-overview-row">
            <span>Status</span>
            <span><strong>Enabled</strong> — Authenticator app</span>
          </div>
          <div className="wallet-overview-row">
            <span>Description</span>
            <span>Add an extra layer of security when signing in. 2FA is currently enabled on your account.</span>
          </div>
          <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
            <Link to={flowPath('/flow/rewards/disabling-two-factor-authentication')} className="wallet-btn" style={{ borderColor: '#dc2626', color: '#dc2626' }}>
              Disable 2FA
            </Link>
          </div>
        </div>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Sign-in activity</h3>
          <div className="wallet-overview-row">
            <span>Last sign-in</span>
            <span>Today, 10:30 AM (Singapore)</span>
          </div>
          <div className="wallet-overview-row">
            <span>Device</span>
            <span>Chrome on Mac</span>
          </div>
        </div>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Password</h3>
          <p style={{ fontSize: 14, color: 'var(--psp-text-muted)', margin: 0 }}>
            Change your password regularly to keep your account secure.
          </p>
          <button type="button" className="wallet-btn wallet-btn-primary" style={{ marginTop: 16 }}>
            Change password
          </button>
        </div>
      </div>
    </div>
  )
}
