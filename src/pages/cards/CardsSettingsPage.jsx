import React from 'react'
import { useCompany } from '../../context/CompanyContext'

export function CardsSettingsPage() {
  const { flowPath } = useCompany()
  return (
    <div className="cards-flow-content">
      <div className="wallet-content">
        <h1 className="wallet-section-title">Card settings</h1>
        <p className="global-accounts-desc">Configure card preferences and limits.</p>
      </div>
    </div>
  )
}
