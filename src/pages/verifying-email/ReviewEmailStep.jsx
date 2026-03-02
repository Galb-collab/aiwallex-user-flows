import React from 'react'
import { useVerifyingEmail } from '../../context/VerifyingEmailContext'

export function ReviewEmailStep() {
  const { emailSent, resendCooldown, resendEmail, goToVerified } = useVerifyingEmail()

  return (
    <div className="vem-review">
      <div className="vem-review-illus">
        <span className="vem-illus-doc">📄</span>
        <span className="vem-illus-magnifier">🔍</span>
      </div>
      <h1 className="business-details-step-title">Review your information</h1>
      <p className="business-details-step-desc">
        Your account is almost ready. Confirm if the details below are correct.
      </p>

      {!emailSent ? (
        <div className="vem-email-warning">
          <span className="vem-warning-icon">⚠</span>
          <div>
            <strong>Your email has not been confirmed</strong> For security purposes, you will need to confirm your email before submitting your account verification.
          </div>
          <button type="button" className="vem-resend-btn" onClick={resendEmail}>
            Resend email
          </button>
        </div>
      ) : (
        <div className="vem-email-success">
          <span className="vem-success-icon">✓</span>
          <div>
            <strong>Success! Confirmation email has been sent</strong>
            <p className="vem-success-sub">Check your inbox to proceed with verification</p>
          </div>
          <button
            type="button"
            className="vem-wait-btn"
            disabled={resendCooldown > 0}
            onClick={resendCooldown === 0 ? resendEmail : undefined}
          >
            {resendCooldown > 0 ? `Wait ${resendCooldown}s to resend` : 'Resend email'}
          </button>
        </div>
      )}

      {emailSent && (
        <button type="button" className="vem-verified-link" onClick={goToVerified}>
          I&apos;ve verified my email
        </button>
      )}

      <section className="vem-details-card">
        <h2 className="vem-card-title">Your business details</h2>
        <div className="vem-detail-row">
          <span className="vem-detail-label">Business registration country or region</span>
          <span className="vem-detail-value">🇸🇬 Singapore</span>
        </div>
        <div className="vem-detail-row">
          <span className="vem-detail-label">Legal entity name</span>
          <span className="vem-detail-value vem-readonly">MOBBIN PTE. LTD.</span>
        </div>
        <div className="vem-detail-row">
          <span className="vem-detail-label">Legal entity form</span>
          <span className="vem-detail-value">EXEMPT PRIVATE COMPANY LIMITED BY SHARES</span>
        </div>
        <div className="vem-detail-row">
          <span className="vem-detail-label">Unique Entity Number (UEN)</span>
          <span className="vem-detail-value vem-readonly">201234567A</span>
        </div>
      </section>
    </div>
  )
}
