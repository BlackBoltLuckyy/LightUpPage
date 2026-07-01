import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {}

const faqs: FAQItem[] = [
  {
    question: 'Quanto custa trabalhar com a Light Up?',
    answer: 'Os investimentos variam conforme o escopo — tráfego, design, automação, desenvolvimento. Fazemos uma proposta personalizada após entender o seu negócio. Agende uma conversa e a gente apresenta opções que cabem na sua realidade.',
  },
  {
    question: 'Vocês atendem empresas fora de São Paulo?',
    answer: 'Sim. Atuamos 100% online e atendemos clientes em todo o Brasil. Nossa equipe é distribuída e toda a comunicação, entrega e relatórios acontecem de forma digital.',
  },
  {
    question: 'Como funciona o onboarding?',
    answer: 'Após a assinatura, realizamos um briefing completo com você. Levantamos todos os ativos existentes (logo, materiais, senhas de anúncios, acessos), definimos metas e alinhamos o calendário das entregas da primeira fase.',
  },
  {
    question: 'Consigo ter acesso a relatórios e campanhas?',
    answer: 'Sempre. Você tem acesso ao dashboard em tempo real e recebe relatórios periódicos. Nada acontece nas suas campanhas ou canais sem você ser informado primeiro.',
  },
  {
    question: 'A automação de WhatsApp funciona para qualquer segmento?',
    answer: 'Funciona para a grande maioria dos negócios B2C e B2B que utilizam o WhatsApp como canal de atendimento ou vendas. Fazemos a configuração conforme o seu funil e os fluxos específicos do seu negócio.',
  },
  {
    question: 'Quanto tempo leva para lançar minha primeira campanha?',
    answer: 'Para tráfego pago, a primeira campanha costuma ir ao ar entre 7 e 14 dias após o onboarding, dependendo da necessidade de novos criativos ou ajuste de página de destino.',
  },
  {
    question: 'Vocês trabalham com e-commerce?',
    answer: 'Sim. Temos experiência com campanhas de performance para e-commerce, incluindo remarketing, catálogo dinâmico, campanhas de conversão e estratégias de retenção via automação.',
  },
  {
    question: 'Como entro em contato para começar?',
    answer: 'Pelo WhatsApp mesmo — é o caminho mais rápido. Clique em "Falar com a equipe" aqui no site. Um membro da equipe responde em até 24h e já agenda a conversa inicial sem compromisso.',
  },
]

function FAQItemComponent({ item }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-[#1A3A8F]/30 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#0D1B4B]/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] focus:ring-inset"
      >
        <span
          className="text-[#F5F0E8] font-medium text-base"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {item.question}
        </span>
        <span
          className="text-[#5B8CFF] text-xl font-bold flex-shrink-0 transition-transform duration-300"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? '24rem' : '0' }}
      >
        <p
          className="px-5 pb-5 text-[#8A9CC4] leading-relaxed text-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export function FAQ({}: FAQProps) {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="py-20 px-4 bg-[#07071A]" id="faq">
      <div className="max-w-3xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p
            className="text-center text-[#F5C842] text-xs tracking-[0.3em] font-semibold mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            PERGUNTAS FREQUENTES
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F0E8] text-center mb-12"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ainda tem dúvida?
          </h2>

          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <FAQItemComponent key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
