import React from 'react'
import { Routes, Route, Navigate, Outlet, useParams } from 'react-router-dom'
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

function CompanyGate() {
  const { company } = useParams()
  if (company !== 'airwallex' && company !== 'revolut') {
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
  if (company === COMPANY.REVOLUT) {
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
