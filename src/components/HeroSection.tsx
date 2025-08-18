
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Subtle animated background (aurora + grid blend) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,hsl(270_90%_60%/.15),transparent_40%),radial-gradient(circle_at_80%_80%,hsl(190_95%_55%/.12),transparent_35%)]" />
        <motion.div
          aria-hidden
          className="absolute -inset-16 blur-3xl opacity-30"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
          style={{
            background:
              'radial-gradient(60%_60%_at_50%_40%,hsl(270_95%_75%/.5),transparent),radial-gradient(50%_50%_at_30%_70%,hsl(190_95%_70%/.5),transparent)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-24">
        {/* Headline with sweeping glow */}
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            aria-hidden
            className="absolute inset-x-0 -top-16 h-24"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="mx-auto h-full w-1/2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-400/20 blur-2xl rounded-full" />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">
              Digital Craftsmanship Reimagined.
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We build experiences that resonate.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <a
              href="#components"
              className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/5 border border-white/10 text-white"
            >
              <span className="relative z-10">Explore Work</span>
              {/* shimmer */}
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500">
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: Infinity, repeatType: 'mirror', duration: 1.6 }}
          className="text-sm"
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
