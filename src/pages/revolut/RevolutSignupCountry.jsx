import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutSignupCountry() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [country, setCountry] = useState('United States')

  const handleContinue = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/revolut-signup/email'))
  }

  const countryFlags = { 'United States': '🇺🇸', 'Singapore': '🇸🇬', 'United Kingdom': '🇬🇧' }

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">Let&apos;s get started!</h1>
      <p className="revolut-step-subtitle">Select the country you set up your business in</p>
      <form onSubmit={handleContinue}>
        <label className="revolut-label">Country of incorporation</label>
        <div className="revolut-select-wrapper">
          <select className="revolut-input revolut-select" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="United States">United States</option>
            <option value="Singapore">Singapore</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
          <span className="revolut-select-flag">{countryFlags[country] || '🇺🇸'}</span>
        </div>
        <p className="revolut-legal">
          By proceeding, you agree to our <a href="#terms" className="revolut-link">Terms of Service</a> and that you have read and understood our <a href="#privacy" className="revolut-link">Privacy Policy</a>
        </p>
        <button type="submit" className="revolut-btn-primary">Continue</button>
      </form>
      <Link to={flowPath('/flow/revolut-signup')} className="revolut-link revolut-link-block">I&apos;ve been invited to join a company</Link>
      <Link to="#" className="revolut-link revolut-link-block revolut-switch-lang">Switch language: English (United Kingdom)</Link>
    </div>
  )
}
