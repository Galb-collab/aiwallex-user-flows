import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useBusinessOwner, BUSINESS_OWNER_STEPS } from '../context/BusinessOwnerContext'
import './BusinessDetailsLayout.css'

const SIDEBAR_SECTIONS = [
  { id: 'get_started', label: 'Get started', steps: [], completedLabel: 'Business details' },
  {
    id: 'business_profile',
    label: 'Business profile',
    steps: [],
    completedLabel: 'Industry, Products or services, Website, Monthly turnover, Business location',
  },
  {
    id: 'business_owner',
    label: 'Business owner',
    steps: [
      BUSINESS_OWNER_STEPS.LIST_OF_BUSINESS_OWNERS,
      BUSINESS_OWNER_STEPS.APPLICANTS_IDENTITY,
      BUSINESS_OWNER_STEPS.ID_VERIFICATION_INTRO,
      BUSINESS_OWNER_STEPS.ID_VERIFICATION_METHOD,
      BUSINESS_OWNER_STEPS.ID_VERIFICATION_DETAILS,
      BUSINESS_OWNER_STEPS.ID_VERIFICATION_ADDRESS,
    ],
  },
]

const STEP_LABELS = {
  [BUSINESS_OWNER_STEPS.LIST_OF_BUSINESS_OWNERS]: 'List of business owners',
  [BUSINESS_OWNER_STEPS.APPLICANTS_IDENTITY]: "Applicant's identity",
  [BUSINESS_OWNER_STEPS.ID_VERIFICATION_INTRO]: 'ID verification',
  [BUSINESS_OWNER_STEPS.ID_VERIFICATION_METHOD]: 'ID verification',
  [BUSINESS_OWNER_STEPS.ID_VERIFICATION_DETAILS]: 'ID verification',
  [BUSINESS_OWNER_STEPS.ID_VERIFICATION_ADDRESS]: 'ID verification',
}

export function BusinessOwnerLayout({ children }) {
  const navigate = useNavigate()
  const { step, BUSINESS_OWNER_STEPS: STEPS, STEP_ORDER } = useBusinessOwner()

  const completedSteps = STEP_ORDER.slice(0, STEP_ORDER.indexOf(step))

  const handleClose = () => {
    if (window.confirm('Leave verification? Progress is saved.')) {
      navigate('/flow/completing-business-details')
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
          <div className="bd-sidebar-section completed">
            <div className="bd-sidebar-section-header">
              <span className="bd-check">✓</span>
              <span>Business profile</span>
            </div>
            <ul className="bd-sidebar-steps">
              <li className="completed">Industry</li>
              <li className="completed">Products or services</li>
              <li className="completed">Website</li>
              <li className="completed">Monthly turnover</li>
              <li className="completed">Business location</li>
            </ul>
          </div>
          {SIDEBAR_SECTIONS.slice(2).map((section) => {
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
        <span>AIwallex User Flows · Completing business owner</span>
      </footer>
    </div>
  )
}
