import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutRecipientAddress() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [country, setCountry] = useState('United States')
  const [street, setStreet] = useState('')
  const [unit, setUnit] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')

  const handleContinue = (e) => {
    e.preventDefault()
    if (street.trim() && city.trim() && zip.trim()) navigate(flowPath('/flow/revolut-transfer-review'))
  }

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step revolut-split-layout">
        <div className="revolut-split-form">
          <Link to={flowPath('/flow/revolut-transfer')} className="revolut-step-back">←</Link>
          <h1 className="revolut-step-title">Recipient&apos;s address</h1>
          <form onSubmit={handleContinue}>
            <label className="revolut-label">Country</label>
            <select className="revolut-input" value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="United States">United States</option>
              <option value="Singapore">Singapore</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
            <label className="revolut-label">Search address</label>
            <input type="text" className="revolut-input revolut-search" placeholder="Search address" />
            <label className="revolut-label">Street number and name</label>
            <input type="text" className="revolut-input" placeholder="Street number and name" value={street} onChange={(e) => setStreet(e.target.value)} />
            <label className="revolut-label">Unit, apartment, or floor number <span className="revolut-optional">Optional</span></label>
            <input type="text" className="revolut-input" placeholder="Unit, apartment, or floor number" value={unit} onChange={(e) => setUnit(e.target.value)} />
            <label className="revolut-label">City</label>
            <input type="text" className="revolut-input" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            <label className="revolut-label">State</label>
            <select className="revolut-input" value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">Select state</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
            </select>
            <label className="revolut-label">ZIP code</label>
            <input type="text" className="revolut-input" placeholder="ZIP code" value={zip} onChange={(e) => setZip(e.target.value)} />
            <label className="revolut-label">Attachment</label>
            <div className="revolut-attachment-preview">📄 Receipt attached</div>
            <button type="submit" className="revolut-btn-primary" disabled={!street.trim() || !city.trim() || !zip.trim()}>Continue</button>
          </form>
        </div>
        <div className="revolut-receipt-viewer">
          <div className="revolut-receipt-viewer-header">
            <button type="button" className="revolut-modal-close">×</button>
            <span>Invoice 8255fbed-a09a-4cd3-8c8a-71ef58d6fb37</span>
          </div>
          <div className="revolut-receipt-content">
            <p>Business Details</p>
            <p>11/17/2025, 5:32:50 PM</p>
            <p>Table: 415 | Server: Rebecca | Guests: 2</p>
            <p>1 Americano - $2.0 | 2 Chocolate Chip Cookie - $1.5 | 2 Coke - $1.5</p>
            <p>Subtotal: $5.00 | Tax: $0.00 | Total: $5.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
