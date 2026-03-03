import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryCreateRecipient() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [email, setEmail] = useState('')
  const [nickname, setNickname] = useState('Mobbin')
  const [requestTax, setRequestTax] = useState(false)
  const [country, setCountry] = useState('United States')
  const [address, setAddress] = useState('')
  const [apt, setApt] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [zip, setZip] = useState('')

  const handleCreate = (e) => {
    e.preventDefault()
    if (address.trim() && city.trim() && zip.trim()) navigate(flowPath('/flow/mercury-payment-details'))
  }

  return (
    <div className="mercury-flow-layout">
      <div className="mercury-step" style={{ maxWidth: 560 }}>
        <div className="mercury-card">
        <h1 className="mercury-step-title">Create Recipient</h1>
        <form onSubmit={handleCreate}>
          <label className="mercury-label">Email (optional)</label>
          <input type="email" className="mercury-input" placeholder="For payment receipts" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="mercury-label">Nickname (optional)</label>
          <input type="text" className="mercury-input" placeholder="For your reference only - not visible to the recipient" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          <label className="mercury-checkbox">
            <input type="checkbox" checked={requestTax} onChange={(e) => setRequestTax(e.target.checked)} />
            <span>Request Tax Documents</span>
          </label>
          <h3 style={{ fontSize: 16, margin: '24px 0 16px' }}>Address</h3>
          <label className="mercury-label">Country</label>
          <select className="mercury-input" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="United States">United States</option>
            <option value="Singapore">Singapore</option>
          </select>
          <label className="mercury-label">Recipient legal address</label>
          <input type="text" className="mercury-input" value={address} onChange={(e) => setAddress(e.target.value)} required />
          <label className="mercury-label">Apartment, suite, floor (optional)</label>
          <input type="text" className="mercury-input" value={apt} onChange={(e) => setApt(e.target.value)} />
          <label className="mercury-label">City</label>
          <input type="text" className="mercury-input" value={city} onChange={(e) => setCity(e.target.value)} required />
          <label className="mercury-label">State</label>
          <input type="text" className="mercury-input" value={state} onChange={(e) => setState(e.target.value)} />
          <label className="mercury-label">Postal / ZIP code</label>
          <input type="text" className="mercury-input" value={zip} onChange={(e) => setZip(e.target.value)} required />
          <div className="mercury-btn-group">
            <button type="button" className="mercury-btn-secondary" onClick={() => navigate(-1)}>Go Back</button>
            <button type="submit" className="mercury-btn-primary" style={{ flex: 1 }}>Create Recipient</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}
