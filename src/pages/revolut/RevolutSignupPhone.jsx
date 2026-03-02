import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutSignupPhone() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [phone, setPhone] = useState('')

  const handleContinue = (e) => {
    e.preventDefault()
    if (phone.trim()) navigate(flowPath('/flow/revolut-signup/verify-phone'))
  }

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">Enter phone number</h1>
      <p className="revolut-step-subtitle">We will send you a confirmation code.</p>
      <form onSubmit={handleContinue}>
        <div className="revolut-phone-row">
          <select className="revolut-input" style={{ width: 120, marginRight: 12 }}>
            <option value="+65">🇸🇬 +65</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
          </select>
          <input
            type="tel"
            className="revolut-input"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ flex: 1 }}
          />
        </div>
        <button type="submit" className="revolut-btn-primary" disabled={!phone.trim()}>Continue</button>
      </form>
    </div>
  )
}
