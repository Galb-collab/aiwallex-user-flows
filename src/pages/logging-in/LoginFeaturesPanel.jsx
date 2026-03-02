import React from 'react'
import './LoginFeaturesPanel.css'

export function LoginFeaturesPanel() {
  const features = [
    { icon: '💼', title: 'Business Accounts', desc: 'Streamline your global payments and finances with an all-in-one account.' },
    { icon: '💳', title: 'Spend', desc: 'Manage company spending with corporate cards, built-in expense management, and more.' },
    { icon: '🖥️', title: 'Payments', desc: 'Securely accept payments from customers around the world like a local.' },
    { icon: '📦', title: 'Platform APIs and Embedded Finance', desc: 'Access APIs to programmatically manage your money or to build your own financial products.' },
  ]

  return (
    <div className="login-features-panel">
      {features.map((f) => (
        <div key={f.title} className="login-feature-item">
          <span className="login-feature-icon">{f.icon}</span>
          <div>
            <h3 className="login-feature-title">{f.title}</h3>
            <p className="login-feature-desc">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
