import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useBusinessDetails } from '../../context/BusinessDetailsContext'
import './VerifyEntity.css'

const COUNTRIES = ['Singapore', 'United States of America', 'United Kingdom', 'Australia', 'Hong Kong']

export function VerifyEntity() {
  const navigate = useNavigate()
  const { data, updateData, setShowConfirmEntities, nextStep } = useBusinessDetails()

  const handleGetStarted = (e) => {
    e.preventDefault()
    if (!data.legalEntityName?.trim()) return
    setShowConfirmEntities(true)
  }

  const handleClose = () => {
    if (window.confirm('Leave? Progress is saved.')) navigate('/')
  }

  return (
    <div className="verify-entity-page">
      <header className="verify-entity-header">
        <span className="bd-logo">
          <span className="logo-icon">A</span>
          AIwallex
        </span>
        <span className="verify-entity-title">Verify your business</span>
        <button type="button" className="bd-close" onClick={handleClose} aria-label="Close">×</button>
      </header>
      <div className="verify-entity-content">
        <div className="verify-entity-illustration">🔓</div>
        <h1 className="business-details-step-title">Tell us about your business</h1>
        <p className="business-details-step-desc">
          To activate your account, please help us verify the legal entity behind your business. You will be guided to provide information such as the entity registration number and business owner details.
        </p>
        <form onSubmit={handleGetStarted} className="verify-entity-form">
          <div className="form-row">
            <div className="form-group">
              <label>Registration location</label>
              <select
                value={data.registrationLocation}
                onChange={(e) => updateData({ registrationLocation: e.target.value })}
              >
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Legal entity name</label>
              <input
                type="text"
                value={data.legalEntityName}
                onChange={(e) => updateData({ legalEntityName: e.target.value })}
                placeholder="Legal entity name"
              />
            </div>
          </div>
          <button type="button" className="add-entity-link">+ Add an entity</button>
          <button type="submit" className="btn-save-next">Get started</button>
        </form>
        <div className="verify-entity-info">
          <span className="info-icon">🚀</span>
          <p>
            AIwallex is here to support your global business needs. You can now add all of your entities and activate accounts for them in one streamlined process.
          </p>
        </div>
      </div>
      <footer className="bd-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows</span>
      </footer>
    </div>
  )
}
