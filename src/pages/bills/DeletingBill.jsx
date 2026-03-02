import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './BillsFlow.css'

const BILLS = [
  { id: '1', vendor: 'ASMobbin', dueDate: '25 Nov 2025', description: 'Team Subscription INV0001', amount: '1.00 SGD', status: 'Pending your approval' },
  { id: '2', vendor: '-', dueDate: '-', description: 'Draft bill', amount: '3.50 USD', status: 'Draft' },
]

export function DeletingBill() {
  const [selected, setSelected] = useState(new Set())
  const [showConfirm, setShowConfirm] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const toggle = (id) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const handleDelete = () => {
    setDeleted(true)
    setShowConfirm(false)
    setSelected(new Set())
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  const billsToShow = BILLS.filter((b) => !deleted || b.id !== '2')

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
          <ul className="bills-card-items"><li>Submit your drafts 4.54 SGD <span className="bills-badge">{deleted ? '0' : '1'}</span></li></ul>
        </div>
        <div className="bills-card">
          <h3 className="bills-card-title">Pending approval</h3>
          <ul className="bills-card-items">
            <li>Approve your bills 1.00 SGD <span className="bills-badge">1</span></li>
            <li>View all bills in approval 1.00 SGD <span className="bills-badge">1</span></li>
          </ul>
        </div>
        <div className="bills-card">
          <h3 className="bills-card-title">Awaiting payment</h3>
          <ul className="bills-card-items"><li>No bills to pay</li></ul>
        </div>
      </div>

      {selected.size > 0 && (
        <div className="bills-selected-bar">
          <span>× {selected.size} selected</span>
          <button type="button" className="bills-delete-btn" onClick={() => setShowConfirm(true)}>🗑 Delete</button>
        </div>
      )}

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
            {billsToShow.map((bill) => (
              <tr key={bill.id}>
                <td><input type="checkbox" checked={selected.has(bill.id)} onChange={() => toggle(bill.id)} aria-label="Select" /></td>
                <td>{bill.vendor}</td>
                <td>{bill.dueDate}</td>
                <td>{bill.description}</td>
                <td>{bill.amount}</td>
                <td><span className={`bills-status ${bill.status === 'Draft' ? 'bills-status-draft' : 'bills-status-pending'}`}>{bill.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showConfirm && (
        <div className="bills-modal-backdrop" onClick={() => setShowConfirm(false)}>
          <div className="bills-confirm-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="bills-confirm-title">Delete bill?</h3>
            <p className="bills-confirm-desc">This action cannot be undone.</p>
            <div className="bills-confirm-actions">
              <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setShowConfirm(false)}>Cancel</button>
              <button type="button" className="bills-btn bills-btn-danger" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}

      {showToast && <div className="bills-toast">✔ 1 bill deleted</div>}
    </div>
  )
}
