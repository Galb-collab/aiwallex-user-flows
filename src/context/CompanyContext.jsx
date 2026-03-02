import React, { createContext, useContext } from 'react'
import { useParams } from 'react-router-dom'

const CompanyContext = createContext(null)

export const COMPANY = {
  AIRWALLEX: 'airwallex',
  REVOLUT: 'revolut',
}

export const COMPANY_INFO = {
  [COMPANY.AIRWALLEX]: {
    name: 'AIwallex',
    displayName: 'Airwallex',
    logoLetter: 'A',
    primaryColor: '#6B4EFF',
  },
  [COMPANY.REVOLUT]: {
    name: 'Revolut',
    displayName: 'Revolut',
    logoLetter: 'R',
    primaryColor: '#0075EB',
  },
}

export function CompanyProvider({ children }) {
  const { company } = useParams()
  const validCompany = company === COMPANY.REVOLUT ? COMPANY.REVOLUT : COMPANY.AIRWALLEX

  const flowPath = (path) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    return `/${validCompany}${cleanPath}`
  }

  const value = {
    company: validCompany,
    flowPath,
    basePath: () => `/${validCompany}`,
    info: COMPANY_INFO[validCompany],
  }

  return (
    <CompanyContext.Provider value={value}>
      {children}
    </CompanyContext.Provider>
  )
}

export function useCompany() {
  const ctx = useContext(CompanyContext)
  return ctx
}
