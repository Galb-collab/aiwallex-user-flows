import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

const ACCOUNTING_OPTIONS = [
  'Abacus', 'AccountsIQ', 'Bexio', 'Clear Books', 'Datev', 'Exact Online',
  'FreshBooks', 'Holded', 'Indy', 'LexOffice', 'Microsoft Dynamics 365 Business Central',
  'MYOB', 'Odoo', 'Oracle NetSuite', 'QuickBooks', 'Sage', 'Xero', 'Zoho Books',
]

export function RevolutAccountingSoftware() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState('')

  const handleContinue = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/revolut-dashboard'))
  }

  const filtered = ACCOUNTING_OPTIONS.filter(o => !search || o.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step revolut-modal-style">
        <button type="button" className="revolut-modal-close" onClick={() => navigate(flowPath('/flow/revolut-dashboard'))}>×</button>
        <h1 className="revolut-step-title">What accounting software do you use?</h1>
        <p className="revolut-step-subtitle">Knowing this helps us integrate popular accounting software tools into our app</p>
        <form onSubmit={handleContinue}>
          <input type="text" className="revolut-input revolut-search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
          <div className="revolut-radio-list">
            {filtered.map(opt => (
              <label key={opt} className="revolut-radio-item">
                <input type="radio" name="accounting" value={opt} checked={selected === opt} onChange={() => setSelected(opt)} />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          <button type="submit" className="revolut-btn-primary" disabled={!selected}>Continue</button>
        </form>
      </div>
    </div>
  )
}
