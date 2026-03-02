import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutExchange() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [amount, setAmount] = useState('2')
  const [exchanged, setExchanged] = useState(false)

  const handleExchange = (e) => {
    e.preventDefault()
    setExchanged(true)
  }

  if (exchanged) {
    return (
      <div className="revolut-flow-layout">
        <div className="revolut-step">
          <div className="revolut-exchange-success">
            <div className="revolut-success-icon">✓</div>
            <h2>You&apos;ve exchanged S$ 2 to $1.53</h2>
            <p className="revolut-exchange-allowance">You&apos;ve used S$ 1.99 of your S$ 60,000 monthly no-fee exchange allowance</p>
            <button type="button" className="revolut-btn-primary" onClick={() => navigate(flowPath('/flow/revolut-dashboard'))}>Done</button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step">
        <Link to={flowPath('/flow/revolut-add-money')} className="revolut-step-back">←</Link>
        <div className="revolut-exchange-header">
          <span className="revolut-exchange-amount">+$1.53</span>
          <span className="revolut-exchange-label">Sell S$ 2</span>
          <span className="revolut-exchange-flags">🇸🇬🇺🇸</span>
        </div>
        <div className="revolut-exchange-details">
          <div className="revolut-detail-row"><span>Amount</span><span>S$ 2</span></div>
          <div className="revolut-detail-row"><span>Price</span><span>S$ 1 = $0.7691</span></div>
          <div className="revolut-detail-row"><span>Exchanged</span><span>$1.53</span></div>
          <div className="revolut-detail-row"><span>Fees</span><span>No fee</span></div>
          <div className="revolut-detail-row"><span>Total proceeds</span><span>$1.53</span></div>
          <div className="revolut-detail-row"><span>To</span><span>🇺🇸 Main - USD</span></div>
          <div className="revolut-detail-row"><span>From</span><span>🇸🇬 Main - SGD</span></div>
        </div>
        <form onSubmit={handleExchange}>
          <input type="number" className="revolut-input" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} step="0.01" />
          <button type="submit" className="revolut-btn-primary">Exchange</button>
        </form>
      </div>
    </div>
  )
}
