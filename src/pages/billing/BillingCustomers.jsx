import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import '../bills/BillsFlow.css'
import '../BillingFlow.css'
import './BillingCustomers.css'

export function BillingCustomers() {
  const { flowPath } = useCompany()

  return (
    <div className="billing-main billing-customers">
      <div className="billing-customers-title-row">
        <div>
          <h1 className="billing-title">Customers</h1>
          <p className="billing-customers-subtitle">Create and manage your customers.</p>
        </div>
        <Link to={flowPath('/flow/billing/creating-a-customer')} className="billing-btn billing-btn-primary">
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
            <tr>
              <td>
                <Link to={flowPath('/flow/billing/customer-details')} className="billing-customer-name-link">
                  Alex Smith
                </Link>
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
    </div>
  )
}
