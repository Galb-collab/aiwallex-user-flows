import React from 'react'
import { Link } from 'react-router-dom'
import './CardsFlow.css'

const MOCK_CARDS = [
  { id: '1', nickname: 'Team Expenses', type: 'Company card', status: 'Active', last4: '4242' },
  { id: '2', nickname: 'Sam Lee', type: 'Employee card', status: 'Active', last4: '1234' },
]

export function CardsIndex() {
  return (
    <div className="cards-flow-content">
      <div className="wallet-content">
        <div className="global-accounts-header">
          <div>
            <h1 className="wallet-section-title" style={{ margin: 0 }}>My cards</h1>
            <p className="global-accounts-desc">View and manage your company and employee cards.</p>
          </div>
          <Link to="/flow/cards/creating-a-card-company" className="wallet-btn wallet-btn-primary">
            + Create card
          </Link>
        </div>

        <div className="wallet-table-wrap">
          <table className="wallet-table">
            <thead>
              <tr>
                <th>CARD</th>
                <th>TYPE</th>
                <th>STATUS</th>
                <th>LAST 4</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {MOCK_CARDS.map((row) => (
                <tr key={row.id}>
                  <td>
                    <div className="wallet-currency-cell">
                      <span className="wallet-currency-flag">💳</span>
                      <span className="wallet-currency-name">{row.nickname}</span>
                    </div>
                  </td>
                  <td>{row.type}</td>
                  <td>
                    <span className="global-accounts-status global-accounts-status-active">{row.status}</span>
                  </td>
                  <td>•••• {row.last4}</td>
                  <td>
                    <Link to={`/flow/cards/card-details/${row.id}`} className="wallet-btn-link">View details</Link>
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
