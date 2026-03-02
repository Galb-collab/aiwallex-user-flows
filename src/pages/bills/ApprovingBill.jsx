import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './BillsFlow.css'

const BILL = { vendor: 'ASMobbin', dueDate: '25 Nov 2025', description: 'Team Subscription INV0001', amount: '1.00 SGD', status: 'Pending your approval', overdue: true }

export function ApprovingBill() {
  const [showReview, setShowReview] = useState(false)
  const [approved, setApproved] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleApprove = () => {
    setApproved(true)
    setShowReview(false)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  return (
    <div className="bills-content">
      <div className="bills-connect-banner">
        <div className="bills-connect-logos"><span className="bills-connect-logo">Xero</span><span className="bills-connect-logo">QuickBooks</span></div>
        <p>By connecting your bill data we will automatically sync to your favourite accounting software for easy bill reconciliation.</p>
        <button type="button" className="bills-connect-btn">Connect</button>
      </div>

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
          <ul className="bills-card-items"><li>No drafts to submit</li></ul>
        </div>
        <div className="bills-card" onClick={() => !approved && setShowReview(true)}>
          <h3 className="bills-card-title">Pending approval</h3>
          <ul className="bills-card-items">
            <li>Approve your bills 1.00 SGD <span className="bills-badge">{approved ? '0' : '1'}</span></li>
            <li>View all bills in approval 1.00 SGD <span className="bills-badge">{approved ? '0' : '1'}</span></li>
          </ul>
        </div>
        <div className="bills-card">
          <h3 className="bills-card-title">Awaiting payment</h3>
          <ul className="bills-card-items"><li>{approved ? 'Pay bills 1.00 SGD 1' : 'No bills to pay'}</li></ul>
        </div>
      </div>

      <div className="bills-toolbar">
        <input type="search" className="bills-search" placeholder="Search by vendor, description or invoice number" />
        <input type="text" className="bills-filter" placeholder="Due date from" />
        <input type="text" className="bills-filter" placeholder="Due date to" />
        <select className="bills-filter"><option>Created by</option></select>
        <select className="bills-filter"><option>Status</option></select>
        <select className="bills-filter"><option>Billing entity</option></select>
        <button type="button" className="bills-clear">Clear filters</button>
      </div>

      <div className="bills-table-wrap">
        <table className="bills-table">
          <thead>
            <tr>
              <th><input type="checkbox" aria-label="Select all" /></th>
              <th>VENDOR</th>
              <th>DUE DATE</th>
              <th>DESCRIPTION</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bills-row-clickable" onClick={() => !approved && setShowReview(true)}>
              <td><input type="checkbox" onClick={(e) => e.stopPropagation()} aria-label="Select" /></td>
              <td>{BILL.vendor}</td>
              <td>{BILL.dueDate}{BILL.overdue && <span className="bills-overdue"> Overdue</span>}</td>
              <td>{BILL.description}</td>
              <td>{BILL.amount}</td>
              <td>
                <span className={`bills-status ${approved ? 'bills-status-awaiting' : 'bills-status-pending'}`}>
                  {approved ? 'Awaiting payment' : BILL.status}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {showReview && (
        <div className="bills-modal-backdrop" onClick={() => setShowReview(false)}>
          <div className="bills-review-modal" onClick={(e) => e.stopPropagation()}>
            <div className="bills-review-header">
              <h2 className="bills-review-title">Review bill</h2>
              <button type="button" className="bills-modal-close" onClick={() => setShowReview(false)} aria-label="Close">×</button>
            </div>
            <div className="bills-review-body">
              <div className="bills-invoice-preview">
                <div className="bills-invoice-doc">
                  <p><strong>INVOICE INV0001</strong></p>
                  <p>DATE Nov 25, 2025 · DUE On Receipt</p>
                  <p>BALANCE DUE SGD S$1.00</p>
                  <p>BILL TO Alex Smith · alexsmith.mobbin@gmail.com</p>
                  <p>Team Subscription · S$1.00 · 1 · S$1.00</p>
                  <p>TOTAL S$1.00</p>
                </div>
                <div className="bills-invoice-actions">
                  <button type="button">−</button><span>100%</span><button type="button">+</button>
                  <button type="button" aria-label="Download">↓</button><button type="button" aria-label="Delete">🗑</button>
                </div>
              </div>
              <div className="bills-review-form">
                <p className="bills-audit">Created by Sam Lee on Nov 27, 2025, 12:30 PM (UTC+08:00)</p>
                <div className="bills-form-field"><label>Bill description (required)</label><input type="text" defaultValue="Team Subscription" /></div>
                <div className="bills-form-field"><label>Vendor (required)</label><input type="text" defaultValue="ASMobbin" /> <span className="bills-status bills-status-draft">Active</span></div>
                <div className="bills-form-field"><label>Purchase order #</label><select><option>Choose a PO</option></select></div>
                <div className="bills-form-field"><label>Invoice date (required)</label><input type="text" defaultValue="2025-11-25" /></div>
                <div className="bills-form-field"><label>Due date (required)</label><input type="text" defaultValue="2025-11-25" /></div>
                <div className="bills-form-field"><label>Invoice number (required)</label><input type="text" defaultValue="INV0001" /></div>
                <div className="bills-form-field"><label>Line items</label><span>SGD Singapore Dollar · Team Subscription</span></div>
                <div className="bills-review-actions">
                  <button type="button" className="bills-btn bills-btn-secondary">Reject</button>
                  <button type="button" className="bills-btn bills-btn-primary" onClick={handleApprove}>Approve</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showToast && <div className="bills-toast">✔ You successfully approved a bill</div>}
    </div>
  )
}
