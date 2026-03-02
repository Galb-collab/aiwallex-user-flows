import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TRANSFER_TYPES = [
  { id: 'domestic', title: 'Domestic bank transfer', subtitle: 'Transfer SGD to a Singapore bank account', icon: '🏦' },
  { id: 'international', title: 'International bank transfer', subtitle: 'Transfer to an international bank account', icon: '🌐' },
  { id: 'airwallex-pay', title: 'Airwallex Pay', subtitle: 'Transfer to another Airwallex account', icon: '💳' },
]

export function SchedulingTransferPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState('choose')
  const [showScheduleModal, setShowScheduleModal] = useState(false)

  const handleClose = () => navigate('/flow/wallet')

  if (step === 'choose') {
    return (
      <div className="wallet-content scheduling-transfer">
        <div className="scheduling-transfer-header">
          <h1 className="wallet-section-title" style={{ margin: 0 }}>New transfer</h1>
          <button type="button" className="scheduling-transfer-close" onClick={handleClose} aria-label="Close">×</button>
        </div>
        <h2 className="scheduling-transfer-question">How would you like to transfer?</h2>
        <div className="scheduling-transfer-options">
          {TRANSFER_TYPES.map((t) => (
            <button
              key={t.id}
              type="button"
              className="scheduling-transfer-card"
              onClick={() => setStep('form')}
            >
              <span className="scheduling-transfer-card-icon">{t.icon}</span>
              <span className="scheduling-transfer-card-title">{t.title}</span>
              <span className="scheduling-transfer-card-subtitle">{t.subtitle}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="wallet-content scheduling-transfer">
      <div className="scheduling-transfer-header">
        <h1 className="wallet-section-title" style={{ margin: 0 }}>New transfer</h1>
        <button type="button" className="scheduling-transfer-close" onClick={handleClose} aria-label="Close">×</button>
      </div>
      <div className="scheduling-transfer-form">
        <div className="scheduling-transfer-field">
          <label>You pay exactly</label>
          <input type="text" defaultValue="1,000" />
        </div>
        <div className="scheduling-transfer-field">
          <label>Transfer</label>
          <select><option>Immediately</option><option>Schedule</option></select>
          <span className="scheduling-transfer-hint">Takes 0 – 2 business days to arrive</span>
        </div>
        <p className="scheduling-transfer-rate">1 USD = 1.302547 SGD <button type="button" className="wallet-btn-link">Refreshed at 11:58:54 AM</button></p>
        <div className="scheduling-transfer-field">
          <label>Transfer to</label>
          <select><option>United States of America</option></select>
        </div>
        <div className="scheduling-transfer-field">
          <label>Recipient type</label>
          <div className="scheduling-transfer-radio">
            <label><input type="radio" name="recipient" defaultChecked /> Business</label>
            <label><input type="radio" name="recipient" /> Individual</label>
          </div>
        </div>
        <div className="scheduling-transfer-field">
          <label>Transfer method</label>
          <p className="scheduling-transfer-method">ACH <span className="wallet-info-icon">ℹ️</span> Local bank transfer with a limit of 15,000,000.00 USD</p>
          <button type="button" className="wallet-btn-link">Change</button>
        </div>
        <p className="scheduling-transfer-fee">Transfer fee: Free</p>
        <div className="scheduling-transfer-field">
          <label>Recipient gets</label>
          <div className="scheduling-transfer-recipient-gets">
            <span className="scheduling-transfer-amount">767.73</span>
            <select><option>USD</option></select>
          </div>
        </div>
      </div>
      <div className="scheduling-transfer-footer">
        <button type="button" className="wallet-btn" onClick={() => setStep('choose')}>Back</button>
        <button type="button" className="wallet-btn wallet-btn-primary" onClick={() => setShowScheduleModal(true)}>Continue</button>
      </div>

      {showScheduleModal && (
        <div className="scheduling-transfer-modal-overlay" onClick={() => setShowScheduleModal(false)}>
          <div className="scheduling-transfer-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="scheduling-transfer-close" onClick={() => setShowScheduleModal(false)} aria-label="Close">×</button>
            <span className="scheduling-transfer-modal-tag">New</span>
            <h2 className="scheduling-transfer-modal-title">Schedule a transfer with a locked-in rate</h2>
            <p className="scheduling-transfer-modal-body">
              Plan ahead by scheduling transfers up to 180 days in advance. You can lock in the exchange rate with a partial prepayment.
            </p>
            <button type="button" className="wallet-yield-btn" onClick={() => setShowScheduleModal(false)}>Got it</button>
          </div>
        </div>
      )}
    </div>
  )
}
