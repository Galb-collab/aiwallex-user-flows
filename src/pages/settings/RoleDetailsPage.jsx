import React from 'react'
import { Link, useParams } from 'react-router-dom'

const MOCK_ROLES = {
  admin: { name: 'Admin', desc: 'Full access to all features', users: 2, permissions: ['All permissions'] },
  member: { name: 'Member', desc: 'View and limited actions', users: 8, permissions: ['View reports', 'Submit expenses', 'Create requests'] },
  viewer: { name: 'Viewer', desc: 'View only', users: 5, permissions: ['View reports', 'View transactions'] },
  'finance-manager': { name: 'Finance manager', desc: 'Custom role for finance team', users: 3, permissions: ['View reports', 'Approve expenses', 'Manage users'] },
}

export function RoleDetailsPage() {
  const { roleId } = useParams()
  const role = MOCK_ROLES[roleId] || MOCK_ROLES.admin

  return (
    <div className="settings-content">
      <div className="wallet-content">
        <Link to="/flow/settings/creating-a-user" className="wallet-back-link">← Back to Creating a user</Link>
        <h1 className="wallet-section-title">Role details</h1>
        <p className="global-accounts-desc">View and manage this role.</p>

        <div className="wallet-overview-card" style={{ marginTop: 24 }}>
          <h3 className="wallet-card-title">{role.name}</h3>
          <div className="wallet-overview-row">
            <span>Description</span>
            <span>{role.desc}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Users with this role</span>
            <span>{role.users}</span>
          </div>
          <div className="wallet-overview-row">
            <span>Permissions</span>
            <span>{role.permissions.join(', ')}</span>
          </div>
        </div>

        <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
          <button type="button" className="wallet-btn wallet-btn-primary">
            Edit role
          </button>
          {role.name !== 'Admin' && (
            <button type="button" className="wallet-btn" style={{ borderColor: '#dc2626', color: '#dc2626' }}>
              Delete role
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
