import React from 'react'
import { useBusinessDetails } from '../../context/BusinessDetailsContext'
import './ConfirmModal.css'

export function ConfirmEntityModal() {
  const { data, setShowConfirmEntityModal, nextStep } = useBusinessDetails()

  const handleCancel = () => {
    setShowConfirmEntityModal(false)
  }

  const handleConfirm = () => {
    setShowConfirmEntityModal(false)
    nextStep()
  }

  return (
    <div className="confirm-modal-overlay" onClick={handleCancel}>
      <div className="confirm-modal confirm-entity-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="confirm-modal-close" onClick={handleCancel} aria-label="Close">×</button>
        <h2 className="confirm-modal-title">Confirm your entity information</h2>
        <div className="confirm-entity-info-box">
          <span>ℹ️</span>
          <span>You can not change the entity information after this step.</span>
        </div>
        <div className="confirm-entity-fields">
          <div className="confirm-entity-field">
            <label>Legal entity name</label>
            <div className="value">{data.legalEntityName}</div>
          </div>
          <div className="confirm-entity-field">
            <label>Legal entity form</label>
            <div className="value">{data.legalEntityForm}</div>
          </div>
          <div className="confirm-entity-field">
            <label>Unique Entity Number (UEN)</label>
            <div className="value">{data.uen}</div>
          </div>
          <div className="confirm-entity-field">
            <label>Registered office address</label>
            <div className="value">{data.registeredAddress}, {data.postalCode}, {data.country}</div>
          </div>
          <div className="confirm-entity-field">
            <label>Principal place of business address</label>
            <div className="value">{data.principalSameAsRegistered ? 'Same as registered office address' : 'Different'}</div>
          </div>
          <div className="confirm-entity-field">
            <label>Date of incorporation</label>
            <div className="value">{data.dateOfIncorporation || '—'}</div>
          </div>
        </div>
        <div className="confirm-modal-actions">
          <button type="button" className="btn-outline" onClick={handleCancel}>Cancel</button>
          <button type="button" className="btn-primary" onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  )
}
