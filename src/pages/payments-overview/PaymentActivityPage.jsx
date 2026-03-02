import React, { useState } from 'react'

const PAYMENTS = [
  {
    account: 'MOBBIN PTE. L..',
    orderId: '[Inv] inv_sgpdvntw...',
    paymentCreatedTime: '2025-11-27 12:41',
    paymentStatus: 'Cancelled',
    paymentAmount: '$109.00 SGD',
    paymentMethod: '-',
  },
]

export function PaymentActivityPage() {
  const [dateFrom, setDateFrom] = useState('2025-10-28')
  const [dateTo, setDateTo] = useState('2025-11-27')
  const [search, setSearch] = useState('')

  return (
    <div className="payments-overview-content">
      <h1 className="po-page-title" style={{ borderBottom: '2px solid var(--psp-accent)', paddingBottom: 8, display: 'inline-block' }}>
        Payment activity
      </h1>

      <div className="po-toolbar">
        <div className="po-toolbar-row">
          <span className="po-search-wrap" style={{ position: 'relative', flex: 1, maxWidth: 320 }}>
            <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }}>🔍</span>
            <input
              type="search"
              className="po-search"
              placeholder="Search for payment"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ paddingLeft: 36 }}
            />
          </span>
          <button type="button" className="po-export">Export</button>
        </div>
        <div className="po-filters-row">
          <select className="po-filter" aria-label="Accounts">
            <option>Accounts</option>
          </select>
          <input
            type="date"
            className="po-filter po-date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            aria-label="Date from"
          />
          <span>to</span>
          <input
            type="date"
            className="po-filter po-date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            aria-label="Date to"
          />
          <button type="button" className="po-reset" aria-label="Clear date">×</button>
          <select className="po-filter" aria-label="Status">
            <option>Status</option>
            <option>Cancelled</option>
          </select>
          <select className="po-filter" aria-label="Payment methods">
            <option>Payment methods</option>
          </select>
          <select className="po-filter" aria-label="Currency">
            <option>Currency</option>
          </select>
          <button type="button" className="po-reset">Reset</button>
        </div>
      </div>

      <div className="po-table-wrap">
        <table className="po-table">
          <thead>
            <tr>
              <th>ACCOUNT</th>
              <th>ORDER ID</th>
              <th>PAYMENT CREATED TIME</th>
              <th>PAYMENT STATUS</th>
              <th>PAYMENT AMOUNT</th>
              <th>PAYMENT METHOD</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {PAYMENTS.map((row, i) => (
              <tr key={i}>
                <td>{row.account}</td>
                <td>{row.orderId}</td>
                <td>{row.paymentCreatedTime}</td>
                <td><span className="po-status-pill po-status-cancelled">{row.paymentStatus}</span></td>
                <td>{row.paymentAmount}</td>
                <td>{row.paymentMethod}</td>
                <td><button type="button" className="po-row-menu" aria-label="Menu">⋮</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="po-pagination">
        <span>1-{PAYMENTS.length} of {PAYMENTS.length}</span>
        <select className="po-rows-select" aria-label="Rows per page">
          <option>10</option>
        </select>
        <div className="po-pagination-btns">
          <button type="button" aria-label="First">«</button>
          <button type="button" aria-label="Previous">‹</button>
          <button type="button" className="active">1</button>
          <button type="button" aria-label="Next">›</button>
          <button type="button" aria-label="Last">»</button>
        </div>
      </div>
    </div>
  )
}
