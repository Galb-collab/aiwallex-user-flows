import React from 'react'
import { useDirectorAuthorisation } from '../../context/DirectorAuthorisationContext'

const COMPANY = 'MOBBIN PTE. LTD.'
const DIRECTOR_OPTIONS = [
  { value: '', label: 'Choose a director' },
  { value: 'john-doe', label: 'John Doe' },
  { value: 'jane-smith', label: 'Jane Smith' },
  { value: 'lee-wee', label: 'Lee Wee' },
]

export function RequestFormStep() {
  const {
    directors,
    addDirector,
    updateDirector,
    openConfirmModal,
    directorsWithEmail,
  } = useDirectorAuthorisation()

  const canSend = directorsWithEmail.length > 0

  const handleSendRequest = () => {
    if (!canSend) return
    openConfirmModal()
  }

  return (
    <div className="rda-form-wrap">
      <h1 className="rda-title">Request for director authorisation</h1>
      <p className="rda-desc">
        To comply with local regulations, a director would need to authorise you to act on behalf of <strong>{COMPANY}</strong>. You can do this by sending an email request to any director from your business to sign an electronic authorisation letter.
      </p>
      <p className="rda-desc">
        You can send requests to multiple directors if needed. Each request is valid for 7 days. Once a director authorises you, you will have full access to the Airwallex account.
      </p>

      <div className="rda-fields">
        {directors.map((row) => (
          <div key={row.id} className="rda-row">
            <div className="rda-field">
              <label>Director</label>
              <select
                value={row.director}
                onChange={(e) => updateDirector(row.id, { director: e.target.value })}
              >
                {DIRECTOR_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
            <div className="rda-field">
              <label>Email</label>
              <input
                type="email"
                value={row.email}
                onChange={(e) => updateDirector(row.id, { email: e.target.value })}
                placeholder="Input director's email"
              />
            </div>
          </div>
        ))}
        <button type="button" className="rda-add-btn" onClick={addDirector}>
          + Add an individual
        </button>
      </div>

      <div className="rda-actions">
        <button
          type="button"
          className="rda-send-btn"
          onClick={handleSendRequest}
          disabled={!canSend}
        >
          Send request
        </button>
      </div>
    </div>
  )
}
