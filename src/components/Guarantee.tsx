import { useScrollReveal } from '../hooks/useScrollReveal'

interface GuaranteeProps {}

function ShieldIcon() {
  return (
    <svg width="56" height="64" viewBox="0 0 56 64" fill="none" aria-hidden="true">
      <path
        d="M28 2 L52 14 L52 36 C52 50 28 62 28 62 C28 62 4 50 4 36 L4 14 Z"
        fill="#F5C842"
        fillOpacity="0.12"
        stroke="#F5C842"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M18 32 L25 39 L38 26"
        stroke="#F5C842"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  )
}

export function Guarantee({}: GuaranteeProps) {
  const { ref, visible } = useScrollReveal()

  return (
    <section className="py-16 px-4 bg-[#07071A]" id="garantia">
      <div className="max-w-3xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="border-2 border-[#F5C842]/60 bg-[#F5C842]/5 rounded-2xl p-10 text-center relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,_#F5C84218_0%,_transparent_70%)]" />

            <div className="relative flex flex-col items-center gap-6">
              <ShieldIcon />

              <div>
                <p
                  className="text-[#F5C842] text-xs font-semibold tracking-[0.3em] uppercase mb-3"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Nossa Garantia
                </p>
                <h2
                  className="text-[#F5F0E8] text-3xl md:text-4xl font-bold mb-4"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  60 dias ou a gente resolve.
                </h2>
              </div>

              <p
                className="text-[#8A9CC4] text-lg leading-relaxed max-w-xl"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Se nos primeiros 60 dias você não enxergar evolução clara no seu resultado —
                seja em tráfego, leads ou presença digital — a gente retrabalha tudo sem custo extra.
                Sem burocracia, sem enrolação. A nossa palavra é o contrato.
              </p>

              <div
                className="mt-2 text-[#F5C842]/70 text-sm"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Compromisso com resultado, não com desculpa.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
