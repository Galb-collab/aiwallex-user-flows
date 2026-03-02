import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './ProfileDropdown.css'

export function ProfileDropdown({ email = 'samlee@content-mobbin.com' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    if (open) document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [open])

  const navigate = useNavigate()

  const handleLogOut = () => {
    setOpen(false)
    navigate('/')
  }

  return (
    <div className="profile-dropdown-wrap" ref={ref}>
      <button
        type="button"
        className="profile-dropdown-trigger"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="user-email">{email}</span>
        <div className="user-avatar" />
      </button>

      {open && (
        <div className="profile-dropdown-menu">
          <Link to="/flow/profile" className="profile-dropdown-item" onClick={() => setOpen(false)}>
            Profile
          </Link>
          <Link to="/flow/profile/security" className="profile-dropdown-item" onClick={() => setOpen(false)}>
            Security
          </Link>
          <Link to="/flow/profile/adding-an-assistant" className="profile-dropdown-item" onClick={() => setOpen(false)}>
            Adding an assistant
          </Link>
          <Link to="/flow/profile/updating-notifications" className="profile-dropdown-item" onClick={() => setOpen(false)}>
            Updating notifications
          </Link>
          <div className="profile-dropdown-divider" />
          <button type="button" className="profile-dropdown-item profile-dropdown-item-logout" onClick={handleLogOut}>
            Log out
          </button>
        </div>
      )}
    </div>
  )
}
