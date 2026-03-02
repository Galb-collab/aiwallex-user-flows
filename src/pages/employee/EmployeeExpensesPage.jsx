import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './EmployeeExpensesPage.css'

const REPORTS = [
  { name: 'Reimbursement report 2025...', dates: '2025-11-17', amount: '5.00 SGD', count: '1 reimbursement', status: 'Draft' },
  { name: 'Reimbursement report 2025...', dates: '-', amount: '0.00 SGD', count: '-', status: 'Draft' },
]

export function EmployeeExpensesPage() {
  const { flowPath } = useCompany()
  const [subTab, setSubTab] = useState('reimbursements')
  const [hasBankDetails, setHasBankDetails] = useState(false)

  return (
    <div className="employee-expenses">
      <div className="employee-expenses-header">
        <div>
          <h1 className="employee-expenses-title">Expenses</h1>
          <p className="employee-expenses-subtitle">Manage and approve card expenses and reimbursements</p>
        </div>
        <div className="employee-expenses-actions">
          <button type="button" className="employee-expenses-btn secondary">+ Reimbursement report</button>
          <button type="button" className="employee-expenses-btn primary">Upload receipts</button>
        </div>
      </div>

      <div className="employee-expenses-tabs">
        <button
          type="button"
          className={subTab === 'card-expenses' ? 'active' : ''}
          onClick={() => setSubTab('card-expenses')}
        >
          Card expenses
        </button>
        <button
          type="button"
          className={subTab === 'reimbursements' ? 'active' : ''}
          onClick={() => setSubTab('reimbursements')}
        >
          Reimbursements
        </button>
      </div>

      {subTab === 'reimbursements' && (
        <>
          {!hasBankDetails && (
            <div className="employee-expenses-bank-banner">
              <span className="employee-expenses-bank-icon">🏦</span>
              <div>
                <strong>Please provide your bank details in order to submit your out-of-pocket expenses for reimbursement.</strong>
                <Link to={flowPath('/flow/employee/expenses/add-bank-details')} className="employee-expenses-bank-btn">Add bank details</Link>
              </div>
            </div>
          )}

          <div className="employee-expenses-card">
            <div className="employee-expenses-search-row">
              <input
                type="search"
                placeholder="Search by report name, reimbursement description, or merchant"
                className="employee-expenses-search"
              />
              <div className="employee-expenses-filters">
                <input type="text" placeholder="Date from" />
                <input type="text" placeholder="Date to" />
                <select><option>Status</option></select>
              </div>
            </div>

            {!hasBankDetails ? (
              <div className="employee-expenses-empty-state">
                <span className="employee-expenses-empty-icon">🏦</span>
                <h2>Add your personal bank details to get reimbursed</h2>
                <p>Made a purchase using a personal card? You are able to create reimbursements prior to adding bank details, but will not be able to submit until you have added them.</p>
                <Link to={flowPath('/flow/employee/expenses/add-bank-details')} className="employee-expenses-btn primary">Add bank details</Link>
              </div>
            ) : (
              <table className="employee-expenses-table">
                <thead>
                  <tr>
                    <th>REPORT NAME</th>
                    <th>REPORT DATES</th>
                    <th>AMOUNT</th>
                    <th>STATUS</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {REPORTS.map((r, i) => (
                    <tr key={i}>
                      <td>{r.name}</td>
                      <td>{r.dates}</td>
                      <td>{r.amount}<br /><small>{r.count}</small></td>
                      <td><span className="employee-expenses-status employee-expenses-status-draft">{r.status}</span></td>
                      <td><button type="button" className="employee-expenses-more">⋯</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            <div className="employee-expenses-pagination">
              <span>Rows per page: 20</span>
              <span>1-2 of 2</span>
            </div>
          </div>
        </>
      )}

      {subTab === 'card-expenses' && (
        <div className="employee-expenses-card">
          <p className="employee-expenses-empty-text">No card expenses yet.</p>
        </div>
      )}
    </div>
  )
}
