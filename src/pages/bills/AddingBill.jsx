import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './BillsFlow.css'

export function AddingBill() {
  const [submitted, setSubmitted] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  return (
    <div className="bills-content">
      {!submitted && (
      <>
      <div className="bills-add-header">
        <h1 className="bills-add-title">Add new bill</h1>
        <Link to="/flow/bills" className="bills-modal-close" aria-label="Close">×</Link>
      </div>

      <div className="bills-add-body">
        <div className="bills-invoice-preview bills-invoice-left">
          <div className="bills-invoice-doc">
            <p>SLMob · samlee.mobbin@gmail.com</p>
            <p><strong>INVOICE INV0001</strong></p>
            <p>DATE Nov 25, 2025 · DUE On Receipt</p>
            <p>BALANCE DUE SGD S$1.00</p>
            <p>BILLED TO Alex Smith · alexsmith.mobbin@gmail.com</p>
            <table className="bills-invoice-table">
              <thead><tr><th>DESCRIPTION</th><th>RATE</th><th>QTY</th><th>AMOUNT</th></tr></thead>
              <tbody><tr><td>Team Subscription</td><td>S$1.00</td><td>1</td><td>S$1.00</td></tr></tbody>
            </table>
            <p>TOTAL S$1.00 · BALANCE DUE SGD S$1.00</p>
            <p>DATE SIGNED Nov 27, 2025</p>
          </div>
          <div className="bills-invoice-actions">
            <button type="button">−</button><span>100%</span><button type="button">+</button>
            <button type="button" aria-label="Download">↓</button><button type="button" aria-label="Delete">🗑</button>
          </div>
        </div>

        <div className="bills-add-form">
          <div className="bills-form-field">
            <label>Bill description (required)</label>
            <input type="text" defaultValue="Team Subscription" />
          </div>
          <div className="bills-form-field">
            <label>Vendor (required)</label>
            <input type="text" placeholder="Search or add a new vendor" />
          </div>
          <div className="bills-form-field">
            <label>Purchase order #</label>
            <select><option>Choose a PO</option></select>
          </div>
          <div className="bills-form-field">
            <label>Invoice date (required)</label>
            <input type="text" defaultValue="2025-11-25" />
          </div>
          <div className="bills-form-field">
            <label>Due date (required)</label>
            <input type="text" defaultValue="2025-11-25" />
          </div>
          <div className="bills-form-field">
            <label>Invoice number (required)</label>
            <input type="text" defaultValue="INV0001" />
          </div>
          <div className="bills-form-field">
            <label>Line items</label>
            <div className="bills-line-inputs">
              <select><option>SGD Singapore Dollar</option></select>
              <select><option>Match with PO line item</option></select>
              <input type="text" defaultValue="Team Subscription" placeholder="Description" />
              <input type="text" placeholder="Price (required)" />
              <input type="text" placeholder="Quantity (required)" />
            </div>
          </div>
          <div className="bills-add-actions">
            <button type="button" className="bills-btn bills-btn-secondary">Save draft</button>
            <button type="button" className="bills-btn bills-btn-primary" onClick={handleSubmit}>Submit bill</button>
          </div>
        </div>
      </div>
      </>
      )}

      {submitted && (
        <div className="bills-content bills-list-after-add">
          <div className="bills-title-row">
            <div>
              <h1 className="bills-page-title">Bills</h1>
              <p className="bills-page-subtitle">Create and manage bills and payments.</p>
            </div>
            <Link to="/flow/bills/adding-a-bill" className="bills-btn bills-btn-primary">+ New bill</Link>
          </div>
          <div className="bills-cards">
            <div className="bills-card">
              <h3 className="bills-card-title">Submissions</h3>
              <ul className="bills-card-items"><li>Submit your drafts 4.54 SGD <span className="bills-badge">1</span></li></ul>
            </div>
            <div className="bills-card">
              <h3 className="bills-card-title">Pending approval</h3>
              <ul className="bills-card-items"><li>Approve your bills 1.00 SGD <span className="bills-badge">1</span></li></ul>
            </div>
            <div className="bills-card">
              <h3 className="bills-card-title">Awaiting payment</h3>
              <ul className="bills-card-items"><li>No bills to pay</li></ul>
            </div>
          </div>
          <div className="bills-table-wrap">
            <table className="bills-table">
              <thead>
                <tr><th></th><th>VENDOR</th><th>DUE DATE</th><th>DESCRIPTION</th><th>AMOUNT</th><th>STATUS</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="checkbox" aria-label="Select" /></td>
                  <td>ASMobbin</td>
                  <td>25 Nov 2025</td>
                  <td>Team Subscription INV0001</td>
                  <td>1.00 SGD</td>
                  <td><span className="bills-status bills-status-pending">Pending your approval</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {showToast && <div className="bills-toast">✔ You successfully submitted a bill</div>}
    </div>
  )
}
