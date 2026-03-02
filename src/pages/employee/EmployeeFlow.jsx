import React, { useState, useRef, useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './EmployeeFlow.css'

const EMAIL = 'alexsmith@mobbin.com'

export function EmployeeFlow() {
  const { flowPath, basePath, info } = useCompany()
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname
  const isOnboarding = path.includes(flowPath('/flow/employee/onboarding'))
  const isAddBankDetails = path.includes(flowPath('/flow/employee/expenses/add-bank-details'))
  const isCreateRequest = path.includes(flowPath('/flow/employee/requests/create'))
  const isChangePassword = path.includes(flowPath('/flow/employee/profile/security/change-password'))

  const [viewMode, setViewMode] = useState('organisation') // 'organisation' | 'personal'
  const [profileOpen, setProfileOpen] = useState(false)
  const profileRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false)
    }
    if (profileOpen) document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [profileOpen])

  if (isOnboarding && !path.includes(flowPath('/flow/employee/onboarding/verify-phone'))) {
    return <Outlet />
  }
  if (isOnboarding && path.includes(flowPath('/flow/employee/onboarding/verify-phone'))) {
    return <Outlet />
  }
  if (isAddBankDetails || isCreateRequest || isChangePassword) {
    return <Outlet />
  }

  return (
    <div className="employee-flow employee-flow--with-sidebar">
      <aside className="employee-sidebar">
        <div className="employee-sidebar-org">
          <button
            type="button"
            className="employee-org-switcher"
            onClick={() => setViewMode(viewMode === 'organisation' ? 'personal' : 'organisation')}
          >
            {viewMode === 'organisation' ? 'SLMobbin Organisation' : 'Sam Lee'}
            <span className="employee-org-arrow">▼</span>
          </button>
        </div>
        <nav className="employee-sidebar-nav">
          <Link to={flowPath('/flow/employee/expenses')} className={path.includes(flowPath('/flow/employee/expenses')) ? 'active' : ''}>
            <span className="employee-nav-icon">📋</span>
            Expenses
          </Link>
          <Link to={flowPath('/flow/employee/bills')} className={path.includes(flowPath('/flow/employee/bills')) ? 'active' : ''}>
            <span className="employee-nav-icon">📄</span>
            Bills
          </Link>
          <Link to={flowPath('/flow/employee/requests')} className={path.includes(flowPath('/flow/employee/requests')) ? 'active' : ''}>
            <span className="employee-nav-icon">✈️</span>
            Requests
          </Link>
        </nav>
        <div className="employee-sidebar-footer">
          <Link to={basePath()} className="employee-back-flows">← Flows</Link>
          <div className="employee-footer-brand">
            <span className="logo-icon small" style={{ background: info.primaryColor }}>{info.logoLetter}</span>
            <span>{info.name}</span>
          </div>
        </div>
      </aside>

      <div className="employee-main">
        <header className="employee-header">
          <div className="employee-header-left">
            {viewMode === 'personal' && (
              <button
                type="button"
                className="employee-back-personal"
                onClick={() => setViewMode('organisation')}
              >
                Back to personal view
              </button>
            )}
            <span className="employee-header-tab">Summary</span>
          </div>
          <div className="employee-header-right">
            <div className="employee-profile-wrap" ref={profileRef}>
              <button
                type="button"
                className="employee-profile-trigger"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                <span className="user-avatar" />
              </button>
              {profileOpen && (
                <div className="employee-profile-menu">
                  <div className="employee-profile-email">{EMAIL}</div>
                  <Link to={flowPath('/flow/employee/profile')} className="employee-profile-item" onClick={() => setProfileOpen(false)}>
                    Profile
                  </Link>
                  <a href="#help" className="employee-profile-item" onClick={() => setProfileOpen(false)}>Help</a>
                  <button type="button" className="employee-profile-item employee-profile-logout" onClick={() => { setProfileOpen(false); navigate('/'); }}>
                    Log out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="employee-content">
          <Outlet />
        </main>
      </div>

      <footer className="employee-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> airwallex</span>
        <span>curated by Mobbin</span>
      </footer>
    </div>
  )
}
