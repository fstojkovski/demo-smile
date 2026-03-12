import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-[var(--line)] bg-[var(--bg-soft)] px-4 pb-10 pt-8">
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-2">
          <span className="text-xl">😊</span>
          <span className="font-black tracking-tight text-[var(--text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
            Smile
          </span>
          <span className="text-[var(--text-muted)] text-sm ml-1">{t('footer.location')}</span>
        </div>
        <p className="m-0 text-sm text-[var(--text-muted)]">
          {t('footer.copyright', { year })}
        </p>
      </div>
    </footer>
  )
}
