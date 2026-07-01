import { useScrollReveal } from '../hooks/useScrollReveal'

interface SolutionSectionProps {}

const nodes = [
  { id: 'trafego', label: 'Tráfego', x: 50, y: 15 },
  { id: 'design',  label: 'Design',  x: 85, y: 50 },
  { id: 'ia',      label: 'IA',      x: 50, y: 85 },
  { id: 'dados',   label: 'Dados',   x: 15, y: 50 },
]

const connections = [
  [0, 1], [1, 2], [2, 3], [3, 0], [0, 2], [1, 3],
]

function toXY(px: number, py: number, size: number) {
  return { x: (px / 100) * size, y: (py / 100) * size }
}

export function SolutionSection({}: SolutionSectionProps) {
  const { ref: titleRef, visible: titleVisible } = useScrollReveal()
  const { ref: diagramRef, visible: diagramVisible } = useScrollReveal(0.2)

  const svgSize = 280
  const nodeR = 38

  return (
    <>
      <style>{`
        @keyframes dash-draw {
          from { stroke-dashoffset: 300; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes node-pulse {
          0%, 100% { filter: drop-shadow(0 0 8px #2E5FD9); }
          50% { filter: drop-shadow(0 0 20px #5B8CFF); }
        }
        @media (prefers-reduced-motion: reduce) {
          .diagram-line { animation: none !important; }
          .diagram-node { animation: none !important; }
        }
      `}</style>

      <section className="py-20 px-4 bg-[#0D1B4B]">
        <div className="max-w-5xl mx-auto">
          <div
            ref={titleRef}
            className={`text-center mb-14 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <p
              className="text-[#F5C842] text-xs tracking-[0.3em] font-semibold mb-4"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              A DIFERENÇA
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              A Light Up trabalha diferente.
            </h2>
            <p
              className="text-[#8A9CC4] text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Enquanto agências tradicionais entregam serviços isolados, a gente integra cada frente
              em uma estratégia única. Design informa o tráfego, IA escala o atendimento e dados
              guiam cada decisão — tudo sob o mesmo teto.
            </p>
          </div>

          <div
            ref={diagramRef}
            className={`transition-all duration-700 ${diagramVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            <div className="flex justify-center">
              <div className="relative" style={{ width: svgSize, height: svgSize }}>
                <svg
                  width={svgSize}
                  height={svgSize}
                  viewBox={`0 0 ${svgSize} ${svgSize}`}
                  aria-hidden="true"
                >
                  {/* Connection lines */}
                  {diagramVisible && connections.map(([a, b], i) => {
                    const p1 = toXY(nodes[a].x, nodes[a].y, svgSize)
                    const p2 = toXY(nodes[b].x, nodes[b].y, svgSize)
                    return (
                      <line
                        key={`${a}-${b}`}
                        className="diagram-line"
                        x1={p1.x}
                        y1={p1.y}
                        x2={p2.x}
                        y2={p2.y}
                        stroke="#2E5FD9"
                        strokeWidth="1.5"
                        strokeOpacity="0.4"
                        strokeDasharray="300"
                        strokeDashoffset="300"
                        style={{
                          animation: `dash-draw 1.2s ease ${i * 0.15 + 0.2}s forwards`,
                        }}
                      />
                    )
                  })}

                  {/* Node circles */}
                  {nodes.map((node, i) => {
                    const { x, y } = toXY(node.x, node.y, svgSize)
                    return (
                      <g key={node.id} className="diagram-node" style={{ animation: `node-pulse ${2.5 + i * 0.3}s ease-in-out ${i * 0.2}s infinite` }}>
                        <circle
                          cx={x}
                          cy={y}
                          r={nodeR}
                          fill="#0D1B4B"
                          stroke="#2E5FD9"
                          strokeWidth="2"
                        />
                        <circle
                          cx={x}
                          cy={y}
                          r={nodeR - 8}
                          fill="#1A3A8F"
                          fillOpacity="0.5"
                        />
                        <text
                          x={x}
                          y={y + 6}
                          textAnchor="middle"
                          fill="#5B8CFF"
                          fontSize="13"
                          fontWeight="600"
                          fontFamily="'Space Grotesk', sans-serif"
                        >
                          {node.label}
                        </text>
                      </g>
                    )
                  })}

                  {/* Center "Light Up" label */}
                  <text
                    x={svgSize / 2}
                    y={svgSize / 2 - 8}
                    textAnchor="middle"
                    fill="#F5C842"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="'Dancing Script', cursive"
                  >
                    Light Up
                  </text>
                  <text
                    x={svgSize / 2}
                    y={svgSize / 2 + 10}
                    textAnchor="middle"
                    fill="#8A9CC4"
                    fontSize="9"
                    fontFamily="'JetBrains Mono', monospace"
                  >
                    integrado
                  </text>
                </svg>
              </div>
            </div>

            <p
              className="text-center text-[#5B8CFF] font-semibold mt-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Quatro frentes conectadas. Uma estratégia. Zero retrabalho.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
