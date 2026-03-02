import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

const MOCK_ACTIVITY = [
  { id: '1', date: '2025-02-18', description: 'Software subscription', amount: '12.50', status: 'Earned' },
  { id: '2', date: '2025-02-15', description: 'Marketing spend', amount: '45.00', status: 'Earned' },
  { id: '3', date: '2025-02-12', description: 'Travel booking', amount: '28.00', status: 'Earned' },
  { id: '4', date: '2025-02-10', description: 'Redeemed to wallet', amount: '-100.00', status: 'Redeemed' },
]

export function RewardsActivityPage() {
  const { flowPath } = useCompany()
  return (
    <div className="rewards-content">
      <div className="wallet-content">
        <Link to={flowPath('/flow/rewards')} className="wallet-back-link">← Back to Rewards</Link>
        <h1 className="wallet-section-title">Rewards activity</h1>
        <p className="global-accounts-desc">View your cashback earnings and redemptions.</p>

        <div className="wallet-table-wrap" style={{ marginTop: 24 }}>
          <table className="wallet-table">
            <thead>
              <tr>
                <th>DATE</th>
                <th>DESCRIPTION</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_ACTIVITY.map((row) => (
                <tr key={row.id}>
                  <td>{row.date}</td>
                  <td>{row.description}</td>
                  <td className={row.amount.startsWith('-') ? 'wallet-amount-negative' : 'wallet-amount-positive'}>
                    {row.amount} SGD
                  </td>
                  <td>{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
