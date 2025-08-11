import React, { useEffect, useRef, useState } from 'react'

// InkBloomTransition — full-screen organic ink bloom overlay, controllable via imperative handle
export interface InkBloomHandle {
  trigger: (x?: number, y?: number, color?: string) => void
}

export const InkBloomTransition = React.forwardRef<InkBloomHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [ready, setReady] = useState(false)
  const state = useRef<{ active: boolean; t: number; cx: number; cy: number; hue: string }>({ active: false, t: 0, cx: 0, cy: 0, hue: '' })

  React.useImperativeHandle(ref, () => ({
    trigger: (x?: number, y?: number, color?: string) => {
      const c = canvasRef.current
      if (!c) return
      const rect = c.getBoundingClientRect()
      state.current = {
        active: true,
        t: 0,
        cx: x ?? rect.width / 2,
        cy: y ?? rect.height / 2,
        hue: color ?? `hsla(${getComputedStyle(document.documentElement).getPropertyValue('--primary') || '0 0% 98%'}, 1)`
      }
    }
  }), [])

  useEffect(() => {
    const c = canvasRef.current!
    const ctx = c.getContext('2d')!
    const dpi = window.devicePixelRatio || 1

    const resize = () => {
      c.width = Math.floor(window.innerWidth * dpi)
      c.height = Math.floor(window.innerHeight * dpi)
      c.style.width = window.innerWidth + 'px'
      c.style.height = window.innerHeight + 'px'
    }
    resize()
    window.addEventListener('resize', resize)
    setReady(true)

    let raf = 0
    const tick = () => {
      const s = state.current
      ctx.clearRect(0,0,c.width,c.height)
      if (s.active) {
        s.t += 0.016
        const maxR = Math.hypot(c.width, c.height) * 0.6
        const r = easeOutCubic(Math.min(1, s.t/0.8)) * maxR

        // Draw multiple perturbed blobs to simulate ink tendrils
        for (let i = 0; i < 22; i++) {
          const ang = (i / 22) * Math.PI * 2
          const jitter = (noise1D(i * 13.37 + s.t * 1.8) - 0.5) * 120 * dpi
          const rr = r + jitter
          ctx.beginPath()
          ctx.fillStyle = s.hue.replace(', 1)', ', 0.06)')
          ctx.arc((s.cx * dpi) + Math.cos(ang) * rr, (s.cy * dpi) + Math.sin(ang) * rr, 60 * dpi, 0, Math.PI*2)
          ctx.fill()
        }

        // Fade down when full
        if (s.t > 1.2) {
          ctx.fillStyle = 'rgba(0,0,0,0.25)'
          ctx.fillRect(0,0,c.width,c.height)
        }
        if (s.t > 1.5) {
          s.active = false
          s.t = 0
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-[9998] pointer-events-none" style={{ opacity: ready ? 1 : 0 }} aria-hidden />
})

function easeOutCubic(x: number) { return 1 - Math.pow(1 - x, 3) }
function noise1D(x: number) { return fract(Math.sin(x) * 43758.5453) }
function fract(x: number) { return x - Math.floor(x) }
