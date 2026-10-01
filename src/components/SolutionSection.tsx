import { AppWindow, Compass, Palette, TrendingUp, type LucideIcon } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

interface SolutionSectionProps {}

interface Pillar {
  id: string
  label: string
  description: string
  Icon: LucideIcon
  x: number
  y: number
  compact?: boolean
}

// Posições em % do diagrama (centro em 50,50)
const NODE_OFFSET = 37
const NODE_SIZE = 23
const SEAL_SIZE = 27

const pillars: Pillar[] = [
  { id: 'trafego',      label: 'Tráfego',      Icon: TrendingUp, x: 50,               y: 50 - NODE_OFFSET, description: 'Campanhas que levam o público certo até o seu site.' },
  { id: 'criativos',    label: 'Criativos',    Icon: Palette,    x: 50 + NODE_OFFSET, y: 50,               description: 'Peças que chamam atenção e dão força às campanhas.' },
  { id: 'consultorias', label: 'Consultorias', Icon: Compass,    x: 50,               y: 50 + NODE_OFFSET, description: 'Direção estratégica para decidir com clareza o próximo passo.', compact: true },
  { id: 'sites',        label: 'Sites',        Icon: AppWindow,  x: 50 - NODE_OFFSET, y: 50,               description: 'Páginas rápidas que transformam visitas em contatos.' },
]

// Linha do centro até a borda de cada círculo
function connectionLine({ x, y }: Pillar) {
  const dx = x - 50
  const dy = y - 50
  const dist = Math.hypot(dx, dy)
  const ux = dx / dist
  const uy = dy / dist
  const start = SEAL_SIZE / 2 + 1
  const end = dist - NODE_SIZE / 2 - 1
  return { x1: 50 + ux * start, y1: 50 + uy * start, x2: 50 + ux * end, y2: 50 + uy * end }
}

