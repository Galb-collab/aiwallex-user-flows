import React from 'react'
import { Routes, Route, Navigate, Outlet, useParams, useLocation } from 'react-router-dom'
import { CompanyProvider, useCompany, COMPANY } from './context/CompanyContext'
import { OnboardingProvider } from './context/OnboardingContext'
import { BusinessDetailsProvider } from './context/BusinessDetailsContext'
import { FlowSelector } from './pages/FlowSelector'
import { LoggingInFlow } from './pages/logging-in/LoggingInFlow'
import { LoginPage } from './pages/logging-in/LoginPage'
import { ForgotPasswordPage } from './pages/logging-in/ForgotPasswordPage'
import { ResetPasswordPage } from './pages/logging-in/ResetPasswordPage'
import { Verify2FAPage } from './pages/logging-in/Verify2FAPage'
import { Landing } from './pages/Landing'
import { OnboardingFlow } from './pages/OnboardingFlow'
import { CompletingBusinessDetailsFlow } from './pages/CompletingBusinessDetailsFlow'
import { BusinessProfileProvider } from './context/BusinessProfileContext'
import { CompletingBusinessProfileFlow } from './pages/CompletingBusinessProfileFlow'
import { BusinessOwnerProvider } from './context/BusinessOwnerContext'
import { CompletingBusinessOwnerFlow } from './pages/CompletingBusinessOwnerFlow'
import { RemoveUploadedFileFlow } from './pages/RemoveUploadedFileFlow'
import { SubmittingApplicationProvider } from './context/SubmittingApplicationContext'
import { SubmittingApplicationFlow } from './pages/SubmittingApplicationFlow'
import { VerifyingIDProvider } from './context/VerifyingIDContext'
import { VerifyingIDFlow } from './pages/VerifyingIDFlow'
import { VerifyingEmailProvider } from './context/VerifyingEmailContext'
import { VerifyingEmailFlow } from './pages/VerifyingEmailFlow'
import { DirectorAuthorisationProvider } from './context/DirectorAuthorisationContext'
import { DirectorAuthorisationFlow } from './pages/DirectorAuthorisationFlow'
import { TwoFactorAuthProvider } from './context/TwoFactorAuthContext'
import { TwoFactorFlow } from './pages/TwoFactorFlow'
import { AddingFundsProvider } from './context/AddingFundsContext'
import { AddingFundsFlow } from './pages/AddingFundsFlow'
import { SpendGeneralFlow } from './pages/SpendGeneralFlow'
import { CompletingSetupSpendProvider } from './context/CompletingSetupSpendContext'
import { CompletingSetupSpendFlow } from './pages/CompletingSetupSpendFlow'
import { ExpensesFlow } from './pages/ExpensesFlow'
import { AcceptingPaymentFlow } from './pages/AcceptingPaymentFlow'
import { AddingItemsFlow } from './pages/AddingItemsFlow'
import { ApprovingReimbursementFlow } from './pages/ApprovingReimbursementFlow'
import { FilteringReimbursementFlow } from './pages/FilteringReimbursementFlow'
import { UploadingReceiptFlow } from './pages/UploadingReceiptFlow'
import { PurchaseOrdersFlow } from './pages/PurchaseOrdersFlow'
import { BillsFlow } from './pages/bills/BillsFlow'
import { BillsIndex } from './pages/bills/BillsIndex'
import { ApprovingBill } from './pages/bills/ApprovingBill'
import { BillDetails } from './pages/bills/BillDetails'
import { DeletingBill } from './pages/bills/DeletingBill'
import { AddingBill } from './pages/bills/AddingBill'
import { VendorsFlow } from './pages/vendors/VendorsFlow'
import { VendorsIndex } from './pages/vendors/VendorsIndex'
import { AddingVendor } from './pages/vendors/AddingVendor'
import { VendorDetails } from './pages/vendors/VendorDetails'
import { UploadingAFile } from './pages/vendors/UploadingAFile'
import { AddingBankAccountDetails } from './pages/vendors/AddingBankAccountDetails'
import { RequestsFlow } from './pages/requests/RequestsFlow'
import { RequestsIndex } from './pages/requests/RequestsIndex'
import { CreatingRequests } from './pages/requests/CreatingRequests'
import { RequestingASubmission } from './pages/requests/RequestingASubmission'
import { ApprovingARequest } from './pages/requests/ApprovingARequest'
import { CardsFlow } from './pages/cards/CardsFlow'
import { CardsIndex } from './pages/cards/CardsIndex'
import { CardDetailsPage } from './pages/cards/CardDetailsPage'
import { CardsTransactionsPage } from './pages/cards/CardsTransactionsPage'
import { CardsSettingsPage } from './pages/cards/CardsSettingsPage'
import { CreatingACardCompany } from './pages/cards/CreatingACardCompany'
import { CreatingACard } from './pages/cards/CreatingACard'
import { BillingFlow } from './pages/BillingFlow'
import { BillingIndex } from './pages/billing/BillingIndex'
import { CreatingACustomer } from './pages/billing/CreatingACustomer'
import { BillingCustomers } from './pages/billing/BillingCustomers'
import { CustomerDetails } from './pages/billing/CustomerDetails'
import { CreatingAnInvoice } from './pages/billing/CreatingAnInvoice'
import { BillingProducts } from './pages/billing/BillingProducts'
import { CreatingAProduct } from './pages/billing/CreatingAProduct'
import { CreatingAPrice } from './pages/billing/CreatingAPrice'
import { BillingInvoices } from './pages/billing/BillingInvoices'
import { BillingSubscriptions } from './pages/billing/BillingSubscriptions'
import { BillingSettings } from './pages/billing/BillingSettings'
import { Dashboard } from './pages/Dashboard'
import { PaymentOverviewFlow } from './pages/PaymentOverviewFlow'
import { PaymentActivityPage } from './pages/payments-overview/PaymentActivityPage'
import { DisputesPage } from './pages/payments-overview/DisputesPage'
import { WalletFlow } from './pages/WalletFlow'
import { WalletBalancesPage } from './pages/wallet/WalletBalancesPage'
import { CashBalanceDetailsPage } from './pages/wallet/CashBalanceDetailsPage'
import { EditingCurrencyDisplayPage } from './pages/wallet/EditingCurrencyDisplayPage'
import { SchedulingTransferPage } from './pages/wallet/SchedulingTransferPage'
import { CreatingConversionPage } from './pages/wallet/CreatingConversionPage'
import { GlobalAccountsPage } from './pages/wallet/GlobalAccountsPage'
import { CreatingGlobalAccountPage } from './pages/wallet/CreatingGlobalAccountPage'
import { ConversionsPage } from './pages/wallet/ConversionsPage'
import { CreatingLimitOrderPage } from './pages/wallet/CreatingLimitOrderPage'
import { CreatingRateAlertPage } from './pages/wallet/CreatingRateAlertPage'
import { WalletTransactionsPage } from './pages/wallet/WalletTransactionsPage'
import { WalletLinkedAccountsPage } from './pages/wallet/WalletLinkedAccountsPage'
import { WalletSettingsPage } from './pages/wallet/WalletSettingsPage'
import { TransfersFlow } from './pages/transfers/TransfersFlow'
import { TransfersIndex } from './pages/transfers/TransfersIndex'
import { CreateBatchTransferFilePage } from './pages/transfers/CreateBatchTransferFilePage'
import { SettingUpTransferApprovalWorkflowPage } from './pages/transfers/SettingUpTransferApprovalWorkflowPage'
import { DeactivatingWorkflowPage } from './pages/transfers/DeactivatingWorkflowPage'
import { TransfersSettingsPage } from './pages/transfers/TransfersSettingsPage'
import { TransferDetailsPage } from './pages/transfers/TransferDetailsPage'
import { PaymentsFlow } from './pages/payments/PaymentsFlow'
import { PaymentsIndex } from './pages/payments/PaymentsIndex'
import { ActivatingPaymentMethodsPage } from './pages/payments/ActivatingPaymentMethodsPage'
import { PaymentLinksPage } from './pages/payments/PaymentLinksPage'
import { UpdatingCompanyProfilePage } from './pages/payments/UpdatingCompanyProfilePage'
import { UpdatingEmailNotificationPage } from './pages/payments/UpdatingEmailNotificationPage'
import { RewardsFlow } from './pages/rewards/RewardsFlow'
import { RewardsIndex } from './pages/rewards/RewardsIndex'
import { SecurityPage } from './pages/rewards/SecurityPage'
import { DisablingTwoFactorAuthenticationPage } from './pages/rewards/DisablingTwoFactorAuthenticationPage'
import { RedeemRewardsPage } from './pages/rewards/RedeemRewardsPage'
import { RewardsActivityPage } from './pages/rewards/RewardsActivityPage'
import { ProfileFlow } from './pages/profile/ProfileFlow'
import { ProfilePage } from './pages/profile/ProfilePage'
import { ProfileSecurityPage } from './pages/profile/ProfileSecurityPage'
import { AddingAssistantPage } from './pages/profile/AddingAssistantPage'
import { UpdatingNotificationsPage } from './pages/profile/UpdatingNotificationsPage'
import { SettingsFlow } from './pages/settings/SettingsFlow'
import { SettingsIndex } from './pages/settings/SettingsIndex'
import { ConnectionsPage } from './pages/settings/ConnectionsPage'
import { CreatingAUserPage } from './pages/settings/CreatingAUserPage'
import { AddingACustomRolePage } from './pages/settings/AddingACustomRolePage'
import { CancellingAnInvitationPage } from './pages/settings/CancellingAnInvitationPage'
import { CreatingADepartmentPage } from './pages/settings/CreatingADepartmentPage'
import { CreatingALocationPage } from './pages/settings/CreatingALocationPage'
import { RemovingEmploymentTypePage } from './pages/settings/RemovingEmploymentTypePage'
import { RoleDetailsPage } from './pages/settings/RoleDetailsPage'
import { DeveloperPage } from './pages/settings/DeveloperPage'
import { CreatingAnApiKeyPage } from './pages/settings/CreatingAnApiKeyPage'
import { PlanAndBillingPage } from './pages/settings/PlanAndBillingPage'
import { UpdatingCardExpensesApprovalsPage } from './pages/settings/UpdatingCardExpensesApprovalsPage'
import { ReportsLayout, ReportsIndex } from './pages/ReportsFlow'
import { GeneratingBalanceActivityFlow } from './pages/GeneratingBalanceActivityFlow'
import { EmployeeFlow } from './pages/employee/EmployeeFlow'
import { EmployeeOnboardingPage } from './pages/employee/EmployeeOnboardingPage'
import { EmployeeVerifyPhonePage } from './pages/employee/EmployeeVerifyPhonePage'
import { EmployeeExpensesPage } from './pages/employee/EmployeeExpensesPage'
import { EmployeeAddBankDetailsPage } from './pages/employee/EmployeeAddBankDetailsPage'
import { EmployeeBillsPage } from './pages/employee/EmployeeBillsPage'
import { EmployeeRequestsPage } from './pages/employee/EmployeeRequestsPage'
import { EmployeeCreateRequestPage } from './pages/employee/EmployeeCreateRequestPage'
import { EmployeeProfilePage } from './pages/employee/EmployeeProfilePage'
import { EmployeeSecurityPage } from './pages/employee/EmployeeSecurityPage'
import { EmployeeChangePasswordPage } from './pages/employee/EmployeeChangePasswordPage'
import { EmployeeProfilePlaceholder } from './pages/employee/EmployeeProfilePlaceholder'
import { CompanySelector } from './pages/CompanySelector'
import { RevolutLanding } from './pages/revolut/RevolutLanding'
import { RevolutLogin } from './pages/revolut/RevolutLogin'
import { RevolutSignupFlow } from './pages/revolut/RevolutSignupFlow'
import { RevolutSignupCountry } from './pages/revolut/RevolutSignupCountry'
import { RevolutSignupEmail } from './pages/revolut/RevolutSignupEmail'
import { RevolutSignupVerifyEmail } from './pages/revolut/RevolutSignupVerifyEmail'
import { RevolutSignupPhone } from './pages/revolut/RevolutSignupPhone'
import { RevolutSignupVerifyPhone } from './pages/revolut/RevolutSignupVerifyPhone'
import { RevolutSignupPasscode } from './pages/revolut/RevolutSignupPasscode'
import { RevolutSignupConfirmPasscode } from './pages/revolut/RevolutSignupConfirmPasscode'
import { RevolutSignupBusinessType } from './pages/revolut/RevolutSignupBusinessType'
import { RevolutOnboardingFlow } from './pages/revolut/RevolutOnboardingFlow'
import { RevolutOnboardingName } from './pages/revolut/RevolutOnboardingName'
import { RevolutOnboardingCitizenship } from './pages/revolut/RevolutOnboardingCitizenship'
import { RevolutOnboardingMonthlyVolume } from './pages/revolut/RevolutOnboardingMonthlyVolume'
import { RevolutOnboardingWebsite } from './pages/revolut/RevolutOnboardingWebsite'
import { RevolutOnboardingTaxResidency } from './pages/revolut/RevolutOnboardingTaxResidency'
import { RevolutOnboardingCorporatePersonnel } from './pages/revolut/RevolutOnboardingCorporatePersonnel'
import { RevolutVerifyDetails } from './pages/revolut/RevolutVerifyDetails'
import { RevolutResidencePermit } from './pages/revolut/RevolutResidencePermit'
import { RevolutDashboard } from './pages/revolut/RevolutDashboard'
import { RevolutAddMoney } from './pages/revolut/RevolutAddMoney'
import { RevolutAccountDetails } from './pages/revolut/RevolutAccountDetails'
import { RevolutExchange } from './pages/revolut/RevolutExchange'
import { RevolutTransfer } from './pages/revolut/RevolutTransfer'
import { RevolutBankAccountDetails } from './pages/revolut/RevolutBankAccountDetails'
import { RevolutTransferRevtag } from './pages/revolut/RevolutTransferRevtag'
import { RevolutTransferReview } from './pages/revolut/RevolutTransferReview'
import { RevolutRecipientAddress } from './pages/revolut/RevolutRecipientAddress'
import { RevolutReceipts } from './pages/revolut/RevolutReceipts'
import { RevolutBillingDetails } from './pages/revolut/RevolutBillingDetails'
import { RevolutSpendingControls } from './pages/revolut/RevolutSpendingControls'
import { RevolutAccountingSoftware } from './pages/revolut/RevolutAccountingSoftware'
import { RevolutCardSelection } from './pages/revolut/RevolutCardSelection'
import { RevolutCardRequest } from './pages/revolut/RevolutCardRequest'
import { MercuryLanding } from './pages/mercury/MercuryLanding'
import { MercuryLogin } from './pages/mercury/MercuryLogin'
import { MercurySignupFlow } from './pages/mercury/MercurySignupFlow'
import { MercurySignupCompanyName } from './pages/mercury/MercurySignupCompanyName'
import { MercurySignupCallsign } from './pages/mercury/MercurySignupCallsign'
import { MercurySignupEligibility } from './pages/mercury/MercurySignupEligibility'
import { MercurySignupLegalName } from './pages/mercury/MercurySignupLegalName'
import { MercurySignupEmailPassword } from './pages/mercury/MercurySignupEmailPassword'
import { MercurySignupEmailVerify } from './pages/mercury/MercurySignupEmailVerify'
import { MercuryApplicationFlow } from './pages/mercury/MercuryApplicationFlow'
import { MercuryApplicationCompanyInfo } from './pages/mercury/MercuryApplicationCompanyInfo'
import { MercuryApplicationCompanyAddress } from './pages/mercury/MercuryApplicationCompanyAddress'
import { MercuryApplicationOwnership } from './pages/mercury/MercuryApplicationOwnership'
import { MercuryApplicationDocuments } from './pages/mercury/MercuryApplicationDocuments'
import { MercuryApplicationExpectedActivity } from './pages/mercury/MercuryApplicationExpectedActivity'
import { MercuryApplicationFollowUp } from './pages/mercury/MercuryApplicationFollowUp'
import { MercuryAllSet } from './pages/mercury/MercuryAllSet'
import { MercuryPasskey } from './pages/mercury/MercuryPasskey'
import { MercuryFundAccount } from './pages/mercury/MercuryFundAccount'
import { MercuryAddTeamMember } from './pages/mercury/MercuryAddTeamMember'
import { Mercury2FA } from './pages/mercury/Mercury2FA'
import { MercuryDashboard } from './pages/mercury/MercuryDashboard'
import { MercuryTransactions } from './pages/mercury/MercuryTransactions'
import { MercuryCards } from './pages/mercury/MercuryCards'
import { MercuryCreateCard } from './pages/mercury/MercuryCreateCard'
import { MercuryCreateRecipient } from './pages/mercury/MercuryCreateRecipient'
import { MercuryPaymentDetails } from './pages/mercury/MercuryPaymentDetails'
import { MercuryBillPay } from './pages/mercury/MercuryBillPay'
import { MercuryInvoicing } from './pages/mercury/MercuryInvoicing'
import { MercuryCategories } from './pages/mercury/MercuryCategories'
import { MercuryNotifications } from './pages/mercury/MercuryNotifications'
import { MercuryProfilePicture } from './pages/mercury/MercuryProfilePicture'
import { MercuryChangePassword } from './pages/mercury/MercuryChangePassword'
import { MercurySettings } from './pages/mercury/MercurySettings'
import { MercuryRequests } from './pages/mercury/MercuryRequests'
import { MercuryReimbursements } from './pages/mercury/MercuryReimbursements'
import { MercuryACHConfirmation } from './pages/mercury/MercuryACHConfirmation'
import { MercurySettingsIndex } from './pages/mercury/MercurySettingsIndex'

