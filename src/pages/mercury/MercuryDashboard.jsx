import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryDashboard() {
  const { flowPath, basePath } = useCompany()

  return (
    <div className="mercury-flow-layout" style={{ alignItems: 'stretch' }}>
      <aside style={{ width: 220, minWidth: 220, borderRight: '1px solid var(--mercury-border)', padding: 24, background: '#fff' }}>
        <Link to={basePath()} className="mercury-logo" style={{ marginBottom: 32 }}>
          <img src="/mercury-logo.png" alt="Mercury" />
          Mobbin
        </Link>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Link to={flowPath('/flow/mercury-dashboard')} style={{ padding: '12px 16px', borderRadius: 8, background: '#eef2ff', color: 'var(--mercury-primary)', fontWeight: 600, textDecoration: 'none' }}>Home</Link>
          <Link to={flowPath('/flow/mercury-transactions')} style={{ padding: '12px 16px', borderRadius: 8, color: 'var(--mercury-text)', textDecoration: 'none' }}>Tasks</Link>
          <Link to={flowPath('/flow/mercury-transactions')} style={{ padding: '12px 16px', borderRadius: 8, color: 'var(--mercury-text)', textDecoration: 'none' }}>Transactions</Link>
          <Link to={flowPath('/flow/mercury-create-recipient')} style={{ padding: '12px 16px', borderRadius: 8, color: 'var(--mercury-text)', textDecoration: 'none' }}>Payments</Link>
          <Link to={flowPath('/flow/mercury-cards')} style={{ padding: '12px 16px', borderRadius: 8, color: 'var(--mercury-text)', textDecoration: 'none' }}>Cards</Link>
          <Link to={flowPath('/flow/mercury-bill-pay')} style={{ padding: '12px 16px', borderRadius: 8, color: 'var(--mercury-text)', textDecoration: 'none' }}>Bill Pay</Link>
          <Link to={flowPath('/flow/mercury-invoicing')} style={{ padding: '12px 16px', borderRadius: 8, color: 'var(--mercury-text)', textDecoration: 'none' }}>Invoicing</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 32, maxWidth: 'var(--mercury-dashboard-width)' }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, margin: '0 0 24px' }}>Welcome,</h1>
        <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
          <button type="button" className="mercury-btn-primary" style={{ width: 'auto' }}>Send</button>
          <button type="button" className="mercury-btn-secondary" style={{ width: 'auto' }}>Request</button>
          <button type="button" className="mercury-btn-secondary" style={{ width: 'auto' }}>Transfer</button>
          <button type="button" className="mercury-btn-secondary" style={{ width: 'auto' }}>+ Deposit</button>
          <button type="button" className="mercury-btn-secondary" style={{ width: 'auto' }}>Pay Bill</button>
          <button type="button" className="mercury-btn-secondary" style={{ width: 'auto' }}>Create Invoice</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 24 }}>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid var(--mercury-border)' }}>
            <h3 style={{ margin: '0 0 8px' }}>Mercury balance</h3>
            <p style={{ fontSize: 32, fontWeight: 700, margin: '0 0 8px' }}>$1,987.85</p>
            <p style={{ fontSize: 14, color: 'var(--mercury-muted)', margin: 0 }}>Last 30 days -$14.15</p>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid var(--mercury-border)' }}>
            <h3 style={{ margin: '0 0 16px' }}>Accounts</h3>
            <p style={{ margin: '0 0 8px' }}>Checking ••2502 — $987.85</p>
            <p style={{ margin: '0 0 16px' }}>Savings ••5679 — $1,000.00</p>
            <Link to={flowPath('/flow/mercury-dashboard')} className="mercury-btn-primary" style={{ display: 'inline-block', textDecoration: 'none' }}>+ Create account</Link>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid var(--mercury-border)' }}>
            <h3 style={{ margin: '0 0 8px' }}>Bill Pay</h3>
            <p style={{ fontSize: 14, color: 'var(--mercury-muted)', margin: '0 0 16px' }}>Outstanding: 1 · Overdue: - · Due soon: 1</p>
            <Link to={flowPath('/flow/mercury-bill-pay')} className="mercury-link">View &gt;</Link>
          </div>
          <div style={{ background: '#fff', borderRadius: 12, padding: 24, border: '1px solid var(--mercury-border)' }}>
            <h3 style={{ margin: '0 0 8px' }}>Invoicing</h3>
            <p style={{ fontSize: 14, color: 'var(--mercury-muted)', margin: '0 0 16px' }}>Open: 1 invoice - $10.60</p>
            <Link to={flowPath('/flow/mercury-invoicing')} className="mercury-link">View &gt;</Link>
          </div>
        </div>
      </main>
    </div>
  )
}
