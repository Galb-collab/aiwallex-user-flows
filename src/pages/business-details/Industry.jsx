import React from 'react'
import { useBusinessDetails } from '../../context/BusinessDetailsContext'

const INDUSTRY_OPTIONS = [
  'Technology / Software',
  'E-commerce / Retail',
  'Professional services',
  'Manufacturing',
  'Financial services',
  'Healthcare',
  'Education',
  'Other',
]

export function Industry() {
  const { data, updateData, nextStep, prevStep } = useBusinessDetails()

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
        <button type="button" className="btn-save-next" onClick={nextStep}>Save & Next</button>
      </div>
    </div>
  )
}
