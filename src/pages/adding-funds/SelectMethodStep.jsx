import React from 'react'
import { useAddingFunds } from '../../context/AddingFundsContext'

export function SelectMethodStep() {
  const { goToAccountDetails } = useAddingFunds()

  return (
    <div className="af-flow">
      <h1 className="af-title">Select method to add SGD</h1>

      <div className="af-method-cards">
        <button type="button" className="af-method-card" onClick={goToAccountDetails}>
          <span className="af-method-icon">✈️</span>
          <div className="af-method-body">
            <h2 className="af-method-name">From your external bank account</h2>
            <p className="af-method-meta"><span className="af-meta-icon">🕐</span> Funds arrive in 0-3 business days</p>
            <p className="af-method-meta"><span className="af-meta-icon">💱</span> Supports SGD (To add funds in other currencies, go to <a href="#global" className="af-link">Global Accounts</a>)</p>
          </div>
          <span className="af-method-arrow">›</span>
        </button>

        <button type="button" className="af-method-card" onClick={goToAccountDetails}>
          <span className="af-method-icon">👛</span>
          <div className="af-method-body">
            <h2 className="af-method-name">From another Airwallex account using Airwallex Pay</h2>
            <p className="af-method-meta"><span className="af-meta-icon">🕐</span> Funds arrive instantly</p>
            <p className="af-method-meta"><span className="af-meta-icon">💱</span> Supports <a href="#currencies" className="af-link">all currencies</a> that can be held in your wallet</p>
          </div>
          <span className="af-method-arrow">›</span>
        </button>

        <div className="af-method-card af-method-card--action">
          <span className="af-method-icon">🏦</span>
          <div className="af-method-body">
            <h2 className="af-method-name">With direct debit from a Linked Bank Account</h2>
            <p className="af-method-meta"><span className="af-meta-icon af-meta-icon--muted">🔗</span> Add funds for free without leaving Airwallex</p>
            <p className="af-method-meta"><span className="af-meta-icon">🕐</span> Funds arrive instantly</p>
            <p className="af-method-meta"><span className="af-meta-icon">💱</span> Supports SGD</p>
            <button type="button" className="af-direct-debit-btn" onClick={goToAccountDetails}>
              Authorise direct debit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
