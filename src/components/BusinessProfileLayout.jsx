import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { useBusinessProfile, BUSINESS_PROFILE_STEPS } from '../context/BusinessProfileContext'
import './BusinessDetailsLayout.css'

const SIDEBAR_SECTIONS = [
  { id: 'get_started', label: 'Get started', steps: [], completedLabel: 'Business details' },
  {
    id: 'business_profile',
    label: 'Business profile',
    steps: [
      BUSINESS_PROFILE_STEPS.INDUSTRY,
      BUSINESS_PROFILE_STEPS.PRODUCTS_OR_SERVICES,
      BUSINESS_PROFILE_STEPS.WEBSITE,
      BUSINESS_PROFILE_STEPS.MONTHLY_TURNOVER,
      BUSINESS_PROFILE_STEPS.BUSINESS_LOCATION,
    ],
  },
  {
    id: 'business_owner',
    label: 'Business owner',
    steps: [
      BUSINESS_PROFILE_STEPS.LIST_OF_BUSINESS_OWNERS,
    ],
  },
]

const STEP_LABELS = {
  [BUSINESS_PROFILE_STEPS.INDUSTRY]: 'Industry',
  [BUSINESS_PROFILE_STEPS.PRODUCTS_OR_SERVICES]: 'Products or services',
  [BUSINESS_PROFILE_STEPS.WEBSITE]: 'Website',
  [BUSINESS_PROFILE_STEPS.MONTHLY_TURNOVER]: 'Monthly turnover',
  [BUSINESS_PROFILE_STEPS.BUSINESS_LOCATION]: 'Business location',
  [BUSINESS_PROFILE_STEPS.LIST_OF_BUSINESS_OWNERS]: 'List of business owners',
}

export function BusinessProfileLayout({ children }) {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const { step, BUSINESS_PROFILE_STEPS: STEPS, STEP_ORDER } = useBusinessProfile()

  const completedSteps = STEP_ORDER.slice(0, STEP_ORDER.indexOf(step))

  const handleClose = () => {
    if (window.confirm('Leave verification? Progress is saved.')) {
      navigate(flowPath('/flow/completing-business-details'))
    }
  }

  return (
    <div className="business-details-layout">
      <header className="bd-header">
        <span className="bd-logo">
          <span className="logo-icon">A</span>
          AIwallex Verification
        </span>
        <button type="button" className="bd-close" onClick={handleClose} aria-label="Close">×</button>
      </header>
      <div className="bd-body">
        <aside className="bd-sidebar">
          <div className="bd-sidebar-section completed">
            <div className="bd-sidebar-section-header">
              <span className="bd-check">✓</span>
              <span>Get started</span>
            </div>
            <ul className="bd-sidebar-steps">
              <li className="completed">Business details</li>
            </ul>
          </div>
          {SIDEBAR_SECTIONS.slice(1).map((section) => {
            const isCompleted = section.steps.every((s) => completedSteps.includes(s))
            const isActive = section.steps.includes(step)
            return (
              <div key={section.id} className={`bd-sidebar-section ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                <div className="bd-sidebar-section-header">
                  {isCompleted && section.steps.length > 0 && <span className="bd-check">✓</span>}
                  <span>{section.label}</span>
                </div>
                {section.steps.length > 0 && (
                  <ul className="bd-sidebar-steps">
                    {section.steps.map((s) => (
                      <li key={s} className={step === s ? 'active' : completedSteps.includes(s) ? 'completed' : ''}>
                        {STEP_LABELS[s] || s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </aside>
        <main className="bd-main">{children}</main>
      </div>
      <footer className="bd-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Completing business profile</span>
      </footer>
    </div>
  )
}
