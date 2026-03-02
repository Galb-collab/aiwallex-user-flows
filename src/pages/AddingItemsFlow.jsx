import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddingItemsFlow.css'

const REPORT_ID = 'Reimbursement report 2025-11-27'
const EXPENSE_AMOUNT = 5.0

const defaultLineItems = () => [
  { amount: '', description: '' },
  { amount: '', description: '' },
]

export function AddingItemsFlow() {
  const navigate = useNavigate()
  const [showItemisePanel, setShowItemisePanel] = useState(false)
  const [savedLineItems, setSavedLineItems] = useState([])
  const [lineItems, setLineItems] = useState(defaultLineItems)
  const [focusedAmountIndex, setFocusedAmountIndex] = useState(null)

  const lineItemTotal = useMemo(() => {
    const sum = lineItems.reduce((acc, i) => acc + (parseFloat(i.amount) || 0), 0)
    return sum.toFixed(2)
  }, [lineItems])
  const difference = (EXPENSE_AMOUNT - parseFloat(lineItemTotal)).toFixed(2)
  const hasAmountError = focusedAmountIndex !== null && !lineItems[focusedAmountIndex]?.amount?.trim()
  const canCreate = lineItems.every((i) => i.amount && parseFloat(i.amount) > 0) && Math.abs(parseFloat(difference)) < 0.01

  const openItemise = () => {
    setLineItems(savedLineItems.length ? savedLineItems.map((i) => ({ ...i })) : defaultLineItems())
    setShowItemisePanel(true)
    setFocusedAmountIndex(null)
  }
  const closeItemise = () => {
    setShowItemisePanel(false)
    setFocusedAmountIndex(null)
  }
  const addLineItem = () => setLineItems((prev) => [...prev, { amount: '', description: '' }])
  const updateLineItem = (index, field, value) => {
    setLineItems((prev) => prev.map((item, i) => (i === index ? { ...item, [field]: value } : item)))
  }
  const createLineItems = () => {
    if (!canCreate) return
    setSavedLineItems(lineItems.map((i) => ({ ...i })))
    closeItemise()
  }

  const UPLOAD_RECEIPT_PATH = '/flow/spend-general/expenses-spend/uploading-a-receipt'
  const handleClose = () => navigate(UPLOAD_RECEIPT_PATH)

  return (
    <div className="adding-items-flow">
      <header className="ai-header">
        <h1 className="ai-header-title">Report details</h1>
        <div className="ai-header-actions">
          <button type="button" className="ai-icon-btn" aria-label="More options">⋮</button>
          <button type="button" className="ai-icon-btn ai-close" onClick={handleClose} aria-label="Close">×</button>
        </div>
      </header>

      <div className="ai-alert">
        <p>Please provide your bank details in order to submit your out-of-pocket expenses for reimbursement.</p>
        <button type="button" className="ai-btn-link">Add bank details</button>
      </div>

      <main className="ai-main">
        <div className="ai-report-head">
          <h2 className="ai-report-title">{REPORT_ID}</h2>
          <span className="ai-draft">Draft</span>
          <span className="ai-report-total">5.00 SGD</span>
        </div>

        <div className="ai-columns">
          <div className="ai-left">
            <section className="ai-section">
              <h3 className="ai-section-title">1 reimbursement in this report</h3>
              <div className="ai-status-ok">✓ All required information has been added</div>
              <div className="ai-drop-zone">
                <p>Drop receipts or <button type="button" className="ai-link">choose file</button> to create new reimbursements, or <button type="button" className="ai-link">manually create a reimbursement</button>.</p>
              </div>
              <div className="ai-reimbursement-card">
                <span className="ai-check">✓</span>
                <span>2025-11-17</span>
                <span>K</span>
                <span>5.00 USD</span>
                <span className="ai-amount-sgd">5.00 SGD</span>
                <button type="button" className="ai-icon-btn small" aria-label="Options">⋮</button>
                <span className="ai-arrow">→</span>
              </div>
            </section>
            <section className="ai-section">
              <label className="ai-label">Comments</label>
              <textarea className="ai-textarea" placeholder="Add a comment here" rows={3} />
              <button type="button" className="ai-btn secondary" disabled>Add comment</button>
            </section>
          </div>

          <div className="ai-center">
            <section className="ai-section ai-details">
              <div className="ai-details-head">
                <h3 className="ai-section-title">Reimbursement details</h3>
                {savedLineItems.length > 0 ? (
                  <button type="button" className="ai-btn-link" onClick={openItemise}>Line items ({savedLineItems.length}) · Edit</button>
                ) : (
                  <button type="button" className="ai-btn-itemise" onClick={openItemise}>Itemise</button>
                )}
              </div>
              <div className="ai-field">
                <label>Transaction date *</label>
                <div className="ai-input-wrap">
                  <input type="text" defaultValue="2025-11-17" className="ai-input" />
                  <span className="ai-input-icon">📅</span>
                  <button type="button" className="ai-clear" aria-label="Clear">×</button>
                </div>
              </div>
              <div className="ai-field">
                <label>Transaction amount *</label>
                <div className="ai-input-group">
                  <span className="ai-currency">USD</span>
                  <input type="text" defaultValue="5.00" className="ai-input" />
                </div>
              </div>
              <div className="ai-field">
                <label>Amount claimed *</label>
                <div className="ai-input-group">
                  <span className="ai-currency">SGD</span>
                  <input type="text" defaultValue="5.00" className="ai-input" />
                </div>
                <p className="ai-hint">5.00 USD is equivalent to 6.52 SGD based on the exchange rate of 1 USD = 1.30 SGD. <button type="button" className="ai-link">Use suggested amount.</button></p>
              </div>
              <div className="ai-field">
                <label>Merchant</label>
                <input type="text" defaultValue="K" className="ai-input" />
              </div>
              <div className="ai-field">
                <label>Reimbursement description</label>
                <input type="text" className="ai-input" placeholder="What was this reimbursement for?" />
                <p className="ai-suggestion">Suggestion: Americano, chocolate chip cookie and coke</p>
              </div>
              <button type="button" className="ai-btn secondary" disabled>Add files</button>
            </section>
          </div>

          <div className="ai-right">
            <div className="ai-receipt-preview">
              <div className="ai-receipt-placeholder">
                <span className="ai-receipt-label">Receipt</span>
                <span className="ai-receipt-meta">11/17/2025 · 1 Americano $2.0, 2 Chocolate Chip Cookie $1.5, 2 Coke $1.5</span>
                <span className="ai-receipt-total">Total $5.00</span>
              </div>
              <div className="ai-receipt-actions">
                <button type="button" className="ai-receipt-icon" aria-label="Full screen">⛶</button>
                <button type="button" className="ai-receipt-icon" aria-label="Download">↓</button>
                <button type="button" className="ai-receipt-icon" aria-label="Delete">🗑</button>
              </div>
            </div>
            <button type="button" className="ai-btn secondary">Add files</button>
          </div>
        </div>
      </main>

      <footer className="ai-footer">
        <span className="ai-footer-logo"><span className="ai-logo-icon">A</span> airwallex</span>
        <div className="ai-footer-actions">
          <button type="button" className="ai-btn secondary" onClick={handleClose}>Close</button>
          <button type="button" className="ai-btn secondary">Save Draft</button>
          <button type="button" className="ai-btn primary">Submit reimbursements</button>
        </div>
      </footer>

      {showItemisePanel && (
        <div className="ai-panel-backdrop" onClick={closeItemise}>
          <div className="ai-panel" onClick={(e) => e.stopPropagation()}>
            <div className="ai-panel-header">
              <h2 className="ai-panel-title">Itemise reimbursement</h2>
              <button type="button" className="ai-icon-btn ai-close" onClick={closeItemise} aria-label="Close">×</button>
            </div>
            <div className="ai-panel-body">
              <div className="ai-panel-form">
                {lineItems.map((item, index) => (
                  <div key={index} className="ai-line-item">
                    <div className="ai-field">
                      <label>Amount (required)</label>
                      <div className="ai-input-with-menu">
                        <input
                          type="text"
                          value={item.amount}
                          onChange={(e) => updateLineItem(index, 'amount', e.target.value)}
                          onFocus={() => setFocusedAmountIndex(index)}
                          onBlur={() => setFocusedAmountIndex(null)}
                          placeholder="0.00"
                          className={hasAmountError && focusedAmountIndex === index ? 'ai-input error' : 'ai-input'}
                        />
                        <span className="ai-line-amount">{item.amount || '0.00'}</span>
                        <button type="button" className="ai-icon-btn small" aria-label="Options">⋮</button>
                      </div>
                      {hasAmountError && focusedAmountIndex === index && <span className="ai-error">Required: Amount</span>}
                    </div>
                    <div className="ai-field">
                      <label>Description</label>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => updateLineItem(index, 'description', e.target.value)}
                        className="ai-input"
                        placeholder="e.g. Americano"
                      />
                    </div>
                  </div>
                ))}
                <button type="button" className="ai-add-line" onClick={addLineItem}>+ Add line item</button>
              </div>
              <div className="ai-panel-receipt">
                <div className="ai-receipt-placeholder">
                  <span className="ai-receipt-label">Receipt</span>
                  <span className="ai-receipt-meta">1 Americano $2.0 · 2 Chocolate Chip Cookie $1.5 · 2 Coke $1.5</span>
                  <span className="ai-receipt-total">Total $5.00</span>
                </div>
                <button type="button" className="ai-btn secondary">Add files</button>
              </div>
            </div>
            <div className="ai-panel-footer">
              <div className="ai-totals">
                <div className="ai-totals-row">
                  <span>Line item total:</span>
                  <span>{lineItemTotal}</span>
                </div>
                <div className="ai-totals-row">
                  <span>Expense amount:</span>
                  <span>{EXPENSE_AMOUNT.toFixed(2)}</span>
                </div>
                <div className={`ai-totals-row ai-difference ${parseFloat(difference) === 0 ? 'ok' : 'mismatch'}`}>
                  <span>Difference:</span>
                  <span>{parseFloat(difference) === 0 ? '✓ 0.00' : `! ${difference}`}</span>
                </div>
              </div>
              <button type="button" className="ai-btn primary" onClick={createLineItems} disabled={!canCreate}>
                Create {lineItems.length} line items
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
