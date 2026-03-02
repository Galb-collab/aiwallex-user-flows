import React from 'react'
import { Link } from 'react-router-dom'
import { useBusinessOwner } from '../../context/BusinessOwnerContext'

export function IdVerificationAddressStep() {
  const { data, updateData, nextStep, prevStep } = useBusinessOwner()

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">ID verification</h1>
      <div className="form-section">
        <h3 className="form-section-title">Address</h3>
        <p className="form-note">Provide a current residential address.</p>
        <div className="form-group">
          <label>Country or region</label>
          <select
            value={data.addressCountry}
            onChange={(e) => updateData({ addressCountry: e.target.value })}
          >
            <option value="Singapore">Singapore</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
          </select>
        </div>
        <div className="form-group">
          <label>Address line 1</label>
          <input
            type="text"
            value={data.addressLine1}
            onChange={(e) => updateData({ addressLine1: e.target.value })}
            placeholder="Enter street address"
          />
        </div>
        <div className="form-group">
          <label>Address line 2 (Optional)</label>
          <input
            type="text"
            value={data.addressLine2}
            onChange={(e) => updateData({ addressLine2: e.target.value })}
            placeholder="Apt., suite, building #, etc."
          />
        </div>
        <div className="form-group">
          <label>Postal code</label>
          <input
            type="text"
            value={data.postalCode}
            onChange={(e) => updateData({ postalCode: e.target.value })}
            placeholder="Postal code"
          />
        </div>
      </div>
      <div className="form-section">
        <h3 className="form-section-title">Proof of address</h3>
        <p className="form-note">
          Provide proof of your residential address, such as a recent utility bill, phone bill, bank statement, or government correspondence. The document must be in English and issued within the last 6 months. Supported file formats: PDF, JPG, JPEG, PNG min 32KB max 10MB.
        </p>
        <Link to="/flow/completing-business-details/completing-business-owner/removing-uploaded-file" className="btn-upload">
          ↑ Upload or manage file
        </Link>
      </div>
      <div className="form-actions">
        <button type="button" className="btn-back" onClick={prevStep}>Back</button>
        <button type="button" className="btn-outline">Save for later</button>
        <button type="button" className="btn-save-next" onClick={nextStep}>Submit</button>
      </div>
    </div>
  )
}
