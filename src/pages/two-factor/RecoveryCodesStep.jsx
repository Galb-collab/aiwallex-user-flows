import React, { useCallback } from 'react'
import { useTwoFactorAuth } from '../../context/TwoFactorAuthContext'

export function RecoveryCodesStep() {
  const { recoveryCodes, goToSuccess } = useTwoFactorAuth()

  const handleCopy = useCallback(() => {
    navigator.clipboard?.writeText(recoveryCodes.join('\n'))
  }, [recoveryCodes])

  const handleDownload = useCallback(() => {
    const blob = new Blob([recoveryCodes.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'airwallex-recovery-codes.txt'
    a.click()
    URL.revokeObjectURL(url)
  }, [recoveryCodes])

  return (
    <div className="tfa-recovery">
      <h1 className="tfa-title">Store your recovery codes somewhere safe.</h1>
      <p className="tfa-desc">
        If you lose your mobile phone or can&apos;t receive your 2FA code for some reason, you can use recovery codes to log in and edit your 2FA method. Each recovery code can be used once.
      </p>

      <div className="tfa-recovery-card">
        <ul className="tfa-recovery-list">
          {recoveryCodes.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
        <div className="tfa-recovery-actions">
          <button type="button" className="tfa-btn-outline" onClick={handleDownload}>
            Download
          </button>
          <button type="button" className="tfa-btn-outline" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>

      <div className="tfa-actions">
        <button type="button" className="tfa-btn-primary" onClick={goToSuccess}>
          Next
        </button>
      </div>
    </div>
  )
}
