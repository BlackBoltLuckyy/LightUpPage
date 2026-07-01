interface EdisonBulbProps {
  size?: number
  glowColor?: string
  className?: string
  animated?: boolean
}

export function EdisonBulb({ size = 120, glowColor = '#F5C842', className = '', animated = false }: EdisonBulbProps) {
  const h = Math.round(size * 1.4)
  return (
    <>
      {animated && (
        <style>{`
          @keyframes pulse-amber {
            0%, 100% { filter: drop-shadow(0 0 18px ${glowColor}99); }
            50% { filter: drop-shadow(0 0 40px ${glowColor}cc) drop-shadow(0 0 80px ${glowColor}44); }
          }
          @media (prefers-reduced-motion: reduce) {
            .bulb-animated { animation: none !important; }
          }
        `}</style>
      )}
      <svg
        width={size}
        height={h}
        viewBox="0 0 120 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        style={{
          filter: `drop-shadow(0 0 24px ${glowColor}88)`,
          ...(animated ? { animation: 'pulse-amber 3s ease-in-out infinite' } : {}),
        }}
      >
        <defs>
          <radialGradient id={`bulb-grad-${size}`} cx="45%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFF8E0" stopOpacity="0.95" />
            <stop offset="50%" stopColor={glowColor} stopOpacity="0.75" />
            <stop offset="100%" stopColor="#F5A800" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id={`bulb-outer-${size}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={glowColor} stopOpacity="0.12" />
            <stop offset="100%" stopColor={glowColor} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer ambient glow */}
        <ellipse cx="60" cy="58" rx="58" ry="64" fill={`url(#bulb-outer-${size})`} />

        {/* Bulb glass shell */}
        <ellipse cx="60" cy="56" rx="44" ry="50"
          fill={`url(#bulb-grad-${size})`}
          stroke={glowColor}
          strokeWidth="1.2"
          strokeOpacity="0.5"
        />

        {/* Inner glass shine */}
        <ellipse cx="48" cy="38" rx="10" ry="14" fill="#FFF8E0" fillOpacity="0.18" />

        {/* Filament — double-V */}
        <g stroke={glowColor} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <polyline points="40,78 49,56 58,78" />
          <polyline points="62,78 71,56 80,78" />
          <line x1="58" y1="78" x2="62" y2="78" />
          <line x1="40" y1="78" x2="40" y2="92" />
          <line x1="80" y1="78" x2="80" y2="92" />
        </g>

        {/* Filament glow nodes */}
        <circle cx="49" cy="56" r="3" fill={glowColor} fillOpacity="0.95" />
        <circle cx="71" cy="56" r="3" fill={glowColor} fillOpacity="0.95" />
        <circle cx="58" cy="78" r="1.5" fill={glowColor} fillOpacity="0.8" />
        <circle cx="62" cy="78" r="1.5" fill={glowColor} fillOpacity="0.8" />

        {/* Neck — waist transition */}
        <path d="M44 104 Q44 112 48 116 L72 116 Q76 112 76 104 Z" fill="#5A6A8A" fillOpacity="0.45" />

        {/* Base rings */}
        <rect x="46" y="116" width="28" height="5" rx="2" fill="#6B7894" fillOpacity="0.55" />
        <rect x="44" y="121" width="32" height="5" rx="2" fill="#5A6A8A" fillOpacity="0.5" />
        <rect x="46" y="126" width="28" height="5" rx="2" fill="#6B7894" fillOpacity="0.45" />

        {/* Base body */}
        <rect x="46" y="131" width="28" height="18" rx="3" fill="#4A5A78" fillOpacity="0.6" stroke="#8A9CC4" strokeWidth="0.5" strokeOpacity="0.3" />

        {/* Base vertical lines */}
        <line x1="54" y1="133" x2="54" y2="147" stroke="#8A9CC4" strokeWidth="1" strokeOpacity="0.25" />
        <line x1="66" y1="133" x2="66" y2="147" stroke="#8A9CC4" strokeWidth="1" strokeOpacity="0.25" />

        {/* Lead wires */}
        <line x1="52" y1="149" x2="52" y2="160" stroke={glowColor} strokeWidth="1.5" strokeOpacity="0.35" />
        <line x1="68" y1="149" x2="68" y2="160" stroke={glowColor} strokeWidth="1.5" strokeOpacity="0.35" />
      </svg>
    </>
  )
}
