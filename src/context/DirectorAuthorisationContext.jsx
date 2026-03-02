import React, { createContext, useContext, useState, useCallback } from 'react'

export const DIRECTOR_AUTH_STEPS = {
  METHOD: 'method',
  FORM: 'form',
  SENT: 'sent',
}

const DirectorAuthorisationContext = createContext(null)

const DEFAULT_DIRECTORS = [
  { id: 1, director: '', email: '' },
]

function nextId(rows) {
  return Math.max(0, ...rows.map((r) => r.id)) + 1
}

export function DirectorAuthorisationProvider({ children }) {
  const [step, setStep] = useState(DIRECTOR_AUTH_STEPS.METHOD)
  const [directors, setDirectors] = useState(DEFAULT_DIRECTORS)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [sentDate] = useState(() => {
    const d = new Date()
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  })

  const goToMethod = useCallback(() => setStep(DIRECTOR_AUTH_STEPS.METHOD), [])
  const goToForm = useCallback(() => setStep(DIRECTOR_AUTH_STEPS.FORM), [])
  const goToSent = useCallback(() => {
    setShowConfirmModal(false)
    setStep(DIRECTOR_AUTH_STEPS.SENT)
  }, [])

  const addDirector = useCallback(() => {
    setDirectors((prev) => [...prev, { id: nextId(prev), director: '', email: '' }])
  }, [])

  const updateDirector = useCallback((id, updates) => {
    setDirectors((prev) => prev.map((r) => (r.id === id ? { ...r, ...updates } : r)))
  }, [])

  const openConfirmModal = useCallback(() => setShowConfirmModal(true), [])
  const closeConfirmModal = useCallback(() => setShowConfirmModal(false), [])

  const directorsWithEmail = directors.filter((d) => d.email?.trim())

  const value = {
    step,
    directors,
    setDirectors,
    addDirector,
    updateDirector,
    showConfirmModal,
    openConfirmModal,
    closeConfirmModal,
    goToSent,
    goToMethod,
    goToForm,
    directorsWithEmail,
    sentDate,
  }

  return (
    <DirectorAuthorisationContext.Provider value={value}>
      {children}
    </DirectorAuthorisationContext.Provider>
  )
}

export function useDirectorAuthorisation() {
  const ctx = useContext(DirectorAuthorisationContext)
  if (!ctx) throw new Error('useDirectorAuthorisation must be used within DirectorAuthorisationProvider')
  return ctx
}
