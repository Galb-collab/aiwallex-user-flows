import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutAccountDetails() {
  const { flowPath } = useCompany()

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step">
        <Link to={flowPath('/flow/revolut-add-money')} className="revolut-step-back">←</Link>
        <h1 className="revolut-step-title">Transfer using account details</h1>
        <p className="revolut-step-subtitle">View and share your account details to make a transfer from another bank</p>
        <div className="revolut-account-details-card">
          <div className="revolut-detail-row"><span>Account holder</span><span>MP Mobbin Pte. Ltd.</span></div>
          <div className="revolut-detail-row"><span>IBAN</span><span>SG12 3456 7890 1234 5678 9012</span></div>
          <div className="revolut-detail-row"><span>BIC/SWIFT</span><span>REVOGB21</span></div>
          <div className="revolut-detail-row"><span>Bank name</span><span>Revolut Ltd</span></div>
          <div className="revolut-detail-row"><span>Bank address</span><span>7 Westferry Circus, Canary Wharf, London E14 4HD</span></div>
          <button type="button" className="revolut-btn-primary">Copy details</button>
        </div>
      </div>
    </div>
  )
}
