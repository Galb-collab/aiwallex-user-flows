import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import '../bills/BillsFlow.css'
import './RequestsFlow.css'

export function CreatingRequests() {
  const { flowPath } = useCompany()
  const [step, setStep] = useState('type') // 'type' | 'form'
  const [requestType, setRequestType] = useState(null) // 'card' | 'po'

  return (
    <div className="bills-content">
      <div className="bills-add-header">
        <h1 className="bills-add-title">Create request</h1>
        <Link to={flowPath('/flow/requests')} className="bills-modal-close" aria-label="Close">×</Link>
      </div>

      {step === 'type' && (
        <div className="requests-type-cards">
          <h2 className="requests-section-heading">Request type</h2>
          <div
            className="requests-type-card"
            onClick={() => { setRequestType('card'); setStep('form'); }}
            onKeyDown={e => e.key === 'Enter' && (setRequestType('card'), setStep('form'))}
            role="button"
            tabIndex={0}
          >
            <div className="requests-type-icon">💳</div>
            <h3 className="requests-type-title">Airwallex card</h3>
            <p className="requests-type-desc">Request a company or employee card for expenses and business purchases.</p>
          </div>
          <div
            className="requests-type-card"
            onClick={() => { setRequestType('po'); setStep('form'); }}
            onKeyDown={e => e.key === 'Enter' && (setRequestType('po'), setStep('form'))}
            role="button"
            tabIndex={0}
          >
            <div className="requests-type-icon">📋</div>
            <h3 className="requests-type-title">Purchase order</h3>
            <p className="requests-type-desc">Request a purchase order for procurement of goods and services from a vendor.</p>
          </div>
        </div>
      )}

      {step === 'form' && (
        <>
          <div className="requests-form-type-bar">
            <div>
              <strong>{requestType === 'card' ? 'Airwallex card' : 'Purchase order'}</strong>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--psp-text-muted)' }}>
                {requestType === 'card'
                  ? 'Request a company or employee card for expenses and business purchases.'
                  : 'Request a purchase order for procurement of goods and services from a vendor.'}
              </p>
            </div>
            <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setStep('type')}>Change</button>
          </div>

          <div className="bills-form-field">
            <label>What would you like to purchase?</label>
            <input type="text" placeholder="Enter a description" />
          </div>
          <div className="bills-form-field">
            <label>Purchase category</label>
            <select><option value="">Choose a category</option><option>Software subscriptions</option><option>General expenses</option></select>
          </div>

          <div className="requests-form-section">
            <h3 className="requests-section-heading">Request details</h3>
            <div className="requests-amount-tabs">
              <button type="button" className="requests-amount-tab active">Total amount</button>
              <button type="button" className="requests-amount-tab">Recurring amount</button>
            </div>
            <div className="bills-form-field">
              <label>Amount</label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input type="text" placeholder="Enter an amount" style={{ flex: 1 }} />
                <select style={{ width: '120px' }}><option>AUD</option><option>SGD</option></select>
              </div>
            </div>
            <div className="bills-form-field">
              <label>Start date (optional)</label>
              <input type="text" placeholder="Select" />
            </div>
            <div className="bills-form-field">
              <label>End date (optional)</label>
              <input type="text" placeholder="Select" />
            </div>
          </div>

          <div className="bills-form-field">
            <label>Comments (optional)</label>
            <textarea placeholder="Enter a comment" rows={3} style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--psp-border)', borderRadius: '8px', fontSize: '14px' }} />
          </div>

          <div className="bills-add-actions">
            <Link to={flowPath('/flow/requests')} className="bills-btn bills-btn-secondary">Cancel</Link>
            <button type="button" className="bills-btn bills-btn-primary" onClick={() => setStep('type')}>Submit request</button>
          </div>
        </>
      )}
    </div>
  )
}
