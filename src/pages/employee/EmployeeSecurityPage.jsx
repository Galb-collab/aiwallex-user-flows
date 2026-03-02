import React from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './EmployeeSecurityPage.css'

export function EmployeeSecurityPage() {
  const { flowPath } = useCompany()
  return (
    <div className="employee-security-page">
      <nav className="employee-profile-nav">
        <Link to={flowPath('/flow/employee/profile')}>Profile</Link>
        <Link to={flowPath('/flow/employee/profile/security')} className="active">Security</Link>
        <Link to={flowPath('/flow/employee/profile/notifications')}>Notifications</Link>
        <Link to={flowPath('/flow/employee/profile/accounts')}>Accounts</Link>
        <Link to={flowPath('/flow/employee/profile/assistants')}>Assistants</Link>
      </nav>

      <div className="employee-security-cards">
        <div className="employee-profile-card">
          <div className="employee-profile-card-header">
            <div>
              <h2>Password</h2>
              <p className="card-desc">Choose a strong password to keep your account safe.</p>
            </div>
            <Link to={flowPath('/flow/employee/profile/security/change-password')} className="edit-btn">Change</Link>
          </div>
        </div>

        <div className="employee-profile-card">
          <div className="employee-security-card-body">
            <h2>Two-factor authentication (2FA)</h2>
            <p className="card-desc">2FA adds a layer of security that requires an additional authentication method to log in. <a href="#learn">Learn more</a></p>
            <div className="employee-2fa-options">
              <div className="employee-2fa-option">
                <div>
                  <strong>Airwallex app</strong>
                  <p>Use the Airwallex app on your mobile phone and verify it&apos;s you with one tap. You will require an internet connection.</p>
                </div>
                <button type="button" className="edit-btn small">Set up</button>
              </div>
              <div className="employee-2fa-option">
                <div>
                  <strong>Authenticator app</strong>
                  <p>Use a 3rd party authenticator app to receive an authentication code. It works without cellular signal or internet.</p>
                </div>
                <button type="button" className="edit-btn small">Set up</button>
              </div>
              <div className="employee-2fa-option">
                <div>
                  <strong>SMS</strong>
                  <p>Receive an authentication code via SMS. You will require cellular signal.</p>
                </div>
                <button type="button" className="edit-btn small">Set up</button>
              </div>
            </div>
          </div>
        </div>

        <div className="employee-profile-card">
          <div className="employee-security-card-body">
            <h2>Login sessions</h2>
            <p className="card-desc">View your login sessions from the past 28 days. If you notice any suspicious logins, log out of those sessions and change your password immediately. <a href="#learn">Learn more</a></p>
            <button type="button" className="edit-btn">Log out of all other sessions</button>
            <table className="employee-sessions-table">
              <thead>
                <tr>
                  <th>OPERATING SYSTEM</th>
                  <th>APPLICATION</th>
                  <th>LOCATION</th>
                  <th>IP ADDRESS</th>
                  <th>LAST ACTIVE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mac OS X</td>
                  <td>Chrome</td>
                  <td>Singapore</td>
                  <td>••••••••</td>
                  <td>2 minutes ago</td>
                  <td><span className="employee-session-current">Current</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
