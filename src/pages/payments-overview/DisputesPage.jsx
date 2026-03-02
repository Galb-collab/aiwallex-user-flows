import React, { useState } from 'react'
import '../DisputesPage.css'

export function DisputesPage() {
  const [bannerDismissed, setBannerDismissed] = useState(false)
  const [bannerSlide, setBannerSlide] = useState(0)
  const banners = [
    {
      title: 'Understand disputes and what you can do',
      body: 'A dispute starts when your consumer questions a payment with their issuing bank. We are here to help you to understand various stages of disputes, available actions for you and their financial impact.',
      link: 'Learn more',
    },
    {
      title: 'Understand dispute reason codes',
      body: 'Disputes are raised due to various reasons, this guide helps you to understand various categories of response codes and their meaning for each card scheme.',
      link: 'Learn more',
    },
  ]

  return (
    <div className="payments-overview-content disputes-page">
      <div className="disputes-header-row">
        <h1 className="po-page-title disputes-title">Disputes</h1>
        <a href="#how-disputes-work" className="disputes-how-link">
          <span aria-hidden>ℹ️</span> How do disputes work?
        </a>
      </div>

      {!bannerDismissed && (
        <div className="disputes-banner">
          <button type="button" className="disputes-banner-close" onClick={() => setBannerDismissed(true)} aria-label="Close">×</button>
          <div className="disputes-banner-icon">📄🔍⚠️</div>
          <div className="disputes-banner-content">
            <h3 className="disputes-banner-title">{banners[bannerSlide].title}</h3>
            <p className="disputes-banner-body">{banners[bannerSlide].body}</p>
            <a href="#learn" className="disputes-banner-link">{banners[bannerSlide].link}</a>
          </div>
          <div className="disputes-banner-nav">
            <button type="button" aria-label="Previous" onClick={() => setBannerSlide((s) => (s === 0 ? banners.length - 1 : s - 1))}>‹</button>
            <span className="disputes-banner-dots">
              {banners.map((_, i) => (
                <button key={i} type="button" className={i === bannerSlide ? 'active' : ''} aria-label={`Slide ${i + 1}`} onClick={() => setBannerSlide(i)} />
              ))}
            </span>
            <button type="button" aria-label="Next" onClick={() => setBannerSlide((s) => (s === banners.length - 1 ? 0 : s + 1))}>›</button>
          </div>
        </div>
      )}

      <div className="po-toolbar disputes-toolbar">
        <div className="po-toolbar-row">
          <input
            type="search"
            className="po-search"
            placeholder="Search Order ID, Customer ID, Payment ID"
            style={{ flex: 1, maxWidth: 360 }}
          />
          <button type="button" className="po-export">Export</button>
        </div>
        <div className="po-filters-row">
          <select className="po-filter" aria-label="Account"><option>Account</option></select>
          <select className="po-filter" aria-label="Reason"><option>Reason</option></select>
          <select className="po-filter" aria-label="Stage"><option>Stage</option></select>
          <select className="po-filter" aria-label="Status"><option>Status</option></select>
          <select className="po-filter" aria-label="Payment methods"><option>Payment methods</option></select>
          <select className="po-filter" aria-label="Transaction type"><option>Transaction type</option></select>
        </div>
        <div className="po-filters-row">
          <select className="po-filter" aria-label="Response Due"><option>Response Due</option></select>
          <input type="date" className="po-filter po-date" placeholder="Date from" aria-label="Date from" />
          <input type="date" className="po-filter po-date" placeholder="to" aria-label="Date to" />
        </div>
      </div>

      <div className="po-table-wrap">
        <table className="po-table">
          <thead>
            <tr>
              <th><input type="checkbox" aria-label="Select all" /></th>
              <th>ACCOUNT</th>
              <th>DISPUTE AMOUNT</th>
              <th>REASON</th>
              <th>STAGE</th>
              <th>STATUS</th>
              <th>ORDER ID</th>
              <th><button type="button" className="po-row-menu" aria-label="Columns">⚙</button></th>
            </tr>
          </thead>
          <tbody>
            <tr className="disputes-empty-row">
              <td colSpan={8}>
                <div className="disputes-empty">
                  <div className="disputes-empty-icon">📄🔍⚠️</div>
                  <p className="disputes-empty-text">No disputes found. Try changing your search items or filters.</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
