import React from 'react'
import { Outlet } from 'react-router-dom'
import './MercuryFlow.css'

export function MercuryApplicationFlow() {
  return (
    <div className="mercury-flow-layout">
      <Outlet />
    </div>
  )
}
