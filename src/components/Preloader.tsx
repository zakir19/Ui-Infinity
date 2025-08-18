import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ['Innovating...', 'Designing...', 'Crafting...', 'Building...'];

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.('change', update);
    return () => mq.removeEventListener?.('change', update);
  }, []);
  return reduced;
};

const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'fade' | 'done'>('typing');
  const reduced = usePrefersReducedMotion();

  // Automatically progress through words
  useEffect(() => {
    if (!visible) return;
    if (phase === 'done') return;

    const current = WORDS[wordIndex];
    const charTime = reduced ? 0 : 35; // ms per char
    const typeDuration = current.length * charTime + 300; // buffer
    const hold = 350;

    const t = setTimeout(() => setPhase('fade'), typeDuration + hold);
    return () => clearTimeout(t);
  }, [wordIndex, phase, reduced, visible]);

  // Handle fade + advance
  useEffect(() => {
    if (phase !== 'fade') return;
    const t = setTimeout(() => {
      if (wordIndex < WORDS.length - 1) {
        setWordIndex((i) => i + 1);
        setPhase('typing');
      } else {
        setPhase('done');
        setTimeout(() => setVisible(false), 400);
      }
    }, 260);
    return () => clearTimeout(t);
  }, [phase, wordIndex]);

  const letters = useMemo(() => WORDS[wordIndex].split(''), [wordIndex]);

  if (!visible) return null;

  return (
    <div aria-live="polite" aria-atomic className="fixed inset-0 z-[9999] grid place-items-center bg-background text-foreground">
      {/* Soft animated aurora background */}
      <motion.div
        aria-hidden
        className="absolute -inset-1 blur-3xl opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
        style={{
          background:
            'radial-gradient(60% 60% at 50% 40%, hsl(270 95% 75% / 0.6), transparent), radial-gradient(50% 50% at 30% 70%, hsl(190 95% 70% / 0.5), transparent)',
        }}
      />

      {/* Word container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={wordIndex}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="relative px-6 py-4 rounded-xl glass-morphism border border-white/10"
        >
          <div className="text-lg md:text-2xl font-medium tracking-wide">
            {letters.map((ch, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reduced ? 0 : i * 0.03, duration: 0.18 }}
                className="inline-block"
              >
                {ch}
              </motion.span>
            ))}
          </div>

          {/* caret */}
          <motion.span
            aria-hidden
            className="absolute -right-2 top-1/2 -mt-3 h-6 w-[2px] bg-white/70"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.9, repeat: Infinity }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Preloader;
