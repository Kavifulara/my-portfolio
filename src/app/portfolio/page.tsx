import PortfolioHero from '@/components/portfolio/PortfolioHero'
import AboutMe from '@/components/portfolio/AboutMe'
import Skills from '@/components/portfolio/Skills'
import Projects from '@/components/portfolio/Projects'
import Contact from '@/components/portfolio/Contact'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PortfolioHero />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
} 