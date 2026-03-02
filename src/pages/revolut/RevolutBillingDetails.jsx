import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutBillingDetails() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [country, setCountry] = useState('Singapore')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')

  const handleContinue = (e) => {
    e.preventDefault()
    if (address1.trim() && zip.trim() && city.trim()) navigate(flowPath('/flow/revolut-dashboard'))
  }

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step">
        <Link to={flowPath('/flow/revolut-dashboard')} className="revolut-step-back">←</Link>
        <h1 className="revolut-step-title">Billing details</h1>
        <p className="revolut-step-subtitle">Individual • Alex Smith</p>
        <form onSubmit={handleContinue}>
          <label className="revolut-label">Country</label>
          <select className="revolut-input" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="Singapore">Singapore</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
          <label className="revolut-label">Address line 1</label>
          <input type="text" className="revolut-input" placeholder="Address line 1" value={address1} onChange={(e) => setAddress1(e.target.value)} />
          <label className="revolut-label">Address line 2</label>
          <input type="text" className="revolut-input" placeholder="Address line 2 (optional)" value={address2} onChange={(e) => setAddress2(e.target.value)} />
          <label className="revolut-label">ZIP code</label>
          <input type="text" className="revolut-input" placeholder="ZIP code" value={zip} onChange={(e) => setZip(e.target.value)} />
          <label className="revolut-label">Town or city</label>
          <input type="text" className="revolut-input" placeholder="Town or city" value={city} onChange={(e) => setCity(e.target.value)} />
          <button type="submit" className="revolut-btn-primary" disabled={!address1.trim() || !zip.trim() || !city.trim()}>Continue</button>
        </form>
      </div>
    </div>
  )
}
