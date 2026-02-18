import React, { createContext, useContext, useState, useCallback } from 'react'

const OnboardingContext = createContext(null)

const FLOW_STEPS = {
  LANDING: 'landing',
  COMPANY_SIZE: 'company_size',
  VOLUME: 'volume',
  PRIMARY_INTEREST: 'primary_interest',
  OTHER_SOLUTIONS: 'other_solutions',
  CREATE_ACCOUNT_1: 'create_account_1',
  CREATE_ACCOUNT_2: 'create_account_2',
  VERIFY_PHONE: 'verify_phone',
  ACCOUNT_CREATED: 'account_created',
  VERIFY_BUSINESS: 'verify_business',
  DASHBOARD: 'dashboard',
}

const STEP_ORDER = [
  FLOW_STEPS.LANDING,
  FLOW_STEPS.COMPANY_SIZE,
  FLOW_STEPS.VOLUME,
  FLOW_STEPS.PRIMARY_INTEREST,
  FLOW_STEPS.OTHER_SOLUTIONS,
  FLOW_STEPS.CREATE_ACCOUNT_1,
  FLOW_STEPS.CREATE_ACCOUNT_2,
  FLOW_STEPS.VERIFY_PHONE,
  FLOW_STEPS.ACCOUNT_CREATED,
  FLOW_STEPS.VERIFY_BUSINESS,
  FLOW_STEPS.DASHBOARD,
]

export function OnboardingProvider({ children }) {
  const [step, setStep] = useState(FLOW_STEPS.LANDING)
  const [data, setData] = useState({
    landingEmail: '',
    companySize: '',
    volume: '',
    primaryInterest: '',
    otherInterests: [],
    email: '',
    legalFirstName: '',
    legalLastName: '',
    password: '',
    businessName: '',
    headquarters: '',
    countryCode: '+1',
    mobile: '',
    agreedToTerms: false,
    verificationCode: '',
    mockSentCode: '123456',
    registrationLocation: 'Singapore',
    legalEntityName: '',
  })
  const [showLeaveModal, setShowLeaveModal] = useState(false)

  const updateData = useCallback((updates) => {
    setData((prev) => ({ ...prev, ...updates }))
  }, [])

  const goToStep = useCallback((targetStep) => {
    const idx = STEP_ORDER.indexOf(targetStep)
    if (idx !== -1) setStep(STEP_ORDER[idx])
  }, [])

  const nextStep = useCallback(() => {
    const idx = STEP_ORDER.indexOf(step)
    if (idx < STEP_ORDER.length - 1) setStep(STEP_ORDER[idx + 1])
  }, [step])

  const prevStep = useCallback(() => {
    const idx = STEP_ORDER.indexOf(step)
    if (idx > 0) setStep(STEP_ORDER[idx - 1])
  }, [step])

  const progress = STEP_ORDER.indexOf(step) / Math.max(1, STEP_ORDER.length - 1)

  const value = {
    step,
    data,
    updateData,
    nextStep,
    prevStep,
    goToStep,
    progress,
    showLeaveModal,
    setShowLeaveModal,
    FLOW_STEPS,
    STEP_ORDER,
  }

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  )
}

export function useOnboarding() {
  const ctx = useContext(OnboardingContext)
  if (!ctx) throw new Error('useOnboarding must be used within OnboardingProvider')
  return ctx
}
