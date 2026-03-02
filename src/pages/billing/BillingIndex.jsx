import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../BillingFlow.css'

export function BillingIndex() {
  const [createOpen, setCreateOpen] = useState(false)

  return (
    <div className="billing-main">
      <h1 className="billing-title">Billing</h1>

      <div className="billing-toolbar">
        <select className="billing-filter" aria-label="Currency">
          <option>🇺🇸 USD</option>
        </select>
        <select className="billing-filter" aria-label="Date range">
          <option>Last 30 days</option>
        </select>
        <select className="billing-filter" aria-label="Billing entity">
          <option>Billing entity</option>
        </select>
        <button type="button" className="billing-reset">Reset</button>
        <div className="billing-create-wrap">
          <button
            type="button"
            className="billing-btn billing-btn-primary"
            onClick={() => setCreateOpen(!createOpen)}
            aria-expanded={createOpen}
            aria-haspopup="true"
          >
            Create new ▾
          </button>
          {createOpen && (
            <div className="billing-create-dropdown">
              <Link to="/flow/billing/creating-a-customer" className="billing-create-item" onClick={() => setCreateOpen(false)}>Customer</Link>
              <Link to="/flow/billing/creating-a-product" className="billing-create-item" onClick={() => setCreateOpen(false)}>Product</Link>
              <Link to="/flow/billing/creating-an-invoice" className="billing-create-item" onClick={() => setCreateOpen(false)}>Invoice</Link>
              <a href="#subscription" className="billing-create-item" onClick={() => setCreateOpen(false)}>Subscription</a>
            </div>
          )}
        </div>
      </div>

      <div className="billing-metrics">
        <div className="billing-metric-card">
          <h3 className="billing-metric-title">Annual recurring revenue <span className="billing-metric-info" title="Info">ℹ</span></h3>
          <p className="billing-metric-value">0.00 USD</p>
        </div>
        <div className="billing-metric-card">
          <h3 className="billing-metric-title">Active customers <span className="billing-metric-info" title="Info">ℹ</span></h3>
          <p className="billing-metric-value">0</p>
        </div>
        <div className="billing-metric-card">
          <h3 className="billing-metric-title">Average revenue per customer <span className="billing-metric-info" title="Info">ℹ</span></h3>
          <p className="billing-metric-value">0.00 USD</p>
        </div>
        <div className="billing-metric-card">
          <h3 className="billing-metric-title">Lifetime customer value <span className="billing-metric-info" title="Info">ℹ</span></h3>
          <p className="billing-metric-value">0.00 USD</p>
        </div>
      </div>

      <div className="billing-promo">
        <div className="billing-promo-content">
          <span className="billing-promo-badge">New</span>
          <h2 className="billing-promo-title">Maximise your global revenue with Airwallex Billing</h2>
          <p className="billing-promo-desc">Manage the end-to-end billing process from simple one-off invoices and subscriptions to advanced usage-based billing.</p>
          <a href="#read-more" className="billing-promo-link">Read more ↗</a>
        </div>
        <div className="billing-promo-visual">
          <div className="billing-promo-placeholder">📊 Invoice · MRR chart · Subscriptions</div>
        </div>
      </div>

      <div className="billing-charts">
        <div className="billing-chart-card">
          <h3 className="billing-chart-title">Monthly recurring revenue</h3>
          <p className="billing-chart-avg">Average for period 0.00 USD</p>
          <div className="billing-chart-placeholder" />
        </div>
        <div className="billing-chart-card">
          <h3 className="billing-chart-title">Active customers</h3>
          <p className="billing-chart-avg">Average for period 0.00</p>
          <div className="billing-chart-placeholder" />
        </div>
      </div>

      <div className="billing-charts billing-charts-row2">
        <div className="billing-chart-card">
          <h3 className="billing-chart-title">Customer churn rate <span className="billing-metric-info" title="Info">ℹ</span></h3>
          <p className="billing-chart-avg">Average for period 0.00%</p>
          <div className="billing-chart-placeholder" />
        </div>
        <div className="billing-chart-card">
          <h3 className="billing-chart-title">Subscriptions status</h3>
          <p className="billing-chart-avg">Active subscriptions 0</p>
          <div className="billing-chart-donut-wrap">
            <div className="billing-chart-donut" />
            <ul className="billing-chart-legend">
              <li><span className="billing-legend-dot billing-legend-pending" /> Pending: 0</li>
              <li><span className="billing-legend-dot billing-legend-trial" /> In trial: 0</li>
              <li><span className="billing-legend-dot billing-legend-active" /> Active: 0</li>
              <li><span className="billing-legend-dot billing-legend-unpaid" /> Unpaid: 0</li>
              <li><span className="billing-legend-dot billing-legend-cancelled" /> Cancelled: 0</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
