import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import '../bills/BillsFlow.css'
import './RequestsFlow.css'

const SUB_FLOWS = [
  { path: '/flow/requests/creating-requests', icon: '➕', title: 'Creating requests', description: 'Create request: choose type (Airwallex card or Purchase order), fill description, category, amount, dates; submit.' },
  { path: '/flow/requests/requesting-a-submission', icon: '📤', title: 'Requesting a submission', description: 'Spend requests list with filters; request with status Resubmission required; submit or resubmit.' },
  { path: '/flow/requests/approving-a-request', icon: '✅', title: 'Approving a request', description: 'Pending your approval list; open request detail panel; Reject (or Require resubmission) or Approve.' },
]

export function RequestsIndex() {
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
            <li>Pending your approval <span className="bills-badge">0</span></li>
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

      <div className="requests-empty-state">
        <div className="requests-empty-state-icon">📄</div>
        <p style={{ margin: '0 0 8px', fontSize: '16px', color: 'var(--psp-text)' }}>No requests yet</p>
        <p style={{ margin: '0 0 20px', fontSize: '14px' }}>Create a spend request to get started.</p>
        <Link to={flowPath('/flow/requests/creating-requests')} className="bills-btn bills-btn-primary">Create request</Link>
      </div>

      <p className="bills-choose-sub" style={{ marginTop: '32px' }}>Choose a sub-flow to run:</p>
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
