import { useScrollReveal } from '../hooks/useScrollReveal'

interface Stat {
  value: string
  label: string
  suffix?: string
}

interface Testimonial {
  name: string
  company: string
  text: string
}

interface SocialProofProps {}

const stats: Stat[] = [
  { value: '8',    label: 'serviços integrados' },
  { value: '100%', label: 'atendimento online' },
  { value: '24h',  label: 'atendimento com IA' },
  { value: '1',    label: 'time, tudo integrado' },
]

const testimonials: Testimonial[] = [
  {
    name: 'Carlos M.',
    company: 'Rede de clínicas',
    text: 'Antes eu tinha um gestor de tráfego, um designer e um desenvolvedor separados. Ninguém conversava. Hoje a Light Up centraliza tudo e o resultado é outro nível.',
  },
  {
    name: 'Fernanda R.',
    company: 'E-commerce de moda',
    text: 'A automação no WhatsApp mudou completamente o meu atendimento. Clientes respondem de madrugada e eu acordo com conversas já avançadas no funil.',
  },
  {
    name: 'Roberto S.',
    company: 'Construtora regional',
    text: 'Dashboard em tempo real foi divisor de águas. Parei de confiar no feeling e passei a tomar decisão com dado. Investimento em tráfego reduziu e o retorno dobrou.',
  },
]

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="#F5C842" aria-hidden="true">
      <path d="M8 1l1.8 3.6L14 5.3l-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7z" />
    </svg>
  )
}

export function SocialProof({}: SocialProofProps) {
  const { ref: statsRef, visible: statsVisible } = useScrollReveal()
  const { ref: testimonialsRef, visible: testimonialsVisible } = useScrollReveal(0.1)

  return (
    <section className="py-20 px-4 bg-[#07071A]">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div
          ref={statsRef}
          className={`transition-all duration-700 mb-20 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p
            className="text-center text-[#F5C842] text-xs tracking-[0.3em] font-semibold mb-10"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            NÚMEROS QUE IMPORTAM
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p
                  className="text-5xl md:text-6xl font-bold text-[#5B8CFF] mb-2"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[#8A9CC4] text-sm"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div
          ref={testimonialsRef}
          className={`transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p
            className="text-center text-[#F5C842] text-xs tracking-[0.3em] font-semibold mb-10"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            O QUE NOSSOS CLIENTES DIZEM
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-[#0D1B4B] border border-[#1A3A8F]/50 rounded-xl p-6 flex flex-col gap-4"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => <StarIcon key={s} />)}
                </div>

                {/* Quote */}
                <p
                  className="text-[#8A9CC4] text-sm leading-relaxed flex-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  "{t.text}"
                </p>

                {/* Author */}
                <div>
                  <p
                    className="text-[#F5F0E8] text-sm font-semibold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[#5B8CFF] text-xs"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {t.company}
                  </p>
                </div>

                {/* TODO: substituir por depoimento real antes de publicar */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
