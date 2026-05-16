/* ── Gallery Section — scattered photos on a surface ────────────────────── */
import { useState } from 'react'

const base = import.meta.env.BASE_URL

const PHOTOS = [
  { src: `${base}p1.jpg`, alt: 'always smiling',
    rotate: '-5deg',
    style: { top: '5%',    left: '0%',   width: '46%' },
    z: 2 },
  { src: `${base}p2.jpg`, alt: 'Oct 9, 2024',
    rotate: '3.5deg',
    style: { top: '2%',    right: '1%',  width: '40%' },
    z: 1 },
  { src: `${base}p3.jpg`, alt: 'together',
    rotate: '-2deg',
    style: { top: '32%',   left: '28%',  width: '42%' },
    z: 3 },
  { src: `${base}p4.jpg`, alt: 'our little family',
    rotate: '5deg',
    style: { bottom: '2%', left: '4%',   width: '37%' },
    z: 2 },
  { src: `${base}p5.jpg`, alt: 'thank you',
    rotate: '-4deg',
    style: { bottom: '1%', right: '2%',  width: '40%' },
    z: 1 },
]

function ScatteredPhoto({ src, alt, rotate, style, z, active, onEnter, onLeave }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: 'absolute',
        ...style,
        zIndex: active ? 20 : z,
        transform: `rotate(${active ? '0deg' : rotate})`,
        transition: 'transform 0.35s cubic-bezier(0.34,1.3,0.64,1), box-shadow 0.35s ease',
        boxShadow: active
          ? '4px 8px 32px rgba(0,0,0,0.22)'
          : '2px 4px 14px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        lineHeight: 0,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          border: '6px solid #fff',
          borderBottom: '6px solid #fff',
        }}
        loading="lazy"
        draggable={false}
      />
    </div>
  )
}

export default function GallerySection() {
  const [activeIdx, setActiveIdx] = useState(null)

  return (
    <section
      id="gallery"
      className="relative py-16 md:py-24 px-5 md:px-6 overflow-hidden"
      style={{ background: '#fdf5f9', zIndex: 2 }}
    >
      <div className="relative max-w-4xl mx-auto" style={{ zIndex: 5 }}>

        {/* Header */}
        <div className="mb-8 md:mb-12">
          <p className="font-poppins text-xs tracking-[0.35em] uppercase text-pink-500/60 mb-3 animate-fade-in">
            moments worth keeping
          </p>
          <h2
            className="font-playfair font-semibold animate-fade-in-up delay-100"
            style={{ fontSize: 'clamp(1.9rem, 5.5vw, 3rem)', color: '#5c1a3e' }}
          >
            Our Memories Together
          </h2>
        </div>

        {/* ── Desktop: scattered absolute layout ── */}
        <div
          className="relative hidden md:block animate-fade-in delay-300"
          style={{ minHeight: '560px' }}
        >
          {PHOTOS.map((p, i) => (
            <ScatteredPhoto
              key={i}
              {...p}
              active={activeIdx === i}
              onEnter={() => setActiveIdx(i)}
              onLeave={() => setActiveIdx(null)}
            />
          ))}
        </div>

        {/* ── Mobile: polaroid layout — first photo full-width, rest in pairs ── */}
        <div className="grid grid-cols-2 gap-5 md:hidden animate-fade-in delay-200">
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className={i === 0 ? 'col-span-2' : ''}
              style={{
                background: '#fff',
                padding: '8px 8px 36px',
                boxShadow: '2px 4px 16px rgba(0,0,0,0.13)',
                transform: `rotate(${p.rotate})`,
                lineHeight: 0,
              }}
            >
              <img
                src={p.src}
                alt={p.alt}
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                loading="lazy"
                draggable={false}
              />
              <p
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: i === 0 ? '0.95rem' : '0.78rem',
                  color: '#be185d',
                  textAlign: 'center',
                  lineHeight: 1,
                  paddingTop: '10px',
                  letterSpacing: '0.02em',
                }}
              >
                {p.alt}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          className="text-center font-dancing mt-12 md:mt-16 animate-fade-in delay-500"
          style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)', color: '#be185d' }}
        >
          Every photo a reminder — we were lucky to have you. 🌷
        </p>
      </div>
    </section>
  )
}
