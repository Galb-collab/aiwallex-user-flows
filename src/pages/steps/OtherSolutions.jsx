import React from 'react'
import { useOnboarding } from '../../context/OnboardingContext'

const OPTIONS = [
  { id: 'bank_account', icon: '🏦', text: 'Open a local or international business bank account' },
  { id: 'payments', icon: '🔗', text: 'Process card payments and local payment methods from my customers' },
  { id: 'transfers', icon: '🔄', text: 'Convert funds and make international or domestic transfers' },
  { id: 'cards', icon: '💳', text: 'Create multi-currency corporate and employee cards' },
  { id: 'api', icon: '📚', text: "Use AIwallex's API solutions and embed financial products" },
]

const PRIMARY_LABELS = {
  bank_account: 'Open a local or international business bank account',
  payments: 'Process card payments and local payment methods from my customers',
  transfers: 'Convert funds and make international or domestic transfers',
  cards: 'Create multi-currency corporate and employee cards',
  expenses: 'Manage company card expenses, reimbursements and bills',
  api: "Use AIwallex's API solutions and embed financial products",
}

export function OtherSolutions() {
  const { data, updateData, nextStep } = useOnboarding()
  const primaryLabel = PRIMARY_LABELS[data.primaryInterest] || data.primaryInterest
  const otherIds = data.otherInterests || []

  const toggleOther = (id) => {
    const next = otherIds.includes(id) ? otherIds.filter((x) => x !== id) : [...otherIds, id]
    updateData({ otherInterests: next })
  }

  const filteredOptions = OPTIONS.filter((o) => o.id !== data.primaryInterest)

  return (
    <>
      <h1 className="step-title">Thanks for helping us understand your goals better!</h1>
      <div className="primary-interest-box">
        <span className="icon">📄</span>
        <span>{primaryLabel}</span>
        <span className="pill">Primary interest</span>
      </div>
      <h2 className="step-subtitle">Any other solutions that interest you? (Optional)</h2>
      {filteredOptions.map((opt) => (
        <button
          key={opt.id}
          type="button"
          className={`option-card option-card-checkbox ${otherIds.includes(opt.id) ? 'selected' : ''}`}
          onClick={() => toggleOther(opt.id)}
        >
          <span className="icon">{opt.icon}</span>
          <span className="option-text">{opt.text}</span>
          <span className="checkbox">{otherIds.includes(opt.id) ? '✓' : ''}</span>
        </button>
      ))}
      <button type="button" className="btn-continue" onClick={nextStep}>
        Continue
      </button>
    </>
  )
}
