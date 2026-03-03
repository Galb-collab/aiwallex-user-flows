import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryApplicationCompanyAddress() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [country, setCountry] = useState('United States')
  const [street, setStreet] = useState('')
  const [apt, setApt] = useState('')
  const [city, setCity] = useState('')
  const [province, setProvince] = useState('')
  const [postal, setPostal] = useState('')

  const handleNext = (e) => {
    e.preventDefault()
    if (street.trim() && city.trim() && postal.trim()) navigate(flowPath('/flow/mercury-application/ownership'))
  }

  return (
    <div className="mercury-step mercury-two-col" style={{ maxWidth: 900, padding: '48px 24px' }}>
      <aside style={{ width: 200 }}>
        <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>2/6</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Company info</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-primary)', fontWeight: 600 }}>Company address</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>Ownership details</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>Company documents</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>Expected activity</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>Follow-up questions</div>
      </aside>
      <main style={{ flex: 1 }}>
        <h1 className="mercury-step-title">Enter a physical address for your business</h1>
        <p className="mercury-step-subtitle">We need to know where you and your team work day-to-day for legal and regulatory processes. This can be your residential address if you don&apos;t have an office yet. <a href="#learn" className="mercury-link">Learn more</a></p>
        <p style={{ fontSize: 14, color: 'green', marginBottom: 8 }}>✓ A verifiable international address is fine if you&apos;re outside the US.</p>
        <p style={{ fontSize: 14, color: '#b45309', marginBottom: 24 }}>⚠ We can&apos;t accept P.O. boxes, virtual addresses, mail centers, or a registered agent&apos;s address for your physical address.</p>
        <form onSubmit={handleNext}>
          <label className="mercury-label">Country or territory</label>
          <select className="mercury-input" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="United States">United States</option>
            <option value="Singapore">Singapore</option>
          </select>
          <label className="mercury-label">Street address</label>
          <input type="text" className="mercury-input" value={street} onChange={(e) => setStreet(e.target.value)} required />
          <label className="mercury-label">Apartment, suite, or floor (optional)</label>
          <input type="text" className="mercury-input" value={apt} onChange={(e) => setApt(e.target.value)} />
          <label className="mercury-label">City</label>
          <input type="text" className="mercury-input" value={city} onChange={(e) => setCity(e.target.value)} required />
          <label className="mercury-label">Province/Region</label>
          <input type="text" className="mercury-input" value={province} onChange={(e) => setProvince(e.target.value)} />
          <label className="mercury-label">Postal code</label>
          <input type="text" className="mercury-input" value={postal} onChange={(e) => setPostal(e.target.value)} required />
          <div className="mercury-btn-group">
            <button type="button" className="mercury-btn-secondary" onClick={() => navigate(-1)}>Back</button>
            <button type="submit" className="mercury-btn-primary" style={{ flex: 1 }}>Next</button>
          </div>
        </form>
      </main>
    </div>
  )
}
