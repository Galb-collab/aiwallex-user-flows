import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutTransferReview() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [sent, setSent] = useState(false)

  const handleSend = (e) => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="revolut-flow-layout">
        <div className="revolut-step">
          <div className="revolut-success-modal">
            <div className="revolut-success-icon">✓</div>
            <h2>You&apos;ve sent S$ 1 to recipient</h2>
            <p>Arriving today</p>
            <p className="revolut-success-note">We&apos;ve sent a notification to samlee.mobbin@gmail.com.</p>
            <button type="button" className="revolut-btn-primary" onClick={() => navigate(flowPath('/flow/revolut-dashboard'))}>Done</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step">
        <div className="revolut-transfer-review-header">
          <Link to={flowPath('/flow/revolut-transfer')} className="revolut-step-back">←</Link>
          <h1 className="revolut-step-title">Review transfer</h1>
          <Link to={flowPath('/flow/revolut-transfer')} className="revolut-link">Save draft</Link>
        </div>
        <div className="revolut-transfer-warning">
          <span className="revolut-warning-icon">⚠</span>
          Do you know and trust the recipient? If you&apos;re unsure, don&apos;t pay them, since we may not be able to get your money back. <Link to="#" className="revolut-link">Learn more</Link>
        </div>
        <div className="revolut-transfer-details">
          <div className="revolut-detail-row"><span>Reference</span><span>85843494</span></div>
          <div className="revolut-detail-row"><span>Attachment</span><span>📄 PDF</span></div>
          <div className="revolut-detail-row"><span>Arriving</span><span>Today</span></div>
        </div>
        <h3 className="revolut-section-title">Payment details</h3>
        <div className="revolut-transfer-details">
          <div className="revolut-detail-row"><span>Amount</span><span>S$ 1</span></div>
          <div className="revolut-detail-row"><span>Fees</span><span>No fee</span></div>
          <div className="revolut-detail-row"><span>From</span><span>🇸🇬 Main - SGD</span></div>
        </div>
        <div className="revolut-recipient-preview">
          <span className="revolut-personnel-avatar">CL</span>
          <span>SGD • •••• TRWISGSG</span>
        </div>
        <button type="button" className="revolut-btn-primary" onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}
