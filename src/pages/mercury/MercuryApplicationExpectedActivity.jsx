import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryApplicationExpectedActivity() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [international, setInternational] = useState('yes')
  const [currencies, setCurrencies] = useState('')
  const [monthlyVolume, setMonthlyVolume] = useState('')

  const handleNext = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/mercury-application/follow-up'))
  }

  return (
    <div className="mercury-step mercury-two-col" style={{ maxWidth: 900, padding: '48px 24px' }}>
      <aside style={{ width: 200 }}>
        <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>5/6</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Company info</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Company address</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Ownership details</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Company documents</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-primary)', fontWeight: 600 }}>Expected activity</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>Follow-up questions</div>
      </aside>
      <main style={{ flex: 1 }}>
        <h1 className="mercury-step-title">Expected activity</h1>
        <form onSubmit={handleNext}>
          <label className="mercury-label">Will you be sending or receiving money internationally?</label>
          <div style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
            <label className="mercury-checkbox">
              <input type="radio" name="international" value="yes" checked={international === 'yes'} onChange={() => setInternational('yes')} />
              <span>Yes</span>
            </label>
            <label className="mercury-checkbox">
              <input type="radio" name="international" value="no" checked={international === 'no'} onChange={() => setInternational('no')} />
              <span>No</span>
            </label>
          </div>
          <label className="mercury-label">What are the top 3 currencies you expect to send or receive?</label>
          <input type="text" className="mercury-input" placeholder="e.g. USD, EUR, GBP" value={currencies} onChange={(e) => setCurrencies(e.target.value)} />
          <label className="mercury-label">How much do you expect to send or receive across all currencies per month?</label>
          <select className="mercury-input" value={monthlyVolume} onChange={(e) => setMonthlyVolume(e.target.value)}>
            <option value="">Select a range...</option>
            <option value="0-10k">$0 - $10,000</option>
            <option value="10k-50k">$10,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k+">$100,000+</option>
          </select>
          <span style={{ fontSize: 12, color: 'var(--mercury-muted)' }}>Estimate in USD</span>
          <div className="mercury-btn-group">
            <button type="button" className="mercury-btn-secondary" onClick={() => navigate(-1)}>Back</button>
            <button type="submit" className="mercury-btn-primary" style={{ flex: 1 }}>Next</button>
          </div>
        </form>
      </main>
    </div>
  )
}