export function SolutionSection({}: SolutionSectionProps) {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal()
  const { ref: diagramRef, visible: diagramVisible } = useScrollReveal(0.2)
  const { ref: cardsRef, visible: cardsVisible } = useScrollReveal(0.15)

  return (
    <>
      <style>{`
        .lu-diagram { container-type: inline-size; }
        @keyframes lu-spin { to { transform: rotate(360deg); } }
        @keyframes lu-seal-glow {
          0%, 100% { box-shadow: 0 0 24px rgba(245, 200, 66, 0.25), 0 0 60px rgba(245, 200, 66, 0.10), inset 0 0 20px rgba(245, 200, 66, 0.10); }
          50%      { box-shadow: 0 0 40px rgba(245, 200, 66, 0.45), 0 0 100px rgba(245, 200, 66, 0.18), inset 0 0 28px rgba(245, 200, 66, 0.18); }
        }
        @keyframes lu-line-draw {
          from { stroke-dashoffset: 20; }
          to   { stroke-dashoffset: 0; }
        }
        .lu-ring-spin { animation: lu-spin 60s linear infinite; }
        .lu-seal { animation: lu-seal-glow 4s ease-in-out infinite; }
        .lu-node-label { font-size: 2.7cqw; }
        .lu-node-label--compact { font-size: 2.25cqw; }
        @container (max-width: 420px) {
          .lu-node-label { font-size: 3.1cqw; }
          .lu-node-label--compact { font-size: 2.5cqw; }
        }
      `}</style>

      <section
        className="relative overflow-hidden py-20 md:py-28 px-4"
        style={{ background: 'radial-gradient(ellipse at center, #16307A 0%, #0D1B4B 45%, #07071A 100%)' }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho */}
          <div
            ref={titleRef}
            className={`text-center mb-12 md:mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-[#F5C842]" aria-hidden="true" />
              <p
                className="text-[#F5C842] text-xs md:text-sm tracking-[0.35em] font-semibold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                A DIFERENÇA
              </p>
              <span className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-[#F5C842]" aria-hidden="true" />
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F0E8] mb-6 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              A Light Up trabalha <span className="text-[#F5C842]">diferente.</span>
            </h2>
            <p
              className="text-[#AFBEDD] text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Enquanto agências tradicionais entregam serviços isolados, a gente integra cada frente
              em uma estratégia única.{' '}
              <span className="text-white font-medium">
                Criativos alimentam o tráfego, sites convertem a atenção e consultorias dão direção a
                cada decisão
              </span>{' '}
              — tudo sob o mesmo teto.
            </p>
          </div>

          {/* Diagrama */}
          <div
            ref={diagramRef}
            className={`transition-all duration-1000 ${diagramVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <div className="lu-diagram relative mx-auto w-full max-w-[560px] aspect-square">
              {/* Anel externo sutil */}
              <div
                className="absolute rounded-full border border-[#5B8CFF]/10"
                style={{ inset: '1%' }}
                aria-hidden="true"
              />
              {/* Anel tracejado girando */}
              <div
                className="lu-ring-spin absolute rounded-full border-2 border-dashed border-[#2E5FD9]/35"
                style={{ inset: `${50 - NODE_OFFSET}%` }}
                aria-hidden="true"
              />

              {/* Linhas de conexão */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                  {pillars.map((p) => {
                    const l = connectionLine(p)
                    return (
                      <linearGradient
                        key={p.id}
                        id={`lu-line-${p.id}`}
                        gradientUnits="userSpaceOnUse"
                        x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                      >
                        <stop offset="0%" stopColor="#5B8CFF" stopOpacity="0" />
                        <stop offset="50%" stopColor="#5B8CFF" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#5B8CFF" stopOpacity="0" />
                      </linearGradient>
                    )
                  })}
                </defs>
                {pillars.map((p, i) => {
                  const l = connectionLine(p)
                  return (
                    <line
                      key={p.id}
                      {...l}
                      stroke={`url(#lu-line-${p.id})`}
                      strokeWidth="0.6"
                      strokeLinecap="round"
                      strokeDasharray="20"
                      strokeDashoffset="20"
                      style={diagramVisible ? { animation: `lu-line-draw 0.9s ease ${0.3 + i * 0.15}s forwards` } : undefined}
                    />
                  )
                })}
              </svg>

              {/* Selo central */}
              <div
                className="lu-seal absolute rounded-full flex flex-col items-center justify-center border-2 border-[#F5C842]/70"
                style={{
                  width: `${SEAL_SIZE}%`,
                  height: `${SEAL_SIZE}%`,
                  left: `${50 - SEAL_SIZE / 2}%`,
                  top: `${50 - SEAL_SIZE / 2}%`,
                  background: 'radial-gradient(circle at 50% 35%, #1C2F6E 0%, #0B1640 70%, #07071A 100%)',
                }}
              >
                <span
                  className="text-[#F5C842] leading-none"
                  style={{ fontFamily: "'Kaushan Script', cursive", fontSize: '5.4cqw', textShadow: '0 0 18px rgba(245, 200, 66, 0.45)' }}
                >
                  Light Up
                </span>
                <span
                  className="text-[#F5C842]/80 font-semibold uppercase"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.7cqw', letterSpacing: '0.3em', marginTop: '1.4cqw', paddingLeft: '0.3em' }}
                >
                  Integrado
                </span>
              </div>

              {/* Círculos das frentes */}
              {pillars.map(({ id, label, Icon, x, y, compact }) => (
                <div
                  key={id}
                  className="absolute rounded-full flex flex-col items-center justify-center border-2 border-[#2E5FD9]"
                  style={{
                    width: `${NODE_SIZE}%`,
                    height: `${NODE_SIZE}%`,
                    left: `${x - NODE_SIZE / 2}%`,
                    top: `${y - NODE_SIZE / 2}%`,
                    background: 'linear-gradient(145deg, #1F48B8 0%, #13286B 55%, #0D1B4B 100%)',
                    boxShadow: '0 0 28px rgba(46, 95, 217, 0.45), inset 0 0 18px rgba(91, 140, 255, 0.25)',
                  }}
                >
                  <Icon
                    className="text-[#DCE6FF]"
                    strokeWidth={1.6}
                    style={{ width: '6.6cqw', height: '6.6cqw' }}
                    aria-hidden="true"
                  />
                  <span
                    className={`text-[#F5F0E8] font-semibold leading-none ${compact ? 'lu-node-label--compact' : 'lu-node-label'}`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif", marginTop: '1.4cqw' }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cartões */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mt-14 md:mt-20"
          >
            {pillars.map(({ id, label, description, Icon }, i) => (
              <div
                key={id}
                className={`rounded-2xl bg-white/[0.04] border border-[#2E5FD9]/25 p-6 transition-all duration-700 hover:border-[#2E5FD9]/60 hover:bg-white/[0.06] ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: cardsVisible ? `${i * 100}ms` : '0ms' }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#2E5FD9]/15 border border-[#2E5FD9]/40">
                    <Icon className="w-4 h-4 text-[#5B8CFF]" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3
                    className="text-[#F5F0E8] text-lg font-bold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {label}
                  </h3>
                </div>
                <p
                  className="text-[#9FB0D6] text-[0.95rem] leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
