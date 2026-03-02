import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutOnboardingMonthlyVolume() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [volume, setVolume] = useState('')

  const handleContinue = (e) => {
    e.preventDefault()
    if (volume) navigate(flowPath('/flow/revolut-onboarding/website'))
  }

  const options = [
    'Less than S$ 1,000',
    'S$ 1,000 to S$ 10,000',
    'S$ 10,000 to S$ 100,000',
    'More than S$ 100,000',
  ]

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">How much money will you send each month?</h1>
      <p className="revolut-step-subtitle">Give your best estimate.</p>
      <form onSubmit={handleContinue}>
        <div className="revolut-option-list">
          {options.map(opt => (
            <button key={opt} type="button" className={`revolut-option-item ${volume === opt ? 'selected' : ''}`} onClick={() => setVolume(opt)}>
              {opt}
              <span className="revolut-option-chevron">›</span>
            </button>
          ))}
        </div>
        <button type="submit" className="revolut-btn-primary" disabled={!volume}>Continue</button>
      </form>
    </div>
  )
}
