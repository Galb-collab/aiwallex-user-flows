import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CompanySelector.css'

const COMPANIES = [
  {
    id: 'airwallex',
    name: 'Airwallex',
    tagline: 'Global payments and banking platform',
    logoLetter: 'A',
    color: '#6B4EFF',
    logoUrl: '/airwallex-logo.png',
    badge: 'Built with Cursor',
  },
  {
    id: 'revolut',
    name: 'Revolut',
    tagline: 'One app for all things money',
    logoLetter: 'R',
    color: '#0075EB',
    logoUrl: '/revolut-logo.png',
    badge: 'Cursor & Lovable',
    choiceOptions: [
      { label: 'Built with Cursor', action: 'navigate', path: '/revolut' },
      { label: 'Created by Lovable', action: 'external', url: 'https://revolut-proto.lovable.app/' },
    ],
  },
  {
    id: 'mercury',
    name: 'Mercury',
    tagline: 'Banking for startups',
    logoLetter: 'M',
    color: '#1a2744',
    logoUrl: '/mercury-logo.png',
    badge: 'Cursor & Lovable',
    choiceOptions: [
      { label: 'Built with Cursor', action: 'navigate', path: '/mercury' },
      { label: 'Created by Lovable — Onboarding', action: 'external', url: 'https://mercury-mock.lovable.app/' },
      { label: 'Created by Lovable — Dashboard', action: 'external', url: 'https://mercury-mock.lovable.app/dashboard' },
    ],
  },
  {
    id: 'wize',
    name: 'Wize',
    tagline: '',
    logoLetter: 'W',
    color: '#7CB342',
    logoUrl: '/wize-logo.png',
    badge: 'Built with Cursor',
  },
]

export function CompanySelector() {
  const navigate = useNavigate()
  const [choiceModal, setChoiceModal] = useState(null)

  const handleCompanyClick = (company) => {
    if (company.choiceOptions) {
      setChoiceModal(company)
    } else if (company.externalUrl) {
      window.location.assign(company.externalUrl)
    } else {
      navigate(`/${company.id}`)
    }
  }

  return (
    <div className="company-selector">
      <header className="company-selector-header">
        <span className="company-selector-logo">User Flows</span>
      </header>
      <main className="company-selector-main">
        <h1 className="company-selector-title">Choose a company</h1>
        <p className="company-selector-subtitle">Select which company's flows you want to explore.</p>
        <span className="company-selector-badge">Built with Cursor</span>
        <div className="company-cards">
          {COMPANIES.map((company) => (
            <button
              key={company.id}
              type="button"
              className={`company-card ${company.id === 'mercury' ? 'company-card--mercury' : ''} ${company.id === 'revolut' ? 'company-card--revolut' : ''}`}
              onClick={() => handleCompanyClick(company)}
            >
              {company.logoUrl ? (
                <img
                  src={company.logoUrl}
                  alt={company.name}
                  className="company-card-logo-img"
                />
              ) : (
                <span
                  className="company-card-logo"
                  style={{ background: company.color }}
                >
                  {company.logoLetter}
                </span>
              )}
              <h2 className="company-card-name">{company.name}</h2>
              <p className="company-card-tagline">{company.tagline}</p>
              <span className={`company-card-badge ${company.choiceOptions ? 'company-card-badge--choice' : ''}`}>
                {company.badge || 'Built with Cursor'}
              </span>
            </button>
          ))}
        </div>

        {choiceModal && (
          <div className="company-selector-modal-overlay" onClick={() => setChoiceModal(null)}>
            <div className="company-selector-modal" onClick={(e) => e.stopPropagation()}>
              <h3 className="company-selector-modal-title">Choose which version to open</h3>
              <p className="company-selector-modal-subtitle">{choiceModal.name}</p>
              <div className="company-selector-modal-actions">
                {choiceModal.choiceOptions.map((option, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`company-selector-modal-btn ${i === 0 ? 'company-selector-modal-btn--primary' : ''}`}
                    onClick={() => {
                      if (option.action === 'navigate') {
                        setChoiceModal(null)
                        navigate(option.path)
                      } else if (option.action === 'external') {
                        window.location.assign(option.url)
                      }
                    }}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                className="company-selector-modal-close"
                onClick={() => setChoiceModal(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </main>
      <footer className="company-selector-footer">
        <span>User Flows · Airwallex, Revolut, Mercury & Wize</span>
      </footer>
    </div>
  )
}
