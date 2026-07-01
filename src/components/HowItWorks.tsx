import { useScrollReveal } from '../hooks/useScrollReveal'

interface Step {
  number: string
  title: string
  description: string
}

interface HowItWorksProps {}

const steps: Step[] = [
  {
    number: '01',
    title: 'Conversa',
    description: 'Você nos conta o que precisa, onde está travado e o que já tentou. Sem formulário longo — só uma conversa direta pelo WhatsApp.',
  },
  {
    number: '02',
    title: 'Diagnóstico',
    description: 'Analisamos seu negócio, seu mercado e seus canais atuais. Entregamos um panorama claro do que está faltando e por onde começar.',
  },
  {
    number: '03',
    title: 'Execução',
    description: 'O time integrado entra em campo. Design, tráfego, automação e dados trabalham juntos desde o primeiro dia — sem retrabalho e sem gap de comunicação.',
  },
  {
    number: '04',
    title: 'Resultado',
    description: 'Você acompanha tudo em tempo real. Dashboard, relatórios e acesso direto ao time. Resultados que você vê, não só que a gente te conta.',
  },
]

function StepCard({ step, index }: { step: Step; index: number }) {
  const { ref, visible } = useScrollReveal(0.1)
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="relative flex flex-col gap-4 p-6">
        {/* Step number */}
        <span
          className="text-5xl font-bold text-[#2E5FD9] leading-none"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {step.number}
        </span>

        <div>
          <h3
            className="text-xl font-bold text-[#F5F0E8] mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {step.title}
          </h3>
          <p
            className="text-[#8A9CC4] leading-relaxed text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {step.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function HowItWorks({}: HowItWorksProps) {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal()

  return (
    <section
      className="py-20 px-4 bg-[#0D1B4B] relative overflow-hidden"
      id="como-funciona"
    >
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p
            className="text-[#F5C842] text-xs tracking-[0.3em] font-semibold mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            O PROCESSO
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F0E8]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Do primeiro contato ao resultado.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] border-t-2 border-[#2E5FD9]/30 z-0"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <div key={step.number} className="relative z-10">
              {/* Dot on connector */}
              <div
                className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0D1B4B] border-2 border-[#2E5FD9] z-10"
                aria-hidden="true"
              />
              <StepCard step={step} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
