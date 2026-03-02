import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import './Dashboard.css'
import './SpendGeneralFlow.css'
import './ReportsFlow.css'
import './GeneratingBalanceActivityFlow.css'

const EMAIL = 'samlee@content-mobbin.com'

export function GeneratingBalanceActivityFlow() {
  const { flowPath } = useCompany()
  const navigate = useNavigate()
  const [dateFrom, setDateFrom] = useState('2025-10-27')
  const [dateTo, setDateTo] = useState('2025-11-27')
  const [format, setFormat] = useState('csv')
  const [emailNotify, setEmailNotify] = useState(true)
  const [generated, setGenerated] = useState(false)

  const ext = format === 'csv' ? 'csv' : format === 'excel' ? 'xlsx' : format === 'pdf' ? 'pdf' : 'mt940'
  const filename = `Balance_Activity_Report_${dateTo}.${ext}`

  const handleGenerate = () => setGenerated(true)
  const handleClose = () => navigate(flowPath('/flow/reports'))

  if (generated) {
    return (
      <div className="generating-balance-flow">
        <div className="gba-success-wrap">
          <div className="gba-success-modal">
            <button type="button" className="gba-modal-close" onClick={handleClose} aria-label="Close">x</button>
            <h2 className="gba-success-title">Generation completed</h2>
            <div className="gba-success-illus">Done</div>
            <p className="gba-success-desc">Your download should have started automatically, otherwise you can click <Link to={flowPath('/flow/reports')} className="gba-success-link">here</Link>.</p>
            <Link to={flowPath('/flow/reports')} className="gba-btn gba-btn-primary">Back to Reports</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="generating-balance-flow">
      <div className="gba-content">
          <div className="gba-back-row">
            <Link to={flowPath('/flow/reports')} className="gba-back-link">← Reports</Link>
          </div>
          <div className="gba-form-card">
            <div className="gba-form-header">
              <h1 className="gba-form-title">Generate balance activity report</h1>
              <button type="button" className="gba-form-close" onClick={handleClose} aria-label="Close">x</button>
            </div>
            <div className="gba-form-body">
              <div className="gba-form-row">
                <label className="gba-label">Date range</label>
                <div className="gba-date-row">
                  <input type="date" className="gba-input" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
                  <input type="date" className="gba-input" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
                </div>
              </div>
              <div className="gba-form-row">
                <label className="gba-label">Time zone</label>
                <select className="gba-select"><option>Default for account</option></select>
              </div>
              <div className="gba-form-row">
                <label className="gba-label">Currency</label>
                <select className="gba-select"><option>All currencies</option></select>
              </div>
              <div className="gba-form-row">
                <label className="gba-label">File format</label>
                <div className="gba-radio-row">
                  {['csv', 'Excel', 'MT940', 'PDF'].map((opt) => (
                    <label key={opt} className="gba-radio-label">
                      <input type="radio" name="format" checked={format === opt.toLowerCase()} onChange={() => setFormat(opt.toLowerCase())} />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="gba-form-row">
                <label className="gba-label">Transaction Type</label>
                <select className="gba-select"><option>All types</option></select>
              </div>
              <div className="gba-form-row">
                <label className="gba-label">Filename</label>
                <input type="text" className="gba-input" value={filename} readOnly />
              </div>
              <div className="gba-form-row">
                <label className="gba-checkbox-label">
                  <input type="checkbox" checked={emailNotify} onChange={(e) => setEmailNotify(e.target.checked)} />
                  <span>Email me when the report is ready ({EMAIL})</span>
                </label>
              </div>
              <div className="gba-info-box">
                <span className="gba-info-icon">i</span>
                <p>Balance activity reports have been upgraded! Transfers and transfer fees will now be separate records. To download a report with transfers and transfer fees combined, generate the legacy version. <a href="#learn" className="gba-info-link">Learn more</a></p>
              </div>
              <div className="gba-form-actions">
                <button type="button" className="gba-btn gba-btn-secondary">Generate the legacy version</button>
                <button type="button" className="gba-btn gba-btn-primary" onClick={handleGenerate}>Generate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
