import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDirectorAuthorisation, DIRECTOR_AUTH_STEPS } from '../context/DirectorAuthorisationContext'
import { MethodChoiceStep } from './director-authorisation/MethodChoiceStep'
import { RequestFormStep } from './director-authorisation/RequestFormStep'
import { RequestSentStep } from './director-authorisation/RequestSentStep'
import './CompletingBusinessDetailsFlow.css'
import './DirectorAuthorisationFlow.css'

const STEP_COMPONENTS = {
  [DIRECTOR_AUTH_STEPS.METHOD]: MethodChoiceStep,
  [DIRECTOR_AUTH_STEPS.FORM]: RequestFormStep,
  [DIRECTOR_AUTH_STEPS.SENT]: RequestSentStep,
}

export function DirectorAuthorisationFlow() {
  const navigate = useNavigate()
  const {
    step,
    showConfirmModal,
    closeConfirmModal,
    goToSent,
    directorsWithEmail,
  } = useDirectorAuthorisation()
  const StepComponent = STEP_COMPONENTS[step]

  const handleClose = () => {
    if (window.confirm('Leave? Progress is saved.')) navigate('/')
  }

  return (
    <div className="director-authorisation-flow">
      <header className="rda-header">
        <span className="bd-logo">
          <span className="logo-icon">A</span>
          Request for director authorisation
        </span>
        <button type="button" className="bd-close" onClick={handleClose} aria-label="Close">×</button>
      </header>

      <main className="rda-main">
        {StepComponent && <StepComponent />}
      </main>

      {showConfirmModal && (
        <div className="rda-modal-overlay" onClick={closeConfirmModal}>
          <div className="rda-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="rda-modal-close" onClick={closeConfirmModal} aria-label="Close">×</button>
            <h2 className="rda-modal-title">You are about to request authorisation from the following directors</h2>
            <p className="rda-modal-note">Please ensure that you have provided the correct email information.</p>
            <ul className="rda-modal-list">
              {directorsWithEmail.map((d) => (
                <li key={d.id}>{d.email}</li>
              ))}
            </ul>
            <div className="rda-modal-actions">
              <button type="button" className="rda-modal-cancel" onClick={closeConfirmModal}>
                Cancel
              </button>
              <button type="button" className="rda-modal-confirm" onClick={goToSent}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bd-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> aiwallex</span>
        <span>AIwallex User Flows · Requesting director authorisation</span>
      </footer>
    </div>
  )
}
