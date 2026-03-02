import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutOnboardingTaxResidency() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [onlySingapore, setOnlySingapore] = useState(null)

  const handleContinue = (e) => {
    e.preventDefault()
    if (onlySingapore !== null) navigate(flowPath('/flow/revolut-onboarding/corporate-personnel'))
  }

  return (
    <div className="revolut-step revolut-step-centered">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">Do you pay taxes for your business only in Singapore?</h1>
      <div className="revolut-flag-large">🇸🇬</div>
      <form onSubmit={handleContinue}>
        <div className="revolut-yes-no-buttons">
          <button type="button" className={`revolut-btn-primary ${onlySingapore === true ? 'selected' : ''}`} onClick={() => setOnlySingapore(true)}>Yes</button>
          <button type="button" className={`revolut-btn-secondary ${onlySingapore === false ? 'selected' : ''}`} onClick={() => setOnlySingapore(false)}>No</button>
        </div>
        <button type="submit" className="revolut-btn-primary" disabled={onlySingapore === null}>Continue</button>
      </form>
    </div>
  )
}
