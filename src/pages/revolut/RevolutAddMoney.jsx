import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutAddMoney() {
  const { flowPath, basePath } = useCompany()

  return (
    <div className="revolut-flow-layout">
    <div className="revolut-step">
      <Link to={flowPath('/flow/revolut-dashboard')} className="revolut-step-back">←</Link>
      <h1 className="revolut-step-title">Add money</h1>
      <p className="revolut-step-subtitle">Choose how to add funds to your Revolut Business account</p>
      <div className="revolut-add-money-options">
        <div className="revolut-add-option">
          <span className="revolut-add-icon">R</span>
          <div>
            <h3>Revtag transfer</h3>
            <p>Share your Revtag with others to receive money from a Revolut customer.</p>
          </div>
        </div>
        <div className="revolut-add-option">
          <span className="revolut-add-icon">≡</span>
          <div>
            <h3>Transfer using account details</h3>
            <p>View and share your account details to make a transfer from another bank.</p>
          </div>
        </div>
        <div className="revolut-add-option">
          <span className="revolut-add-icon">↻</span>
          <div>
            <h3>Exchange money from another account</h3>
            <p>Transfer money by exchanging from another account.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
