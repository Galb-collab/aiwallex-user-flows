import React from 'react'
import { useBusinessProfile } from '../../context/BusinessProfileContext'

const LOCATIONS = ['Singapore', 'United States', 'United Kingdom', 'Australia', 'Hong Kong', 'Japan', 'Germany', 'France']

export function BusinessLocationStep() {
  const { data, updateData, nextStep, prevStep } = useBusinessProfile()
  const locations = data.businessLocations || ['Singapore']

  const toggleLocation = (loc) => {
    const has = locations.includes(loc)
    if (has) {
      if (locations.length <= 1) return
      updateData({ businessLocations: locations.filter((l) => l !== loc) })
    } else {
      if (locations.length >= 5) return
      updateData({ businessLocations: [...locations, loc] })
    }
  }

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">Select where you do business</h1>
      <p className="business-details-step-desc">
        Select up to 5 locations that your business has direct or indirect connections to.
      </p>
      <a href="#help" className="link-purple">Which locations should I select?</a>
      <div className="form-group">
        <label>Locations</label>
        <div className="location-tags">
          {locations.map((loc) => (
            <span key={loc} className="location-tag">
              {loc}
              <button type="button" className="tag-remove" onClick={() => toggleLocation(loc)} aria-label="Remove">×</button>
            </span>
          ))}
          {locations.length < 5 && (
            <select
              value=""
              onChange={(e) => {
                const v = e.target.value
                if (v && !locations.includes(v)) updateData({ businessLocations: [...locations, v] })
                e.target.value = ''
              }}
              className="location-add"
            >
              <option value="">Add location...</option>
              {LOCATIONS.filter((l) => !locations.includes(l)).map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button type="button" className="btn-back" onClick={prevStep}>Back</button>
        <button type="button" className="btn-save-next" onClick={nextStep}>Save & Next</button>
      </div>
    </div>
  )
}
