import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function ProfilePage() {
  const { flowPath } = useCompany()
  return (
    <div className="profile-content">
      <div className="wallet-content">
        <h1 className="wallet-section-title">Profile</h1>
        <p className="global-accounts-desc">Manage your account and preferences.</p>

        <div className="scheduling-transfer-options conversions-options" style={{ marginTop: 24 }}>
          <Link to={flowPath('/flow/profile/security')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">🔒</span>
            <span className="scheduling-transfer-card-title">Security</span>
            <span className="scheduling-transfer-card-subtitle">2FA, password, and sign-in activity.</span>
          </Link>
          <Link to={flowPath('/flow/profile/adding-an-assistant')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">👤</span>
            <span className="scheduling-transfer-card-title">Adding an assistant</span>
            <span className="scheduling-transfer-card-subtitle">Invite team members to help manage your account.</span>
          </Link>
          <Link to={flowPath('/flow/profile/updating-notifications')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">✉</span>
            <span className="scheduling-transfer-card-title">Updating notifications</span>
            <span className="scheduling-transfer-card-subtitle">Configure email and in-app notifications.</span>
          </Link>
        </div>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Account details</h3>
          <div className="wallet-overview-row">
            <span>Email</span>
            <span>samlee@content-mobbin.com</span>
          </div>
          <div className="wallet-overview-row">
            <span>Name</span>
            <span>Sam Lee</span>
          </div>
          <div className="wallet-overview-row">
            <span>Business</span>
            <span>MOBBIN PTE. LTD.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
