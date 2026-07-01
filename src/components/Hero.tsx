import { MessageCircle, ChevronDown } from 'lucide-react'
import { EdisonBulb } from './EdisonBulb'
import { LINKS } from '../constants/links'

interface HeroProps {}

const badges = [
  'Meta Ads ✓',
  'IA no WhatsApp ✓',
  'Design ✓',
  'Dados em tempo real ✓',
]

export function Hero({}: HeroProps) {
  return (
    <>
      <style>{`
        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-badge { animation: none !important; }
          .hero-fade { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 65% 40%, #1A3A8F22 0%, #07071A 70%)',
          backgroundColor: '#07071A',
        }}
      >
        {/* Background orbs */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#1A3A8F]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-[#2E5FD9]/8 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div className="flex flex-col gap-6">
              {/* Tagline */}
              <p
                className="hero-fade text-[#F5C842] text-xs tracking-[0.3em] font-semibold"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  animation: 'fade-in-up 0.6s ease both',
                }}
              >
                ILUMINANDO SEUS SONHOS.
              </p>

              {/* Headline */}
              <div
                className="hero-fade"
                style={{ animation: 'fade-in-up 0.7s ease 0.1s both' }}
              >
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#F5F0E8' }}
                >
                  Sua marca merece<br />
                  mais que estética.
                </h1>
                <p
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mt-1"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", color: '#5B8CFF' }}
                >
                  Merece resultado.
                </p>
              </div>

              {/* Sub-headline */}
              <p
                className="hero-fade text-[#8A9CC4] text-lg leading-relaxed max-w-xl"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  animation: 'fade-in-up 0.7s ease 0.2s both',
                }}
              >
                A Light Up é a agência que integra design, automação com IA, tráfego pago e
                desenvolvimento sob o mesmo teto — para você parar de pagar por pedaços e começar
                a ter uma estratégia de verdade.
              </p>

              {/* CTA buttons */}
              <div
                className="hero-fade flex flex-col sm:flex-row gap-4"
                style={{ animation: 'fade-in-up 0.7s ease 0.3s both' }}
              >
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#2E5FD9] hover:bg-[#1A3A8F] text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] shadow-[0_0_30px_rgba(46,95,217,0.4)] hover:shadow-[0_0_48px_rgba(46,95,217,0.6)] text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  <MessageCircle size={18} />
                  Quero iluminar minha marca
                </a>
                <a
                  href="#como-funciona"
                  className="flex items-center justify-center gap-2 border border-[#5B8CFF]/50 text-[#5B8CFF] hover:bg-[#5B8CFF]/10 font-semibold px-7 py-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] text-base"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Como funciona
                  <ChevronDown size={16} />
                </a>
              </div>

              {/* Micro copy */}
              <p
                className="hero-fade text-[#8A9CC4]/60 text-sm"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  animation: 'fade-in-up 0.7s ease 0.4s both',
                }}
              >
                Atendimento personalizado · Resposta em até 24h · Todo o Brasil
              </p>

              {/* Floating badges */}
              <div
                className="hero-fade flex flex-wrap gap-3 mt-2"
                style={{ animation: 'fade-in-up 0.7s ease 0.5s both' }}
              >
                {badges.map((badge, i) => (
                  <span
                    key={badge}
                    className="hero-badge text-[#5B8CFF] bg-[#0D1B4B] border border-[#2E5FD9]/50 px-3 py-1.5 rounded-md text-xs font-medium"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      animation: `float-badge ${2.5 + i * 0.4}s ease-in-out ${i * 0.2}s infinite`,
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — Edison Bulb */}
            <div className="flex justify-center lg:justify-end items-center relative">
              {/* Large ambient glow behind bulb */}
              <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                aria-hidden="true"
              >
                <div className="w-80 h-80 rounded-full bg-[#F5C842]/5 blur-3xl" />
                <div className="absolute w-48 h-48 rounded-full bg-[#1A3A8F]/25 blur-2xl" />
              </div>
              <EdisonBulb size={280} animated className="relative z-10 drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
