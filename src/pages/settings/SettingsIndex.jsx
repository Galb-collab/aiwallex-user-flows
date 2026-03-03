import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function SettingsIndex() {
  const { flowPath } = useCompany()

  return (
    <div className="settings-content">
      <div className="wallet-content">
        <div className="global-accounts-header">
          <div>
            <h1 className="wallet-section-title" style={{ margin: 0 }}>Settings</h1>
            <p className="global-accounts-desc">Manage your account, integrations, users, and billing.</p>
          </div>
        </div>

        <div className="scheduling-transfer-options conversions-options">
          <Link to={flowPath('/flow/settings/connections')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">🔗</span>
            <span className="scheduling-transfer-card-title">Connections</span>
            <span className="scheduling-transfer-card-subtitle">Connect accounting software, banks, and other integrations.</span>
          </Link>
          <Link to={flowPath('/flow/settings/creating-a-user')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">👤</span>
            <span className="scheduling-transfer-card-title">Creating a user</span>
            <span className="scheduling-transfer-card-subtitle">Invite team members and manage user access.</span>
          </Link>
          <Link to={flowPath('/flow/settings/developer')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">⚙</span>
            <span className="scheduling-transfer-card-title">Developer</span>
            <span className="scheduling-transfer-card-subtitle">API keys, webhooks, and developer resources.</span>
          </Link>
          <Link to={flowPath('/flow/settings/plan-billing')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">💳</span>
            <span className="scheduling-transfer-card-title">Plan & billing</span>
            <span className="scheduling-transfer-card-subtitle">View your plan, upgrade, and manage billing.</span>
          </Link>
          <Link to={flowPath('/flow/settings/updating-card-expenses-approvals')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">✅</span>
            <span className="scheduling-transfer-card-title">Updating card expenses approvals</span>
            <span className="scheduling-transfer-card-subtitle">Configure approval rules for card expenses.</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
