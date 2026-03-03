import React from 'react'
import { useCompany } from '../../context/CompanyContext'

export function CardsTransactionsPage() {
  const { flowPath } = useCompany()
  return (
    <div className="cards-flow-content">
      <div className="wallet-content">
        <h1 className="wallet-section-title">Card transactions</h1>
        <p className="global-accounts-desc">View and filter card transaction history.</p>
      </div>
    </div>
  )
}
