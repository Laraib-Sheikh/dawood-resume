import { profile } from '../data/portfolio'
import Section from './Section'
import './About.css'

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="about-grid">
        <div className="card about-card">
          <p>{profile.summary}</p>
        </div>
        <div className="card about-info">
          <h3>Quick Info</h3>
          <ul>
            <li>
              <span className="label">Full Name</span>
              <span>{profile.name}</span>
            </li>
            <li>
              <span className="label">Role</span>
              <span>{profile.title}</span>
            </li>
            <li>
              <span className="label">Location</span>
              <span>{profile.location}</span>
            </li>
            <li>
              <span className="label">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span className="label">Phone</span>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
