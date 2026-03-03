import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function CreatingAUserPage() {
  const { flowPath } = useCompany()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('viewer')
  const [invited, setInvited] = useState(false)

  const handleInvite = () => {
    setInvited(true)
  }

  if (invited) {
    return (
      <div className="settings-content">
        <div className="wallet-content creating-conversion">
          <div className="creating-conversion-success">
            <span className="creating-conversion-success-icon">✓</span>
            <h2 className="wallet-section-title">User invited</h2>
            <p className="creating-conversion-success-text">
              An invitation has been sent to {email}. They will receive an email to join your organisation.
            </p>
            <Link to={flowPath('/flow/settings/creating-a-user')} className="wallet-btn wallet-btn-primary">Back to Creating a user</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="settings-content">
      <div className="wallet-content">
        <Link to={flowPath('/flow/settings')} className="wallet-back-link">← Back to Settings</Link>
        <h1 className="wallet-section-title">Creating a user</h1>
        <p className="global-accounts-desc">Invite users, manage roles, departments, locations, and employment types.</p>

        <div className="scheduling-transfer-options conversions-options" style={{ marginTop: 24 }}>
          <Link to={flowPath('/flow/settings/creating-a-user/adding-a-custom-role')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">🎭</span>
            <span className="scheduling-transfer-card-title">Adding a custom role</span>
            <span className="scheduling-transfer-card-subtitle">Create roles with specific permissions.</span>
          </Link>
          <Link to={flowPath('/flow/settings/creating-a-user/cancelling-an-invitation')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">❌</span>
            <span className="scheduling-transfer-card-title">Cancelling an invitation</span>
            <span className="scheduling-transfer-card-subtitle">Cancel pending user invitations.</span>
          </Link>
          <Link to={flowPath('/flow/settings/creating-a-user/creating-a-department')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">🏢</span>
            <span className="scheduling-transfer-card-title">Creating a department</span>
            <span className="scheduling-transfer-card-subtitle">Add departments to organise users.</span>
          </Link>
          <Link to={flowPath('/flow/settings/creating-a-user/creating-a-location')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">📍</span>
            <span className="scheduling-transfer-card-title">Creating a location</span>
            <span className="scheduling-transfer-card-subtitle">Add locations for offices and regions.</span>
          </Link>
          <Link to={flowPath('/flow/settings/creating-a-user/removing-employment-type')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">👤</span>
            <span className="scheduling-transfer-card-title">Removing employment type</span>
            <span className="scheduling-transfer-card-subtitle">Remove employment types and reassign users.</span>
          </Link>
          <Link to={flowPath('/flow/settings/creating-a-user/role-details/admin')} className="scheduling-transfer-card conversions-card">
            <span className="scheduling-transfer-card-icon">📋</span>
            <span className="scheduling-transfer-card-title">Role details</span>
            <span className="scheduling-transfer-card-subtitle">View and manage role permissions.</span>
          </Link>
        </div>

        <div className="wallet-content creating-conversion" style={{ marginTop: 32 }}>
          <h3 className="wallet-card-title">Invite a user</h3>
          <p className="creating-conversion-desc">Invite a new user to your organisation. They will receive an email to set up their account.</p>

          <div className="creating-conversion-form" style={{ marginTop: 24, maxWidth: 480 }}>
            <div className="scheduling-transfer-field">
              <label>Email address</label>
              <input
                type="email"
                placeholder="user@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="scheduling-transfer-field">
              <label>Full name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="scheduling-transfer-field">
              <label>Role</label>
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="viewer">Viewer — View only</option>
                <option value="member">Member — View and limited actions</option>
                <option value="admin">Admin — Full access</option>
              </select>
            </div>
          </div>

          <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
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
    </div>
  )
}
