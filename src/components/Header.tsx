import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-md">
      <nav className="page-wrap flex items-center gap-6 py-3 sm:py-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-shrink-0 items-center gap-2 no-underline"
        >
          <span className="text-2xl leading-none">😊</span>
          <span
            className="text-xl font-black tracking-tight text-[var(--text-primary)]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Smile
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="ml-auto hidden items-center gap-4 sm:flex sm:gap-6">
          <LanguageSwitcher />
          <a href="#menu" className="nav-link">
            {t('nav.menu')}
          </a>
          <a href="#contact" className="nav-link">
            {t('nav.contact')}
          </a>
          <a href="#contact" className="btn-primary py-2 px-5 text-sm">
            {t('nav.orderNow')}
          </a>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="ml-auto flex flex-col justify-center gap-1.5 sm:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--text-primary)] transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 border-t border-[var(--line)] px-4 py-4 sm:hidden">
          <LanguageSwitcher />
          <a
            href="#menu"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.menu')}
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.contact')}
          </a>
          <a
            href="#contact"
            className="btn-primary py-2 px-5 text-sm text-center"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.orderNow')}
          </a>
        </div>
      )}
    </header>
  )
}
