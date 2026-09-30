import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { useNavbarScroll } from '../hooks/useNavbarScroll'
import { LINKS } from '../constants/links'

interface NavbarProps {}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function NavBulbIcon() {
  return (
    <svg width="26" height="34" viewBox="0 0 26 34" fill="none" aria-hidden="true">
      <ellipse cx="13" cy="13" rx="10" ry="11" fill="#F5C842" fillOpacity="0.15" stroke="#F5C842" strokeWidth="1.5" />
      <polyline points="8,17 11,11 14,17" stroke="#F5C842" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <polyline points="12,17 15,11 18,17" stroke="#F5C842" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      <circle cx="11" cy="11" r="2" fill="#F5C842" fillOpacity="0.9" />
      <circle cx="15" cy="11" r="2" fill="#F5C842" fillOpacity="0.9" />
      <rect x="9" y="24" width="8" height="6" rx="2" fill="#8A9CC4" fillOpacity="0.5" />
    </svg>
  )
}

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Site Express', href: '#site-express' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Por Que Nós', href: '#por-que-nos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export function Navbar({}: NavbarProps) {
  const scrolled = useNavbarScroll(60)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-[#07071A]/85 border-b border-[#1A3A8F]/40 shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] rounded-lg p-1"
          >
            <NavBulbIcon />
            <span
              style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.6rem', fontWeight: 700, color: '#F5F0E8', lineHeight: 1 }}
            >
              Light Up
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#8A9CC4] hover:text-[#F5F0E8] text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] rounded"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </a>
            ))}

            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga a Light Up no Instagram"
              className="text-white hover:text-[#5B8CFF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] rounded"
            >
              <InstagramIcon />
            </a>

            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#2E5FD9] hover:bg-[#1A3A8F] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] shadow-[0_0_20px_rgba(46,95,217,0.3)] hover:shadow-[0_0_28px_rgba(46,95,217,0.5)]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <MessageCircle size={15} />
              Falar com a equipe
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="lg:hidden text-[#F5F0E8] hover:text-[#5B8CFF] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] rounded p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-[#1A3A8F]/40 pb-6 pt-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#8A9CC4] hover:text-[#F5F0E8] hover:bg-[#1A3A8F]/20 px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center gap-4 px-3 pt-3 pb-1">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Siga a Light Up no Instagram"
                className="text-white hover:text-[#5B8CFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#5B8CFF] rounded"
              >
                <InstagramIcon />
              </a>
              <span className="text-[#8A9CC4] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                @lightup.mkt
              </span>
            </div>

            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 mt-2 flex items-center justify-center gap-2 bg-[#2E5FD9] hover:bg-[#1A3A8F] text-white font-semibold px-5 py-3 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5B8CFF]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <MessageCircle size={18} />
              Falar com a equipe
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
