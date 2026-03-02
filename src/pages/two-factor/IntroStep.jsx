import React from 'react'
import { useTwoFactorAuth } from '../../context/TwoFactorAuthContext'

export function IntroStep() {
  const { goToChooseMethod } = useTwoFactorAuth()

  return (
    <div className="tfa-intro">
      <div className="tfa-intro-icon">🔒</div>
      <h1 className="tfa-title">Set up two-factor authentication (2FA)</h1>
      <p className="tfa-desc">
        Two-factor authentication (2FA) will add an extra layer of security when logging in to your Airwallex account. To continue using Airwallex, please enable 2FA on your account.
      </p>
      <a href="#learn-more" className="tfa-learn">Learn more</a>
      <button type="button" className="tfa-btn-primary" onClick={goToChooseMethod}>
        Setup 2FA
      </button>
    </div>
  )
}
