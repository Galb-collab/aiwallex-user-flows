import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import '../bills/BillsFlow.css'
import '../AddingVendorFlow.css'

export function AddingVendor() {
  const { flowPath } = useCompany()
  const [createVendorOpen, setCreateVendorOpen] = useState(false)
  const [vendorCreated, setVendorCreated] = useState(false)
  const [createTab, setCreateTab] = useState('general')

  const handleCreateVendor = () => {
    setVendorCreated(true)
    setCreateVendorOpen(false)
  }

  return (
    <div className="bills-content">
      <div className="bills-add-header">
        <h1 className="bills-add-title">Add new bill</h1>
        <Link to={flowPath('/flow/vendors')} className="bills-modal-close" aria-label="Close">×</Link>
      </div>

      <div className="bills-add-body adding-vendor-add-body">
        <div className="bills-invoice-preview bills-invoice-left adding-vendor-preview">
          <div className="bills-invoice-doc">
            <p>SLMob · samlee.mobbin@gmail.com</p>
            <p><strong>INVOICE INV0001</strong></p>
            <p>DATE Nov 25, 2025 · DUE On Receipt</p>
            <p>BALANCE DUE SGD S$1.00</p>
            <p>BILLED TO Alex Smith · alexsmith.mobbin@gmail.com</p>
            <table className="bills-invoice-table">
              <thead><tr><th>DESCRIPTION</th><th>RATE</th><th>QTY</th><th>AMOUNT</th></tr></thead>
              <tbody><tr><td>Team Subscription</td><td>S$1.00</td><td>1</td><td>S$1.00</td></tr></tbody>
            </table>
            <p>TOTAL S$1.00 · BALANCE DUE SGD S$1.00</p>
            <p>DATE SIGNED Nov 27, 2025</p>
          </div>
          <div className="bills-invoice-actions">
            <button type="button">−</button><span>100%</span><button type="button">+</button>
            <button type="button" aria-label="Download">↓</button><button type="button" aria-label="Delete">🗑</button>
          </div>
        </div>

        <div className="bills-add-form">
          <div className="bills-form-field">
            <label>Bill description (required)</label>
            <input type="text" defaultValue="Team Subscription" />
          </div>
          <div className="bills-form-field">
            <label>Vendor (required)</label>
            {!vendorCreated ? (
              <>
                <input type="text" placeholder="Search or add a new vendor" readOnly className="adding-vendor-search" />
                <div className="adding-vendor-empty">
                  <p>No vendors created yet</p>
                  <p className="adding-vendor-empty-sub">Create a new vendor to use with this bill.</p>
                  <button type="button" className="adding-vendor-new-btn" onClick={() => setCreateVendorOpen(true)}>+ New vendor</button>
                </div>
              </>
            ) : (
              <div className="adding-vendor-selected">
                <span className="adding-vendor-name">ASMobbin</span>
                <span className="adding-vendor-badge adding-vendor-badge-active">Active</span>
                <button type="button" className="adding-vendor-view">View</button>
              </div>
            )}
          </div>
          <div className="bills-form-field">
            <label>Purchase order #</label>
            <select><option>Choose a PO</option></select>
          </div>
          <div className="bills-form-field">
            <label>Invoice date (required)</label>
            <input type="text" defaultValue="2025-11-25" />
          </div>
          <div className="bills-form-field">
            <label>Due date (required)</label>
            <input type="text" defaultValue="2025-11-25" />
          </div>
          <div className="bills-form-field">
            <label>Invoice number (required)</label>
            <input type="text" defaultValue="INV0001" />
          </div>
          <div className="bills-form-field">
            <label>Line items</label>
            <div className="bills-line-inputs">
              <select><option>SGD Singapore Dollar</option></select>
              <select><option>Match with PO line item</option></select>
              <input type="text" defaultValue="Team Subscription" placeholder="Description" />
              <input type="text" placeholder="Price (required)" />
              <input type="text" placeholder="Quantity (required)" />
            </div>
          </div>
          <div className="bills-add-actions">
            <button type="button" className="bills-btn bills-btn-secondary">Save draft</button>
            <button type="button" className="bills-btn bills-btn-primary">Submit bill</button>
          </div>
        </div>
      </div>

      {createVendorOpen && (
        <div className="bills-modal-backdrop" onClick={() => setCreateVendorOpen(false)}>
          <div className="adding-vendor-modal" onClick={e => e.stopPropagation()}>
            <div className="adding-vendor-modal-header">
              <h2 className="adding-vendor-modal-title">Create vendor</h2>
              <button type="button" className="bills-modal-close" onClick={() => setCreateVendorOpen(false)} aria-label="Close">×</button>
            </div>
            <div className="adding-vendor-modal-tabs">
              <button type="button" className={`adding-vendor-tab ${createTab === 'general' ? 'active' : ''}`} onClick={() => setCreateTab('general')}>General</button>
              <button type="button" className={`adding-vendor-tab ${createTab === 'documents' ? 'active' : ''}`} onClick={() => setCreateTab('documents')}>Documents</button>
            </div>
            <div className="adding-vendor-modal-body">
              {createTab === 'general' && (
                <>
                  <section className="adding-vendor-section">
                    <h3 className="adding-vendor-section-title">Basic information</h3>
                    <div className="bills-form-field">
                      <label>Vendor name *</label>
                      <input type="text" placeholder="Vendor name" defaultValue="ASMobbin" />
                    </div>
                    <div className="bills-form-field">
                      <label>Vendor owner</label>
                      <select><option>Select vendor owner</option></select>
                    </div>
                    <div className="bills-form-field">
                      <label>Vendor country/region</label>
                      <select defaultValue="Singapore"><option value="">Select a country or region</option><option value="Singapore">Singapore</option></select>
                    </div>
                    <div className="bills-form-field">
                      <label>Address line 1</label>
                      <input type="text" placeholder="Address line 1" defaultValue="75 Ayer Rajah Crescent" />
                    </div>
                    <div className="bills-form-field">
                      <label>Postal code</label>
                      <input type="text" placeholder="Postal code" defaultValue="139953" />
                    </div>
                    <div className="bills-form-field">
                      <label>Business registration number</label>
                      <input type="text" placeholder="Enter vendor business registration number" />
                    </div>
                  </section>
                  <section className="adding-vendor-section">
                    <h3 className="adding-vendor-section-title">Vendor contacts</h3>
                    <button type="button" className="adding-vendor-add-btn">+ Add vendor contact</button>
                  </section>
                  <section className="adding-vendor-section">
                    <h3 className="adding-vendor-section-title">Bank account details</h3>
                    <p className="adding-vendor-section-desc">Add vendor bank details to pay bills by transfer</p>
                    <button type="button" className="adding-vendor-add-btn">+ Add bank details</button>
                  </section>
                  <section className="adding-vendor-section">
                    <h3 className="adding-vendor-section-title">Cards</h3>
                    <p className="adding-vendor-section-desc">Add cards to pay bills from this vendor</p>
                  </section>
                </>
              )}
              {createTab === 'documents' && (
                <p className="adding-vendor-docs-placeholder">Documents can be added here.</p>
              )}
            </div>
            <div className="adding-vendor-modal-footer">
              <button type="button" className="bills-btn bills-btn-secondary">Save as draft</button>
              <button type="button" className="bills-btn bills-btn-primary" onClick={handleCreateVendor}>Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
