import React from 'react'
import { Link } from 'react-router-dom'

export function TransfersIndex() {
  return (
    <div className="transfers-content">
      <div className="wallet-content">
        <div className="global-accounts-header">
          <div>
            <h1 className="wallet-section-title" style={{ margin: 0 }}>Transfers</h1>
            <p className="global-accounts-desc">Create batch transfers, set up approval workflows, or manage existing workflows.</p>
          </div>
        </div>

        <div className="scheduling-transfer-options conversions-options">
          <Link to="/flow/transfers/transfer-details/1" className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">📋</span>
            <span className="scheduling-transfer-card-title">Transfer details</span>
            <span className="scheduling-transfer-card-subtitle">View transfer details and cancel pending transfers.</span>
          </Link>
          <Link to="/flow/transfers/create-batch-transfer" className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">📄</span>
            <span className="scheduling-transfer-card-title">Create a batch transfer file</span>
            <span className="scheduling-transfer-card-subtitle">Upload or create a batch file to process multiple transfers at once.</span>
          </Link>
          <Link to="/flow/transfers/transfer-approval-workflow" className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">✅</span>
            <span className="scheduling-transfer-card-title">Setting up transfer approval workflow</span>
            <span className="scheduling-transfer-card-subtitle">Configure approval rules and approvers for transfers.</span>
          </Link>
          <Link to="/flow/transfers/deactivating-workflow" className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">⏸</span>
            <span className="scheduling-transfer-card-title">Deactivating a workflow</span>
            <span className="scheduling-transfer-card-subtitle">Turn off an existing transfer approval workflow.</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
