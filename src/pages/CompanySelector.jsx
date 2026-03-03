import React from 'react'
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
  },
  {
    id: 'revolut',
    name: 'Revolut',
    tagline: 'One app for all things money',
    logoLetter: 'R',
    color: '#0075EB',
    logoUrl: '/revolut-logo.png',
  },
  {
    id: 'mercury',
    name: 'Mercury',
    tagline: 'Banking for startups',
    logoLetter: 'M',
    color: '#1a2744',
    logoUrl: '/mercury-logo.png',
  },
]

export function CompanySelector() {
  const navigate = useNavigate()

  return (
    <div className="company-selector">
      <header className="company-selector-header">
        <span className="company-selector-logo">User Flows</span>
      </header>
      <main className="company-selector-main">
        <h1 className="company-selector-title">Choose a company</h1>
        <p className="company-selector-subtitle">Select which company's flows you want to explore.</p>
        <div className="company-cards">
          {COMPANIES.map((company) => (
            <button
              key={company.id}
              type="button"
              className="company-card"
              onClick={() => navigate(`/${company.id}`)}
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
            </button>
          ))}
        </div>
      </main>
      <footer className="company-selector-footer">
        <span>User Flows · Airwallex, Revolut & Mercury</span>
      </footer>
    </div>
  )
}
