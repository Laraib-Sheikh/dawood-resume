import { useState } from 'react'
import { profile } from '../data/portfolio'
import Section from './Section'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <Section id="contact" title="Get In Touch">
      <div className="contact-grid">
        <div className="card contact-info">
          <h3>Let's work together</h3>
          <p>
            Open to AI engineering roles, research collaborations, and full-stack
            projects. Reach out anytime.
          </p>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <span className="contact-icon">✉</span>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="contact-link">
              <span className="contact-icon">📞</span>
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <span className="contact-icon">in</span>
              LinkedIn
            </a>
          </div>
        </div>

        <form className="card contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
            />
          </label>
          <label>
            Message
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tell me about your project..."
            />
          </label>
          <button type="submit" className="btn">
            {submitted ? 'Opening email...' : 'Send Message'}
          </button>
        </form>
      </div>
    </Section>
  )
}
