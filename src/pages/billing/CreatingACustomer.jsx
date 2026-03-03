import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import '../bills/BillsFlow.css'
import '../BillingFlow.css'
import './CreatingACustomer.css'

export function CreatingACustomer() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [customerType, setCustomerType] = useState('business') // 'business' | 'individual'
  const [additionalOpen, setAdditionalOpen] = useState(false)

  const handleCreateCustomer = () => {
    navigate(flowPath('/flow/billing/customer-details'))
  }

  return (
    <div className="billing-main billing-create-customer">
      <div className="billing-create-customer-header">
        <h1 className="billing-create-customer-title">Create customer</h1>
        <Link to={flowPath('/flow/billing')} className="bills-modal-close" aria-label="Close">×</Link>
      </div>
      <div className="billing-create-customer-progress" aria-hidden />

      <div className="billing-create-customer-form">
        <section className="billing-create-customer-section">
          <h2 className="billing-create-customer-section-title">Customer information</h2>
          <p className="billing-create-customer-section-desc">
            All customer information is optional. Information provided below will be used when generating invoices for this customer.
          </p>
          <div className="billing-form-field">
            <span className="billing-form-label">Customer type</span>
            <div className="billing-form-radios">
              <label className="billing-form-radio">
                <input type="radio" name="customerType" value="business" checked={customerType === 'business'} onChange={() => setCustomerType('business')} />
                <span>Business</span>
              </label>
              <label className="billing-form-radio">
                <input type="radio" name="customerType" value="individual" checked={customerType === 'individual'} onChange={() => setCustomerType('individual')} />
                <span>Individual</span>
              </label>
            </div>
          </div>
          {customerType === 'business' && (
            <div className="bills-form-field">
              <label>Legal business name</label>
              <input type="text" placeholder="Enter legal business name" />
            </div>
          )}
          {customerType === 'individual' && (
            <div className="bills-form-field">
              <label>Customer name</label>
              <input type="text" placeholder="Enter customer name" defaultValue="Alex Smith" />
            </div>
          )}
          <div className="bills-form-field">
            <label>Tax ID</label>
            <input type="text" placeholder="Enter tax ID" />
          </div>
          <div className="bills-form-field">
            <label>Email</label>
            <input type="email" placeholder="Enter email" defaultValue="alexsmith.mobbin@gmail.com" />
            <p className="billing-form-hint">This will be used for all automated customer emails.</p>
          </div>
          <div className="bills-form-field">
            <label>Phone number</label>
            <input type="tel" placeholder="Enter phone number" />
          </div>
          <div className="bills-form-field">
            <label>Country or region</label>
            <select><option value="">Select a country or region</option><option>Singapore</option><option>United States</option></select>
          </div>
        </section>

        <section className="billing-create-customer-section">
          <button
            type="button"
            className="billing-create-customer-accordion"
            onClick={() => setAdditionalOpen(!additionalOpen)}
            aria-expanded={additionalOpen}
          >
            <h2 className="billing-create-customer-section-title">Additional information</h2>
            <span className="billing-create-customer-chevron">{additionalOpen ? '▲' : '▼'}</span>
          </button>
          <p className="billing-create-customer-section-desc">
            All additional information is optional. Information provided below is for your internal use and will not be visible to customers.
          </p>
          {additionalOpen && (
            <div className="billing-create-customer-additional">
              <div className="bills-form-field">
                <label>Reference</label>
                <input type="text" placeholder="Optional" />
              </div>
              <div className="bills-form-field">
                <label>Notes</label>
                <textarea placeholder="Optional" rows={3} style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--psp-border)', borderRadius: '8px', fontSize: '14px' }} />
              </div>
            </div>
          )}
        </section>

        <div className="billing-create-customer-actions">
          <Link to={flowPath('/flow/billing')} className="bills-btn bills-btn-secondary">Cancel</Link>
          <button type="button" className="bills-btn bills-btn-primary" onClick={handleCreateCustomer}>Create customer</button>
        </div>
      </div>
    </div>
  )
}
