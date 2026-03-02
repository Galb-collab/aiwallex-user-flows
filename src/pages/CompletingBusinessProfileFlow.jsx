import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useBusinessProfile, BUSINESS_PROFILE_STEPS } from '../context/BusinessProfileContext'
import { BusinessProfileLayout } from '../components/BusinessProfileLayout'
import { IndustryStep } from './business-profile/IndustryStep'
import { ProductsOrServices } from './business-profile/ProductsOrServices'
import { WebsiteStep } from './business-profile/WebsiteStep'
import { MonthlyTurnover } from './business-profile/MonthlyTurnover'
import { BusinessLocationStep } from './business-profile/BusinessLocationStep'
import { ListOfBusinessOwners } from './business-profile/ListOfBusinessOwners'
import './CompletingBusinessDetailsFlow.css'

const STEP_COMPONENTS = {
  [BUSINESS_PROFILE_STEPS.INDUSTRY]: IndustryStep,
  [BUSINESS_PROFILE_STEPS.PRODUCTS_OR_SERVICES]: ProductsOrServices,
  [BUSINESS_PROFILE_STEPS.WEBSITE]: WebsiteStep,
  [BUSINESS_PROFILE_STEPS.MONTHLY_TURNOVER]: MonthlyTurnover,
  [BUSINESS_PROFILE_STEPS.BUSINESS_LOCATION]: BusinessLocationStep,
  [BUSINESS_PROFILE_STEPS.LIST_OF_BUSINESS_OWNERS]: ListOfBusinessOwners,
}

export function CompletingBusinessProfileFlow() {
  const navigate = useNavigate()
  const { step, BUSINESS_PROFILE_STEPS: STEPS } = useBusinessProfile()
  const StepComponent = STEP_COMPONENTS[step]

  if (step === STEPS.DONE) {
    navigate('/flow/completing-business-details/completing-business-owner', { replace: true })
    return null
  }

  if (!StepComponent) {
    navigate('/flow/completing-business-details', { replace: true })
    return null
  }

  return (
    <BusinessProfileLayout>
      <StepComponent />
    </BusinessProfileLayout>
  )
}
