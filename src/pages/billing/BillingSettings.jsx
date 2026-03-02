import React, { useState } from 'react'
import '../bills/BillsFlow.css'
import '../BillingFlow.css'
import './BillingSettings.css'

export function BillingSettings() {
  const [tab, setTab] = useState('general')
  const [defaultsEditing, setDefaultsEditing] = useState(false)
  const [subscriptionEditing, setSubscriptionEditing] = useState(false)
  const [billingEntity, setBillingEntity] = useState('MOBBIN PTE. LTD.')
  const [billingCurrency, setBillingCurrency] = useState('SGD Singapore Dollar')
  const [daysUntilDue, setDaysUntilDue] = useState(30)
  const [failedPaymentAttempts, setFailedPaymentAttempts] = useState(5)

  return (
    <div className="billing-main billing-settings">
      <h1 className="billing-title">Billing settings</h1>

      <div className="billing-settings-tabs">
        <button type="button" className={`billing-settings-tab ${tab === 'general' ? 'active' : ''}`} onClick={() => setTab('general')}>General</button>
        <button type="button" className={`billing-settings-tab ${tab === 'customer-comms' ? 'active' : ''}`} onClick={() => setTab('customer-comms')}>Customer communications</button>
      </div>

      {tab === 'general' && (
        <>
          <section className="billing-settings-section">
            <div className="billing-settings-section-head">
              <div>
                <h2 className="billing-settings-section-title">Default values</h2>
                <p className="billing-settings-section-desc">Fill up your default details here. These defaults will be used automatically for every new invoice or subscription you create.</p>
              </div>
              {!defaultsEditing ? (
                <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setDefaultsEditing(true)}>Edit</button>
              ) : (
                <div className="billing-settings-actions">
                  <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setDefaultsEditing(false)}>Cancel</button>
                  <button type="button" className="bills-btn bills-btn-primary" onClick={() => setDefaultsEditing(false)}>Save</button>
                </div>
              )}
            </div>
            {defaultsEditing ? (
              <div className="billing-settings-form">
                <div className="billing-settings-field">
                  <label>Billing entity</label>
                  <select value={billingEntity} onChange={(e) => setBillingEntity(e.target.value)}>
                    <option value="">Select a billing entity</option>
                    <option>MOBBIN PTE. LTD.</option>
                  </select>
                </div>
                <div className="billing-settings-field">
                  <label>Billing currency</label>
                  <select value={billingCurrency} onChange={(e) => setBillingCurrency(e.target.value)}>
                    <option value="">Select a billing currency</option>
                    <option>SGD Singapore Dollar</option>
                    <option>USD US Dollar</option>
                  </select>
                </div>
                <div className="billing-settings-field">
                  <label>Days until due</label>
                  <div className="billing-settings-field-inline">
                    <input type="number" min={0} value={daysUntilDue} onChange={(e) => setDaysUntilDue(Number(e.target.value) || 0)} />
                    <span>days after invoice date</span>
                  </div>
                </div>
                <div className="billing-settings-field">
                  <label>Payment account</label>
                  <select><option value="">Select a payment account</option></select>
                </div>
                <div className="billing-settings-field">
                  <label>Memo</label>
                  <textarea placeholder="Include a message that will be displayed on the invoice" rows={3} />
                </div>
                <div className="billing-settings-field">
                  <label>Logo</label>
                  <p className="billing-settings-hint">This logo will be used to brand invoices, emails and checkout pages on Billing. Recommended: 200px height minimum, 4:1 aspect ratio. PNG, JPG, JPEG. Max 1MB.</p>
                  <button type="button" className="bills-btn bills-btn-secondary">Choose file</button>
                </div>
              </div>
            ) : (
              <dl className="billing-settings-dl">
                <dt>Billing entity</dt>
                <dd>{billingEntity || 'None'}</dd>
                <dt>Billing currency</dt>
                <dd>{billingCurrency || 'None'}</dd>
                <dt>Days until due</dt>
                <dd>{daysUntilDue} days after invoice date</dd>
                <dt>Payment account</dt>
                <dd>None</dd>
                <dt>Memo</dt>
                <dd>None</dd>
                <dt>Logo</dt>
                <dd>None</dd>
              </dl>
            )}
          </section>

          <section className="billing-settings-section">
            <div className="billing-settings-section-head">
              <div>
                <h2 className="billing-settings-section-title">Subscription settings</h2>
                <p className="billing-settings-section-desc">Configure how subscriptions handle automatic payments</p>
              </div>
              {!subscriptionEditing ? (
                <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setSubscriptionEditing(true)}>Edit</button>
              ) : (
                <div className="billing-settings-actions">
                  <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setSubscriptionEditing(false)}>Cancel</button>
                  <button type="button" className="bills-btn bills-btn-primary" onClick={() => setSubscriptionEditing(false)}>Save</button>
                </div>
              )}
            </div>
            {subscriptionEditing ? (
              <div className="billing-settings-form">
                <div className="billing-settings-field">
                  <label>Failed payment handling</label>
                  <div className="billing-settings-field-inline">
                    <span>After</span>
                    <input type="number" min={1} value={failedPaymentAttempts} onChange={(e) => setFailedPaymentAttempts(Number(e.target.value) || 1)} style={{ width: '60px', margin: '0 8px' }} />
                    <span>unsuccessful payment attempts, cancel the subscription</span>
                  </div>
                </div>
              </div>
            ) : (
              <p className="billing-settings-value">After {failedPaymentAttempts} unsuccessful payment attempts, cancel the subscription</p>
            )}
          </section>
        </>
      )}

      {tab === 'customer-comms' && (
        <section className="billing-settings-section">
          <h2 className="billing-settings-section-title">Customer communications</h2>
          <p className="billing-settings-section-desc">Configure email templates and notifications for customers.</p>
          <p className="billing-settings-placeholder">Customer communications settings can be configured here.</p>
        </section>
      )}
    </div>
  )
}
