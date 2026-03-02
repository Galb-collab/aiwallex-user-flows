import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutSpendingControls() {
  const { flowPath } = useCompany()
  const [showToast, setShowToast] = useState(false)
  const [expenseReporting, setExpenseReporting] = useState(true)

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step">
        <Link to={flowPath('/flow/revolut-dashboard')} className="revolut-step-back">←</Link>
        <h1 className="revolut-step-title">Online Spending</h1>
        <div className="revolut-spend-section">
          <h3 className="revolut-section-title">Spend controls</h3>
          <div className="revolut-spend-item">
            <span>Spending limits</span>
            <span className="revolut-spend-value">S$ 100 monthly</span>
            <button type="button" className="revolut-edit-icon" onClick={() => setShowToast(true)}>✎</button>
          </div>
          <div className="revolut-spend-item">
            <span>Spending period</span>
            <span className="revolut-spend-value">No spending period</span>
            <button type="button" className="revolut-edit-icon">✎</button>
          </div>
          <div className="revolut-spend-item">
            <span>Categories</span>
            <span className="revolut-spend-value">Spend allowed in all merchant categories.</span>
            <button type="button" className="revolut-edit-icon">✎</button>
          </div>
          <div className="revolut-spend-item">
            <span>Merchants</span>
            <span className="revolut-spend-value">Spend allowed at all merchants.</span>
            <button type="button" className="revolut-edit-icon">✎</button>
          </div>
          <div className="revolut-spend-item">
            <span>Countries</span>
            <span className="revolut-spend-value">Spend allowed in all countries.</span>
            <button type="button" className="revolut-edit-icon">✎</button>
          </div>
          <div className="revolut-spend-item">
            <span>Funding accounts</span>
            <span className="revolut-spend-value">Funded by all accounts.</span>
            <button type="button" className="revolut-edit-icon">✎</button>
          </div>
        </div>
        <div className="revolut-spend-section">
          <h3 className="revolut-section-title">Expenses</h3>
          <div className="revolut-spend-item">
            <span>Expense reporting</span>
            <span className="revolut-spend-value">Attach receipts, categorize and review card transactions.</span>
            <label className="revolut-toggle">
              <input type="checkbox" checked={expenseReporting} onChange={(e) => setExpenseReporting(e.target.checked)} />
              <span className="revolut-toggle-slider" />
            </label>
          </div>
          <div className="revolut-spend-item">
            <span>Autofreeze cards</span>
            <span className="revolut-spend-value">No autofreeze rule for overdue expenses.</span>
            <button type="button" className="revolut-edit-icon">✎</button>
          </div>
          <div className="revolut-spend-item">
            <span>Card expenses approval process</span>
            <span className="revolut-spend-value">Default expenses approval.</span>
            <button type="button" className="revolut-edit-icon">✎</button>
          </div>
        </div>
        {showToast && (
          <div className="revolut-toast">Spending limits updated</div>
        )}
      </div>
    </div>
  )
}
