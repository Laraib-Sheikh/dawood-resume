import { useState } from 'react'
import { skillCategories } from '../data/portfolio'
import Section from './Section'
import './Skills.css'

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Section id="skills" title="Skills">
      <div className="skills-tabs">
        {skillCategories.map((cat, i) => (
          <button
            key={cat.title}
            type="button"
            className={`skill-tab ${activeTab === i ? 'active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="card skills-panel">
        <div className="skills-list" key={activeTab}>
          {skillCategories[activeTab].skills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="skills-all">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="card skill-category-card">
            <h3>{cat.title}</h3>
            <div className="skills-list">
              {cat.skills.map((skill) => (
                <span key={skill} className="skill-chip skill-chip--sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
