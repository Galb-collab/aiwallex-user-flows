import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GivingFeedbackModal } from './GivingFeedbackModal'

const CURRENCIES = [
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
]

const RATE_SGD_USD = 1.30258

export function CreatingConversionPage() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [sellCurrency, setSellCurrency] = useState('SGD')
  const [buyCurrency, setBuyCurrency] = useState('USD')
  const [sellAmount, setSellAmount] = useState('')
  const [showFeedback, setShowFeedback] = useState(false)

  const sellNum = parseFloat(sellAmount) || 0
  const buyNum = sellCurrency === 'SGD' && buyCurrency === 'USD' ? sellNum / RATE_SGD_USD : sellNum * 0.77

  const buyCurrencyOptions = CURRENCIES.filter((c) => c.code !== sellCurrency)
  const effectiveBuyCurrency = buyCurrencyOptions.some((c) => c.code === buyCurrency) ? buyCurrency : (buyCurrencyOptions[0]?.code ?? 'USD')

  const handleSellCurrencyChange = (code) => {
    setSellCurrency(code)
    if (code === buyCurrency) {
      const next = CURRENCIES.find((c) => c.code !== code)
      if (next) setBuyCurrency(next.code)
    }
  }

  const handleClose = () => navigate('/flow/wallet')

  const handleConfirm = () => {
    setStep(3)
  }

  const handleFinish = () => {
    setShowFeedback(true)
  }

  const handleFeedbackDone = () => {
    setShowFeedback(false)
    navigate('/flow/wallet')
  }

  if (step === 1) {
    return (
      <div className="wallet-content creating-conversion">
        <div className="scheduling-transfer-header">
          <h1 className="wallet-section-title" style={{ margin: 0 }}>Create conversion</h1>
          <button type="button" className="scheduling-transfer-close" onClick={handleClose} aria-label="Close">×</button>
        </div>
        <p className="creating-conversion-desc">Convert one currency to another from your wallet.</p>

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
              <select value={sellCurrency} onChange={(e) => handleSellCurrencyChange(e.target.value)}>
                {CURRENCIES.map((c) => (
                  <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                ))}
              </select>
            </div>
            <span className="scheduling-transfer-hint">Available: 10.00 {sellCurrency}</span>
          </div>

          <div className="creating-conversion-swap" aria-hidden>⇅</div>

          <div className="scheduling-transfer-field">
            <label>You buy</label>
            <div className="creating-conversion-currency-row creating-conversion-you-buy">
              <span className="creating-conversion-buy-amount">{buyNum.toFixed(2)}</span>
              <select value={effectiveBuyCurrency} onChange={(e) => setBuyCurrency(e.target.value)}>
                {CURRENCIES.filter((c) => c.code !== sellCurrency).map((c) => (
                  <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                ))}
              </select>
            </div>
            <span className="scheduling-transfer-hint">
              1 {sellCurrency} = {sellCurrency === 'SGD' && buyCurrency === 'USD' ? (1 / RATE_SGD_USD).toFixed(4) : '0.7700'} {buyCurrency}
            </span>
          </div>
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <button type="button" className="wallet-btn" onClick={handleClose}>Cancel</button>
          <button
            type="button"
            className="wallet-btn wallet-btn-primary"
            onClick={() => setStep(2)}
            disabled={sellNum <= 0}
          >
            Review conversion
          </button>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="wallet-content creating-conversion">
        <div className="scheduling-transfer-header">
          <h1 className="wallet-section-title" style={{ margin: 0 }}>Review conversion</h1>
          <button type="button" className="scheduling-transfer-close" onClick={handleClose} aria-label="Close">×</button>
        </div>

        <div className="wallet-overview-card creating-conversion-review">
          <div className="wallet-overview-row">
            <span>You sell</span>
            <span><strong>{sellAmount || '0.00'} {sellCurrency}</strong></span>
          </div>
          <div className="wallet-overview-row">
            <span>You get</span>
            <span><strong>{buyNum.toFixed(2)} {buyCurrency}</strong></span>
          </div>
          <div className="wallet-overview-row">
            <span>Rate</span>
            <span>1 {sellCurrency} = {sellCurrency === 'SGD' && buyCurrency === 'USD' ? (1 / RATE_SGD_USD).toFixed(4) : '0.7700'} {buyCurrency}</span>
          </div>
        </div>

        <div className="scheduling-transfer-footer">
          <button type="button" className="wallet-btn" onClick={() => setStep(1)}>Back</button>
          <button type="button" className="wallet-btn wallet-btn-primary" onClick={handleConfirm}>
            Confirm conversion
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="wallet-content creating-conversion">
      <div className="creating-conversion-success">
        <span className="creating-conversion-success-icon">✓</span>
        <h2 className="wallet-section-title">Conversion complete</h2>
        <p className="creating-conversion-success-text">
          You converted {sellAmount || '0.00'} {sellCurrency} to {buyNum.toFixed(2)} {buyCurrency}.
        </p>
        <button type="button" className="wallet-btn wallet-btn-primary" onClick={handleFinish}>
          Give feedback
        </button>
        <button type="button" className="wallet-btn-link creating-conversion-skip" onClick={handleClose}>
          Back to wallet
        </button>
      </div>
      {showFeedback && (
        <GivingFeedbackModal
          onClose={handleFeedbackDone}
          onSubmit={handleFeedbackDone}
        />
      )}
    </div>
  )
}
