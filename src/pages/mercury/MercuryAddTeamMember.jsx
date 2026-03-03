import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryAddTeamMember() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('Admin')
  const [issueCard, setIssueCard] = useState(true)
  const [limitType, setLimitType] = useState('Daily')
  const [spendingLimit, setSpendingLimit] = useState('0')

  const handleAdd = (e) => {
    e.preventDefault()
    if (firstName.trim() && lastName.trim() && email.trim()) navigate(flowPath('/flow/mercury-dashboard'))
  }

  return (
    <div className="mercury-flow-layout">
      <div className="mercury-step">
        <div className="mercury-card" style={{ maxWidth: 480 }}>
          <h1 className="mercury-step-title">Add team member</h1>
          <form onSubmit={handleAdd}>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 140px', minWidth: 0 }}>
                <label className="mercury-label">Legal first name</label>
                <input type="text" className="mercury-input" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              </div>
              <div style={{ flex: '1 1 140px', minWidth: 0 }}>
                <label className="mercury-label">Legal last name</label>
                <input type="text" className="mercury-input" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              </div>
            </div>
            <label className="mercury-label">Email</label>
            <input type="email" className="mercury-input" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label className="mercury-label">Role</label>
            <select className="mercury-input" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Admin">Admin</option>
              <option value="Member">Member</option>
              <option value="Viewer">Viewer</option>
            </select>
            <label className="mercury-checkbox">
              <input type="checkbox" checked={issueCard} onChange={(e) => setIssueCard(e.target.checked)} />
              <span>Issue virtual debit card</span>
            </label>
            <label className="mercury-label">Limit type</label>
            <select className="mercury-input" value={limitType} onChange={(e) => setLimitType(e.target.value)}>
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
            </select>
            <label className="mercury-label">Spending limit</label>
            <input type="text" className="mercury-input" placeholder="$ 0" value={spendingLimit} onChange={(e) => setSpendingLimit(e.target.value)} />
            <div className="mercury-btn-group">
              <button type="button" className="mercury-btn-secondary" onClick={() => navigate(-1)}>Cancel</button>
              <button type="submit" className="mercury-btn-primary" style={{ flex: 1 }}>Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
