import React from 'react'
import { Link } from 'react-router-dom'
import { useOnboarding } from '../context/OnboardingContext'

export function Layout({ children, showProgress = false, showBack = false }) {
  const { prevStep, step, FLOW_STEPS, progress } = useOnboarding()
  const isOnboarding = step !== FLOW_STEPS.LANDING && step !== FLOW_STEPS.DASHBOARD

  return (
    <div className="layout">
      <header className="header">
        <Link to="/" className="logo">
          <span className="logo-icon">A</span>
          <span>AIwallex</span>
        </Link>
        {showProgress && isOnboarding && (
          <div className="progress-bar" style={{ width: `${progress * 100}%` }} />
        )}
        {showBack && isOnboarding && (
          <button type="button" className="back-link" onClick={prevStep}>
            &lt; Back
          </button>
        )}
      </header>
      <main className="main">{children}</main>
      <footer className="footer">
        <span className="footer-logo">
          <span className="logo-icon small">A</span>
          aiwallex
        </span>
        <span className="footer-curated">AIwallex User Flows · Web Onboarding</span>
      </footer>
    </div>
  )
}
