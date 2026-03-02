import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function AddingAssistantPage() {
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('viewer')
  const [invited, setInvited] = useState(false)

  const handleInvite = () => {
    setInvited(true)
  }

  if (invited) {
    return (
      <div className="profile-content">
        <div className="wallet-content creating-conversion">
          <div className="creating-conversion-success">
            <span className="creating-conversion-success-icon">✓</span>
            <h2 className="wallet-section-title">Invitation sent</h2>
            <p className="creating-conversion-success-text">
              An invitation has been sent to {email}. They will receive an email to join as an assistant.
            </p>
            <Link to="/flow/profile" className="wallet-btn wallet-btn-primary">Back to Profile</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="profile-content">
      <div className="wallet-content creating-conversion">
        <Link to="/flow/profile" className="wallet-back-link">← Back to Profile</Link>
        <h1 className="wallet-section-title">Adding an assistant</h1>
        <p className="creating-conversion-desc">Invite team members to help manage your account. They will have access based on the role you assign.</p>

        <div className="creating-conversion-form" style={{ marginTop: 24, maxWidth: 480 }}>
          <div className="scheduling-transfer-field">
            <label>Email address</label>
            <input
              type="email"
              placeholder="assistant@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="scheduling-transfer-field">
            <label>Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="viewer">Viewer — View only</option>
              <option value="assistant">Assistant — View and limited actions</option>
              <option value="admin">Admin — Full access</option>
            </select>
          </div>
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <Link to="/flow/profile" className="wallet-btn">Cancel</Link>
          <button
            type="button"
            className="wallet-btn wallet-btn-primary"
            onClick={handleInvite}
            disabled={!email.trim()}
          >
            Send invitation
          </button>
        </div>
      </div>
    </div>
  )
}
