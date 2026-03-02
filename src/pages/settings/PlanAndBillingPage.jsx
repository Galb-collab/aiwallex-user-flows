import React from 'react'
import { Link } from 'react-router-dom'

export function PlanAndBillingPage() {
  return (
    <div className="settings-content">
      <div className="wallet-content">
        <Link to="/flow/settings" className="wallet-back-link">← Back to Settings</Link>
        <h1 className="wallet-section-title">Plan & billing</h1>
        <p className="global-accounts-desc">Manage your subscription plan and billing details.</p>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Current plan</h3>
          <div className="wallet-overview-row">
            <span>Plan</span>
            <span><strong>Grow</strong></span>
          </div>
          <div className="wallet-overview-row">
            <span>Billing cycle</span>
            <span>Monthly</span>
          </div>
          <div className="wallet-overview-row">
            <span>Next billing date</span>
            <span>15 Mar 2025</span>
          </div>
          <div className="wallet-overview-row">
            <span>Amount</span>
            <span>49.00 SGD/month</span>
          </div>
          <button type="button" className="wallet-btn wallet-btn-primary" style={{ marginTop: 16 }}>
            Upgrade plan
          </button>
        </div>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Payment method</h3>
          <div className="wallet-overview-row">
            <span>Card</span>
            <span>•••• •••• •••• 4242</span>
          </div>
          <button type="button" className="wallet-btn" style={{ marginTop: 16 }}>
            Update payment method
          </button>
        </div>
      </div>
    </div>
  )
}
