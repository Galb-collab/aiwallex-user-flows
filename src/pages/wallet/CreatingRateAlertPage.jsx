import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CURRENCIES = [
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
]

const RATE_SGD_USD = 1.30258

export function CreatingRateAlertPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [sellCurrency, setSellCurrency] = useState('SGD')
  const [buyCurrency, setBuyCurrency] = useState('USD')
  const [targetRate, setTargetRate] = useState('1.35')
  const [direction, setDirection] = useState('above') // above | below

  const handleClose = () => navigate('/flow/wallet/conversions')

  if (step === 1) {
    return (
      <div className="wallet-content creating-conversion">
        <Link to="/flow/wallet/conversions" className="wallet-back-link">← Back</Link>
        <h1 className="wallet-section-title">Create rate alert</h1>
        <p className="creating-conversion-desc">We will notify you when the exchange rate reaches your target.</p>

        <div className="creating-conversion-form">
          <div className="scheduling-transfer-field">
            <label>Currency pair</label>
            <div className="creating-conversion-currency-row" style={{ gap: 8 }}>
              <select value={sellCurrency} onChange={(e) => setSellCurrency(e.target.value)}>
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                ))}
              </select>
              <span>/</span>
              <select value={buyCurrency} onChange={(e) => setBuyCurrency(e.target.value)}>
                {CURRENCIES.filter((c) => c.code !== sellCurrency).map((c) => (
                  <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="scheduling-transfer-field">
            <label>Notify me when rate is</label>
            <div className="creating-conversion-radio" style={{ flexDirection: 'column', gap: 8 }}>
              <label>
                <input type="radio" name="direction" checked={direction === 'above'} onChange={() => setDirection('above')} />
                {' '}At or above
              </label>
              <label>
                <input type="radio" name="direction" checked={direction === 'below'} onChange={() => setDirection('below')} />
                {' '}At or below
              </label>
            </div>
          </div>
          <div className="scheduling-transfer-field">
            <label>Target rate (1 {sellCurrency} = ? {buyCurrency})</label>
            <input
              type="number"
              placeholder="e.g. 1.35"
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
            disabled={!targetRate || parseFloat(targetRate) <= 0}
          >
            Create alert
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="wallet-content creating-conversion">
      <div className="creating-conversion-success">
        <span className="creating-conversion-success-icon">✓</span>
        <h2 className="wallet-section-title">Rate alert created</h2>
        <p className="creating-conversion-success-text">
          We will notify you when 1 {sellCurrency} = {targetRate} {buyCurrency} ({direction === 'above' ? 'at or above' : 'at or below'}).
        </p>
        <Link to="/flow/wallet/conversions" className="wallet-btn wallet-btn-primary">Back to Conversions</Link>
        <Link to="/flow/wallet" className="wallet-btn-link creating-conversion-skip">Back to wallet</Link>
      </div>
    </div>
  )
}
