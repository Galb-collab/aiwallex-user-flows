import React from 'react'
import { useTwoFactorAuth } from '../../context/TwoFactorAuthContext'

export function LinkAppStep() {
  const { goToChooseMethod, goToEnterCode } = useTwoFactorAuth()

  return (
    <div className="tfa-link-app">
      <h1 className="tfa-title">Link an authenticator app</h1>

      <div className="tfa-info-box">
        <span className="tfa-info-icon">ℹ</span>
        <div>
          <h3 className="tfa-info-title">What&apos;s an authenticator app?</h3>
          <p className="tfa-info-desc">
            Use an app like Google Authenticator, Symantec VIP or many others to generate a time-sensitive authentication code on your phone or tablet. It works even when you don&apos;t have an internet connection.
          </p>
        </div>
      </div>

      <div className="tfa-qr-section">
        <div className="tfa-qr-placeholder" />
        <div className="tfa-qr-instructions">
          <ol className="tfa-qr-list">
            <li>Add an account within the app</li>
            <li>Scan the QR code to the left</li>
          </ol>
          <a href="#cant-scan" className="tfa-link">Can&apos;t scan it?</a>
        </div>
      </div>

      <div className="tfa-actions">
        <button type="button" className="tfa-btn-back" onClick={goToChooseMethod}>Back</button>
        <button type="button" className="tfa-btn-primary" onClick={goToEnterCode}>Next</button>
      </div>
    </div>
  )
}
