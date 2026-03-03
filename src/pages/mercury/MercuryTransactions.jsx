import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryTransactions() {
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
          <Link to={flowPath('/flow/mercury-transactions')} className="active">Transactions</Link>
          <Link to={flowPath('/flow/mercury-cards')}>Cards</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 32 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, margin: '0 0 24px' }}>Transactions</h1>
        <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
          <button type="button" className="mercury-btn-secondary mercury-btn-inline">Data Views</button>
          <button type="button" className="mercury-btn-secondary mercury-btn-inline">Filters</button>
          <button type="button" className="mercury-btn-secondary mercury-btn-inline">Date</button>
          <button type="button" className="mercury-btn-secondary mercury-btn-inline">Keywords</button>
          <button type="button" className="mercury-btn-secondary mercury-btn-inline">Amount</button>
        </div>
        <div style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
          <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid var(--mercury-border)', flex: 1 }}>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: 0 }}>Net change this month</p>
            <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>-$2.55</p>
          </div>
          <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid var(--mercury-border)', flex: 1 }}>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: 0 }}>Money in</p>
            <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>$0.00</p>
          </div>
          <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid var(--mercury-border)', flex: 1 }}>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: 0 }}>Money out</p>
            <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>-$2.55</p>
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, border: '1px solid var(--mercury-border)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f9fafb' }}>
                <th style={{ padding: 12, textAlign: 'left', fontSize: 12, color: 'var(--mercury-muted)' }}>Date</th>
                <th style={{ padding: 12, textAlign: 'left', fontSize: 12, color: 'var(--mercury-muted)' }}>To/From</th>
                <th style={{ padding: 12, textAlign: 'left', fontSize: 12, color: 'var(--mercury-muted)' }}>Amount</th>
                <th style={{ padding: 12, textAlign: 'left', fontSize: 12, color: 'var(--mercury-muted)' }}>Account</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderTop: '1px solid var(--mercury-border)' }}>
                <td style={{ padding: 12 }}>Oct 28</td>
                <td style={{ padding: 12 }}>Google Workspace</td>
                <td style={{ padding: 12 }}>-$2.55</td>
                <td style={{ padding: 12 }}>Checking ••2502</td>
              </tr>
              <tr style={{ borderTop: '1px solid var(--mercury-border)' }}>
                <td style={{ padding: 12 }}>Sep 15</td>
                <td style={{ padding: 12 }}>MOBBIN PTE. LTD.</td>
                <td style={{ padding: 12 }}>$1,001.00</td>
                <td style={{ padding: 12 }}>Savings ••5679</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 12, color: 'var(--mercury-muted)', marginTop: 16 }}>4 Transactions</p>
      </main>
    </div>
  )
}
