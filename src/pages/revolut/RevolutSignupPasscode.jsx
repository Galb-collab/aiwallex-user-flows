import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutSignupPasscode() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [passcode, setPasscode] = useState('')

  const handleChange = (e) => {
    const v = e.target.value.replace(/\D/g, '').slice(0, 6)
    setPasscode(v)
    if (v.length === 6) navigate(flowPath('/flow/revolut-signup/confirm-passcode'))
  }

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">Create passcode</h1>
      <p className="revolut-step-subtitle">Enter a 6-digit passcode to secure your account</p>
      <input
        type="password"
        inputMode="numeric"
        className="revolut-passcode-input"
        placeholder="••••••"
        value={passcode}
        onChange={handleChange}
        maxLength={6}
      />
    </div>
  )
}
