import React, { useEffect, useMemo, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface CrystalBloomModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
}

// CrystalBloomModal — opens via jagged crystalline growth resolving to a clean rect
export const CrystalBloomModal: React.FC<CrystalBloomModalProps> = ({ open, onClose, children, title }) => {
  const polyInit = useMemo(() => makeJaggedPolygon(7), [])
  const overlayRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (open) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999]"
          aria-modal
          role="dialog"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Mineral overlay */}
          <motion.div
            ref={overlayRef}
            onClick={onClose}
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <svg className="absolute inset-0 w-full h-full" aria-hidden>
              <defs>
                <pattern id="crystal-lattice" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M0 0 L40 20 L80 0 L40 60 Z" fill="none" stroke="hsla(var(--foreground),0.05)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#crystal-lattice)"></rect>
            </svg>
          </motion.div>

          {/* Crystal growth mask container */}
          <div className="absolute inset-0 grid place-items-center p-6">
            <motion.div
              initial={{ clipPath: polyInit }}
              animate={{ clipPath: 'inset(0% round var(--radius))' }}
              exit={{ clipPath: polyInit }}
              transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
              className="relative w-full max-w-2xl rounded-[var(--radius)] bg-card text-card-foreground border border-border shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-border/80">
                <h2 className="text-lg font-semibold">{title || 'Crystal Bloom'}</h2>
                <button onClick={onClose} className="px-2 py-1 rounded-md hover:bg-accent/40" aria-label="Close">✕</button>
              </div>
              <div className="p-6">{children}</div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function makeJaggedPolygon(points = 7) {
  // Create a viewport-relative jagged polygon for clip-path: polygon()
  const pts: string[] = []
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2
    const r = 35 + Math.random() * 30
    const x = 50 + Math.cos(angle) * r
    const y = 50 + Math.sin(angle) * r
    pts.push(`${x}% ${y}%`)
  }
  return `polygon(${pts.join(',')})`
}
