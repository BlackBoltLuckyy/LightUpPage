import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface Objection {
  question: string
  answer: string
}

interface ObjectionsProps {}

const objections: Objection[] = [
  {
    question: 'Já contratei agência antes e não funcionou. Por que seria diferente agora?',
    answer: 'A grande diferença está na integração. Na maioria das agências, você contrata um serviço isolado — tráfego por um lado, design por outro. Aqui, tudo funciona em conjunto: a identidade visual alimenta o criativo do anúncio, o anúncio leva a uma landing page construída para converter, e o atendimento está automatizado para não perder nenhum lead. É uma estratégia, não um serviço avulso.',
  },
  {
    question: 'Tenho um negócio pequeno. Isso é para mim?',
    answer: 'Sim. Trabalhamos com negócios em crescimento que querem parar de crescer no improviso. Não é sobre o tamanho atual — é sobre a decisão de tratar o marketing com seriedade. Se você fatura entre R$ 10k e R$ 300k/mês e quer escalar, a nossa abordagem faz sentido para você.',
  },
  {
    question: 'Quanto tempo até ver resultado?',
    answer: 'Depende do canal. Tráfego pago pode gerar leads em dias. Branding e posicionamento levam de 60 a 90 dias para se consolidar. Automação entra em produção em até 2 semanas. O que garantimos é que você acompanha tudo em tempo real — sem "espera para ver".',
  },
  {
    question: 'Preciso assinar contrato longo?',
    answer: 'Não exigimos fidelidade mínima de 12 meses. Trabalhamos com trimestres renováveis porque confiamos que o resultado faz o cliente querer continuar. Se em 60 dias você não enxergar evolução, nós refazemos sem custo extra.',
  },
  {
    question: 'Vou ter que ficar gerenciando tudo isso?',
    answer: 'Pelo contrário. A Light Up existe para tirar esse peso do seu ombro. Você tem um ponto de contato único que coordena todas as frentes. Você recebe relatórios, acompanha o dashboard e decide junto com a gente — mas quem executa e se preocupa com os detalhes somos nós.',
  },
]

function ObjectionItem({ objection }: { objection: Objection; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-[#1A3A8F]/40 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[#1A3A8F]/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] focus:ring-inset"
      >
        <span
          className="text-[#F5F0E8] font-semibold text-base"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {objection.question}
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
          {objection.answer}
        </p>
      </div>
    </div>
  )
}

export function Objections({}: ObjectionsProps) {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="py-20 px-4 bg-[#0D1B4B]">
      <div className="max-w-3xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p
            className="text-center text-[#F5C842] text-xs tracking-[0.3em] font-semibold mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            OBJEÇÕES COMUNS
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#F5F0E8] text-center mb-12"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            A gente já ouviu você.
          </h2>

          <div className="flex flex-col gap-3">
            {objections.map((obj, i) => (
              <ObjectionItem key={i} objection={obj} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
