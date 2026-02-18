import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '../context/OnboardingContext'
import './Landing.css'

export function Landing() {
  const navigate = useNavigate()
  const { updateData, goToStep, FLOW_STEPS } = useOnboarding()
  const [email, setEmail] = useState('')

  const handleGetStarted = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    updateData({ landingEmail: email.trim(), email: email.trim() })
    goToStep(FLOW_STEPS.COMPANY_SIZE)
    navigate('/onboarding')
  }

  return (
    <div className="landing">
      <div className="landing-banner">
        Limited offer — Earn 10% cashback with AIwallex cards. <button type="button">Claim offer</button>
      </div>
      <header className="landing-header">
        <span className="logo">
          <span className="logo-icon">A</span>
          AIwallex
        </span>
        <nav>
          <a href="#products">Products</a>
          <a href="#solutions">Solutions</a>
          <a href="#pricing">Pricing</a>
          <a href="#developers">Developers</a>
          <a href="#company">Company</a>
        </nav>
        <div className="landing-actions">
          <button type="button" className="btn-ghost">Log in</button>
          <button type="button" className="btn-primary">See a demo</button>
        </div>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>
            The global <span className="highlight">payments</span> and <span className="highlight">banking</span> platform for growing businesses.
          </h1>
          <p>
            Over 150,000 companies around the world trust AIwallex to grow their revenue. Open global business accounts, accept payments, manage company spend, and much more — all on one unified platform.
          </p>
          <a href="#tour" className="product-tour">Take a product tour &gt;</a>
          <form onSubmit={handleGetStarted} className="hero-form">
            <input
              type="email"
              placeholder="What's your business email?"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary btn-large">Get started</button>
          </form>
          <p className="hero-disclaimer">
            By continuing, you agree to receive AIwallex's marketing communications. You may unsubscribe any time. See Privacy Policy.
          </p>
        </div>
      </section>
      <footer className="landing-footer">
        <span className="logo small"><span className="logo-icon">A</span> aiwallex</span>
        <span>AIwallex User Flows · Web Onboarding</span>
      </footer>
    </div>
  )
}
