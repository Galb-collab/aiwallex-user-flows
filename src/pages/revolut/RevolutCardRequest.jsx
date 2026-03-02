import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutCardRequest() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [note, setNote] = useState('')

  const handleRequest = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/revolut-dashboard'))
  }

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step">
        <Link to={flowPath('/flow/revolut-card-selection')} className="revolut-step-back">←</Link>
        <h1 className="revolut-step-title">Add note for approver</h1>
        <p className="revolut-step-subtitle">Why have you requested this card?</p>
        <form onSubmit={handleRequest}>
          <textarea className="revolut-input revolut-textarea" placeholder="Enter your reason..." value={note} onChange={(e) => setNote(e.target.value)} rows={4} />
          <button type="submit" className="revolut-btn-primary">Request</button>
        </form>
      </div>
    </div>
  )
}
