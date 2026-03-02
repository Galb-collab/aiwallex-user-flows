import React, { createContext, useContext, useState, useCallback } from 'react'

export const ADDING_FUNDS_STEPS = {
  SELECT_METHOD: 'select-method',
  ACCOUNT_DETAILS: 'account-details',
}

const AddingFundsContext = createContext(null)

export function AddingFundsProvider({ children }) {
  const [step, setStep] = useState(ADDING_FUNDS_STEPS.SELECT_METHOD)

  const goToSelectMethod = useCallback(() => setStep(ADDING_FUNDS_STEPS.SELECT_METHOD), [])
  const goToAccountDetails = useCallback(() => setStep(ADDING_FUNDS_STEPS.ACCOUNT_DETAILS), [])

  const value = {
    step,
    goToSelectMethod,
    goToAccountDetails,
  }

  return (
    <AddingFundsContext.Provider value={value}>
      {children}
    </AddingFundsContext.Provider>
  )
}

export function useAddingFunds() {
  const ctx = useContext(AddingFundsContext)
  if (!ctx) throw new Error('useAddingFunds must be used within AddingFundsProvider')
  return ctx
}
