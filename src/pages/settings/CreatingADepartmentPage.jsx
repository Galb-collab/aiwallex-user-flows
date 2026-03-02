import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function CreatingADepartmentPage() {
  const [name, setName] = useState('')
  const [manager, setManager] = useState('')
  const [saved, setSaved] = useState(false)

  if (saved) {
    return (
      <div className="settings-content">
        <div className="wallet-content creating-conversion">
          <div className="creating-conversion-success">
            <span className="creating-conversion-success-icon">✓</span>
            <h2 className="wallet-section-title">Department created</h2>
            <p className="creating-conversion-success-text">
              The department &quot;{name}&quot; has been added. You can assign users to this department.
            </p>
            <Link to="/flow/settings/creating-a-user" className="wallet-btn wallet-btn-primary">Back to Creating a user</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="settings-content">
      <div className="wallet-content creating-conversion">
        <Link to="/flow/settings/creating-a-user" className="wallet-back-link">← Back to Creating a user</Link>
        <h1 className="wallet-section-title">Creating a department</h1>
        <p className="creating-conversion-desc">Add a department to organise users and assign expenses.</p>

        <div className="creating-conversion-form" style={{ marginTop: 24, maxWidth: 480 }}>
          <div className="scheduling-transfer-field">
            <label>Department name</label>
            <input type="text" placeholder="e.g. Engineering" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="scheduling-transfer-field">
            <label>Department manager</label>
            <select value={manager} onChange={(e) => setManager(e.target.value)}>
              <option value="">Select a user</option>
              <option value="sam">Sam Lee</option>
              <option value="jane">Jane Smith</option>
            </select>
          </div>
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <Link to="/flow/settings/creating-a-user" className="wallet-btn">Cancel</Link>
          <button type="button" className="wallet-btn wallet-btn-primary" onClick={() => setSaved(true)} disabled={!name.trim()}>
            Create department
          </button>
        </div>
      </div>
    </div>
  )
}
