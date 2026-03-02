import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutSignupVerifyPhone() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [code, setCode] = useState(['', '', '', '', '', ''])

  const handleChange = (i, v) => {
    if (!/^\d*$/.test(v)) return
    const next = [...code]
    next[i] = v.slice(-1)
    setCode(next)
    if (v && i < 5) document.getElementById(`code-${i + 1}`)?.focus()
    if (next.every(Boolean)) navigate(flowPath('/flow/revolut-signup/passcode'))
  }

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">6-digit code</h1>
      <p className="revolut-step-subtitle">Please enter the code we&apos;ve sent to +65</p>
      <div className="revolut-code-inputs">
        {code.map((v, i) => (
          <input
            key={i}
            id={`code-${i}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className="revolut-code-input"
            value={v}
            onChange={(e) => handleChange(i, e.target.value)}
          />
        ))}
      </div>
      <button type="button" className="revolut-link" style={{ marginTop: 24 }}>Code hasn&apos;t arrived? Re-send code</button>
    </div>
  )
}
