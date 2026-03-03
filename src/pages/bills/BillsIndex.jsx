import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './BillsFlow.css'

const SUB_FLOWS = [
  { path: '/flow/bills/approving-a-bill', icon: '✅', title: 'Approving a bill', description: 'Bills list with Pending approval, open Review bill (invoice + form), Reject or Approve; success toast.' },
  { path: '/flow/bills/bill-details', icon: '📄', title: 'Bill details', description: 'Pay bill view: invoice preview, amount, vendor, line items, comments, timeline (Created, Submitted, Approved).' },
  { path: '/flow/bills/deleting-a-bill', icon: '🗑', title: 'Deleting a bill', description: 'Select a bill in the table, delete from toolbar, confirm; success toast "1 bill deleted".' },
  { path: '/flow/bills/adding-a-bill', icon: '➕', title: 'Adding a bill', description: 'Add new bill: invoice preview + form (vendor, dates, line items), Save draft or Submit bill; success toast.' },
]

export function BillsIndex() {
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
          <p className="bills-connect-desc">By connecting your bill data we will automatically sync to your favourite accounting software for easy bill reconciliation.</p>
        </div>
        <button type="button" className="bills-connect-btn">Connect</button>
      </div>

      <div className="bills-title-row">
        <div>
          <h1 className="bills-page-title">Bills</h1>
          <p className="bills-page-subtitle">Create and manage bills and payments.</p>
        </div>
        <Link to={flowPath('/flow/bills/adding-a-bill')} className="bills-btn bills-btn-primary">+ New bill</Link>
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
