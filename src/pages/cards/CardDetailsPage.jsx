import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

const MOCK_CARDS = {
  '1': {
    id: '1',
    nickname: 'Team Expenses',
    type: 'Company card',
    variant: 'Virtual',
    status: 'Active',
    last4: '4242',
    fundingAccount: 'MOBBIN PTE. LTD.',
    purpose: 'Marketing',
    contacts: 'Sam Lee',
    createdAt: '2025-01-15',
    singleUse: false,
    limit: '5,000 SGD',
  },
  '2': {
    id: '2',
    nickname: 'Sam Lee',
    type: 'Employee card',
    variant: 'Physical',
    status: 'Active',
    last4: '1234',
    fundingAccount: 'MOBBIN PTE. LTD.',
    purpose: 'Travel',
    contacts: 'Sam Lee',
    createdAt: '2025-02-01',
    singleUse: false,
    limit: '2,000 SGD',
  },
}

export function CardDetailsPage() {
  const { flowPath } = useCompany()
  const { cardId } = useParams()
  const card = MOCK_CARDS[cardId] || MOCK_CARDS['1']

  return (
    <div className="cards-flow-content">
      <div className="wallet-content">
        <Link to={flowPath('/flow/cards')} className="wallet-back-link">← Back to My cards</Link>
        <h1 className="wallet-section-title">Card details</h1>

        <div className="card-details-header" style={{ marginTop: 24, marginBottom: 24 }}>
          <div className="card-details-preview">
            <div className={`card-preview-inner ${card.variant?.toLowerCase()}`}>
              <span className="card-preview-type">{card.variant}</span>
              <span className="card-preview-number">•••• •••• •••• {card.last4}</span>
              <span className="card-preview-nickname">{card.nickname}</span>
            </div>
          </div>
          <div className="card-details-meta">
            <span className={`global-accounts-status global-accounts-status-${card.status?.toLowerCase()}`}>
              {card.status}
            </span>
            <span className="cards-type-badge">{card.type}</span>
          </div>
        </div>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">Card information</h3>
          <div className="wallet-overview-row">
            <span>Nickname</span>
            <span><strong>{card.nickname}</strong></span>
          </div>
          <div className="wallet-overview-row">
            <span>Type</span>
            <span>{card.type} ({card.variant})</span>
          </div>
          <div className="wallet-overview-row">
            <span>Status</span>
            <span>{card.status}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Last 4 digits</span>
            <span>•••• {card.last4}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Funding account</span>
            <span>{card.fundingAccount}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Purpose</span>
            <span>{card.purpose}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Card contacts</span>
            <span>{card.contacts}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Card limit</span>
            <span>{card.limit}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Single-use</span>
            <span>{card.singleUse ? 'Yes' : 'No'}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Created</span>
            <span>{card.createdAt}</span>
          </div>
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
          <button type="button" className="wallet-btn">
            Freeze card
          </button>
          <button type="button" className="wallet-btn" style={{ borderColor: '#dc2626', color: '#dc2626' }}>
            Cancel card
          </button>
        </div>
      </div>
    </div>
  )
}
