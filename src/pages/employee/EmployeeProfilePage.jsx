import React from 'react'
import { Link } from 'react-router-dom'
import './EmployeeProfilePage.css'

export function EmployeeProfilePage() {
  return (
    <div className="employee-profile-page">
      <nav className="employee-profile-nav">
        <Link to="/flow/employee/profile" className="active">Profile</Link>
        <Link to="/flow/employee/profile/security">Security</Link>
        <Link to="/flow/employee/profile/notifications">Notifications</Link>
        <Link to="/flow/employee/profile/accounts">Accounts</Link>
        <Link to="/flow/employee/profile/assistants">Assistants</Link>
      </nav>

      <div className="employee-profile-cards">
        <div className="employee-profile-card">
          <div className="employee-profile-card-header">
            <h2>Personal Details</h2>
            <span className="verified-badge">Verified</span>
            <button type="button" className="edit-btn">Edit</button>
          </div>
          <div className="employee-profile-card-body">
            <p><strong>Legal name:</strong> Alex Smith</p>
            <p><strong>Date of birth:</strong> •••••••••</p>
            <p><strong>Residential address:</strong> 1226 University Drive</p>
          </div>
        </div>

        <div className="employee-profile-card">
          <div className="employee-profile-card-header">
            <h2>Contact & login method</h2>
            <button type="button" className="edit-btn">Edit</button>
          </div>
          <div className="employee-profile-card-body">
            <div className="profile-field">
              <span><strong>Email</strong> <span className="verified-badge">Verified</span></span>
              <span>alexsmith@mobbin.com</span>
              <button type="button" className="edit-btn small">Edit</button>
            </div>
            <div className="profile-field">
              <span><strong>Mobile</strong> <span className="verified-badge">Verified</span></span>
              <span>+65 •••••••••</span>
              <button type="button" className="edit-btn small">Edit</button>
            </div>
            <div className="profile-field">
              <span><strong>Login method</strong> ⓘ</span>
              <span>Email or mobile</span>
              <button type="button" className="edit-btn small">Edit</button>
            </div>
          </div>
        </div>

        <div className="employee-profile-card">
          <div className="employee-profile-card-header">
            <h2>Personal bank details</h2>
            <Link to="/flow/employee/expenses/add-bank-details" className="edit-btn">Add bank details</Link>
          </div>
          <div className="employee-profile-card-body">
            <p className="profile-desc">Your bank details will be used to receive payments such as reimbursements for out-of-pocket expenses.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
