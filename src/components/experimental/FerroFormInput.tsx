import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// FerroFormInput — ferrofluid-inspired input with magnetic label coalescence and liquid-traced border
// Notes:
// - Uses a lightweight 2D canvas for a dynamic “spike” ridge around the border
// - Label glyphs animate upward and condense into a capsule on focus
// - Colors rely on semantic tokens via CSS variables

interface FerroFormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
}

export const FerroFormInput: React.FC<FerroFormInputProps> = ({ label, className = '', onFocus, onBlur, ...inputProps }) => {
  const [focused, setFocused] = useState(false)
  const [value, setValue] = useState('')
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [capsuleX, setCapsuleX] = useState(0)

  const glyphs = useMemo(() => label.split(''), [label])

  useEffect(() => {
    const canvas = canvasRef.current
    const el = containerRef.current
    if (!canvas || !el) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let t = 0

    const dpi = window.devicePixelRatio || 1
    const resize = () => {
      const { width, height } = el.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(width * dpi))
      canvas.height = Math.max(1, Math.floor(height * dpi))
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
    }
    resize()

    const readVar = (v: string) => getComputedStyle(el).getPropertyValue(v).trim()
    const primary = readVar('--primary') || '0 0% 98%'
    const borderCol = `hsla(${primary}, 0.8)`

    const draw = () => {
      t += 0.016
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      // Parameters for ferro spikes
      const spikeAmp = (focused ? 8 : 2) * (window.devicePixelRatio || 1)
      const spikeFreq = focused ? 3 : 1.2

      ctx.save()
      ctx.translate(0.5, 0.5)
      ctx.lineWidth = Math.max(1, 1.2 * (window.devicePixelRatio || 1))
      ctx.strokeStyle = borderCol
      ctx.beginPath()

      // Rounded-rect base
      const r = 12 * (window.devicePixelRatio || 1)
      const inset = r + 8
      const iw = w - inset * 2
      const ih = h - inset * 2

      // Helper to draw a spiky segment between two points
      const spiky = (x1: number, y1: number, x2: number, y2: number, normalX: number, normalY: number, length: number) => {
        const steps = 60
        for (let i = 0; i <= steps; i++) {
          const u = i / steps
          const x = x1 + (x2 - x1) * u
          const y = y1 + (y2 - y1) * u
          const n = Math.sin((u * Math.PI * 2 * spikeFreq) + t * (focused ? 4 : 1.5))
          const a = n * spikeAmp * (0.6 + 0.4 * Math.sin(t * 0.7 + u * 6))
          const px = x + normalX * a
          const py = y + normalY * a
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
      }

      const x1 = inset, y1 = inset
      const x2 = inset + iw, y2 = inset
      const x3 = inset + iw, y3 = inset + ih
      const x4 = inset, y4 = inset + ih

      spiky(x1, y1, x2, y2, 0, -1, ih)
      spiky(x2, y2, x3, y3, 1, 0, iw)
      spiky(x3, y3, x4, y4, 0, 1, ih)
      spiky(x4, y4, x1, y1, -1, 0, iw)

      ctx.stroke()
      ctx.restore()

      raf = requestAnimationFrame(draw)
    }

    raf = requestAnimationFrame(draw)
    const onResize = () => resize()
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [focused])

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Canvas border layer */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden />

      {/* Capsule label on focus */}
      <AnimatePresence>
        {(focused || value) && (
          <motion.div
            key="capsule"
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className="absolute -top-2 left-3 px-2 py-0.5 rounded-full bg-background text-foreground/80 text-xs border border-border shadow-sm"
            style={{ transformOrigin: `${capsuleX}% 50%` }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Glyphs magnetic lift on focus (decorative) */}
      <div className="absolute -top-0.5 left-3 flex gap-[1px] text-foreground/40 pointer-events-none" aria-hidden>
        {glyphs.map((g, i) => (
          <motion.span
            key={i}
            onUpdate={(latest) => {
              if (i === 0 && typeof latest.x === 'number') setCapsuleX(0)
            }}
            animate={focused ? { y: -12 - i * 0.5, opacity: 0 } : { y: 0, opacity: 0 }}
            transition={{ delay: i * 0.015, duration: 0.3 }}
            className="text-[10px]" >{g}</motion.span>
        ))}
      </div>

      {/* Input */}
      <input
        {...inputProps}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={(e) => { setFocused(true); onFocus?.(e as any) }}
        onBlur={(e) => { setFocused(false); onBlur?.(e as any) }}
        className="w-full rounded-[12px] bg-background px-4 py-3 text-foreground placeholder:text-foreground/30 outline-none"
        placeholder={focused ? '' : inputProps.placeholder}
        aria-label={label}
      />
    </div>
  )
}
