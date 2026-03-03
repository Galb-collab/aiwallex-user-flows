import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './BillsFlow.css'

export function BillDetails() {
  const { flowPath } = useCompany()

  return (
    <div className="bills-content bills-pay-view">
      <div className="bills-pay-header">
        <h1 className="bills-pay-title">Pay bill</h1>
        <Link to={flowPath('/flow/bills')} className="bills-modal-close" aria-label="Close">×</Link>
      </div>

      <div className="bills-pay-body">
        <div className="bills-invoice-preview bills-invoice-left">
          <div className="bills-invoice-doc">
            <p><strong>INVOICE INV0001</strong></p>
            <p>DATE Nov 25, 2025 · DUE On Receipt · BALANCE DUE SGD S$1.00</p>
            <p>BILL TO Alex Smith · alexsmith.mobbin@gmail.com</p>
            <table className="bills-invoice-table">
              <thead><tr><th>DESCRIPTION</th><th>RATE</th><th>QTY</th><th>AMOUNT</th></tr></thead>
              <tbody><tr><td>Team Subscription</td><td>S$1.00</td><td>1</td><td>S$1.00</td></tr></tbody>
            </table>
            <p>TOTAL S$1.00 · BALANCE DUE SGD S$1.00</p>
            <p>DATE SIGNED Nov 27, 2025</p>
          </div>
          <div className="bills-invoice-actions">
            <button type="button">−</button><span>100%</span><button type="button">+</button>
            <button type="button" aria-label="Download">↓</button>
          </div>
        </div>

        <div className="bills-details-panel">
          <p className="bills-detail-back"><Link to={flowPath('/flow/bills')}>← Back to payment</Link></p>
          <h2 className="bills-detail-inv">INV0001</h2>
          <span className="bills-status bills-status-awaiting">Awaiting payment</span>
          <p className="bills-detail-sync">This bill will sync once it is approved.</p>
          <dl className="bills-detail-dl">
            <dt>Amount due</dt><dd><strong>1.00 SGD</strong></dd>
            <dt>Bill total</dt><dd>1.00 SGD</dd>
            <dt>Vendor</dt><dd>ASMobbin</dd>
            <dt>Billing entity</dt><dd>MOBBIN PTE. LTD.</dd>
            <dt>Due date</dt><dd>25 Nov 2025 (Overdue)</dd>
            <dt>Description</dt><dd>Team Subscription</dd>
          </dl>
          <div className="bills-line-items">
            <h3 className="bills-detail-heading">Line items</h3>
            <table className="bills-table">
              <thead><tr><th>Description</th><th>Quantity</th><th>Price</th><th>Amount</th></tr></thead>
              <tbody><tr><td>Team Subscription</td><td>1</td><td>1.00</td><td>1.00</td></tr></tbody>
            </table>
            <p>Tax 0.00 SGD · Amount (excl. tax) 1.00 SGD</p>
          </div>
          <div className="bills-comments">
            <h3 className="bills-detail-heading">Comments</h3>
            <p className="bills-comment">Nov 27, 2025, 12:30 PM (UTC+08:00) Sam Lee Check for subscription first</p>
          </div>
          <div className="bills-timeline">
            <h3 className="bills-detail-heading">Timeline</h3>
            <ul className="bills-timeline-list">
              <li><span className="bills-tl-icon">✓</span> Nov 27, 2025, 12:30 PM · Sam Lee · Created bill</li>
              <li><span className="bills-tl-icon">✈</span> Nov 27, 2025, 12:30 PM · Sam Lee · Submitted bill</li>
              <li><span className="bills-tl-icon">✓</span> Nov 27, 2025, 12:31 PM · Sam Lee · Approved bill</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
