import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useBusinessDetails } from '../../context/BusinessDetailsContext'
import './PlanSelection.css'

const PLANS = [
  {
    id: 'explore',
    name: 'Explore',
    icon: '✈️',
    desc: 'For businesses to manage funds and finances globally',
    price: 'Free',
    cta: 'Get started',
    bestValue: false,
  },
  {
    id: 'grow',
    name: 'Grow',
    icon: '📈',
    desc: 'For growing businesses to manage funds and spend with precision',
    price: '$79/month',
    cta: 'Try it for free',
    note: 'Take a free 1 month trial',
    bestValue: true,
  },
  {
    id: 'accelerate',
    name: 'Accelerate',
    icon: '⚡',
    desc: 'For large businesses that need customised financial workflows and support',
    price: 'From $399/month',
    cta: 'Get started',
    bestValue: false,
  },
]

export function PlanSelection() {
  const navigate = useNavigate()
  const { data, updateData, nextStep } = useBusinessDetails()

  return (
    <div className="plan-selection-page">
      <header className="plan-selection-header">
        <span className="bd-logo">
          <span className="logo-icon">A</span>
          AIwallex
        </span>
        <button type="button" className="bd-close" onClick={() => window.confirm('Leave?') && navigate('/')} aria-label="Close">×</button>
      </header>
      <div className="plan-selection-content">
        <h1 className="plan-selection-title">Please select a plan for your account.</h1>
        <p className="plan-selection-desc">
          Your subscription will only begin after your account is verified and activated.
        </p>
        <p className="plan-selection-desc">
          Start on our <strong>Explore</strong> plan, or try out our advanced features with our premium plans. You can manage and change your plan anytime after your account is activated in the <strong>Plan & billing</strong> page.
        </p>
        <p className="plan-selection-note">Monthly prices are in SGD and exclusive of GST. Terms & Conditions, additional Fees & Charges may apply.</p>
        <div className="plan-cards">
          {PLANS.map((plan) => (
            <div key={plan.id} className={`plan-card ${data.selectedPlan === plan.id ? 'selected' : ''}`}>
              {plan.bestValue && <span className="plan-badge">Best Value</span>}
              <span className="plan-icon">{plan.icon}</span>
              <h3>{plan.name}</h3>
              <p className="plan-desc">{plan.desc}</p>
              <p className="plan-price">{plan.price}</p>
              <button
                type="button"
                className="plan-cta"
                onClick={() => {
                  updateData({ selectedPlan: plan.id })
                  nextStep()
                }}
              >
                {plan.cta}
              </button>
              {plan.note && <p className="plan-note">{plan.note}</p>}
            </div>
          ))}
        </div>
      </div>
      <footer className="bd-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows</span>
      </footer>
    </div>
  )
}
