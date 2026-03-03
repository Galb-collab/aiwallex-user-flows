import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryInvoicing() {
  const { flowPath, basePath } = useCompany()

  return (
    <div className="mercury-flow-layout mercury-dashboard-layout">
      <aside style={{ width: 220, minWidth: 220, borderRight: '1px solid var(--mercury-border)', padding: 24, background: '#fff' }}>
        <Link to={basePath()} className="mercury-logo" style={{ marginBottom: 32 }}>
          <img src="/mercury-logo.png" alt="Mercury" />
          Mobbin
        </Link>
        <nav className="mercury-sidebar-nav">
          <Link to={flowPath('/flow/mercury-dashboard')}>Home</Link>
          <Link to={flowPath('/flow/mercury-transactions')}>Transactions</Link>
          <Link to={flowPath('/flow/mercury-invoicing')} className="active">Invoicing</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Invoicing</h1>
          <button type="button" className="mercury-btn-primary" style={{ width: 'auto' }}>+ Create Invoice</button>
        </div>
        <div style={{ display: 'flex', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
          <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid var(--mercury-border)', flex: 1 }}>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: 0 }}>Overdue</p>
            <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>-</p>
          </div>
          <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid var(--mercury-border)', flex: 1 }}>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: 0 }}>Paid</p>
            <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>-</p>
          </div>
          <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid var(--mercury-border)', flex: 1 }}>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: 0 }}>Open</p>
            <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>1 invoice - $10.60</p>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--mercury-border)', overflow: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f9fafb' }}>
                <th style={{ padding: 12, textAlign: 'left', fontSize: 12, color: 'var(--mercury-muted)' }}>Invoice</th>
                <th style={{ padding: 12, textAlign: 'left', fontSize: 12, color: 'var(--mercury-muted)' }}>Amount</th>
                <th style={{ padding: 12, textAlign: 'left', fontSize: 12, color: 'var(--mercury-muted)' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderTop: '1px solid var(--mercury-border)' }}>
                <td style={{ padding: 12 }}>INV-001</td>
                <td style={{ padding: 12 }}>$10.60</td>
                <td style={{ padding: 12 }}>Open</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}
