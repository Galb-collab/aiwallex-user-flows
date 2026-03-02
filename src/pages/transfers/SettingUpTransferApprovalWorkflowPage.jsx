import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function SettingUpTransferApprovalWorkflowPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [workflowName, setWorkflowName] = useState('')
  const [threshold, setThreshold] = useState('')
  const [approverEmail, setApproverEmail] = useState('')

  const handleClose = () => navigate('/flow/transfers')

  if (step === 1) {
    return (
      <div className="wallet-content creating-conversion">
        <Link to="/flow/transfers" className="wallet-back-link">← Back</Link>
        <h1 className="wallet-section-title">Setting up transfer approval workflow</h1>
        <p className="creating-conversion-desc">Configure when transfers require approval and who can approve them.</p>

        <div className="creating-conversion-form" style={{ marginTop: 24 }}>
          <div className="scheduling-transfer-field">
            <label>Workflow name</label>
            <input
              type="text"
              placeholder="e.g. High-value transfers"
              value={workflowName}
              onChange={(e) => setWorkflowName(e.target.value)}
            />
          </div>
          <div className="scheduling-transfer-field">
            <label>Require approval for transfers above (SGD)</label>
            <input
              type="number"
              placeholder="e.g. 10000"
              value={threshold}
              onChange={(e) => setThreshold(e.target.value)}
              min="0"
              step="any"
            />
          </div>
          <div className="scheduling-transfer-field">
            <label>Approver email</label>
            <input
              type="email"
              placeholder="approver@company.com"
              value={approverEmail}
              onChange={(e) => setApproverEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <button type="button" className="wallet-btn" onClick={handleClose}>Cancel</button>
          <button
            type="button"
            className="wallet-btn wallet-btn-primary"
            onClick={() => setStep(2)}
            disabled={!workflowName.trim() || !threshold || !approverEmail.trim()}
          >
            Review and create
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="wallet-content creating-conversion">
      <div className="creating-conversion-success">
        <span className="creating-conversion-success-icon">✓</span>
        <h2 className="wallet-section-title">Approval workflow created</h2>
        <p className="creating-conversion-success-text">
          Transfers above {threshold || '0'} SGD will now require approval from {approverEmail || 'the approver'}.
        </p>
        <Link to="/flow/transfers" className="wallet-btn wallet-btn-primary">Back to Transfers</Link>
      </div>
    </div>
  )
}
