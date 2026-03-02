import React from 'react'
import { Link } from 'react-router-dom'
import '../bills/BillsFlow.css'
import '../BillingFlow.css'
import './BillingCustomers.css'
import './BillingSubscriptions.css'

export function BillingSubscriptions() {
  return (
    <div className="billing-main billing-customers">
      <div className="billing-customers-title-row">
        <div>
          <h1 className="billing-title">Subscriptions</h1>
          <p className="billing-customers-subtitle">Create and manage subscriptions</p>
        </div>
        <button type="button" className="billing-btn billing-btn-primary">
          + New subscription
        </button>
      </div>

      <div className="billing-toolbar billing-subscriptions-toolbar">
        <input
          type="search"
          className="billing-customers-search"
          placeholder="Search by customer or subscription ID"
          aria-label="Search by customer or subscription ID"
        />
        <select className="billing-filter" aria-label="Subscription status">
          <option value="">Subscription status</option>
        </select>
        <select className="billing-filter" aria-label="Subscription product">
          <option value="">Subscription product</option>
        </select>
        <input type="date" className="billing-filter" aria-label="Subscription start date from" />
        <input type="date" className="billing-filter" aria-label="Date to" />
      </div>

      <div className="billing-customers-table-wrap">
        <table className="billing-customers-table">
          <thead>
            <tr>
              <th>CUSTOMER</th>
              <th>STATUS</th>
              <th>SUBSCRIPTION PRODUCT</th>
              <th>START DATE</th>
              <th>TRIAL DURATION</th>
              <th>BILLING DURATION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6}>
                <div className="billing-subscriptions-empty">
                  <div className="billing-subscriptions-empty-icon" aria-hidden>🪪</div>
                  <h3 className="billing-subscriptions-empty-title">Create and manage subscriptions</h3>
                  <p className="billing-subscriptions-empty-desc">You can create subscriptions that auto-generate invoices</p>
                  <button type="button" className="billing-btn billing-btn-primary">+ New subscription</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
