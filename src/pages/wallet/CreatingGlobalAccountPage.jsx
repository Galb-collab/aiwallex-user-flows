import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

const CURRENCIES = [
  { code: 'SGD', name: 'Singapore Dollar', country: 'Singapore', flag: '🇸🇬' },
  { code: 'USD', name: 'US Dollar', country: 'United States', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', country: 'Germany', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', country: 'United Kingdom', flag: '🇬🇧' },
  { code: 'AUD', name: 'Australian Dollar', country: 'Australia', flag: '🇦🇺' },
]

export function CreatingGlobalAccountPage() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [step, setStep] = useState(1)
  const [selectedCurrency, setSelectedCurrency] = useState(null)
  const [accountName, setAccountName] = useState('')

  const handleClose = () => navigate(flowPath('/flow/wallet/global-accounts'))

  if (step === 1) {
    return (
      <div className="wallet-content creating-global-account">
        <Link to={flowPath('/flow/wallet/global-accounts')} className="wallet-back-link">← Back</Link>
        <h1 className="wallet-section-title">Create a global account</h1>
        <p className="creating-conversion-desc">Choose the currency for your new global account.</p>

        <div className="creating-global-account-list">
          {CURRENCIES.map((c) => (
            <button
              key={c.code}
              type="button"
              className={`creating-global-account-card ${selectedCurrency?.code === c.code ? 'selected' : ''}`}
              onClick={() => setSelectedCurrency(c)}
            >
              <span className="creating-global-account-flag">{c.flag}</span>
              <div className="creating-global-account-info">
                <span className="creating-global-account-code">{c.code}</span>
                <span className="creating-global-account-name">{c.name}</span>
                <span className="creating-global-account-country">{c.country}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <button type="button" className="wallet-btn" onClick={handleClose}>Cancel</button>
          <button
            type="button"
            className="wallet-btn wallet-btn-primary"
            onClick={() => setStep(2)}
            disabled={!selectedCurrency}
          >
            Continue
          </button>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="wallet-content creating-global-account">
        <Link to={flowPath('/flow/wallet/global-accounts')} className="wallet-back-link">← Back</Link>
        <h1 className="wallet-section-title">Account details</h1>
        <p className="creating-conversion-desc">Give your global account a name to identify it easily.</p>

        <div className="creating-conversion-form">
          <div className="scheduling-transfer-field">
            <label>Account name</label>
            <input
              type="text"
              placeholder={`e.g. ${selectedCurrency?.code ?? 'SGD'} Operating Account`}
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />
          </div>
          <div className="creating-global-account-summary">
            <p><strong>Currency:</strong> {selectedCurrency?.flag} {selectedCurrency?.code} – {selectedCurrency?.name}</p>
          </div>
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <button type="button" className="wallet-btn" onClick={() => setStep(1)}>Back</button>
          <button
            type="button"
            className="wallet-btn wallet-btn-primary"
            onClick={() => setStep(3)}
            disabled={!accountName.trim()}
          >
            Review and create
          </button>
        </div>
      </div>
    )
  }

  if (step === 3) {
    return (
      <div className="wallet-content creating-global-account">
        <Link to={flowPath('/flow/wallet/global-accounts')} className="wallet-back-link">← Back</Link>
        <h1 className="wallet-section-title">Review and create</h1>

        <div className="wallet-overview-card creating-conversion-review">
          <div className="wallet-overview-row">
            <span>Currency</span>
            <span><strong>{selectedCurrency?.flag} {selectedCurrency?.code} – {selectedCurrency?.name}</strong></span>
          </div>
          <div className="wallet-overview-row">
            <span>Account name</span>
            <span><strong>{accountName}</strong></span>
          </div>
        </div>

        <div className="scheduling-transfer-footer">
          <button type="button" className="wallet-btn" onClick={() => setStep(2)}>Back</button>
          <button
            type="button"
            className="wallet-btn wallet-btn-primary"
            onClick={() => setStep(4)}
          >
            Create account
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="wallet-content creating-global-account">
      <div className="creating-conversion-success">
        <span className="creating-conversion-success-icon">✓</span>
        <h2 className="wallet-section-title">Account created</h2>
        <p className="creating-conversion-success-text">
          Your {selectedCurrency?.code} global account &quot;{accountName}&quot; has been created. It may take a few moments to become active.
        </p>
        <Link to={flowPath('/flow/wallet/global-accounts')} className="wallet-btn wallet-btn-primary">View global accounts</Link>
        <Link to={flowPath('/flow/wallet')} className="wallet-btn-link creating-conversion-skip">Back to wallet</Link>
      </div>
    </div>
  )
}
