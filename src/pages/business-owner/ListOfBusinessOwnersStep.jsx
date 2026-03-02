import React from 'react'
import { useBusinessOwner } from '../../context/BusinessOwnerContext'

export function ListOfBusinessOwnersStep() {
  const { data, updateData, nextStep, prevStep } = useBusinessOwner()

  const handleConfirm = (e) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">Confirm the list of business owners.</h1>
      <p className="business-details-step-desc">
        We are required to verify the list of all beneficial owners and all directors of your business. A beneficial owner is someone who directly or indirectly owns 25% or more of your business. A director is someone with significant responsibility to control, manage or direct your business.
      </p>
      <p className="business-details-step-desc">Please confirm the following list of individuals we have identified.</p>
      <div className="form-group">
        <label>Beneficial owner & director</label>
        <input type="text" value="Jane Smith" readOnly className="input-readonly" />
      </div>
      <div className="form-group">
        <label>Beneficial owner & director</label>
        <input type="text" value="John Doe" readOnly className="input-readonly" />
      </div>
      <p className="form-note">If the name displayed above is different from what's printed on the ID, you may change it later in the ID verification step.</p>
      <a href="#update" className="link-purple">Individual(s) listed not up-to-date? Update here</a>
      <div className="form-group">
        <label>Do any business owners hold shares or act on behalf of a third party?</label>
        <p className="form-note">This includes holding shares as a nominee or conducting business activities for another party.</p>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="ownersActOnBehalf"
              value="yes"
              checked={data.ownersActOnBehalf === 'yes'}
              onChange={() => updateData({ ownersActOnBehalf: 'yes' })}
            />
            Yes
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="ownersActOnBehalf"
              value="no"
              checked={data.ownersActOnBehalf === 'no'}
              onChange={() => updateData({ ownersActOnBehalf: 'no' })}
            />
            No
          </label>
        </div>
      </div>
      <div className="form-actions">
        <button type="button" className="btn-back" onClick={prevStep}>Back</button>
        <button type="button" className="btn-save-next" onClick={handleConfirm}>Confirm</button>
      </div>
    </div>
  )
}
