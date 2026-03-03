import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { useSubmittingApplication, SUBMITTING_STEPS } from '../context/SubmittingApplicationContext'
import { ReviewInformationStep } from './submitting-application/ReviewInformationStep'
import { SubmitApplicationStep } from './submitting-application/SubmitApplicationStep'
import { ThankYouStep } from './submitting-application/ThankYouStep'
import './CompletingBusinessDetailsFlow.css'
import './SubmittingApplicationFlow.css'

const STEP_COMPONENTS = {
  [SUBMITTING_STEPS.REVIEW]: ReviewInformationStep,
  [SUBMITTING_STEPS.SUBMIT]: SubmitApplicationStep,
  [SUBMITTING_STEPS.THANK_YOU]: ThankYouStep,
}

export function SubmittingApplicationFlow() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const { step } = useSubmittingApplication()
  const StepComponent = STEP_COMPONENTS[step]

  const handleClose = () => {
    if (window.confirm('Leave verification? Progress is saved.')) navigate(flowPath('/flow/completing-business-details'))
  }

  return (
    <div className="submitting-application-flow">
      <header className="sub-app-header">
        <span className="bd-logo">
          <span className="logo-icon">A</span>
          Verification
        </span>
        <button type="button" className="bd-close" onClick={handleClose} aria-label="Close">×</button>
      </header>

      <main className="sub-app-main">
        {StepComponent && <StepComponent />}
      </main>

      <footer className="bd-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Submitting an application</span>
      </footer>
    </div>
  )
}
