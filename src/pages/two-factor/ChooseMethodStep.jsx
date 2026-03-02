import React from 'react'
import { useTwoFactorAuth } from '../../context/TwoFactorAuthContext'

export function ChooseMethodStep() {
  const { goToLinkApp, selectSms } = useTwoFactorAuth()

  return (
    <div className="tfa-choose">
      <h1 className="tfa-title">Set up your default 2FA method</h1>
      <p className="tfa-desc">
        Choose your default 2FA method. You can set up additional 2FA methods later in your user profile so that you can log in even if your default 2FA method is not available. <a href="#learn" className="tfa-link">Learn more</a>
      </p>

      <div className="tfa-method-cards">
        <button type="button" className="tfa-method-card" onClick={goToLinkApp}>
          <span className="tfa-method-icon">📱</span>
          <div className="tfa-method-body">
            <h2 className="tfa-method-title">Authenticator app</h2>
            <p className="tfa-method-desc">Use a 3rd party authenticator app to receive an authentication code. It works without cellular signal or internet.</p>
          </div>
        </button>
        <button type="button" className="tfa-method-card" onClick={selectSms}>
          <span className="tfa-method-icon">💬</span>
          <div className="tfa-method-body">
            <h2 className="tfa-method-title">SMS</h2>
            <p className="tfa-method-desc">Receive an authentication code via SMS. You will require cellular signal.</p>
          </div>
        </button>
      </div>
    </div>
  )
}
