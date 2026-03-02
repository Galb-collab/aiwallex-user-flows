import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function PaymentsIndex() {
  const { flowPath } = useCompany()
  return (
    <div className="payments-content">
      <div className="wallet-content">
        <div className="global-accounts-header">
          <div>
            <h1 className="wallet-section-title" style={{ margin: 0 }}>Payments</h1>
            <p className="global-accounts-desc">Accept payments, manage payment methods, payment links, and settings.</p>
          </div>
        </div>

        <div className="scheduling-transfer-options conversions-options">
          <Link to={flowPath('/flow/payments/activating-payment-methods')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">✓</span>
            <span className="scheduling-transfer-card-title">Activating payment methods</span>
            <span className="scheduling-transfer-card-subtitle">Enable and configure card payments, local payment methods, and more.</span>
          </Link>
          <Link to={flowPath('/flow/payments/payment-links')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">🔗</span>
            <span className="scheduling-transfer-card-title">Payment links</span>
            <span className="scheduling-transfer-card-subtitle">Create and manage shareable payment links for your customers.</span>
          </Link>
          <Link to={flowPath('/flow/payments/updating-company-profile')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">🏢</span>
            <span className="scheduling-transfer-card-title">Updating a company profile</span>
            <span className="scheduling-transfer-card-subtitle">Edit your business details, branding, and payment preferences.</span>
          </Link>
          <Link to={flowPath('/flow/payments/updating-email-notification')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">✉</span>
            <span className="scheduling-transfer-card-title">Updating an email notification</span>
            <span className="scheduling-transfer-card-subtitle">Configure email notifications for payments and receipts.</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
