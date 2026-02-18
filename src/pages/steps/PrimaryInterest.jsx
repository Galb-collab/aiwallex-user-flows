import React from 'react'
import { useOnboarding } from '../../context/OnboardingContext'

const OPTIONS = [
  { id: 'bank_account', icon: '🏦', text: 'Open a local or international business bank account' },
  { id: 'payments', icon: '🔗', text: 'Process card payments and local payment methods from my customers' },
  { id: 'transfers', icon: '🔄', text: 'Convert funds and make international or domestic transfers' },
  { id: 'cards', icon: '💳', text: 'Create multi-currency corporate and employee cards' },
  { id: 'expenses', icon: '📄', text: 'Manage company card expenses, reimbursements and bills' },
  { id: 'api', icon: '📚', text: "Use Airwallex's API solutions and embed financial products" },
]

export function PrimaryInterest() {
  const { data, updateData, nextStep } = useOnboarding()

  return (
    <>
      <h1 className="step-title">What is your primary area of interest in AIwallex?</h1>
      <p className="form-note" style={{ marginBottom: 24 }}>This will help us serve you better.</p>
      {OPTIONS.map((opt) => (
        <button
          key={opt.id}
          type="button"
          className={`option-card ${data.primaryInterest === opt.id ? 'selected' : ''}`}
          onClick={() => updateData({ primaryInterest: opt.id })}
        >
          <span className="icon">{opt.icon}</span>
          {opt.text}
        </button>
      ))}
      <button
        type="button"
        className="btn-continue"
        disabled={!data.primaryInterest}
        onClick={nextStep}
      >
        Continue
      </button>
    </>
  )
}
