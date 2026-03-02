import React, { createContext, useContext, useState, useCallback } from 'react'

const BusinessDetailsContext = createContext(null)

export const BUSINESS_DETAILS_STEPS = {
  VERIFY_ENTITY: 'verify_entity',
  PLAN_SELECTION: 'plan_selection',
  BUSINESS_DETAILS_UEN: 'business_details_uen',
  BUSINESS_DETAILS_FOUND: 'business_details_found',
  BUSINESS_PROFILE: 'business_profile',
  INDUSTRY: 'industry',
  DONE: 'done',
}

const STEP_ORDER = [
  BUSINESS_DETAILS_STEPS.VERIFY_ENTITY,
  BUSINESS_DETAILS_STEPS.PLAN_SELECTION,
  BUSINESS_DETAILS_STEPS.BUSINESS_DETAILS_UEN,
  BUSINESS_DETAILS_STEPS.BUSINESS_DETAILS_FOUND,
  BUSINESS_DETAILS_STEPS.BUSINESS_PROFILE,
  BUSINESS_DETAILS_STEPS.INDUSTRY,
  BUSINESS_DETAILS_STEPS.DONE,
]

export function BusinessDetailsProvider({ children }) {
  const [step, setStep] = useState(BUSINESS_DETAILS_STEPS.VERIFY_ENTITY)
  const [showConfirmEntities, setShowConfirmEntities] = useState(false)
  const [showConfirmEntityModal, setShowConfirmEntityModal] = useState(false)
  const [data, setData] = useState({
    registrationLocation: 'Singapore',
    legalEntityName: 'SLMobbin',
    entities: [{ location: 'Singapore', name: 'SLMobbin' }],
    selectedPlan: '',
    uen: '',
    uenError: '',
    businessFound: null,
    legalEntityForm: 'EXEMPT PRIVATE COMPANY LIMITED BY SHARES',
    country: 'Singapore',
    registeredAddress: '75 AYER RAJAH CRESCENT #02-02',
    postalCode: '139953',
    dateOfIncorporation: '',
    principalSameAsRegistered: true,
    tradingNames: [],
    mainIndustry: '',
    additionalIndustry: '',
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
    showConfirmEntities,
    setShowConfirmEntities,
    showConfirmEntityModal,
    setShowConfirmEntityModal,
    BUSINESS_DETAILS_STEPS,
    STEP_ORDER,
  }

  return (
    <BusinessDetailsContext.Provider value={value}>
      {children}
    </BusinessDetailsContext.Provider>
  )
}

export function useBusinessDetails() {
  const ctx = useContext(BusinessDetailsContext)
  if (!ctx) throw new Error('useBusinessDetails must be used within BusinessDetailsProvider')
  return ctx
}
