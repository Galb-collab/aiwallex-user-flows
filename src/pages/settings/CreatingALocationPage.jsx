import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function CreatingALocationPage() {
  const { flowPath } = useCompany()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [saved, setSaved] = useState(false)

  if (saved) {
    return (
      <div className="settings-content">
        <div className="wallet-content creating-conversion">
          <div className="creating-conversion-success">
            <span className="creating-conversion-success-icon">✓</span>
            <h2 className="wallet-section-title">Location created</h2>
            <p className="creating-conversion-success-text">
              The location &quot;{name}&quot; has been added. You can assign users to this location.
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
        <h1 className="wallet-section-title">Creating a location</h1>
        <p className="creating-conversion-desc">Add a location to organise users and track expenses by office or region.</p>

        <div className="creating-conversion-form" style={{ marginTop: 24, maxWidth: 480 }}>
          <div className="scheduling-transfer-field">
            <label>Location name</label>
            <input type="text" placeholder="e.g. Singapore HQ" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="scheduling-transfer-field">
            <label>Address</label>
            <input type="text" placeholder="123 Business Street" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="scheduling-transfer-field">
            <label>Country</label>
            <select value={country} onChange={(e) => setCountry(e.target.value)}>
              <option value="">Select country</option>
              <option value="SG">Singapore</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <Link to={flowPath('/flow/settings/creating-a-user')} className="wallet-btn">Cancel</Link>
          <button type="button" className="wallet-btn wallet-btn-primary" onClick={() => setSaved(true)} disabled={!name.trim()}>
            Create location
          </button>
        </div>
      </div>
    </div>
  )
}
