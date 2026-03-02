import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../BillingFlow.css'
import './CreatingACustomer.css'
import './CreatingAProduct.css'

export function CreatingAProduct() {
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [productUnit, setProductUnit] = useState('')
  const [additionalOpen, setAdditionalOpen] = useState(false)
  const [createdProduct, setCreatedProduct] = useState(null)
  const [deactivateOpen, setDeactivateOpen] = useState(false)

  const handleCreateProduct = (e) => {
    e.preventDefault()
    const name = productName.trim()
    if (!name) return
    setCreatedProduct({
      id: 'prd_sgpd4vpsrhdd2vdqf9c',
      name,
      description: description.trim() || 'Adding an additional seat to the team subscription',
    })
  }

  const handleCreateAnother = () => {
    setCreatedProduct(null)
    setProductName('')
    setDescription('')
    setProductUnit('')
  }

  if (createdProduct) {
    return (
      <div className="billing-main billing-create-product">
        <div className="billing-create-customer-header">
          <h1 className="billing-create-customer-title">Create product</h1>
          <Link to="/flow/billing/products" className="bills-modal-close" aria-label="Close">×</Link>
        </div>
        <div className="billing-create-customer-progress" aria-hidden />

        <div className="billing-create-product-success">
          <div className="billing-create-product-success-icon" aria-hidden>🤝</div>
          <h2 className="billing-create-product-success-title">Your product has been created</h2>
          <p className="billing-create-product-success-id">
            <Link to="/flow/billing/products" className="billing-create-product-id-link">Product ID: {createdProduct.id}</Link>
          </p>
          <div className="billing-create-product-card">
            <div className="billing-create-product-card-icon">🪑</div>
            <div className="billing-create-product-card-body">
              <h3 className="billing-create-product-card-name">{createdProduct.name}</h3>
              <p className="billing-create-product-card-desc">{createdProduct.description}</p>
            </div>
            <Link
              to="/flow/billing/creating-a-price"
              state={{ fromProduct: true, productId: createdProduct.id, productName: createdProduct.name }}
              className="billing-create-product-new-price-btn"
            >
              New price
            </Link>
          </div>
          <div className="billing-create-product-success-actions">
            <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setDeactivateOpen(true)}>
              Deactivate product
            </button>
            <button type="button" className="bills-btn bills-btn-secondary" onClick={handleCreateAnother}>
              Create another
            </button>
            <Link to="/flow/billing/products" className="bills-btn bills-btn-primary">
              View product
            </Link>
          </div>
        </div>

        {deactivateOpen && (
          <>
            <div className="billing-deactivate-backdrop" onClick={() => setDeactivateOpen(false)} aria-hidden />
            <div className="billing-deactivate-modal">
              <div className="billing-deactivate-modal-header">
                <h2 className="billing-deactivate-modal-title">Deactivate product</h2>
                <button type="button" className="bills-modal-close" onClick={() => setDeactivateOpen(false)} aria-label="Close">×</button>
              </div>
              <p className="billing-deactivate-modal-message">
                Deactivating this product will hide it from new invoice and subscription creation. Are you sure you want to deactivate this product?
              </p>
              <div className="billing-deactivate-modal-footer">
                <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setDeactivateOpen(false)}>Cancel</button>
                <button type="button" className="bills-btn bills-btn-primary" onClick={() => setDeactivateOpen(false)}>Deactivate</button>
              </div>
            </div>
          </>
        )}
    </div>
  )
  }

  return (
    <div className="billing-main billing-create-customer">
      <div className="billing-create-customer-header">
        <h1 className="billing-create-customer-title">Create product</h1>
        <Link to="/flow/billing/products" className="bills-modal-close" aria-label="Close">×</Link>
      </div>
      <div className="billing-create-customer-progress" aria-hidden />

      <form className="billing-create-customer-form" onSubmit={handleCreateProduct}>
        <section className="billing-create-customer-section">
          <h2 className="billing-create-customer-section-title">Product information</h2>
          <div className="bills-form-field">
            <label>Product name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g. Additional Seat"
            />
            <p className="billing-form-hint">The product name will be visible to the customer.</p>
          </div>
          <div className="bills-form-field">
            <label>Description (optional)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="e.g. Adding an additional seat to the team subscription"
              rows={3}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid var(--psp-border)', borderRadius: '8px', fontSize: '14px' }}
            />
          </div>
          <div className="bills-form-field">
            <label>Product unit (optional)</label>
            <input
              type="text"
              value={productUnit}
              onChange={(e) => setProductUnit(e.target.value)}
              placeholder="e.g. 1"
            />
          </div>
        </section>

        <section className="billing-create-customer-section">
          <button
            type="button"
            className="billing-create-customer-accordion"
            onClick={() => setAdditionalOpen(!additionalOpen)}
            aria-expanded={additionalOpen}
          >
            <h2 className="billing-create-customer-section-title">Additional information</h2>
            <span className="billing-create-customer-chevron">{additionalOpen ? '▲' : '▼'}</span>
          </button>
          {additionalOpen && (
            <div className="billing-create-customer-additional">
              <div className="bills-form-field">
                <label>Reference</label>
                <input type="text" placeholder="Optional" />
              </div>
            </div>
          )}
        </section>

        <div className="billing-create-customer-actions">
          <Link to="/flow/billing/products" className="bills-btn bills-btn-secondary">Cancel</Link>
          <button type="submit" className="bills-btn bills-btn-primary">Create product</button>
        </div>
      </form>
    </div>
  )
}
