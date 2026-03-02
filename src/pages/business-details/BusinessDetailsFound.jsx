import React from 'react'
import { useBusinessDetails } from '../../context/BusinessDetailsContext'

export function BusinessDetailsFound() {
  const { data, updateData, nextStep } = useBusinessDetails()

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">Business details</h1>
      <p className="business-details-step-desc">
        To begin, we need to confirm your business details. Depending on the entity type, you may need to provide supporting business documents.
      </p>
      <p className="business-details-step-desc">
        We do not support businesses with shares held in the form of bearer shares. By continuing, you confirm that your business does not have bearer shares.
      </p>
      <div className="form-group">
        <label>Unique Entity Number (UEN)</label>
        <input type="text" value={data.uen} readOnly className="input-readonly" />
      </div>
      <div className="business-found-box">
        <p>
          We have found your business! Please take a moment to confirm that the details we retrieved below are correct. If this is not your business, please check if you have entered the correct business registration number above and try again. For any questions or changes, please contact support.
        </p>
      </div>
      <div className="form-group">
        <label>Legal entity name</label>
        <input
          type="text"
          value={data.legalEntityName}
          onChange={(e) => updateData({ legalEntityName: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Legal entity form</label>
        <input type="text" value={data.legalEntityForm} readOnly className="input-readonly" />
      </div>
      <div className="form-group">
        <label>Country or region</label>
        <input type="text" value={data.country} readOnly className="input-readonly" />
      </div>
      <div className="form-group">
        <label>Registered office address</label>
        <input type="text" value={data.registeredAddress} readOnly className="input-readonly" />
      </div>
      <div className="form-group">
        <label>Postal code</label>
        <input type="text" value={data.postalCode} readOnly className="input-readonly" />
      </div>
      <button type="button" className="btn-save-next" onClick={nextStep}>Save & Next</button>
    </div>
  )
}
