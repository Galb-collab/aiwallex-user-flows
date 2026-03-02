import React from 'react'
import { Link, useParams } from 'react-router-dom'

const CURRENCY_INFO = {
  SGD: { name: 'Singapore Dollar', flag: '🇸🇬', available: '5.00', pending: '0.00', account: '5.00' },
  EUR: { name: 'Euro', flag: '🇪🇺', available: '0.00', pending: '0.00', account: '0.00' },
  GBP: { name: 'Great Britain Pound', flag: '🇬🇧', available: '0.00', pending: '0.00', account: '0.00' },
  USD: { name: 'US Dollar', flag: '🇺🇸', available: '0.00', pending: '0.00', account: '0.00' },
}

const TRANSACTIONS = [
  { date: '2025-11-27', product: 'Conversions', details: 'Sell SGD to buy 3.84 USD at 1.30258', amount: '-5.00', balance: '5.00' },
  { date: '2025-11-27', product: 'Global Accounts', details: 'Deposit from', amount: '+10.00', balance: '10.00' },
]

export function CashBalanceDetailsPage() {
  const { currency } = useParams()
  const info = CURRENCY_INFO[currency] || CURRENCY_INFO.SGD
  const code = currency || 'SGD'

  return (
    <div className="wallet-content">
      <Link to="/flow/wallet" className="wallet-back-link">← Back</Link>
      <div className="wallet-detail-header">
        <h1 className="wallet-section-title" style={{ margin: 0 }}>
          {code} Cash balance
        </h1>
        <div className="wallet-detail-actions">
          <button type="button" className="wallet-btn">Add funds</button>
          <Link to="/flow/wallet/new-conversion" className="wallet-btn">Convert</Link>
          <Link to="/flow/wallet/new-transfer" className="wallet-btn wallet-btn-primary">New transfer</Link>
        </div>
      </div>

      <div className="wallet-overview-card">
        <h3 className="wallet-card-title">Overview</h3>
        <div className="wallet-overview-row">
          <span>{info.flag} {info.available} {code} Available balance</span>
          <span className="wallet-info-icon" aria-label="Info">ℹ️</span>
        </div>
        <div className="wallet-overview-row">
          <span>{info.pending} {code} Pending balance</span>
          <span className="wallet-info-icon" aria-label="Info">ℹ️</span>
        </div>
        <div className="wallet-overview-row">
          <span>{info.account} {code} Account balance</span>
          <span className="wallet-info-icon" aria-label="Info">ℹ️</span>
        </div>
      </div>

      <div className="wallet-overview-card">
        <h3 className="wallet-card-title">Balance history</h3>
        <div className="wallet-history-toolbar">
          <select className="wallet-filter-select"><option>Account balance</option></select>
          <select className="wallet-filter-select"><option>Last 30 days</option></select>
        </div>
        <div className="wallet-history-chart" aria-hidden>
          <span className="wallet-chart-placeholder">Line chart 29 Oct – 27 Nov 2025</span>
        </div>
      </div>

      <div className="wallet-alert">You have no scheduled transactions in the next 30 days.</div>

      <div className="wallet-toolbar">
        <input type="search" className="wallet-search" placeholder="Search for transaction" />
        <select><option>Settled from</option></select>
        <select><option>To</option></select>
        <select><option>Product</option></select>
        <button type="button">Export</button>
      </div>

      <div className="wallet-table-wrap">
        <table className="wallet-table">
          <thead>
            <tr>
              <th>DATE</th>
              <th>PRODUCT</th>
              <th>DETAILS</th>
              <th>AMOUNT</th>
              <th>ACCOUNT BALANCE</th>
            </tr>
          </thead>
          <tbody>
            {TRANSACTIONS.map((row, i) => (
              <tr key={i}>
                <td>{row.date}</td>
                <td>{row.product}</td>
                <td>{row.details}</td>
                <td className={row.amount.startsWith('+') ? 'wallet-amount-positive' : 'wallet-amount-negative'}>{row.amount}</td>
                <td>{row.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
