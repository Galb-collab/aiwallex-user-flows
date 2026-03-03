import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { useAddingFunds, ADDING_FUNDS_STEPS } from '../context/AddingFundsContext'
import { SelectMethodStep } from './adding-funds/SelectMethodStep'
import { AccountDetailsStep } from './adding-funds/AccountDetailsStep'
import './CompletingBusinessDetailsFlow.css'
import './AddingFundsFlow.css'

const STEP_COMPONENTS = {
  [ADDING_FUNDS_STEPS.SELECT_METHOD]: SelectMethodStep,
  [ADDING_FUNDS_STEPS.ACCOUNT_DETAILS]: AccountDetailsStep,
}

export function AddingFundsFlow() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const { step } = useAddingFunds()
  const StepComponent = STEP_COMPONENTS[step]

  const handleClose = () => {
    if (window.confirm('Leave Add funds? Progress is saved.')) navigate(flowPath('/flow/dashboard'))
  }

  return (
    <div className="adding-funds-flow">
      <header className="af-header">
        <span className="bd-logo">
          <span className="logo-icon">A</span>
          Airwallex
        </span>
        <span className="af-header-title">Add funds</span>
        <div className="af-header-underline" />
        <button type="button" className="bd-close" onClick={handleClose} aria-label="Close">×</button>
      </header>

      <main className="af-main">
        {StepComponent && <StepComponent />}
      </main>

      <footer className="bd-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Adding funds</span>
      </footer>
    </div>
  )
}
