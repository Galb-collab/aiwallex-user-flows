import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AcceptingPaymentFlow.css'

const REPORT_DATE = '18 November 2025'
const REPORT_ID = 'Reimbursement report 2025-11-27'
const AMOUNT = '5.00 SGD'
const SUBMITTER = 'Alex Smith'
const ACTIVITY = [
  { icon: '✈', time: 'Nov 27, 2025, 3:05 PM (UTC+08:00)', who: 'Alex Smith', action: 'Submitted report' },
  { icon: '✓', time: 'Nov 27, 2025, 3:15 PM (UTC+08:00)', who: 'Sam Lee', action: 'Approved report' },
]
const ACTIVITY_AFTER_PAY = [
  ...ACTIVITY,
  { icon: '✓', time: 'Nov 27, 2025, 3:15 PM (UTC+08:00)', who: 'Airwallex', action: 'Transfer created' },
]

export function AcceptingPaymentFlow() {
  const navigate = useNavigate()
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [paymentDone, setPaymentDone] = useState(false)

  const handleClose = () => navigate('/flow/dashboard')
  const handlePay = () => setShowConfirmModal(true)
  const handleCancelConfirm = () => setShowConfirmModal(false)
  const handleConfirmPayment = () => {
    setShowConfirmModal(false)
    setPaymentDone(true)
  }

  const statusTag = paymentDone ? 'Payment in progress' : 'Awaiting payment'
  const activityList = paymentDone ? ACTIVITY_AFTER_PAY : ACTIVITY

  return (
    <div className="accepting-payment-flow">
      <header className="ap-header">
        <h1 className="ap-header-title">Pay reimbursement report</h1>
        <div className="ap-header-actions">
          <button type="button" className="ap-icon-btn" aria-label="More options">⋮</button>
          <button type="button" className="ap-icon-btn ap-close" onClick={handleClose} aria-label="Close">×</button>
        </div>
      </header>

      <main className="ap-main">
        <div className="ap-report-meta">
          <span className="ap-report-date">{REPORT_DATE}</span>
          <h2 className="ap-report-title">{REPORT_ID}</h2>
          <span className={`ap-status ap-status--${paymentDone ? 'progress' : 'awaiting'}`}>{statusTag}</span>
          <p className="ap-report-summary">{AMOUNT} submitted by {SUBMITTER}</p>
        </div>

        <div className="ap-columns">
          <div className="ap-left">
            <section className="ap-section">
              <h3 className="ap-section-title">Payment details</h3>
              {!paymentDone ? (
                <button type="button" className="ap-card ap-card-action">
                  <span>Review payment details</span>
                  <span className="ap-arrow">→</span>
                </button>
              ) : (
                <div className="ap-card ap-card-filled">
                  <div className="ap-card-amount">{AMOUNT}</div>
                  <div className="ap-card-meta">2025-11-27 · Paid with {AMOUNT}</div>
                  <span className="ap-status ap-status--progress ap-status--small">Processing</span>
                  <span className="ap-arrow">→</span>
                </div>
              )}
            </section>

            <section className="ap-section">
              <h3 className="ap-section-title">1 reimbursement in this report</h3>
              <div className="ap-reimbursement-item">
                <span>2025-11-17</span>
                <span>K</span>
                <span>5.00 USD</span>
                <span className="ap-amount-primary">5.00 SGD</span>
                <span className="ap-arrow">→</span>
              </div>
            </section>

            <section className="ap-section">
              <h3 className="ap-section-title">Report activity</h3>
              <ul className="ap-activity">
                {activityList.map((a, i) => (
                  <li key={i} className="ap-activity-item">
                    <span className="ap-activity-icon">{a.icon}</span>
                    <div className="ap-activity-body">
                      <span className="ap-activity-time">{a.time}</span>
                      <span className="ap-activity-who">{a.who}</span>
                      <span className="ap-activity-action">{a.action}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="ap-right">
            {!paymentDone ? (
              <>
                <div className="ap-recipient">
                  <div className="ap-avatar" />
                  <div>
                    <strong>{SUBMITTER} will receive {AMOUNT}</strong>
                    <p className="ap-recipient-account">— Singapore - SGD - DBS Bank</p>
                  </div>
                </div>
                <div className="ap-field">
                  <label>Funding currency</label>
                  <div className="ap-select-wrap">
                    <span className="ap-select-value">SGD</span>
                    <span className="ap-select-meta">Available balance: {AMOUNT}</span>
                  </div>
                  <p className="ap-field-hint">Pay with your default wallet currency or select another.</p>
                </div>
                <div className="ap-field">
                  <label>Transfer date</label>
                  <div className="ap-select-wrap">
                    <span className="ap-select-value">Immediately</span>
                  </div>
                  <p className="ap-field-hint">Takes 0-1 business days to arrive</p>
                </div>
                <button type="button" className="ap-link">See rates & fees</button>
                <div className="ap-total">
                  <label>Total payment</label>
                  <span className="ap-total-amount">{AMOUNT}</span>
                </div>
              </>
            ) : (
              <>
                <div className="ap-recipient">
                  <div className="ap-avatar" />
                  <div>
                    <strong>{SUBMITTER}</strong>
                    <span className="ap-status ap-status--progress ap-status--small">Processing</span>
                  </div>
                </div>
                <p className="ap-transfer-id">Transfer ID P251127-ZV9ADAR</p>
                <dl className="ap-dl">
                  <dt>You pay</dt>
                  <dd>{AMOUNT}</dd>
                  <dt>Transfer date</dt>
                  <dd>2025-11-27 <span className="ap-hint">Takes 0-2 business days to arrive</span></dd>
                  <dt>Transfer method</dt>
                  <dd>Local - ACH</dd>
                  <dt>Transfer fee</dt>
                  <dd>Free</dd>
                  <dt>Recipient gets</dt>
                  <dd>{AMOUNT}</dd>
                  <dt>Purpose of transfer</dt>
                  <dd>Business expenses</dd>
                  <dt>Reference</dt>
                  <dd>Reimbursement report 20251127 - Reimbursement</dd>
                </dl>
                <div className="ap-success-banner">
                  ✔ You successfully created a transfer
                </div>
                <button type="button" className="ap-btn ap-btn-primary" onClick={handleClose}>Close</button>
              </>
            )}
          </div>
        </div>
      </main>

      {!paymentDone && (
        <footer className="ap-footer">
          <span className="ap-footer-logo"><span className="logo-icon small">A</span> airwallex</span>
          <div className="ap-footer-actions">
            <button type="button" className="ap-btn ap-btn-secondary">Request resubmission</button>
            <button type="button" className="ap-btn ap-btn-primary" onClick={handlePay}>Pay</button>
          </div>
        </footer>
      )}

      {showConfirmModal && (
        <div className="ap-modal-backdrop" onClick={handleCancelConfirm}>
          <div className="ap-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="ap-modal-close" onClick={handleCancelConfirm} aria-label="Close">×</button>
            <h3 className="ap-modal-title">Confirm payment</h3>
            <p className="ap-modal-text">
              This transfer will be sent for approval for the following amount: <strong>{AMOUNT}</strong>. The amount will be deducted from your SGD wallet balance after this transfer is approved.
            </p>
            <div className="ap-modal-actions">
              <button type="button" className="ap-btn ap-btn-secondary" onClick={handleCancelConfirm}>Cancel</button>
              <button type="button" className="ap-btn ap-btn-primary" onClick={handleConfirmPayment}>Confirm payment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
