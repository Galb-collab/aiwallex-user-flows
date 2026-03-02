import React from 'react'
import { useBusinessDetails } from '../../context/BusinessDetailsContext'
import './ConfirmModal.css'

export function ConfirmEntitiesModal() {
  const { data, setShowConfirmEntities, nextStep } = useBusinessDetails()

  const handleCancel = () => {
    setShowConfirmEntities(false)
  }

  const handleConfirm = () => {
    setShowConfirmEntities(false)
    nextStep()
  }

  return (
    <div className="confirm-modal-overlay" onClick={handleCancel}>
      <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="confirm-modal-close" onClick={handleCancel} aria-label="Close">×</button>
        <h2 className="confirm-modal-title">You are about to verify the following entities</h2>
        <p className="confirm-modal-desc">
          Confirm the list of entities you would like to onboard at this time. You will be guided to provide information such as the entity registration number and business owner details in the upcoming steps.
        </p>
        <ul className="confirm-entities-list">
          {data.entities?.map((ent, i) => (
            <li key={i}>
              <span className="entity-flag">🇸🇬</span>
              <span>{ent.location}</span>
              <span>{ent.name}</span>
            </li>
          ))}
        </ul>
        <div className="confirm-modal-actions">
          <button type="button" className="btn-outline" onClick={handleCancel}>Cancel</button>
          <button type="button" className="btn-primary" onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  )
}
