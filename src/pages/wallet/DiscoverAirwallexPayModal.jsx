import React, { useState } from 'react'

const ACCOUNT_NUMBER = '1234567890'
const ACCOUNT_NAME = 'MOBBIN PTE. LTD.'

export function DiscoverAirwallexPayModal({ onClose }) {
  const [copied, setCopied] = useState(false)

  const copyAsMessage = () => {
    const text = `This is my Airwallex Pay account information:\nAccount number: ${ACCOUNT_NUMBER}\nAccount name: ${ACCOUNT_NAME}`
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const copyField = (label, value) => {
    navigator.clipboard?.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="discover-airwallex-overlay" onClick={onClose}>
      <div className="discover-airwallex-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="discover-airwallex-close" onClick={onClose} aria-label="Close">×</button>
        <h2 className="discover-airwallex-title">Discover Airwallex Pay</h2>
        <p className="discover-airwallex-desc">
          Share your account information so others can send you instant transfers in your wallet currencies.
        </p>
        <p className="discover-airwallex-label">This is my Airwallex Pay account information:</p>
        <div className="discover-airwallex-row">
          <span className="discover-airwallex-value">Account number: {ACCOUNT_NUMBER}</span>
          <button type="button" className="discover-airwallex-copy" onClick={() => copyField('Account number', ACCOUNT_NUMBER)} aria-label="Copy account number">📋</button>
        </div>
        <div className="discover-airwallex-row">
          <span className="discover-airwallex-value">Account name: {ACCOUNT_NAME}</span>
          <button type="button" className="discover-airwallex-copy" onClick={() => copyField('Account name', ACCOUNT_NAME)} aria-label="Copy account name">📋</button>
        </div>
        <button type="button" className="wallet-yield-btn discover-airwallex-cta" onClick={copyAsMessage}>
          {copied ? '✓ Copied' : 'Copy as a message'}
        </button>
      </div>
    </div>
  )
}
