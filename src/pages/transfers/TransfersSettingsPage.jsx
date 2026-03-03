import React from 'react'
import { useCompany } from '../../context/CompanyContext'

export function TransfersSettingsPage() {
  const { flowPath } = useCompany()
  return (
    <div className="transfers-content">
      <div className="wallet-content">
        <div className="global-accounts-header">
          <div>
            <h1 className="wallet-section-title" style={{ margin: 0 }}>Transfer settings</h1>
            <p className="global-accounts-desc">Configure transfer preferences and defaults.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
