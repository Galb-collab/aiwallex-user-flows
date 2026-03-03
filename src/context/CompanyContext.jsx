import React, { createContext, useContext } from 'react'
import { useParams } from 'react-router-dom'

const CompanyContext = createContext(null)

export const COMPANY = {
  AIRWALLEX: 'airwallex',
  REVOLUT: 'revolut',
  MERCURY: 'mercury',
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
  [COMPANY.MERCURY]: {
    name: 'Mercury',
    displayName: 'Mercury',
    logoLetter: 'M',
    primaryColor: '#1a2744',
    logoUrl: '/mercury-logo.png',
  },
}

export function CompanyProvider({ children }) {
  const { company } = useParams()
  const validCompany = [COMPANY.AIRWALLEX, COMPANY.REVOLUT, COMPANY.MERCURY].includes(company)
    ? company
    : COMPANY.AIRWALLEX

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
