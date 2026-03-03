import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './CardsFlow.css'

const MOCK_CARDS = [
  { id: '1', nickname: 'Team Subscriptions', type: 'Company card', last4: '2757', user: 'Sam Lee', spend: '0.00 SGD', limitUsage: '0%' },
]

export function CardsIndex() {
  const { flowPath } = useCompany()
  const [bannerDismissed, setBannerDismissed] = useState(false)

  return (
    <div className="cards-flow-content">
      <div className="wallet-content">
        {!bannerDismissed && (
          <div className="cards-recommended-banner">
            <span className="cards-recommended-tag">Recommended</span>
            <div className="cards-recommended-content">
              <h3 className="cards-recommended-title">Tired of chasing receipts?</h3>
              <p className="cards-recommended-desc">
                Use Expenses to track, manage, and automate your team&apos;s expenses.{' '}
                <a href="#learn" className="cards-recommended-link">Learn how this tech unicorn streamlines their expenses.</a>
              </p>
            </div>
            <div className="cards-recommended-actions">
              <Link to={flowPath('/flow/spend-general/expenses-spend')} className="cards-recommended-btn">Explore Expenses</Link>
              <button type="button" className="cards-recommended-close" onClick={() => setBannerDismissed(true)} aria-label="Dismiss">×</button>
            </div>
          </div>
        )}

        <div className="cards-sub-tabs">
          <span className="cards-sub-tab active">Cards</span>
          <span className="cards-sub-tab">Cardholders</span>
        </div>

        <div className="cards-summary-row">
          <div className="cards-summary-cards">
            <div className="cards-summary-card">
              <span className="cards-summary-label">All cards</span>
              <span className="cards-summary-value">Total spend 0.00 SGD</span>
              <span className="cards-summary-count">1</span>
            </div>
            <div className="cards-summary-card">
              <span className="cards-summary-label">Company cards</span>
              <span className="cards-summary-value">Total spend 0.00 SGD</span>
              <span className="cards-summary-count">1</span>
            </div>
            <div className="cards-summary-card">
              <span className="cards-summary-label">Employee cards</span>
              <span className="cards-summary-value">Total spend 0.00 SGD</span>
              <span className="cards-summary-count">0</span>
            </div>
          </div>
          <div className="cards-summary-actions">
            <select className="cards-view-dropdown" aria-label="View monthly spend">
              <option>View Monthly spend in SGD</option>
            </select>
            <Link to={flowPath('/flow/cards/creating-a-card-company')} className="cards-create-btn">+ Create card</Link>
          </div>
        </div>

        <div className="cards-toolbar">
          <input
            type="search"
            className="cards-search"
            placeholder="Search via the card nickname, last 4 digits of the card number, cardholder or card contact"
            aria-label="Search cards"
          />
          <select className="cards-filter" aria-label="Card type">
            <option>Card type</option>
          </select>
          <select className="cards-filter" aria-label="Monthly spend">
            <option>Monthly spend in SGD</option>
          </select>
          <select className="cards-filter" aria-label="Limit usage">
            <option>Limit usage</option>
          </select>
          <button type="button" className="cards-filter-tag">3 card statuses selected ×</button>
        </div>

        <div className="cards-table-wrap">
          <table className="cards-table">
            <thead>
              <tr>
                <th><input type="checkbox" aria-label="Select all" /></th>
                <th>CARDS ↕</th>
                <th>CARD NO.</th>
                <th>USERS</th>
                <th>SPEND <span className="cards-th-sub">Monthly, SGD</span> <span className="cards-th-info" title="Info">ℹ</span></th>
                <th>LIMIT USAGE <span className="cards-th-sub">Monthly, SGD</span> <span className="cards-th-info" title="Info">ℹ</span></th>
                <th aria-hidden />
              </tr>
            </thead>
            <tbody>
              {MOCK_CARDS.map((row) => (
                <tr key={row.id}>
                  <td><input type="checkbox" aria-label="Select" /></td>
                  <td>
                    <Link to={flowPath(`/flow/cards/card-details/${row.id}`)} className="cards-table-card-cell">
                      <span className="cards-table-icon">💳</span>
                      <div>
                        <span className="cards-table-nickname">{row.nickname}</span>
                        <span className="cards-table-type">{row.type}</span>
                      </div>
                    </Link>
                  </td>
                  <td>**** {row.last4}</td>
                  <td>{row.user}</td>
                  <td>{row.spend}</td>
                  <td>{row.limitUsage}</td>
                  <td><button type="button" className="cards-row-menu" aria-label="More">⋯</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="cards-pagination">
          <span className="cards-pagination-info">1-1 of 1</span>
          <select className="cards-pagination-rows" aria-label="Rows per page">
            <option>Rows per page: 20</option>
          </select>
        </div>
      </div>
    </div>
  )
}
