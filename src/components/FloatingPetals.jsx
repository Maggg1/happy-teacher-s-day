import { useMemo } from 'react'

const PALETTE = [
  ['#ffb3c6', '#ff8fab'],
  ['#ffd6e7', '#ffb3c6'],
  ['#e8d5f5', '#d4b8e0'],
  ['#ffc8a2', '#ffb085'],
  ['#f8c8d4', '#f0a0b8'],
]

export default function FloatingPetals({ count = 18 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const [a, b] = PALETTE[i % PALETTE.length]
        return {
          id: i,
          left: `${((i * 5.7 + Math.sin(i * 1.9) * 6 + 50) % 100).toFixed(1)}%`,
          w: 7 + (i % 6) * 2,
          h: 5 + (i % 6) * 1.5,
          dur: `${12 + (i % 8) * 1.6}s`,
          del: `${((i * 0.72) % 14).toFixed(2)}s`,
          rot: i * 47,
          bg: `linear-gradient(135deg, ${a}, ${b})`,
          goLeft: i % 3 === 2,
          br: i % 3 === 0 ? '50% 0 50% 0' : i % 3 === 1 ? '70% 30% 70% 30%' : '30% 70% 30% 70%',
        }
      }),
    [count],
  )

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <div
          key={p.id}
          className={p.goLeft ? 'animate-petal-fall-left' : 'animate-petal-fall'}
          style={{
            position: 'absolute',
            left: p.left, top: '-35px',
            width: `${p.w}px`, height: `${p.h}px`,
            borderRadius: p.br,
            background: p.bg,
            animationDuration: p.dur,
            animationDelay: p.del,
            transform: `rotate(${p.rot}deg)`,
            opacity: 0,
            filter: 'blur(0.3px)',
          }}
        />
      ))}
    </div>
  )
}
