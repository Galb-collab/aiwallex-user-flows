import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

const MOCK_LINKS = [
  { id: '1', name: 'Invoice #INV-001', amount: '150.00 SGD', status: 'Active', created: '2025-02-15' },
  { id: '2', name: 'Subscription renewal', amount: '29.99 USD', status: 'Paid', created: '2025-02-10' },
  { id: '3', name: 'Consulting fee', amount: '500.00 SGD', status: 'Expired', created: '2025-01-28' },
]

export function PaymentLinksPage() {
  const { flowPath } = useCompany()
  const [links] = useState(MOCK_LINKS)

  return (
    <div className="payments-content">
      <div className="wallet-content">
        <Link to={flowPath('/flow/payments')} className="wallet-back-link">← Back to Payments</Link>
        <h1 className="wallet-section-title">Payment links</h1>
        <p className="global-accounts-desc">Create shareable links for your customers to pay.</p>

        <div className="global-accounts-header" style={{ marginTop: 24, marginBottom: 16 }}>
          <div />
          <button type="button" className="wallet-btn wallet-btn-primary">
            + Create payment link
          </button>
        </div>

        <div className="wallet-table-wrap">
          <table className="wallet-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
                <th>CREATED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {links.map((row) => (
                <tr key={row.id}>
                  <td>
                    <div className="wallet-currency-cell">
                      <span className="wallet-currency-flag">🔗</span>
                      <span className="wallet-currency-name">{row.name}</span>
                    </div>
                  </td>
                  <td>{row.amount}</td>
                  <td>
                    <span className={`global-accounts-status global-accounts-status-${row.status?.toLowerCase()}`}>
                      {row.status}
                    </span>
                  </td>
                  <td>{row.created}</td>
                  <td>
                    <button type="button" className="wallet-btn-link">Copy link</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
