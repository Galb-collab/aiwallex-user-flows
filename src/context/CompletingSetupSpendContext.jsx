import React, { createContext, useContext, useState, useCallback } from 'react'

const TOUR_STEPS = 6

const defaultToggles = {
  cardExpenses: true,
  reimbursements: true,
  bills: true,
  purchaseOrders: true,
  vendors: true,
  requests: true,
}

const CompletingSetupSpendContext = createContext(null)

export function CompletingSetupSpendProvider({ children }) {
  const [tourStep, setTourStep] = useState(1)
  const [showTour, setShowTour] = useState(true)
  const [showTurnOnModal, setShowTurnOnModal] = useState(false)
  const [toggles, setToggles] = useState(defaultToggles)
  const [completed, setCompleted] = useState(false)

  const nextTourStep = useCallback(() => {
    if (tourStep >= TOUR_STEPS) {
      setShowTour(false)
      setShowTurnOnModal(true)
    } else {
      setTourStep((s) => s + 1)
    }
  }, [tourStep])

  const prevTourStep = useCallback(() => {
    if (tourStep > 1) setTourStep((s) => s - 1)
  }, [tourStep])

  const skipTour = useCallback(() => {
    setShowTour(false)
    setShowTurnOnModal(true)
  }, [])

  const closeTurnOnModal = useCallback(() => setShowTurnOnModal(false), [])

  const enableSpend = useCallback(() => {
    setCompleted(true)
    setShowTurnOnModal(false)
  }, [])

  const setToggle = useCallback((key, value) => {
    setToggles((t) => ({ ...t, [key]: value }))
  }, [])

  const value = {
    tourStep,
    showTour,
    showTurnOnModal,
    toggles,
    setToggle,
    completed,
    nextTourStep,
    prevTourStep,
    skipTour,
    closeTurnOnModal,
    enableSpend,
  }

  return (
    <CompletingSetupSpendContext.Provider value={value}>
      {children}
    </CompletingSetupSpendContext.Provider>
  )
}

export function useCompletingSetupSpend() {
  const ctx = useContext(CompletingSetupSpendContext)
  if (!ctx) throw new Error('useCompletingSetupSpend must be used within CompletingSetupSpendProvider')
  return ctx
}
