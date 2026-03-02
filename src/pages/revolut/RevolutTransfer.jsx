import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutTransfer() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step">
        <Link to={flowPath('/flow/revolut-dashboard')} className="revolut-step-back">←</Link>
        <h1 className="revolut-step-title">New transfer</h1>
        <p className="revolut-step-subtitle">Send money to another Revolut user or bank account</p>
        <div className="revolut-transfer-options">
          <button type="button" className="revolut-add-option" onClick={() => navigate(flowPath('/flow/revolut-transfer-revtag'))}>
            <span className="revolut-add-icon">R</span>
            <div>
              <h3>To Revolut user</h3>
              <p>Enter name and Revtag to send to another Revolut account.</p>
            </div>
          </button>
          <button type="button" className="revolut-add-option" onClick={() => navigate(flowPath('/flow/revolut-bank-account-details'))}>
            <span className="revolut-add-icon">≡</span>
            <div>
              <h3>To bank account</h3>
              <p>Enter bank account details for transfer.</p>
            </div>
          </button>
          <button type="button" className="revolut-add-option" onClick={() => navigate(flowPath('/flow/revolut-recipient-address'))}>
            <span className="revolut-add-icon">📍</span>
            <div>
              <h3>International payment</h3>
              <p>Enter recipient&apos;s address for international payment.</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
