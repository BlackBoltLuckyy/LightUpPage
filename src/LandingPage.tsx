import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { PainSection } from './components/PainSection'
import { SolutionSection } from './components/SolutionSection'
import { ServicesSection } from './components/ServicesSection'
import { SiteExpress } from './components/SiteExpress'
import { TechStack } from './components/TechStack'
import { SocialProof } from './components/SocialProof'
import { HowItWorks } from './components/HowItWorks'
import { Objections } from './components/Objections'
import { Guarantee } from './components/Guarantee'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'

export function LandingPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Space+Grotesk:wght@400;600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&family=DM+Sans:wght@400;500&family=Kaushan+Script&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background-color: #07071A; color: #F5F0E8; }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <PainSection />
        <SolutionSection />
        <ServicesSection />
        <SiteExpress />
        <TechStack />
        <SocialProof />
        <HowItWorks />
        <Objections />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
