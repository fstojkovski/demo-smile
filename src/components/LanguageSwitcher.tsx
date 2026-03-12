import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'mk', label: 'МК' },
  { code: 'en', label: 'EN' },
]

export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const current = i18n.language

  return (
    <div className="flex items-center gap-1 rounded-full border border-[var(--line)] bg-white/60 p-0.5 backdrop-blur-sm">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
            current === lang.code
              ? 'bg-[var(--accent-deep)] text-white shadow-sm'
              : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
