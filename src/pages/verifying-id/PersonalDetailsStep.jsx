import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useVerifyingID } from '../../context/VerifyingIDContext'

export function PersonalDetailsStep() {
  const navigate = useNavigate()
  const { personal, updatePersonal, goToGovernmentId } = useVerifyingID()

  return (
    <div className="vid-form-wrap">
      <h1 className="business-details-step-title">Applicant&apos;s identity</h1>
      <p className="business-details-step-desc">
        Enter your personal and identity details below.
      </p>

      <div className="business-details-form">
        <div className="form-group">
          <label>Legal last name</label>
          <input
            type="text"
            value={personal.legalLastName}
            onChange={(e) => updatePersonal({ legalLastName: e.target.value })}
            placeholder="Enter legal last name"
          />
        </div>
        <div className="form-group">
          <label>Job title</label>
          <input
            type="text"
            value={personal.jobTitle}
            onChange={(e) => updatePersonal({ jobTitle: e.target.value })}
            placeholder="e.g. CEO"
          />
        </div>
        <div className="form-group">
          <label>Alias name <span className="form-optional">Optional</span></label>
          <input
            type="text"
            value={personal.aliasName}
            onChange={(e) => updatePersonal({ aliasName: e.target.value })}
            placeholder="Enter alias if applicable"
          />
        </div>
        <div className="form-group">
          <label>Date of birth</label>
          <input
            type="text"
            value={personal.dateOfBirth}
            onChange={(e) => updatePersonal({ dateOfBirth: e.target.value })}
            placeholder="yyyy-mm-dd"
          />
        </div>
        <div className="form-group">
          <label>Nationality</label>
          <select
            value={personal.nationality}
            onChange={(e) => updatePersonal({ nationality: e.target.value })}
          >
            <option value="">Select</option>
            <option value="Singapore">Singapore</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>
        </div>

        <h2 className="vid-section-title">Government ID</h2>
        <p className="form-note">
          Select an ID issuance country or region first. Afterwards, you will be asked to enter the ID details or upload the ID image.
        </p>
        <div className="form-group">
          <label>ID issuance country or region</label>
          <select
            value={personal.idIssuanceCountry}
            onChange={(e) => updatePersonal({ idIssuanceCountry: e.target.value })}
          >
            <option value="">Select</option>
            <option value="Singapore">Singapore</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button type="button" className="btn-back" onClick={() => navigate('/flow/completing-business-details/completing-business-owner')}>Back</button>
        <button type="button" className="btn-outline">Save for later</button>
        <button type="button" className="btn-save-next" onClick={goToGovernmentId}>
          Submit
        </button>
      </div>
    </div>
  )
}
