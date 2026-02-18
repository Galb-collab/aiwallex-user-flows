import React from 'react'
import { useOnboarding } from '../../context/OnboardingContext'

const OPTIONS = [
  '1-10 Employees',
  '11-50 Employees',
  '51-200 Employees',
  '201-500 Employees',
  '500+ Employees',
]

export function CompanySize() {
  const { data, updateData, nextStep } = useOnboarding()
  const selected = data.companySize

  return (
    <>
      <h1 className="step-title">How big is your company?</h1>
      {OPTIONS.map((opt) => (
        <button
          key={opt}
          type="button"
          className={`option-card ${selected === opt ? 'selected' : ''}`}
          onClick={() => {
            updateData({ companySize: opt })
            nextStep()
          }}
        >
          {opt}
        </button>
      ))}
    </>
  )
}
