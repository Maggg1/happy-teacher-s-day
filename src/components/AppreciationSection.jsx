/* ── Appreciation Section — letter / journal style ──────────────────────── */

function WaxSeal() {
  return (
    <div
      className="relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center animate-heartbeat"
      style={{
        background: 'radial-gradient(circle at 38% 38%, #e91e8c, #880e4f)',
        boxShadow: '0 4px 14px rgba(136,14,79,0.45)',
      }}
      aria-hidden="true"
    >
      <span style={{ fontSize: '1.6rem' }}>🌸</span>
    </div>
  )
}

function FloralSprig({ style }) {
  return (
    <svg
      width="80" height="130"
      viewBox="0 0 80 130"
      fill="none"
      className="absolute animate-sway"
      style={{ opacity: 0.55, ...style }}
      aria-hidden="true"
    >
      {/* Stem */}
      <path d="M40 125 C38 100 36 75 38 50 C39 30 40 14 40 4"
        stroke="#a8d5a2" strokeWidth="3" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M40 90 C30 78 18 72 8 66 C18 68 30 76 40 90Z"
        fill="#b8e0b0" opacity="0.8" />
      <path d="M40 70 C52 58 62 54 72 48 C62 52 52 58 40 70Z"
        fill="#b8e0b0" opacity="0.7" />
      {/* Bloom */}
      {[0,72,144,216,288].map((deg, i) => (
        <ellipse
          key={i}
          cx="40" cy="8" rx="7" ry="14"
          fill={i % 2 === 0 ? '#f9a8c9' : '#ffd6e7'}
          opacity="0.88"
          transform={`rotate(${deg},40,10)`}
        />
      ))}
      <circle cx="40" cy="10" r="5.5" fill="#fff5e6" />
      <circle cx="40" cy="10" r="2.5" fill="#ffd6a5" />
    </svg>
  )
}

export default function AppreciationSection() {
  return (
    <section
      id="appreciation"
      className="relative py-24 px-8 md:px-14 lg:px-20 overflow-hidden"
      style={{ background: '#fff9f4', zIndex: 2 }}
    >
      {/* Sprig decorations */}
      <FloralSprig style={{ top: '6%',  left: '2%',  animationDelay: '0s'   }} />
      <FloralSprig style={{ top: '6%',  right: '2%', animationDelay: '0.8s' }} />
      <FloralSprig style={{ bottom: '4%', left: '5%', animationDelay: '0.4s', transform: 'scaleX(-1)' }} />
      <FloralSprig style={{ bottom: '4%', right: '5%',animationDelay: '1.2s' }} />

      <div className="relative max-w-6xl mx-auto px-2 md:px-8 lg:px-14" style={{ zIndex: 5 }}>

        {/* Section label */}
        <div className="flex items-center gap-3 mb-8 animate-fade-in">
          <p className="font-poppins text-xs tracking-[0.3em] uppercase text-pink-600/60">
            A letter of gratitude
          </p>
          <div className="h-px w-16" style={{ background: 'rgba(194,24,91,0.2)' }} />
        </div>

        {/* Heading */}
        <h2
          className="font-playfair font-semibold mb-2 animate-fade-in-up delay-100"
          style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', color: '#5c1a3e' }}
        >
          To a Teacher Like No Other
        </h2>
        <p
          className="font-dancing text-pink-500 text-xl mb-10 animate-fade-in delay-200"
        >
          — read with a warm cup of tea ☕
        </p>

        {/* Letter card — capped for readability */}
        <div className="letter-card rounded-2xl p-8 md:p-12 animate-scale-in delay-300"
          style={{ borderLeft: '4px solid #c2185b' }}
        >
          {/* Letter header */}
          <div className="mb-8 pb-5"
            style={{ borderBottom: '1px dashed rgba(194,24,91,0.18)' }}
          >
            <p className="font-poppins text-xs text-pink-400/60 uppercase tracking-widest mb-1">To</p>
            <p className="font-playfair text-xl font-semibold" style={{ color: '#5c1a3e' }}>
              Miss Jusvinia
            </p>
          </div>

          {/* Body — first paragraph has drop cap */}
          <div className="drop-cap mb-5 text-base md:text-[1.06rem] leading-[1.85] font-poppins font-light"
            style={{ color: '#3d2535' }}
          >
            There are those rare souls in life who shape you — not just through
            lessons learned, but through the way they make you feel: seen, capable,
            and worthy of every dream you carry.
            You are one of those souls.
          </div>

          <p className="mb-5 text-base md:text-[1.06rem] leading-[1.85] font-poppins font-light"
            style={{ color: '#3d2535' }}>
            With every patient explanation, every kind glance of encouragement,
            every moment you chose to believe in us when we doubted ourselves —
            you wove something irreplaceable into who we are. Teachers like you
            are the quiet architects of futures, planting seeds of curiosity and
            watering them with unwavering love.
          </p>

          {/* Pull quote */}
          <blockquote
            className="my-8 pl-5 font-playfair italic text-lg md:text-xl leading-relaxed"
            style={{
              borderLeft: '2px solid #e91e8c',
              color: '#880e4f',
            }}
          >
            "The memories you have gifted us will not fade with time. They bloom
            inside our hearts — as permanent and beautiful as the very first
            flower of spring."
          </blockquote>

          <p className="text-base md:text-[1.06rem] leading-[1.85] font-poppins font-light"
            style={{ color: '#3d2535' }}>
            Thank you for choosing this calling, giving it your whole heart, and
            showing us, every single day, what it truly means to care.
          </p>

          {/* Closing */}
          <div className="mt-10 pt-6" style={{ borderTop: '1px dashed rgba(194,24,91,0.18)' }}>
            <p className="font-poppins text-xs text-pink-400/60 uppercase tracking-widest mb-2">
              With all our love,
            </p>
            <p className="font-dancing text-3xl" style={{ color: '#c2185b' }}>
              Your students 🌸
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
