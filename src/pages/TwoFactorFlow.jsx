import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { useTwoFactorAuth, TWO_FA_STEPS } from '../context/TwoFactorAuthContext'
import { IntroStep } from './two-factor/IntroStep'
import { ChooseMethodStep } from './two-factor/ChooseMethodStep'
import { LinkAppStep } from './two-factor/LinkAppStep'
import { EnterCodeStep } from './two-factor/EnterCodeStep'
import { RecoveryCodesStep } from './two-factor/RecoveryCodesStep'
import { SuccessStep } from './two-factor/SuccessStep'
import './CompletingBusinessDetailsFlow.css'
import './TwoFactorFlow.css'

const STEP_COMPONENTS = {
  [TWO_FA_STEPS.INTRO]: IntroStep,
  [TWO_FA_STEPS.CHOOSE_METHOD]: ChooseMethodStep,
  [TWO_FA_STEPS.LINK_APP]: LinkAppStep,
  [TWO_FA_STEPS.ENTER_CODE]: EnterCodeStep,
  [TWO_FA_STEPS.RECOVERY_CODES]: RecoveryCodesStep,
  [TWO_FA_STEPS.SUCCESS]: SuccessStep,
}

export function TwoFactorFlow() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const { step, progress } = useTwoFactorAuth()
  const StepComponent = STEP_COMPONENTS[step]

  const handleClose = () => {
    if (window.confirm('Leave 2FA setup? Progress is saved.')) navigate(flowPath('/flow/completing-business-details'))
  }

  return (
    <div className="two-factor-flow">
      <header className="tfa-header">
        <span className="bd-logo">
          <span className="logo-icon">A</span>
          Airwallex
        </span>
        <span className="tfa-header-title">Set up 2FA</span>
        <button type="button" className="bd-close" onClick={handleClose} aria-label="Close">×</button>
        <div className="tfa-progress-wrap">
          <div className="tfa-progress-bar" style={{ width: `${progress * 100}%` }} />
        </div>
      </header>

      <main className="tfa-main">
        {StepComponent && <StepComponent />}
      </main>

      <footer className="bd-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Setting up two-factor authentication</span>
      </footer>
    </div>
  )
}
