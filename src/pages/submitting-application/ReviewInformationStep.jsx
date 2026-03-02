import React from 'react'
import { Link } from 'react-router-dom'
import { useSubmittingApplication } from '../../context/SubmittingApplicationContext'

export function ReviewInformationStep() {
  const { goToSubmit } = useSubmittingApplication()

  return (
    <div className="sub-app-review">
      <div className="sub-app-review-illus">
        <span className="sub-app-illus-doc">📄</span>
        <span className="sub-app-illus-magnifier">🔍</span>
      </div>
      <h1 className="business-details-step-title">Review your information</h1>
      <p className="business-details-step-desc">
        Your account is almost ready. Confirm if the details below are correct.
      </p>

      <div className="sub-app-email-warning">
        <span className="sub-app-warning-icon">⚠</span>
        <div>
          <strong>Your email has not been confirmed</strong> For security purposes, you will need to confirm your email before submitting your account verification.
        </div>
        <Link to="/flow/completing-business-details/submitting-application/verifying-email" className="sub-app-resend-btn">Verify email</Link>
      </div>

      <section className="sub-app-details-card">
        <h2 className="sub-app-card-title">Your business details</h2>
        <div className="sub-app-detail-row">
          <span className="sub-app-detail-label">Business registration country or region</span>
          <span className="sub-app-detail-value">🇸🇬 Singapore</span>
        </div>
        <div className="sub-app-detail-row">
          <span className="sub-app-detail-label">Legal entity name</span>
          <span className="sub-app-detail-value input-readonly">MOBBIN PTE. LTD.</span>
        </div>
        <div className="sub-app-detail-row">
          <span className="sub-app-detail-label">Legal entity form</span>
          <span className="sub-app-detail-value">EXEMPT PRIVATE COMPANY LIMITED BY SHARES</span>
        </div>
        <div className="sub-app-detail-row">
          <span className="sub-app-detail-label">Unique Entity Number (UEN)</span>
          <span className="sub-app-detail-value input-readonly">201234567A</span>
        </div>
        <div className="sub-app-detail-row">
          <span className="sub-app-detail-label">Registered office address</span>
          <span className="sub-app-detail-value">75 AYER RAJAH CRESCENT #02-02, SG, SG, 139953, Singapore</span>
        </div>
        <div className="sub-app-detail-row">
          <span className="sub-app-detail-label">Principal place of business address</span>
          <span className="sub-app-detail-value">Same as registered office address</span>
        </div>
        <div className="sub-app-detail-row">
          <span className="sub-app-detail-label">Date of incorporation</span>
          <span className="sub-app-detail-value input-readonly">15 Jan 2020</span>
        </div>
      </section>

      <section className="sub-app-details-card">
        <h2 className="sub-app-card-title">Business Profile</h2>
        <div className="sub-app-detail-row">
          <span className="sub-app-detail-label">Industry</span>
          <span className="sub-app-detail-value">Technology</span>
        </div>
        <div className="sub-app-detail-row">
          <span className="sub-app-detail-label">Products or services</span>
          <span className="sub-app-detail-value">Software and digital services</span>
        </div>
      </section>

      <div className="form-actions">
        <button type="button" className="btn-save-next" onClick={goToSubmit}>
          Next
        </button>
      </div>
    </div>
  )
}
