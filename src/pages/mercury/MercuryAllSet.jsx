import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryAllSet() {
  const { flowPath } = useCompany()

  return (
    <div className="mercury-step" style={{ maxWidth: 900, flexDirection: 'row', gap: 48 }}>
      <main style={{ flex: 1 }}>
        <p style={{ fontSize: 14, color: 'var(--mercury-muted)', marginBottom: 8 }}>MOBBIN</p>
        <h1 className="mercury-step-title">You&apos;re all set</h1>
        <p className="mercury-step-subtitle">To expedite your application review, complete the steps below:</p>
        <div style={{ background: '#f3f4f6', borderRadius: 12, padding: 24, marginBottom: 24 }}>
          <p style={{ margin: 0 }}>Your account selections have been saved - we&apos;re still reviewing your application and will get back to you soon.</p>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
          {['Set up your first deposit', 'Invite team members', 'Set up cards', 'Manage reimbursements', 'Enable two-factor authentication'].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
              <span style={{ color: 'green' }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
        <Link to={flowPath('/flow/mercury-fund-account')} className="mercury-btn-primary" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>Set up first deposit</Link>
      </main>
      <aside style={{ width: 280, flexShrink: 0 }}>
        <h3 style={{ fontSize: 16, marginBottom: 16 }}>Application timeline</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--mercury-primary)', marginBottom: 4 }} />
            <strong>Apply</strong>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: 0 }}>Submitted on Jun 4.</p>
          </div>
          <div>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--mercury-primary)', marginBottom: 4 }} />
            <strong>In review</strong>
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: 0 }}>Approx. 1 day.</p>
          </div>
          <div>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#e5e7eb', marginBottom: 4 }} />
            <strong>Account ready</strong>
          </div>
        </div>
        <h3 style={{ fontSize: 16, marginBottom: 8, marginTop: 32 }}>Questions?</h3>
        <p style={{ fontSize: 14, color: 'var(--mercury-muted)', margin: 0 }}>Our support team can help: <a href="mailto:help@mercury.com" className="mercury-link">help@mercury.com</a></p>
      </aside>
    </div>
  )
}
