import { useScrollReveal } from '../hooks/useScrollReveal'

interface TechStackProps {}

const techItems = [
  'OpenAI', 'n8n', 'Next.js', 'Meta Ads', 'Google Ads',
  'Looker Studio', 'Make', 'Python', 'Supabase',
  'WhatsApp API', 'React', 'Figma',
]

const doubled = [...techItems, ...techItems]

export function TechStack({}: TechStackProps) {
  const { ref, visible } = useScrollReveal()

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation-play-state: paused !important; }
        }
      `}</style>

      <section className="py-16 bg-[#07071A] overflow-hidden">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p
            className="text-center text-[#8A9CC4] text-xs font-semibold tracking-[0.3em] mb-8 uppercase"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Ferramentas que dominamos
          </p>

          <div className="relative flex overflow-hidden">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07071A] to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07071A] to-transparent z-10 pointer-events-none" />

            <div
              className="marquee-track flex gap-4 whitespace-nowrap"
              style={{ animation: 'marquee 28s linear infinite' }}
            >
              {doubled.map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="inline-block bg-[#1A3A8F] text-[#5B8CFF] border border-[#2E5FD9]/60 px-4 py-2 rounded-md text-xs font-medium select-none"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
