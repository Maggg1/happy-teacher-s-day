/* ── Quote Cards — sticky notes on a soft surface ───────────────────────── */

const NOTES = [
  {
    quote: 'A good teacher can inspire hope, ignite the imagination, and instill a love of learning.',
    author: 'Brad Henry',
    bg: '#fef9c3',
    pin: 'pin-amber',
    rotate: '-3deg',
    delay: '0s',
    icon: '✏️',
  },
  {
    quote: 'Teaching is the greatest act of optimism.',
    author: 'Colleen Wilcox',
    bg: '#fce7f3',
    pin: 'pin-red',
    rotate: '2.2deg',
    delay: '0.12s',
    icon: '🌸',
  },
  {
    quote: 'The influence of a good teacher can never be erased.',
    author: 'Unknown',
    bg: '#ede9fe',
    pin: 'pin-purple',
    rotate: '-1.5deg',
    delay: '0.24s',
    icon: '💜',
  },
  {
    quote: 'Education is not the filling of a pail, but the lighting of a fire.',
    author: 'W. B. Yeats',
    bg: '#dcfce7',
    pin: 'pin-teal',
    rotate: '3deg',
    delay: '0.36s',
    icon: '🔥',
  },
]

function StickyNote({ quote, author, bg, pin, rotate, delay, icon }) {
  return (
    <div
      className={`sticky-note ${pin} animate-scale-in`}
      style={{
        background: bg,
        transform: `rotate(${rotate})`,
        borderRadius: '3px',
        padding: '28px 24px 24px',
        animationDelay: delay,
      }}
    >
      {/* Icon */}
      <div className="text-2xl mb-4" aria-hidden="true">{icon}</div>

      {/* Ruled lines (notebook paper feel) */}
      <div className="mb-4 space-y-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="h-px"
            style={{ background: 'rgba(0,0,0,0.06)' }}
          />
        ))}
      </div>

      {/* Quote text sits on the lines */}
      <p
        className="font-playfair italic text-base leading-[1.75] relative"
        style={{ color: '#2d1f2e', marginTop: '-4.4rem' }}
      >
        {quote}
      </p>

      {/* Author */}
      <p
        className="font-poppins text-xs mt-5 tracking-wider"
        style={{ color: 'rgba(45,31,46,0.45)', textTransform: 'uppercase' }}
      >
        — {author}
      </p>
    </div>
  )
}

export default function QuoteCards() {
  return (
    <section
      id="quotes"
      className="relative py-16 md:py-24 px-5 md:px-6 overflow-hidden"
      style={{ background: '#fdfbf7', zIndex: 2 }}
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto" style={{ zIndex: 5 }}>

        {/* Header */}
        <div className="mb-8 md:mb-14">
          <p className="font-poppins text-xs tracking-[0.35em] uppercase text-pink-500/60 mb-3 animate-fade-in">
            Words worth keeping
          </p>
          <h2
            className="font-playfair font-semibold animate-fade-in-up delay-100"
            style={{ fontSize: 'clamp(1.9rem, 5.5vw, 3rem)', color: '#5c1a3e' }}
          >
            Pinned to My Heart
          </h2>
        </div>

        {/* Notes — offset grid so they look naturally scattered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-start">
          {NOTES.map((note, i) => (
            <div
              key={i}
              style={{ marginTop: i % 2 === 1 ? '24px' : '0' }}
            >
              <StickyNote {...note} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
