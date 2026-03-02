import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutBankAccountDetails() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [accountType, setAccountType] = useState('individual')
  const [country, setCountry] = useState('Singapore')
  const [currency, setCurrency] = useState('SGD')
  const [accountNumber, setAccountNumber] = useState('')
  const [bicSwift, setBicSwift] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleContinue = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/revolut-transfer-review'))
  }

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step">
        <Link to={flowPath('/flow/revolut-transfer')} className="revolut-step-back">←</Link>
        <h1 className="revolut-step-title">Bank account details</h1>
        <form onSubmit={handleContinue}>
          <div className="revolut-segmented">
            <button type="button" className={accountType === 'business' ? 'active' : ''} onClick={() => setAccountType('business')}>Business</button>
            <button type="button" className={accountType === 'individual' ? 'active' : ''} onClick={() => setAccountType('individual')}>Individual</button>
          </div>
          <label className="revolut-label">Country</label>
          <select className="revolut-input" value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="Singapore">Singapore</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
          <label className="revolut-label">Currency</label>
          <select className="revolut-input" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="SGD">Singapore Dollar - SGD</option>
            <option value="USD">US Dollar - USD</option>
            <option value="GBP">British Pound - GBP</option>
          </select>
          <label className="revolut-label">Account number</label>
          <input type="text" className="revolut-input" placeholder="Account number" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
          <label className="revolut-label">BIC/SWIFT</label>
          <input type="text" className="revolut-input" placeholder="BIC/SWIFT" value={bicSwift} onChange={(e) => setBicSwift(e.target.value)} />
          <label className="revolut-label">First name</label>
          <input type="text" className="revolut-input" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label className="revolut-label">Last name</label>
          <input type="text" className="revolut-input" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <button type="submit" className="revolut-btn-primary">Continue</button>
        </form>
      </div>
    </div>
  )
}
