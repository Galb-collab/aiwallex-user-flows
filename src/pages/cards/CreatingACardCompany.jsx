import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../bills/BillsFlow.css'
import './CardsFlow.css'

export function CreatingACardCompany() {
  const navigate = useNavigate()
  const [created, setCreated] = useState(false)

  const handleCreate = () => {
    setCreated(true)
    setTimeout(() => navigate('/flow/cards/card-details/1'), 2500)
  }

  return (
    <div className="bills-content">
      <div className="bills-add-header">
        <h1 className="bills-add-title">Create card (company card)</h1>
        <Link to="/flow/cards" className="bills-modal-close" aria-label="Close">×</Link>
      </div>

      {!created && (
        <>
          <div className="cards-create-note">
            <span className="cards-create-note-icon" aria-hidden>💡</span>
            <p style={{ margin: 0 }}>Company cards are ideal for marketing campaigns, software subscriptions, and supplier payments.</p>
          </div>

          <div className="cards-create-type-bar">
            <div>
              <strong>Company card <span className="cards-type-badge">Virtual</span></strong>
              <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--psp-text-muted)' }}>
                For marketing campaigns, software subscriptions, and supplier payments.
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

          <h3 className="cards-section-heading" style={{ marginTop: '24px' }}>Company card details</h3>
          <div className="bills-form-field">
            <label>Card contacts (select up to 3 users)</label>
            <input type="text" defaultValue="Sam Lee" placeholder="Select users" />
          </div>
          <div className="bills-form-field">
            <label>Purpose</label>
            <select><option>Other</option><option>Marketing</option><option>Software</option></select>
          </div>
          <div className="bills-form-field">
            <label>Card nickname</label>
            <input type="text" defaultValue="Team Expenses" placeholder="Enter nickname" />
          </div>

          <div style={{ marginTop: '24px' }}>
            <h3 className="cards-section-heading">Card limits</h3>
            <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontSize: '14px' }}>
              <input type="checkbox" />
              <span>Single-use card</span>
            </label>
          </div>

          <div className="bills-add-actions" style={{ marginTop: '32px' }}>
            <Link to="/flow/cards" className="bills-btn bills-btn-secondary">Cancel</Link>
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
