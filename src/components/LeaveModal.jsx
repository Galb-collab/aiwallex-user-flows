import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '../context/OnboardingContext'
import './LeaveModal.css'

export function LeaveModal() {
  const navigate = useNavigate()
  const { setShowLeaveModal, goToStep, FLOW_STEPS } = useOnboarding()

  const handleContinue = () => {
    setShowLeaveModal(false)
  }

  const handleLeave = () => {
    setShowLeaveModal(false)
    goToStep(FLOW_STEPS.DASHBOARD)
    navigate('/dashboard')
  }

  return (
    <div className="modal-overlay" onClick={handleContinue}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close" onClick={handleContinue} aria-label="Close">×</button>
        <div className="modal-illustration">💼📄🪪</div>
        <h2 className="modal-title">Are you sure you want to leave?</h2>
        <p className="modal-text">We've saved your progress so you can return at anytime.</p>
        <div className="modal-actions">
          <button type="button" className="btn-outline" onClick={handleContinue}>
            No, continue verification
          </button>
          <button type="button" className="btn-continue" onClick={handleLeave}>
            Yes, take me to the dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
