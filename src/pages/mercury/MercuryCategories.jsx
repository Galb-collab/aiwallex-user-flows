import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryCategories() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [category, setCategory] = useState('')

  return (
    <div className="mercury-step">
      <div className="mercury-card" style={{ maxWidth: 560 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h1 className="mercury-step-title">Customize transaction categories</h1>
          <button type="button" className="mercury-step-back" onClick={() => navigate(-1)}>×</button>
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
  )
}
