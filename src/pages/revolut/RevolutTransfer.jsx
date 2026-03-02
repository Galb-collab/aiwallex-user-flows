import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutTransfer() {
  const { flowPath } = useCompany()

  return (
    <div className="revolut-flow-layout">
    <div className="revolut-step">
      <Link to={flowPath('/flow/revolut-dashboard')} className="revolut-step-back">←</Link>
      <h1 className="revolut-step-title">New transfer</h1>
      <p className="revolut-step-subtitle">Send money to another Revolut user or bank account</p>
      <div className="revolut-transfer-form">
        <input type="text" className="revolut-input" placeholder="Amount" />
        <input type="text" className="revolut-input" placeholder="Recipient" />
        <button type="button" className="revolut-btn-primary">Review transfer</button>
      </div>
    </div>
    </div>
  )
}
