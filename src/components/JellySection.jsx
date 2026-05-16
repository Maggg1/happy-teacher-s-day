/* ── Jelly Section — interactive squish canvas ──────────────────────────── */
import { useRef, useEffect } from 'react'
import jellyImgSrc from '../assets/yenjelly.png'

const W = 300, H = 300
const COLS = 20, ROWS = 20
const STIFFNESS = 0.18
const DAMPING   = 0.72
const IDLE_AMP  = 3

function initGrid() {
  const pts = []
  for (let r = 0; r <= ROWS; r++)
    for (let c = 0; c <= COLS; c++)
      pts.push({ ox: (c/COLS)*W, oy: (r/ROWS)*H,
                 x:  (c/COLS)*W, y:  (r/ROWS)*H, vx: 0, vy: 0 })
  return pts
}

function applyHit(pts, nx, ny, strength) {
  pts.forEach(p => {
    const dx = p.ox/W - nx
    const dy = p.oy/H - ny
    const dist = Math.sqrt(dx*dx + dy*dy) + 0.001
    const force = strength / (dist*dist + 0.3)
    p.vx += dx * force * 0.3
    p.vy += dy * force * 0.3
  })
}

function stepPhysics(pts, time) {
  pts.forEach((p, i) => {
    const r = Math.floor(i / (COLS+1))
    const c = i % (COLS+1)
    const idleX = Math.sin(time + r*0.4) * IDLE_AMP * (c/COLS - 0.5)
    const idleY = Math.sin(time*0.7 + c*0.3) * IDLE_AMP * 0.5
    p.vx += (p.ox + idleX - p.x) * STIFFNESS
    p.vy += (p.oy + idleY - p.y) * STIFFNESS
    p.vx *= DAMPING
    p.vy *= DAMPING
    p.x  += p.vx
    p.y  += p.vy
  })
}

function drawTriangle(ctx, img, x0,y0, x1,y1, x2,y2, u0,v0, u1,v1, u2,v2) {
  ctx.save()
  ctx.beginPath()
  ctx.moveTo(x0,y0); ctx.lineTo(x1,y1); ctx.lineTo(x2,y2)
  ctx.closePath(); ctx.clip()

  const denom = u0*(v1-v2) + u1*(v2-v0) + u2*(v0-v1)
  if (Math.abs(denom) < 0.0001) { ctx.restore(); return }

  const a = (x0*(v1-v2) + x1*(v2-v0) + x2*(v0-v1)) / denom
  const b = (y0*(v1-v2) + y1*(v2-v0) + y2*(v0-v1)) / denom
  const c = (x0*(u2-u1) + x1*(u0-u2) + x2*(u1-u0)) / denom
  const d = (y0*(u2-u1) + y1*(u0-u2) + y2*(u1-u0)) / denom
  const e = (x0*(u1*v2-u2*v1) + x1*(u2*v0-u0*v2) + x2*(u0*v1-u1*v0)) / denom
  const f = (y0*(u1*v2-u2*v1) + y1*(u2*v0-u0*v2) + y2*(u0*v1-u1*v0)) / denom

  ctx.transform(a, b, c, d, e, f)
  ctx.drawImage(img, 0, 0)
  ctx.restore()
}

function drawMesh(ctx, img, pts) {
  if (!img.complete || img.naturalWidth === 0) return
  ctx.clearRect(0,0,W,H)
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const tl = pts[r*(COLS+1)+c],   tr = pts[r*(COLS+1)+c+1]
      const bl = pts[(r+1)*(COLS+1)+c], br = pts[(r+1)*(COLS+1)+c+1]
      const sx = (c/COLS)*img.naturalWidth,  sy = (r/ROWS)*img.naturalHeight
      const sw = img.naturalWidth/COLS,      sh = img.naturalHeight/ROWS
      drawTriangle(ctx,img, tl.x,tl.y, tr.x,tr.y, br.x,br.y, sx,sy, sx+sw,sy, sx+sw,sy+sh)
      drawTriangle(ctx,img, tl.x,tl.y, br.x,br.y, bl.x,bl.y, sx,sy, sx+sw,sy+sh, sx,sy+sh)
    }
  }
}

function spawnHearts(x, y) {
  const symbols = ['♡','♡','✿','·']
  for (let i = 0; i < 5; i++) {
    const el = document.createElement('span')
    el.className = 'jelly-heart'
    el.textContent = symbols[Math.floor(Math.random()*symbols.length)]
    const angle = Math.random()*160 - 80
    el.style.setProperty('--x', angle + 'px')
    el.style.left = (x + Math.random()*40 - 20) + 'px'
    el.style.top  = y + 'px'
    el.style.color = `hsl(${325 + Math.random()*35}, 75%, 62%)`
    el.style.animationDelay = (i * 0.07) + 's'
    document.body.appendChild(el)
    el.addEventListener('animationend', () => el.remove())
  }
}

export default function JellySection() {
  const canvasRef = useRef(null)
  const shadowRef = useRef(null)
  const imgRef    = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const shadow = shadowRef.current
    const img    = imgRef.current
    if (!canvas || !shadow || !img) return

    const ctx = canvas.getContext('2d')
    let pts = initGrid()
    let time = 0
    let rafId = null

    function loop() {
      time += 0.025
      stepPhysics(pts, time)

      const bottomMid = pts[ROWS*(COLS+1) + Math.floor(COLS/2)]
      const squish = 1 + (bottomMid.y - bottomMid.oy) / 60
      shadow.style.transform = `scaleX(${squish.toFixed(2)}) scaleY(${(1/squish).toFixed(2)})`

      drawMesh(ctx, img, pts)
      rafId = requestAnimationFrame(loop)
    }

    function startLoop() {
      if (rafId !== null) return
      loop()
    }

    if (img.complete && img.naturalWidth > 0) {
      startLoop()
    } else {
      img.addEventListener('load', startLoop, { once: true })
    }

    function onTap(ex, ey) {
      const rect = canvas.getBoundingClientRect()
      applyHit(pts, (ex - rect.left)/W, (ey - rect.top)/H, 22 + Math.random()*8)
      spawnHearts(ex, ey)
    }

    const onClick      = e => onTap(e.clientX, e.clientY)
    const onTouchStart = e => { e.preventDefault(); onTap(e.touches[0].clientX, e.touches[0].clientY) }

    canvas.addEventListener('click', onClick)
    canvas.addEventListener('touchstart', onTouchStart, { passive: false })

    return () => {
      cancelAnimationFrame(rafId)
      canvas.removeEventListener('click', onClick)
      canvas.removeEventListener('touchstart', onTouchStart)
    }
  }, [])

  return (
    <section
      className="relative py-16 overflow-hidden flex flex-col items-center"
      style={{ background: '#fff9f4', zIndex: 2 }}
    >
      {/* Hidden img drives the canvas — React handles its load lifecycle */}
      <img ref={imgRef} src={jellyImgSrc} alt="" style={{ display: 'none' }} />
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        style={{ cursor: 'pointer', display: 'block', touchAction: 'none' }}
      />
      <div
        ref={shadowRef}
        style={{
          width: '140px', height: '18px',
          background: 'radial-gradient(ellipse, rgba(180,80,110,0.25) 0%, transparent 70%)',
          borderRadius: '50%',
          marginTop: '-6px',
          transition: 'transform 0.2s ease',
        }}
      />
      <p
        className="jelly-hint font-poppins mt-4 text-xs tracking-[0.18em]"
        style={{ color: 'rgba(180,80,110,0.7)' }}
      >
        ✦ tap to squish ✦
      </p>
    </section>
  )
}
