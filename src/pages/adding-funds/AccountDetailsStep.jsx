import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddingFunds } from '../../context/AddingFundsContext'

function CopyButton() {
  return (
    <button type="button" className="af-copy-btn" title="Copy" aria-label="Copy">📋</button>
  )
}

export function AccountDetailsStep() {
  const navigate = useNavigate()
  const { goToSelectMethod } = useAddingFunds()
  const [detailsOpen, setDetailsOpen] = useState(true)
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(true)

  return (
    <div className="af-flow">
      <h1 className="af-title">Add SGD to your wallet</h1>
      <p className="af-desc">
        Send SGD to the following account. To receive funds in other currencies, please use <a href="#global" className="af-link">Global Accounts</a>.
      </p>

      <div className="af-section">
        <button type="button" className="af-section-header" onClick={() => setDetailsOpen((o) => !o)}>
          <span>Account details</span>
          <span className="af-chevron">{detailsOpen ? '▲' : '▼'}</span>
        </button>
        {detailsOpen && (
          <div className="af-section-body">
            <div className="af-detail-row">
              <span className="af-detail-label">Account name</span>
              <span className="af-detail-value">Airwallex (Singapore) Pte Ltd <CopyButton /></span>
            </div>
            <div className="af-detail-row">
              <span className="af-detail-label">Bank account number</span>
              <span className="af-detail-value">•••••••••••• <CopyButton /></span>
            </div>
            <div className="af-detail-row">
              <span className="af-detail-label">Bank code</span>
              <span className="af-detail-value">7171 <CopyButton /></span>
            </div>
            <div className="af-detail-row">
              <span className="af-detail-label">Branch code</span>
              <span className="af-detail-value">072 <CopyButton /></span>
            </div>
            <div className="af-detail-row">
              <span className="af-detail-label">SWIFT code</span>
              <span className="af-detail-value">DBSSSGSG <CopyButton /></span>
            </div>
            <div className="af-detail-row">
              <span className="af-detail-label">Bank name</span>
              <span className="af-detail-value">DBS Bank Ltd <CopyButton /></span>
            </div>
            <div className="af-detail-row">
              <span className="af-detail-label">Account location</span>
              <span className="af-detail-value">Singapore</span>
            </div>
            <div className="af-detail-row">
              <span className="af-detail-label">Account type</span>
              <span className="af-detail-value">Current</span>
            </div>
            <div className="af-detail-row">
              <span className="af-detail-label">Bank address</span>
              <span className="af-detail-value">12 Marina Boulevard, DBS Asia Central, Marina Bay Financial Centre Tower 3 <CopyButton /></span>
            </div>
            <div className="af-detail-row">
              <span className="af-detail-label">City</span>
              <span className="af-detail-value">Singapore</span>
            </div>
            <div className="af-detail-row">
              <span className="af-detail-label">Postal Code</span>
              <span className="af-detail-value">018982 <CopyButton /></span>
            </div>
            <div className="af-detail-row">
              <span className="af-detail-label">Account created on</span>
              <span className="af-detail-value">15 Jan 2024 <CopyButton /></span>
            </div>
          </div>
        )}
      </div>

      <div className="af-section">
        <button type="button" className="af-section-header" onClick={() => setCapabilitiesOpen((o) => !o)}>
          <span>Account capabilities</span>
          <span className="af-chevron">{capabilitiesOpen ? '▲' : '▼'}</span>
        </button>
        {capabilitiesOpen && (
          <div className="af-section-body">
            <p className="af-cap-title">Accept funds via</p>
            <ul className="af-cap-list">
              <li><span className="af-cap-check">✓</span> Domestic FAST Transfer — Takes 0-1 days</li>
              <li><span className="af-cap-check">✓</span> Domestic MEPS Transfer — Takes 0-1 days</li>
              <li><span className="af-cap-check">✓</span> Domestic GIRO Transfer — Takes 1-2 days</li>
              <li><span className="af-cap-check">✓</span> International SWIFT Transfer — Takes 0-3 days</li>
            </ul>
          </div>
        )}
      </div>

      <div className="af-actions">
        <button type="button" className="af-back" onClick={goToSelectMethod}>Back</button>
        <button type="button" className="af-done" onClick={() => navigate('/')}>Done</button>
      </div>
    </div>
  )
}
