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
    badge: 'Built with Cursor',
  },
  {
    id: 'revolut-lovable',
    name: 'Revolut',
    tagline: 'One app for all things money',
    logoLetter: 'R',
    color: '#0075EB',
    logoUrl: '/revolut-logo.png',
    badge: 'Created by Lovable',
    externalUrl: 'https://revolut-proto.lovable.app/',
  },
  {
    id: 'mercury',
    name: 'Mercury',
    tagline: 'Banking for startups',
    logoLetter: 'M',
    color: '#1a2744',
    logoUrl: '/mercury-logo.png',
    badge: 'Built with Cursor',
  },
  {
    id: 'mercury-lovable',
    name: 'Mercury',
    tagline: 'Banking for startups',
    logoLetter: 'M',
    color: '#1a2744',
    logoUrl: '/mercury-logo.png',
    badge: 'Created by Lovable',
    externalUrls: {
      onboarding: 'https://mercury-mock.lovable.app/',
      dashboard: 'https://mercury-mock.lovable.app/dashboard',
    },
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
  const [lovableModal, setLovableModal] = useState(null)

  const handleCompanyClick = (company) => {
    if (company.externalUrls) {
      setLovableModal(company)
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
              className={`company-card ${company.id === 'mercury-lovable' ? 'company-card--mercury' : ''}`}
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
              <span className={`company-card-badge ${company.badge === 'Created by Lovable' ? 'company-card-badge--lovable' : ''}`}>
                {company.badge || 'Built with Cursor'}
              </span>
            </button>
          ))}
        </div>

        {lovableModal && (
          <div className="company-selector-modal-overlay" onClick={() => setLovableModal(null)}>
            <div className="company-selector-modal" onClick={(e) => e.stopPropagation()}>
              <h3 className="company-selector-modal-title">Choose where to start</h3>
              <p className="company-selector-modal-subtitle">{lovableModal.name} by Lovable</p>
              <div className="company-selector-modal-actions">
                <button
                  type="button"
                  className="company-selector-modal-btn"
                  onClick={() => window.location.assign(lovableModal.externalUrls.onboarding)}
                >
                  Start with Onboarding
                </button>
                <button
                  type="button"
                  className="company-selector-modal-btn company-selector-modal-btn--primary"
                  onClick={() => window.location.assign(lovableModal.externalUrls.dashboard)}
                >
                  Go to Dashboard
                </button>
              </div>
              <button
                type="button"
                className="company-selector-modal-close"
                onClick={() => setLovableModal(null)}
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
