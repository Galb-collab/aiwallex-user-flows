import React from 'react'
import { useBusinessProfile } from '../../context/BusinessProfileContext'

export function WebsiteStep() {
  const { data, updateData, nextStep, prevStep } = useBusinessProfile()
  const websites = data.websites && data.websites.length ? data.websites : ['']

  const setWebsite = (index, value) => {
    const next = [...websites]
    next[index] = value
    updateData({ websites: next })
  }

  const addWebsite = () => {
    updateData({ websites: [...websites, ''] })
  }

  const removeWebsite = (index) => {
    if (websites.length <= 1) return
    const next = websites.filter((_, i) => i !== index)
    updateData({ websites: next })
  }

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">Add your websites.</h1>
      <p className="business-details-step-desc">
        You can provide your company websites, online stores on eCommerce marketplace platforms, app store download links, and social media profiles. Add as many websites as possible to help us understand your business and process your application faster.
      </p>
      <div className="platform-icons">Amazon · eBay · Shopify · Apple · Facebook · Instagram · LinkedIn</div>
      <a href="#help" className="link-purple">Don't have a website or online store?</a>
      {websites.map((url, i) => (
        <div key={i} className="website-row">
          <input
            type="url"
            value={url}
            onChange={(e) => setWebsite(i, e.target.value)}
            placeholder="https://www.example.com"
            className="form-group-input"
          />
          <button type="button" className="website-remove" onClick={() => removeWebsite(i)} aria-label="Remove">🗑</button>
        </div>
      ))}
      <button type="button" className="add-website-btn" onClick={addWebsite}>+ Add website</button>
      <div className="form-actions">
        <button type="button" className="btn-back" onClick={prevStep}>Back</button>
        <button type="button" className="btn-save-next" onClick={nextStep}>Save & Next</button>
      </div>
    </div>
  )
}
