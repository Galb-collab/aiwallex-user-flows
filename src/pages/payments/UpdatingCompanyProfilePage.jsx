import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../bills/BillsFlow.css'

export function UpdatingCompanyProfilePage() {
  const [saved, setSaved] = useState(false)
  const [companyName, setCompanyName] = useState('MOBBIN PTE. LTD.')
  const [displayName, setDisplayName] = useState('Mobbin')
  const [supportEmail, setSupportEmail] = useState('support@mobbin.com')
  const [website, setWebsite] = useState('https://mobbin.com')

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="payments-content">
      <div className="wallet-content creating-conversion">
        <Link to="/flow/payments" className="wallet-back-link">← Back to Payments</Link>
        <h1 className="wallet-section-title">Updating a company profile</h1>
        <p className="creating-conversion-desc">Your company profile is shown to customers during checkout. Keep it up to date.</p>

        <div className="creating-conversion-form" style={{ marginTop: 24, maxWidth: 480 }}>
          <div className="scheduling-transfer-field">
            <label>Legal company name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g. Acme Pte Ltd"
            />
          </div>
          <div className="scheduling-transfer-field">
            <label>Display name</label>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Name shown to customers"
            />
          </div>
          <div className="scheduling-transfer-field">
            <label>Support email</label>
            <input
              type="email"
              value={supportEmail}
              onChange={(e) => setSupportEmail(e.target.value)}
              placeholder="support@company.com"
            />
          </div>
          <div className="scheduling-transfer-field">
            <label>Website</label>
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="https://"
            />
          </div>
        </div>

        <div className="scheduling-transfer-footer" style={{ marginTop: 24 }}>
          <Link to="/flow/payments" className="wallet-btn">Cancel</Link>
          <button type="button" className="wallet-btn wallet-btn-primary" onClick={handleSave}>
            Save changes
          </button>
        </div>

        {saved && (
          <div className="cards-toast-success" style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)' }}>
            ✔ Profile updated successfully
          </div>
        )}
      </div>
    </div>
  )
}
