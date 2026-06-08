import { profile } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        © {year} <strong>{profile.shortName}</strong> · Senior AI Engineer
      </p>
      <p className="footer-sub">Built with React & Vite</p>
    </footer>
  )
}
