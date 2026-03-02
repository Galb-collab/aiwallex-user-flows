import React from 'react'
import { useBusinessOwner } from '../../context/BusinessOwnerContext'

export function ApplicantsIdentityStep() {
  const { data, updateData, nextStep, prevStep } = useBusinessOwner()
  const [error, setError] = React.useState('')

  const handleConfirm = (e) => {
    e.preventDefault()
    setError('')
    if (!data.selectedApplicant) {
      setError('Please select an option.')
      return
    }
    if (!data.declarationAccepted) {
      setError('Please accept the declaration.')
      return
    }
    nextStep()
  }

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">Which of the following individuals are you?</h1>
      <div className="radio-options">
        <label className={`radio-option-card ${data.selectedApplicant === 'jane' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="applicant"
            value="jane"
            checked={data.selectedApplicant === 'jane'}
            onChange={() => updateData({ selectedApplicant: 'jane' })}
          />
          <span>Beneficial owner & director — Jane Smith</span>
        </label>
        <label className={`radio-option-card ${data.selectedApplicant === 'john' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="applicant"
            value="john"
            checked={data.selectedApplicant === 'john'}
            onChange={() => updateData({ selectedApplicant: 'john' })}
          />
          <span>Beneficial owner & director — John Doe</span>
        </label>
        <label className={`radio-option-card ${data.selectedApplicant === 'none' ? 'selected' : ''}`}>
          <input
            type="radio"
            name="applicant"
            value="none"
            checked={data.selectedApplicant === 'none'}
            onChange={() => updateData({ selectedApplicant: 'none' })}
          />
          <span>None of the above</span>
          <p className="option-hint">Select this option if you are not listed. Enter your details on the next step.</p>
        </label>
      </div>
      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={data.declarationAccepted}
            onChange={(e) => updateData({ declarationAccepted: e.target.checked })}
          />
          <span>I declare that I have been authorized to act on behalf of this business, and will be able to verify my authority upon account opening.</span>
        </label>
        {error && <p className="form-error">{error}</p>}
      </div>
      <div className="form-actions">
        <button type="button" className="btn-back" onClick={prevStep}>Back</button>
        <button type="button" className="btn-save-next" onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  )
}
