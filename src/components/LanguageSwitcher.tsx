import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'mk', label: 'МК' },
  { code: 'en', label: 'EN' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language

  return (
    <div className="flex items-center gap-1">
      {LANGUAGES.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-1">
          <button
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${
              current === lang.code
                ? 'text-[var(--accent-deep)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            {lang.label}
          </button>
          {i < LANGUAGES.length - 1 && (
            <span className="text-[var(--text-muted)] opacity-40 text-xs select-none">·</span>
          )}
        </span>
      ))}
    </div>
  )
}
