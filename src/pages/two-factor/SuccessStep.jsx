import React from 'react'
import { useNavigate } from 'react-router-dom'

export function SuccessStep() {
  const navigate = useNavigate()

  return (
    <div className="tfa-success">
      <div className="tfa-success-icon">🙌</div>
      <h1 className="tfa-success-title">Authenticator app enabled as 2FA method!</h1>
      <p className="tfa-success-desc">Your Airwallex account now has an additional layer of security.</p>

      <div className="tfa-success-card">
        <div className="tfa-success-card-header">
          <span className="tfa-success-card-icon">📱</span>
          <div>
            <h2 className="tfa-success-card-title">Use the Airwallex app for additional security</h2>
            <p className="tfa-success-card-desc">
              Save time for 2FA by confirming with one-tap and benefit from additional protection against phishing attacks.
            </p>
            <a href="#learn" className="tfa-link">Learn more</a>
          </div>
        </div>
        <hr className="tfa-success-divider" />
        <h3 className="tfa-success-card-subtitle">How to set up Airwallex app as a 2FA method</h3>
        <div className="tfa-success-steps">
          <div className="tfa-success-step-row">
            <span className="tfa-step-icon">⬇</span>
            <div>
              <strong>Download the Airwallex app</strong>
              <p className="tfa-step-note">Available on iOS and Android</p>
              <div className="tfa-store-buttons">
                <button type="button" className="tfa-store-btn">App Store</button>
                <button type="button" className="tfa-store-btn">Google Play</button>
              </div>
            </div>
            <div className="tfa-qr-small" />
          </div>
          <div className="tfa-success-step-row">
            <span className="tfa-step-icon">⏱</span>
            <div>
              <strong>Enable Airwallex app as a 2FA method</strong>
              <ol className="tfa-num-list">
                <li>Log in to the Airwallex app</li>
                <li>In the top right corner tap your profile icon</li>
                <li>Tap &quot;Set up Airwallex app as 2FA method&quot;</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="tfa-btn-primary tfa-done-btn" onClick={() => navigate('/flow/completing-business-details')}>
        Done
      </button>
    </div>
  )
}
