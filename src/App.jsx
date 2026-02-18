import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { OnboardingProvider } from './context/OnboardingContext'
import { Landing } from './pages/Landing'
import { OnboardingFlow } from './pages/OnboardingFlow'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <OnboardingProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding/*" element={<OnboardingFlow />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </OnboardingProvider>
  )
}

export default App
