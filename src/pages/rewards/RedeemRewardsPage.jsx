import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export function RedeemRewardsPage() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState('')
  const [redeemed, setRedeemed] = useState(false)

  const availableBalance = 125.5

  const handleRedeem = () => {
    setRedeemed(true)
    setTimeout(() => navigate('/flow/rewards'), 2500)
  }

  if (redeemed) {
    return (
      <div className="rewards-content">
        <div className="wallet-content creating-conversion">
          <div className="creating-conversion-success">
            <span className="creating-conversion-success-icon">✓</span>
            <h2 className="wallet-section-title">Rewards redeemed</h2>
            <p className="creating-conversion-success-text">
              {amount || '0'} SGD has been transferred to your wallet.
            </p>
            <Link to="/flow/rewards" className="wallet-btn wallet-btn-primary">Back to Rewards</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="rewards-content">
      <div className="wallet-content creating-conversion">
        <Link to="/flow/rewards" className="wallet-back-link">← Back to Rewards</Link>
        <h1 className="wallet-section-title">Redeem rewards</h1>
        <p className="creating-conversion-desc">Transfer your cashback balance to your wallet.</p>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <div className="wallet-overview-row">
            <span>Available to redeem</span>
            <span><strong>{availableBalance.toFixed(2)} SGD</strong></span>
          </div>
        </div>

        <div className="scheduling-transfer-field" style={{ marginTop: 24, maxWidth: 400 }}>
          <label>Amount to redeem (SGD)</label>
          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="0"
            max={availableBalance}
            step="0.01"
          />
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <Link to="/flow/rewards" className="wallet-btn">Cancel</Link>
          <button
            type="button"
            className="wallet-btn wallet-btn-primary"
            onClick={handleRedeem}
            disabled={!amount || parseFloat(amount) <= 0 || parseFloat(amount) > availableBalance}
          >
            Redeem to wallet
          </button>
        </div>
      </div>
    </div>
  )
}
