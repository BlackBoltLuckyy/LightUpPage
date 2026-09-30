import type { ReactNode } from 'react'
import {
  Zap, PenTool, Smartphone, MessageCircle, Search,
  Clock, Rocket, Check,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { LINKS } from '../constants/links'

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

interface TimelineStep {
  when: string
  title: string
  description: string
}

interface SiteExpressProps {}

const features: Feature[] = [
  { icon: <PenTool size={22} />, title: 'Design sob medida', description: 'Layout pensado para o seu negócio, com a sua identidade — nada de template genérico.' },
  { icon: <Smartphone size={22} />, title: '100% responsivo', description: 'Perfeito no celular, que é de onde vem a maior parte do seu público.' },
  { icon: <MessageCircle size={22} />, title: 'Botão de WhatsApp', description: 'Cada visitante a um clique de falar com você. Lead direto na conversa.' },
  { icon: <Search size={22} />, title: 'Pronto para o Google', description: 'Estrutura otimizada para buscas e carregamento rápido desde o primeiro dia.' },
]

const timeline: TimelineStep[] = [
  { when: 'Hora 0', title: 'Briefing', description: 'Uma conversa rápida para entender seu negócio, público e objetivo.' },
  { when: 'Dia 1', title: 'Design + Copy', description: 'Estrutura, textos persuasivos e layout montados e enviados para você ver.' },
  { when: 'Dia 2', title: 'No ar', description: 'Ajustes finais, domínio configurado e site publicado, funcionando.' },
]

const deliverables = [
  'Página completa e funcional',
  'Textos escritos para converter',
  'Integração com WhatsApp e redes',
  'Publicação e configuração de domínio',
]

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const { ref, visible } = useScrollReveal(0.1)
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="group flex items-start gap-4 bg-[#07071A]/60 border border-[#1A3A8F] rounded-xl p-5 hover:border-[#5B8CFF] hover:shadow-[0_0_24px_rgba(46,95,217,0.25)] transition-all duration-300 cursor-default">
        <div className="shrink-0 w-11 h-11 rounded-lg bg-[#2E5FD9]/15 flex items-center justify-center text-[#5B8CFF] group-hover:text-[#F5C842] transition-colors duration-300">
          {feature.icon}
        </div>
        <div className="min-w-0">
          <h3
            className="text-[#F5F0E8] font-bold text-base mb-1"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {feature.title}
          </h3>
          <p
            className="text-[#8A9CC4] text-sm leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  )
}

function TimelineCard() {
  const { ref, visible } = useScrollReveal(0.1)
  return (
    <div
      ref={ref}
      className={`h-full transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: '150ms' }}
    >
      <div className="relative h-full overflow-hidden rounded-2xl border-2 border-[#F5C842]/50 bg-[#07071A] p-6 sm:p-8">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,_#F5C84214_0%,_transparent_70%)]"
          aria-hidden="true"
        />

        <div className="relative">
          <div className="flex items-center justify-between gap-4 mb-8">
            <p
              className="text-[#8A9CC4] text-xs tracking-[0.3em] font-semibold"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              LINHA DO TEMPO
            </p>
            <span
              className="flex items-center gap-1.5 rounded-full border border-[#F5C842]/50 bg-[#F5C842]/10 px-3 py-1 text-[#F5C842] text-xs font-semibold"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <Clock size={13} aria-hidden="true" />
              48h
            </span>
          </div>

          <ol className="flex flex-col">
            {timeline.map((step, i) => {
              const isLast = i === timeline.length - 1
              return (
                <li key={step.when} className={`relative flex gap-4 ${isLast ? '' : 'pb-8'}`}>
                  {/* Dashed connector — stops at the next dot */}
                  {!isLast && (
                    <div
                      className="absolute left-[15px] top-8 bottom-0 border-l-2 border-dashed border-[#2E5FD9]/50"
                      aria-hidden="true"
                    />
                  )}

                  {isLast ? (
                    <div
                      className="relative z-10 shrink-0 w-8 h-8 rounded-full bg-[#F5C842] flex items-center justify-center text-[#07071A] shadow-[0_0_20px_rgba(245,200,66,0.55)]"
                      aria-hidden="true"
                    >
                      <Rocket size={15} />
                    </div>
                  ) : (
                    <div
                      className="relative z-10 shrink-0 w-8 h-8 rounded-full border-2 border-[#2E5FD9] bg-[#07071A]"
                      aria-hidden="true"
                    />
                  )}

                  <div className="min-w-0 pt-0.5">
                    <p
                      className={`text-xs tracking-[0.2em] uppercase font-semibold mb-1 ${isLast ? 'text-[#F5C842]' : 'text-[#5B8CFF]'}`}
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {step.when}
                    </p>
                    <h3
                      className="text-[#F5F0E8] font-bold text-lg mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-[#8A9CC4] text-sm leading-relaxed"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>

          <div className="my-8 border-t border-[#1A3A8F]" aria-hidden="true" />

          <p
            className="text-[#F5F0E8] font-semibold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            O que você recebe:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {deliverables.map(item => (
              <li
                key={item}
                className="flex items-start gap-2 text-[#8A9CC4] text-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Check size={16} className="shrink-0 mt-0.5 text-[#F5C842]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function SiteExpress({}: SiteExpressProps) {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal()
  const { ref: ctaRef, visible: ctaVisible } = useScrollReveal()

  return (
    <section className="py-20 px-4 bg-[#0D1B4B] relative overflow-hidden" id="site-express">
      {/* Ambient glow */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#2E5FD9]/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p
            className="flex items-center justify-center gap-2 text-[#F5C842] text-xs tracking-[0.3em] font-semibold mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <Zap size={14} fill="currentColor" aria-hidden="true" />
            PROJETO SITE EXPRESS
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F0E8]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Seu site no ar em <span className="text-[#F5C842]">2 dias.</span>
          </h2>
          <p
            className="text-[#8A9CC4] mt-4 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Cada dia sem site é um cliente que te procurou e não te encontrou. O Site Express entrega
            uma página completa, bonita e funcionando — para qualquer tipo de negócio — sem meses de espera.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="flex flex-col gap-4">
            {features.map((feature, i) => (
              <FeatureCard key={feature.title} feature={feature} index={i} />
            ))}
          </div>

          <TimelineCard />
        </div>

        <div
          ref={ctaRef}
          className={`mt-14 flex flex-col items-center text-center transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <a
            href={LINKS.whatsappSiteExpress}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#F5C842] hover:bg-[#FFD65C] text-[#07071A] font-bold text-base sm:text-lg px-7 sm:px-8 py-4 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F5C842] focus:ring-offset-2 focus:ring-offset-[#0D1B4B] shadow-[0_0_28px_rgba(245,200,66,0.35)] hover:shadow-[0_0_40px_rgba(245,200,66,0.55)]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            <Zap size={20} fill="currentColor" aria-hidden="true" />
            Quero meu site em 2 dias
          </a>
          <p
            className="text-[#8A9CC4] text-sm mt-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Fale direto com o time pelo WhatsApp — sem formulário.
          </p>
        </div>
      </div>
    </section>
  )
}
