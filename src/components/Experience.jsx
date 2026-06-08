import { useState } from 'react'
import { experience } from '../data/portfolio'
import Section from './Section'
import './Experience.css'

export default function Experience() {
  const [expanded, setExpanded] = useState(0)

  return (
    <Section id="experience" title="Experience">
      <div className="timeline">
        {experience.map((job, i) => (
          <article
            key={job.role + job.company}
            className={`timeline-item card ${expanded === i ? 'expanded' : ''}`}
            onClick={() => setExpanded(expanded === i ? -1 : i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setExpanded(expanded === i ? -1 : i)
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={expanded === i}
          >
            <div className="timeline-marker" />
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <div className="timeline-meta">
                  <span className="period">{job.period}</span>
                  <span className="location">{job.location}</span>
                </div>
              </div>
              <ul className={`timeline-details ${expanded === i ? 'show' : ''}`}>
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <span className="expand-hint">
                {expanded === i ? 'Click to collapse' : 'Click to expand'}
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
