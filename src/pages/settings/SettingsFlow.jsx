import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import { DashboardHeader } from '../../components/DashboardHeader'
import '../Dashboard.css'
import '../SpendGeneralFlow.css'
import '../WalletFlow.css'
import './SettingsFlow.css'

const BUSINESS_NAME = 'SLMobbin'
const EMAIL = 'samlee@content-mobbin.com'

export function SettingsFlow() {
  const { flowPath } = useCompany()
  const location = useLocation()
  const path = location.pathname
  const isIndex = path === '/flow/settings' || path.endsWith('/settings')
  const isConnections = path.includes('/connections')
  const isCreatingUser = path.includes('/creating-a-user')
  const isAddingCustomRole = path.includes('/adding-a-custom-role')
  const isCancellingInvitation = path.includes('/cancelling-an-invitation')
  const isCreatingDepartment = path.includes('/creating-a-department')
  const isCreatingLocation = path.includes('/creating-a-location')
  const isRemovingEmploymentType = path.includes('/removing-employment-type')
  const isRoleDetails = path.includes('/role-details')
  const isDeveloper = path.includes('/developer')
  const isCreatingApiKey = path.includes('/creating-an-api-key')
  const isPlanBilling = path.includes('/plan-billing')
  const isCardExpensesApprovals = path.includes('/updating-card-expenses-approvals')

  return (
    <div className="dashboard settings-flow">
      <aside className="sidebar">
        <div className="sidebar-org">{BUSINESS_NAME}</div>
        <nav className="sidebar-nav">
          <Link to={flowPath('/flow/dashboard')}>Dashboard</Link>
          <Link to={flowPath('/flow/spend-general')}>Spend <span className="tag">New</span></Link>
          <Link to={flowPath('/flow/billing')}>Billing <span className="tag">New</span></Link>
          <Link to={flowPath('/flow/payments-overview')}>Payments overview</Link>
          <Link to={flowPath('/flow/transfers')}>Transfers</Link>
          <Link to={flowPath('/flow/cards')}>Cards</Link>
          <Link to={flowPath('/flow/payments')}>Payments</Link>
          <Link to={flowPath('/flow/rewards')}>Rewards</Link>
          <Link to={flowPath('/flow/reports')}>Reports</Link>
          <div className="sidebar-nav-item active-wrap">
            <span className="active">Settings</span>
            <div className="sidebar-sub">
              <Link to={flowPath('/flow/settings')} className={isIndex ? 'active' : ''}>Overview</Link>
              <Link to={flowPath('/flow/settings/connections')} className={isConnections ? 'active' : ''}>Connections</Link>
              <Link to={flowPath('/flow/settings/creating-a-user')} className={isCreatingUser && !isAddingCustomRole && !isCancellingInvitation && !isCreatingDepartment && !isCreatingLocation && !isRemovingEmploymentType && !isRoleDetails ? 'active' : ''}>Creating a user</Link>
              <Link to={flowPath('/flow/settings/creating-a-user/adding-a-custom-role')} className={isAddingCustomRole ? 'active' : ''}>Adding a custom role</Link>
              <Link to={flowPath('/flow/settings/creating-a-user/cancelling-an-invitation')} className={isCancellingInvitation ? 'active' : ''}>Cancelling an invitation</Link>
              <Link to={flowPath('/flow/settings/creating-a-user/creating-a-department')} className={isCreatingDepartment ? 'active' : ''}>Creating a department</Link>
              <Link to={flowPath('/flow/settings/creating-a-user/creating-a-location')} className={isCreatingLocation ? 'active' : ''}>Creating a location</Link>
              <Link to={flowPath('/flow/settings/creating-a-user/removing-employment-type')} className={isRemovingEmploymentType ? 'active' : ''}>Removing employment type</Link>
              <Link to={flowPath('/flow/settings/creating-a-user/role-details/admin')} className={isRoleDetails ? 'active' : ''}>Role details</Link>
              <Link to={flowPath('/flow/settings/developer')} className={isDeveloper && !isCreatingApiKey ? 'active' : ''}>Developer</Link>
              <Link to={flowPath('/flow/settings/developer/creating-an-api-key')} className={isCreatingApiKey ? 'active' : ''}>Creating an API key</Link>
              <Link to={flowPath('/flow/settings/plan-billing')} className={isPlanBilling ? 'active' : ''}>Plan & billing</Link>
              <Link to={flowPath('/flow/settings/updating-card-expenses-approvals')} className={isCardExpensesApprovals ? 'active' : ''}>Updating card expenses approvals</Link>
            </div>
          </div>
        </nav>
        <div className="sidebar-section">
          <div className="sidebar-section-title">{BUSINESS_NAME} Account | {BUSINESS_NAME}</div>
          <Link to={flowPath('/flow/wallet')}>Wallet</Link>
          <Link to={flowPath('/flow/transfers')}>Transfers</Link>
          <Link to={flowPath('/flow/cards')}>Cards</Link>
          <Link to={flowPath('/flow/payments')}>Payments</Link>
          <Link to={flowPath('/flow/rewards')}>Rewards</Link>
          <Link to={flowPath('/flow/rewards/security')}>Security</Link>
          <Link to={flowPath('/flow/settings')}>Settings</Link>
        </div>
        <div className="sidebar-footer">
          <span className="logo-icon small">A</span>
          <span>AIwallex</span>
        </div>
      </aside>

      <div className="dashboard-main">
        <DashboardHeader email={EMAIL} className="settings-flow-header" />
        <Outlet />
      </div>
    </div>
  )
}
