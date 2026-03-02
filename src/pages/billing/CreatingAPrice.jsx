import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../BillingFlow.css'
import './CreatingACustomer.css'
import './CreatingAProduct.css'

export function CreatingAPrice() {
  const location = useLocation()
  const navigate = useNavigate()
  const { fromProduct, productId, productName } = location.state || {}

  const [pricingModel, setPricingModel] = useState('Per unit')
  const [currency, setCurrency] = useState('SGD Singapore Dollar')
  const [amount, setAmount] = useState('30.00')
  const [description, setDescription] = useState('')
  const [billingFreq, setBillingFreq] = useState('One-off')
  const [billingType, setBillingType] = useState('In advance')
  const [additionalOpen, setAdditionalOpen] = useState(false)

  const backTo = fromProduct ? '/flow/billing/creating-a-product' : '/flow/billing/products'

  return (
    <div className="billing-main billing-create-customer">
      <div className="billing-create-customer-header">
        <h1 className="billing-create-customer-title">Create price</h1>
        <Link to={backTo} className="bills-modal-close" aria-label="Close">×</Link>
      </div>
      <div className="billing-create-customer-progress" aria-hidden />

      {fromProduct && productName && (
        <p className="billing-create-price-context">Adding price for product: <strong>{productName}</strong></p>
      )}

      <form
        className="billing-create-customer-form"
        onSubmit={(e) => { e.preventDefault(); navigate(backTo); }}
      >
        <section className="billing-create-customer-section">
          <h2 className="billing-create-customer-section-title">Price information</h2>
          <div className="bills-form-field">
            <label>Pricing model</label>
            <select
              value={pricingModel}
              onChange={(e) => setPricingModel(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--psp-border)', borderRadius: '8px', fontSize: '14px' }}
            >
              <option value="">Select a pricing model</option>
              <option value="Flat">Flat</option>
              <option value="Per unit">Per unit</option>
            </select>
            <p className="billing-form-hint">
              {pricingModel === 'Per unit' ? 'Charge a fixed price per unit quantity' : 'Charge a fixed price'}
            </p>
          </div>
          <div className="bills-form-field">
            <label>Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--psp-border)', borderRadius: '8px', fontSize: '14px' }}
            >
              <option>SGD Singapore Dollar</option>
              <option>USD US Dollar</option>
            </select>
          </div>
          <div className="bills-form-field">
            <label>Amount</label>
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--psp-border)', borderRadius: '8px', fontSize: '14px' }}
            />
          </div>
          <div className="bills-form-field">
            <label>Description (optional)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional"
              rows={2}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--psp-border)', borderRadius: '8px', fontSize: '14px' }}
            />
            <p className="billing-form-hint">The price description will not be visible to the customer.</p>
          </div>
        </section>

        <section className="billing-create-customer-section">
          <h2 className="billing-create-customer-section-title">Billing information</h2>
          <div className="bills-form-field">
            <label>Billing frequency</label>
            <select
              value={billingFreq}
              onChange={(e) => setBillingFreq(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--psp-border)', borderRadius: '8px', fontSize: '14px' }}
            >
              <option value="">Select a billing frequency</option>
              <option>One-off</option>
              <option>Monthly</option>
            </select>
          </div>
          <div className="bills-form-field">
            <label>Billing type</label>
            <select
              value={billingType}
              onChange={(e) => setBillingType(e.target.value)}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--psp-border)', borderRadius: '8px', fontSize: '14px' }}
            >
              <option value="">Select a billing type</option>
              <option>In advance</option>
            </select>
            <p className="billing-form-hint">Charge will be applied up front.</p>
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
          {additionalOpen && (
            <div className="billing-create-customer-additional">
              <div className="bills-form-field">
                <label>Reference</label>
                <input type="text" placeholder="Optional" />
              </div>
            </div>
          )}
        </section>

        <div className="billing-create-customer-actions">
          <Link to={backTo} className="bills-btn bills-btn-secondary">Cancel</Link>
          <button type="submit" className="bills-btn bills-btn-primary">Create price</button>
        </div>
      </form>
    </div>
  )
}
