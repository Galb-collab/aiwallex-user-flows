import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCompany } from '../context/CompanyContext'
import { useBusinessDetails, BUSINESS_DETAILS_STEPS } from '../context/BusinessDetailsContext'
import { VerifyEntity } from './business-details/VerifyEntity'
import { PlanSelection } from './business-details/PlanSelection'
import { BusinessDetailsUEN } from './business-details/BusinessDetailsUEN'
import { BusinessDetailsFound } from './business-details/BusinessDetailsFound'
import { BusinessProfile } from './business-details/BusinessProfile'
import { Industry } from './business-details/Industry'
import { ConfirmEntitiesModal } from './business-details/ConfirmEntitiesModal'
import { ConfirmEntityModal } from './business-details/ConfirmEntityModal'
import { BusinessDetailsLayout } from '../components/BusinessDetailsLayout'
import './CompletingBusinessDetailsFlow.css'

const STEP_COMPONENTS = {
  [BUSINESS_DETAILS_STEPS.VERIFY_ENTITY]: VerifyEntity,
  [BUSINESS_DETAILS_STEPS.PLAN_SELECTION]: PlanSelection,
  [BUSINESS_DETAILS_STEPS.BUSINESS_DETAILS_UEN]: BusinessDetailsUEN,
  [BUSINESS_DETAILS_STEPS.BUSINESS_DETAILS_FOUND]: BusinessDetailsFound,
  [BUSINESS_DETAILS_STEPS.BUSINESS_PROFILE]: BusinessProfile,
  [BUSINESS_DETAILS_STEPS.INDUSTRY]: Industry,
}

export function CompletingBusinessDetailsFlow() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const { step, showConfirmEntities, showConfirmEntityModal, BUSINESS_DETAILS_STEPS: STEPS } = useBusinessDetails()
  const StepComponent = STEP_COMPONENTS[step]

  if (step === STEPS.DONE) {
    navigate(flowPath('/flow/completing-business-details/completing-business-profile'), { replace: true })
    return null
  }

  if (!StepComponent) {
    navigate(flowPath('/flow/completing-business-details'), { replace: true })
    return null
  }

  const useVerificationLayout = [
    STEPS.BUSINESS_DETAILS_UEN,
    STEPS.BUSINESS_DETAILS_FOUND,
    STEPS.BUSINESS_PROFILE,
    STEPS.INDUSTRY,
  ].includes(step)

  return (
    <>
      {useVerificationLayout ? (
        <BusinessDetailsLayout>
          <StepComponent />
        </BusinessDetailsLayout>
      ) : (
        <StepComponent />
      )}
      {showConfirmEntities && <ConfirmEntitiesModal />}
      {showConfirmEntityModal && <ConfirmEntityModal />}
    </>
  )
}
