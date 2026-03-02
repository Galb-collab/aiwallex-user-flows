import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../bills/BillsFlow.css'
import './VendorsFlow.css'

export function AddingBankAccountDetails() {
  const navigate = useNavigate()
  const [mode, setMode] = useState(null) // 'new' | 'copy'

  const handleAdd = () => {
    navigate('/flow/vendors')
  }

  return (
    <div className="bills-content">
      <div className="bills-title-row">
        <div>
          <h1 className="bills-page-title">Vendors</h1>
          <p className="bills-page-subtitle">Create and manage approved vendors for your organisation.</p>
        </div>
        <Link to="/flow/vendors" className="bills-btn bills-btn-secondary">← Back to Vendors</Link>
      </div>

      <div className="vendors-table-wrap">
        <table className="vendors-table">
          <thead>
            <tr>
              <th></th>
              <th>VENDOR NAME</th>
              <th>VENDOR OWNER</th>
              <th>PAYMENT INFO</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" aria-label="Select" /></td>
              <td>ASMobbin</td>
              <td>-</td>
              <td><span className="vendors-payment-missing">⚠ Missing</span></td>
              <td><span className="vendors-status-active">Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add bank account details modal */}
      <div className="bills-modal-backdrop" onClick={() => navigate('/flow/vendors')}>
        <div className="vendors-add-bank-modal" onClick={e => e.stopPropagation()}>
          <div className="adding-vendor-modal-header">
            <h2 className="adding-vendor-modal-title">Add bank account details</h2>
            <button type="button" className="bills-modal-close" onClick={() => navigate('/flow/vendors')} aria-label="Close">×</button>
          </div>
          <div className="adding-vendor-modal-body" style={{ padding: '24px' }}>
            {mode === null && (
              <>
                <div
                  className={`vendors-add-bank-option ${mode === 'new' ? 'selected' : ''}`}
                  onClick={() => setMode('new')}
                  onKeyDown={e => e.key === 'Enter' && setMode('new')}
                  role="button"
                  tabIndex={0}
                >
                  <h4>New bank detail</h4>
                  <p>Create a new bank account linked to this vendor.</p>
                </div>
                <div
                  className={`vendors-add-bank-option ${mode === 'copy' ? 'selected' : ''}`}
                  onClick={() => setMode('copy')}
                  onKeyDown={e => e.key === 'Enter' && setMode('copy')}
                  role="button"
                  tabIndex={0}
                >
                  <h4>Copy from existing transfer recipient</h4>
                  <p>Select a transfer recipient in Airwallex to copy from.</p>
                </div>
              </>
            )}
            {mode === 'copy' && (
              <>
                <div className="vendors-drawer-section">
                  <h3 className="vendors-drawer-section-title">Copy from existing transfer recipient</h3>
                  <p style={{ fontSize: '14px', color: 'var(--psp-text-muted)', margin: '0 0 12px' }}>
                    Select a transfer recipient in Airwallex to copy from.
                  </p>
                  <button type="button" className="bills-btn bills-btn-secondary" style={{ marginBottom: '12px' }} onClick={() => setMode(null)}>Change</button>
                  <div className="bills-form-field">
                    <label>Select bank details</label>
                    <input type="text" placeholder="Select bank details" />
                  </div>
                  <div className="vendors-contact-row" style={{ marginTop: '12px' }}>
                    <span>Sam United States of America • USD • Local • ACH</span>
                  </div>
                </div>
              </>
            )}
            {mode === 'new' && (
              <div className="vendors-drawer-section">
                <h3 className="vendors-drawer-section-title">Bank account details</h3>
                <div className="bills-form-field">
                  <label>Bank location</label>
                  <select><option>United States of America</option></select>
                </div>
                <div className="bills-form-field">
                  <label>Account currency</label>
                  <select><option>USD</option></select>
                </div>
                <div className="bills-form-field">
                  <label>Recipient type</label>
                  <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
                    <label><input type="radio" name="recipientType" /> Business</label>
                    <label><input type="radio" name="recipientType" defaultChecked /> Individual</label>
                  </div>
                </div>
                <div className="bills-form-field">
                  <label>Transfer method</label>
                  <div style={{ borderLeft: '3px solid var(--psp-primary)', padding: '12px', background: '#faf5ff', borderRadius: '8px', marginTop: '8px' }}>
                    <p style={{ margin: '0 0 4px', fontWeight: 600 }}>ACH</p>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--psp-text-muted)' }}>Local bank transfer with a limit of 15,000,000.00 USD</p>
                    <p style={{ margin: '4px 0 0', fontSize: '13px' }}>Transfer fee: Free Speed: 0-2 business days</p>
                    <button type="button" className="bills-btn bills-btn-secondary" style={{ marginTop: '8px' }}>Change</button>
                  </div>
                </div>
                <div className="bills-form-field">
                  <label>ACH routing number</label>
                  <input type="text" placeholder="9-digit number" defaultValue="- Community Federal Savings Bank" />
                  <p style={{ fontSize: '12px', color: 'var(--psp-text-muted)', margin: '4px 0 0' }}>9-digit number to identify a bank in the US</p>
                </div>
              </div>
            )}
          </div>
          <div className="adding-vendor-modal-footer">
            <button type="button" className="bills-btn bills-btn-secondary" onClick={() => mode ? setMode(null) : navigate('/flow/vendors')}>Cancel</button>
            <button type="button" className="bills-btn bills-btn-primary" onClick={handleAdd}>Add</button>
          </div>
        </div>
      </div>
    </div>
  )
}
