import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

const CURRENCIES = [
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
]

const RATE_SGD_USD = 1.30258

export function CreatingLimitOrderPage() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [step, setStep] = useState(1)
  const [sellCurrency, setSellCurrency] = useState('SGD')
  const [buyCurrency, setBuyCurrency] = useState('USD')
  const [targetRate, setTargetRate] = useState('1.30')
  const [sellAmount, setSellAmount] = useState('')

  const sellNum = parseFloat(sellAmount) || 0
  const rateNum = parseFloat(targetRate) || 0
  const buyNum = rateNum > 0 ? sellNum / rateNum : 0

  const handleClose = () => navigate(flowPath('/flow/wallet/conversions'))

  if (step === 1) {
    return (
      <div className="wallet-content creating-conversion">
        <Link to={flowPath('/flow/wallet/conversions')} className="wallet-back-link">← Back</Link>
        <h1 className="wallet-section-title">Create limit order</h1>
        <p className="creating-conversion-desc">Your conversion will execute automatically when the rate reaches your target.</p>

        <div className="creating-conversion-form">
          <div className="scheduling-transfer-field">
            <label>You sell</label>
            <div className="creating-conversion-currency-row">
              <input
                type="number"
                placeholder="0.00"
                value={sellAmount}
                onChange={(e) => setSellAmount(e.target.value)}
                min="0"
                step="any"
              />
              <select value={sellCurrency} onChange={(e) => setSellCurrency(e.target.value)}>
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="scheduling-transfer-field">
            <label>You buy</label>
            <select value={buyCurrency} onChange={(e) => setBuyCurrency(e.target.value)}>
              {CURRENCIES.filter((c) => c.code !== sellCurrency).map((c) => (
                <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
              ))}
            </select>
          </div>
          <div className="scheduling-transfer-field">
            <label>Target rate (1 {sellCurrency} = ? {buyCurrency})</label>
            <input
              type="number"
              placeholder="e.g. 1.30"
              value={targetRate}
              onChange={(e) => setTargetRate(e.target.value)}
              min="0"
              step="any"
            />
            <span className="scheduling-transfer-hint">Current rate: 1 {sellCurrency} = {sellCurrency === 'SGD' && buyCurrency === 'USD' ? (1 / RATE_SGD_USD).toFixed(4) : '0.77'} {buyCurrency}</span>
          </div>
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <button type="button" className="wallet-btn" onClick={handleClose}>Cancel</button>
          <button
            type="button"
            className="wallet-btn wallet-btn-primary"
            onClick={() => setStep(2)}
            disabled={sellNum <= 0 || rateNum <= 0}
          >
            Review order
          </button>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="wallet-content creating-conversion">
        <Link to={flowPath('/flow/wallet/conversions')} className="wallet-back-link">← Back</Link>
        <h1 className="wallet-section-title">Review limit order</h1>

        <div className="wallet-overview-card creating-conversion-review">
          <div className="wallet-overview-row">
            <span>You sell</span>
            <span><strong>{sellAmount || '0.00'} {sellCurrency}</strong></span>
          </div>
          <div className="wallet-overview-row">
            <span>You get (at target rate)</span>
            <span><strong>{buyNum.toFixed(2)} {buyCurrency}</strong></span>
          </div>
          <div className="wallet-overview-row">
            <span>Target rate</span>
            <span>1 {sellCurrency} = {targetRate} {buyCurrency}</span>
          </div>
        </div>

        <div className="scheduling-transfer-footer">
          <button type="button" className="wallet-btn" onClick={() => setStep(1)}>Back</button>
          <button type="button" className="wallet-btn wallet-btn-primary" onClick={() => setStep(3)}>
            Place limit order
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="wallet-content creating-conversion">
      <div className="creating-conversion-success">
        <span className="creating-conversion-success-icon">✓</span>
        <h2 className="wallet-section-title">Limit order placed</h2>
        <p className="creating-conversion-success-text">
          Your order to convert {sellAmount || '0.00'} {sellCurrency} to {buyCurrency} at 1 {sellCurrency} = {targetRate} {buyCurrency} will execute when the rate is reached.
        </p>
        <Link to={flowPath('/flow/wallet/conversions')} className="wallet-btn wallet-btn-primary">Back to Conversions</Link>
        <Link to={flowPath('/flow/wallet')} className="wallet-btn-link creating-conversion-skip">Back to wallet</Link>
      </div>
    </div>
  )
}
