import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import './RemoveUploadedFileFlow.css'

const FILE_NAME = 'passport.pdf'
const FILE_SIZE = '565.1 KB'

export function RemoveUploadedFileFlow() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [hasFile, setHasFile] = useState(true)
  const [showRemoveModal, setShowRemoveModal] = useState(false)
  const [address, setAddress] = useState({ country: 'Singapore', line1: '', line2: '', postalCode: '' })

  const handleRemoveClick = () => {
    setShowRemoveModal(true)
  }

  const handleConfirmRemove = () => {
    setShowRemoveModal(false)
    setHasFile(false)
  }

  const handleCloseModal = () => {
    setShowRemoveModal(false)
  }

  const handleClose = () => {
    if (window.confirm('Leave verification? Progress is saved.')) navigate(flowPath('/flow/completing-business-details/completing-business-owner'))
  }

  return (
    <div className="remove-uploaded-file-flow">
      <header className="ruf-header">
        <span className="bd-logo">
          <span className="logo-icon">A</span>
          AIwallex Verification
        </span>
        <button type="button" className="bd-close" onClick={handleClose} aria-label="Close">×</button>
      </header>

      <main className="ruf-main">
        <div className="ruf-form">
          <h1 className="business-details-step-title">ID verification</h1>

          <div className="form-section">
            <h3 className="form-section-title">Address</h3>
            <p className="form-note">Provide a current residential address.</p>
            <div className="form-group">
              <label>Country or region</label>
              <select
                value={address.country}
                onChange={(e) => setAddress((a) => ({ ...a, country: e.target.value }))}
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
                value={address.line1}
                onChange={(e) => setAddress((a) => ({ ...a, line1: e.target.value }))}
                placeholder="Enter street address"
              />
            </div>
            <div className="form-group">
              <label>Address line 2 (Optional)</label>
              <input
                type="text"
                value={address.line2}
                onChange={(e) => setAddress((a) => ({ ...a, line2: e.target.value }))}
                placeholder="Apt., suite, building #, etc."
              />
            </div>
            <div className="form-group">
              <label>Postal code</label>
              <input
                type="text"
                value={address.postalCode}
                onChange={(e) => setAddress((a) => ({ ...a, postalCode: e.target.value }))}
                placeholder="Postal code"
              />
            </div>
          </div>

          <div className="form-section">
            <h3 className="form-section-title">Proof of address</h3>
            <p className="form-note">
              Provide proof of your residential address, such as a recent utility bill, phone bill, bank statement, or government correspondence. The document must be in English and issued within the last 6 months. Supported file formats: PDF, JPG, JPEG, PNG min 32KB max 10MB.
            </p>

            {hasFile ? (
              <div className="uploaded-file-card">
                <div className="uploaded-file-info">
                  <span className="file-icon">📄</span>
                  <div>
                    <div className="file-name">{FILE_NAME}</div>
                    <div className="file-meta">{FILE_SIZE} · Preview not available</div>
                  </div>
                </div>
                <div className="uploaded-file-actions">
                  <button type="button" className="file-action-btn" title="Preview" aria-label="Preview">👁</button>
                  <button type="button" className="file-action-btn file-action-remove" title="Remove" aria-label="Remove" onClick={handleRemoveClick}>🗑</button>
                </div>
              </div>
            ) : (
              <>
                <button type="button" className="btn-upload">↑ Upload file</button>
                <p className="form-required">Required</p>
              </>
            )}

            {hasFile && <button type="button" className="btn-upload-secondary">↑ Upload file</button>}
          </div>

          <div className="form-actions">
            <button type="button" className="btn-back" onClick={() => navigate(flowPath('/flow/completing-business-details/completing-business-owner'))}>Back</button>
            <button type="button" className="btn-outline">Save for later</button>
            <button type="button" className="btn-save-next">Submit</button>
          </div>
        </div>
      </main>

      {showRemoveModal && (
        <div className="ruf-modal-overlay" onClick={handleCloseModal}>
          <div className="ruf-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="ruf-modal-close" onClick={handleCloseModal} aria-label="Close">×</button>
            <h2 className="ruf-modal-title">Remove {FILE_NAME}?</h2>
            <p className="ruf-modal-text">Are you sure you want to remove {FILE_NAME}?</p>
            <div className="ruf-modal-actions">
              <button type="button" className="ruf-modal-btn-secondary" onClick={handleCloseModal}>
                No, take me back
              </button>
              <button type="button" className="ruf-modal-btn-primary" onClick={handleConfirmRemove}>
                Yes, remove file
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bd-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Removing an uploaded file</span>
      </footer>
    </div>
  )
}
