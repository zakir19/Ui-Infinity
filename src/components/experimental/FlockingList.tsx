import React, { useEffect, useMemo, useRef, useState } from 'react'

interface Item { id: string; label: string }
interface FlockingListProps { items: Item[]; className?: string }

// CPU-light boids-inspired layout for small N, with click-to-center
export const FlockingList: React.FC<FlockingListProps> = ({ items, className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [selected, setSelected] = useState<string | null>(null)

  const agents = useMemo(() => items.map((it, i) => ({
    id: it.id,
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random()-0.5)*0.002,
    vy: (Math.random()-0.5)*0.002,
  })), [items])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let raf = 0

    const tick = () => {
      const rect = el.getBoundingClientRect()
      const ax = rect.width / 2
      const ay = rect.height / 2

      // Simple flock dynamics
      for (let i = 0; i < agents.length; i++) {
        const a = agents[i]
        // Cohesion towards center
        a.vx += ((0.5 - a.x) * 0.0006)
        a.vy += ((0.5 - a.y) * 0.0006)
        // Separation
        for (let j = 0; j < agents.length; j++) {
          if (i === j) continue
          const b = agents[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx*dx + dy*dy
          if (d2 < 0.003) { a.vx += dx * 0.0008; a.vy += dy * 0.0008 }
        }
        // Alignment
        // Skipped for brevity; small drift
        a.vx += (Math.sin(i + performance.now()*0.0002)) * 0.00002
        a.vy += (Math.cos(i + performance.now()*0.00025)) * 0.00002

        // Targeting if selected
        if (selected && a.id === selected) {
          a.vx += ((0.5 - a.x) * 0.002)
          a.vy += ((0.5 - a.y) * 0.002)
        } else if (selected) {
          // Peripheral ring
          const angle = (i / agents.length) * Math.PI * 2
          const tx = 0.5 + Math.cos(angle) * 0.35
          const ty = 0.5 + Math.sin(angle) * 0.35
          a.vx += ((tx - a.x) * 0.001)
          a.vy += ((ty - a.y) * 0.001)
        }

        // Integrate and clamp
        a.x = Math.max(0.05, Math.min(0.95, a.x + a.vx))
        a.y = Math.max(0.05, Math.min(0.95, a.y + a.vy))
        a.vx *= 0.98
        a.vy *= 0.98
        const node = el.querySelector(`[data-id="${a.id}"]`) as HTMLDivElement | null
        if (node) {
          node.style.transform = `translate(${a.x * rect.width}px, ${a.y * rect.height}px)`
        }
      }

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [agents, selected])

  return (
    <div ref={containerRef} className={`relative w-full h-[400px] rounded-xl border border-border bg-background overflow-hidden ${className}`}>
      {items.map((it) => (
        <button
          key={it.id}
          data-id={it.id}
          data-bio-hover
          onClick={() => setSelected(it.id)}
          className="absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground border border-border/60 shadow-sm hover:bg-accent/50 transition-colors"
          style={{ willChange: 'transform' }}
        >
          {it.label}
        </button>
      ))}
    </div>
  )
}
