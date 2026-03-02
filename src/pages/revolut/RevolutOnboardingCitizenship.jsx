import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutOnboardingCitizenship() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [search, setSearch] = useState('')
  const [citizenship, setCitizenship] = useState('Singapore')

  const handleContinue = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/revolut-onboarding/monthly-volume'))
  }

  const countries = ['Singapore', 'United States', 'United Kingdom', 'Malaysia', 'India', 'Australia']

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">What&apos;s your citizenship?</h1>
      <form onSubmit={handleContinue}>
        <input type="text" className="revolut-input revolut-search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className="revolut-citizenship-list">
          <p className="revolut-list-label">Suggested citizenships</p>
          <button type="button" className={`revolut-country-item ${citizenship === 'Singapore' ? 'selected' : ''}`} onClick={() => setCitizenship('Singapore')}>
            🇸🇬 Singapore
          </button>
          <p className="revolut-list-label">All citizenships</p>
          {countries.filter(c => !search || c.toLowerCase().includes(search.toLowerCase())).map(c => (
            <button key={c} type="button" className={`revolut-country-item ${citizenship === c ? 'selected' : ''}`} onClick={() => setCitizenship(c)}>
              {c}
            </button>
          ))}
        </div>
        <button type="submit" className="revolut-btn-primary">Continue</button>
      </form>
    </div>
  )
}
