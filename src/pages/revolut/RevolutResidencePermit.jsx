import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutResidencePermit() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [files, setFiles] = useState([])

  const handleContinue = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/revolut-onboarding/verify-details'))
  }

  const removeFile = (i) => {
    setFiles(files.filter((_, idx) => idx !== i))
  }

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">Residence permit</h1>
      <p className="revolut-step-subtitle">Please make sure all details are readable. Blurry uploads or pictures with glare won&apos;t be approved.</p>
      <form onSubmit={handleContinue}>
        <div className="revolut-upload-area">
          <input type="file" id="residence-upload" className="revolut-file-input" accept="image/*,.pdf" onChange={(e) => e.target.files?.length && setFiles([...files, { name: e.target.files[0].name, size: (e.target.files[0].size / 1024 / 1024).toFixed(1) + ' MB' }])} />
          <label htmlFor="residence-upload" className="revolut-upload-label">Drag and drop or click to upload</label>
        </div>
        {files.map((f, i) => (
          <div key={i} className="revolut-uploaded-file">
            <span className="revolut-file-icon">📄</span>
            <span className="revolut-file-name">{f.name}</span>
            <span className="revolut-file-size">{f.size}</span>
            <button type="button" className="revolut-file-delete" onClick={() => removeFile(i)} aria-label="Delete">🗑</button>
          </div>
        ))}
        <button type="submit" className="revolut-btn-primary">Continue</button>
      </form>
    </div>
  )
}
