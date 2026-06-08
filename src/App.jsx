import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Research from './components/Research'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { navLinks } from './data/portfolio'
import { useActiveSection } from './hooks/useActiveSection'

export default function App() {
  const activeSection = useActiveSection(navLinks.map((l) => l.id))

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Research />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
