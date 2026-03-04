import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutVerifyDetails() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()

  return (
    <div className="revolut-step">
      <button type="button" className="revolut-step-back" onClick={() => navigate(-1)}>←</button>
      <h1 className="revolut-step-title">Verify details</h1>
      <p className="revolut-step-subtitle">Check below to see if you need to take any action or if everything&apos;s verified. You can skip for now, but you must finish this before we can approve directors and shareholders.</p>
      <div className="revolut-verify-section">
        <h3 className="revolut-section-title">Requests</h3>
        <Link to={flowPath('/flow/revolut-onboarding/residence-permit')} className="revolut-verify-item revolut-verify-requires">
          <div className="revolut-verify-icon-wrap">
            <span className="revolut-verify-icon">📄</span>
            <span className="revolut-verify-overlay requires">!</span>
          </div>
          <div className="revolut-verify-content">
            <p>Proof of power of attorney</p>
            <span className="revolut-status-badge requires">Requires action</span>
          </div>
          <span className="revolut-verify-chevron">›</span>
        </Link>
        <Link to={flowPath('/flow/revolut-onboarding/residence-permit')} className="revolut-verify-item revolut-verify-requires">
          <div className="revolut-verify-icon-wrap">
            <span className="revolut-verify-icon">📄</span>
            <span className="revolut-verify-overlay requires">!</span>
          </div>
          <div className="revolut-verify-content">
            <p>Proof of directors structure</p>
            <span className="revolut-status-badge requires">Requires action</span>
          </div>
          <span className="revolut-verify-chevron">›</span>
        </Link>
        <Link to={flowPath('/flow/revolut-onboarding/residence-permit')} className="revolut-verify-item revolut-verify-requires">
          <div className="revolut-verify-icon-wrap">
            <span className="revolut-verify-icon">📄</span>
            <span className="revolut-verify-overlay requires">!</span>
          </div>
          <div className="revolut-verify-content">
            <p>Proof of shareholders structure</p>
            <span className="revolut-status-badge requires">Requires action</span>
          </div>
          <span className="revolut-verify-chevron">›</span>
        </Link>
      </div>
      <div className="revolut-verify-section">
        <h3 className="revolut-section-title">Key corporate personnel</h3>
        <div className="revolut-verify-item revolut-verify-verified">
          <div className="revolut-verify-icon-wrap">
            <span className="revolut-personnel-avatar">JL</span>
            <span className="revolut-verify-overlay verified">✓</span>
          </div>
          <div className="revolut-verify-content">
            <p>Ji Ho Lim</p>
            <span className="revolut-status-badge verified">Verified</span>
          </div>
          <span className="revolut-verify-chevron">›</span>
        </div>
        <div className="revolut-verify-item revolut-verify-verified">
          <div className="revolut-verify-icon-wrap">
            <span className="revolut-personnel-avatar">LJ</span>
            <span className="revolut-verify-overlay verified">✓</span>
          </div>
          <div className="revolut-verify-content">
            <p>Liau Jian-Jie</p>
            <span className="revolut-status-badge verified">Verified</span>
          </div>
          <span className="revolut-verify-chevron">›</span>
        </div>
        <div className="revolut-verify-item revolut-verify-verified">
          <div className="revolut-verify-icon-wrap">
            <span className="revolut-personnel-avatar">LL</span>
            <span className="revolut-verify-overlay verified">✓</span>
          </div>
          <div className="revolut-verify-content">
            <p>Liew Liew</p>
            <span className="revolut-status-badge verified">Verified</span>
          </div>
          <span className="revolut-verify-chevron">›</span>
        </div>
      </div>
      <button type="button" className="revolut-btn-primary" onClick={() => navigate(flowPath('/flow/revolut-dashboard'))}>Continue to dashboard</button>
    </div>
  )
}
