import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function ThankYouStep() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  return (
    <div className="sub-app-thankyou">
      <div className="sub-app-thankyou-rocket">🚀</div>
      <h1 className="sub-app-thankyou-title">Thank you for submitting your application</h1>

      <div className="sub-app-progress">
        <div className="sub-app-progress-step completed">
          <span className="sub-app-progress-dot" />
          <span className="sub-app-progress-label">Sign up</span>
          <span className="sub-app-progress-status">Completed</span>
        </div>
        <div className="sub-app-progress-line completed" />
        <div className="sub-app-progress-step in-review">
          <span className="sub-app-progress-dot" />
          <span className="sub-app-progress-label">Verification</span>
          <span className="sub-app-progress-status">In review</span>
        </div>
        <div className="sub-app-progress-line" />
        <div className="sub-app-progress-step pending">
          <span className="sub-app-progress-dot" />
          <span className="sub-app-progress-label">Activation</span>
          <span className="sub-app-progress-status">Pending</span>
        </div>
      </div>

      <div className="sub-app-review-card">
        <h2 className="sub-app-review-card-title">We are reviewing your details</h2>
        <p className="sub-app-review-card-desc">
          Our team is processing your application promptly and expect to get back to you within 1-3 business days.
        </p>
      </div>

      <button type="button" className="sub-app-dashboard-btn" onClick={() => navigate(flowPath('/flow/completing-business-details'))}>
        Back to business details
      </button>
      <button type="button" className="sub-app-dashboard-btn btn-outline" onClick={() => navigate(flowPath('/flow/completing-business-details/setting-up-two-factor-authentication'))} style={{ marginTop: 8 }}>
        Set up two-factor authentication
      </button>
      <button type="button" className="sub-app-dashboard-btn btn-outline" onClick={() => navigate(flowPath('/flow/web-onboarding/dashboard'))} style={{ marginTop: 8 }}>
        Return to Dashboard
      </button>

      <section className="sub-app-offerings">
        <h2 className="sub-app-offerings-title">Our product offerings</h2>
        <a href="#go-global" className="sub-app-offering-card">
          <span className="sub-app-offering-icon">🌐</span>
          <span className="sub-app-offering-text">Go global with Airwallex</span>
          <span className="sub-app-offering-link-icon">↗</span>
        </a>
      </section>
    </div>
  )
}
