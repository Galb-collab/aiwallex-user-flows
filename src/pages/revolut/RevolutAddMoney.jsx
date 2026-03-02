import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutAddMoney() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [showRevtagModal, setShowRevtagModal] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)

  const handleRevtagClick = () => {
    setShowRevtagModal(true)
  }

  const handleCopyLink = () => {
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 2000)
  }

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step">
        <Link to={flowPath('/flow/revolut-dashboard')} className="revolut-step-back">←</Link>
        <h1 className="revolut-step-title">Add money</h1>
        <p className="revolut-step-subtitle">Choose how to add funds to your Revolut Business account</p>
        <div className="revolut-add-money-options">
          <button type="button" className="revolut-add-option" onClick={handleRevtagClick}>
            <span className="revolut-add-icon">R</span>
            <div>
              <h3>Revtag transfer</h3>
              <p>Share your Revtag with others to receive money from a Revolut customer.</p>
            </div>
          </button>
          <button type="button" className="revolut-add-option" onClick={() => navigate(flowPath('/flow/revolut-account-details'))}>
            <span className="revolut-add-icon">≡</span>
            <div>
              <h3>Transfer using account details</h3>
              <p>View and share your account details to make a transfer from another bank.</p>
            </div>
          </button>
          <button type="button" className="revolut-add-option" onClick={() => navigate(flowPath('/flow/revolut-exchange'))}>
            <span className="revolut-add-icon">↻</span>
            <div>
              <h3>Exchange money from another account</h3>
              <p>Transfer money by exchanging from another account.</p>
            </div>
          </button>
        </div>
      </div>

      {showRevtagModal && (
        <div className="revolut-modal-overlay" onClick={() => setShowRevtagModal(false)}>
          <div className="revolut-modal revolut-revtag-modal" onClick={e => e.stopPropagation()}>
            <h2 className="revolut-modal-title">Share your Revtag</h2>
            <p className="revolut-modal-subtitle">Hey! You can now send money to other Revolut accounts and Revolut Business accounts using Revtag. No details required. Here&apos;s mine: <strong>@mobbinnpc4</strong></p>
            <div className="revolut-revtag-actions">
              <button type="button" className="revolut-btn-social" onClick={handleCopyLink}>
                📋 Copy link
              </button>
              <button type="button" className="revolut-btn-primary">✉ Send</button>
              {linkCopied && <span className="revolut-copied-badge">Link copied</span>}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
