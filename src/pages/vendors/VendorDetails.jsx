import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import '../bills/BillsFlow.css'
import './VendorsFlow.css'

export function VendorDetails() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [tab, setTab] = useState('general')

  return (
    <div className="bills-content">
      <div className="bills-connect-banner">
        <div className="bills-connect-logos">
          <span className="bills-connect-logo">Xero</span>
          <span className="bills-connect-logo">QuickBooks</span>
        </div>
        <p>Connect your vendor data to seamlessly sync with your preferred accounting provider.</p>
        <button type="button" className="bills-connect-btn">Connect</button>
      </div>

      <div className="bills-title-row">
        <div>
          <h1 className="bills-page-title">Vendors</h1>
          <p className="bills-page-subtitle">Create and manage approved vendors for your organisation.</p>
        </div>
        <Link to={flowPath('/flow/vendors/adding-a-vendor')} className="bills-btn bills-btn-primary">+ New Vendor</Link>
      </div>

      <div className="vendors-table-wrap">
        <table className="vendors-table">
          <thead>
            <tr>
              <th></th>
              <th>VENDOR NAME</th>
              <th>VENDOR OWNER</th>
              <th>PAYMENT INFO</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" aria-label="Select" /></td>
              <td>Alex Smith</td>
              <td>-</td>
              <td>Local</td>
              <td><span className="vendors-status-active">Active</span></td>
            </tr>
            <tr>
              <td><input type="checkbox" aria-label="Select" /></td>
              <td>ASMobbin</td>
              <td>-</td>
              <td><span className="vendors-payment-missing">⚠ Missing</span></td>
              <td><span className="vendors-status-active">Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Vendor detail drawer (always open in this sub-flow) */}
      <div className="vendors-drawer-backdrop" onClick={() => navigate(flowPath('/flow/vendors'))} aria-hidden />
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
          <button type="button" className="bills-modal-close" onClick={() => navigate(flowPath('/flow/vendors'))} aria-label="Close">×</button>
        </div>
        <div className="vendors-drawer-tabs">
          <button type="button" className={`vendors-drawer-tab ${tab === 'general' ? 'active' : ''}`} onClick={() => setTab('general')}>General</button>
          <button type="button" className={`vendors-drawer-tab ${tab === 'documents' ? 'active' : ''}`} onClick={() => setTab('documents')}>Documents</button>
          <button type="button" className={`vendors-drawer-tab ${tab === 'bills' ? 'active' : ''}`} onClick={() => setTab('bills')}>Bills</button>
        </div>
        <div className="vendors-drawer-body">
          {tab === 'general' && (
            <>
              <section className="vendors-drawer-section">
                <h3 className="vendors-drawer-section-title">
                  Basic information
                  <button type="button" className="vendors-edit-btn" aria-label="Edit">✎</button>
                </h3>
                <dl className="bills-detail-dl">
                  <dt>Vendor name</dt>
                  <dd>Alex Smith</dd>
                  <dt>Vendor owner</dt>
                  <dd>-</dd>
                  <dt>Vendor country/region</dt>
                  <dd>Singapore</dd>
                  <dt>Vendor address</dt>
                  <dd>, Singapore, SG, 139953</dd>
                  <dt>Business registration number</dt>
                  <dd>-</dd>
                </dl>
              </section>
              <section className="vendors-drawer-section">
                <h3 className="vendors-drawer-section-title">Vendor contacts</h3>
                <div className="vendors-contact-row">
                  <div>
                    <strong>Alex Smith</strong>
                    <span className="vendors-badge-default">Default</span>
                    <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--psp-text-muted)' }}>+1 6502137379 · alexsmith.mobbin@gmail.com</p>
                  </div>
                  <button type="button" aria-label="More">⋯</button>
                </div>
                <button type="button" className="adding-vendor-add-btn" style={{ marginTop: '12px' }}>+ Add vendor contact</button>
              </section>
              <section className="vendors-drawer-section">
                <h3 className="vendors-drawer-section-title">Bank account details</h3>
                <p className="adding-vendor-section-desc">Add vendor bank details to pay bills by transfer</p>
                <div className="vendors-contact-row">
                  <div>
                    <span className="vendors-badge-default">(Default)</span>
                    <p style={{ margin: '4px 0 0', fontSize: '13px' }}>United States of America - USD - Local - ACH</p>
                  </div>
                  <button type="button" aria-label="More">⋯</button>
                </div>
                <Link to={flowPath('/flow/vendors/adding-bank-account-details')} className="adding-vendor-add-btn" style={{ marginTop: '12px', display: 'inline-block', textDecoration: 'none', color: 'inherit' }}>+ Add bank details</Link>
              </section>
            </>
          )}
          {tab === 'documents' && (
            <p className="adding-vendor-section-desc">Documents tab. <Link to={flowPath('/flow/vendors/uploading-a-file')}>Go to Uploading a file</Link></p>
          )}
          {tab === 'bills' && (
            <div className="vendors-empty-state">
              <p style={{ fontSize: '14px', color: 'var(--psp-text-muted)', margin: 0 }}>No result</p>
            </div>
          )}
        </div>
        <div className="vendors-drawer-footer">
          <button type="button" className="bills-btn bills-btn-secondary">Manage vendor</button>
          <button type="button" className="bills-btn bills-btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  )
}
