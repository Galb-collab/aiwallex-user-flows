import React from 'react'
import { useOnboarding } from '../../context/OnboardingContext'

const OPTIONS = [
  'Less than 10,000 SGD',
  '10,000 to 50,000 SGD',
  '50,000 to 200,000 SGD',
  '200,000 to 1,000,000 SGD',
  'Over 1,000,000 SGD',
]

export function Volume() {
  const { data, updateData, nextStep } = useOnboarding()

  return (
    <>
      <h1 className="step-title">
        How much transaction volume do you expect to receive and send through AIwallex every month?
      </h1>
      {OPTIONS.map((opt) => (
        <button
          key={opt}
          type="button"
          className={`option-card ${data.volume === opt ? 'selected' : ''}`}
          onClick={() => updateData({ volume: opt })}
        >
          {opt}
        </button>
      ))}
      <button
        type="button"
        className="btn-continue"
        disabled={!data.volume}
        onClick={nextStep}
      >
        Continue
      </button>
    </>
  )
}
