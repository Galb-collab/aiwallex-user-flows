import React, { createContext, useContext, useState } from 'react'

export const VERIFYING_ID_STEPS = {
  PERSONAL_DETAILS: 'personal-details',
  GOVERNMENT_ID: 'government-id',
  SUBMITTED: 'submitted',
}

const VerifyingIDContext = createContext(null)

export function VerifyingIDProvider({ children }) {
  const [step, setStep] = useState(VERIFYING_ID_STEPS.PERSONAL_DETAILS)
  const [personal, setPersonal] = useState({
    legalLastName: '',
    jobTitle: 'CEO',
    aliasName: '',
    dateOfBirth: '',
    nationality: '',
    idIssuanceCountry: '',
  })
  const [governmentId, setGovernmentId] = useState({
    idType: '',
    surnameChinese: '',
    givenNameChinese: '',
    addressSameAsId: 'yes', // 'yes' | 'no'
  })
  const [idFrontFile, setIdFrontFile] = useState(null)
  const [idBackFile, setIdBackFile] = useState(null)

  const goToPersonalDetails = () => setStep(VERIFYING_ID_STEPS.PERSONAL_DETAILS)
  const goToGovernmentId = () => setStep(VERIFYING_ID_STEPS.GOVERNMENT_ID)
  const goToSubmitted = () => setStep(VERIFYING_ID_STEPS.SUBMITTED)

  const updatePersonal = (updates) => setPersonal((p) => ({ ...p, ...updates }))
  const updateGovernmentId = (updates) => setGovernmentId((g) => ({ ...g, ...updates }))

  const value = {
    step,
    personal,
    updatePersonal,
    governmentId,
    updateGovernmentId,
    idFrontFile,
    setIdFrontFile,
    idBackFile,
    setIdBackFile,
    goToPersonalDetails,
    goToGovernmentId,
    goToSubmitted,
  }

  return (
    <VerifyingIDContext.Provider value={value}>
      {children}
    </VerifyingIDContext.Provider>
  )
}

export function useVerifyingID() {
  const ctx = useContext(VerifyingIDContext)
  if (!ctx) throw new Error('useVerifyingID must be used within VerifyingIDProvider')
  return ctx
}
