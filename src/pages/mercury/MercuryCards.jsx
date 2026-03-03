import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryCards() {
  const { flowPath, basePath } = useCompany()

  return (
    <div className="mercury-flow-layout" style={{ alignItems: 'stretch' }}>
      <aside style={{ width: 220, minWidth: 220, borderRight: '1px solid var(--mercury-border)', padding: 24, background: '#fff' }}>
        <Link to={basePath()} className="mercury-logo" style={{ marginBottom: 32 }}>
          <img src="/mercury-logo.png" alt="Mercury" />
          Mobbin
        </Link>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Link to={flowPath('/flow/mercury-dashboard')} style={{ padding: '12px 16px', borderRadius: 8, color: 'var(--mercury-text)', textDecoration: 'none' }}>Home</Link>
          <Link to={flowPath('/flow/mercury-transactions')} style={{ padding: '12px 16px', borderRadius: 8, color: 'var(--mercury-text)', textDecoration: 'none' }}>Transactions</Link>
          <Link to={flowPath('/flow/mercury-cards')} style={{ padding: '12px 16px', borderRadius: 8, background: '#eef2ff', color: 'var(--mercury-primary)', fontWeight: 600, textDecoration: 'none' }}>Cards</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Cards</h1>
          <Link to={flowPath('/flow/mercury-create-card')} className="mercury-btn-primary" style={{ width: 'auto', textDecoration: 'none' }}>+ Create Card</Link>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          <button type="button" className="mercury-btn-primary" style={{ width: 'auto' }}>Manage</button>
          <button type="button" className="mercury-btn-secondary" style={{ width: 'auto' }}>Subscriptions</button>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--mercury-border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f9fafb' }}>
                <th style={{ padding: 12, textAlign: 'left', fontSize: 12, color: 'var(--mercury-muted)' }}>Cardholder</th>
                <th style={{ padding: 12, textAlign: 'left', fontSize: 12, color: 'var(--mercury-muted)' }}>Card</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderTop: '1px solid var(--mercury-border)' }}>
                <td style={{ padding: 12 }}>You</td>
                <td style={{ padding: 12 }}>••9932</td>
              </tr>
              <tr style={{ borderTop: '1px solid var(--mercury-border)' }}>
                <td style={{ padding: 12 }}>You</td>
                <td style={{ padding: 12 }}>••8749</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: 24, background: '#fff', borderRadius: 12, padding: 24, border: '1px solid var(--mercury-border)' }}>
          <h3 style={{ margin: '0 0 8px' }}>••8749&apos;s Debit Card</h3>
          <p style={{ fontSize: 14, color: 'var(--mercury-muted)', margin: '0 0 16px' }}>$0.00 Spent today</p>
          <p style={{ fontSize: 14, margin: 0 }}>Total daily limit: $2,500.00</p>
          <p style={{ fontSize: 14, margin: '8px 0 0' }}>This card was issued today. Delivery usually takes up to 2-3 weeks.</p>
        </div>
      </main>
    </div>
  )
}
