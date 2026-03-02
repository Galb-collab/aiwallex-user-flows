import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

const SAMPLE_RECEIPTS = [
  { name: 'Receipt-1327386341-1762510702323.pdf', date: 'Nov 13, 6:26 PM', status: 'Match found' },
]

export function RevolutReceipts() {
  const { flowPath } = useCompany()

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step">
        <Link to={flowPath('/flow/revolut-dashboard')} className="revolut-step-back">←</Link>
        <h1 className="revolut-step-title">My receipts</h1>
        <p className="revolut-step-subtitle">
          You can send receipts from revolut.com to revolut.com to match them to outstanding expenses or request reimbursements.
        </p>
        <div className="revolut-receipt-upload">
          <div className="revolut-receipt-dropzone">
            <span className="revolut-receipt-icon">📄</span>
            <p>Drag and drop or click to scan a receipt</p>
            <span className="revolut-receipt-hint">Max file size 6MB</span>
          </div>
        </div>
        <div className="revolut-receipt-list">
          {SAMPLE_RECEIPTS.map((r, i) => (
            <div key={i} className="revolut-receipt-item">
              <span className="revolut-receipt-file-icon">📄</span>
              <div className="revolut-receipt-info">
                <span className="revolut-receipt-name">{r.name}</span>
                <span className="revolut-receipt-meta">{r.date} · <span className="revolut-receipt-status">{r.status}</span></span>
              </div>
              <button type="button" className="revolut-receipt-delete" aria-label="Delete">🗑</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
