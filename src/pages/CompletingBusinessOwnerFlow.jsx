import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { useBusinessOwner, BUSINESS_OWNER_STEPS } from '../context/BusinessOwnerContext'
import { BusinessOwnerLayout } from '../components/BusinessOwnerLayout'
import { ListOfBusinessOwnersStep } from './business-owner/ListOfBusinessOwnersStep'
import { ApplicantsIdentityStep } from './business-owner/ApplicantsIdentityStep'
import { IdVerificationIntroStep } from './business-owner/IdVerificationIntroStep'
import { IdVerificationMethodStep } from './business-owner/IdVerificationMethodStep'
import { IdVerificationDetailsStep } from './business-owner/IdVerificationDetailsStep'
import { IdVerificationAddressStep } from './business-owner/IdVerificationAddressStep'
import './CompletingBusinessDetailsFlow.css'

const STEP_COMPONENTS = {
  [BUSINESS_OWNER_STEPS.LIST_OF_BUSINESS_OWNERS]: ListOfBusinessOwnersStep,
  [BUSINESS_OWNER_STEPS.APPLICANTS_IDENTITY]: ApplicantsIdentityStep,
  [BUSINESS_OWNER_STEPS.ID_VERIFICATION_INTRO]: IdVerificationIntroStep,
  [BUSINESS_OWNER_STEPS.ID_VERIFICATION_METHOD]: IdVerificationMethodStep,
  [BUSINESS_OWNER_STEPS.ID_VERIFICATION_DETAILS]: IdVerificationDetailsStep,
  [BUSINESS_OWNER_STEPS.ID_VERIFICATION_ADDRESS]: IdVerificationAddressStep,
}

export function CompletingBusinessOwnerFlow() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const { step, BUSINESS_OWNER_STEPS: STEPS } = useBusinessOwner()
  const StepComponent = STEP_COMPONENTS[step]

  if (step === STEPS.DONE) {
    navigate(flowPath('/flow/completing-business-details/submitting-application'), { replace: true })
    return null
  }

  if (!StepComponent) {
    navigate(flowPath('/flow/completing-business-details'), { replace: true })
    return null
  }

  return (
    <BusinessOwnerLayout>
      <StepComponent />
    </BusinessOwnerLayout>
  )
}
