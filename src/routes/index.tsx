import { useRef, useState, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Camera, MapPin, Phone, Clock, Instagram, Facebook, ChevronLeft, ChevronRight } from 'lucide-react'
import type { Product } from '../types'

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

function ProductCard({ name, desc, price, pricePerKg, hasCustomPrice }: Product) {
  return (
    <article className="card-shell overflow-hidden p-4 transition-all duration-200">
      <ImgPlaceholder />
      <div className="mt-3">
        <div className="mb-1 flex items-baseline justify-between gap-2">
          <h3 className="text-base font-bold text-[var(--text-primary)]">{name}</h3>
          {!hasCustomPrice
            ? (<span className="shrink-0 text-sm font-semibold text-[var(--accent)]">{price} {pricePerKg ? 'ден/kg' : 'ден' }</span>)
            : null
          }
        </div>
        <p className="m-0 text-sm leading-relaxed text-[var(--text-secondary)]">{desc}</p>
      </div>
    </article>
  )
}

function ProductCarousel({ products }: { products: Product[] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows, { passive: true })
    return () => el.removeEventListener('scroll', updateArrows)
  }, [])

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -288 : 288, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="absolute -left-4 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-[var(--line)] bg-white/90 p-2 shadow-md backdrop-blur-sm transition hover:bg-white"
        >
          <ChevronLeft size={18} className="text-[var(--text-secondary)]" />
        </button>
      )}

      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory"
      >
        {products.map((p) => (
          <div key={p.name} className="w-full flex-shrink-0 snap-start md:w-[calc(33.333%-11px)]">
            <ProductCard {...p} />
          </div>
        ))}
      </div>

      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="absolute -right-4 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full border border-[var(--line)] bg-white/90 p-2 shadow-md backdrop-blur-sm transition hover:bg-white"
        >
          <ChevronRight size={18} className="text-[var(--text-secondary)]" />
        </button>
      )}
    </div>
  )
}

function MenuSection({
  id,
  emoji,
  label,
  title,
  products,
}: {
  id?: string
  emoji: string
  label: string
  title: string
  products: Product[]
}) {
  return (
    <div id={id} className="mt-16">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-3xl">{emoji}</span>
        <div>
          <p className="section-label m-0">{label}</p>
          <h2 className="display-title m-0 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            {title}
          </h2>
        </div>
      </div>
      <ProductCarousel products={products} />
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

function HomePage() {
  const { t } = useTranslation()

  const pastries = t('menu.pastries.items', { returnObjects: true }) as Product[]
  const creamSalads = t('menu.creamSalads.items', { returnObjects: true }) as Product[]
  const sandwiches = t('menu.sandwiches.items', { returnObjects: true }) as Product[]
  const pancakes = t('menu.pancakes.items', { returnObjects: true }) as Product[]

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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1482.9604223545812!2d21.439240965156277!3d41.98050922622559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415c5517e207f%3A0x9692613be796a265!2sSmile!5e0!3m2!1sen!2smk!4v1774520925154!5m2!1sen!2smk"
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
