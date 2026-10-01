import { Bot, ChevronDown, EyeOff, Hourglass, MousePointerClick, SearchX, Unplug } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface PainItem {
  icon: LucideIcon
  label: string
  text: string
}

const painItems: PainItem[] = [
  { icon: Unplug, label: 'Ferramentas desconectadas', text: 'Contratou um designer, um gestor de tráfego e um desenvolvedor separados — e ninguém conversa entre si.' },
  { icon: MousePointerClick, label: 'Cliques sem retorno', text: 'Pagou uma campanha que trouxe cliques, mas zero ligações ou mensagens.' },
  { icon: SearchX, label: 'Site invisível', text: 'Seu site existe, mas não aparece no Google nem converte quem chega nele.' },
  { icon: Hourglass, label: 'Espera por uma arte', text: 'Ficou esperando semanas por uma arte simples e o resultado não representou a sua marca.' },
  { icon: Bot, label: 'Bot que frustra', text: 'Tentou automatizar o atendimento, mas o bot só frustrava os clientes.' },
  { icon: EyeOff, label: 'Dinheiro sem rastro', text: 'Não sabe o que está funcionando nem o que está desperdiçando o seu dinheiro.' },
]

const revealBase = 'transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0'

function PainItemCard({ item, index }: { item: PainItem; index: number }) {
  const { ref, visible } = useScrollReveal(0.1)
  const Icon = item.icon

  return (
    <div
      ref={ref}
      className={`h-full ${revealBase} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      // Atraso curto entre os cartões de uma mesma linha (2 colunas no desktop)
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
    >
      <div className="flex h-full items-start gap-4 p-6 md:p-7 rounded-2xl bg-white/[0.03] border border-[#1A3A8F]/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2E5FD9] hover:bg-white/[0.06] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
        <span
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-red-400/30 bg-red-500/10 text-red-300"
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <p
          className="text-[#AFBEDD] text-base leading-relaxed pt-0.5"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="sr-only">{item.label}: </span>
          {item.text}
        </p>
      </div>
    </div>
  )
}

export function PainSection() {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal()
  const { ref: closingRef, visible: closingVisible } = useScrollReveal(0.3)

  return (
    <section className="py-20 md:py-28 px-4 bg-[#07071A] relative overflow-hidden" id="por-que-nos">
      {/* Brilho lateral esquerdo, no meio da altura */}
      <div
        className="absolute -left-40 top-1/2 -translate-y-1/2 w-[28rem] h-[28rem] rounded-full bg-[#2E5FD9]/15 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      {/* Brilho lateral direito, no alto */}
      <div
        className="absolute -right-40 -top-20 w-[26rem] h-[26rem] rounded-full bg-[#1A3A8F]/25 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative">
        {/* Cabeçalho */}
        <div
          ref={titleRef}
          className={`text-center mb-14 md:mb-16 ${revealBase} ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-[#F5C842]" aria-hidden="true" />
            <p
              className="text-[#F5C842] text-xs tracking-[0.3em] font-semibold uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              A dor que você conhece
            </p>
            <span className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-[#F5C842]" aria-hidden="true" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] leading-tight tracking-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Você já se pegou <span className="text-[#5B8CFF]">nessa situação?</span>
          </h2>
          <p
            className="text-[#8A9CC4] mt-5 text-lg leading-relaxed max-w-[36rem] mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            A maioria dos donos de negócio passa por{' '}
            <span className="text-[#F5F0E8] font-medium">pelo menos três desses momentos</span>. Todos têm a mesma raiz.
          </p>
        </div>

        {/* Cartões */}
        <div className="grid gap-4 md:gap-5 sm:grid-cols-2">
          {painItems.map((item, i) => (
            <PainItemCard key={item.label} item={item} index={i} />
          ))}
        </div>

        {/* Fechamento */}
        <div
          ref={closingRef}
          className={`mt-14 md:mt-16 flex flex-col items-center text-center ${revealBase} ${closingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p
            className="text-[#5B8CFF] text-lg md:text-xl font-semibold leading-snug max-w-xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Se você se identificou com qualquer um desses cenários, você está no lugar certo.
          </p>
          <ChevronDown
            className="mt-6 h-7 w-7 text-[#F5C842] animate-bounce motion-reduce:animate-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
