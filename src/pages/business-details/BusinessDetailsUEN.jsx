import React from 'react'
import { useBusinessDetails } from '../../context/BusinessDetailsContext'

export function BusinessDetailsUEN() {
  const { data, updateData, nextStep } = useBusinessDetails()
  const hasError = data.uenError
  const isEmpty = !data.uen?.trim()

  const handleSaveNext = (e) => {
    e.preventDefault()
    if (!data.uen?.trim()) {
      updateData({ uenError: 'Required' })
      return
    }
    if (data.uen.length < 9) {
      updateData({ uenError: 'No match found. Please check if you have entered the correct business registration number and try again.' })
      return
    }
    updateData({ uenError: '', businessFound: true })
    nextStep()
  }

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">Business details</h1>
      <p className="business-details-step-desc">
        To begin, we need to confirm your business details. Depending on the entity type, you may need to provide supporting business documents.
      </p>
      <p className="business-details-step-desc">
        We do not support businesses with shares held in the form of bearer shares. By continuing, you confirm that your business does not have bearer shares.
      </p>
      <form onSubmit={handleSaveNext}>
        <div className="form-group">
          <label>Unique Entity Number (UEN)</label>
          <input
            type="text"
            value={data.uen}
            onChange={(e) => updateData({ uen: e.target.value, uenError: '' })}
            placeholder="Please provide your Unique Entity Number (UEN)"
            className={hasError ? 'input-error' : ''}
          />
          {data.uenError && (
            <p className="form-error">
              {data.uenError}
              {data.uenError !== 'Required' && ' If this error persists, please contact support.'}
            </p>
          )}
        </div>
        <p className="form-note">For this mock, enter any 9+ character UEN (e.g. 201234567A) to continue.</p>
        <button type="submit" className="btn-save-next">Save & Next</button>
      </form>
    </div>
  )
}
