import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../bills/BillsFlow.css'
import '../BillingFlow.css'
import './BillingCustomers.css'
import './CreatingAProduct.css'

const INITIAL_PRODUCTS = [
  { name: 'Team Subscription', price: '$100.00 SGD', created: '2025-11-27', updated: '2025-11-27', active: true },
  { name: 'Additional Seat', price: '$30.00 SGD per 1', created: '2025-11-27', updated: '2025-11-27', active: true },
  { name: 'New Plan', price: '-', created: '2025-11-27', updated: '2025-11-27', active: true },
]

export function BillingProducts() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS)
  const [menuOpenRow, setMenuOpenRow] = useState(null)
  const [deactivateProduct, setDeactivateProduct] = useState(null)

  const handleDeactivate = () => {
    if (deactivateProduct) {
      setProducts((prev) => prev.map((p) => (p.name === deactivateProduct ? { ...p, active: false } : p)))
      setDeactivateProduct(null)
    }
  }

  return (
    <div className="billing-main billing-customers">
      <div className="billing-customers-title-row">
        <div>
          <h1 className="billing-title">Products</h1>
          <p className="billing-customers-subtitle">Create and manage your products and prices.</p>
        </div>
        <Link to="/flow/billing/creating-a-product" className="billing-btn billing-btn-primary">
          + New product
        </Link>
      </div>

      <div className="billing-toolbar">
        <input
          type="search"
          className="billing-customers-search"
          placeholder="Search by product name"
          aria-label="Search by product name"
        />
        <select className="billing-filter" aria-label="Status">
          <option value="">Status</option>
          <option>Active</option>
        </select>
      </div>

      <div className="billing-customers-table-wrap">
        <table className="billing-customers-table">
          <thead>
            <tr>
              <th>PRODUCT NAME</th>
              <th>PRICE</th>
              <th>CREATED DATE</th>
              <th>UPDATED DATE</th>
              <th aria-hidden />
            </tr>
          </thead>
          <tbody>
            {products.map((row) => (
              <tr key={row.name}>
                <td>
                  {row.name}
                  {!row.active && <span className="billing-product-status-inactive"> (Inactive)</span>}
                </td>
                <td>{row.price}</td>
                <td>{row.created}</td>
                <td>{row.updated}</td>
                <td className="billing-product-menu-cell">
                  <button
                    type="button"
                    className="billing-customer-row-menu"
                    aria-label="More options"
                    aria-expanded={menuOpenRow === row.name}
                    onClick={() => setMenuOpenRow(menuOpenRow === row.name ? null : row.name)}
                  >
                    ⋯
                  </button>
                  {menuOpenRow === row.name && (
                    <>
                      <div className="billing-product-menu-backdrop" onClick={() => setMenuOpenRow(null)} aria-hidden />
                      <div className="billing-product-menu-dropdown">
                        <Link
                          to="/flow/billing/creating-a-price"
                          state={{ productName: row.name }}
                          className="billing-product-menu-item"
                          onClick={() => setMenuOpenRow(null)}
                        >
                          Create price
                        </Link>
                        <button type="button" className="billing-product-menu-item" onClick={() => setMenuOpenRow(null)}>Edit</button>
                        <button
                          type="button"
                          className="billing-product-menu-item"
                          onClick={() => { setDeactivateProduct(row.name); setMenuOpenRow(null); }}
                        >
                          Deactivate
                        </button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {deactivateProduct && (
        <>
          <div className="billing-deactivate-backdrop" onClick={() => setDeactivateProduct(null)} aria-hidden />
          <div className="billing-deactivate-modal">
            <div className="billing-deactivate-modal-header">
              <h2 className="billing-deactivate-modal-title">Deactivate product</h2>
              <button type="button" className="bills-modal-close" onClick={() => setDeactivateProduct(null)} aria-label="Close">×</button>
            </div>
            <p className="billing-deactivate-modal-message">
              Deactivating this product will hide it from new invoice and subscription creation. Are you sure you want to deactivate this product?
            </p>
            <div className="billing-deactivate-modal-footer">
              <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setDeactivateProduct(null)}>Cancel</button>
              <button type="button" className="bills-btn bills-btn-primary" onClick={handleDeactivate}>Deactivate</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
