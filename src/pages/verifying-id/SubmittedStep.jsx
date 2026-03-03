import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function SubmittedStep() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  return (
    <div className="vid-submitted">
      <div className="vid-submitted-icon">✓</div>
      <h1 className="business-details-step-title">ID verification submitted</h1>
      <p className="business-details-step-desc">
        Your ID details have been submitted. We will review and get back to you if we need anything else.
      </p>
      <button type="button" className="btn-save-next" onClick={() => navigate(flowPath('/flow/completing-business-details/completing-business-owner'))}>
        Back to business owner
      </button>
    </div>
  )
}
