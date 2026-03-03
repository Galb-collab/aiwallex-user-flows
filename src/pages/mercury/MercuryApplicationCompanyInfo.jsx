import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

const STEPS = [
  { id: 'company-info', label: 'Company info', done: false },
  { id: 'company-address', label: 'Company address', done: false },
  { id: 'ownership', label: 'Ownership details', done: false },
  { id: 'documents', label: 'Company documents', done: false },
  { id: 'activity', label: 'Expected activity', done: false },
  { id: 'follow-up', label: 'Follow-up questions', done: false },
]

export function MercuryApplicationCompanyInfo() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [legalName, setLegalName] = useState('Mobbin')
  const [ein, setEin] = useState('')
  const [website, setWebsite] = useState('mobbin.com')
  const [country, setCountry] = useState('United States')
  const [phone, setPhone] = useState('')
  const [hasDBA, setHasDBA] = useState(false)

  const handleNext = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/mercury-application/company-address'))
  }

  return (
    <div className="mercury-step" style={{ maxWidth: 900, flexDirection: 'row', gap: 48 }}>
      <aside style={{ width: 200, flexShrink: 0 }}>
        <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 24 }}>1/6</div>
        {STEPS.map((s, i) => (
          <div key={s.id} style={{ padding: '8px 0', color: i === 0 ? 'var(--mercury-primary)' : 'var(--mercury-muted)', fontWeight: i === 0 ? 600 : 400 }}>
            {i < 1 ? '✓ ' : ''}{s.label}
          </div>
        ))}
      </aside>
      <main style={{ flex: 1 }}>
        <h1 className="mercury-step-title">Company info</h1>
        <form onSubmit={handleNext}>
          <label className="mercury-label">Legal business name</label>
          <input type="text" className="mercury-input" value={legalName} onChange={(e) => setLegalName(e.target.value)} required />
          <label className="mercury-checkbox">
            <input type="checkbox" checked={hasDBA} onChange={(e) => setHasDBA(e.target.checked)} />
            <span>My company has a DBA (Doing Business As) or an official name change</span>
          </label>
          <label className="mercury-label">Country of incorporation</label>
          <select className="mercury-input" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="United States">United States</option>
            <option value="Singapore">Singapore</option>
          </select>
          <label className="mercury-label">Phone number</label>
          <input type="tel" className="mercury-input" placeholder="+1" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label className="mercury-label">Employer Identification Number (EIN)</label>
          <input type="text" className="mercury-input" placeholder="00-0000000" value={ein} onChange={(e) => setEin(e.target.value)} />
          <a href="#ein" className="mercury-link">Need an EIN?</a>
          <label className="mercury-label">Company website</label>
          <input type="url" className="mercury-input" value={website} onChange={(e) => setWebsite(e.target.value)} />
          <label className="mercury-label">Company type</label>
          <select className="mercury-input">
            <option value="">Select</option>
            <option value="llc">LLC</option>
            <option value="c-corp">C-Corp</option>
            <option value="s-corp">S-Corp</option>
          </select>
          <label className="mercury-label">Industry</label>
          <select className="mercury-input">
            <option value="">Select</option>
            <option value="tech">Technology</option>
            <option value="saas">SaaS</option>
          </select>
          <label className="mercury-label">Company description</label>
          <textarea className="mercury-input" rows={3} placeholder="Describe your business" />
          <div className="mercury-btn-group">
            <button type="button" className="mercury-btn-secondary" onClick={() => navigate(-1)}>Back</button>
            <button type="submit" className="mercury-btn-primary" style={{ flex: 1 }}>Next</button>
          </div>
        </form>
      </main>
    </div>
  )
}
