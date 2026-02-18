import React from 'react'
import { useOnboarding } from '../../context/OnboardingContext'
import './VerifyBusiness.css'

const COUNTRIES = ['Singapore', 'United States of America', 'United Kingdom', 'Australia', 'Hong Kong']

export function VerifyBusiness() {
  const { data, updateData, nextStep, setShowLeaveModal } = useOnboarding()

  const handleClose = () => {
    setShowLeaveModal(true)
  }

  return (
    <div className="verify-business">
      <div className="verify-business-header">
        <h1 className="verify-business-title">Verify your business</h1>
        <button type="button" className="close-btn" onClick={handleClose} aria-label="Close">×</button>
      </div>
      <div className="verify-business-content">
        <div className="verify-business-illustration">🔓</div>
        <h2 className="step-title">Tell us about your business</h2>
        <p className="verify-business-instruction">
          To activate your account, please help us verify the legal entity behind your business. You will be guided to provide information such as the entity registration number and business owner details.
        </p>
        <div className="verify-business-fields">
          <div className="form-group">
            <label>Registration location</label>
            <select
              value={data.registrationLocation || 'Singapore'}
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
              value={data.legalEntityName || ''}
              onChange={(e) => updateData({ legalEntityName: e.target.value })}
              placeholder="Legal entity name"
            />
          </div>
        </div>
        <button type="button" className="add-entity-link" onClick={() => {}}>
          + Add an entity
        </button>
        <button type="button" className="btn-continue" onClick={nextStep}>
          Get started
        </button>
        <div className="verify-business-info">
          <span className="info-icon">🚀</span>
          <p>
            AIwallex is here to support your global business needs. You can now add all of your entities and activate accounts for them in one streamlined process.
          </p>
        </div>
      </div>
    </div>
  )
}
