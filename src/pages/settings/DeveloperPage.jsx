import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function DeveloperPage() {
  const { flowPath } = useCompany()
  return (
    <div className="settings-content">
      <div className="wallet-content">
        <Link to={flowPath('/flow/settings')} className="wallet-back-link">← Back to Settings</Link>
        <h1 className="wallet-section-title">Developer</h1>
        <p className="global-accounts-desc">Manage API keys, webhooks, and developer resources.</p>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">API keys</h3>
          <p style={{ fontSize: 14, color: 'var(--psp-text-muted)', margin: '0 0 16px' }}>
            Use API keys to authenticate requests to the AIwallex API. Keep your keys secure and never share them publicly.
          </p>
          <Link to={flowPath('/flow/settings/developer/creating-an-api-key')} className="wallet-btn wallet-btn-primary">
            Create API key
          </Link>
        </div>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Webhooks</h3>
          <p style={{ fontSize: 14, color: 'var(--psp-text-muted)', margin: '0 0 16px' }}>
            Configure webhook endpoints to receive real-time notifications about events in your account.
          </p>
          <button type="button" className="wallet-btn">
            Add webhook endpoint
          </button>
        </div>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Documentation</h3>
          <p style={{ fontSize: 14, color: 'var(--psp-text-muted)', margin: 0 }}>
            View API reference, guides, and SDKs at developers.aiwallex.com
          </p>
          <a href="#docs" className="wallet-btn wallet-btn-link" style={{ marginTop: 12, display: 'inline-block' }}>
            Open documentation →
          </a>
        </div>
      </div>
    </div>
  )
}
