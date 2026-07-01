import { useScrollReveal } from '../hooks/useScrollReveal'

interface PainItem {
  icon: string
  text: string
}

interface PainSectionProps {}

const painItems: PainItem[] = [
  { icon: '✗', text: 'Contratou um designer, um gestor de tráfego e um desenvolvedor separados — e ninguém conversa entre si.' },
  { icon: '✗', text: 'Pagou uma campanha que trouxe cliques, mas zero ligações ou mensagens.' },
  { icon: '✗', text: 'Seu site existe, mas não aparece no Google nem converte quem chega nele.' },
  { icon: '✗', text: 'Ficou esperando semanas por uma arte simples e o resultado não representou a sua marca.' },
  { icon: '✗', text: 'Tentou automatizar o atendimento, mas o bot só frustrava os clientes.' },
  { icon: '✗', text: 'Não sabe o que está funcionando nem o que está desperdiçando o seu dinheiro.' },
]

function PainItemCard({ item, index }: { item: PainItem; index: number }) {
  const { ref, visible } = useScrollReveal(0.1)

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-4 p-5 rounded-xl bg-[#0D1B4B]/40 border border-[#1A3A8F]/30 hover:border-[#1A3A8F]/60 transition-colors duration-300">
        <span className="text-red-400/70 text-xl font-bold flex-shrink-0 mt-0.5">{item.icon}</span>
        <p
          className="text-[#8A9CC4] text-base leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {item.text}
        </p>
      </div>
    </div>
  )
}

export function PainSection({}: PainSectionProps) {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal()

  return (
    <section className="py-20 px-4 bg-[#07071A] relative overflow-hidden" id="por-que-nos">
      {/* Ambient glow left */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#1A3A8F]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative">
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p
            className="text-[#F5C842] text-xs tracking-[0.3em] font-semibold mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            A DOR QUE VOCÊ CONHECE
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F0E8]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Você já se pegou nessa situação?
          </h2>
          <p
            className="text-[#8A9CC4] mt-4 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A maioria dos donos de negócio passa por pelo menos três desses momentos. Todos têm a mesma raiz.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {painItems.map((item, i) => (
            <PainItemCard key={i} item={item} index={i} />
          ))}
        </div>

        <div
          className="mt-12 text-center"
        >
          <p
            className="text-[#5B8CFF] text-base font-semibold"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Se você se identificou com qualquer um desses cenários, você está no lugar certo.
          </p>
        </div>
      </div>
    </section>
  )
}
