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
      <header className="mercury-header" style={{ maxWidth: '1200px', width: '100%' }}>
        <Link to={basePath()} className="mercury-logo">
          <img src="/mercury-logo.png" alt="Mercury" />
          MERCURY
        </Link>
        <nav style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="#products">Products</a>
          <a href="#solutions">Solutions</a>
          <a href="#resources">Resources</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <Link to={flowPath('/flow/mercury-login')}>Log In</Link>
          <button type="button" className="mercury-btn-primary" style={{ width: 'auto', padding: '10px 20px' }} onClick={() => navigate(flowPath('/flow/mercury-signup/company-name'))}>
            Open Account
          </button>
        </nav>
      </header>
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 48, textAlign: 'center', maxWidth: 800 }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, margin: '0 0 16px' }}>Powerful banking. Simplified finances.</h1>
        <p style={{ fontSize: 18, color: 'var(--mercury-muted)', margin: '0 0 32px' }}>
          Apply in 10 minutes for online business banking that transforms how you operate.
        </p>
        <form onSubmit={handleOpenAccount} style={{ display: 'flex', gap: 12, maxWidth: 400, margin: '0 auto' }}>
          <input
            type="email"
            className="mercury-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: 0 }}
          />
          <button type="submit" className="mercury-btn-primary" style={{ margin: 0, width: 'auto' }}>Open Account</button>
        </form>
        <button type="button" className="mercury-btn-secondary" style={{ marginTop: 16, width: 'auto' }}>Contact Sales</button>
      </main>
    </div>
  )
}
