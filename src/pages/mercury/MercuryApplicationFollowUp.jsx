import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

const US_OPERATIONS_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'no-plan', label: 'No, but I plan to in the next 12 months' },
  { value: 'no-dont', label: "No, I don't plan to" },
]

const DEPOSIT_SOURCES = ['Investors', 'Revenue', 'Self']

export function MercuryApplicationFollowUp() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [usOps, setUsOps] = useState('yes')
  const [deposits, setDeposits] = useState([])
  const [file, setFile] = useState(null)

  const toggleDeposit = (item) => {
    setDeposits((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    )
  }

  const handleReview = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/mercury-all-set'))
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const f = e.dataTransfer?.files?.[0]
    if (f) setFile(f)
  }

  const handleFileChange = (e) => {
    const f = e.target?.files?.[0]
    if (f) setFile(f)
  }

  return (
    <div className="mercury-flow-layout">
      <header className="mercury-application-header">
        <div className="mercury-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          MERCURY
        </div>
      </header>
      <div className="mercury-application-followup mercury-two-col">
        <aside className="mercury-application-sidebar">
          <div className="mercury-step-progress-title">6/6</div>
          <div className="mercury-step-progress-item completed">✓ Company info</div>
          <div className="mercury-step-progress-item completed">✓ Company address</div>
          <div className="mercury-step-progress-item completed">✓ Ownership details</div>
          <div className="mercury-step-progress-item completed">✓ Company documents</div>
          <div className="mercury-step-progress-item completed">✓ Expected activity</div>
          <div className="mercury-step-progress-item completed active">✓ Follow-up questions</div>
        </aside>
        <main className="mercury-application-main">
          <h1 className="mercury-step-title">Follow-up questions</h1>
          <form onSubmit={handleReview}>
            <div className="mercury-form-section">
              <label className="mercury-label mercury-label-question">
                Do you currently have employees, investors, customers, suppliers or locations in the US?
              </label>
              <div className="mercury-radio-group">
                {US_OPERATIONS_OPTIONS.map((opt) => (
                  <label key={opt.value} className="mercury-radio-option">
                    <input
                      type="radio"
                      name="us-ops"
                      value={opt.value}
                      checked={usOps === opt.value}
                      onChange={() => setUsOps(opt.value)}
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mercury-form-section">
              <label className="mercury-label mercury-label-question">
                Where will your first deposits come from?
              </label>
              <div className="mercury-checkbox-group">
                {DEPOSIT_SOURCES.map((item) => (
                  <label key={item} className="mercury-checkbox-option">
                    <input
                      type="checkbox"
                      checked={deposits.includes(item)}
                      onChange={() => toggleDeposit(item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mercury-form-section">
              <h3 className="mercury-label mercury-label-question">Verify your physical address</h3>
              <p className="mercury-step-subtitle" style={{ marginBottom: 16 }}>
                Please provide a government-issued ID (like a driver&apos;s license) or a bank statement/utility bill from the past 60 days that clearly shows your company name or personal name and this address:
              </p>
              <div className="mercury-address-block">
                <div>75 Ayer Rajah Crescent</div>
                <div>#02-02</div>
                <div>Singapore, 05 139953</div>
                <div>SG</div>
              </div>
              <div
                className="mercury-upload-zone"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => document.getElementById('mercury-file-input')?.click()}
              >
                <input
                  id="mercury-file-input"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <span className="mercury-upload-icon">☁ ↑</span>
                <span className="mercury-upload-text">Drag and drop here or click to upload</span>
                <span className="mercury-upload-hint">You may upload one PDF, JPEG, or PNG file</span>
                {file && <span className="mercury-upload-file">{file.name}</span>}
              </div>
            </div>

            <div className="mercury-btn-group" style={{ marginTop: 32 }}>
              <button type="button" className="mercury-btn-secondary" onClick={() => navigate(-1)}>
                Back
              </button>
              <button type="submit" className="mercury-btn-primary" style={{ flex: 1 }}>
                Review Your Application
              </button>
            </div>
          </form>
        </main>
      </div>
      <div className="mercury-help-icon">?</div>
    </div>
  )
}
