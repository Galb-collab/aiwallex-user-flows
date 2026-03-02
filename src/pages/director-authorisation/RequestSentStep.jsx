import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDirectorAuthorisation } from '../../context/DirectorAuthorisationContext'

export function RequestSentStep() {
  const navigate = useNavigate()
  const { directorsWithEmail, sentDate, goToForm } = useDirectorAuthorisation()

  return (
    <div className="rda-sent">
      <div className="rda-sent-icon">✈️</div>
      <h1 className="rda-sent-title">Your request has been sent</h1>
      <p className="rda-sent-desc">
        You have requested the following directors to sign an electronic authorisation letter through email. Please note that each request is valid for 7 days. Once any director signs, we will review the details and give you full access to your account.
      </p>

      <div className="rda-sent-cards">
        {directorsWithEmail.map((d) => (
          <div key={d.id} className="rda-sent-card">
            <div className="rda-sent-card-main">
              <span className="rda-sent-email">••••••@{d.email.split('@')[1] || 'mobbin.com'}</span>
              <span className="rda-sent-date">Request sent on {sentDate}</span>
            </div>
            <span className="rda-sent-badge">Pending signature</span>
          </div>
        ))}
      </div>

      <div className="rda-sent-actions">
        <button type="button" className="rda-request-again" onClick={goToForm}>
          Request again
        </button>
        <button type="button" className="rda-close-btn" onClick={() => navigate('/')}>
          Close
        </button>
      </div>
    </div>
  )
}
