import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutSignupCountry() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [country, setCountry] = useState('Singapore')

  const handleContinue = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/revolut-signup/email'))
  }

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">Let&apos;s get started!</h1>
      <p className="revolut-step-subtitle">Select the country you set up your business in</p>
      <form onSubmit={handleContinue}>
        <label className="revolut-label">Country of incorporation</label>
        <select className="revolut-input" value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="Singapore">Singapore</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>
        <p className="revolut-legal">
          By proceeding, you agree to our <a href="#terms" className="revolut-link">Terms of Service</a> and that you have read and understood our <a href="#privacy" className="revolut-link">Privacy Policy</a>
        </p>
        <button type="submit" className="revolut-btn-primary">Continue</button>
      </form>
      <Link to={flowPath('/flow/revolut-signup')} className="revolut-link" style={{ display: 'block', marginTop: 24 }}>I&apos;ve been invited to join a company</Link>
    </div>
  )
}
