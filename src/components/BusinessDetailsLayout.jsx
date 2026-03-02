import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useBusinessDetails, BUSINESS_DETAILS_STEPS } from '../context/BusinessDetailsContext'
import './BusinessDetailsLayout.css'

const SIDEBAR_SECTIONS = [
  { id: 'get_started', label: 'Get started', steps: [BUSINESS_DETAILS_STEPS.VERIFY_ENTITY] },
  {
    id: 'business_details',
    label: 'Business details',
    steps: [
      BUSINESS_DETAILS_STEPS.BUSINESS_DETAILS_UEN,
      BUSINESS_DETAILS_STEPS.BUSINESS_DETAILS_FOUND,
    ],
  },
  {
    id: 'business_profile',
    label: 'Business profile',
    steps: [
      BUSINESS_DETAILS_STEPS.BUSINESS_PROFILE,
      BUSINESS_DETAILS_STEPS.INDUSTRY,
    ],
  },
  {
    id: 'business_owner',
    label: 'Business owner',
    steps: [],
  },
]

export function BusinessDetailsLayout({ children }) {
  const navigate = useNavigate()
  const { step, prevStep, BUSINESS_DETAILS_STEPS: STEPS, STEP_ORDER } = useBusinessDetails()

  const completedSteps = STEP_ORDER.slice(0, STEP_ORDER.indexOf(step))
  const currentSection = SIDEBAR_SECTIONS.find((s) => s.steps.includes(step))

  const handleClose = () => {
    if (window.confirm('Leave verification? Progress is saved.')) {
      navigate('/')
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
          {SIDEBAR_SECTIONS.map((section) => {
            const isCompleted = section.steps.every((s) => completedSteps.includes(s))
            const isActive = section.steps.includes(step)
            return (
              <div key={section.id} className={`bd-sidebar-section ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
                <div className="bd-sidebar-section-header">
                  {isCompleted && <span className="bd-check">✓</span>}
                  <span>{section.label}</span>
                </div>
                {section.steps.length > 0 && (
                  <ul className="bd-sidebar-steps">
                    {section.steps.map((s) => (
                      <li key={s} className={step === s ? 'active' : completedSteps.includes(s) ? 'completed' : ''}>
                        {s === STEPS.BUSINESS_DETAILS_UEN || s === STEPS.BUSINESS_DETAILS_FOUND
                          ? 'Business details'
                          : s === STEPS.BUSINESS_PROFILE
                          ? 'Business profile'
                          : s === STEPS.INDUSTRY
                          ? 'Industry'
                          : s}
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
        <span>AIwallex User Flows · Completing business details</span>
      </footer>
    </div>
  )
}
