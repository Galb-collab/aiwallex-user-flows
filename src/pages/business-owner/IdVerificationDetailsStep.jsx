import React from 'react'
import { useBusinessOwner } from '../../context/BusinessOwnerContext'

const NATIONALITIES = ['Singapore', 'United States', 'United Kingdom', 'Australia', 'India', 'China', 'Japan', 'Korea (Republic of)']

export function IdVerificationDetailsStep() {
  const { data, updateData, nextStep, prevStep } = useBusinessOwner()

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">ID verification</h1>
      <p className="business-details-step-desc">Complete all required information below.</p>
      <div className="form-section">
        <h3 className="form-section-title">Your personal details</h3>
        <p className="form-note">As the applicant, you will need to complete the ID verification step with a liveness check. Click "Submit" to be directed to take a photo of your original ID and a live selfie.</p>
        <a href="#update" className="link-purple">Name is not accurate? Update here</a>
        <div className="form-group">
          <label>Legal first name</label>
          <input
            type="text"
            value={data.legalFirstName}
            onChange={(e) => updateData({ legalFirstName: e.target.value })}
            placeholder="First name"
          />
        </div>
        <div className="form-group">
          <label>Legal middle name (Optional)</label>
          <input
            type="text"
            value={data.legalMiddleName}
            onChange={(e) => updateData({ legalMiddleName: e.target.value })}
            placeholder="Optional"
          />
        </div>
        <div className="form-group">
          <label>Legal last name</label>
          <input
            type="text"
            value={data.legalLastName}
            onChange={(e) => updateData({ legalLastName: e.target.value })}
            placeholder="Last name"
          />
        </div>
        <div className="form-group">
          <label>Job title</label>
          <input
            type="text"
            value={data.jobTitle}
            onChange={(e) => updateData({ jobTitle: e.target.value })}
            placeholder="e.g. CEO"
          />
        </div>
        <div className="form-group">
          <label>Alias name (Optional)</label>
          <input
            type="text"
            value={data.aliasName}
            onChange={(e) => updateData({ aliasName: e.target.value })}
            placeholder="Optional"
          />
        </div>
        <div className="form-group">
          <label>Date of birth</label>
          <input
            type="date"
            value={data.dateOfBirth}
            onChange={(e) => updateData({ dateOfBirth: e.target.value })}
            placeholder="yyyy-mm-dd"
          />
        </div>
        <div className="form-group">
          <label>Nationality</label>
          <select
            value={data.nationality}
            onChange={(e) => updateData({ nationality: e.target.value })}
          >
            <option value="">Select</option>
            {NATIONALITIES.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-section">
        <h3 className="form-section-title">Government ID</h3>
        <p className="form-note">Select an ID issuance country or region first. Afterwards, you will be asked to enter the ID details or upload the ID image.</p>
        <div className="form-group">
          <label>ID issuance country or region</label>
          <select
            value={data.idIssuanceCountry}
            onChange={(e) => updateData({ idIssuanceCountry: e.target.value })}
          >
            <option value="">Select</option>
            {NATIONALITIES.map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-actions">
        <button type="button" className="btn-back" onClick={prevStep}>Back</button>
        <button type="button" className="btn-outline">Save for later</button>
        <button type="button" className="btn-save-next" onClick={nextStep}>Submit</button>
      </div>
    </div>
  )
}
