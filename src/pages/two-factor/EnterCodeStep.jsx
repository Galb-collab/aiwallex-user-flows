import React from 'react'
import { useTwoFactorAuth } from '../../context/TwoFactorAuthContext'

export function EnterCodeStep() {
  const { code, setCode, codeError, verifyCode, goToLinkApp, goToChooseMethod, method } = useTwoFactorAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    verifyCode()
  }

  const handleBack = method === 'authenticator' ? goToLinkApp : goToChooseMethod

  return (
    <div className="tfa-enter-code">
      <h1 className="tfa-title">Enter authentication code</h1>
      <p className="tfa-desc">
        {method === 'sms'
          ? 'Enter the 6-digit code sent to your phone via SMS.'
          : 'After the QR code is scanned, enter the time-sensitive authentication code generated on the app'}
      </p>

      <form onSubmit={handleSubmit} className="tfa-code-form">
        <div className="tfa-field">
          <label htmlFor="tfa-code">Authentication code</label>
          <input
            id="tfa-code"
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="6-digit code"
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
            className={codeError ? 'tfa-input-error' : ''}
          />
          {codeError && (
            <p className="tfa-field-error">
              <span className="tfa-error-icon">⚠</span> {codeError}
            </p>
          )}
        </div>

        <div className="tfa-actions">
          <button type="button" className="tfa-btn-back" onClick={handleBack}>
            Back
          </button>
          <button type="submit" className="tfa-btn-primary">
            Verify and activate
          </button>
        </div>
      </form>
    </div>
  )
}
