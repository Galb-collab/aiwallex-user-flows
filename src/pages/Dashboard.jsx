import React from 'react'
import { useOnboarding } from '../context/OnboardingContext'
import './Dashboard.css'

export function Dashboard() {
  const { data } = useOnboarding()
  const email = data.email || 'user@example.com'
  const businessName = data.businessName || 'SLMobbin'

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-org">{businessName}</div>
        <nav className="sidebar-nav">
          <a href="#dashboard" className="active">Dashboard</a>
          <a href="#spend">Spend <span className="tag">New</span></a>
          <a href="#billing">Billing <span className="tag">New</span></a>
          <a href="#reports">Reports</a>
          <a href="#settings">Settings</a>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{businessName} Account | {businessName}</div>
          <a href="#wallet">Wallet</a>
          <a href="#transfers">Transfers</a>
          <a href="#cards">Cards</a>
          <a href="#payments">Payments</a>
          <a href="#rewards">Rewards</a>
          <a href="#developer">Developer</a>
          <a href="#security">Security</a>
          <a href="#statements">Statements</a>
        </div>
        <div className="sidebar-footer">
          <span className="logo-icon small">A</span>
          <span>AIwallex</span>
        </div>
      </aside>
      <div className="dashboard-main">
        <header className="dashboard-header">
          <div className="dashboard-header-right">
            <span className="user-email">{email}</span>
            <div className="user-avatar" />
          </div>
        </header>
        <div className="dashboard-content">
          <div className="banner-pending">
            <p>We just need a few more details from you. Complete these tasks to unlock the full potential of your AIwallex account.</p>
            <button type="button" className="btn-primary">See pending tasks</button>
          </div>
          <div className="dashboard-cards">
            <div className="feature-card get-started">
              <span className="card-tag">Get started</span>
              <h3>Learn how to collect funds using Global Accounts.</h3>
              <p>Create local account details to receive funds from customers in their preferred currency.</p>
              <div className="account-details-preview">
                <div className="detail-box">
                  <span className="flag">🇬🇧</span>
                  <span>Account details</span>
                  <span className="muted">Account no. · Sort Code</span>
                </div>
                <div className="detail-box">
                  <span className="flag">🇺🇸</span>
                  <span>Account details</span>
                  <span className="muted">Account no. · Routing no.</span>
                </div>
              </div>
              <a href="#tour" className="card-link">Take product tour</a>
            </div>
            <div className="feature-card">
              <h3>Global Accounts</h3>
              <p>Open local currency accounts to receive funds in 20+ currencies.</p>
              <div className="currency-flags">🇬🇧 🇺🇸 🇦🇺 🇸🇬 🇭🇰 🇮🇩 🇨🇳 🇪🇺 🇯🇵</div>
              <a href="#learn" className="card-link">Learn more</a>
            </div>
            <div className="feature-card">
              <h3>Cards</h3>
              <p>Create employee and company cards in minutes.</p>
              <div className="cards-preview">
                <div className="card-preview physical">PHYSICAL</div>
                <div className="card-preview virtual">VIRTUAL</div>
              </div>
              <a href="#learn" className="card-link">Learn more</a>
            </div>
            <div className="feature-card case-study">
              <span className="card-tag">Case study</span>
              <h3>AIwallex powers Bird's global payments infrastructure.</h3>
              <a href="#read" className="card-link">Read more</a>
              <div className="case-study-logos">Bird · AIwallex</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
