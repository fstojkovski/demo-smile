import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Camera, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react'

export const Route = createFileRoute('/')({ component: HomePage })

// ── Components ────────────────────────────────────────────────────────────────

function ImgPlaceholder() {
  const { t } = useTranslation()
  return (
    <div className="img-placeholder">
      <Camera size={28} className="mb-2 opacity-50" />
      <span className="text-xs font-semibold opacity-60">{t('misc.photoComingSoon')}</span>
    </div>
  )
}

function ProductCard({ name, desc }: { name: string; desc: string }) {
  return (
    <article className="card-shell overflow-hidden p-4 transition-all duration-200">
      <ImgPlaceholder />
      <div className="mt-3">
        <h3 className="mb-1 text-base font-bold text-[var(--text-primary)]">{name}</h3>
        <p className="m-0 text-sm leading-relaxed text-[var(--text-secondary)]">{desc}</p>
      </div>
    </article>
  )
}

function MenuSection({
  id,
  emoji,
  label,
  title,
  products,
  columns = 'grid-cols-2 md:grid-cols-3',
}: {
  id?: string
  emoji: string
  label: string
  title: string
  products: { name: string; desc: string }[]
  columns?: string
}) {
  return (
    <div id={id} className="mt-16">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-3xl">{emoji}</span>
        <div>
          <p className="section-label m-0">{label}</p>
          <h2
            className="display-title m-0 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl"
          >
            {title}
          </h2>
        </div>
      </div>
      <div className={`grid gap-4 ${columns}`}>
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

function HomePage() {
  const { t } = useTranslation()

  const pastries = t('menu.pastries.items', { returnObjects: true }) as { name: string; desc: string }[]
  const creamSalads = t('menu.creamSalads.items', { returnObjects: true }) as { name: string; desc: string }[]
  const sandwiches = t('menu.sandwiches.items', { returnObjects: true }) as { name: string; desc: string }[]
  const pancakes = t('menu.pancakes.items', { returnObjects: true }) as { name: string; desc: string }[]

  const pills = [
    t('hero.pills.pastries'),
    t('hero.pills.creamSalads'),
    t('hero.pills.sandwiches'),
    t('hero.pills.pancakes'),
  ]

  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 pb-16 pt-20 text-center sm:pb-20 sm:pt-28">
        {/* background blobs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.28),transparent_65%)]" />
        <div className="pointer-events-none absolute -right-32 top-8 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(253,230,138,0.3),transparent_65%)]" />

        <div className="page-wrap relative">
          <div className="rise-in mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/60 px-4 py-1.5 text-sm font-semibold text-[var(--text-secondary)] backdrop-blur-sm">
            <span>🇲🇰</span> {t('hero.badge')}
          </div>

          <h1
            className="display-title rise-in mb-5 text-5xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            {t('hero.title')}<br />
            <span className="text-[var(--accent-deep)]">{t('hero.titleAccent')}</span>
          </h1>

          <p
            className="rise-in mx-auto mb-8 max-w-xl text-lg text-[var(--text-secondary)] sm:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            {t('hero.description')}
          </p>

          <div
            className="rise-in flex flex-wrap justify-center gap-3"
            style={{ animationDelay: '240ms' }}
          >
            <a href="#menu" className="btn-primary text-sm sm:text-base">
              {t('hero.seeMenu')}
            </a>
            <a href="#contact" className="btn-outline text-sm sm:text-base">
              {t('hero.orderNow')}
            </a>
          </div>

          {/* Category pills */}
          <div
            className="rise-in mt-10 flex flex-wrap justify-center gap-2"
            style={{ animationDelay: '320ms' }}
          >
            {pills.map((c) => (
              <span
                key={c}
                className="rounded-full border border-[var(--line)] bg-white/70 px-4 py-1.5 text-sm font-semibold text-[var(--text-secondary)]"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Menu sections ── */}
      <section id="menu" className="page-wrap px-4 pb-8">
        <div className="mb-2 text-center">
          <p className="section-label">{t('menu.sectionLabel')}</p>
          <h2 className="display-title mt-1 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
            {t('menu.sectionTitle')}
          </h2>
        </div>

        <MenuSection
          emoji="🥐"
          label={t('menu.pastries.label')}
          title={t('menu.pastries.title')}
          products={pastries}
        />

        <MenuSection
          emoji="🥗"
          label={t('menu.creamSalads.label')}
          title={t('menu.creamSalads.title')}
          products={creamSalads}
          columns="grid-cols-2 md:grid-cols-4"
        />

        <MenuSection
          emoji="🥪"
          label={t('menu.sandwiches.label')}
          title={t('menu.sandwiches.title')}
          products={sandwiches}
        />

        <MenuSection
          emoji="🥞"
          label={t('menu.pancakes.label')}
          title={t('menu.pancakes.title')}
          products={pancakes}
          columns="grid-cols-2 md:grid-cols-4"
        />
      </section>

      {/* ── Contact & Map ── */}
      <section id="contact" className="mt-20 bg-[var(--bg-soft)] px-4 py-16">
        <div className="page-wrap">
          <div className="mb-10 text-center">
            <p className="section-label">{t('contact.sectionLabel')}</p>
            <h2 className="display-title mt-1 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
              {t('contact.sectionTitle')}
            </h2>
            <p className="mt-2 text-[var(--text-secondary)]">
              {t('contact.sectionDesc')}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact info */}
            <div className="card-shell p-8">
              <h3 className="mb-6 text-xl font-bold text-[var(--text-primary)]">
                {t('contact.cardTitle')}
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] text-[var(--accent-deep)]">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="m-0 font-semibold text-[var(--text-primary)]">{t('contact.address.label')}</p>
                    <p className="m-0 text-sm text-[var(--text-secondary)]">
                      {t('contact.address.line1')}<br />
                      {t('contact.address.line2')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] text-[var(--accent-deep)]">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="m-0 font-semibold text-[var(--text-primary)]">{t('contact.phone.label')}</p>
                    <a
                      href="tel:+38922771800"
                      className="text-sm font-semibold text-[var(--accent-deep)] hover:text-[var(--accent)]"
                    >
                      +389 22 771 800
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] text-[var(--accent-deep)]">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="m-0 font-semibold text-[var(--text-primary)]">{t('contact.hours.label')}</p>
                    <p className="m-0 text-sm text-[var(--text-secondary)]">
                      {t('contact.hours.weekdays')}<br />
                      {t('contact.hours.saturday')}<br />
                      {t('contact.hours.sunday')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 border-t border-[var(--line)] pt-6">
                <p className="mb-3 text-sm font-semibold text-[var(--text-muted)]">
                  {t('contact.social.follow')}
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--text-secondary)] transition hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
                  >
                    <Facebook size={16} /> Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card-shell overflow-hidden p-0">
              <iframe
                title="Smile Bakery location — Skopje"
                src="https://www.openstreetmap.org/export/embed.html?bbox=21.4347%2C41.9782%2C21.4447%2C41.9832&layer=mapnik&marker=41.9808%2C21.4398"
                width="100%"
                height="100%"
                style={{ minHeight: '400px', border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
