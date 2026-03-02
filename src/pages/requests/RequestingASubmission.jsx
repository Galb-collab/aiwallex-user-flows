import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import '../bills/BillsFlow.css'
import './RequestsFlow.css'

export function RequestingASubmission() {
  const { flowPath } = useCompany()
  return (
    <div className="bills-content">
      <div className="bills-title-row">
        <div>
          <h1 className="bills-page-title">Spend requests</h1>
          <p className="bills-page-subtitle">Create spend requests and manage their progress.</p>
        </div>
        <Link to={flowPath('/flow/requests/creating-requests')} className="bills-btn bills-btn-primary">+ Create request</Link>
      </div>

      <div className="bills-cards">
        <div className="bills-card">
          <h3 className="bills-card-title">Pending approval</h3>
          <ul className="bills-card-items">
            <li>Pending your approval <span className="bills-badge">1</span></li>
            <li>All requests in approval <span className="bills-badge">0</span></li>
          </ul>
        </div>
        <div className="bills-card">
          <h3 className="bills-card-title">Pending creation</h3>
          <ul className="bills-card-items">
            <li>Pending card creation <span className="bills-badge">0</span></li>
          </ul>
        </div>
      </div>

      <div className="bills-toolbar">
        <input type="search" className="bills-search" placeholder="Search by description" aria-label="Search by description" />
        <select className="bills-filter"><option>Category</option></select>
        <select className="bills-filter"><option>Requested by</option></select>
        <select className="bills-filter"><option>Request type</option></select>
        <select className="bills-filter"><option>Status</option></select>
      </div>

      <div className="bills-table-wrap">
        <table className="bills-table">
          <thead>
            <tr>
              <th></th>
              <th>DATE</th>
              <th>REQUEST TYPE</th>
              <th>DESCRIPTION</th>
              <th>REQUESTED BY</th>
              <th>AMOUNT</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" aria-label="Select" /></td>
              <td>2025-11-27</td>
              <td>Card</td>
              <td>Subscriptions <span style={{ display: 'block', fontSize: '12px', color: 'var(--psp-text-muted)' }}>Software subscriptions</span></td>
              <td>Sam Lee</td>
              <td>1,000.00 SGD total</td>
              <td><span className="requests-status-pending">Pending your approval</span></td>
            </tr>
            <tr>
              <td><input type="checkbox" aria-label="Select" /></td>
              <td>2025-11-27</td>
              <td>Card</td>
              <td>Team Expenses <span style={{ display: 'block', fontSize: '12px', color: 'var(--psp-text-muted)' }}>General expenses</span></td>
              <td>Sam Lee</td>
              <td>1,000.00 SGD total</td>
              <td><span className="requests-status-resubmission">Resubmission required</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="bills-choose-sub" style={{ marginTop: '24px' }}>Requesting a submission: requests with &quot;Resubmission required&quot; can be edited and resubmitted from the list or detail view.</p>
    </div>
  )
}
