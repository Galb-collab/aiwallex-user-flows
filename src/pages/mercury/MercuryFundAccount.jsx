import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryFundAccount() {
  const { flowPath, basePath } = useCompany()

  return (
    <div className="mercury-flow-layout">
      <header style={{ display: 'flex', alignItems: 'center', gap: 24, padding: 20, borderBottom: '1px solid var(--mercury-border)', width: '100%', maxWidth: 'var(--mercury-dashboard-width)', alignSelf: 'stretch' }}>
        <Link to={basePath()} className="mercury-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          Mobbin
        </Link>
        <nav style={{ display: 'flex', gap: 16, flex: 1 }}>
          <Link to={flowPath('/flow/mercury-dashboard')} className="mercury-nav-link">Home</Link>
          <Link to={flowPath('/flow/mercury-transactions')} className="mercury-nav-link">Transactions</Link>
          <Link to={flowPath('/flow/mercury-cards')} className="mercury-nav-link">Cards</Link>
        </nav>
      </header>
      <main style={{ flex: 1, padding: 32, maxWidth: 'var(--mercury-dashboard-width)', width: '100%' }}>
        <p style={{ fontSize: 14, color: 'var(--mercury-muted)', marginBottom: 8 }}>Fund account &gt; Finalize setup</p>
        <h1 className="mercury-step-title">Fund your account to get started</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginTop: 24 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid var(--mercury-border)' }}>
            <h3 style={{ margin: '0 0 8px' }}>Domestic wire transfer</h3>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: '0 0 16px' }}>Fastest. Arrives within 1 business day. Best for large transfers.</p>
            <p className="mercury-label">Routing number</p>
            <p style={{ fontFamily: 'monospace', margin: '0 0 16px' }}>••••••••••</p>
            <p className="mercury-label">Account number</p>
            <p style={{ fontFamily: 'monospace', margin: '0 0 16px' }}>••••••••••</p>
            <button type="button" className="mercury-btn-primary" style={{ width: 'auto' }}>Download Wire Details</button>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid var(--mercury-border)' }}>
            <h3 style={{ margin: '0 0 8px' }}>ACH transfer</h3>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: '0 0 16px' }}>Arrives within 3-5 days. Limits may apply. Add Mercury as a trusted account first to avoid any issues.</p>
            <button type="button" className="mercury-btn-primary" style={{ width: 'auto' }}>Connect Bank Account</button>
          </div>
        </div>
        <Link to={flowPath('/flow/mercury-dashboard')} className="mercury-link" style={{ display: 'block', marginTop: 24 }}>Other deposit options</Link>
      </main>
    </div>
  )
}
