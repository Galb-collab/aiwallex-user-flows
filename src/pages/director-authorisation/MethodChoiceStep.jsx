import React from 'react'
import { useDirectorAuthorisation } from '../../context/DirectorAuthorisationContext'

export function MethodChoiceStep() {
  const { goToForm } = useDirectorAuthorisation()

  return (
    <div className="rda-method">
      <h1 className="rda-title">How would you like to verify your authority?</h1>
      <p className="rda-desc">
        In order to activate transfers of funds to bank accounts, you will need to obtain a director&apos;s authorisation to act on behalf of the business.
      </p>
      <p className="rda-desc">
        Please choose one of the methods below to complete the authorisation.
      </p>

      <div className="rda-cards">
        <button type="button" className="rda-card rda-card-recommended" onClick={goToForm}>
          <span className="rda-card-icon">📝</span>
          <div className="rda-card-body">
            <span className="rda-card-badge">Recommended</span>
            <h2 className="rda-card-title">Request for electronic authorisation</h2>
            <p className="rda-card-desc">Send your director an email request to sign an electronic authorisation letter.</p>
          </div>
        </button>
        <button type="button" className="rda-card" onClick={goToForm}>
          <span className="rda-card-icon">📁</span>
          <div className="rda-card-body">
            <h2 className="rda-card-title">Provide a signed authorisation letter</h2>
            <p className="rda-card-desc">Upload a scanned copy of an authorisation letter signed by your director.</p>
          </div>
        </button>
      </div>
    </div>
  )
}
