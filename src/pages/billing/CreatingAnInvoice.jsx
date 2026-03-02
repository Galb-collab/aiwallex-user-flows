import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../BillingFlow.css'
import './CreatingAnInvoice.css'

const DEFAULT_CUSTOMER = { name: 'Alex Smith', id: 'bcus_sgpd68bn5hdd2p9gij9' }
const DEFAULT_PRODUCTS = ['Team Subscription']
const DEFAULT_PRICES = [{ id: 'p1', amount: 100, label: '$100.00 SGD' }]

export function CreatingAnInvoice() {
  const location = useLocation()
  const fromCustomerDetails = location.state?.fromCustomerDetails === true

  const [billedTo, setBilledTo] = useState(fromCustomerDetails ? DEFAULT_CUSTOMER.name : '')
  const [billingEntity, setBillingEntity] = useState(fromCustomerDetails ? 'MOBBIN PTE. LTD.' : '')
  const [currency, setCurrency] = useState('SGD Singapore Dollar')
  const [dueDate, setDueDate] = useState('')
  const [lineItems, setLineItems] = useState([])
  const [addLineItemOpen, setAddLineItemOpen] = useState(false)
  const [lineItemProduct, setLineItemProduct] = useState('')
  const [lineItemPrice, setLineItemPrice] = useState('')
  const [lineItemQty, setLineItemQty] = useState(1)
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false)
  const [createProductOpen, setCreateProductOpen] = useState(false)
  const [newPriceOpen, setNewPriceOpen] = useState(false)
  const [products, setProducts] = useState(DEFAULT_PRODUCTS)
  const [prices, setPrices] = useState(DEFAULT_PRICES)
  const [createProductName, setCreateProductName] = useState('')
  const [createProductNameError, setCreateProductNameError] = useState('')
  const [createProductDesc, setCreateProductDesc] = useState('')
  const [createProductUnit, setCreateProductUnit] = useState('')
  const [createProductAdditionalOpen, setCreateProductAdditionalOpen] = useState(false)
  const [newPriceModel, setNewPriceModel] = useState('Flat')
  const [newPriceAmount, setNewPriceAmount] = useState('100.00')
  const [newPriceDesc, setNewPriceDesc] = useState('')
  const [newPriceFreq, setNewPriceFreq] = useState('One-off')
  const [newPriceType, setNewPriceType] = useState('In advance')
  const [newPriceAdditionalOpen, setNewPriceAdditionalOpen] = useState(false)

  const lineItemTotal = (Number(lineItemPrice) || 0) * (Number(lineItemQty) || 0)
  const subtotal = lineItems.reduce((sum, i) => sum + i.amount, 0)
  const total = subtotal

  const handleAddLineItem = () => {
    const priceVal = typeof lineItemPrice === 'number' ? lineItemPrice : Number(lineItemPrice) || 0
    const qty = Number(lineItemQty) || 1
    setLineItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        product: lineItemProduct || (products[0] || 'Product'),
        qty,
        price: priceVal,
        amount: priceVal * qty,
      },
    ])
    setLineItemProduct('')
    setLineItemPrice('')
    setLineItemQty(1)
    setAddLineItemOpen(false)
    setProductDropdownOpen(false)
    setPriceDropdownOpen(false)
  }

  const handleClearAllLineItems = () => setLineItems([])

  const removeLineItem = (id) => setLineItems((prev) => prev.filter((i) => i.id !== id))

  const handleCreateProduct = () => {
    const name = createProductName.trim()
    if (!name) {
      setCreateProductNameError('Please enter a product name')
      return
    }
    setCreateProductNameError('')
    setProducts((prev) => (prev.includes(name) ? prev : [...prev, name]))
    setLineItemProduct(name)
    setCreateProductName('')
    setCreateProductDesc('')
    setCreateProductUnit('')
    setCreateProductOpen(false)
    setProductDropdownOpen(false)
  }

  const handleNewPrice = () => {
    const amount = parseFloat(newPriceAmount) || 0
    const id = 'p' + Date.now()
    const label = `$${amount.toFixed(2)} ${currency.split(' ')[0]}`
    setPrices((prev) => [...prev, { id, amount, label }])
    setLineItemPrice(amount)
    setNewPriceOpen(false)
    setPriceDropdownOpen(false)
  }

  const currencyCode = currency.split(' ')[0]

  return (
    <div className="billing-main billing-create-invoice">
      <div className="billing-create-invoice-header">
        <h1 className="billing-create-invoice-title">Create invoice</h1>
        <Link
          to={fromCustomerDetails ? '/flow/billing/customer-details' : '/flow/billing'}
          className="bills-modal-close"
          aria-label="Close"
        >
          ×
        </Link>
      </div>
      <div className="billing-create-invoice-progress" aria-hidden />

      <div className="billing-create-invoice-form">
        <section className="billing-create-invoice-section">
          <h2 className="billing-create-invoice-section-title">Basic information</h2>
          <div className="billing-create-invoice-field-row">
            <div className="billing-create-invoice-field">
              <label className="billing-create-invoice-label">Billed to</label>
              {fromCustomerDetails ? (
                <input
                  type="text"
                  className="billing-create-invoice-input"
                  value={billedTo}
                  readOnly
                />
              ) : (
                <select
                  className="billing-create-invoice-select"
                  value={billedTo}
                  onChange={(e) => setBilledTo(e.target.value)}
                >
                  <option value="">Select a customer</option>
                  <option value="Alex Smith">Alex Smith</option>
                </select>
              )}
            </div>
            {(fromCustomerDetails || billedTo) && (
              <Link
                to="/flow/billing/customer-details"
                className="billing-create-invoice-view-customer"
              >
                View customer
              </Link>
            )}
          </div>
          <div className="billing-create-invoice-field">
            <label className="billing-create-invoice-label">Billing entity</label>
            <select
              className="billing-create-invoice-select"
              value={billingEntity}
              onChange={(e) => setBillingEntity(e.target.value)}
            >
              <option value="">Select a billing entity</option>
              <option>MOBBIN PTE. LTD.</option>
            </select>
          </div>
          <div className="billing-create-invoice-field">
            <label className="billing-create-invoice-label">Currency</label>
            <select
              className="billing-create-invoice-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="">Select a currency</option>
              <option>SGD Singapore Dollar</option>
              <option>USD US Dollar</option>
            </select>
          </div>
        </section>

        <section className="billing-create-invoice-section">
          <div className="billing-create-invoice-line-items-head">
            <h2 className="billing-create-invoice-section-title">Line items</h2>
            {lineItems.length > 0 && (
              <button
                type="button"
                className="billing-create-invoice-clear-all"
                onClick={handleClearAllLineItems}
              >
                🗑 Clear all
              </button>
            )}
          </div>
          <div className="billing-create-invoice-line-items-table-wrap">
            <table className="billing-create-invoice-line-items-table">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>QTY</th>
                  <th>PRICE</th>
                  <th>AMOUNT</th>
                  <th aria-hidden />
                </tr>
              </thead>
              <tbody>
                {lineItems.length === 0 ? (
                  <tr>
                    <td colSpan={5}>
                      <div className="billing-create-invoice-line-items-empty">
                        <p>No line items yet</p>
                        <p className="billing-create-invoice-line-items-empty-hint">
                          Add the first line item to get started.
                        </p>
                        <button
                          type="button"
                          className="billing-btn billing-btn-primary billing-create-invoice-add-line"
                          onClick={() => setAddLineItemOpen(true)}
                        >
                          + Add new line item
                        </button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  <>
                    {lineItems.map((item) => (
                      <tr key={item.id}>
                        <td>{item.product}</td>
                        <td>{item.qty}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>${item.amount.toFixed(2)}</td>
                        <td>
                          <button
                            type="button"
                            className="billing-create-invoice-line-menu"
                            onClick={() => removeLineItem(item.id)}
                            aria-label="Remove line"
                          >
                            ⋯
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={5}>
                        <button
                          type="button"
                          className="billing-create-invoice-add-line-inline"
                          onClick={() => setAddLineItemOpen(true)}
                        >
                          + Add new line item
                        </button>
                      </td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>
          {lineItems.length > 0 && (
            <div className="billing-create-invoice-summary">
              <div className="billing-create-invoice-summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="billing-create-invoice-summary-row billing-create-invoice-add-tax">
                <span>Add tax</span>
                <span>✎</span>
              </div>
              <div className="billing-create-invoice-summary-row billing-create-invoice-total">
                <span>Total</span>
                <span>${total.toFixed(2)} {currency.split(' ')[0]}</span>
              </div>
            </div>
          )}
        </section>

        <section className="billing-create-invoice-section">
          <h2 className="billing-create-invoice-section-title">Invoice settings</h2>
          <div className="billing-create-invoice-field">
            <label className="billing-create-invoice-label">Due Date</label>
            <input
              type="date"
              className="billing-create-invoice-input"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </section>

        <div className="billing-create-invoice-actions">
          <Link
            to={fromCustomerDetails ? '/flow/billing/customer-details' : '/flow/billing'}
            className="bills-btn bills-btn-secondary"
          >
            Cancel
          </Link>
          <button type="button" className="bills-btn bills-btn-secondary">
            Save as draft
          </button>
          <button type="button" className="bills-btn bills-btn-primary">
            Finalise invoice
          </button>
        </div>
      </div>

      {/* Add line item modal */}
      {addLineItemOpen && (
        <>
          <div
            className="billing-create-invoice-modal-backdrop"
            onClick={() => setAddLineItemOpen(false)}
            aria-hidden
          />
          <div className="billing-create-invoice-modal billing-add-line-item-modal" onClick={(e) => e.stopPropagation()}>
            <div className="billing-create-invoice-modal-header">
              <h2 className="billing-create-invoice-modal-title">Add line item</h2>
              <button
                type="button"
                className="bills-modal-close"
                onClick={() => setAddLineItemOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="billing-create-invoice-modal-body">
              <h3 className="billing-create-invoice-modal-section-title">Line item information</h3>
              <div className="billing-create-invoice-field">
                <label className="billing-create-invoice-label">Product</label>
                <div className="billing-create-invoice-combobox-wrap">
                  <div
                    className="billing-create-invoice-combobox-trigger"
                    onClick={() => { setProductDropdownOpen(!productDropdownOpen); setPriceDropdownOpen(false); }}
                    role="combobox"
                    aria-expanded={productDropdownOpen}
                  >
                    <span className={lineItemProduct ? '' : 'billing-create-invoice-placeholder'}>
                      {lineItemProduct || 'Select or create a product'}
                    </span>
                    <span className="billing-create-invoice-combobox-arrow">▾</span>
                  </div>
                  {lineItemProduct && (
                    <button type="button" className="billing-create-invoice-view-link" onClick={() => setProductDropdownOpen(false)}>View product</button>
                  )}
                  {productDropdownOpen && (
                    <div className="billing-create-invoice-dropdown">
                      {products.length === 0 ? <div className="billing-create-invoice-dropdown-empty">No options</div> : null}
                      {products.map((p) => (
                        <button
                          key={p}
                          type="button"
                          className="billing-create-invoice-dropdown-item"
                          onClick={() => { setLineItemProduct(p); setProductDropdownOpen(false); }}
                        >
                          {p}
                        </button>
                      ))}
                      <button
                        type="button"
                        className="billing-create-invoice-dropdown-create"
                        onClick={() => { setCreateProductOpen(true); setProductDropdownOpen(false); }}
                      >
                        + Create new product
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="billing-create-invoice-field">
                <label className="billing-create-invoice-label">Price</label>
                <div className="billing-create-invoice-combobox-wrap">
                  <div
                    className="billing-create-invoice-combobox-trigger"
                    onClick={() => { setPriceDropdownOpen(!priceDropdownOpen); setProductDropdownOpen(false); }}
                    role="combobox"
                    aria-expanded={priceDropdownOpen}
                  >
                    <span className={lineItemPrice !== '' && lineItemPrice !== undefined ? '' : 'billing-create-invoice-placeholder'}>
                      {typeof lineItemPrice === 'number'
                        ? `$${lineItemPrice.toFixed(2)} ${currencyCode}`
                        : lineItemPrice
                          ? `$${Number(lineItemPrice).toFixed(2)} ${currencyCode}`
                          : 'Select or create a price'}
                    </span>
                    <span className="billing-create-invoice-combobox-arrow">▾</span>
                  </div>
                  {priceDropdownOpen && (
                    <div className="billing-create-invoice-dropdown">
                      {prices.length === 0 ? <div className="billing-create-invoice-dropdown-empty">No options</div> : null}
                      {prices.map((pr) => (
                        <button
                          key={pr.id}
                          type="button"
                          className="billing-create-invoice-dropdown-item"
                          onClick={() => { setLineItemPrice(pr.amount); setPriceDropdownOpen(false); }}
                        >
                          {pr.label}
                        </button>
                      ))}
                      <button
                        type="button"
                        className="billing-create-invoice-dropdown-create"
                        onClick={() => { setNewPriceOpen(true); setPriceDropdownOpen(false); }}
                      >
                        + Add new price
                      </button>
                    </div>
                  )}
                </div>
                <p className="billing-create-invoice-hint">The selected price must match the invoice currency.</p>
              </div>
              <div className="billing-create-invoice-field">
                <label className="billing-create-invoice-label">Quantity</label>
                <input
                  type="number"
                  min={1}
                  className="billing-create-invoice-input"
                  value={lineItemQty}
                  onChange={(e) => setLineItemQty(Number(e.target.value) || 1)}
                />
              </div>
              <div className="billing-create-invoice-line-item-total">
                <span>Total</span>
                <span>${lineItemTotal.toFixed(2)} {currencyCode}</span>
              </div>
            </div>
            <div className="billing-create-invoice-modal-footer">
              <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setAddLineItemOpen(false)}>
                Cancel
              </button>
              <button type="button" className="bills-btn bills-btn-primary" onClick={handleAddLineItem}>
                Add line item
              </button>
            </div>
          </div>
        </>
      )}

      {/* Create product modal (from Add line item) */}
      {createProductOpen && (
        <>
          <div className="billing-create-invoice-modal-backdrop billing-create-invoice-modal-backdrop-nested" onClick={() => setCreateProductOpen(false)} aria-hidden />
          <div className="billing-create-invoice-modal billing-create-product-modal" onClick={(e) => e.stopPropagation()}>
            <div className="billing-create-invoice-modal-header">
              <h2 className="billing-create-invoice-modal-title">Create product</h2>
              <button type="button" className="bills-modal-close" onClick={() => setCreateProductOpen(false)} aria-label="Close">×</button>
            </div>
            <div className="billing-create-invoice-modal-body">
              <h3 className="billing-create-invoice-modal-section-title">Product information</h3>
              <div className="billing-create-invoice-field">
                <label className="billing-create-invoice-label">Product name</label>
                <input
                  type="text"
                  className={`billing-create-invoice-input ${createProductNameError ? 'billing-create-invoice-input-error' : ''}`}
                  value={createProductName}
                  onChange={(e) => { setCreateProductName(e.target.value); setCreateProductNameError(''); }}
                  placeholder="Enter product name"
                />
                {createProductNameError && <p className="billing-create-invoice-error-text">{createProductNameError}</p>}
                <p className="billing-create-invoice-hint">The product name will be visible to the customer.</p>
              </div>
              <div className="billing-create-invoice-field">
                <label className="billing-create-invoice-label">Description (optional)</label>
                <textarea
                  className="billing-create-invoice-input"
                  value={createProductDesc}
                  onChange={(e) => setCreateProductDesc(e.target.value)}
                  placeholder="Enter description"
                  rows={3}
                />
              </div>
              <div className="billing-create-invoice-field">
                <label className="billing-create-invoice-label">Product unit (optional)</label>
                <input
                  type="text"
                  className="billing-create-invoice-input"
                  value={createProductUnit}
                  onChange={(e) => setCreateProductUnit(e.target.value)}
                  placeholder="e.g. 1"
                />
              </div>
              <div className="billing-create-invoice-accordion">
                <button type="button" className="billing-create-invoice-accordion-btn" onClick={() => setCreateProductAdditionalOpen(!createProductAdditionalOpen)} aria-expanded={createProductAdditionalOpen}>
                  Additional information <span>{createProductAdditionalOpen ? '▲' : '▼'}</span>
                </button>
                {createProductAdditionalOpen && <div className="billing-create-invoice-accordion-body">Optional extra fields.</div>}
              </div>
            </div>
            <div className="billing-create-invoice-modal-footer">
              <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setCreateProductOpen(false)}>Close</button>
              <button type="button" className="bills-btn bills-btn-primary" onClick={handleCreateProduct}>Create product</button>
            </div>
          </div>
        </>
      )}

      {/* New price modal (from Add line item) */}
      {newPriceOpen && (
        <>
          <div className="billing-create-invoice-modal-backdrop billing-create-invoice-modal-backdrop-nested" onClick={() => setNewPriceOpen(false)} aria-hidden />
          <div className="billing-create-invoice-modal billing-new-price-modal" onClick={(e) => e.stopPropagation()}>
            <div className="billing-create-invoice-modal-header">
              <h2 className="billing-create-invoice-modal-title">New price</h2>
              <button type="button" className="bills-modal-close" onClick={() => setNewPriceOpen(false)} aria-label="Close">×</button>
            </div>
            <div className="billing-create-invoice-modal-body">
              <h3 className="billing-create-invoice-modal-section-title">Price information</h3>
              <div className="billing-create-invoice-field">
                <label className="billing-create-invoice-label">Pricing model</label>
                <select className="billing-create-invoice-select" value={newPriceModel} onChange={(e) => setNewPriceModel(e.target.value)}>
                  <option value="">Select a pricing model</option>
                  <option value="Flat">Flat</option>
                </select>
                <p className="billing-create-invoice-hint">Charge a fixed price.</p>
              </div>
              <div className="billing-create-invoice-field">
                <label className="billing-create-invoice-label">Currency</label>
                <select className="billing-create-invoice-select" value={currency} readOnly disabled style={{ opacity: 1 }}>
                  <option>{currency}</option>
                </select>
              </div>
              <div className="billing-create-invoice-field">
                <label className="billing-create-invoice-label">Amount</label>
                <input
                  type="text"
                  className="billing-create-invoice-input"
                  value={newPriceAmount}
                  onChange={(e) => setNewPriceAmount(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <div className="billing-create-invoice-field">
                <label className="billing-create-invoice-label">Description (optional)</label>
                <textarea
                  className="billing-create-invoice-input"
                  value={newPriceDesc}
                  onChange={(e) => setNewPriceDesc(e.target.value)}
                  placeholder="Optional"
                  rows={2}
                />
                <p className="billing-create-invoice-hint">The price description will not be visible to the customer.</p>
              </div>
              <h3 className="billing-create-invoice-modal-section-title" style={{ marginTop: '20px' }}>Billing information</h3>
              <div className="billing-create-invoice-field">
                <label className="billing-create-invoice-label">Billing frequency</label>
                <select className="billing-create-invoice-select" value={newPriceFreq} onChange={(e) => setNewPriceFreq(e.target.value)}>
                  <option>One-off</option>
                </select>
              </div>
              <div className="billing-create-invoice-field">
                <label className="billing-create-invoice-label">Billing type</label>
                <select className="billing-create-invoice-select" value={newPriceType} onChange={(e) => setNewPriceType(e.target.value)}>
                  <option>In advance</option>
                </select>
                <p className="billing-create-invoice-hint">Charge will be applied up front.</p>
              </div>
              <div className="billing-create-invoice-accordion">
                <button type="button" className="billing-create-invoice-accordion-btn" onClick={() => setNewPriceAdditionalOpen(!newPriceAdditionalOpen)} aria-expanded={newPriceAdditionalOpen}>
                  Additional information <span>{newPriceAdditionalOpen ? '▲' : '▼'}</span>
                </button>
                {newPriceAdditionalOpen && <div className="billing-create-invoice-accordion-body">Optional extra fields.</div>}
              </div>
            </div>
            <div className="billing-create-invoice-modal-footer">
              <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setNewPriceOpen(false)}>Cancel</button>
              <button type="button" className="bills-btn bills-btn-primary" onClick={handleNewPrice}>New price</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