function CompanyGate() {
  const { company } = useParams()
  if (company !== 'airwallex' && company !== 'revolut' && company !== 'mercury') {
    return <Navigate to="/" replace />
  }
  return (
    <CompanyProvider>
      <Outlet />
    </CompanyProvider>
  )
}

function FlowRouteGuard() {
  const { company, basePath } = useCompany()
  const { pathname } = useLocation()
  const isRevolutFlow = pathname.includes('/flow/revolut')
  const isMercuryFlow = pathname.includes('/flow/mercury')
  if (company === COMPANY.REVOLUT && !isRevolutFlow) {
    return <Navigate to={basePath()} replace />
  }
  if (company === COMPANY.MERCURY && !isMercuryFlow) {
    return <Navigate to={basePath()} replace />
  }
  return <Outlet />
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<CompanySelector />} />
      <Route path=":company" element={<CompanyGate />}>
        <Route index element={<FlowSelector />} />
        <Route path="flow" element={<FlowRouteGuard />}>
          <Route path="revolut-landing" element={<RevolutLanding />} />
          <Route path="revolut-login" element={<RevolutLogin />} />
          <Route path="revolut-signup" element={<RevolutSignupFlow />}>
            <Route index element={<Navigate to="country" replace />} />
            <Route path="country" element={<RevolutSignupCountry />} />
            <Route path="email" element={<RevolutSignupEmail />} />
            <Route path="verify-email" element={<RevolutSignupVerifyEmail />} />
            <Route path="phone" element={<RevolutSignupPhone />} />
            <Route path="verify-phone" element={<RevolutSignupVerifyPhone />} />
            <Route path="passcode" element={<RevolutSignupPasscode />} />
            <Route path="confirm-passcode" element={<RevolutSignupConfirmPasscode />} />
            <Route path="business-type" element={<RevolutSignupBusinessType />} />
          </Route>
          <Route path="revolut-onboarding" element={<RevolutOnboardingFlow />}>
            <Route index element={<Navigate to="name" replace />} />
            <Route path="name" element={<RevolutOnboardingName />} />
            <Route path="citizenship" element={<RevolutOnboardingCitizenship />} />
            <Route path="monthly-volume" element={<RevolutOnboardingMonthlyVolume />} />
            <Route path="website" element={<RevolutOnboardingWebsite />} />
            <Route path="tax-residency" element={<RevolutOnboardingTaxResidency />} />
            <Route path="corporate-personnel" element={<RevolutOnboardingCorporatePersonnel />} />
            <Route path="verify-details" element={<RevolutVerifyDetails />} />
            <Route path="residence-permit" element={<RevolutResidencePermit />} />
          </Route>
          <Route path="revolut-dashboard" element={<RevolutDashboard />} />
          <Route path="revolut-add-money" element={<RevolutAddMoney />} />
          <Route path="revolut-account-details" element={<RevolutAccountDetails />} />
          <Route path="revolut-exchange" element={<RevolutExchange />} />
          <Route path="revolut-transfer" element={<RevolutTransfer />} />
          <Route path="revolut-bank-account-details" element={<RevolutBankAccountDetails />} />
          <Route path="revolut-transfer-revtag" element={<RevolutTransferRevtag />} />
          <Route path="revolut-transfer-review" element={<RevolutTransferReview />} />
          <Route path="revolut-recipient-address" element={<RevolutRecipientAddress />} />
          <Route path="revolut-receipts" element={<RevolutReceipts />} />
          <Route path="revolut-billing-details" element={<RevolutBillingDetails />} />
          <Route path="revolut-spending-controls" element={<RevolutSpendingControls />} />
          <Route path="revolut-accounting-software" element={<RevolutAccountingSoftware />} />
          <Route path="revolut-card-selection" element={<RevolutCardSelection />} />
          <Route path="revolut-card-request" element={<RevolutCardRequest />} />
          <Route path="mercury-landing" element={<MercuryLanding />} />
          <Route path="mercury-login" element={<MercuryLogin />} />
          <Route path="mercury-signup" element={<MercurySignupFlow />}>
            <Route index element={<Navigate to="company-name" replace />} />
            <Route path="company-name" element={<MercurySignupCompanyName />} />
            <Route path="callsign" element={<MercurySignupCallsign />} />
            <Route path="eligibility" element={<MercurySignupEligibility />} />
            <Route path="legal-name" element={<MercurySignupLegalName />} />
            <Route path="email-password" element={<MercurySignupEmailPassword />} />
            <Route path="email-verify" element={<MercurySignupEmailVerify />} />
          </Route>
          <Route path="mercury-application" element={<MercuryApplicationFlow />}>
            <Route index element={<Navigate to="company-info" replace />} />
            <Route path="company-info" element={<MercuryApplicationCompanyInfo />} />
            <Route path="company-address" element={<MercuryApplicationCompanyAddress />} />
            <Route path="ownership" element={<MercuryApplicationOwnership />} />
            <Route path="documents" element={<MercuryApplicationDocuments />} />
            <Route path="expected-activity" element={<MercuryApplicationExpectedActivity />} />
            <Route path="follow-up" element={<MercuryApplicationFollowUp />} />
          </Route>
          <Route path="mercury-all-set" element={<MercuryAllSet />} />
          <Route path="mercury-passkey" element={<MercuryPasskey />} />
          <Route path="mercury-fund-account" element={<MercuryFundAccount />} />
          <Route path="mercury-add-team-member" element={<MercuryAddTeamMember />} />
          <Route path="mercury-2fa" element={<Mercury2FA />} />
          <Route path="mercury-dashboard" element={<MercuryDashboard />} />
          <Route path="mercury-transactions" element={<MercuryTransactions />} />
          <Route path="mercury-cards" element={<MercuryCards />} />
          <Route path="mercury-create-card" element={<MercuryCreateCard />} />
          <Route path="mercury-create-recipient" element={<MercuryCreateRecipient />} />
          <Route path="mercury-payment-details" element={<MercuryPaymentDetails />} />
          <Route path="mercury-bill-pay" element={<MercuryBillPay />} />
          <Route path="mercury-invoicing" element={<MercuryInvoicing />} />
          <Route path="mercury-categories" element={<MercuryCategories />} />
          <Route path="mercury-notifications" element={<MercuryNotifications />} />
          <Route path="mercury-profile-picture" element={<MercuryProfilePicture />} />
          <Route path="mercury-change-password" element={<MercuryChangePassword />} />
          <Route path="mercury-settings" element={<MercurySettings />}>
            <Route index element={<MercurySettingsIndex />} />
          </Route>
          <Route path="mercury-requests" element={<MercuryRequests />} />
          <Route path="mercury-reimbursements" element={<MercuryReimbursements />} />
          <Route path="mercury-ach-confirmation" element={<MercuryACHConfirmation />} />
          <Route path="logging-in" element={<LoggingInFlow />}>
            <Route index element={<LoginPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
            <Route path="reset-password" element={<ResetPasswordPage />} />
            <Route path="verify-2fa" element={<Verify2FAPage />} />
          </Route>
          <Route path="employee" element={<EmployeeFlow />}>
        <Route index element={<Navigate to="onboarding" replace />} />
        <Route path="onboarding" element={<EmployeeOnboardingPage />} />
        <Route path="onboarding/verify-phone" element={<EmployeeVerifyPhonePage />} />
        <Route path="expenses" element={<EmployeeExpensesPage />} />
        <Route path="expenses/add-bank-details" element={<EmployeeAddBankDetailsPage />} />
        <Route path="bills" element={<EmployeeBillsPage />} />
        <Route path="requests" element={<EmployeeRequestsPage />} />
        <Route path="requests/create" element={<EmployeeCreateRequestPage />} />
        <Route path="profile" element={<EmployeeProfilePage />} />
        <Route path="profile/security" element={<EmployeeSecurityPage />} />
        <Route path="profile/security/change-password" element={<EmployeeChangePasswordPage />} />
        <Route path="profile/notifications" element={<EmployeeProfilePlaceholder title="Notifications" />} />
        <Route path="profile/accounts" element={<EmployeeProfilePlaceholder title="Accounts" />} />
        <Route path="profile/assistants" element={<EmployeeProfilePlaceholder title="Assistants" />} />
          </Route>
          <Route path="web-onboarding" element={<OnboardingProvider><Outlet /></OnboardingProvider>}>
        <Route index element={<Landing />} />
        <Route path="onboarding/*" element={<OnboardingFlow />} />
        <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="completing-business-details" element={<BusinessDetailsProvider><Outlet /></BusinessDetailsProvider>}>
        <Route index element={<CompletingBusinessDetailsFlow />} />
        <Route path="completing-business-profile/*" element={
          <BusinessProfileProvider>
            <CompletingBusinessProfileFlow />
          </BusinessProfileProvider>
        } />
        <Route path="completing-business-owner" element={<BusinessOwnerProvider><Outlet /></BusinessOwnerProvider>}>
          <Route index element={<CompletingBusinessOwnerFlow />} />
          <Route path="verifying-id/*" element={
            <VerifyingIDProvider>
              <VerifyingIDFlow />
            </VerifyingIDProvider>
          } />
          <Route path="removing-uploaded-file/*" element={<RemoveUploadedFileFlow />} />
        </Route>
        <Route path="submitting-application" element={<SubmittingApplicationProvider><Outlet /></SubmittingApplicationProvider>}>
          <Route index element={<SubmittingApplicationFlow />} />
          <Route path="verifying-email/*" element={
            <VerifyingEmailProvider>
              <VerifyingEmailFlow />
            </VerifyingEmailProvider>
          } />
        </Route>
        <Route path="setting-up-two-factor-authentication/*" element={
          <TwoFactorAuthProvider>
            <TwoFactorFlow />
          </TwoFactorAuthProvider>
        } />
          </Route>
          <Route path="requesting-director-authorisation/*" element={
        <DirectorAuthorisationProvider>
          <DirectorAuthorisationFlow />
        </DirectorAuthorisationProvider>
      } />
          <Route path="dashboard" element={<OnboardingProvider><Outlet /></OnboardingProvider>}>
        <Route index element={<Dashboard />} />
        <Route path="adding-funds/*" element={
          <AddingFundsProvider>
            <AddingFundsFlow />
          </AddingFundsProvider>
        } />
        <Route path="payments" element={<Outlet />}>
          <Route index element={<Navigate to="accepting-a-payment" replace />} />
          <Route path="accepting-a-payment" element={<AcceptingPaymentFlow />} />
        </Route>
          </Route>
          <Route path="reports" element={<ReportsLayout />}>
        <Route index element={<ReportsIndex />} />
        <Route path="generating-balance-activity" element={<GeneratingBalanceActivityFlow />} />
          </Route>
          <Route path="spend-general" element={<Outlet />}>
        <Route index element={<SpendGeneralFlow />} />
        <Route path="expenses-spend" element={<Outlet />}>
          <Route index element={<ExpensesFlow />} />
          <Route path="filtering-reimbursement" element={<FilteringReimbursementFlow />} />
          <Route path="filtering-reimbursement/approving-reimbursement" element={<ApprovingReimbursementFlow />} />
          <Route path="uploading-a-receipt" element={<UploadingReceiptFlow />} />
          <Route path="uploading-a-receipt/adding-items" element={<AddingItemsFlow />} />
        </Route>
        <Route path="purchase-orders" element={<PurchaseOrdersFlow />} />
          </Route>
          <Route path="payments-overview" element={<PaymentOverviewFlow />}>
        <Route index element={<PaymentActivityPage />} />
        <Route path="disputes" element={<DisputesPage />} />
          </Route>
          <Route path="transfers" element={<TransfersFlow />}>
        <Route index element={<TransfersIndex />} />
        <Route path="transfer-details/:transferId" element={<TransferDetailsPage />} />
        <Route path="create-batch-transfer" element={<CreateBatchTransferFilePage />} />
        <Route path="transfer-approval-workflow" element={<SettingUpTransferApprovalWorkflowPage />} />
        <Route path="deactivating-workflow" element={<DeactivatingWorkflowPage />} />
        <Route path="settings" element={<TransfersSettingsPage />} />
          </Route>
          <Route path="wallet" element={<WalletFlow />}>
        <Route index element={<WalletBalancesPage />} />
        <Route path="balance/:currency" element={<CashBalanceDetailsPage />} />
        <Route path="display-currencies" element={<EditingCurrencyDisplayPage />} />
        <Route path="new-transfer" element={<SchedulingTransferPage />} />
        <Route path="new-conversion" element={<CreatingConversionPage />} />
        <Route path="global-accounts" element={<Outlet />}>
          <Route index element={<GlobalAccountsPage />} />
          <Route path="new" element={<CreatingGlobalAccountPage />} />
        </Route>
        <Route path="conversions" element={<Outlet />}>
          <Route index element={<ConversionsPage />} />
          <Route path="limit-order" element={<CreatingLimitOrderPage />} />
          <Route path="rate-alert" element={<CreatingRateAlertPage />} />
        </Route>
        <Route path="transactions" element={<WalletTransactionsPage />} />
        <Route path="linked-accounts" element={<WalletLinkedAccountsPage />} />
        <Route path="settings" element={<WalletSettingsPage />} />
          </Route>
          <Route path="billing" element={<BillingFlow />}>
        <Route index element={<BillingIndex />} />
        <Route path="customers" element={<BillingCustomers />} />
        <Route path="customer-details" element={<CustomerDetails />} />
        <Route path="creating-an-invoice" element={<CreatingAnInvoice />} />
        <Route path="creating-a-customer" element={<CreatingACustomer />} />
        <Route path="products" element={<BillingProducts />} />
        <Route path="creating-a-product" element={<CreatingAProduct />} />
        <Route path="creating-a-price" element={<CreatingAPrice />} />
        <Route path="invoices" element={<BillingInvoices />} />
        <Route path="subscriptions" element={<BillingSubscriptions />} />
        <Route path="billing-settings" element={<BillingSettings />} />
          </Route>
          <Route path="bills" element={<BillsFlow />}>
        <Route index element={<BillsIndex />} />
        <Route path="approving-a-bill" element={<ApprovingBill />} />
        <Route path="bill-details" element={<BillDetails />} />
        <Route path="deleting-a-bill" element={<DeletingBill />} />
        <Route path="adding-a-bill" element={<AddingBill />} />
          </Route>
          <Route path="vendors" element={<VendorsFlow />}>
        <Route index element={<VendorsIndex />} />
        <Route path="adding-a-vendor" element={<AddingVendor />} />
        <Route path="vendor-details" element={<VendorDetails />} />
        <Route path="uploading-a-file" element={<UploadingAFile />} />
        <Route path="adding-bank-account-details" element={<AddingBankAccountDetails />} />
          </Route>
          <Route path="requests" element={<RequestsFlow />}>
        <Route index element={<RequestsIndex />} />
        <Route path="creating-requests" element={<CreatingRequests />} />
        <Route path="requesting-a-submission" element={<RequestingASubmission />} />
        <Route path="approving-a-request" element={<ApprovingARequest />} />
          </Route>
          <Route path="cards" element={<CardsFlow />}>
        <Route index element={<CardsIndex />} />
        <Route path="card-details/:cardId" element={<CardDetailsPage />} />
        <Route path="creating-a-card-company" element={<CreatingACardCompany />} />
        <Route path="creating-a-card" element={<CreatingACard />} />
        <Route path="transactions" element={<CardsTransactionsPage />} />
        <Route path="settings" element={<CardsSettingsPage />} />
          </Route>
          <Route path="payments" element={<PaymentsFlow />}>
        <Route index element={<PaymentsIndex />} />
        <Route path="activating-payment-methods" element={<ActivatingPaymentMethodsPage />} />
        <Route path="payment-links" element={<PaymentLinksPage />} />
        <Route path="updating-company-profile" element={<UpdatingCompanyProfilePage />} />
        <Route path="updating-email-notification" element={<UpdatingEmailNotificationPage />} />
          </Route>
          <Route path="rewards" element={<RewardsFlow />}>
        <Route index element={<RewardsIndex />} />
        <Route path="redeem-rewards" element={<RedeemRewardsPage />} />
        <Route path="rewards-activity" element={<RewardsActivityPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="disabling-two-factor-authentication" element={<DisablingTwoFactorAuthenticationPage />} />
          </Route>
          <Route path="profile" element={<ProfileFlow />}>
        <Route index element={<ProfilePage />} />
        <Route path="security" element={<ProfileSecurityPage />} />
        <Route path="adding-an-assistant" element={<AddingAssistantPage />} />
        <Route path="updating-notifications" element={<UpdatingNotificationsPage />} />
          </Route>
          <Route path="settings" element={<SettingsFlow />}>
        <Route index element={<SettingsIndex />} />
        <Route path="connections" element={<ConnectionsPage />} />
        <Route path="creating-a-user" element={<Outlet />}>
          <Route index element={<CreatingAUserPage />} />
          <Route path="adding-a-custom-role" element={<AddingACustomRolePage />} />
          <Route path="cancelling-an-invitation" element={<CancellingAnInvitationPage />} />
          <Route path="creating-a-department" element={<CreatingADepartmentPage />} />
          <Route path="creating-a-location" element={<CreatingALocationPage />} />
          <Route path="removing-employment-type" element={<RemovingEmploymentTypePage />} />
          <Route path="role-details/:roleId" element={<RoleDetailsPage />} />
        </Route>
        <Route path="developer" element={<Outlet />}>
          <Route index element={<DeveloperPage />} />
          <Route path="creating-an-api-key" element={<CreatingAnApiKeyPage />} />
        </Route>
        <Route path="plan-billing" element={<PlanAndBillingPage />} />
        <Route path="updating-card-expenses-approvals" element={<UpdatingCardExpensesApprovalsPage />} />
          </Route>
          <Route path="completing-setup-spend/*" element={
        <CompletingSetupSpendProvider>
          <CompletingSetupSpendFlow />
        </CompletingSetupSpendProvider>
      } />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
