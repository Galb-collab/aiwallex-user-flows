import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../bills/BillsFlow.css'
import '../BillingFlow.css'
import './BillingCustomers.css'
import './BillingInvoices.css'

const INVOICES = [
  {
    id: 'inv-1',
    customer: 'Alex Smith',
    customerId: 'bcus_sgpd68bn5hdd2p...',
    invoiceNumber: 'INV-SIDLANT7-0001',
    status: 'Finalised',
    invoiceDate: '2025-11-27',
    dueDate: '2025-12-27',
    amount: '$109.00 SGD',
    from: 'MOBBIN PTE. LTD.',
    lineItems: [{ product: 'Team Subscription (per 1)', qty: 1, price: '$100.00', amount: '$100.00' }],
    subtotal: '$100.00',
    tax: '$9.00',
    taxLabel: 'Tax (9%)',
    total: '$109.00',
  },
]

export function BillingInvoices() {
  const [selectedInvoice, setSelectedInvoice] = useState(INVOICES[0])
  const [paymentStatus, setPaymentStatus] = useState({ 'inv-1': 'unpaid' })
  const [voidedIds, setVoidedIds] = useState({})
  const [manageOpen, setManageOpen] = useState(false)
  const [markAsPaidModalOpen, setMarkAsPaidModalOpen] = useState(false)
  const [voidInvoiceModalOpen, setVoidInvoiceModalOpen] = useState(false)

  const isPaid = selectedInvoice && paymentStatus[selectedInvoice.id] === 'paid'
  const isVoided = selectedInvoice && voidedIds[selectedInvoice.id]

  const handleMarkAsPaid = () => {
    if (selectedInvoice) setPaymentStatus((prev) => ({ ...prev, [selectedInvoice.id]: 'paid' }))
    setMarkAsPaidModalOpen(false)
    setManageOpen(false)
  }

  const handleVoidInvoice = () => {
    if (selectedInvoice) setVoidedIds((prev) => ({ ...prev, [selectedInvoice.id]: true }))
    setVoidInvoiceModalOpen(false)
    setManageOpen(false)
  }

  return (
    <div className="billing-main billing-invoices">
      <div className="billing-customers-title-row">
        <div>
          <h1 className="billing-title">Invoices</h1>
          <p className="billing-customers-subtitle">Create, issue, and manage invoices</p>
        </div>
        <Link to="/flow/billing/creating-an-invoice" className="billing-btn billing-btn-primary">
          + New invoice
        </Link>
      </div>

      <div className="billing-toolbar billing-invoices-toolbar">
        <input
          type="search"
          className="billing-customers-search"
          placeholder="Search by customer name or invoice number"
          aria-label="Search by customer name or invoice number"
        />
        <select className="billing-filter" aria-label="Status">
          <option value="">Status</option>
          <option>Finalised</option>
        </select>
        <input type="date" className="billing-filter" aria-label="Invoice date from" />
        <input type="date" className="billing-filter" aria-label="Invoice date to" />
        <input type="date" className="billing-filter" aria-label="Due date from" />
        <input type="date" className="billing-filter" aria-label="Due date to" />
        <select className="billing-filter" aria-label="Payment status">
          <option value="">Payment status</option>
          <option>Unpaid</option>
          <option>Paid</option>
        </select>
      </div>

      <div className="billing-customers-table-wrap">
        <table className="billing-customers-table">
          <thead>
            <tr>
              <th>CUSTOMER</th>
              <th>INVOICE NUMBER</th>
              <th>STATUS</th>
              <th>INVOICE DATE</th>
              <th>DUE DATE</th>
              <th>PAYMENT STATUS</th>
              <th>AMOUNT</th>
              <th aria-hidden />
            </tr>
          </thead>
          <tbody>
            {INVOICES.map((inv) => (
              <tr
                key={inv.id}
                className={selectedInvoice?.id === inv.id ? 'billing-invoices-row-selected' : ''}
                onClick={() => setSelectedInvoice(inv)}
              >
                <td>
                  <span className="billing-invoice-customer-name">{inv.customer}</span>
                  <div className="billing-customer-id">{inv.customerId}</div>
                </td>
                <td>{inv.invoiceNumber}</td>
                <td>
                  <span className={voidedIds[inv.id] ? 'billing-invoice-status-voided' : 'billing-invoice-status-finalised'}>
                    {voidedIds[inv.id] ? 'Voided' : inv.status}
                  </span>
                </td>
                <td>{inv.invoiceDate}</td>
                <td>{inv.dueDate}</td>
                <td>
                  <span className={paymentStatus[inv.id] === 'paid' ? 'billing-invoice-status-paid' : 'billing-invoice-status-unpaid'}>
                    {paymentStatus[inv.id] === 'paid' ? 'Paid' : 'Unpaid'}
                  </span>
                </td>
                <td>{inv.amount}</td>
                <td><button type="button" className="billing-customer-row-menu" aria-label="More">⋯</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedInvoice && (
        <>
          <div className="billing-customer-drawer-backdrop" onClick={() => setSelectedInvoice(null)} aria-hidden />
          <div className="billing-customer-drawer billing-invoice-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="billing-customer-drawer-header">
              <div className="billing-customer-drawer-title-wrap">
                <div>
                  <p className="billing-customer-drawer-label">Invoice</p>
                  <p className="billing-customer-drawer-name">{selectedInvoice.invoiceNumber}</p>
                  <div className="billing-invoice-drawer-tags">
                    <span className={isVoided ? 'billing-invoice-status-voided' : 'billing-invoice-status-finalised'}>
                      {isVoided ? 'Voided' : selectedInvoice.status}
                    </span>
                    {!isVoided && (
                      <span className={isPaid ? 'billing-invoice-status-paid' : 'billing-invoice-status-unpaid'}>
                        {isPaid ? 'Paid' : 'Unpaid'}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button type="button" className="bills-modal-close" onClick={() => setSelectedInvoice(null)} aria-label="Close">×</button>
            </div>
            <div className="billing-customer-drawer-body">
              <p className="billing-invoice-drawer-billed">
                Billed to {selectedInvoice.customer}. {selectedInvoice.amount}
                {isPaid && <span className="billing-invoice-marked-paid"> Marked as paid</span>}
              </p>
              <section className="billing-customer-drawer-section">
                <h3 className="billing-customer-drawer-section-title">Invoice details</h3>
                <dl className="billing-customer-drawer-dl">
                  <dt>From</dt>
                  <dd>{selectedInvoice.from}</dd>
                  <dt>Billed to</dt>
                  <dd>{selectedInvoice.customer}</dd>
                  <dt>Invoice date</dt>
                  <dd>27 Nov 2025</dd>
                  <dt>Due date</dt>
                  <dd>27 Dec 2025</dd>
                  <dt>Invoice number</dt>
                  <dd>{selectedInvoice.invoiceNumber} <button type="button" className="billing-customer-drawer-copy" aria-label="Copy">Copy</button></dd>
                  <dt>Memo</dt>
                  <dd>-</dd>
                </dl>
              </section>
              <section className="billing-customer-drawer-section">
                <h3 className="billing-customer-drawer-section-title">Line items</h3>
                <table className="billing-invoice-line-items">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedInvoice.lineItems.map((line, i) => (
                      <tr key={i}>
                        <td>{line.product}</td>
                        <td>{line.qty}</td>
                        <td>{line.price}</td>
                        <td>{line.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="billing-invoice-summary">
                  <div className="billing-invoice-summary-row"><span>Subtotal</span><span>{selectedInvoice.subtotal}</span></div>
                  <div className="billing-invoice-summary-row"><span>{selectedInvoice.taxLabel}</span><span>{selectedInvoice.tax}</span></div>
                  <div className="billing-invoice-summary-row billing-invoice-summary-total"><span>Total (SGD)</span><span>{selectedInvoice.total}</span></div>
                </div>
              </section>
            </div>
            <div className="billing-customer-drawer-footer billing-invoice-drawer-footer">
              <div className="billing-invoice-manage-wrap">
                {!isVoided && manageOpen && (
                  <div className="billing-invoice-manage-dropdown">
                    <button type="button" className="billing-invoice-manage-item" onClick={() => { setMarkAsPaidModalOpen(true); setManageOpen(false); }}>Mark as paid</button>
                    <button type="button" className="billing-invoice-manage-item" onClick={() => { setVoidInvoiceModalOpen(true); setManageOpen(false); }}>Void</button>
                    <button type="button" className="billing-invoice-manage-item" onClick={() => setManageOpen(false)}>Duplicate</button>
                    <button type="button" className="billing-invoice-manage-item" onClick={() => setManageOpen(false)}>Download PDF</button>
                    <button type="button" className="billing-invoice-manage-item" onClick={() => setManageOpen(false)}>Copy digital invoice link</button>
                  </div>
                )}
                {!isVoided && (
                  <button type="button" className="bills-btn bills-btn-primary" onClick={() => setManageOpen(!manageOpen)} aria-expanded={manageOpen}>
                    Manage
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {markAsPaidModalOpen && (
        <>
          <div className="billing-deactivate-backdrop" onClick={() => setMarkAsPaidModalOpen(false)} aria-hidden />
          <div className="billing-deactivate-modal">
            <div className="billing-deactivate-modal-header">
              <h2 className="billing-deactivate-modal-title">Are you sure you want to mark this invoice as paid?</h2>
              <button type="button" className="bills-modal-close" onClick={() => setMarkAsPaidModalOpen(false)} aria-label="Close">×</button>
            </div>
            <p className="billing-deactivate-modal-message">
              Once the invoice is marked as paid, the status cannot be reverted.
            </p>
            <div className="billing-deactivate-modal-footer">
              <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setMarkAsPaidModalOpen(false)}>Cancel</button>
              <button type="button" className="bills-btn bills-btn-primary" onClick={handleMarkAsPaid}>Mark as paid</button>
            </div>
          </div>
        </>
      )}

      {voidInvoiceModalOpen && (
        <>
          <div className="billing-deactivate-backdrop" onClick={() => setVoidInvoiceModalOpen(false)} aria-hidden />
          <div className="billing-deactivate-modal">
            <div className="billing-deactivate-modal-header">
              <h2 className="billing-deactivate-modal-title">Are you sure you want to void this invoice?</h2>
              <button type="button" className="bills-modal-close" onClick={() => setVoidInvoiceModalOpen(false)} aria-label="Close">×</button>
            </div>
            <p className="billing-deactivate-modal-message">
              Once the invoice is voided, the status cannot be reverted.
            </p>
            <div className="billing-deactivate-modal-footer">
              <button type="button" className="bills-btn bills-btn-secondary" onClick={() => setVoidInvoiceModalOpen(false)}>Cancel</button>
              <button type="button" className="bills-btn bills-btn-primary" onClick={handleVoidInvoice}>Void</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
