import React, { useState } from 'react'

export function GivingFeedbackModal({ onClose, onSubmit }) {
  const [rating, setRating] = useState(null)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (rating != null) {
      setSubmitted(true)
      setTimeout(() => onSubmit?.(), 800)
    }
  }

  if (submitted) {
    return (
      <div className="discover-airwallex-overlay giving-feedback-overlay" onClick={onClose}>
        <div className="discover-airwallex-modal giving-feedback-modal" onClick={(e) => e.stopPropagation()}>
          <span className="giving-feedback-success-icon">✓</span>
          <h2 className="discover-airwallex-title">Thank you</h2>
          <p className="discover-airwallex-desc">Your feedback helps us improve your experience.</p>
          <button type="button" className="wallet-yield-btn" onClick={onClose}>Done</button>
        </div>
      </div>
    )
  }

  return (
    <div className="discover-airwallex-overlay giving-feedback-overlay" onClick={onClose}>
      <div className="discover-airwallex-modal giving-feedback-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="discover-airwallex-close" onClick={onClose} aria-label="Close">×</button>
        <h2 className="discover-airwallex-title">How was your experience?</h2>
        <p className="discover-airwallex-desc">Your feedback helps us improve.</p>

        <form onSubmit={handleSubmit}>
          <div className="giving-feedback-rating">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`giving-feedback-star ${rating >= value ? 'active' : ''}`}
                onClick={() => setRating(value)}
                aria-label={`${value} star${value > 1 ? 's' : ''}`}
              >
                ★
              </button>
            ))}
          </div>
          <div className="scheduling-transfer-field" style={{ marginTop: 16 }}>
            <label>Additional comments (optional)</label>
            <textarea
              className="giving-feedback-comment"
              placeholder="Tell us more..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
            />
          </div>
          <div className="giving-feedback-actions">
            <button type="submit" className="wallet-yield-btn" disabled={rating == null}>
              Submit feedback
            </button>
            <button type="button" className="wallet-btn-link" onClick={onClose}>
              Maybe later
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
