import React from 'react'
import { Navigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'

export function MercurySettingsIndex() {
  const { flowPath } = useCompany()
  return <Navigate to={flowPath('/flow/mercury-categories')} replace />
}
