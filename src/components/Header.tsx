import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] backdrop-blur-md">
      <nav className="page-wrap flex items-center gap-6 px-4 py-3 sm:py-4">
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

        {/* Desktop nav */}
        <div className="ml-auto hidden items-center gap-6 sm:flex">
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
          className="ml-auto flex h-9 w-9 flex-col items-center justify-center gap-[5px] sm:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-5 rounded-full bg-[var(--text-primary)] transition-all duration-200 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full bg-[var(--text-primary)] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full bg-[var(--text-primary)] transition-all duration-200 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-[var(--line)] px-4 pt-2 pb-4">
          {/* Nav links */}
          <a
            href="#menu"
            className="flex items-center justify-between border-b border-[var(--line)] py-4 text-base font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.menu')}
            <svg className="h-4 w-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="flex items-center justify-between border-b border-[var(--line)] py-4 text-base font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.contact')}
            <svg className="h-4 w-4 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* CTA */}
          <a
            href="#contact"
            className="mt-4 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] py-3 text-sm font-bold text-[#451a03] shadow-[0_4px_14px_rgba(245,158,11,0.35)] transition-all hover:shadow-[0_6px_20px_rgba(245,158,11,0.5)]"
            onClick={() => setMenuOpen(false)}
          >
            {t('nav.orderNow')}
          </a>

          {/* Language switcher */}
          <div className="mt-4 flex justify-center">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  )
}
