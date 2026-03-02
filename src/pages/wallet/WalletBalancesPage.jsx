import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import { DiscoverAirwallexPayModal } from './DiscoverAirwallexPayModal'

const CURRENCIES = [
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬', globalAccounts: '1 active', scheduledIn: '-', scheduledOut: '-', available: '10.00 SGD' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', globalAccounts: '-', scheduledIn: '-', scheduledOut: '-', available: '0.00 EUR' },
  { code: 'GBP', name: 'Great Britain Pound', flag: '🇬🇧', globalAccounts: '-', scheduledIn: '-', scheduledOut: '-', available: '0.00 GBP' },
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸', globalAccounts: '-', scheduledIn: '-', scheduledOut: '-', available: '0.00 USD' },
]

export function WalletBalancesPage() {
  const { flowPath } = useCompany()
  const [yieldDismissed, setYieldDismissed] = useState(false)
  const [displayCurrency, setDisplayCurrency] = useState('SGD')
  const [showAirwallexPayModal, setShowAirwallexPayModal] = useState(false)

  return (
    <div className="wallet-content">
      <div className="wallet-total-balance">
        <div>
          <span className="wallet-total-amount">10.00</span>
          <select
            className="wallet-total-currency"
            value={displayCurrency}
            onChange={(e) => setDisplayCurrency(e.target.value)}
            style={{ marginLeft: 8, border: 'none', background: 'none', cursor: 'pointer' }}
          >
            <option value="SGD">SGD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="USD">USD</option>
          </select>
        </div>
        <span className="wallet-total-label">Total balance</span>
      </div>

      {!yieldDismissed && (
        <div className="wallet-yield-card">
          <button type="button" className="wallet-yield-close" onClick={() => setYieldDismissed(true)} aria-label="Close">×</button>
          <span className="wallet-yield-icon">🐷</span>
          <div className="wallet-yield-content">
            <h3>Introducing Airwallex Yield</h3>
            <p>Earn a return on your balances by storing funds in Airwallex Yield</p>
            <button type="button" className="wallet-yield-btn">Get started</button>
          </div>
        </div>
      )}

      <h2 className="wallet-section-title">Cash balances 10.00 SGD</h2>
      <div className="wallet-cash-actions">
        <button type="button" className="wallet-btn-link" onClick={() => setShowAirwallexPayModal(true)}>Discover Airwallex Pay</button>
        <button type="button" className="wallet-btn">Add funds</button>
        <Link to={flowPath('/flow/wallet/new-conversion')} className="wallet-btn">Convert</Link>
        <Link to={flowPath('/flow/wallet/new-transfer')} className="wallet-btn wallet-btn-primary">New transfer ▾</Link>
      </div>

      <div className="wallet-table-wrap">
        <table className="wallet-table">
          <thead>
            <tr>
              <th>CURRENCY</th>
              <th>GLOBAL ACCOUNTS</th>
              <th>SCHEDULED IN</th>
              <th>SCHEDULED OUT</th>
              <th>AVAILABLE BALANCE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {CURRENCIES.map((row) => (
              <tr key={row.code}>
                <td>
                  <Link to={flowPath(`/flow/wallet/balance/${row.code}`)} className="wallet-currency-cell wallet-currency-cell-link">
                    <span className="wallet-currency-flag">{row.flag}</span>
                    <div className="wallet-currency-name">{row.name}</div>
                  </Link>
                </td>
                <td>{row.globalAccounts}</td>
                <td>{row.scheduledIn}</td>
                <td>{row.scheduledOut}</td>
                <td>{row.available}</td>
                <td>
                  <Link to={flowPath(`/flow/wallet/balance/${row.code}`)} className="wallet-row-menu" aria-label={`More for ${row.code}`}>⋮</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to={flowPath('/flow/wallet/display-currencies')} className="wallet-edit-link">✎ Edit currency display</Link>

      <section className="wallet-yield-section">
        <div className="wallet-yield-section-header">
          <h3 className="wallet-section-title" style={{ margin: 0 }}>Yield balances</h3>
          <button type="button" aria-label="Expand">▲</button>
        </div>
        <div className="wallet-yield-empty">
          <span className="wallet-yield-empty-icon">🐷💰</span>
          <span>No yield balances</span>
        </div>
      </section>
      {showAirwallexPayModal && <DiscoverAirwallexPayModal onClose={() => setShowAirwallexPayModal(false)} />}
    </div>
  )
}
