import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import '../bills/BillsFlow.css'
import './RequestsFlow.css'

export function ApprovingARequest() {
  const navigate = useNavigate()
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
              <td><input type="checkbox" aria-label="Select" onClick={e => e.stopPropagation()} /></td>
              <td>2025-11-27</td>
              <td>Card</td>
              <td>Team Expenses <span style={{ display: 'block', fontSize: '12px', color: 'var(--psp-text-muted)' }}>General expenses</span></td>
              <td>Sam Lee</td>
              <td>1,000.00 SGD total</td>
              <td><span className="requests-status-pending">Pending your approval</span></td>
            </tr>
            <tr>
              <td><input type="checkbox" aria-label="Select" /></td>
              <td>2025-11-27</td>
              <td>Card</td>
              <td>Subscriptions <span style={{ display: 'block', fontSize: '12px', color: 'var(--psp-text-muted)' }}>Software subscriptions</span></td>
              <td>Sam Lee</td>
              <td>1,000.00 SGD total</td>
              <td><span className="requests-status-resubmission">Resubmission required</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Request detail drawer - always visible in this sub-flow to show approval UI */}
      <div className="requests-drawer-backdrop" onClick={() => navigate(flowPath('/flow/requests'))} aria-hidden />
      <div className="requests-drawer" onClick={e => e.stopPropagation()}>
        <div className="requests-drawer-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <h2 className="requests-drawer-title">Spend request</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
                <span className="requests-drawer-title" style={{ fontSize: '16px' }}>Team Expenses</span>
                <span className="requests-status-pending">Pending your approval</span>
              </div>
              <p className="requests-drawer-subtitle" style={{ marginTop: '4px' }}>Card request • Submitted by Sam Lee on 2025-11-27</p>
            </div>
            <button type="button" className="bills-modal-close" onClick={() => navigate(flowPath('/flow/requests'))} aria-label="Close">×</button>
          </div>
        </div>
        <div className="requests-drawer-body">
          <div className="requests-drawer-section">
            <p className="requests-drawer-section-title">Requested amount</p>
            <p style={{ margin: 0, fontSize: '14px' }}>1,000.00 SGD total</p>
          </div>
          <div className="requests-drawer-section">
            <p className="requests-drawer-section-title">Start and end date</p>
            <p style={{ margin: 0, fontSize: '14px', color: 'var(--psp-text-muted)' }}>Not set</p>
          </div>
          <div className="requests-drawer-section">
            <p className="requests-drawer-section-title">Requested for</p>
            <p style={{ margin: 0, fontSize: '14px' }}>Sam Lee</p>
          </div>
          <div className="requests-drawer-section">
            <p className="requests-drawer-section-title">Category</p>
            <p style={{ margin: 0, fontSize: '14px' }}>Software subscriptions</p>
          </div>
          <div className="requests-drawer-section">
            <p className="requests-drawer-section-title">Comments</p>
            <input type="text" placeholder="Enter a comment" style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--psp-border)', borderRadius: '8px', fontSize: '14px' }} />
            <button type="button" className="bills-btn bills-btn-secondary" style={{ marginTop: '8px' }}>Add comment</button>
          </div>
          <div className="requests-drawer-section">
            <p className="requests-drawer-section-title">Attachments</p>
            <div className="requests-upload-zone">
              <p style={{ margin: '0 0 8px', fontSize: '14px' }}>Drop or upload your files here</p>
              <p style={{ marginBottom: '12px', fontSize: '13px', color: 'var(--psp-text-muted)' }}>Supported files: PDF, Word, JPG, JPEG, PNG, BMP and max 10MB size</p>
              <button type="button" className="bills-btn bills-btn-primary">Choose file</button>
            </div>
          </div>
        </div>
        <div className="requests-drawer-footer">
          <div className="requests-reject-dropdown">
            <button type="button" className="bills-btn bills-btn-secondary">Reject ▾</button>
          </div>
          <button type="button" className="bills-btn bills-btn-primary">Approve</button>
        </div>
      </div>
    </div>
  )
}
