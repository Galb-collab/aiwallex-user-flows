import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import { useVerifyingEmail } from '../../context/VerifyingEmailContext'

export function VerifiedStep() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const { email } = useVerifyingEmail()

  return (
    <div className="vem-verified">
      <div className="vem-verified-content">
        <h1 className="vem-verified-title">Your email is verified</h1>
        <p className="vem-verified-desc">
          Your email {email} is verified. You&apos;re all set—let&apos;s get you to your dashboard.
        </p>
        <button type="button" className="vem-dashboard-btn" onClick={() => navigate(flowPath('/flow/completing-business-details/submitting-application'))}>
          Back to application
        </button>
        <button type="button" className="vem-dashboard-btn btn-outline" onClick={() => navigate(flowPath('/flow/web-onboarding/dashboard'))} style={{ marginTop: 8 }}>
          Take me to dashboard
        </button>
      </div>
      <div className="vem-verified-illus">
        <span className="vem-mailbox">📬</span>
        <span className="vem-check">✓</span>
      </div>
    </div>
  )
}
