import React from 'react'
import { Outlet } from 'react-router-dom'
import './RevolutFlow.css'

export function RevolutOnboardingFlow() {
  return (
    <div className="revolut-flow-layout">
      <Outlet />
    </div>
  )
}
