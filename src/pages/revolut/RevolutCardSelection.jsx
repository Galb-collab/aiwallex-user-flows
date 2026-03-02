import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCompany } from '../../context/CompanyContext'
import './RevolutFlow.css'

export function RevolutCardSelection() {
  const navigate = useNavigate()
  const { flowPath } = useCompany()
  const [material, setMaterial] = useState('metal')
  const [color, setColor] = useState('gold')

  const handleGetCard = (e) => {
    e.preventDefault()
    navigate(flowPath('/flow/revolut-card-request'))
  }

  return (
    <div className="revolut-flow-layout">
      <div className="revolut-step">
        <Link to={flowPath('/flow/revolut-dashboard')} className="revolut-step-back">←</Link>
        <div className="revolut-card-display">
          <div className={`revolut-card-visual revolut-card-${color}`}>
            <span className="revolut-card-chip" />
            <span className="revolut-card-brand">Revolut Business</span>
            <span className="revolut-card-company">COMPANY NAME</span>
            <span className="revolut-card-mastercard">Mastercard</span>
          </div>
        </div>
        <h2 className="revolut-card-type">Metal · Gold</h2>
        <p className="revolut-step-subtitle">Made from stainless steel, our exclusive 18g Metal card will make you stand out from the crowd.</p>
        <div className="revolut-card-options">
          <div className="revolut-segmented">
            <button type="button" className={material === 'plastic' ? 'active' : ''} onClick={() => setMaterial('plastic')}>Plastic</button>
            <button type="button" className={material === 'metal' ? 'active' : ''} onClick={() => setMaterial('metal')}>Metal</button>
          </div>
          <div className="revolut-color-swatches">
            <button type="button" className={`revolut-swatch ${color === 'black' ? 'selected' : ''}`} onClick={() => setColor('black')} />
            <button type="button" className={`revolut-swatch gold ${color === 'gold' ? 'selected' : ''}`} onClick={() => setColor('gold')} />
          </div>
        </div>
        <button type="button" className="revolut-btn-primary" onClick={handleGetCard}>Get Metal Gold for S$ 0</button>
      </div>
    </div>
  )
}
