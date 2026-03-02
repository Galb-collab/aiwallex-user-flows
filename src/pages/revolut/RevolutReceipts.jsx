import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutReceipts() {
  const { flowPath } = useCompany()

  return (
    <div className="revolut-flow-layout">
    <div className="revolut-step">
      <Link to={flowPath('/flow/revolut-dashboard')} className="revolut-step-back">←</Link>
      <h1 className="revolut-step-title">My receipts</h1>
      <p className="revolut-step-subtitle">
        You can send receipts to revolut.com to match them to outstanding expenses or request reimbursements.
      </p>
      <div className="revolut-receipt-upload">
        <div className="revolut-receipt-dropzone">
          <span className="revolut-receipt-icon">📄</span>
          <p>Drag and drop or click to scan a receipt</p>
          <span className="revolut-receipt-hint">Max file size 6MB</span>
        </div>
      </div>
    </div>
    </div>
  )
}
