import { education } from '../data/portfolio'
import Section from './Section'

export default function Education() {
  return (
    <Section id="education" title="Education & Fellowship">
      <div className="grid">
        {education.map((item) => (
          <div key={item.degree} className="card">
            <h3>{item.degree}</h3>
            <p style={{ color: 'var(--accent)', marginTop: '0.5rem' }}>{item.school}</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              {item.period} · {item.location}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
