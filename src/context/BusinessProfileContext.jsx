import React, { createContext, useContext, useState, useCallback } from 'react'

const BusinessProfileContext = createContext(null)

export const BUSINESS_PROFILE_STEPS = {
  INDUSTRY: 'industry',
  PRODUCTS_OR_SERVICES: 'products_or_services',
  WEBSITE: 'website',
  MONTHLY_TURNOVER: 'monthly_turnover',
  BUSINESS_LOCATION: 'business_location',
  LIST_OF_BUSINESS_OWNERS: 'list_of_business_owners',
  DONE: 'done',
}

const STEP_ORDER = [
  BUSINESS_PROFILE_STEPS.INDUSTRY,
  BUSINESS_PROFILE_STEPS.PRODUCTS_OR_SERVICES,
  BUSINESS_PROFILE_STEPS.WEBSITE,
  BUSINESS_PROFILE_STEPS.MONTHLY_TURNOVER,
  BUSINESS_PROFILE_STEPS.BUSINESS_LOCATION,
  BUSINESS_PROFILE_STEPS.LIST_OF_BUSINESS_OWNERS,
  BUSINESS_PROFILE_STEPS.DONE,
]

export function BusinessProfileProvider({ children }) {
  const [step, setStep] = useState(BUSINESS_PROFILE_STEPS.INDUSTRY)
  const [data, setData] = useState({
    mainIndustry: '',
    additionalIndustry: '',
    liveStreaming: null,
    productsDescription: '',
    websites: [''],
    monthlyTurnover: '',
    businessLocations: ['Singapore'],
    ownersActOnBehalf: 'no',
  })

  const updateData = useCallback((updates) => {
    setData((prev) => ({ ...prev, ...updates }))
  }, [])

  const nextStep = useCallback(() => {
    const idx = STEP_ORDER.indexOf(step)
    if (idx < STEP_ORDER.length - 1) setStep(STEP_ORDER[idx + 1])
  }, [step])

  const prevStep = useCallback(() => {
    const idx = STEP_ORDER.indexOf(step)
    if (idx > 0) setStep(STEP_ORDER[idx - 1])
  }, [step])

  const goToStep = useCallback((target) => {
    if (STEP_ORDER.includes(target)) setStep(target)
  }, [])

  const value = {
    step,
    data,
    updateData,
    nextStep,
    prevStep,
    goToStep,
    BUSINESS_PROFILE_STEPS: BUSINESS_PROFILE_STEPS,
    STEP_ORDER,
  }

  return (
    <BusinessProfileContext.Provider value={value}>
      {children}
    </BusinessProfileContext.Provider>
  )
}

export function useBusinessProfile() {
  const ctx = useContext(BusinessProfileContext)
  if (!ctx) throw new Error('useBusinessProfile must be used within BusinessProfileProvider')
  return ctx
}
