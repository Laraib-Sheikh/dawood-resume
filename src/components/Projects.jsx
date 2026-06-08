import { useState } from 'react'
import { projects } from '../data/portfolio'
import Section from './Section'
import './Projects.css'

const filters = ['All', ...new Set(projects.flatMap((p) => p.tags))]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter))

  return (
    <Section id="projects" title="Projects">
      <div className="project-filters">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((project) => (
          <article key={project.title} className="card project-card">
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="stack-item">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
