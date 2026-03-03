import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryPaymentDetails() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [amount, setAmount] = useState('')
  const [memo, setMemo] = useState('')
  const [date, setDate] = useState('')

  const handleSchedule = (e) => {
    e.preventDefault()
    if (amount && date) navigate(flowPath('/flow/mercury-dashboard'))
  }

  return (
    <div className="mercury-flow-layout">
      <div className="mercury-step" style={{ maxWidth: 560 }}>
        <div className="mercury-card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h1 className="mercury-step-title">Payment details</h1>
            <button type="button" className="mercury-step-back" onClick={() => navigate(-1)}>×</button>
          </div>
          <p style={{ margin: '0 0 8px' }}>Recipient: Mobbin</p>
          <p style={{ fontSize: 14, color: 'var(--mercury-muted)', margin: '0 0 24px' }}>••••••••••</p>
          <form onSubmit={handleSchedule}>
            <label className="mercury-label">Amount</label>
            <input type="text" className="mercury-input" placeholder="$ 0.00" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            <label className="mercury-label">Memo (optional)</label>
            <input type="text" className="mercury-input" value={memo} onChange={(e) => setMemo(e.target.value)} />
            <label className="mercury-label">Date</label>
            <input type="date" className="mercury-input" value={date} onChange={(e) => setDate(e.target.value)} required />
            <p style={{ fontSize: 12, color: 'var(--mercury-muted)', margin: '0 0 24px' }}>ACH payments typically arrive within 1-3 business days.</p>
            <div className="mercury-btn-group">
              <button type="button" className="mercury-btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
              <button type="submit" className="mercury-btn-primary" style={{ flex: 1 }}>Schedule ACH</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
