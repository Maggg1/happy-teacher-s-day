/* ── Hero Section — editorial, left-aligned ─────────────────────────────── */

function SakuraBloom({ cx, cy, r, light = '#ffd6e7', dark = '#f9a8c9' }) {
  return (
    <g>
      {[0, 72, 144, 216, 288].map((deg, i) => (
        <ellipse
          key={i}
          cx={cx}
          cy={cy - r * 0.72}
          rx={r * 0.44}
          ry={r * 0.9}
          fill={i % 2 === 0 ? dark : light}
          opacity="0.88"
          transform={`rotate(${deg},${cx},${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.32} fill="#fff5e6" />
      <circle cx={cx} cy={cy} r={r * 0.16} fill="#ffd6a5" />
    </g>
  )
}

function BotanicalIllustration() {
  return (
    <svg
      viewBox="0 0 320 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Main branch */}
      <path
        d="M295 545 C275 460 238 390 210 320 C182 250 172 190 158 120 C148 68 152 30 148 6"
        stroke="#c2185b" strokeWidth="7" strokeLinecap="round" opacity="0.6"
      />
      {/* Branch left 1 */}
      <path
        d="M210 322 C184 296 148 274 110 256 C72 238 38 232 8 220"
        stroke="#c2185b" strokeWidth="4.5" strokeLinecap="round" opacity="0.5"
      />
      {/* Branch right */}
      <path
        d="M195 240 C218 214 246 192 270 166"
        stroke="#c2185b" strokeWidth="3.5" strokeLinecap="round" opacity="0.45"
      />
      {/* Branch left 2 */}
      <path
        d="M162 132 C132 114 100 106 68 98"
        stroke="#c2185b" strokeWidth="3" strokeLinecap="round" opacity="0.4"
      />
      {/* Branch small */}
      <path
        d="M175 195 C195 182 210 166 225 148"
        stroke="#c2185b" strokeWidth="2.5" strokeLinecap="round" opacity="0.35"
      />

      {/* Blossoms */}
      <SakuraBloom cx={148} cy={12}  r={26} />
      <SakuraBloom cx={12}  cy={222} r={20} />
      <SakuraBloom cx={106} cy={258} r={22} />
      <SakuraBloom cx={270} cy={168} r={18} />
      <SakuraBloom cx={68}  cy={100} r={16} />
      <SakuraBloom cx={224} cy={150} r={14} light="#e8d5f5" dark="#c084fc" />

      {/* Loose petals drifting */}
      <ellipse cx={60}  cy={340} rx={5} ry={9}  fill="#ffd6e7" opacity="0.55" transform="rotate(25,60,340)"  />
      <ellipse cx={240} cy={420} rx={4} ry={8}  fill="#ffb3c6" opacity="0.45" transform="rotate(-20,240,420)" />
      <ellipse cx={150} cy={480} rx={5} ry={8}  fill="#ffd6e7" opacity="0.5"  transform="rotate(40,150,480)"  />
      <ellipse cx={310} cy={300} rx={4} ry={7}  fill="#e8d5f5" opacity="0.5"  transform="rotate(-35,310,300)" />
    </svg>
  )
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{ background: '#fdfaf6', zIndex: 2 }}
    >
      {/* Botanical — right side, desktop only */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[42%] pointer-events-none hidden lg:block"
        style={{ opacity: 0.22 }}
      >
        <BotanicalIllustration />
      </div>

      {/* Soft blush wash behind botanical */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none hidden lg:block"
        style={{
          background: 'linear-gradient(to left, rgba(252,228,236,0.35) 0%, transparent 100%)',
        }}
      />

      {/* ── Main content ── */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-14 lg:px-20 min-h-screen flex flex-col justify-center pt-20 md:pt-24 pb-16 md:pb-20">

        {/* Small label */}
        <p
          className="font-poppins text-xs tracking-[0.35em] uppercase text-pink-500/70 mb-6 animate-fade-in"
          style={{ animationDelay: '0.1s' }}
        >
          A heartfelt tribute
        </p>

        {/* Title block */}
        <div className="mb-8">
          <span
            className="font-dancing block text-pink-400 animate-fade-in"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', animationDelay: '0.2s' }}
          >
            Wishing you a
          </span>

          <h1
            className="font-dancing font-bold gradient-title animate-fade-in-up leading-tight"
            style={{
              fontSize: 'clamp(2.4rem, 11vw, 7.5rem)',
              animationDelay: '0.32s',
            }}
          >
            Happy Teacher's Day
          </h1>

          {/* Hand-drawn underline */}
          <div className="animate-fade-in mt-1" style={{ animationDelay: '0.7s' }}>
            <svg
              viewBox="0 0 460 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: 'min(460px, 95%)', height: '22px' }}
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="ulGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#c2185b" />
                  <stop offset="55%"  stopColor="#e91e8c" />
                  <stop offset="100%" stopColor="#9c27b0" />
                </linearGradient>
              </defs>
              <path
                d="M4 15 C60 5, 160 20, 260 11 C360 2, 420 17, 456 12"
                stroke="url(#ulGrad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="svg-underline"
              />
              {/* Second thinner line for hand-drawn feel */}
              <path
                d="M4 18 C80 12, 180 22, 280 16 C360 10, 420 20, 456 16"
                stroke="url(#ulGrad)"
                strokeWidth="1.5"
                strokeLinecap="round"
                opacity="0.35"
                className="svg-underline"
                style={{ animationDelay: '1.1s' }}
              />
            </svg>
          </div>
        </div>

        {/* Subtitle */}
        <p
          className="font-playfair italic text-base md:text-xl lg:text-2xl max-w-xl mb-8 md:mb-10 leading-relaxed animate-fade-in-up"
          style={{ color: '#7a3b5e', animationDelay: '0.55s' }}
        >
          To the teacher who made every lesson feel like magic,
          every day a little brighter, and every dream more possible.
        </p>

        {/* CTA */}
        <div className="animate-fade-in" style={{ animationDelay: '1.1s' }}>
          <button
            onClick={() =>
              document.getElementById('appreciation')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="hero-link font-poppins text-sm tracking-wide"
            style={{ color: '#c2185b', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <span className="relative">
              Read the letter
              <span
                className="underline-bar absolute left-0 -bottom-0.5 h-px w-full"
                style={{ background: '#c2185b' }}
              />
            </span>
            <span className="arrow ml-2" aria-hidden="true">→</span>
          </button>
        </div>

        {/* Year stamp */}
        <p
          className="font-poppins text-xs tracking-[0.25em] uppercase text-pink-400/40 mt-10 md:mt-16 animate-fade-in"
          style={{ animationDelay: '1.4s' }}
        >
          2026 · Celebrating teachers everywhere
        </p>
      </div>

      {/* Scroll nudge */}
      <button
        className="absolute bottom-8 right-10 hidden md:flex flex-col items-center gap-1 text-pink-400/40 hover:text-pink-500/70 transition-colors animate-fade-in"
        style={{ animationDelay: '1.6s' }}
        onClick={() =>
          document.getElementById('appreciation')?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="Scroll down"
      >
        <span className="font-poppins text-[10px] tracking-widest uppercase">scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </button>
    </section>
  )
}
