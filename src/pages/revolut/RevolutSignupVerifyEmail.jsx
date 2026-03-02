import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutSignupVerifyEmail() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">Check your email on this device</h1>
      <p className="revolut-step-subtitle">
        We&apos;ve sent a verification email. Open it on this device and click the button to continue.
      </p>
      <div className="revolut-verify-icon">✉</div>
      <button type="button" className="revolut-link" style={{ marginTop: 24 }}>Resend email in 00:59</button>
      <button type="button" className="revolut-btn-primary" style={{ marginTop: 32 }} onClick={() => navigate(flowPath('/flow/revolut-signup/phone'))}>
        I&apos;ve verified my email
      </button>
    </div>
  )
}
