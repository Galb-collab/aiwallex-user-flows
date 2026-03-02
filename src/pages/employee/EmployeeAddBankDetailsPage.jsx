import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './EmployeeAddBankDetails.css'

export function EmployeeAddBankDetailsPage() {
  const { flowPath, info } = useCompany()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [firstName, setFirstName] = useState('Alex')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('Smith')
  const [dob, setDob] = useState('')
  const [nationality, setNationality] = useState('Singapore')
  const [country, setCountry] = useState('Singapore')
  const [address1, setAddress1] = useState('')
  const [address2, setAddress2] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [bankCountry, setBankCountry] = useState('Singapore')
  const [currency, setCurrency] = useState('SGD')
  const [swiftCode, setSwiftCode] = useState('')
  const [accountNumber, setAccountNumber] = useState('')
  const [accountName, setAccountName] = useState('')

  const handleSaveContinue = (e) => {
    e.preventDefault()
    if (step === 1) setStep(2)
    else {
      navigate(flowPath('/flow/employee/expenses'))
    }
  }

  return (
    <div className="employee-add-bank">
      <header className="employee-add-bank-header">
        <Link to="/" className="employee-add-bank-flows">← Flows</Link>
        <div className="employee-add-bank-brand">
          <span className="logo-icon">A</span>
          Airwallex Add bank details
        </div>
        <Link to={flowPath('/flow/employee/expenses')} className="employee-add-bank-close" aria-label="Close">×</Link>
      </header>

      <main className="employee-add-bank-main">
        <div className="employee-add-bank-layout">
          <nav className="employee-add-bank-steps">
            <div className={`employee-add-bank-step ${step === 1 ? 'active' : 'done'}`}>
              <span className="step-indicator">{step > 1 ? '✓' : '1'}</span>
              Personal details
            </div>
            <div className={`employee-add-bank-step ${step === 2 ? 'active' : ''}`}>
              <span className="step-indicator">2</span>
              Bank account details
            </div>
          </nav>

          <div className="employee-add-bank-form">
            {step === 1 && (
              <>
                <h1 className="employee-add-bank-title">Enter your personal details</h1>
                <p className="employee-add-bank-desc">We need this for security purposes. Once verified by our team, you&apos;ll be able to receive reimbursement transfers.</p>

                <form onSubmit={handleSaveContinue}>
                  <section className="employee-add-bank-section">
                    <h2>Your personal details</h2>
                    <p className="section-desc">Please provide the details exactly as printed on a government-issued ID.</p>
                    <div className="employee-add-bank-fields">
                      <div className="field">
                        <label>Legal first name</label>
                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                      </div>
                      <div className="field">
                        <label>Legal middle name <span className="optional">Optional</span></label>
                        <input type="text" value={middleName} onChange={(e) => setMiddleName(e.target.value)} placeholder="Middle name" />
                      </div>
                      <div className="field">
                        <label>Legal last name</label>
                        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                      </div>
                      <div className="field">
                        <label>Date of birth</label>
                        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                      </div>
                      <div className="field">
                        <label>Nationality</label>
                        <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
                          <option>Singapore</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                        </select>
                      </div>
                    </div>
                  </section>

                  <section className="employee-add-bank-section">
                    <h2>Residential address</h2>
                    <p className="section-desc">Please provide your address as printed on your identity documents.</p>
                    <div className="employee-add-bank-fields">
                      <div className="field">
                        <label>Country or region</label>
                        <select value={country} onChange={(e) => setCountry(e.target.value)}>
                          <option>Singapore</option>
                          <option>United States</option>
                        </select>
                      </div>
                      <div className="field">
                        <label>Address line 1</label>
                        <input type="text" value={address1} onChange={(e) => setAddress1(e.target.value)} placeholder="Address" />
                      </div>
                      <div className="field">
                        <label>Address line 2 <span className="optional">Optional</span></label>
                        <input type="text" value={address2} onChange={(e) => setAddress2(e.target.value)} placeholder="Apt., suite, building #, etc." />
                      </div>
                      <div className="field">
                        <label>Postal code</label>
                        <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                      </div>
                    </div>
                  </section>

                  <div className="employee-add-bank-actions">
                    <Link to={flowPath('/flow/employee/expenses')} className="btn-cancel">Cancel</Link>
                    <button type="submit" className="btn-primary">Save & Continue</button>
                  </div>
                </form>
              </>
            )}

            {step === 2 && (
              <>
                <h1 className="employee-add-bank-title">Bank account details</h1>

                <form onSubmit={handleSaveContinue}>
                  <div className="employee-add-bank-fields">
                    <div className="field">
                      <label>Bank country / region</label>
                      <select value={bankCountry} onChange={(e) => setBankCountry(e.target.value)}>
                        <option>Singapore</option>
                          <option>United States</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>Account currency</label>
                      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                        <option>SGD</option>
                        <option>USD</option>
                      </select>
                    </div>
                    <div className="field">
                      <label>Account identifier type</label>
                      <select><option>Bank account number</option></select>
                    </div>
                    <div className="field">
                      <label>SWIFT code / BIC</label>
                      <input type="text" value={swiftCode} onChange={(e) => setSwiftCode(e.target.value)} placeholder="Search SWIFT code or Bank name" />
                    </div>
                    <div className="field">
                      <label>Account number</label>
                      <input type="text" value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
                    </div>
                    <div className="field">
                      <label>Account name</label>
                      <input type="text" value={accountName} onChange={(e) => setAccountName(e.target.value)} placeholder="Account holder's full name" />
                      <small>Enter the account holder&apos;s full name as registered with the bank</small>
                    </div>
                  </div>

                  <div className="employee-add-bank-actions">
                    <button type="button" className="btn-cancel" onClick={() => setStep(1)}>Back</button>
                    <button type="submit" className="btn-primary">Add bank details</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <footer className="employee-add-bank-footer">
        <span className="footer-logo"><span className="logo-icon small">A</span> airwallex</span>
        <span>curated by Mobbin</span>
      </footer>
    </div>
  )
}
