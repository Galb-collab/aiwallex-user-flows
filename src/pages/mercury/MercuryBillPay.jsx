import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryBillPay() {
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
          <Link to={flowPath('/flow/mercury-create-recipient')}>Payments</Link>
          <Link to={flowPath('/flow/mercury-requests')}>Requests</Link>
          <Link to={flowPath('/flow/mercury-cards')}>Cards</Link>
          <Link to={flowPath('/flow/mercury-bill-pay')} className="active">Bill Pay</Link>
          <Link to={flowPath('/flow/mercury-invoicing')}>Invoicing</Link>
          <Link to={flowPath('/flow/mercury-reimbursements')}>Reimbursements</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Bill Pay</h1>
          <button type="button" className="mercury-btn-primary" style={{ width: 'auto' }}>↑ Upload Bill</button>
        </div>
        <div style={{ display: 'flex', gap: 24, marginBottom: 24, flexWrap: 'wrap' }}>
          <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid var(--mercury-border)', flex: 1 }}>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: 0 }}>Total outstanding</p>
            <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>0 ($0.00)</p>
          </div>
          <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid var(--mercury-border)', flex: 1 }}>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: 0 }}>Overdue</p>
            <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>0 ($0.00)</p>
          </div>
          <div style={{ background: '#fff', padding: 16, borderRadius: 8, border: '1px solid var(--mercury-border)', flex: 1 }}>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: 0 }}>Due in next 7 days</p>
            <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>0 ($0.00)</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          <button type="button" className="mercury-btn-primary mercury-btn-inline">Inbox</button>
          <button type="button" className="mercury-btn-secondary mercury-btn-inline">Needs Approval</button>
          <button type="button" className="mercury-btn-secondary mercury-btn-inline">Scheduled</button>
          <button type="button" className="mercury-btn-secondary mercury-btn-inline">Paid</button>
        </div>
        <div style={{ background: '#fff', borderRadius: 12, padding: 48, border: '2px dashed var(--mercury-border)', textAlign: 'center' }}>
          <p style={{ margin: '0 0 8px' }}>Your inbox is empty. Drag and drop bills or forward them to mobbin@ap.mercury.com</p>
          <button type="button" className="mercury-btn-primary" style={{ width: 'auto', marginTop: 16 }}>Upload Bill</button>
        </div>
      </main>
    </div>
  )
}
