import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

const MOCK_TRANSFER = {
  id: '1',
  status: 'Pending',
  amount: '1,000.00',
  currency: 'SGD',
  recipient: 'Acme Corp',
  recipientAccount: '****1234',
  createdAt: '2025-02-18',
  scheduledFor: '2025-02-20',
  reference: 'INV-2025-001',
}

export function TransferDetailsPage() {
  const { transferId } = useParams()
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [cancelStep, setCancelStep] = useState(0) // 0: hidden, 1: confirm, 2: success
  const [cancelReason, setCancelReason] = useState('')

  const transfer = MOCK_TRANSFER

  const handleCancelClick = () => setCancelStep(1)
  const handleCancelConfirm = () => setCancelStep(2)
  const handleCancelClose = () => {
    setCancelStep(0)
    setCancelReason('')
  }
  const handleBackAfterCancel = () => navigate(flowPath('/flow/transfers'))

  return (
    <div className="transfers-content">
      <div className="wallet-content">
        <Link to={flowPath('/flow/transfers')} className="wallet-back-link">← Back to Transfers</Link>
        <h1 className="wallet-section-title">Transfer details</h1>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Transfer #{transfer.id}</h3>
          <div className="wallet-overview-row">
            <span>Status</span>
            <span><strong>{transfer.status}</strong></span>
          </div>
          <div className="wallet-overview-row">
            <span>Amount</span>
            <span><strong>{transfer.amount} {transfer.currency}</strong></span>
          </div>
          <div className="wallet-overview-row">
            <span>Recipient</span>
            <span>{transfer.recipient}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Account</span>
            <span>{transfer.recipientAccount}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Created</span>
            <span>{transfer.createdAt}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Scheduled for</span>
            <span>{transfer.scheduledFor}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Reference</span>
            <span>{transfer.reference}</span>
          </div>
        </div>

        {transfer.status === 'Pending' && cancelStep === 0 && (
          <div style={{ marginTop: 24 }}>
            <button type="button" className="wallet-btn" style={{ borderColor: '#dc2626', color: '#dc2626' }} onClick={handleCancelClick}>
              Cancel transfer
            </button>
          </div>
        )}

        {cancelStep === 1 && (
          <div className="wallet-overview-card" style={{ marginTop: 24, maxWidth: 480 }}>
            <h3 className="wallet-card-title">Cancelling a transfer</h3>
            <p className="creating-conversion-desc">Are you sure you want to cancel this transfer? This action cannot be undone.</p>
            <div className="scheduling-transfer-field" style={{ marginTop: 16 }}>
              <label>Reason for cancellation (optional)</label>
              <input
                type="text"
                placeholder="e.g. Duplicate payment"
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
              />
            </div>
            <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
              <button type="button" className="wallet-btn" onClick={handleCancelClose}>Keep transfer</button>
              <button type="button" className="wallet-btn" style={{ background: '#dc2626', borderColor: '#dc2626' }} onClick={handleCancelConfirm}>
                Cancel transfer
              </button>
            </div>
          </div>
        )}

        {cancelStep === 2 && (
          <div className="creating-conversion-success" style={{ marginTop: 24 }}>
            <span className="creating-conversion-success-icon">✓</span>
            <h2 className="wallet-section-title">Transfer cancelled</h2>
            <p className="creating-conversion-success-text">
              The transfer of {transfer.amount} {transfer.currency} to {transfer.recipient} has been cancelled.
            </p>
            <button type="button" className="wallet-btn wallet-btn-primary" onClick={handleBackAfterCancel}>
              Back to Transfers
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
