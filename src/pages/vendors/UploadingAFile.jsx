import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../bills/BillsFlow.css'
import './VendorsFlow.css'

export function UploadingAFile() {
  const navigate = useNavigate()

  return (
    <div className="bills-content">
      <div className="bills-title-row">
        <div>
          <h1 className="bills-page-title">Vendors</h1>
          <p className="bills-page-subtitle">Create and manage approved vendors for your organisation.</p>
        </div>
        <Link to="/flow/vendors" className="bills-btn bills-btn-secondary">← Back to Vendors</Link>
      </div>

      <div className="vendors-table-wrap">
        <table className="vendors-table">
          <thead>
            <tr>
              <th></th>
              <th>VENDOR NAME</th>
              <th>VENDOR OWNER</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" aria-label="Select" /></td>
              <td>Alex Smith</td>
              <td>-</td>
              <td><span className="vendors-status-active">Active</span></td>
            </tr>
            <tr>
              <td><input type="checkbox" aria-label="Select" /></td>
              <td>ASMobbin</td>
              <td>-</td>
              <td><span className="vendors-status-active">Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Vendor drawer with Documents tab and upload zone */}
      <div className="vendors-drawer-backdrop" onClick={() => navigate('/flow/vendors')} aria-hidden />
      <div className="vendors-drawer" onClick={e => e.stopPropagation()}>
        <div className="vendors-drawer-header">
          <div className="vendors-drawer-title-wrap">
            <span className="vendors-drawer-icon" aria-hidden>🏢</span>
            <div>
              <h2 className="vendors-drawer-name">Vendor</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                <span className="vendors-drawer-name" style={{ fontSize: '16px' }}>Alex Smith</span>
                <span className="vendors-status-active">Active</span>
              </div>
            </div>
          </div>
          <button type="button" className="bills-modal-close" onClick={() => navigate('/flow/vendors')} aria-label="Close">×</button>
        </div>
        <div className="vendors-drawer-tabs">
          <button type="button" className="vendors-drawer-tab">General</button>
          <button type="button" className="vendors-drawer-tab active">Documents</button>
          <button type="button" className="vendors-drawer-tab">Bills</button>
        </div>
        <div className="vendors-drawer-body">
          <p style={{ margin: '0 0 12px', fontSize: '14px', color: 'var(--psp-text)' }}>
            Provide supporting evidence about this vendor. Examples include:
          </p>
          <ul style={{ margin: '0 0 16px', paddingLeft: '20px', fontSize: '14px', color: 'var(--psp-text-muted)' }}>
            <li>Contract with a vendor</li>
            <li>Price quote</li>
            <li>Renewal forms</li>
            <li>Email correspondence</li>
          </ul>
          <div className="vendors-upload-zone">
            <p>📁 Drop or upload your files here</p>
            <p className="vendors-upload-hint">Supported files: PDF, Word, JPG, JPEG, PNG, BMP and max 10MB size</p>
            <button type="button" className="bills-btn bills-btn-primary">Choose file</button>
          </div>
          <div className="vendors-uploaded-list">
            <div className="vendors-uploaded-item">
              <span>11-27 at 12.24.01.PM@2x.png</span>
              <span style={{ fontSize: '13px', color: 'var(--psp-text-muted)' }}>99.3 KB</span>
              <span>
                <button type="button" aria-label="View">👁</button>
                <button type="button" aria-label="Delete">🗑</button>
              </span>
            </div>
          </div>
        </div>
        <div className="vendors-drawer-footer">
          <button type="button" className="bills-btn bills-btn-secondary">Manage vendor</button>
          <button type="button" className="bills-btn bills-btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  )
}
