import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()

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

        {/* Nav links */}
        <div className="ml-auto flex items-center gap-4 sm:gap-6">
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
      </nav>
    </header>
  )
}
