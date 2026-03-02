import React from 'react'
import { useBusinessProfile } from '../../context/BusinessProfileContext'

const SAMPLE = "We are an offline retail business, selling women's beauty products such as lip balms and eyeshadow palettes."

export function ProductsOrServices() {
  const { data, updateData, nextStep, prevStep } = useBusinessProfile()

  return (
    <div className="business-details-form">
      <h1 className="business-details-step-title">Describe the products or services you sell</h1>
      <p className="business-details-step-desc">
        Describe your products, including items sold on eCommerce marketplace platforms such as Amazon or Shopify, offline retail store offerings, and any services provided to customers.
      </p>
      <div className="form-group">
        <label>Sample</label>
        <div className="sample-box">
          <span className="sample-icon">💡</span>
          <span>Sample product description: {SAMPLE}</span>
        </div>
      </div>
      <div className="form-group">
        <label>Your description</label>
        <textarea
          value={data.productsDescription}
          onChange={(e) => updateData({ productsDescription: e.target.value })}
          placeholder="Describe your products or services..."
          rows={5}
          className="form-textarea"
        />
      </div>
      <div className="form-actions">
        <button type="button" className="btn-back" onClick={prevStep}>Back</button>
        <button type="button" className="btn-save-next" onClick={nextStep}>Save & Next</button>
      </div>
    </div>
  )
}
