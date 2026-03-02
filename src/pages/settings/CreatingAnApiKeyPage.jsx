import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MOCK_API_KEY = 'sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

export function CreatingAnApiKeyPage() {
  const [name, setName] = useState('')
  const [permissions, setPermissions] = useState(['read'])
  const [created, setCreated] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCreate = () => {
    setCreated(true)
  }

  const handleCopy = () => {
    navigator.clipboard?.writeText(MOCK_API_KEY)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const togglePermission = (perm) => {
    setPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm]
    )
  }

  if (created) {
    return (
      <div className="settings-content">
        <div className="wallet-content creating-conversion">
          <div className="creating-conversion-success">
            <span className="creating-conversion-success-icon">✓</span>
            <h2 className="wallet-section-title">API key created</h2>
            <p className="creating-conversion-success-text">
              Make sure to copy your API key now. You won&apos;t be able to see it again.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '12px 16px',
                background: '#f9fafb',
                border: '1px solid var(--psp-border)',
                borderRadius: 8,
                marginBottom: 24,
                fontFamily: 'monospace',
                fontSize: 13,
              }}
            >
              <code style={{ flex: 1, wordBreak: 'break-all' }}>{MOCK_API_KEY}</code>
              <button
                type="button"
                className="wallet-btn"
                style={{ flexShrink: 0 }}
                onClick={handleCopy}
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <Link to="/flow/settings/developer" className="wallet-btn wallet-btn-primary">
              Back to Developer
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="settings-content">
      <div className="wallet-content creating-conversion">
        <Link to="/flow/settings/developer" className="wallet-back-link">← Back to Developer</Link>
        <h1 className="wallet-section-title">Creating an API key</h1>
        <p className="creating-conversion-desc">
          Create a new API key to authenticate requests. Use a descriptive name to identify this key later.
        </p>

        <div className="creating-conversion-form" style={{ marginTop: 24, maxWidth: 480 }}>
          <div className="scheduling-transfer-field">
            <label>Key name</label>
            <input
              type="text"
              placeholder="e.g. Production backend"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="scheduling-transfer-field">
            <label>Permissions</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              {['read', 'write', 'admin'].map((perm) => (
                <label key={perm} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', fontSize: 14 }}>
                  <input
                    type="checkbox"
                    checked={permissions.includes(perm)}
                    onChange={() => togglePermission(perm)}
                  />
                  <span style={{ textTransform: 'capitalize' }}>{perm}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <Link to="/flow/settings/developer" className="wallet-btn">Cancel</Link>
          <button
            type="button"
            className="wallet-btn wallet-btn-primary"
            onClick={handleCreate}
            disabled={!name.trim()}
          >
            Create API key
          </button>
        </div>
      </div>
    </div>
  )
}
