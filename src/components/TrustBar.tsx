import React from 'react'

interface TrustBarProps {}

const items = [
  'Agência de Marketing Digital',
  'Design',
  'Tráfego Pago',
  'Automação IA',
  'Desenvolvimento',
]

export function TrustBar({}: TrustBarProps) {
  return (
    <div className="bg-[#0D1B4B] py-3 overflow-hidden border-y border-[#1A3A8F]/40">
      <div className="flex items-center justify-center gap-6 flex-wrap px-6">
        {items.map((item, i) => (
          <React.Fragment key={item}>
            <span
              className="text-[#8A9CC4] text-sm font-medium whitespace-nowrap"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item}
            </span>
            {i < items.length - 1 && (
              <span className="text-[#F5C842] font-bold select-none">·</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
