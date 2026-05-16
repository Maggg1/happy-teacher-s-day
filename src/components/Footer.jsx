/* ── Footer ──────────────────────────────────────────────────────────────── */

function WaveTop() {
  return (
    <div
      className="absolute top-0 left-0 right-0 overflow-hidden pointer-events-none"
      style={{ height: 52, marginTop: -1 }}
    >
      <svg
        viewBox="0 0 1440 52"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height: '100%' }}
        aria-hidden="true"
      >
        <path
          d="M0 26 C120 4, 240 50, 360 26 C480 4, 600 50, 720 26 C840 4, 960 50, 1080 26 C1200 4, 1320 50, 1440 26 L1440 0 L0 0 Z"
          fill="#fdf5f9"
        />
      </svg>
    </div>
  )
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative pt-28 pb-16 px-8 md:px-16 overflow-hidden"
      style={{ background: '#6d1b3e', zIndex: 2 }}
    >
      <WaveTop />

      {/* A few drifting petals — subtle, not the show */}
      {[
        { left: '8%',  dur: '14s', del: '0s',   rot: 20  },
        { left: '22%', dur: '11s', del: '3.5s', rot: 80  },
        { left: '55%', dur: '16s', del: '1.2s', rot: 145 },
        { left: '72%', dur: '12s', del: '6s',   rot: 210 },
        { left: '88%', dur: '15s', del: '2.8s', rot: 300 },
      ].map((p, i) => (
        <div
          key={i}
          className="animate-petal-fall"
          style={{
            position: 'absolute', top: '-30px', left: p.left,
            width: '10px', height: '7px',
            borderRadius: '50% 0 50% 0',
            background: 'rgba(255,182,193,0.55)',
            animationDuration: p.dur,
            animationDelay: p.del,
            transform: `rotate(${p.rot}deg)`,
            opacity: 0,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
      ))}

      {/* ── Content ── */}
      <div className="relative max-w-4xl mx-auto" style={{ zIndex: 5 }}>

        {/* Big closing statement — left-aligned */}
        <p
          className="font-playfair italic text-white/40 text-sm mb-4 animate-fade-in"
          style={{ letterSpacing: '0.02em' }}
        >
          A note to close with —
        </p>

        <h2
          className="font-playfair italic font-normal text-white animate-fade-in-up delay-100 mb-6"
          style={{ fontSize: 'clamp(2rem, 6vw, 3.8rem)', lineHeight: 1.2, maxWidth: '680px' }}
        >
          You didn't just teach us.<br />
          You changed us.
        </h2>

        {/* Thin rule */}
        <div
          className="mb-8 animate-fade-in delay-200"
          style={{ width: '60px', height: '2px', background: 'rgba(255,182,193,0.5)' }}
        />

        {/* Signature block */}
        <div className="animate-fade-in delay-300">
          <p className="font-poppins text-white/50 text-sm mb-1">
            Thank you,
          </p>
          <p
            className="font-dancing font-bold"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', color: '#ffd6e7' }}
          >
            Miss Jusvinia 🌸
          </p>
          <p className="font-poppins text-white/35 text-xs mt-2 tracking-wide">
            — Teacher's Day, 2026
          </p>
        </div>

        {/* Bottom row */}
        <div
          className="flex items-end justify-between mt-20 pt-6 animate-fade-in delay-500"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="font-poppins text-[11px] text-white/20 tracking-wide">
            For the teacher who made the difference.
          </p>
          <button
            className="font-poppins text-[11px] text-white/25 hover:text-white/55 transition-colors tracking-widest uppercase"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  )
}
