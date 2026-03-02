import React, { createContext, useContext, useState, useCallback, useMemo } from 'react'

export const TWO_FA_STEPS = {
  INTRO: 'intro',
  CHOOSE_METHOD: 'choose-method',
  LINK_APP: 'link-app',
  ENTER_CODE: 'enter-code',
  RECOVERY_CODES: 'recovery-codes',
  SUCCESS: 'success',
}

const STEPS_ORDER = [
  TWO_FA_STEPS.INTRO,
  TWO_FA_STEPS.CHOOSE_METHOD,
  TWO_FA_STEPS.LINK_APP,
  TWO_FA_STEPS.ENTER_CODE,
  TWO_FA_STEPS.RECOVERY_CODES,
  TWO_FA_STEPS.SUCCESS,
]

function generateRecoveryCodes() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  const codes = []
  for (let i = 0; i < 8; i++) {
    let code = ''
    for (let j = 0; j < 8; j++) code += chars[Math.floor(Math.random() * chars.length)]
    codes.push(code)
  }
  return codes
}

const TwoFactorAuthContext = createContext(null)

export function TwoFactorAuthProvider({ children }) {
  const [step, setStep] = useState(TWO_FA_STEPS.INTRO)
  const [method, setMethod] = useState(null) // 'authenticator' | 'sms'
  const [code, setCode] = useState('')
  const [codeError, setCodeError] = useState('')
  const [recoveryCodes] = useState(() => generateRecoveryCodes())

  const stepIndex = STEPS_ORDER.indexOf(step)
  const progress = stepIndex >= 0 ? (stepIndex + 1) / STEPS_ORDER.length : 0

  const goToIntro = useCallback(() => setStep(TWO_FA_STEPS.INTRO), [])
  const goToChooseMethod = useCallback(() => setStep(TWO_FA_STEPS.CHOOSE_METHOD), [])
  const goToLinkApp = useCallback(() => {
    setMethod('authenticator')
    setStep(TWO_FA_STEPS.LINK_APP)
  }, [])
  const goToEnterCode = useCallback(() => setStep(TWO_FA_STEPS.ENTER_CODE), [])
  const goToRecoveryCodes = useCallback(() => setStep(TWO_FA_STEPS.RECOVERY_CODES), [])
  const goToSuccess = useCallback(() => setStep(TWO_FA_STEPS.SUCCESS), [])

  const selectSms = useCallback(() => {
    setMethod('sms')
    setStep(TWO_FA_STEPS.ENTER_CODE)
  }, [])

  const verifyCode = useCallback(() => {
    const trimmed = code.replace(/\s/g, '')
    if (trimmed.length !== 6 || !/^\d+$/.test(trimmed)) {
      setCodeError('Please enter the 6-digit code.')
      return false
    }
    setCodeError('')
    goToRecoveryCodes()
    return true
  }, [code, goToRecoveryCodes])

  const value = useMemo(
    () => ({
      step,
      method,
      code,
      setCode,
      codeError,
      setCodeError,
      recoveryCodes,
      progress,
      goToIntro,
      goToChooseMethod,
      goToLinkApp,
      goToEnterCode,
      goToRecoveryCodes,
      goToSuccess,
      selectSms,
      verifyCode,
    }),
    [
      step,
      method,
      code,
      codeError,
      recoveryCodes,
      progress,
      goToIntro,
      goToChooseMethod,
      goToLinkApp,
      goToEnterCode,
      goToRecoveryCodes,
      goToSuccess,
      selectSms,
      verifyCode,
    ]
  )

  return (
    <TwoFactorAuthContext.Provider value={value}>
      {children}
    </TwoFactorAuthContext.Provider>
  )
}

export function useTwoFactorAuth() {
  const ctx = useContext(TwoFactorAuthContext)
  if (!ctx) throw new Error('useTwoFactorAuth must be used within TwoFactorAuthProvider')
  return ctx
}
