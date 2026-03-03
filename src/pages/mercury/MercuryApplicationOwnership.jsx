import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryApplicationOwnership() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [citizenship, setCitizenship] = useState('Non-Resident')
  const [phoneSame, setPhoneSame] = useState(false)
  const [phone, setPhone] = useState('')
  const [dobDay, setDobDay] = useState('')
  const [dobMonth, setDobMonth] = useState('')
  const [dobYear, setDobYear] = useState('')
  const [addressSame, setAddressSame] = useState(false)

  const handleNext = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/mercury-application/documents'))
  }

  return (
    <div className="mercury-step mercury-two-col" style={{ maxWidth: 900, padding: '48px 24px' }}>
      <aside style={{ width: 200 }}>
        <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>3/6</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Company info</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>✓ Company address</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-primary)', fontWeight: 600 }}>Ownership details</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>Company documents</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>Expected activity</div>
        <div style={{ padding: '8px 0', color: 'var(--mercury-muted)' }}>Follow-up questions</div>
      </aside>
      <main style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--mercury-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>J</div>
          <span>CEO</span>
          <span style={{ background: '#e5e7eb', padding: '2px 8px', borderRadius: 4, fontSize: 12 }}>In Progress</span>
        </div>
        <h2 style={{ fontSize: 18, marginBottom: 16 }}>About</h2>
        <form onSubmit={handleNext}>
          <label className="mercury-label">Citizenship status</label>
          <select className="mercury-input" value={citizenship} onChange={(e) => setCitizenship(e.target.value)}>
            <option value="Non-Resident">Non-Resident</option>
            <option value="US Citizen">US Citizen</option>
          </select>
          <label className="mercury-checkbox">
            <input type="checkbox" checked={phoneSame} onChange={(e) => setPhoneSame(e.target.checked)} />
            <span>Personal phone is the same as business phone</span>
          </label>
          <label className="mercury-label">Phone number</label>
          <input type="tel" className="mercury-input" placeholder="+1" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label className="mercury-label">Date of birth</label>
          <div style={{ display: 'flex', gap: 12 }}>
            <input type="text" className="mercury-input" placeholder="Day" value={dobDay} onChange={(e) => setDobDay(e.target.value)} style={{ flex: 1 }} />
            <input type="text" className="mercury-input" placeholder="Month" value={dobMonth} onChange={(e) => setDobMonth(e.target.value)} style={{ flex: 1 }} />
            <input type="text" className="mercury-input" placeholder="Year" value={dobYear} onChange={(e) => setDobYear(e.target.value)} style={{ flex: 1 }} />
          </div>
        <h2 style={{ fontSize: 18, margin: '24px 0 16px' }}>Enter your residential address</h2>
        <p className="mercury-step-subtitle">We also need to know where you live. We support U.S. companies founded by people across the globe, with the exception of <a href="#prohibited" className="mercury-link">prohibited countries</a>.</p>
          <label className="mercury-checkbox">
            <input type="checkbox" checked={addressSame} onChange={(e) => setAddressSame(e.target.checked)} />
            <span>Residential address is the same as company physical address</span>
          </label>
          <label className="mercury-label">Country</label>
          <select className="mercury-input">
            <option value="United States">United States</option>
            <option value="Singapore">Singapore</option>
          </select>
          <div className="mercury-btn-group">
            <button type="button" className="mercury-btn-secondary" onClick={() => navigate(-1)}>Back</button>
            <button type="submit" className="mercury-btn-primary" style={{ flex: 1 }}>Next</button>
          </div>
        </form>
      </main>
    </div>
  )
}
