import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Section({ id, title, children, className = '' }) {
  const [ref, visible] = useScrollReveal()

  return (
    <section
      id={id}
      ref={ref}
      className={`fade-section ${visible ? 'visible' : ''} ${className}`}
    >
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  )
}
