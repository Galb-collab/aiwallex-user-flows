import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { useVerifyingEmail, VERIFYING_EMAIL_STEPS } from '../context/VerifyingEmailContext'
import { ReviewEmailStep } from './verifying-email/ReviewEmailStep'
import { VerifiedStep } from './verifying-email/VerifiedStep'
import './CompletingBusinessDetailsFlow.css'
import './VerifyingEmailFlow.css'

const STEP_COMPONENTS = {
  [VERIFYING_EMAIL_STEPS.REVIEW]: ReviewEmailStep,
  [VERIFYING_EMAIL_STEPS.VERIFIED]: VerifiedStep,
}

export function VerifyingEmailFlow() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const { step } = useVerifyingEmail()
  const StepComponent = STEP_COMPONENTS[step]

  const handleClose = () => {
    if (window.confirm('Leave verification? Progress is saved.')) navigate(flowPath('/flow/completing-business-details/submitting-application'))
  }

  return (
    <div className="verifying-email-flow">
      <header className="vem-header">
        <span className="bd-logo">
          <span className="logo-icon">A</span>
          Verification
        </span>
        <button type="button" className="bd-close" onClick={handleClose} aria-label="Close">×</button>
      </header>

      <main className="vem-main">
        {StepComponent && <StepComponent />}
      </main>

      <footer className="bd-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Verifying an email</span>
      </footer>
    </div>
  )
}
