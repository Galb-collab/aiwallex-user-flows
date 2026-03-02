import React from 'react'
import { Outlet } from 'react-router-dom'
import './RevolutFlow.css'

export function RevolutSignupFlow() {
  return (
    <div className="revolut-flow-layout">
      <Outlet />
    </div>
  )
}
