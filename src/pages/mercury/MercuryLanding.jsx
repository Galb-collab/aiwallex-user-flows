import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './MercuryFlow.css'

export function MercuryLanding() {
  const navigate = useNavigate()
  const { flowPath, basePath } = useCompany()
  const [email, setEmail] = useState('')

  const handleOpenAccount = (e) => {
    e.preventDefault()
    if (email.trim()) navigate(flowPath('/flow/mercury-signup/company-name'))
  }

  return (
    <div className="mercury-flow-layout">
      <header className="mercury-header" style={{ maxWidth: '1200px', width: '100%', flexShrink: 0, flexWrap: 'wrap', gap: 16 }}>
        <Link to={basePath()} className="mercury-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          MERCURY
        </Link>
        <nav style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="#products" className="mercury-nav-link">Products</a>
          <a href="#solutions" className="mercury-nav-link">Solutions</a>
          <a href="#resources" className="mercury-nav-link">Resources</a>
          <a href="#about" className="mercury-nav-link">About</a>
          <a href="#pricing" className="mercury-nav-link">Pricing</a>
          <Link to={flowPath('/flow/mercury-login')} className="mercury-nav-link">Log In</Link>
          <button type="button" className="mercury-btn-primary" style={{ width: 'auto', padding: '10px 20px', margin: 0 }} onClick={() => navigate(flowPath('/flow/mercury-signup/company-name'))}>
            Open Account
          </button>
        </nav>
      </header>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, textAlign: 'center', maxWidth: 800 }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, margin: '0 0 16px' }}>Powerful banking. Simplified finances.</h1>
        <p style={{ fontSize: 18, color: 'var(--mercury-muted)', margin: '0 0 32px' }}>
          Apply in 10 minutes for online business banking that transforms how you operate.
        </p>
        <form onSubmit={handleOpenAccount} className="mercury-form-row" style={{ maxWidth: 400, margin: '0 auto', width: '100%' }}>
          <input
            type="email"
            className="mercury-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="mercury-btn-primary">Open Account</button>
        </form>
        <button type="button" className="mercury-btn-secondary mercury-btn-inline" style={{ marginTop: 16 }}>Contact Sales</button>
      </main>
    </div>
  )
}
