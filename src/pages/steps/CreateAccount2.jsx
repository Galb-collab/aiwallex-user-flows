import React from 'react'
import { useOnboarding } from '../../context/OnboardingContext'
import { TestimonialPanel } from '../../components/TestimonialPanel'
import './CreateAccount.css'

const COUNTRIES = [
  'United States of America',
  'United Kingdom',
  'Singapore',
  'Australia',
  'Hong Kong',
  'Canada',
  'Germany',
  'France',
]

export function CreateAccount2() {
  const { data, updateData, nextStep } = useOnboarding()
  const [error, setError] = React.useState('')

  const handleCreate = (e) => {
    e.preventDefault()
    setError('')
    if (!data.businessName?.trim()) {
      setError('Please enter your business name.')
      return
    }
    if (!data.headquarters) {
      setError('Please select where your business is headquartered.')
      return
    }
    if (!data.mobile?.trim()) {
      setError('Please enter your mobile number.')
      return
    }
    if (!data.agreedToTerms) {
      setError('Please agree to the Terms & Conditions and Privacy Policy.')
      return
    }
    nextStep()
  }

  return (
    <div className="create-account-layout">
      <div className="create-account-form">
        <h1 className="step-title">Create an AIwallex account</h1>
        <form onSubmit={handleCreate}>
          <div className="form-group">
            <label>Business name</label>
            <input
              type="text"
              value={data.businessName}
              onChange={(e) => updateData({ businessName: e.target.value })}
              placeholder="Your business name"
            />
          </div>
          <div className="form-group">
            <label>Where is your business headquartered?</label>
            <select
              value={data.headquarters}
              onChange={(e) => updateData({ headquarters: e.target.value })}
            >
              <option value="">Select</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Mobile number</label>
            <div className="phone-input">
              <select
                value={data.countryCode}
                onChange={(e) => updateData({ countryCode: e.target.value })}
              >
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+65">+65</option>
                <option value="+61">+61</option>
                <option value="+81">+81</option>
              </select>
              <input
                type="tel"
                value={data.mobile}
                onChange={(e) => updateData({ mobile: e.target.value })}
                placeholder="Phone number"
              />
            </div>
            <p className="form-note">If you do not have a phone number from the regions above, please contact customer support.</p>
          </div>
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={data.agreedToTerms}
                onChange={(e) => updateData({ agreedToTerms: e.target.checked })}
              />
              <span>I agree to the <a href="#terms">Terms &amp; Conditions</a> and <a href="#privacy">Privacy Policy</a></span>
            </label>
          </div>
          {error && <p className="form-error">{error}</p>}
          <button type="submit" className="btn-continue btn-full">Create account</button>
        </form>
      </div>
      <TestimonialPanel />
    </div>
  )
}
