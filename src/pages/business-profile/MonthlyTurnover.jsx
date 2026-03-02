import React from 'react'
import { useBusinessProfile } from '../../context/BusinessProfileContext'

const OPTIONS = [
  'Less than 50,000 SGD',
  '50,000 to 100,000 SGD',
  '100,000 to 250,000 SGD',
  '250,000 to 500,000 SGD',
  '500,000 to 1,000,000 SGD',
  '1,000,000 to 5,000,000 SGD',
  'Over 5,000,000 SGD',
]

export function MonthlyTurnover() {
  const { data, updateData, nextStep, prevStep } = useBusinessProfile()

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">Select your monthly revenue / turnover</h1>
      <div className="radio-options">
        {OPTIONS.map((opt) => (
          <label key={opt} className={`radio-option-card ${data.monthlyTurnover === opt ? 'selected' : ''}`}>
            <input
              type="radio"
              name="monthlyTurnover"
              value={opt}
              checked={data.monthlyTurnover === opt}
              onChange={() => updateData({ monthlyTurnover: opt })}
            />
            <span>{opt}</span>
          </label>
        ))}
      </div>
      <div className="form-actions">
        <button type="button" className="btn-back" onClick={prevStep}>Back</button>
        <button type="button" className="btn-save-next" onClick={nextStep}>Save & Next</button>
      </div>
    </div>
  )
}
