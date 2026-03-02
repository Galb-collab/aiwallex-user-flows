import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutOnboardingCorporatePersonnel() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [showModal, setShowModal] = useState(false)
  const [personnel, setPersonnel] = useState([])

  const handleConfirm = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/revolut-onboarding/verify-details'))
  }

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">Add key corporate personnel</h1>
      <p className="revolut-step-subtitle">List all executives (directors and CEO) and major shareholders (those who own more than 25% of the company).</p>
      <form onSubmit={handleConfirm}>
        <div className="revolut-personnel-list">
          {personnel.length === 0 ? (
            <button type="button" className="revolut-add-personnel" onClick={() => setShowModal(true)}>
              <span className="revolut-personnel-icon">👤</span>
              Add new
              <span className="revolut-add-icon">+</span>
            </button>
          ) : (
            <>
              {personnel.map((p, i) => (
                <div key={i} className="revolut-personnel-item">
                  <span className="revolut-personnel-avatar">{p.firstName?.[0]}{p.lastName?.[0]}</span>
                  {p.firstName} {p.lastName}
                </div>
              ))}
              <button type="button" className="revolut-add-personnel" onClick={() => setShowModal(true)}>
                <span className="revolut-personnel-icon">👤</span>
                Add new
                <span className="revolut-add-icon">+</span>
              </button>
            </>
          )}
        </div>
        <button type="submit" className="revolut-btn-primary">Confirm</button>
      </form>

      {showModal && (
        <RevolutPersonnelModal
          onClose={() => setShowModal(false)}
          onAdd={(p) => { setPersonnel([...personnel, p]); setShowModal(false); }}
          onAddNext={(p) => { setPersonnel([...personnel, p]); }}
        />
      )}
    </div>
  )
}

function RevolutPersonnelModal({ onClose, onAdd, onAddNext }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [alias, setAlias] = useState('')
  const [isExecutive, setIsExecutive] = useState(false)

  const handleContinue = (e) => {
    e.preventDefault()
    if (firstName.trim() && lastName.trim()) onAdd({ firstName, lastName, alias, isExecutive })
  }

  const handleAddNext = (e) => {
    e.preventDefault()
    if (firstName.trim() && lastName.trim()) {
      onAddNext({ firstName, lastName, alias, isExecutive })
      setFirstName('')
      setLastName('')
      setAlias('')
      setIsExecutive(false)
    }
  }

  return (
    <div className="revolut-modal-overlay">
      <div className="revolut-modal">
        <button type="button" className="revolut-modal-close" onClick={onClose}>×</button>
        <h2 className="revolut-modal-title">Personal details</h2>
        <p className="revolut-modal-subtitle">To add a company as a director or shareholder, or if you have a complex voting rights structure (where shares and votes aren&apos;t the same), <a href="#complex" className="revolut-link">click here</a>.</p>
        <form onSubmit={handleContinue}>
          <label className="revolut-label">First name</label>
          <input type="text" className="revolut-input" placeholder="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label className="revolut-label">Last name</label>
          <input type="text" className="revolut-input" placeholder="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <label className="revolut-label">Alias</label>
          <input type="text" className="revolut-input" placeholder="Alias" value={alias} onChange={(e) => setAlias(e.target.value)} />
          <span className="revolut-hint">Required if you have one. <a href="#alias" className="revolut-link">What&apos;s an alias?</a></span>
          <label className="revolut-checkbox">
            <input type="checkbox" checked={isExecutive} onChange={(e) => setIsExecutive(e.target.checked)} />
            <span>Executive — Chief executive officer or director, or both.</span>
          </label>
          <button type="submit" className="revolut-btn-primary" disabled={!firstName.trim() || !lastName.trim()}>Continue</button>
          <button type="button" className="revolut-btn-secondary" onClick={handleAddNext} disabled={!firstName.trim() || !lastName.trim()}>Add next</button>
        </form>
      </div>
    </div>
  )
}
