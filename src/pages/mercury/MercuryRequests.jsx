import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryRequests() {
  const { flowPath } = useCompany()

  return (
    <div className="mercury-flow-layout mercury-dashboard-layout">
      <aside className="mercury-dashboard-sidebar">
        <Link to={flowPath('/flow/mercury-dashboard')} className="mercury-logo mercury-sidebar-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          Mobbin
        </Link>
        <nav className="mercury-sidebar-nav">
          <Link to={flowPath('/flow/mercury-dashboard')}>Home</Link>
          <Link to={flowPath('/flow/mercury-transactions')}>Tasks <span className="mercury-badge">10</span></Link>
          <Link to={flowPath('/flow/mercury-transactions')}>Transactions</Link>
          <Link to={flowPath('/flow/mercury-create-recipient')}>Payments <span className="mercury-nav-chevron">▼</span></Link>
          <Link to={flowPath('/flow/mercury-requests')} className="active">Requests</Link>
          <Link to={flowPath('/flow/mercury-cards')}>Cards</Link>
          <Link to={flowPath('/flow/mercury-dashboard')}>Capital</Link>
          <Link to={flowPath('/flow/mercury-dashboard')}>Accounts <span className="mercury-nav-chevron">▼</span></Link>
          <div className="mercury-sidebar-section">Workflows</div>
          <Link to={flowPath('/flow/mercury-bill-pay')}>Bill Pay</Link>
          <Link to={flowPath('/flow/mercury-invoicing')}>Invoicing <span className="mercury-nav-chevron">▼</span></Link>
          <Link to={flowPath('/flow/mercury-reimbursements')}>Reimbursements</Link>
        </nav>
      </aside>
      <main className="mercury-dashboard-main">
        <header className="mercury-dashboard-topbar">
          <div className="mercury-company-selector">
            <div className="mercury-company-avatar">M</div>
            <span>Mobbin</span>
            <span className="mercury-nav-chevron">▼</span>
          </div>
          <div className="mercury-search-bar">
            <span className="mercury-search-icon">🔍</span>
            Search for anything
            <span className="mercury-kbd">⌘K</span>
          </div>
          <div className="mercury-topbar-right">
            <span className="mercury-nav-link">Move Money ▼</span>
            <span className="mercury-icon-btn">🔔</span>
            <span className="mercury-icon-btn mercury-avatar">JL</span>
          </div>
        </header>
        <div className="mercury-dashboard-content" style={{ padding: 32 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Requests</h1>
            <div style={{ display: 'flex', gap: 12 }}>
              <button type="button" className="mercury-btn-secondary mercury-btn-inline">Create Invoice</button>
              <button type="button" className="mercury-btn-primary mercury-btn-inline">+ Request Payment</button>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <div style={{ flex: 1, background: '#fff', borderRadius: 12, border: '1px solid var(--mercury-border)', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f9fafb' }}>
                    <th style={{ padding: 12, textAlign: 'left', fontSize: 12, color: 'var(--mercury-muted)' }}>Created on</th>
                    <th style={{ padding: 12, textAlign: 'left', fontSize: 12, color: 'var(--mercury-muted)' }}>Contact</th>
                    <th style={{ padding: 12, textAlign: 'left', fontSize: 12, color: 'var(--mercury-muted)' }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: '1px solid var(--mercury-border)' }}>
                    <td style={{ padding: 12 }}>Oct 28</td>
                    <td style={{ padding: 12 }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--mercury-primary)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>MP</span>
                        Mobbin Pte Ltd
                        <span style={{ background: '#f3e8ff', color: '#7c3aed', padding: '2px 8px', borderRadius: 4, fontSize: 12 }}>Active</span>
                      </span>
                    </td>
                    <td style={{ padding: 12 }}>$10.60</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div style={{ width: 360, background: '#fff', borderRadius: 12, border: '1px solid var(--mercury-border)', padding: 24 }}>
              <h3 style={{ margin: '0 0 8px' }}>Mobbin Pte Ltd</h3>
              <p style={{ fontSize: 14, color: 'var(--mercury-muted)', margin: '0 0 16px' }}>@mobbin.com</p>
              <p style={{ fontSize: 18, fontWeight: 600, margin: '0 0 4px' }}>$10.60</p>
              <p style={{ fontSize: 14, color: 'var(--mercury-muted)', margin: '0 0 24px' }}>Due Nov 28</p>
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: '0 0 4px' }}>Payment link</p>
                <p style={{ fontSize: 14, margin: 0 }}>.../pay/ng82sbc294drr2dt</p>
              </div>
              <div style={{ marginBottom: 16 }}>
                <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: '0 0 4px' }}>Request notes</p>
                <p style={{ fontSize: 14, margin: 0 }}>Mobbin Pro</p>
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                <button type="button" className="mercury-btn-secondary" style={{ color: '#dc2626' }}>Cancel Request</button>
                <button type="button" className="mercury-btn-primary">Mark as Paid</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
