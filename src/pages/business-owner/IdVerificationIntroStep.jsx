import React from 'react'
import { Link } from 'react-router-dom'
import { useBusinessOwner } from '../../context/BusinessOwnerContext'

export function IdVerificationIntroStep() {
  const { nextStep, prevStep } = useBusinessOwner()

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">ID verification</h1>
      <p className="business-details-step-desc">
        Submit ID details for each individual to verify their identity. To update the list of individuals below, go back to previous steps and edit the list of business owners.
      </p>
      <div className="id-verification-list">
        <div className="id-verification-item">
          <span className="id-item-label">Yourself (Applicant)</span>
          <span className="id-item-status">To be submitted</span>
          <Link to="/flow/completing-business-details/completing-business-owner/verifying-id" className="id-item-edit" aria-label="Edit">✎</Link>
        </div>
        <div className="id-verification-item">
          <span className="id-item-label">Beneficial owner & director</span>
          <span className="id-item-status">To be submitted</span>
          <button type="button" className="id-item-edit" aria-label="Edit">✎</button>
        </div>
        <div className="id-verification-item">
          <span className="id-item-label">Beneficial owner & director</span>
          <span className="id-item-status">To be submitted</span>
          <button type="button" className="id-item-edit" aria-label="Edit">✎</button>
        </div>
      </div>
      <div className="form-actions">
        <button type="button" className="btn-back" onClick={prevStep}>Back</button>
        <button type="button" className="btn-save-next" onClick={nextStep}>Next</button>
      </div>
    </div>
  )
}
