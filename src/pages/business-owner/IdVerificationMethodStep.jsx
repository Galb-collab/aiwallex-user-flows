import React from 'react'
import { useBusinessOwner } from '../../context/BusinessOwnerContext'

export function IdVerificationMethodStep() {
  const { data, updateData, nextStep, prevStep } = useBusinessOwner()

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">How would you like to verify your identity?</h1>
      <div className="verification-method-cards">
        <div className={`verification-method-card ${data.verificationMethod === 'singpass' ? 'selected' : ''}`}>
          <span className="method-badge">Recommended</span>
          <h3>Singpass Myinfo</h3>
          <p>Log in with Singpass to securely retrieve your personal details for the fastest verification experience.</p>
          <button
            type="button"
            className="btn-singpass"
            onClick={() => {
              updateData({ verificationMethod: 'singpass' })
              nextStep()
            }}
          >
            Retrieve Myinfo with <span className="singpass-red">singpass</span>
          </button>
        </div>
        <div className={`verification-method-card ${data.verificationMethod === 'manual' ? 'selected' : ''}`}>
          <h3>Manual verification</h3>
          <p>Manually provide your personal details. You will be asked to take a picture of your identity document. Have the original document ready.</p>
          <button
            type="button"
            className="btn-outline"
            onClick={() => {
              updateData({ verificationMethod: 'manual' })
              nextStep()
            }}
          >
            Verify manually
          </button>
        </div>
      </div>
      <div className="form-actions">
        <button type="button" className="btn-back" onClick={prevStep}>Back</button>
      </div>
    </div>
  )
}
