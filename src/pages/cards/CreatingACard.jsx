import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import '../bills/BillsFlow.css'
import './CardsFlow.css'

export function CreatingACard() {
  const { flowPath } = useCompany()
  const navigate = useNavigate()
  const [created, setCreated] = useState(false)

  const handleCreate = () => {
    setCreated(true)
    setTimeout(() => navigate(flowPath('/flow/cards/card-details/2')), 2500)
  }

  return (
    <div className="bills-content">
      <div className="bills-add-header">
        <h1 className="bills-add-title">Create card (employee card)</h1>
        <Link to={flowPath('/flow/cards')} className="bills-modal-close" aria-label="Close">×</Link>
      </div>

      {!created && (
        <>
          <div className="cards-create-note">
            <span className="cards-create-note-icon" aria-hidden>💡</span>
            <p style={{ margin: 0 }}>Parts of this form have been pre-filled based on the request details.</p>
          </div>

          <div className="cards-create-type-bar">
            <div>
              <strong>Employee card <span className="cards-type-badge">Physical</span></strong>
              <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--psp-text-muted)' }}>
                For employee expenses, travel, and day-to-day spending.
              </p>
            </div>
            <button type="button" className="bills-btn bills-btn-secondary">Change</button>
          </div>

          <div className="bills-form-field">
            <label>Funding account</label>
            <select>
              <option>MOBBIN PTE. LTD. MOBBIN PTE. LTD.</option>
            </select>
          </div>

          <h3 className="cards-section-heading" style={{ marginTop: '24px' }}>Employee card details</h3>
          <div className="bills-form-field">
            <label>Cardholder</label>
            <input type="text" defaultValue="Sam Lee" placeholder="Select employee" />
          </div>
          <div className="bills-form-field">
            <label>Purpose</label>
            <select><option>Other</option><option>Marketing</option><option>Software</option></select>
          </div>
          <div className="bills-form-field">
            <label>Card nickname</label>
            <input type="text" defaultValue="Sam Lee" placeholder="Enter nickname" />
          </div>

          <div style={{ marginTop: '24px' }}>
            <h3 className="cards-section-heading">Card limits</h3>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px' }}>
              <input type="checkbox" />
              <span>Single-use card</span>
            </label>
          </div>

          <div className="bills-add-actions" style={{ marginTop: '32px' }}>
            <Link to={flowPath('/flow/cards')} className="bills-btn bills-btn-secondary">Cancel</Link>
            <button type="button" className="bills-btn bills-btn-primary" onClick={handleCreate}>Create</button>
          </div>
        </>
      )}

      {created && (
        <p style={{ fontSize: '16px', color: 'var(--psp-text-muted)' }}>Redirecting to Card details…</p>
      )}

      {created && <div className="cards-toast-success">✔ Card created successfully</div>}
    </div>
  )
}
