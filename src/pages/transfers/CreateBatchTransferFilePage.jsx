import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function CreateBatchTransferFilePage() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [step, setStep] = useState(1)
  const [fileType, setFileType] = useState('upload') // upload | create
  const [fileName, setFileName] = useState('')

  const handleClose = () => navigate(flowPath('/flow/transfers'))

  if (step === 1) {
    return (
      <div className="wallet-content creating-conversion">
        <Link to={flowPath('/flow/transfers')} className="wallet-back-link">← Back</Link>
        <h1 className="wallet-section-title">Create a batch transfer file</h1>
        <p className="creating-conversion-desc">Choose how you want to create your batch transfer file.</p>

        <div className="scheduling-transfer-options conversions-options" style={{ marginTop: 24 }}>
          <button
            type="button"
            className={`scheduling-transfer-card conversions-card ${fileType === 'upload' ? 'selected' : ''}`}
            onClick={() => setFileType('upload')}
          >
            <span className="scheduling-transfer-card-icon">📤</span>
            <span className="scheduling-transfer-card-title">Upload file</span>
            <span className="scheduling-transfer-card-subtitle">Upload a CSV or Excel file with your transfer details.</span>
          </button>
          <button
            type="button"
            className={`scheduling-transfer-card conversions-card ${fileType === 'create' ? 'selected' : ''}`}
            onClick={() => setFileType('create')}
          >
            <span className="scheduling-transfer-card-icon">✏️</span>
            <span className="scheduling-transfer-card-title">Create manually</span>
            <span className="scheduling-transfer-card-subtitle">Add transfers one by one or use a template.</span>
          </button>
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <button type="button" className="wallet-btn" onClick={handleClose}>Cancel</button>
          <button type="button" className="wallet-btn wallet-btn-primary" onClick={() => setStep(2)}>
            Continue
          </button>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="wallet-content creating-conversion">
        <Link to={flowPath('/flow/transfers')} className="wallet-back-link">← Back</Link>
        <h1 className="wallet-section-title">{fileType === 'upload' ? 'Upload batch file' : 'Create batch file'}</h1>

        {fileType === 'upload' ? (
          <div className="wallet-overview-card" style={{ marginTop: 24, padding: 48, textAlign: 'center' }}>
            <p className="creating-conversion-desc">Drag and drop your file here, or click to browse.</p>
            <p className="scheduling-transfer-hint">Supported formats: CSV, XLSX. Max file size: 10MB.</p>
            <button type="button" className="wallet-btn" style={{ marginTop: 16 }}>Upload file</button>
          </div>
        ) : (
          <div className="creating-conversion-form" style={{ marginTop: 24 }}>
            <div className="scheduling-transfer-field">
              <label>Batch file name</label>
              <input
                type="text"
                placeholder="e.g. Payroll batch 2025-02"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
              />
            </div>
            <p className="creating-conversion-desc">Add recipients and amounts to your batch. You can add multiple rows.</p>
          </div>
        )}

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <button type="button" className="wallet-btn" onClick={() => setStep(1)}>Back</button>
          <button type="button" className="wallet-btn wallet-btn-primary" onClick={() => setStep(3)}>
            {fileType === 'upload' ? 'Process file' : 'Create batch'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="wallet-content creating-conversion">
      <div className="creating-conversion-success">
        <span className="creating-conversion-success-icon">✓</span>
        <h2 className="wallet-section-title">Batch transfer file created</h2>
        <p className="creating-conversion-success-text">
          Your batch transfer file has been {fileType === 'upload' ? 'uploaded' : 'created'} successfully. You can now review and submit it for approval.
        </p>
        <Link to={flowPath('/flow/transfers')} className="wallet-btn wallet-btn-primary">Back to Transfers</Link>
      </div>
    </div>
  )
}
