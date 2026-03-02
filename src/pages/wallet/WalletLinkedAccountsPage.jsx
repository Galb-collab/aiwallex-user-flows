import React from 'react'

export function WalletLinkedAccountsPage() {
  return (
    <div className="wallet-content">
      <div className="wallet-linked-empty">
        <div className="wallet-linked-icon">🚀💰🏆</div>
        <h2>Link your external bank account</h2>
        <p>
          Link your external bank account now to easily add funds to Airwallex. All your linked accounts will be listed here. Enabling direct debit allows for free and instant transfers without needing to leave Airwallex.
        </p>
        <button type="button" className="wallet-linked-btn">Link external bank account</button>
      </div>
    </div>
  )
}
