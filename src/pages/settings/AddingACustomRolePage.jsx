import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function AddingACustomRolePage() {
  const { flowPath } = useCompany()
  const [name, setName] = useState('')
  const [permissions, setPermissions] = useState([])
  const [saved, setSaved] = useState(false)

  const togglePermission = (p) => {
    setPermissions((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]))
  }

  if (saved) {
    return (
      <div className="settings-content">
        <div className="wallet-content creating-conversion">
          <div className="creating-conversion-success">
            <span className="creating-conversion-success-icon">✓</span>
            <h2 className="wallet-section-title">Custom role created</h2>
            <p className="creating-conversion-success-text">
              The role &quot;{name}&quot; has been added. You can assign it to users when creating or editing them.
            </p>
            <Link to={flowPath('/flow/settings/creating-a-user')} className="wallet-btn wallet-btn-primary">Back to Creating a user</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="settings-content">
      <div className="wallet-content creating-conversion">
        <Link to={flowPath('/flow/settings/creating-a-user')} className="wallet-back-link">← Back to Creating a user</Link>
        <h1 className="wallet-section-title">Adding a custom role</h1>
        <p className="creating-conversion-desc">Create a custom role with specific permissions for your organisation.</p>

        <div className="creating-conversion-form" style={{ marginTop: 24, maxWidth: 480 }}>
          <div className="scheduling-transfer-field">
            <label>Role name</label>
            <input type="text" placeholder="e.g. Finance manager" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="scheduling-transfer-field">
            <label>Permissions</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              {['View reports', 'Approve expenses', 'Manage users', 'Manage billing'].map((p) => (
                <label key={p} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', fontSize: 14 }}>
                  <input type="checkbox" checked={permissions.includes(p)} onChange={() => togglePermission(p)} />
                  <span>{p}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <Link to={flowPath('/flow/settings/creating-a-user')} className="wallet-btn">Cancel</Link>
          <button type="button" className="wallet-btn wallet-btn-primary" onClick={() => setSaved(true)} disabled={!name.trim()}>
            Create role
          </button>
        </div>
      </div>
    </div>
  )
}
