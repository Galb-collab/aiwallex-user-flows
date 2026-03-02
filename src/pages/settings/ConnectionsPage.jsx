import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

const MOCK_CONNECTIONS = [
  { id: '1', name: 'Xero', category: 'Accounting', status: 'Connected', lastSync: '2 hours ago' },
  { id: '2', name: 'QuickBooks', category: 'Accounting', status: 'Available', lastSync: '–' },
  { id: '3', name: 'Stripe', category: 'Payments', status: 'Connected', lastSync: '1 hour ago' },
]

export function ConnectionsPage() {
  const { flowPath } = useCompany()
  return (
    <div className="settings-content">
      <div className="wallet-content">
        <Link to={flowPath('/flow/settings')} className="wallet-back-link">← Back to Settings</Link>
        <h1 className="wallet-section-title">Connections</h1>
        <p className="global-accounts-desc">Connect your accounting software, banks, and other tools to sync data automatically.</p>

        <div className="wallet-table-wrap" style={{ marginTop: 24 }}>
          <table className="wallet-table">
            <thead>
              <tr>
                <th>INTEGRATION</th>
                <th>CATEGORY</th>
                <th>STATUS</th>
                <th>LAST SYNC</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {MOCK_CONNECTIONS.map((row) => (
                <tr key={row.id}>
                  <td>
                    <div className="wallet-currency-cell">
                      <span className="wallet-currency-flag">🔗</span>
                      <span className="wallet-currency-name">{row.name}</span>
                    </div>
                  </td>
                  <td>{row.category}</td>
                  <td>
                    <span className={`global-accounts-status global-accounts-status-${row.status?.toLowerCase()}`}>
                      {row.status}
                    </span>
                  </td>
                  <td>{row.lastSync}</td>
                  <td>
                    {row.status === 'Connected' ? (
                      <button type="button" className="wallet-btn-link">Disconnect</button>
                    ) : (
                      <button type="button" className="wallet-btn wallet-btn-primary" style={{ fontSize: 13, padding: '6px 12px' }}>
                        Connect
                      </button>
                    )}
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
