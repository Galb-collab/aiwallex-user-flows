import React, { useState } from 'react'

const TRANSACTIONS = [
  { date: '2025-11-27', product: 'Conversions', details: 'Buy USD by selling 5.00 SGD at 1.30258', balanceType: 'Cash', amount: '+3.84 USD', positive: true },
  { date: '2025-11-27', product: 'Conversions', details: 'Sell SGD to buy 3.84 USD at 1.30258', balanceType: 'Cash', amount: '-5.00 SGD', positive: false },
  { date: '2025-11-27', product: 'Global Accounts', details: 'Deposit from', balanceType: 'Cash', amount: '+10.00 SGD', positive: true },
]

export function WalletTransactionsPage() {
  const [search, setSearch] = useState('')

  return (
    <div className="wallet-content">
      <div className="wallet-alert">
        You have no scheduled transactions in the next 30 days.
      </div>

      <div className="wallet-toolbar">
        <span style={{ position: 'relative', flex: 1, maxWidth: 320 }}>
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', opacity: 0.6 }}>🔍</span>
          <input
            type="search"
            className="wallet-search"
            placeholder="Search for transaction"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </span>
        <select aria-label="Settled from"><option>Settled from</option></select>
        <select aria-label="To"><option>To</option></select>
        <select aria-label="Product"><option>Product</option></select>
        <select aria-label="Currency"><option>Currency</option></select>
        <select aria-label="Balance type"><option>Balance type</option></select>
        <button type="button">Export</button>
      </div>

      <div className="wallet-table-wrap">
        <table className="wallet-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>PRODUCT</th>
              <th>DETAILS</th>
              <th>BALANCE TYPE</th>
              <th>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            {TRANSACTIONS.map((row, i) => (
              <tr key={i}>
                <td>{row.date}</td>
                <td>{row.product}</td>
                <td>{row.details}</td>
                <td>{row.balanceType}</td>
                <td className={row.positive ? 'wallet-amount-positive' : 'wallet-amount-negative'}>{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="po-pagination">
        <span>1-{TRANSACTIONS.length} of {TRANSACTIONS.length}</span>
        <select className="po-rows-select" aria-label="Rows per page"><option>10</option></select>
        <div className="po-pagination-btns">
          <button type="button" aria-label="First">«</button>
          <button type="button" className="active">1</button>
          <button type="button" aria-label="Next">›</button>
          <button type="button" aria-label="Last">»</button>
        </div>
      </div>
    </div>
  )
}
