import React from 'react'
import { useBusinessProfile } from '../../context/BusinessProfileContext'

const INDUSTRY_OPTIONS = [
  'Retail: Devices and electronics',
  'Retail: Household goods',
  'Digital and tech: Social media',
  'Professional services: Management consulting',
  'Manufacturing: Clothing and accessories',
  'Digital and tech: Software development',
  'E-commerce',
  'Financial services',
  'Other',
]

export function IndustryStep() {
  const { data, updateData, nextStep, prevStep } = useBusinessProfile()
  const [error, setError] = React.useState('')

  const handleSaveNext = (e) => {
    e.preventDefault()
    setError('')
    if (data.liveStreaming === null) {
      setError('Required')
      return
    }
    nextStep()
  }

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">What industry is your business in?</h1>
      <p className="business-details-step-desc">
        Select your business's main industry. To ensure smooth processing of your application, also include any additional industry that accounts for more than 40% of your total revenue.
      </p>
      <div className="form-group">
        <label>Main Industry</label>
        <select
          value={data.mainIndustry}
          onChange={(e) => updateData({ mainIndustry: e.target.value })}
        >
          <option value="">Select or type to search</option>
          {INDUSTRY_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Do you offer live streaming as a feature on your platform?</label>
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="liveStreaming"
              checked={data.liveStreaming === true}
              onChange={() => updateData({ liveStreaming: true })}
            />
            Yes
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="liveStreaming"
              checked={data.liveStreaming === false}
              onChange={() => updateData({ liveStreaming: false })}
            />
            No
          </label>
        </div>
        {error && <p className="form-error">Required</p>}
      </div>
      <div className="form-group">
        <label>Additional industry (if applicable)</label>
        <select
          value={data.additionalIndustry}
          onChange={(e) => updateData({ additionalIndustry: e.target.value })}
        >
          <option value="">Select or type to search</option>
          {INDUSTRY_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="form-actions">
        <button type="button" className="btn-back" onClick={prevStep}>Back</button>
        <button type="button" className="btn-save-next" onClick={handleSaveNext}>Save & Next</button>
      </div>
    </div>
  )
}
