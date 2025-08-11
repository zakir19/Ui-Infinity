import React, { useRef, useState } from 'react'
import { FerroFormInput } from '@/components/experimental/FerroFormInput'
import { CrystalBloomModal } from '@/components/experimental/CrystalBloomModal'
import { BioluminescentCursor } from '@/components/experimental/BioluminescentCursor'
import { InkBloomHandle, InkBloomTransition } from '@/components/experimental/InkBloomTransition'
import { FlockingList } from '@/components/experimental/FlockingList'

const ExperimentalLab: React.FC = () => {
  const [open, setOpen] = useState(false)
  const inkRef = useRef<InkBloomHandle | null>(null)

  const flockItems = Array.from({ length: 14 }).map((_, i) => ({ id: `item-${i}`, label: `Item ${i+1}` }))

  return (
    <main className="px-6 py-12 max-w-6xl mx-auto space-y-12">
      {/* Local cursor and in-lab ink bloom */}
      <BioluminescentCursor />
      <InkBloomTransition ref={inkRef as any} />

      <section aria-labelledby="ferro-input" className="space-y-4">
        <h1 id="ferro-input" className="text-2xl font-semibold">FerroForm Input</h1>
        <div className="max-w-md">
          <FerroFormInput label="Your Name" placeholder="Type here" />
        </div>
      </section>

      <section aria-labelledby="crystal-modal" className="space-y-4">
        <h2 id="crystal-modal" className="text-xl font-semibold">Crystal Bloom Modal</h2>
        <button data-bio-hover className="px-4 py-2 rounded-md border border-border hover:bg-accent/40" onClick={() => setOpen(true)}>Open Modal</button>
        <CrystalBloomModal open={open} onClose={() => setOpen(false)} title="Crystal Bloom">
          <p className="text-foreground/80">This modal grows from crystalline facets, then anneals to a clean rectangle.</p>
        </CrystalBloomModal>
      </section>

      <section aria-labelledby="ink-bloom" className="space-y-4">
        <h2 id="ink-bloom" className="text-xl font-semibold">Ink Bloom Transition</h2>
        <button
          data-bio-hover
          onClick={(e) => {
            const rect = (e.target as HTMLElement).getBoundingClientRect()
            inkRef.current?.trigger(rect.left + rect.width/2, rect.top + rect.height/2)
          }}
          className="px-4 py-2 rounded-md border border-border hover:bg-accent/40"
        >
          Trigger Ink Bloom
        </button>
      </section>

      <section aria-labelledby="flocking" className="space-y-4">
        <h2 id="flocking" className="text-xl font-semibold">Cohort Flock List</h2>
        <FlockingList items={flockItems} />
      </section>
    </main>
  )
}

export default ExperimentalLab
