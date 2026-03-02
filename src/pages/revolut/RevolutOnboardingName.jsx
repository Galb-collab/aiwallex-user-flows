import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutOnboardingName() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [alias, setAlias] = useState('')

  const handleContinue = (e) => {
    e.preventDefault()
    if (firstName.trim() && lastName.trim()) navigate(flowPath('/flow/revolut-onboarding/citizenship'))
  }

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">Name as in ID</h1>
      <p className="revolut-step-subtitle">Name as in your official documents</p>
      <form onSubmit={handleContinue}>
        <label className="revolut-label">First name</label>
        <input type="text" className="revolut-input" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <span className="revolut-hint">e.g., Daniel, not &quot;Dan&quot;</span>
        <label className="revolut-label">Last name</label>
        <input type="text" className="revolut-input" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <label className="revolut-label">Alias</label>
        <input type="text" className="revolut-input" placeholder="Alias" value={alias} onChange={(e) => setAlias(e.target.value)} />
        <span className="revolut-hint">Required if you have one. <a href="#alias" className="revolut-link">What&apos;s an alias?</a></span>
        <button type="submit" className="revolut-btn-primary" disabled={!firstName.trim() || !lastName.trim()}>Continue</button>
      </form>
    </div>
  )
}
