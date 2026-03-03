import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryCreateCard() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [cardholder, setCardholder] = useState('')
  const [nickname, setNickname] = useState('')
  const [cardType, setCardType] = useState('virtual')
  const [limitType, setLimitType] = useState('Daily')

  const handleCreate = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/mercury-cards'))
  }

  return (
    <div className="mercury-flow-layout">
      <div className="mercury-step mercury-two-col" style={{ maxWidth: 900, padding: '48px 24px', minHeight: 'auto' }}>
        <main style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <h1 className="mercury-step-title">Create a card</h1>
            <button type="button" className="mercury-step-back" onClick={() => navigate(-1)}>×</button>
          </div>
          <form onSubmit={handleCreate}>
            <h3 style={{ fontSize: 16, marginBottom: 16 }}>Basics</h3>
            <label className="mercury-label">Cardholder</label>
            <select className="mercury-input" value={cardholder} onChange={(e) => setCardholder(e.target.value)}>
              <option value="">Select</option>
              <option value="you">You</option>
            </select>
            <label className="mercury-label">Nickname</label>
            <input type="text" className="mercury-input" placeholder="e.g. Lunch Card" value={nickname} onChange={(e) => setNickname(e.target.value)} />
            <h3 style={{ fontSize: 16, margin: '24px 0 16px' }}>Type</h3>
            <div style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
              <label className="mercury-checkbox">
                <input type="radio" name="type" value="virtual" checked={cardType === 'virtual'} onChange={() => setCardType('virtual')} />
                <span>Virtual</span>
              </label>
              <label className="mercury-checkbox">
                <input type="radio" name="type" value="physical" checked={cardType === 'physical'} onChange={() => setCardType('physical')} />
                <span>Physical</span>
              </label>
            </div>
            <label className="mercury-label">Source account</label>
            <select className="mercury-input">
              <option>Checking .. 2502 — $998.45</option>
            </select>
            <label className="mercury-label">Spend controls</label>
            <select className="mercury-input">
              <option>None</option>
            </select>
            <label className="mercury-label">Limit type</label>
            <select className="mercury-input" value={limitType} onChange={(e) => setLimitType(e.target.value)}>
              <option value="Daily">Daily</option>
              <option value="Monthly">Monthly</option>
            </select>
            <button type="submit" className="mercury-btn-primary">Create Card</button>
          </form>
        </main>
        <aside style={{ width: 320 }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 24, border: '1px solid var(--mercury-border)', aspectRatio: '1.6' }}>
            <div style={{ fontSize: 12, marginBottom: 24 }}>Virtual Debit</div>
            <div style={{ fontSize: 12, marginBottom: 8 }}>Daily spending limit: $1,000.00</div>
            <div style={{ fontSize: 12 }}>Expiration date: October 28, 2031</div>
          </div>
        </aside>
      </div>
    </div>
  )
}
