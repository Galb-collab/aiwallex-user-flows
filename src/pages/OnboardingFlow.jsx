import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '../context/OnboardingContext'
import { Layout } from '../components/Layout'
import { CompanySize } from './steps/CompanySize'
import { Volume } from './steps/Volume'
import { PrimaryInterest } from './steps/PrimaryInterest'
import { OtherSolutions } from './steps/OtherSolutions'
import { CreateAccount1 } from './steps/CreateAccount1'
import { CreateAccount2 } from './steps/CreateAccount2'
import { VerifyPhone } from './steps/VerifyPhone'
import { AccountCreated } from './steps/AccountCreated'
import { VerifyBusiness } from './steps/VerifyBusiness'
import { LeaveModal } from '../components/LeaveModal'
import './OnboardingFlow.css'

const STEP_COMPONENTS = {
  company_size: CompanySize,
  volume: Volume,
  primary_interest: PrimaryInterest,
  other_solutions: OtherSolutions,
  create_account_1: CreateAccount1,
  create_account_2: CreateAccount2,
  verify_phone: VerifyPhone,
  account_created: AccountCreated,
  verify_business: VerifyBusiness,
}

export function OnboardingFlow() {
  const navigate = useNavigate()
  const { step, FLOW_STEPS, showLeaveModal } = useOnboarding()
  const StepComponent = STEP_COMPONENTS[step]

  if (step === FLOW_STEPS.DASHBOARD) {
    navigate('/dashboard', { replace: true })
    return null
  }

  if (!StepComponent) {
    navigate('/', { replace: true })
    return null
  }

  const showProgress = step !== FLOW_STEPS.ACCOUNT_CREATED && step !== FLOW_STEPS.VERIFY_BUSINESS
  const showBack = step !== FLOW_STEPS.COMPANY_SIZE

  return (
    <Layout showProgress={showProgress} showBack={showBack}>
      <StepComponent />
      {showLeaveModal && <LeaveModal />}
    </Layout>
  )
}
