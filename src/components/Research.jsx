import { publications, certifications } from '../data/portfolio'
import Section from './Section'
import './Research.css'

export default function Research() {
  return (
    <Section id="research" title="Publications & Certifications">
      <div className="research-grid">
        <div>
          <h3 className="research-subtitle">Publications</h3>
          <div className="research-list">
            {publications.map((pub) => (
              <div key={pub.title} className="card research-card">
                <h4>{pub.title}</h4>
                <p className="venue">{pub.venue}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="research-subtitle">Certifications</h3>
          <div className="cert-list">
            {certifications.map((cert) => (
              <div key={cert} className="card cert-card">
                <span className="cert-icon">✓</span>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
