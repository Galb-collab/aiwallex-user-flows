import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutLanding() {
  const navigate = useNavigate()
  const { flowPath, basePath } = useCompany()

  return (
    <div className="revolut-flow-layout revolut-landing-page">
      <div className="revolut-landing">
        <header className="revolut-landing-header">
          <Link to={basePath()} className="revolut-landing-logo">Revolut</Link>
          <nav className="revolut-landing-nav">
            <a href="#personal">Personal</a>
            <a href="#business" className="active">Business</a>
            <a href="#kids">Kids & Teens</a>
            <a href="#company">Company</a>
          </nav>
          <div className="revolut-landing-actions">
            <Link to={flowPath('/flow/revolut-login')} className="revolut-landing-login">Log in</Link>
            <button type="button" className="revolut-landing-signup" onClick={() => navigate(flowPath('/flow/revolut-signup'))}>Sign up</button>
          </div>
        </header>
        <main className="revolut-landing-hero">
          <div className="revolut-landing-geometry" aria-hidden />
          <div className="revolut-landing-content">
            <h1>Go beyond business as usual.</h1>
            <p>Take your finances further with the account designed for efficiency, and built for business.</p>
            <button type="button" className="revolut-landing-cta revolut-btn-landing" onClick={() => navigate(flowPath('/flow/revolut-signup'))}>
              Get started
            </button>
          </div>
          <div className="revolut-landing-visual">
            <div className="revolut-card-preview revolut-card-business">
              <span className="revolut-card-chip" />
              <span className="revolut-card-brand">Revolut Business</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
