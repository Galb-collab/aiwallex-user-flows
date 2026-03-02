import React, { createContext, useContext, useState, useCallback } from 'react'

const BusinessOwnerContext = createContext(null)

export const BUSINESS_OWNER_STEPS = {
  LIST_OF_BUSINESS_OWNERS: 'list_of_business_owners',
  APPLICANTS_IDENTITY: 'applicants_identity',
  ID_VERIFICATION_INTRO: 'id_verification_intro',
  ID_VERIFICATION_METHOD: 'id_verification_method',
  ID_VERIFICATION_DETAILS: 'id_verification_details',
  ID_VERIFICATION_ADDRESS: 'id_verification_address',
  DONE: 'done',
}

const STEP_ORDER = [
  BUSINESS_OWNER_STEPS.LIST_OF_BUSINESS_OWNERS,
  BUSINESS_OWNER_STEPS.APPLICANTS_IDENTITY,
  BUSINESS_OWNER_STEPS.ID_VERIFICATION_INTRO,
  BUSINESS_OWNER_STEPS.ID_VERIFICATION_METHOD,
  BUSINESS_OWNER_STEPS.ID_VERIFICATION_DETAILS,
  BUSINESS_OWNER_STEPS.ID_VERIFICATION_ADDRESS,
  BUSINESS_OWNER_STEPS.DONE,
]

export function BusinessOwnerProvider({ children }) {
  const [step, setStep] = useState(BUSINESS_OWNER_STEPS.LIST_OF_BUSINESS_OWNERS)
  const [data, setData] = useState({
    ownersActOnBehalf: 'no',
    selectedApplicant: '',
    declarationAccepted: false,
    verificationMethod: '',
    legalFirstName: '',
    legalMiddleName: '',
    legalLastName: '',
    jobTitle: '',
    aliasName: '',
    dateOfBirth: '',
    nationality: '',
    idIssuanceCountry: '',
    idType: '',
    addressCountry: 'Singapore',
    addressLine1: '',
    addressLine2: '',
    postalCode: '',
    proofOfAddressFile: null,
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
    BUSINESS_OWNER_STEPS: BUSINESS_OWNER_STEPS,
    STEP_ORDER,
  }

  return (
    <BusinessOwnerContext.Provider value={value}>
      {children}
    </BusinessOwnerContext.Provider>
  )
}

export function useBusinessOwner() {
  const ctx = useContext(BusinessOwnerContext)
  if (!ctx) throw new Error('useBusinessOwner must be used within BusinessOwnerProvider')
  return ctx
}
