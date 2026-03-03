import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function SettingUpTransferApprovalWorkflowPage() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [step, setStep] = useState(0)
  const [workflowName, setWorkflowName] = useState('')
  const [threshold, setThreshold] = useState('')
  const [approverEmail, setApproverEmail] = useState('')

  const handleClose = () => navigate(flowPath('/flow/transfers'))

  if (step === 0) {
    return (
      <div className="wallet-content creating-conversion transfers-approval-page">
        <h1 className="wallet-section-title">Transfer approvals</h1>
        <p className="creating-conversion-desc">
          Existing transfers pending approval can be viewed in <Link to={flowPath('/flow/transfers')} className="transfers-approval-link">Transfers</Link>.
        </p>

        <div className="transfers-approval-cards">
          <div className="transfers-approval-card">
            <h3 className="transfers-approval-card-title">Approval workflow</h3>
            <p className="transfers-approval-card-desc">
              Route transfers and batch transfers through approval layers based on transfer amounts. Users or roles with the Create / Edit permission to Transfers can be assigned as approvers in the flow.
            </p>
            <button type="button" className="transfers-approval-setup-btn" onClick={() => setStep(1)}>+ Set up transfer approval workflow</button>
          </div>
          <div className="transfers-approval-card">
            <h3 className="transfers-approval-card-title">Workflow change policy</h3>
            <p className="transfers-approval-card-desc">
              Any changes that impact the approval workflow, including activation, edits and deactivation, will require approval. <a href="#learn" className="transfers-approval-link">Learn more</a>
            </p>
            <p className="transfers-approval-card-desc">
              Changes to the workflow will require approval from the following Owner: <a href="#owner" className="transfers-approval-link">Sam Lee</a>
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="wallet-content creating-conversion">
        <button type="button" className="wallet-back-link" onClick={() => setStep(0)}>← Back</button>
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
        <Link to={flowPath('/flow/transfers')} className="wallet-btn wallet-btn-primary">Back to Transfers</Link>
      </div>
    </div>
  )
}
