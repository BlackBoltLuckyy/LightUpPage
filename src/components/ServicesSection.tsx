import type { ReactNode } from 'react'
import {
  TrendingUp, Palette, Bot, Globe,
  BarChart3, PenTool, Share2, Plug,
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface Service {
  icon: ReactNode
  title: string
  description: string
}

interface ServicesSectionProps {}

const services: Service[] = [
  { icon: <TrendingUp size={22} />, title: 'Tráfego Pago', description: 'Meta Ads e Google Ads que convertem de verdade — sem achismo, com estratégia.' },
  { icon: <Palette size={22} />, title: 'Design & Branding', description: 'Identidade visual coesa do anúncio ao uniforme, do digital ao impresso.' },
  { icon: <Bot size={22} />, title: 'Automação com IA', description: 'WhatsApp atendendo 24h enquanto você dorme. Qualificação, follow-up e conversão automáticos.' },
  { icon: <Globe size={22} />, title: 'Desenvolvimento Web', description: 'Sites e landing pages rápidas, bonitas e construídas para vender.' },
  { icon: <BarChart3 size={22} />, title: 'Dados & Analytics', description: 'Dashboard em tempo real integrado a todos os canais. Zero achismo.' },
  { icon: <PenTool size={22} />, title: 'Copywriting', description: 'Textos que geram ação em qualquer canal: anúncios, e-mail, redes, site.' },
  { icon: <Share2 size={22} />, title: 'Social Media', description: 'Conteúdo estratégico com identidade consistente e frequência que constrói autoridade.' },
  { icon: <Plug size={22} />, title: 'Integrações', description: 'n8n, Make, CRM — toda a sua operação conectada, automatizada e fluindo.' },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, visible } = useScrollReveal(0.08)
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="group bg-[#0D1B4B] border-l-[3px] border-[#2E5FD9] rounded-lg p-6 h-full flex flex-col gap-4 hover:shadow-[0_0_24px_rgba(46,95,217,0.35)] transition-all duration-300 hover:border-l-[#5B8CFF] cursor-default">
        <div className="text-[#5B8CFF] group-hover:text-[#F5C842] transition-colors duration-300">
          {service.icon}
        </div>
        <div>
          <h3
            className="text-[#F5F0E8] font-bold text-base mb-2"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {service.title}
          </h3>
          <p
            className="text-[#8A9CC4] text-sm leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {service.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function ServicesSection({}: ServicesSectionProps) {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal()

  return (
    <section className="py-20 px-4 bg-[#07071A]" id="servicos">
      <div className="max-w-7xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-14 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p
            className="text-[#F5C842] text-xs tracking-[0.3em] font-semibold mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            O QUE A GENTE FAZ
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F0E8]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            8 frentes. 1 time. 0 retrabalho.
          </h2>
          <p
            className="text-[#8A9CC4] mt-4 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Cada frente é especialista na sua área. Todas se conversam porque dividem o mesmo teto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
