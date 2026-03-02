import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../bills/BillsFlow.css'
import '../BillingFlow.css'
import './BillingCustomers.css'

export function CustomerDetails() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('overview')
  const [createDropdownOpen, setCreateDropdownOpen] = useState(false)

  return (
    <div className="billing-main billing-customers">
      <div className="billing-customers-title-row">
        <div>
          <h1 className="billing-title">Customers</h1>
          <p className="billing-customers-subtitle">Create and manage your customers.</p>
        </div>
        <Link to="/flow/billing/creating-a-customer" className="billing-btn billing-btn-primary">
          + New customer
        </Link>
      </div>

      <div className="billing-toolbar">
        <input
          type="search"
          className="billing-customers-search"
          placeholder="Search by customer name, ID, email, or phone number"
          aria-label="Search by customer name, ID, email, or phone number"
        />
        <select className="billing-filter" aria-label="Country/region">
          <option value="">Country/region</option>
          <option>Singapore</option>
          <option>United States</option>
        </select>
      </div>

      <div className="billing-customers-table-wrap">
        <table className="billing-customers-table">
          <thead>
            <tr>
              <th>CUSTOMER</th>
              <th>EMAIL</th>
              <th>PHONE NUMBER</th>
              <th>COUNTRY/REGION</th>
              <th>CREATED DATE</th>
              <th aria-hidden />
            </tr>
          </thead>
          <tbody>
            <tr style={{ background: '#faf5ff' }}>
              <td>
                <span className="billing-customer-name-link" style={{ pointerEvents: 'none', color: 'var(--psp-text)' }}>
                  Alex Smith
                </span>
                <div className="billing-customer-id">bcus_sgpd68bn5hdd2p...</div>
              </td>
              <td>alexsmith.mobbin@gmail.com</td>
              <td>-</td>
              <td>Singapore</td>
              <td>2025-11-27</td>
              <td>
                <button type="button" className="billing-customer-row-menu" aria-label="More options">⋯</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Customer details drawer */}
      <div className="billing-customer-drawer-backdrop" onClick={() => navigate('/flow/billing/customers')} aria-hidden />
      <div className="billing-customer-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="billing-customer-drawer-header">
          <div className="billing-customer-drawer-title-wrap">
            <span className="billing-customer-drawer-icon" aria-hidden>👤</span>
            <div>
              <p className="billing-customer-drawer-label">Customer</p>
              <p className="billing-customer-drawer-name">Alex Smith</p>
            </div>
          </div>
          <button
            type="button"
            className="bills-modal-close"
            onClick={() => navigate('/flow/billing/customers')}
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="billing-customer-drawer-tabs">
          <button
            type="button"
            className={`billing-customer-drawer-tab ${tab === 'overview' ? 'active' : ''}`}
            onClick={() => setTab('overview')}
          >
            Overview
          </button>
          <button
            type="button"
            className={`billing-customer-drawer-tab ${tab === 'subscriptions' ? 'active' : ''}`}
            onClick={() => setTab('subscriptions')}
          >
            Subscriptions
          </button>
          <button
            type="button"
            className={`billing-customer-drawer-tab ${tab === 'invoices' ? 'active' : ''}`}
            onClick={() => setTab('invoices')}
          >
            Invoices
          </button>
        </div>

        <div className="billing-customer-drawer-body">
          {tab === 'overview' && (
            <>
              <section className="billing-customer-drawer-section">
                <h3 className="billing-customer-drawer-section-title">Customer information</h3>
                <dl className="billing-customer-drawer-dl">
                  <dt>Customer name</dt>
                  <dd>Alex Smith</dd>
                  <dt>Customer type</dt>
                  <dd>Individual</dd>
                  <dt>Tax ID</dt>
                  <dd>-</dd>
                  <dt>Email address</dt>
                  <dd>alexsmith.mobbin@gmail.com</dd>
                  <dt>Phone number</dt>
                  <dd>-</dd>
                  <dt>Billing address</dt>
                  <dd>
                    75 Ayer Rajah Crescent<br />
                    SG, SG 139953<br />
                    Singapore
                  </dd>
                </dl>
              </section>
              <section className="billing-customer-drawer-section">
                <h3 className="billing-customer-drawer-section-title">Payment methods</h3>
                <div className="billing-customer-drawer-empty">No payment methods found</div>
              </section>
              <section className="billing-customer-drawer-section">
                <h3 className="billing-customer-drawer-section-title">Additional information</h3>
                <dl className="billing-customer-drawer-dl">
                  <dt>Customer ID</dt>
                  <dd>
                    bcus_sgpd68bn5hdd2p9gij9
                    <button type="button" className="billing-customer-drawer-copy" aria-label="Copy">📋 Copy</button>
                  </dd>
                  <dt>Description</dt>
                  <dd>-</dd>
                  <dt>Nickname</dt>
                  <dd>-</dd>
                  <dt>Default billing entity</dt>
                  <dd>-</dd>
                </dl>
              </section>
            </>
          )}

          {tab === 'subscriptions' && (
            <>
              <div className="billing-customers-subscriptions-toolbar">
                <input
                  type="search"
                  className="billing-customers-subscriptions-search"
                  placeholder="Search by subscription ID"
                  aria-label="Search by subscription ID"
                />
                <input type="date" className="billing-filter" aria-label="Subscription start" />
                <input type="date" className="billing-filter" aria-label="Date to" />
                <select className="billing-filter" aria-label="Subscription status">
                  <option value="">Subscription status</option>
                </select>
                <select className="billing-filter" aria-label="Subscription product">
                  <option value="">Subscription product</option>
                </select>
              </div>
              <table className="billing-customers-subscriptions-table">
                <thead>
                  <tr>
                    <th>STATUS</th>
                    <th>SUBSCRIPTION PRODUCT</th>
                    <th>START DATE</th>
                    <th>TRIAL DURATION</th>
                    <th>BILLING DURATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={5}>
                      <div className="billing-customers-empty-state">
                        <div className="billing-customers-empty-state-icon" aria-hidden>📋</div>
                        <p>Create and manage subscriptions</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}

          {tab === 'invoices' && (
            <div className="billing-customers-empty-state">
              <div className="billing-customers-empty-state-icon" aria-hidden>📄</div>
              <p>No invoices yet</p>
            </div>
          )}
        </div>

        <div className="billing-customer-drawer-footer">
          <button type="button" className="bills-btn bills-btn-secondary">
            Edit
          </button>
          <div className="billing-customer-drawer-create-wrap">
            {createDropdownOpen && (
              <div className="billing-customer-drawer-create-dropdown">
                <Link
                  to="/flow/billing/creating-an-invoice"
                  state={{ fromCustomerDetails: true }}
                  onClick={() => setCreateDropdownOpen(false)}
                  className="billing-customer-drawer-create-item"
                >
                  + New Invoice
                </Link>
                <button type="button" onClick={() => setCreateDropdownOpen(false)}>+ New Subscription</button>
              </div>
            )}
            <button
              type="button"
              className="bills-btn bills-btn-primary"
              onClick={() => setCreateDropdownOpen(!createDropdownOpen)}
              aria-expanded={createDropdownOpen}
            >
              Create ▾
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
