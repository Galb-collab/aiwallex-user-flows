# Mercury Web Dec 2025 - Flow Mapping

## Summary of Changes Made

### New Components
- **MercurySettings.jsx** - Settings layout with sidebar (Company: Categories; Personal: Notifications, My Profile, Security)
- **MercurySettingsIndex.jsx** - Redirects to mercury-categories
- **MercuryRequests.jsx** - Requests page with payment request list and detail panel
- **MercuryReimbursements.jsx** - Reimbursements page
- **MercuryACHConfirmation.jsx** - "You've scheduled an ACH payment" confirmation screen

### Navigation Fixes (all use flowPath from useCompany)
- Dashboard: Pay Bill, Create Invoice, Customize, Deposit, Reimbursements now link correctly
- Dashboard avatar links to mercury-settings
- MercuryCreateRecipient → navigates to mercury-payment-details after create
- MercuryPaymentDetails → navigates to mercury-ach-confirmation after Schedule ACH
- MercuryACHConfirmation → "Back to Bill Pay" links to mercury-bill-pay
- All dashboard pages: full sidebar with Payments, Requests, Bill Pay, Invoicing, Reimbursements

### UI Updates
- **MercuryChangePassword** - Matches image: New password, Confirm new password, Log out of all other devices, Save Password (removed Current password)
- **MercuryCategories** - Full Settings layout with "Create mapping rules" section, Map Categories button
- **MercuryNotifications** - Settings layout with sidebar
- **MercuryProfilePicture** - "Add profile picture" modal-style with 256x256 requirement, drag-and-drop zone

### New Routes in App.jsx
- mercury-settings (with index redirect to mercury-categories)
- mercury-requests
- mercury-reimbursements
- mercury-ach-confirmation

### FlowSelector Updates
- Added mercury-requests, mercury-reimbursements to MERCURY_FLOWS

---

## Image Index → Screen/Flow Name

| Image Range | Screen/Flow |
|-------------|-------------|
| 0-4 | Landing, Signup (Company name, Callsign) |
| 5 | Signup - Eligibility (Is your company any of the following?) |
| 6-7 | Signup - Legal Name (Create your account) |
| 8-11 | Signup - Email/Password (Start Application) |
| 12 | Email Successfully Verified |
| 13-20 | Application - Company info (1/5 or 1/6) |
| 14 | Application - Follow-up questions (6/6) |
| 15 | Post-application - You're all set |
| 16 | Passkey setup |
| 17 | Fund account + Customize transaction categories modal |
| 18-20 | Application - Company info (various states) |
| 50-70 | (Application steps, Dashboard variants) |
| 100-120 | Transactions (list + detail panel) |
| 150 | Transactions (with sort dropdown) |
| 170 | Requests |
| 200-220 | Cards (Manage/Subscriptions, filters) |
| 250 | Payment Details (Recipient → Amount → Details → Review) |
| 270 | Bill Pay - ACH payment confirmation |
| 300 | Invoicing - Payment details / Create invoice |
| 320 | Schedule send modal |
| 350 | Settings - Categories |
| 370 | Personal bank account modal (Reimbursements) |
| 400 | Issue card (Add team member flow) |
| 420 | Settings - Notifications |
| 450 | Add profile picture modal |
| 478 | Change password |

## Key Flows Identified

1. **Landing** - mercury-landing
2. **Login** - mercury-login
3. **Signup** - mercury-signup (company-name → callsign → eligibility → legal-name → email-password → email-verify)
4. **Application** - mercury-application (company-info → company-address → ownership → documents → expected-activity → follow-up)
5. **Post-application** - mercury-all-set, mercury-passkey, mercury-fund-account, mercury-add-team-member, mercury-2fa
6. **Dashboard** - mercury-dashboard
7. **Transactions** - mercury-transactions
8. **Cards** - mercury-cards, mercury-create-card
9. **Payments** - mercury-create-recipient, mercury-payment-details
10. **Bill Pay** - mercury-bill-pay
11. **Invoicing** - mercury-invoicing
12. **Requests** - (missing route)
13. **Reimbursements** - (missing route)
14. **Settings** - mercury-settings, mercury-categories, mercury-notifications, mercury-profile-picture, mercury-change-password

---

## Remaining Gaps (Optional)

- **Schedule send modal** - Shown in Bill Pay flow (image 320); could be added as modal within mercury-bill-pay
- **Personal bank account modal** - Shown in Reimbursements (image 370); could be added when linking account for reimbursements
- **Transaction detail panel** - MercuryTransactions has basic table; images show right-hand slide-out panel with Xero GL Code, Notes, Attachments
- **Create Invoice flow** - Create Invoice button links to mercury-invoicing; full create-invoice wizard (image 300) could be a separate flow
- **Accounting** - Sidebar shows "Accounting" under Workflows; no dedicated route yet
