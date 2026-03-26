import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Heart, Users, Leaf, Clock } from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  const { t } = useTranslation()

  return (
    <main className="page-wrap px-4 py-12">
      {/* Header */}
      <section className="mb-12 text-center">
        <p className="section-label">{t('about.kicker')}</p>
        <h1 className="display-title mt-1 text-4xl font-bold text-[var(--text-primary)] sm:text-5xl">
          {t('about.title')}
        </h1>
      </section>

      {/* Our Story */}
      <section className="card-shell mx-auto mb-8 max-w-3xl p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] text-[var(--accent-deep)]">
            <Heart size={18} />
          </span>
          <h2 className="text-xl font-bold text-[var(--text-primary)]">{t('about.story.heading')}</h2>
        </div>
        <p className="mb-4 text-base leading-relaxed text-[var(--text-secondary)]">
          {t('about.story.p1')}
        </p>
        <p className="m-0 text-base leading-relaxed text-[var(--text-secondary)]">
          {t('about.story.p2')}
        </p>
      </section>

      {/* People */}
      <section className="card-shell mx-auto mb-8 max-w-3xl p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] text-[var(--accent-deep)]">
            <Users size={18} />
          </span>
          <h2 className="text-xl font-bold text-[var(--text-primary)]">{t('about.people.heading')}</h2>
        </div>
        <p className="m-0 text-base leading-relaxed text-[var(--text-secondary)]">
          {t('about.people.description')}
        </p>
      </section>

      {/* Quality */}
      <section className="card-shell mx-auto mb-8 max-w-3xl p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] text-[var(--accent-deep)]">
            <Leaf size={18} />
          </span>
          <h2 className="text-xl font-bold text-[var(--text-primary)]">{t('about.quality.heading')}</h2>
        </div>
        <p className="mb-4 text-base leading-relaxed text-[var(--text-secondary)]">
          {t('about.quality.p1')}
        </p>
        <p className="m-0 text-base leading-relaxed text-[var(--text-secondary)]">
          {t('about.quality.p2')}
        </p>
      </section>

      {/* Notice */}
      <section className="mx-auto max-w-3xl rounded-2xl border border-[var(--accent)] bg-[var(--accent-light)] p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[var(--accent-deep)]">
            <Clock size={18} />
          </span>
          <h2 className="text-xl font-bold text-[var(--text-primary)]">{t('about.notice.heading')}</h2>
        </div>
        <p className="m-0 text-base leading-relaxed text-[var(--text-secondary)]">
          {t('about.notice.description')}
        </p>
      </section>
    </main>
  )
}
