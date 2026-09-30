import { LINKS } from '../constants/links'

interface FooterProps {}

function FooterBulbIcon() {
  return (
    <svg width="28" height="36" viewBox="0 0 28 36" fill="none" aria-hidden="true">
      <ellipse cx="14" cy="13" rx="11" ry="12" fill="#F5C842" fillOpacity="0.12" stroke="#F5C842" strokeWidth="1.5" />
      <polyline points="9,17 12,10 15,17" stroke="#F5C842" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <polyline points="13,17 16,10 19,17" stroke="#F5C842" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="12" cy="10" r="2" fill="#F5C842" fillOpacity="0.9" />
      <circle cx="16" cy="10" r="2" fill="#F5C842" fillOpacity="0.9" />
      <rect x="10" y="25" width="8" height="7" rx="2" fill="#6B7894" fillOpacity="0.5" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

export function Footer({}: FooterProps) {
  return (
    <footer
      className="bg-[#07071A] border-t border-[#1A3A8F]/30 pt-12 pb-8 px-4"
      id="contato"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8 text-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <FooterBulbIcon />
            <span
              style={{ fontFamily: "'Dancing Script', cursive", fontSize: '2rem', fontWeight: 700, color: '#F5F0E8' }}
            >
              Light Up
            </span>
          </div>
          <p
            className="text-[#F5C842] text-xs tracking-[0.3em] font-semibold"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            ILUMINANDO SEUS SONHOS.
          </p>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Siga a Light Up no Instagram"
            className="flex items-center gap-2 text-[#8A9CC4] hover:text-[#5B8CFF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] rounded"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}
          >
            <InstagramIcon />
            @lightup.mkt
          </a>

          <span className="text-[#1A3A8F] hidden sm:block">|</span>

          <a
            href={`mailto:${LINKS.email}`}
            className="text-[#8A9CC4] hover:text-[#5B8CFF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] rounded"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}
          >
            {LINKS.email}
          </a>

          <span className="text-[#1A3A8F] hidden sm:block">|</span>

          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A9CC4] hover:text-[#5B8CFF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] rounded"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem' }}
          >
            {LINKS.phone}
          </a>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-[#1A3A8F]/30" />

        {/* Legal */}
        <div className="flex flex-col items-center gap-3">
          <p
            className="text-[#8A9CC4]/60 text-xs max-w-md leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Ao entrar em contato, você concorda com nossa Política de Privacidade conforme a LGPD.
          </p>
          <p
            className="text-[#8A9CC4]/40 text-xs"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            © 2025 Light Up Agência de Marketing Digital. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
