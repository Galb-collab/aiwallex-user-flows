import React from 'react'
import { useOnboarding } from '../../context/OnboardingContext'
import './AccountCreated.css'

export function AccountCreated() {
  const { nextStep, goToStep, FLOW_STEPS } = useOnboarding()

  const handleActivate = () => {
    nextStep()
  }

  const handleDashboard = () => {
    goToStep(FLOW_STEPS.DASHBOARD)
  }

  return (
    <div className="account-created">
      <h1 className="step-title">Your account is created!</h1>
      <p className="account-created-text">
        To fully activate your account, we need a bit more information about your business. You can proceed to complete this now or return to it later.
      </p>
      <div className="account-created-actions">
        <button type="button" className="btn-continue btn-full" onClick={handleActivate}>
          Activate your account
        </button>
        <p className="or">or</p>
        <button type="button" className="btn-outline btn-full" onClick={handleDashboard}>
          Take me to the dashboard first
        </button>
      </div>
    </div>
  )
}
