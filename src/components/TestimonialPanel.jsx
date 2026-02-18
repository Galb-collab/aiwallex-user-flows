import React from 'react'
import './TestimonialPanel.css'

export function TestimonialPanel() {
  return (
    <div className="testimonial-panel">
      <div className="testimonial-brand">bowtie</div>
      <div className="testimonial-image">
        <div className="testimonial-image-placeholder" />
      </div>
      <blockquote className="testimonial-quote">
        "AIwallex's WebApp allows us to control and set different spending limits for all employees, and manage everyone's spending on the same platform, which has been incredibly convenient."
      </blockquote>
      <p className="testimonial-attribution">
        <strong>Gabriel Kung</strong><br />
        Chief Commercial Officer of Bowtie
      </p>
    </div>
  )
}
