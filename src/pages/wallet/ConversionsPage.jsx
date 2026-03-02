import React from 'react'
import { Link } from 'react-router-dom'

export function ConversionsPage() {
  return (
    <div className="wallet-content">
      <div className="global-accounts-header">
        <div>
          <h1 className="wallet-section-title" style={{ margin: 0 }}>Conversions</h1>
          <p className="global-accounts-desc">Convert currencies, set limit orders, or get notified when rates hit your target.</p>
        </div>
      </div>

      <div className="scheduling-transfer-options conversions-options">
        <Link to="/flow/wallet/new-conversion" className="scheduling-transfer-card conversions-card">
          <span className="scheduling-transfer-card-icon">💱</span>
          <span className="scheduling-transfer-card-title">Convert</span>
          <span className="scheduling-transfer-card-subtitle">Convert currency now at the current rate. Option to give feedback after.</span>
        </Link>
        <Link to="/flow/wallet/conversions/limit-order" className="scheduling-transfer-card conversions-card">
          <span className="scheduling-transfer-card-icon">📋</span>
          <span className="scheduling-transfer-card-title">Create limit order</span>
          <span className="scheduling-transfer-card-subtitle">Set a target rate and convert automatically when the rate is reached.</span>
        </Link>
        <Link to="/flow/wallet/conversions/rate-alert" className="scheduling-transfer-card conversions-card">
          <span className="scheduling-transfer-card-icon">🔔</span>
          <span className="scheduling-transfer-card-title">Create rate alert</span>
          <span className="scheduling-transfer-card-subtitle">Get notified when an exchange rate reaches your target.</span>
        </Link>
      </div>
    </div>
  )
}
