import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import '../bills/BillsFlow.css'
import './VendorsFlow.css'

const SUB_FLOWS = [
  { path: '/flow/vendors/adding-a-vendor', icon: '➕', title: 'Adding a vendor', description: 'From Add new bill: no vendors state, open Create vendor modal (General/Documents), then vendor appears as ASMobbin (Active).' },
  { path: '/flow/vendors/vendor-details', icon: '📋', title: 'Vendor details', description: 'Vendor panel with General, Documents, Bills tabs; basic info, contacts, bank account details; Manage vendor, Save changes.' },
  { path: '/flow/vendors/uploading-a-file', icon: '📄', title: 'Uploading a file', description: 'Vendor Documents tab: drop zone, supported files PDF/Word/JPG/PNG etc max 10MB, Choose file; list uploaded files.' },
  { path: '/flow/vendors/adding-bank-account-details', icon: '🏦', title: 'Adding bank account details', description: 'Add bank account details modal: New bank detail or Copy from existing transfer recipient; form or select then Add.' },
]

export function VendorsIndex() {
  const { flowPath } = useCompany()
  return (
    <div className="bills-content">
      <div className="bills-connect-banner">
        <div className="bills-connect-logos">
          <span className="bills-connect-logo">Xero</span>
          <span className="bills-connect-logo">QuickBooks</span>
        </div>
        <div className="bills-connect-content">
          <h3 className="bills-connect-title">Connect to your favourite accounting software</h3>
          <p className="bills-connect-desc">Connect your vendor data to seamlessly sync with your preferred accounting provider.</p>
        </div>
        <button type="button" className="bills-connect-btn">Connect</button>
      </div>

      <div className="bills-title-row">
        <div>
          <h1 className="bills-page-title">Vendors</h1>
          <p className="bills-page-subtitle">Create and manage approved vendors for your organisation.</p>
        </div>
        <Link to={flowPath('/flow/vendors/adding-a-vendor')} className="bills-btn bills-btn-primary">+ New Vendor</Link>
      </div>

      <div className="bills-cards">
        <div className="bills-card">
          <h3 className="bills-card-title">Submissions</h3>
          <ul className="bills-card-items"><li>No drafts to submit</li></ul>
        </div>
        <div className="bills-card">
          <h3 className="bills-card-title">Pending your approval</h3>
          <ul className="bills-card-items"><li>No vendors to approve</li></ul>
        </div>
      </div>

      <div className="bills-toolbar">
        <input type="search" className="bills-search" placeholder="Search by vendor name" aria-label="Search by vendor name" />
        <select className="bills-filter" aria-label="Vendor owner">
          <option>Vendor owner</option>
        </select>
        <button type="button" className="bills-filter">4 statuses ×</button>
      </div>

      <div className="vendors-table-wrap">
        <table className="vendors-table">
          <thead>
            <tr>
              <th></th>
              <th>VENDOR NAME ↑</th>
              <th>VENDOR OWNER</th>
              <th>PAYMENT INFO</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" aria-label="Select" /></td>
              <td><Link to={flowPath('/flow/vendors/vendor-details')} className="vendors-name-link">Alex Smith</Link></td>
              <td>-</td>
              <td>Local</td>
              <td><span className="vendors-status-active">Active</span></td>
            </tr>
            <tr>
              <td><input type="checkbox" aria-label="Select" /></td>
              <td><Link to={flowPath('/flow/vendors/vendor-details')} className="vendors-name-link">ASMobbin</Link></td>
              <td>-</td>
              <td><span className="vendors-payment-missing">⚠ Missing</span></td>
              <td><span className="vendors-status-active">Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="bills-choose-sub">Choose a sub-flow to run:</p>
      <div className="bills-subflow-cards">
        {SUB_FLOWS.map((f) => (
          <Link key={f.path} to={flowPath(f.path)} className="bills-subflow-card">
            <span className="bills-subflow-icon">{f.icon}</span>
            <h2 className="bills-subflow-title">{f.title}</h2>
            <p className="bills-subflow-desc">{f.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
