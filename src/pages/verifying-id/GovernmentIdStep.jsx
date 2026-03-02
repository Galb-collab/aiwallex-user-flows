import React, { useState } from 'react'
import { useVerifyingID } from '../../context/VerifyingIDContext'

const ACCEPT = '.pdf,.doc,.docx,.jpg,.jpeg,.png,.bmp'
const MAX_MB = 20

export function GovernmentIdStep() {
  const {
    personal,
    updatePersonal,
    governmentId,
    updateGovernmentId,
    idFrontFile,
    setIdFrontFile,
    idBackFile,
    setIdBackFile,
    goToPersonalDetails,
    goToSubmitted,
  } = useVerifyingID()

  const [removeTarget, setRemoveTarget] = useState(null) // 'front' | 'back' | null

  const handleFrontChange = (e) => {
    const file = e.target.files?.[0]
    if (file) setIdFrontFile(file)
  }

  const handleBackChange = (e) => {
    const file = e.target.files?.[0]
    if (file) setIdBackFile(file)
  }

  const handleFrontDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) setIdFrontFile(file)
  }

  const handleBackDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files?.[0]
    if (file) setIdBackFile(file)
  }

  const confirmRemove = () => {
    if (removeTarget === 'front') setIdFrontFile(null)
    if (removeTarget === 'back') setIdBackFile(null)
    setRemoveTarget(null)
  }

  const idCountry = personal.idIssuanceCountry || 'Singapore'
  const showSingaporeAlert = idCountry === 'Singapore'

  return (
    <div className="vid-form-wrap">
      <h1 className="business-details-step-title">Government ID</h1>
      <p className="business-details-step-desc">
        Select an ID issuance country or region first. You will be asked to enter the ID details or upload the ID image.
      </p>

      <div className="business-details-form">
        <div className="form-group">
          <label>ID issuance country or region</label>
          <select
            value={personal.idIssuanceCountry}
            onChange={(e) => updatePersonal({ idIssuanceCountry: e.target.value })}
          >
            <option value="">Select</option>
            <option value="Singapore">Singapore</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>
        </div>
        <div className="form-group">
          <label>ID type</label>
          <select
            value={governmentId.idType}
            onChange={(e) => updateGovernmentId({ idType: e.target.value })}
          >
            <option value="">Select</option>
            <option value="NRIC">National Registration Identity Card (NRIC)</option>
            <option value="Passport">Passport</option>
            <option value="Driving licence">Driving licence</option>
          </select>
        </div>

        {showSingaporeAlert && (
          <div className="vid-info-alert">
            <span className="vid-info-icon">ℹ</span>
            <span>If you are not a Singaporean citizen or permanent resident, please select another ID type</span>
          </div>
        )}

        <div className="form-group">
          <label>Surname in Chinese 姓 (if applicable)</label>
          <input
            type="text"
            value={governmentId.surnameChinese}
            onChange={(e) => updateGovernmentId({ surnameChinese: e.target.value })}
            placeholder="Enter surname in Chinese"
          />
        </div>
        <div className="form-group">
          <label>Given name in Chinese 名 (if applicable)</label>
          <input
            type="text"
            value={governmentId.givenNameChinese}
            onChange={(e) => updateGovernmentId({ givenNameChinese: e.target.value })}
            placeholder="Enter given name in Chinese"
          />
        </div>
      </div>

      <div className="vid-upload-row">
        <div className="vid-upload-card">
          <span className="vid-upload-card-icon">🪪</span>
          <h3 className="vid-upload-card-title">+ Identity Card (front)</h3>
          {idFrontFile ? (
            <div className="vid-uploaded">
              <div className="vid-uploaded-preview" />
              <div className="vid-uploaded-info">
                <span className="vid-uploaded-name">{idFrontFile.name}</span>
                <div className="vid-uploaded-actions">
                  <button type="button" className="vid-upload-btn" title="View">View</button>
                  <button type="button" className="vid-upload-btn vid-upload-remove" onClick={() => setRemoveTarget('front')}>Remove</button>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="vid-upload-zone"
              onDrop={handleFrontDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <p className="vid-upload-hint">Drop your files here or</p>
              <label className="vid-choose-file">
                <input type="file" accept={ACCEPT} onChange={handleFrontChange} />
                Choose file
              </label>
            </div>
          )}
        </div>
        <div className="vid-upload-card">
          <span className="vid-upload-card-icon">🪪</span>
          <h3 className="vid-upload-card-title">+ Identity Card (back)</h3>
          {idBackFile ? (
            <div className="vid-uploaded">
              <div className="vid-uploaded-preview" />
              <div className="vid-uploaded-info">
                <span className="vid-uploaded-name">{idBackFile.name}</span>
                <div className="vid-uploaded-actions">
                  <button type="button" className="vid-upload-btn" title="View">View</button>
                  <button type="button" className="vid-upload-btn vid-upload-remove" onClick={() => setRemoveTarget('back')}>Remove</button>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="vid-upload-zone"
              onDrop={handleBackDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <p className="vid-upload-hint">Drop your files here or</p>
              <label className="vid-choose-file">
                <input type="file" accept={ACCEPT} onChange={handleBackChange} />
                Choose file
              </label>
            </div>
          )}
        </div>
      </div>
      <p className="vid-upload-specs">
        Please ensure that the ID is valid and all details are legible. Supported files: PDF, Word, JPG, JPEG, PNG, BMP max {MAX_MB}MB.
      </p>

      <div className="form-section">
        <h3 className="form-section-title">Address</h3>
        <p className="form-note">Is the address printed on the ID the current residential address?</p>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="addressSameAsId"
              value="yes"
              checked={governmentId.addressSameAsId === 'yes'}
              onChange={() => updateGovernmentId({ addressSameAsId: 'yes' })}
            />
            Yes
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="addressSameAsId"
              value="no"
              checked={governmentId.addressSameAsId === 'no'}
              onChange={() => updateGovernmentId({ addressSameAsId: 'no' })}
            />
            No
          </label>
        </div>
      </div>

      <div className="form-actions">
        <button type="button" className="btn-back" onClick={goToPersonalDetails}>Back</button>
        <button type="button" className="btn-outline">Save for later</button>
        <button type="button" className="btn-save-next" onClick={goToSubmitted}>
          Submit
        </button>
      </div>

      {removeTarget && (
        <div className="vid-modal-overlay" onClick={() => setRemoveTarget(null)}>
          <div className="vid-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="vid-modal-title">Remove file?</h2>
            <p className="vid-modal-text">
              Are you sure you want to remove the {removeTarget === 'front' ? 'Identity Card (front)' : 'Identity Card (back)'} file?
            </p>
            <div className="vid-modal-actions">
              <button type="button" className="vid-modal-btn-secondary" onClick={() => setRemoveTarget(null)}>
                No, take me back
              </button>
              <button type="button" className="vid-modal-btn-primary" onClick={confirmRemove}>
                Yes, remove file
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
