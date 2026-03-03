import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

const TRANSFERS = [
  { id: '1', date: '2025-11-28', status: 'Scheduled', recipient: 'Account number •••••••••', reference: 'Expenses', youPay: '3.84 USD', recipientGets: '3.84 USD' },
]

export function TransfersIndex() {
  const { flowPath } = useCompany()
  const [bannerDismissed, setBannerDismissed] = useState(false)
  return (
    <div className="transfers-content">
      <div className="wallet-content transfers-summary-content">
        {!bannerDismissed && (
          <div className="transfers-airwallex-pay-banner">
            <span className="transfers-banner-icon">💳</span>
            <div className="transfers-banner-content">
              <h3 className="transfers-banner-title">Transfer through Airwallex Pay</h3>
              <p className="transfers-banner-desc">
                Discover how simple it is to send funds directly to your recipient&apos;s Airwallex wallet in seconds. Supports all currencies that can be held in your wallet.{' '}
                <a href="#learn" className="transfers-banner-link">Learn more</a>
              </p>
            </div>
            <div className="transfers-banner-actions">
              <Link to={flowPath('/flow/wallet/new-transfer')} className="transfers-banner-btn">Transfer now</Link>
              <button type="button" className="transfers-banner-close" onClick={() => setBannerDismissed(true)} aria-label="Dismiss">×</button>
            </div>
          </div>
        )}

        <div className="transfers-sub-tabs">
          <span className="transfers-sub-tab active">Transfers</span>
          <Link to={flowPath('/flow/transfers/create-batch-transfer')} className="transfers-sub-tab">Batch transfers</Link>
        </div>

        <div className="transfers-toolbar">
          <Link to={flowPath('/flow/wallet/new-transfer')} className="transfers-new-btn">New transfer ▾</Link>
          <div className="transfers-search-filters">
            <input
              type="search"
              className="transfers-search"
              placeholder="Search recipient, account number, transfer ID, reference, description, or request ID."
              aria-label="Search transfers"
            />
            <select className="transfers-filter" aria-label="Status">
              <option>Status</option>
            </select>
            <select className="transfers-filter" aria-label="RFI status">
              <option>RFI status</option>
            </select>
            <div className="transfers-date-range">
              <span className="transfers-date-icon">📅</span>
              <span>Creation date</span>
              <input type="date" defaultValue="2023-11-28" aria-label="From" />
              <span className="transfers-date-sep">|</span>
              <input type="date" defaultValue="2025-11-27" aria-label="To" />
              <button type="button" className="transfers-date-clear" aria-label="Clear">×</button>
            </div>
            <button type="button" className="transfers-export" aria-label="Export">↓</button>
          </div>
        </div>

        <div className="transfers-table-wrap">
          <table className="transfers-table">
            <thead>
              <tr>
                <th><input type="checkbox" aria-label="Select all" /></th>
                <th>TRANSFER DATE</th>
                <th>STATUS</th>
                <th>RECIPIENT</th>
                <th>REFERENCE <span className="transfers-th-info" title="Info">ℹ</span></th>
                <th>YOU PAY <span className="transfers-th-info" title="Info">ℹ</span></th>
                <th>RECIPIENT GETS <span className="transfers-th-info" title="Info">ℹ</span></th>
              </tr>
            </thead>
            <tbody>
              {TRANSFERS.map((row) => (
                <tr key={row.id}>
                  <td><input type="checkbox" aria-label="Select" /></td>
                  <td>{row.date}</td>
                  <td><span className="transfers-status transfers-status-scheduled">{row.status}</span></td>
                  <td>{row.recipient}</td>
                  <td>{row.reference}</td>
                  <td>{row.youPay}</td>
                  <td>{row.recipientGets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
