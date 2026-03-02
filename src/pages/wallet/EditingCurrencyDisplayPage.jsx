import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CURRENCIES_LIST = [
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪' },
  { code: 'ALL', name: 'Lek', flag: '🇦🇱' },
  { code: 'AMD', name: 'Armenian Dram', flag: '🇦🇲' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'Great Britain Pound', flag: '🇬🇧' },
]

export function EditingCurrencyDisplayPage() {
  const [search, setSearch] = useState('')
  const [toggles, setToggles] = useState(() =>
    Object.fromEntries(CURRENCIES_LIST.map((c) => [c.code, c.code === 'SGD']))
  )

  const filtered = CURRENCIES_LIST.filter(
    (c) => !search || c.code.toLowerCase().includes(search.toLowerCase()) || c.name.toLowerCase().includes(search.toLowerCase())
  )

  const toggle = (code) => {
    setToggles((t) => ({ ...t, [code]: !t[code] }))
  }

  return (
    <div className="wallet-content">
      <Link to="/flow/wallet" className="wallet-back-link">← Back</Link>
      <h1 className="wallet-section-title">Display currencies</h1>
      <p className="wallet-display-desc">Select which currencies you would like to view in your wallet.</p>
      <div className="wallet-display-search-wrap">
        <span className="wallet-search-icon">🔍</span>
        <input
          type="search"
          className="wallet-search"
          placeholder="Search currencies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: 360 }}
        />
      </div>
      <ul className="wallet-currency-list">
        {filtered.map((c) => (
          <li key={c.code} className="wallet-currency-list-item">
            <span className="wallet-currency-flag">{c.flag}</span>
            <span className="wallet-currency-code">{c.code}</span>
            <span className="wallet-currency-name">{c.name}</span>
            <button
              type="button"
              role="switch"
              aria-checked={toggles[c.code]}
              className={`wallet-toggle ${toggles[c.code] ? 'on' : ''}`}
              onClick={() => toggle(c.code)}
            >
              <span className="wallet-toggle-slider" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
