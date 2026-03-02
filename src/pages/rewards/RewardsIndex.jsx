import React from 'react'
import { Link } from 'react-router-dom'

export function RewardsIndex() {
  return (
    <div className="rewards-content">
      <div className="wallet-content">
        <div className="global-accounts-header">
          <div>
            <h1 className="wallet-section-title" style={{ margin: 0 }}>Rewards</h1>
            <p className="global-accounts-desc">Earn cashback and rewards on your card spend.</p>
          </div>
        </div>

        <div className="scheduling-transfer-options conversions-options" style={{ marginTop: 24 }}>
          <Link to="/flow/rewards/redeem-rewards" className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">💰</span>
            <span className="scheduling-transfer-card-title">Redeem rewards</span>
            <span className="scheduling-transfer-card-subtitle">Transfer your cashback balance to your wallet.</span>
          </Link>
          <Link to="/flow/rewards/rewards-activity" className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">📋</span>
            <span className="scheduling-transfer-card-title">Rewards activity</span>
            <span className="scheduling-transfer-card-subtitle">View your cashback earnings and redemptions.</span>
          </Link>
          <Link to="/flow/rewards/security" className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">🔒</span>
            <span className="scheduling-transfer-card-title">Security</span>
            <span className="scheduling-transfer-card-subtitle">Manage 2FA, password, and sign-in activity.</span>
          </Link>
          <Link to="/flow/rewards/disabling-two-factor-authentication" className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">📴</span>
            <span className="scheduling-transfer-card-title">Disabling two-factor authentication</span>
            <span className="scheduling-transfer-card-subtitle">Turn off 2FA for your account (reduces security).</span>
          </Link>
        </div>

        <div className="rewards-overview" style={{ marginTop: 24 }}>
          <div className="wallet-overview-card">
            <h3 className="wallet-card-title">Your rewards balance</h3>
            <div className="wallet-overview-row">
              <span>Available cashback</span>
              <span><strong>125.50 SGD</strong></span>
            </div>
            <div className="wallet-overview-row">
              <span>Pending rewards</span>
              <span>42.00 SGD</span>
            </div>
            <div className="wallet-overview-row">
              <span>Total earned (this month)</span>
              <span>167.50 SGD</span>
            </div>
            <Link to="/flow/rewards/redeem-rewards" className="wallet-btn wallet-btn-primary" style={{ marginTop: 16 }}>
              Redeem to wallet
            </Link>
          </div>

          <div className="wallet-overview-card" style={{ marginTop: 24 }}>
            <h3 className="wallet-card-title">Active offers</h3>
            <p style={{ fontSize: 14, color: 'var(--psp-text-muted)', margin: 0 }}>
              Earn 10% cashback on software subscriptions. Limited offer — claim before it ends.
            </p>
            <button type="button" className="wallet-btn wallet-btn-primary" style={{ marginTop: 16 }}>
              Claim offer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
