import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useVerifyingID, VERIFYING_ID_STEPS } from '../context/VerifyingIDContext'
import { PersonalDetailsStep } from './verifying-id/PersonalDetailsStep'
import { GovernmentIdStep } from './verifying-id/GovernmentIdStep'
import { SubmittedStep } from './verifying-id/SubmittedStep'
import './CompletingBusinessDetailsFlow.css'
import './VerifyingIDFlow.css'

const STEP_COMPONENTS = {
  [VERIFYING_ID_STEPS.PERSONAL_DETAILS]: PersonalDetailsStep,
  [VERIFYING_ID_STEPS.GOVERNMENT_ID]: GovernmentIdStep,
  [VERIFYING_ID_STEPS.SUBMITTED]: SubmittedStep,
}

export function VerifyingIDFlow() {
  const navigate = useNavigate()
  const { step } = useVerifyingID()
  const StepComponent = STEP_COMPONENTS[step]

  const handleClose = () => {
    if (window.confirm('Leave verification? Progress is saved.')) navigate('/flow/completing-business-details/completing-business-owner')
  }

  return (
    <div className="verifying-id-flow">
      <header className="vid-header">
        <span className="bd-logo">
          <span className="logo-icon">A</span>
          Verification
        </span>
        <button type="button" className="bd-close" onClick={handleClose} aria-label="Close">×</button>
      </header>

      <main className="vid-main">
        {StepComponent && <StepComponent />}
      </main>

      <footer className="bd-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Verifying ID</span>
      </footer>
    </div>
  )
}
