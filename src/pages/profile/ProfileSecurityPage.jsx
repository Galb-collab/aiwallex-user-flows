import React from 'react'
import { Link } from 'react-router-dom'

export function ProfileSecurityPage() {
  return (
    <div className="profile-content">
      <div className="wallet-content creating-conversion">
        <Link to="/flow/profile" className="wallet-back-link">← Back to Profile</Link>
        <h1 className="wallet-section-title">Security</h1>
        <p className="creating-conversion-desc">Manage your account security settings.</p>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Two-factor authentication (2FA)</h3>
          <div className="wallet-overview-row">
            <span>Status</span>
            <span><strong>Enabled</strong> — Authenticator app</span>
          </div>
          <Link to="/flow/rewards/disabling-two-factor-authentication" className="wallet-btn" style={{ marginTop: 16, borderColor: '#dc2626', color: '#dc2626' }}>
            Disable 2FA
          </Link>
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
