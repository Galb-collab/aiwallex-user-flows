import React from 'react'
import { Outlet } from 'react-router-dom'
import './RevolutFlow.css'

/**
 * Layout wrapper for Revolut flows - provides dark theme and consistent structure.
 * Revolut routes render inside this when company is Revolut.
 */
export function RevolutFlowLayout() {
  return (
    <div className="revolut-flow-layout">
      <Outlet />
    </div>
  )
}
