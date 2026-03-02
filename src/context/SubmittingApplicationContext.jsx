import React, { createContext, useContext, useState } from 'react'

export const SUBMITTING_STEPS = {
  REVIEW: 'review',
  SUBMIT: 'submit',
  THANK_YOU: 'thank-you',
}

const SubmittingApplicationContext = createContext(null)

export function SubmittingApplicationProvider({ children }) {
  const [step, setStep] = useState(SUBMITTING_STEPS.REVIEW)
  const [emailConfirmed, setEmailConfirmed] = useState(false)
  const [confirmAuthorised, setConfirmAuthorised] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [signatureDataUrl, setSignatureDataUrl] = useState('')
  const [extraFiles, setExtraFiles] = useState([])

  const goToReview = () => setStep(SUBMITTING_STEPS.REVIEW)
  const goToSubmit = () => setStep(SUBMITTING_STEPS.SUBMIT)
  const goToThankYou = () => setStep(SUBMITTING_STEPS.THANK_YOU)

  const canSubmit = confirmAuthorised && agreeTerms && !!signatureDataUrl

  const value = {
    step,
    emailConfirmed,
    setEmailConfirmed,
    confirmAuthorised,
    setConfirmAuthorised,
    agreeTerms,
    setAgreeTerms,
    signatureDataUrl,
    setSignatureDataUrl,
    extraFiles,
    setExtraFiles,
    goToReview,
    goToSubmit,
    goToThankYou,
    canSubmit,
  }

  return (
    <SubmittingApplicationContext.Provider value={value}>
      {children}
    </SubmittingApplicationContext.Provider>
  )
}

export function useSubmittingApplication() {
  const ctx = useContext(SubmittingApplicationContext)
  if (!ctx) throw new Error('useSubmittingApplication must be used within SubmittingApplicationProvider')
  return ctx
}
