import React from 'react'
import { Link } from 'react-router-dom'

const GLOBAL_ACCOUNTS = [
  { id: '1', currency: 'SGD', name: 'Singapore Dollar Account', country: 'Singapore', status: 'Active', balance: '10.00 SGD' },
  { id: '2', currency: 'USD', name: 'US Dollar Account', country: 'United States', status: 'Active', balance: '0.00 USD' },
  { id: '3', currency: 'EUR', name: 'Euro Account', country: 'Germany', status: 'Pending', balance: '–' },
]

export function GlobalAccountsPage() {
  return (
    <div className="wallet-content">
      <div className="global-accounts-header">
        <div>
          <h1 className="wallet-section-title" style={{ margin: 0 }}>Global accounts</h1>
          <p className="global-accounts-desc">Hold and manage funds in multiple currencies with local account details.</p>
        </div>
        <Link to="/flow/wallet/global-accounts/new" className="wallet-btn wallet-btn-primary">
          Create global account
        </Link>
      </div>

      <div className="wallet-table-wrap">
        <table className="wallet-table">
          <thead>
            <tr>
              <th>CURRENCY</th>
              <th>ACCOUNT NAME</th>
              <th>COUNTRY</th>
              <th>STATUS</th>
              <th>BALANCE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {GLOBAL_ACCOUNTS.map((row) => (
              <tr key={row.id}>
                <td>
                  <div className="wallet-currency-cell">
                    <span className="wallet-currency-flag">{row.currency === 'SGD' ? '🇸🇬' : row.currency === 'USD' ? '🇺🇸' : '🇪🇺'}</span>
                    <span className="wallet-currency-name">{row.currency}</span>
                  </div>
                </td>
                <td>{row.name}</td>
                <td>{row.country}</td>
                <td>
                  <span className={`global-accounts-status global-accounts-status-${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
                <td>{row.balance}</td>
                <td>
                  <Link to={`/flow/wallet/balance/${row.currency}`} className="wallet-btn-link">View balance</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
