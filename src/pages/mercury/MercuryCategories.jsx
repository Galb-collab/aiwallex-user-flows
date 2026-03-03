import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryCategories() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [category, setCategory] = useState('')

  return (
    <div className="mercury-flow-layout mercury-dashboard-layout">
      <aside className="mercury-dashboard-sidebar">
        <Link to={flowPath('/flow/mercury-dashboard')} className="mercury-logo mercury-sidebar-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          Mobbin
        </Link>
        <nav className="mercury-sidebar-nav" style={{ marginTop: 8 }}>
          <Link to={flowPath('/flow/mercury-dashboard')} className="mercury-step-back" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginBottom: 24 }}>
            ← Settings
          </Link>
          <div className="mercury-sidebar-section" style={{ marginTop: 16 }}>Company</div>
          <Link to={flowPath('/flow/mercury-categories')} className="active">Categories</Link>
          <div className="mercury-sidebar-section" style={{ marginTop: 16 }}>Personal</div>
          <Link to={flowPath('/flow/mercury-notifications')}>Notifications</Link>
          <Link to={flowPath('/flow/mercury-profile-picture')}>My Profile</Link>
          <Link to={flowPath('/flow/mercury-change-password')}>Security</Link>
        </nav>
      </aside>
      <main className="mercury-dashboard-main">
        <div className="mercury-dashboard-content" style={{ padding: 32, maxWidth: 900 }}>
          <h1 className="mercury-step-title" style={{ marginBottom: 8 }}>Create mapping rules for faster accounting</h1>
          <p className="mercury-step-subtitle" style={{ marginBottom: 24 }}>Speed up your monthly close with mapping rules that automatically assign a GL code to transactions based on category.</p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 48 }}>
            <button type="button" className="mercury-btn-primary mercury-btn-inline">Map Categories</button>
            <button type="button" className="mercury-btn-secondary mercury-btn-inline" onClick={() => navigate(flowPath('/flow/mercury-dashboard'))}>Dismiss</button>
          </div>
          <h2 className="mercury-step-title" style={{ fontSize: 18, marginBottom: 8 }}>Categories</h2>
          <p className="mercury-step-subtitle" style={{ marginBottom: 24 }}>Create categories that team members can choose from to categorize transactions. Map these categories to GL codes in <a href="#accounting" className="mercury-link">accounting settings</a>.</p>
          <div className="mercury-card" style={{ padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 className="mercury-step-title" style={{ fontSize: 16, margin: 0 }}>Customize transaction categories</h3>
              <button type="button" className="mercury-btn-primary mercury-btn-inline">+ Create Category</button>
            </div>
            <p className="mercury-step-subtitle">Create custom categories for card spend, reimbursements, and other transactions based on what matters to your business.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <label className="mercury-label">Category</label>
              <input type="text" className="mercury-input" placeholder="e.g. Client Dinner" value={category} onChange={(e) => setCategory(e.target.value)} />
              <div style={{ background: '#f9fafb', borderRadius: 8, padding: 12, marginBottom: 24 }}>
                <p style={{ margin: '0 0 8px', fontSize: 12 }}>Suggestions: Home Office, Client Dinner, On-Site - Travel, Book Budget</p>
              </div>
              <button type="button" className="mercury-btn-primary">Create Category</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
