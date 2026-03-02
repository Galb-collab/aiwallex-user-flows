import React, { createContext, useContext, useState, useCallback, useEffect } from 'react'

export const VERIFYING_EMAIL_STEPS = {
  REVIEW: 'review',
  VERIFIED: 'verified',
}

const RESEND_COOLDOWN_SEC = 60

const VerifyingEmailContext = createContext(null)

export function VerifyingEmailProvider({ children }) {
  const [step, setStep] = useState(VERIFYING_EMAIL_STEPS.REVIEW)
  const [emailSent, setEmailSent] = useState(false)
  const [resendCooldown, setResendCooldown] = useState(0)
  const [email] = useState('samlee@content-mobbin.com')

  const resendEmail = useCallback(() => {
    if (resendCooldown > 0) return
    setEmailSent(true)
    setResendCooldown(RESEND_COOLDOWN_SEC)
  }, [resendCooldown])

  useEffect(() => {
    if (resendCooldown <= 0) return
    const t = setInterval(() => {
      setResendCooldown((c) => (c <= 1 ? 0 : c - 1))
    }, 1000)
    return () => clearInterval(t)
  }, [resendCooldown])

  const goToVerified = useCallback(() => setStep(VERIFYING_EMAIL_STEPS.VERIFIED), [])

  const value = {
    step,
    emailSent,
    resendCooldown,
    resendEmail,
    goToVerified,
    email,
  }

  return (
    <VerifyingEmailContext.Provider value={value}>
      {children}
    </VerifyingEmailContext.Provider>
  )
}

export function useVerifyingEmail() {
  const ctx = useContext(VerifyingEmailContext)
  if (!ctx) throw new Error('useVerifyingEmail must be used within VerifyingEmailProvider')
  return ctx
}
