import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutTransferRevtag() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [name, setName] = useState('Alex Smith')
  const [revtag, setRevtag] = useState('alexsmith83387')

  const handleContinue = (e) => {
    e.preventDefault()
    if (name.trim() && revtag.trim()) navigate(flowPath('/flow/revolut-transfer-review'))
  }

  return (
    <div className="revolut-flow-layout revolut-light-theme">
      <div className="revolut-step">
        <Link to={flowPath('/flow/revolut-transfer')} className="revolut-step-back">←</Link>
        <h1 className="revolut-step-title">Enter your Revolut details</h1>
        <p className="revolut-step-subtitle">These should match the information on the account that you&apos;re using to receive the payment</p>
        <form onSubmit={handleContinue}>
          <label className="revolut-label">Name</label>
          <input type="text" className="revolut-input" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <label className="revolut-label">@revtag</label>
          <input type="text" className="revolut-input" placeholder="@revtag" value={revtag} onChange={(e) => setRevtag(e.target.value)} />
          <div className="revolut-revtag-signup">
            <span className="revolut-splash-r">R</span>
            <div>
              <p>Don&apos;t have a Revolut account?</p>
              <Link to={flowPath('/flow/revolut-signup')} className="revolut-link">Sign up here</Link>
            </div>
          </div>
          <button type="submit" className="revolut-btn-primary" disabled={!name.trim() || !revtag.trim()}>Continue</button>
        </form>
      </div>
    </div>
  )
}
