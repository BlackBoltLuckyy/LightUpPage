import { MessageCircle } from 'lucide-react'
import { EdisonBulb } from './EdisonBulb'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { LINKS } from '../constants/links'

interface FinalCTAProps {}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

export function FinalCTA({}: FinalCTAProps) {
  const { ref, visible } = useScrollReveal(0.1)

  return (
    <section
      className="relative py-28 px-4 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 100% 100% at 50% 100%, #1A3A8F 0%, #07071A 60%)',
        backgroundColor: '#07071A',
      }}
    >
      {/* Top ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#F5C842]/4 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={`relative max-w-3xl mx-auto flex flex-col items-center gap-8 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        {/* Bulb */}
        <EdisonBulb size={100} animated />

        {/* Tagline */}
        <p
          className="text-[#F5C842] text-xs tracking-[0.3em] font-semibold"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          ILUMINANDO SEUS SONHOS.
        </p>

        {/* Headlines */}
        <div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F0E8] leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Sua marca tem potencial.
          </h2>
          <p
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#5B8CFF' }}
          >
            A gente sabe acender.
          </p>
        </div>

        {/* Sub copy */}
        <p
          className="text-[#8A9CC4] text-lg max-w-xl leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Chega de pagar por pedaços. Traga o seu negócio para uma estratégia completa —
          design, tráfego, IA e dados trabalhando juntos pelo seu resultado.
        </p>

        {/* Primary CTA */}
        <a
          href={LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-[#2E5FD9] hover:bg-[#1A3A8F] text-white font-bold px-10 py-5 rounded-xl text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] shadow-[0_0_40px_rgba(46,95,217,0.5)] hover:shadow-[0_0_60px_rgba(46,95,217,0.7)]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <MessageCircle size={22} />
          Vamos começar pelo WhatsApp
        </a>

        {/* Secondary contacts */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pt-2">
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga a Light Up no Instagram"
            className="flex items-center gap-2 text-[#8A9CC4] hover:text-[#5B8CFF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] rounded"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <InstagramIcon />
            @lightup.mkt
          </a>

          <span className="text-[#1A3A8F] hidden sm:block">·</span>

          <a
            href={`mailto:${LINKS.email}`}
            className="text-[#8A9CC4] hover:text-[#5B8CFF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] rounded text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {LINKS.email}
          </a>

          <span className="text-[#1A3A8F] hidden sm:block">·</span>

          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A9CC4] hover:text-[#5B8CFF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] rounded text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {LINKS.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
