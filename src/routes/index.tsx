import { createFileRoute } from '@tanstack/react-router'
import { Camera, MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react'

export const Route = createFileRoute('/')({ component: HomePage })

// ── Data ─────────────────────────────────────────────────────────────────────

const PASTRIES = [
  { name: 'Cream Puff', desc: 'Light choux pastry filled with silky vanilla cream' },
  { name: 'Baklava', desc: 'Layers of crispy filo with honey and walnuts' },
  { name: 'Apple Strudel', desc: 'Flaky dough wrapped around spiced apple filling' },
  { name: 'Chocolate Éclair', desc: 'Choux pastry with chocolate glaze and cream' },
  { name: 'Millefeuille', desc: 'Delicate puff pastry with pastry cream layers' },
  { name: 'Almond Croissant', desc: 'Buttery croissant filled with almond frangipane' },
]

const CREAM_SALADS = [
  { name: 'Classic Russe', desc: 'Potatoes, carrots, peas and mayo dressing' },
  { name: 'Shopska Cream', desc: 'Roasted peppers, cheese and fresh herbs' },
  { name: 'Tuna Delight', desc: 'Tuna, corn, olives and creamy dressing' },
  { name: "Chef's Special", desc: 'Seasonal vegetables with our secret sauce' },
]

const SANDWICHES = [
  { name: 'Club Classic', desc: 'Turkey, bacon, lettuce, tomato and mayo' },
  { name: 'Veggie Fresh', desc: 'Grilled veggies, hummus and feta cheese' },
  { name: 'Tuna Melt', desc: 'Tuna salad with melted cheese and pickles' },
  { name: 'Chicken Pesto', desc: 'Grilled chicken, pesto, mozzarella and greens' },
  { name: 'Ham & Brie', desc: 'Smoked ham, creamy brie and honey mustard' },
  { name: 'BBQ Beef', desc: 'Slow-cooked beef with BBQ sauce and coleslaw' },
]

const PANCAKES = [
  { name: 'Classic Butter', desc: 'Fluffy pancakes with butter and maple syrup' },
  { name: 'Nutella Dream', desc: 'Thin crepes with Nutella and crushed hazelnuts' },
  { name: 'Berry Bliss', desc: 'Pancakes with mixed berries and whipped cream' },
  { name: 'Savoury Ham', desc: 'Crepes with ham, cheese and béchamel sauce' },
]

// ── Components ────────────────────────────────────────────────────────────────

function ImgPlaceholder() {
  return (
    <div className="img-placeholder">
      <Camera size={28} className="mb-2 opacity-50" />
      <span className="text-xs font-semibold opacity-60">Photo coming soon</span>
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
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-4 pb-16 pt-20 text-center sm:pb-20 sm:pt-28">
        {/* background blobs */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.28),transparent_65%)]" />
        <div className="pointer-events-none absolute -right-32 top-8 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(253,230,138,0.3),transparent_65%)]" />

        <div className="page-wrap relative">
          <div className="rise-in mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/60 px-4 py-1.5 text-sm font-semibold text-[var(--text-secondary)] backdrop-blur-sm">
            <span>🇲🇰</span> Skopje, Macedonia
          </div>

          <h1
            className="display-title rise-in mb-5 text-5xl font-bold leading-tight tracking-tight text-[var(--text-primary)] sm:text-7xl"
            style={{ animationDelay: '80ms' }}
          >
            Baked with love<br />
            <span className="text-[var(--accent-deep)]">served with a smile 😊</span>
          </h1>

          <p
            className="rise-in mx-auto mb-8 max-w-xl text-lg text-[var(--text-secondary)] sm:text-xl"
            style={{ animationDelay: '160ms' }}
          >
            Freshly made pastries, cream salads, sandwiches and pancakes — crafted
            daily in our cozy Skopje kitchen.
          </p>

          <div
            className="rise-in flex flex-wrap justify-center gap-3"
            style={{ animationDelay: '240ms' }}
          >
            <a href="#menu" className="btn-primary text-sm sm:text-base">
              See Our Menu
            </a>
            <a href="#contact" className="btn-outline text-sm sm:text-base">
              Order Now
            </a>
          </div>

          {/* Category pills */}
          <div
            className="rise-in mt-10 flex flex-wrap justify-center gap-2"
            style={{ animationDelay: '320ms' }}
          >
            {['🥐 Pastries', '🥗 Cream Salads', '🥪 Sandwiches', '🥞 Pancakes'].map((c) => (
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
          <p className="section-label">Our Menu</p>
          <h2 className="display-title mt-1 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
            Something for everyone
          </h2>
        </div>

        <MenuSection
          emoji="🥐"
          label="Freshly Baked"
          title="Pastries"
          products={PASTRIES}
        />

        <MenuSection
          emoji="🥗"
          label="Homemade"
          title="Cream Salads"
          products={CREAM_SALADS}
          columns="grid-cols-2 md:grid-cols-4"
        />

        <MenuSection
          emoji="🥪"
          label="Build Your Own"
          title="Sandwiches"
          products={SANDWICHES}
        />

        <MenuSection
          emoji="🥞"
          label="Sweet & Savoury"
          title="Pancakes"
          products={PANCAKES}
          columns="grid-cols-2 md:grid-cols-4"
        />
      </section>

      {/* ── Contact & Map ── */}
      <section id="contact" className="mt-20 bg-[var(--bg-soft)] px-4 py-16">
        <div className="page-wrap">
          <div className="mb-10 text-center">
            <p className="section-label">Find Us</p>
            <h2 className="display-title mt-1 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
              Visit or Order
            </h2>
            <p className="mt-2 text-[var(--text-secondary)]">
              Come in, or call us to place your order ahead of time.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact info */}
            <div className="card-shell p-8">
              <h3 className="mb-6 text-xl font-bold text-[var(--text-primary)]">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] text-[var(--accent-deep)]">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="m-0 font-semibold text-[var(--text-primary)]">Address</p>
                    <p className="m-0 text-sm text-[var(--text-secondary)]">
                      Skopje, Macedonia<br />
                      <span className="italic opacity-70">(exact address coming soon)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] text-[var(--accent-deep)]">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="m-0 font-semibold text-[var(--text-primary)]">Phone</p>
                    <a
                      href="tel:+38900000000"
                      className="text-sm font-semibold text-[var(--accent-deep)] hover:text-[var(--accent)]"
                    >
                      +389 00 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--accent-light)] text-[var(--accent-deep)]">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="m-0 font-semibold text-[var(--text-primary)]">Working Hours</p>
                    <p className="m-0 text-sm text-[var(--text-secondary)]">
                      Mon – Fri: 07:00 – 20:00<br />
                      Sat – Sun: 08:00 – 18:00
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-8 border-t border-[var(--line)] pt-6">
                <p className="mb-3 text-sm font-semibold text-[var(--text-muted)]">
                  Follow us
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
                src="https://www.openstreetmap.org/export/embed.html?bbox=21.38%2C41.97%2C21.48%2C42.02&layer=mapnik&marker=41.9965%2C21.4314"
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
