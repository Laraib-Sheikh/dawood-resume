import { useState } from 'react'
import { navLinks } from '../data/portfolio'
import './Navbar.css'

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar ${open ? 'open' : ''}`}>
      <div className="nav-inner">
        <button type="button" className="nav-logo" onClick={() => scrollTo('hero')}>
          <span className="logo-accent">D</span>awood
        </button>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className="nav-links">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={activeSection === id ? 'active' : ''}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
