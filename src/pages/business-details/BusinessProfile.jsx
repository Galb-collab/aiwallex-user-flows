import React from 'react'
import { useBusinessDetails } from '../../context/BusinessDetailsContext'

export function BusinessProfile() {
  const { data, updateData, nextStep, setShowConfirmEntityModal } = useBusinessDetails()

  const handleSaveNext = (e) => {
    e.preventDefault()
    setShowConfirmEntityModal(true)
  }

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">Business details</h1>
      <p className="business-details-step-desc">
        To begin, we need to confirm your business details. Depending on the entity type, you may need to provide supporting business documents.
      </p>
      <div className="form-group">
        <label>Country or region</label>
        <input
          type="text"
          value={data.country}
          onChange={(e) => updateData({ country: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Registered office address</label>
        <input
          type="text"
          value={data.registeredAddress}
          onChange={(e) => updateData({ registeredAddress: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Postal code</label>
        <input
          type="text"
          value={data.postalCode}
          onChange={(e) => updateData({ postalCode: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Date of incorporation</label>
        <input
          type="date"
          value={data.dateOfIncorporation}
          onChange={(e) => updateData({ dateOfIncorporation: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Is your principal place of business address the same as your registered office address?</label>
        <p className="form-note">The principal place of business is the primary location where the management directs, controls, or coordinates the entity's activities.</p>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="principal"
              checked={data.principalSameAsRegistered === true}
              onChange={() => updateData({ principalSameAsRegistered: true })}
            />
            Yes
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="principal"
              checked={data.principalSameAsRegistered === false}
              onChange={() => updateData({ principalSameAsRegistered: false })}
            />
            No
          </label>
        </div>
      </div>
      <div className="form-group">
        <label>Trading name (Optional)</label>
        <p className="form-note">If your business has trading names, add all of them below.</p>
        <button type="button" className="add-trading-name">+ Add a trading name</button>
      </div>
      <button type="button" className="btn-save-next" onClick={handleSaveNext}>Save & Next</button>
    </div>
  )
}
