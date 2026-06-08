import { profile, typingPhrases } from '../data/portfolio'
import { useTypingEffect } from '../hooks/useTypingEffect'
import './Hero.css'

export default function Hero() {
  const typedText = useTypingEffect(typingPhrases)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header id="hero" className="hero">
      <div className="hero-glow hero-glow--top" />
      <div className="hero-glow hero-glow--bottom" />

      <p className="hero-greeting">Hello, I'm</p>
      <h1 className="hero-name">{profile.shortName}</h1>
      <h2 className="hero-title">{profile.title}</h2>

      <p className="hero-typing">
        {typedText}
        <span className="cursor">|</span>
      </p>

      <div className="hero-actions">
        <button type="button" className="btn" onClick={() => scrollTo('projects')}>
          View My Work
        </button>
        <a href="/Dawood_Rizwan_Resume.pdf" download className="btn btn-outline">
          Download Resume
        </a>
        <button type="button" className="btn btn-outline" onClick={() => scrollTo('contact')}>
          Get In Touch
        </button>
      </div>

      <div className="hero-stats">
        <div className="stat">
          <span className="stat-value">4+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat">
          <span className="stat-value">5+</span>
          <span className="stat-label">Projects</span>
        </div>
        <div className="stat">
          <span className="stat-value">2</span>
          <span className="stat-label">Publications</span>
        </div>
      </div>

      <button
        type="button"
        className="scroll-hint"
        aria-label="Scroll to about"
        onClick={() => scrollTo('about')}
      >
        <span className="scroll-dot" />
      </button>
    </header>
  )
}
