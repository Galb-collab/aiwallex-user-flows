import React from 'react'
import { Link } from 'react-router-dom'
import { useOnboarding } from '../context/OnboardingContext'
import { useCompany } from '../context/CompanyContext'
import { DashboardHeader } from '../components/DashboardHeader'
import './Dashboard.css'

export function Dashboard() {
  const { data } = useOnboarding()
  const { flowPath, info } = useCompany()
  const email = data.email || 'samlee@content-mobbin.com'
  const businessName = data.businessName || 'SLMobbin'

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="sidebar-org">{businessName}</div>
        <nav className="sidebar-nav">
          <a href="#dashboard" className="active">Dashboard</a>
          <Link to={flowPath('/flow/dashboard/adding-funds')}>Add funds</Link>
          <a href="#spend">Spend <span className="tag">New</span></a>
          <Link to={flowPath('/flow/billing')}>Billing <span className="tag">New</span></Link>
          <Link to={flowPath('/flow/reports')}>Reports</Link>
          <Link to={flowPath('/flow/settings')}>Settings</Link>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{businessName} Account | {businessName}</div>
          <Link to={flowPath('/flow/wallet')}>Wallet</Link>
          <Link to={flowPath('/flow/transfers')}>Transfers</Link>
          <Link to={flowPath('/flow/cards')}>Cards</Link>
          <Link to={flowPath('/flow/dashboard/payments')}>Payments</Link>
          <Link to={flowPath('/flow/rewards')}>Rewards</Link>
          <a href="#developer">Developer</a>
          <Link to={flowPath('/flow/rewards/security')}>Security</Link>
          <a href="#statements">Statements</a>
        </div>
        <div className="sidebar-footer">
          <span className="logo-icon small" style={{ background: info.primaryColor }}>{info.logoLetter}</span>
          <span>{info.name}</span>
        </div>
      </aside>
      <div className="dashboard-main">
        <DashboardHeader email={email} />
        <div className="dashboard-content">
          <div className="banner-pending">
            <p>We just need a few more details from you. Complete these tasks to unlock the full potential of your {info.name} account.</p>
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
              <h3>{info.name} powers Bird's global payments infrastructure.</h3>
              <a href="#read" className="card-link">Read more</a>
              <div className="case-study-logos">Bird · {info.name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
