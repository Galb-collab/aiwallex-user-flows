import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutOnboardingWebsite() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [url, setUrl] = useState('')

  const handleContinue = (e) => {
    e.preventDefault()
    if (url.trim()) navigate(flowPath('/flow/revolut-onboarding/tax-residency'))
  }

  const handleNoWebsite = () => {
    navigate(flowPath('/flow/revolut-onboarding/tax-residency'))
  }

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">What&apos;s your website or business page?</h1>
      <p className="revolut-step-subtitle">Your website needs to show your business is active, and the goods and services you provide</p>
      <form onSubmit={handleContinue}>
        <input
          type="url"
          className="revolut-input"
          placeholder="Type the URL here"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <span className="revolut-hint">E.g. &apos;acaishop.com&apos; or &apos;facebook.com/acaishop/&apos;</span>
        <button type="submit" className="revolut-btn-primary" disabled={!url.trim()}>Continue</button>
        <button type="button" className="revolut-btn-secondary" onClick={handleNoWebsite}>I don&apos;t have one</button>
      </form>
    </div>
  )
}
