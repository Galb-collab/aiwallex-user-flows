import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutSignupBusinessType() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [businessType, setBusinessType] = useState('Private Company Limited by Shares')
  const [marketing, setMarketing] = useState(true)

  const handleContinue = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/revolut-onboarding/name'))
  }

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">Legal business type</h1>
      <p className="revolut-step-subtitle">Select the legal type or structure that best describes your business. This helps us set up the right account for you and your business.</p>
      <form onSubmit={handleContinue}>
        <label className="revolut-label">Legal business type</label>
        <select className="revolut-input" value={businessType} onChange={(e) => setBusinessType(e.target.value)}>
          <option value="Private Company Limited by Shares">Private Company Limited by Shares</option>
          <option value="Exempt Private Company">Exempt Private Company</option>
          <option value="Limited Liability Partnership">Limited Liability Partnership</option>
        </select>
        <label className="revolut-checkbox">
          <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} />
          <span>Update me about personalized Revolut Business offers, products, and services</span>
        </label>
        <button type="submit" className="revolut-btn-primary">Continue</button>
      </form>
    </div>
  )
}
