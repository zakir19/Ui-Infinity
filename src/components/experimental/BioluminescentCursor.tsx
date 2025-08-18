import React, { useEffect, useRef, useState } from 'react'

// BioluminescentCursor — soft orb with decaying particle trail; activates edge veins on [data-bio-hover]
export const BioluminescentCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [enabled, setEnabled] = useState(false)
  const hoveredRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || prefersReduced) return
    setEnabled(true)

    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const dpi = window.devicePixelRatio || 1

    const resize = () => {
      canvas.width = Math.floor(window.innerWidth * dpi)
      canvas.height = Math.floor(window.innerHeight * dpi)
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
    }
    resize()
    window.addEventListener('resize', resize)

    const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary') || '0 0% 98%'
    const glow = (a: number) => `hsla(${primary}, ${a})`

    const particles: {x:number;y:number;vx:number;vy:number;life:number}[] = []
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2

    const onMove = (e: PointerEvent) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('pointermove', onMove)

    const tick = () => {
      // Particles spawn
      for (let i = 0; i < 6; i++) {
        const a = Math.random() * Math.PI * 2
        const s = 0.6 + Math.random() * 0.8
        particles.push({ x: mx, y: my, vx: Math.cos(a) * s, vy: Math.sin(a) * s, life: 1 })
      }

      ctx.clearRect(0,0,canvas.width, canvas.height)

      // Trail
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.02
        if (p.life <= 0) { particles.splice(i,1); continue }
        ctx.beginPath()
        ctx.fillStyle = glow(0.08 * p.life)
        ctx.shadowColor = glow(0.15 * p.life)
        ctx.shadowBlur = 20 * dpi
        ctx.arc(p.x * dpi, p.y * dpi, 3 * dpi * p.life, 0, Math.PI*2)
        ctx.fill()
      }

      // Core orb
      ctx.beginPath()
      ctx.fillStyle = glow(0.4)
      ctx.shadowColor = glow(0.6)
      ctx.shadowBlur = 40 * dpi
      ctx.arc(mx * dpi, my * dpi, 6 * dpi, 0, Math.PI*2)
      ctx.fill()

      // Vein highlight on hovered element
      if (hoveredRef.current) drawVeins(ctx, hoveredRef.current, dpi, glow)

      raf = requestAnimationFrame(tick)
    }

    let raf = requestAnimationFrame(tick)

    const onOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-bio-hover]') as HTMLElement | null
      hoveredRef.current = target
    }
    window.addEventListener('mouseover', onOver, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  if (!enabled) return null
  return <canvas ref={canvasRef} className="fixed inset-0 z-[9996] pointer-events-none" aria-hidden />
}

function drawVeins(ctx: CanvasRenderingContext2D, el: HTMLElement, dpi: number, glow: (a:number)=>string) {
  const r = el.getBoundingClientRect()
  const pad = 6
  const x = (r.left - pad) * dpi
  const y = (r.top - pad) * dpi
  const w = (r.width + pad*2) * dpi
  const h = (r.height + pad*2) * dpi

  // Perimeter trace
  ctx.save()
  ctx.strokeStyle = glow(0.25)
  ctx.lineWidth = 2 * dpi
  ctx.shadowColor = glow(0.4)
  ctx.shadowBlur = 18 * dpi
  ctx.strokeRect(x, y, w, h)

  // Simple branching capillaries inward
  const branches = 14
  for (let i = 0; i < branches; i++) {
    const side = i % 4
    const t = (i / branches)
    let sx = x, sy = y
    if (side === 0) { sx = x + t * w; sy = y }
    if (side === 1) { sx = x + w; sy = y + t * h }
    if (side === 2) { sx = x + (1 - t) * w; sy = y + h }
    if (side === 3) { sx = x; sy = y + (1 - t) * h }

    const ex = x + w/2 + (Math.random()-0.5)*w*0.2
    const ey = y + h/2 + (Math.random()-0.5)*h*0.2

    ctx.beginPath()
    ctx.moveTo(sx, sy)
    const cx = (sx + ex)/2 + (Math.random()-0.5)*20*dpi
    const cy = (sy + ey)/2 + (Math.random()-0.5)*20*dpi
    ctx.quadraticCurveTo(cx, cy, ex, ey)
    ctx.stroke()
  }

  ctx.restore()
}
