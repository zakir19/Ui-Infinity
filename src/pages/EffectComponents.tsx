import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Magnetic } from '@/components/ui/magnetic';
import { Spotlight } from '@/components/ui/spotlight';
import { GlassCard } from '@/components/ui/glass-card';
import { Sparkles } from '@/components/ui/sparkles';
import { GradientBorder } from '@/components/ui/gradient-border';
import TiltCard from '@/components/ui/tilt-card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';

// Small reusable copy button for code snippets
const CopyButton: React.FC<{ code: string; className?: string }> = ({ code, className = '' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const ta = document.createElement('textarea');
        ta.value = code;
        ta.style.position = 'fixed';
        ta.style.left = '-9999px';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`absolute top-3 right-3 z-20 px-2 py-1 text-xs rounded bg-white/6 hover:bg-white/10 transition ${className}`}
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
};


// 3D Tilt (improved) — requestAnimationFrame based, smooth
const EnhancedTilt: React.FC<{ className?: string; children?: React.ReactNode }> = ({ className = '', children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);
  const state = useRef({ rx: 0, ry: 0, sx: 1 });

  const handleMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * 18; // rotateY
    const rx = (py - 0.5) * -12; // rotateX
    const sx = 1.03;
    state.current = { rx, ry, sx };
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (!el) return;
      el.style.transform = `perspective(900px) rotateX(${state.current.rx}deg) rotateY(${state.current.ry}deg) scale(${state.current.sx})`;
      el.style.transition = 'transform 120ms ease-out';
    });
  }, []);

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    if (frame.current) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (!el) return;
      el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)`;
      el.style.transition = 'transform 420ms cubic-bezier(.2,.9,.3,1)';
    });
  }, []);

  useEffect(() => () => {
    if (frame.current) cancelAnimationFrame(frame.current);
  }, []);

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`rounded-2xl shadow-xl will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div ref={ref} className="rounded-2xl overflow-hidden bg-black/30">
        {children}
      </div>
    </div>
  );
};

// GradientBorder preview with richer animated palette
const GradientBorderPreview: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <style>{`
        .gb-preview {
          border-radius: 1rem;
          position: relative;
          overflow: hidden;
        }
        .gb-preview::before {
          content: "";
          position: absolute;
          inset: -50%;
          background: conic-gradient(
            from 120deg,
            #7c3aed,
            #06b6d4,
            #06d6a0,
            #f97316,
            #f43f5e,
            #7c3aed
          );
          animation: gb-rotate 6s linear infinite;
          filter: blur(24px) saturate(120%);
          opacity: 0.9;
        }
        .gb-inner {
          position: relative;
          border-radius: .75rem;
          padding: 1.25rem;
          background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.06);
          z-index: 1;
        }
        @keyframes gb-rotate { to { transform: rotate(1turn); } }
      `}</style>
      <div className="gb-preview h-72 rounded-2xl">
        <div className="gb-inner h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </>
  );
};

// Glass reveal: hover shows image reveal with soft mask
const GlassRevealPreview: React.FC<{ image?: string }> = ({ image }) => {
  return (
    <>
      <style>{`
        .glass-reveal { position: relative; border-radius: 1rem; overflow: hidden; height: 100%; }
        .glass-bg { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02)); backdrop-filter: blur(8px); transition: opacity .35s; }
        .glass-image { position: absolute; inset: 0; background-size: cover; background-position: center; transform: scale(1.08); opacity: 0; transition: transform .6s cubic-bezier(.2,.9,.3,1), opacity .45s; }
        .glass-reveal:hover .glass-image { opacity: 1; transform: scale(1); }
        .glass-content { position: relative; z-index: 2; padding: 1.25rem; display:flex; align-items:center; justify-content:center; height:100%; }
      `}</style>
      <div className="glass-reveal rounded-2xl">
        <div className="glass-bg" />
        <div className="glass-image" style={{ backgroundImage: `url(${image || 'https://picsum.photos/800/600?blur=2'})` }} />
        <div className="glass-content">
          <div className="text-center">
            <h3 className="text-xl font-bold">Glass + Reveal</h3>
            <p className="text-gray-300 text-sm mt-2">Hover to reveal the image beneath the glass.</p>
          </div>
        </div>
      </div>
    </>
  );
};

// Text sparkles — generates a few sparkles with randomized animation delays
const TextSparklesPreview: React.FC<{ text?: string }> = ({ text = 'Sparkle Effect' }) => {
  return (
    <>
      <style>{`
        .sparkles-wrap { position: relative; display:inline-block; }
        .sparkle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: radial-gradient(circle at 30% 30%, #fff, rgba(255,255,255,0));
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          border-radius: 50%;
          mix-blend-mode: screen;
          animation: sparkle-pop 1.2s infinite;
        }
        @keyframes sparkle-pop {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
          20% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
          60% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
        }
      `}</style>
      <div className="h-72 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-white to-cyan-200">
            {text}
            <span className="sparkles-wrap" style={{ marginLeft: 8 }}>
              {/* static sparkles positioned around text for preview */}
              <span className="sparkle" style={{ left: '10%', top: '10%', animationDelay: '0s', background: 'radial-gradient(circle,#ffd86b,#ff6b6b)' }} />
              <span className="sparkle" style={{ left: '30%', top: '40%', animationDelay: '0.2s', background: 'radial-gradient(circle,#7c3aed,#a78bfa)' }} />
              <span className="sparkle" style={{ left: '60%', top: '20%', animationDelay: '0.4s', background: 'radial-gradient(circle,#06b6d4,#67e8f9)' }} />
              <span className="sparkle" style={{ left: '85%', top: '50%', animationDelay: '0.6s', background: 'radial-gradient(circle,#f97316,#ffb366)' }} />
            </span>
          </h3>
          <p className="text-gray-400 mt-3">Animated sparkles accent the heading.</p>
        </div>
      </div>
    </>
  );
};

// Magnetic button preview (enhanced)
const MagneticButtonPreview: React.FC = () => {
  return (
    <div className="h-72 flex items-center justify-center">
      <Magnetic>
        <button
          type="button"
          className="relative inline-flex items-center justify-center px-8 py-5 rounded-xl text-white font-semibold shadow-lg transform-gpu transition-transform duration-200"
          style={{
            background: 'linear-gradient(90deg,#7c3aed,#06b6d4)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          Magnetic Button
          <span className="ml-3 inline-block w-3 h-3 rounded-full bg-white/30" />
        </button>
      </Magnetic>
    </div>
  );
};

// Parallax preview — pointer-driven subtle layers
const ParallaxPreview: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setPos({ x, y });
    };
    el.addEventListener('mousemove', handler);
    el.addEventListener('mouseleave', () => setPos({ x: 0, y: 0 }));
    return () => {
      el.removeEventListener('mousemove', handler);
    };
  }, []);

  return (
    <>
      <style>{`
        .parallax-wrap { border-radius: 1rem; overflow: hidden; position: relative; height:100%; }
        .parallax-layer { position: absolute; inset: 0; background-size: cover; background-position: center; transition: transform .2s linear; }
      `}</style>
      <div ref={ref} className="parallax-wrap rounded-2xl">
        <div
          className="parallax-layer"
          style={{
            backgroundImage: 'linear-gradient(180deg,#0f172a,#071013)',
            transform: `translate3d(${pos.x * 6}px, ${pos.y * 6}px, 0) scale(1.03)`,
            zIndex: 1,
            opacity: 0.9,
          }}
        />
        <div
          className="parallax-layer"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(124,58,237,0.18), transparent), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.12), transparent)',
            transform: `translate3d(${pos.x * -12}px, ${pos.y * -12}px, 0) scale(1.06)`,
            zIndex: 2,
            mixBlendMode: 'screen',
            pointerEvents: 'none',
          }}
        />
        <div style={{ position: 'relative', zIndex: 3, height: '100%' }} className="flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white">Parallax Depth</h3>
            <p className="text-gray-300 mt-2">Move your cursor to explore depth.</p>
          </div>
        </div>
      </div>
    </>
  );
};

// Hover scale preview (improved)
const HoverScalePreview: React.FC = () => (
  <div className="h-72 flex items-center justify-center">
    <motion.div
      className="rounded-xl p-8 bg-gradient-to-br from-neon-purple/12 to-neon-cyan/12 border border-white/6 shadow-md"
      whileHover={{ scale: 1.08, boxShadow: '0 18px 40px rgba(2,6,23,0.6)' }}
      transition={{ type: 'spring', stiffness: 380, damping: 26 }}
    >
      <h3 className="text-xl font-bold">Hover Scale</h3>
      <p className="text-gray-300 mt-2">Subtle scale + shadow for emphasis.</p>
    </motion.div>
  </div>
);

// ADDITION: Glow pulse background preview
const GlowPulsePreview: React.FC = () => {
  return (
    <>
      <style>{`
        .glow-pulse {
          border-radius: 1rem;
          position: relative;
          overflow: hidden;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(ellipse at center, rgba(124,58,237,0.06), transparent 25%);
        }
        .glow-pulse::after {
          content: "";
          position: absolute;
          inset: -40%;
          background: radial-gradient(circle at 20% 30%, rgba(124,58,237,0.28), transparent 12%),
                      radial-gradient(circle at 80% 70%, rgba(6,182,212,0.22), transparent 12%);
          filter: blur(28px);
          animation: glow-move 6s linear infinite;
          mix-blend-mode: screen;
        }
        @keyframes glow-move {
          0% { transform: rotate(0deg) translateZ(0); }
          50% { transform: rotate(180deg) translateZ(0); }
          100% { transform: rotate(360deg) translateZ(0); }
        }
      `}</style>
      <div className="glow-pulse rounded-2xl">
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-bold text-white">Glow Pulse</h3>
          <p className="text-gray-300 mt-2">Soft moving glow for ambient backgrounds.</p>
        </div>
      </div>
    </>
  );
};

// ADDITION: Wave text / liquid headline
const WaveTextPreview: React.FC<{ text?: string }> = ({ text = 'Wave Text' }) => {
  return (
    <>
      <style>{`
        .wave-wrap { display:flex; align-items:center; justify-content:center; height:100%; }
        .wave-text {
          font-weight: 800;
          font-size: 2.2rem;
          background: linear-gradient(90deg, #fff, #ffd86b 40%, #7c3aed 70%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
          letter-spacing: -0.03em;
        }
        .wave-text::after{
          content: '';
          position: absolute;
          left:0; right:0; bottom: -8px; height: 6px;
          background: linear-gradient(90deg,#7c3aed,#06b6d4);
          filter: blur(8px);
          opacity: .6;
          transform-origin: center;
          animation: wave-underline 2.8s ease-in-out infinite;
        }
        @keyframes wave-underline {
          0%{ transform: translateX(-30%) scaleX(0.7) }
          50%{ transform: translateX(0%) scaleX(1) }
          100%{ transform: translateX(30%) scaleX(0.7) }
        }
      `}</style>
      <div className="wave-wrap">
        <div className="text-center">
          <div className="wave-text">{text}</div>
          <p className="text-gray-400 mt-3">Animated underline with wave motion.</p>
        </div>
      </div>
    </>
  );
};

// ADDITION: Ripple button (click effect)
const RippleButtonPreview: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const createRipple = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height) * 1.6;
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    ripple.className = 'ripple';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  };

  return (
    <>
      <style>{`
        .ripple-btn { position: relative; overflow: hidden; border-radius: 12px; }
        .ripple { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.18); transform: scale(0); animation: ripple-anim .7s ease-out; pointer-events:none; }
        @keyframes ripple-anim { to { transform: scale(1); opacity: 0; } }
      `}</style>
      <div className="h-72 flex items-center justify-center">
        <button
          ref={btnRef}
          onMouseDown={createRipple}
          className="ripple-btn px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-semibold shadow-lg"
        >
          Ripple Button
        </button>
      </div>
    </>
  );
};

// ADDITION: Particle dots background (CSS-only lightweight)
const ParticleDotsPreview: React.FC = () => {
  return (
    <>
      <style>{`
        .dots-wrap { position: relative; border-radius: 1rem; overflow: hidden; height:100%; display:flex; align-items:center; justify-content:center; }
        .dots {
          width: 220px; height: 120px;
          background-image:
            radial-gradient(circle at 10% 20%, rgba(255,255,255,0.12) 2px, transparent 3px),
            radial-gradient(circle at 30% 50%, rgba(255,255,255,0.08) 2px, transparent 3px),
            radial-gradient(circle at 70% 30%, rgba(255,255,255,0.06) 2px, transparent 3px),
            radial-gradient(circle at 85% 80%, rgba(255,255,255,0.07) 2px, transparent 3px);
          background-size: 100% 100%;
          filter: blur(.4px);
          animation: dots-float 6s linear infinite;
          opacity: .9;
          border-radius: .75rem;
          box-shadow: inset 0 0 30px rgba(124,58,237,0.06);
        }
        @keyframes dots-float { from { transform: translateY(0); } to { transform: translateY(-6px); } }
      `}</style>
      <div className="dots-wrap rounded-2xl">
        <div className="dots" />
      </div>
    </>
  );
};

// ADDITION: Floating card stack preview
const FloatingCardsPreview: React.FC = () => {
  return (
    <>
      <style>{`
        .float-stack { position: relative; height:100%; display:flex; align-items:center; justify-content:center; }
        .card { width: 180px; height: 110px; border-radius: 12px; position: absolute; background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.06); box-shadow: 0 12px 30px rgba(2,6,23,0.6); transform-origin:center; transition: transform .5s ease; }
        .card.c1 { transform: translate(-30px,-10px) rotate(-6deg); animation: float1 5s ease-in-out infinite; }
        .card.c2 { transform: translate(10px,6px) rotate(4deg); animation: float2 6s ease-in-out infinite; }
        .card.c3 { transform: translate(36px,28px) rotate(-2deg); animation: float3 7s ease-in-out infinite; }
        @keyframes float1 { 0%{ transform:translate(-30px,-10px) rotate(-6deg) }50%{ transform:translate(-25px,-5px) rotate(-4deg) }100%{ transform:translate(-30px,-10px) rotate(-6deg) } }
        @keyframes float2 { 0%{ transform:translate(10px,6px) rotate(4deg) }50%{ transform:translate(6px,2px) rotate(2deg) }100%{ transform:translate(10px,6px) rotate(4deg) } }
        @keyframes float3 { 0%{ transform:translate(36px,28px) rotate(-2deg) }50%{ transform:translate(40px,32px) rotate(0deg) }100%{ transform:translate(36px,28px) rotate(-2deg) } }
      `}</style>
      <div className="float-stack">
        <div className="card c1 flex items-center justify-center"><span className="text-white font-medium">A</span></div>
        <div className="card c2 flex items-center justify-center"><span className="text-white font-medium">B</span></div>
        <div className="card c3 flex items-center justify-center"><span className="text-white font-medium">C</span></div>
      </div>
    </>
  );
};

// ADDITION: Glitch text preview
const GlitchTextPreview: React.FC<{ text?: string }> = ({ text = 'Glitch' }) => {
  return (
    <>
      <style>{`
        .glitch-wrap { display:flex; align-items:center; justify-content:center; height:100%; }
        .glitch {
          position: relative;
          font-weight: 800;
          font-size: 2.2rem;
          color: white;
        }
        .glitch::before, .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0; top: 0;
          clip-path: inset(0 0 0 0);
        }
        .glitch::before { color: #06b6d4; z-index: -1; transform: translateX(-2px); mix-blend-mode: screen; animation: glitch-anim 2.6s infinite linear; opacity:.85; }
        .glitch::after { color: #f97316; z-index: -2; transform: translateX(2px); mix-blend-mode: screen; animation: glitch-anim2 3.2s infinite linear; opacity:.8; }
        @keyframes glitch-anim {
          0%{ transform:translateX(-2px) skewX(-2deg) }
          10%{ transform:translateX(4px) skewX(2deg) }
          20%{ transform:translateX(-6px) skewX(-3deg) }
          30%{ transform:translateX(0px) skewX(0deg) }
          100%{ transform:translateX(-2px) skewX(-2deg) }
        }
        @keyframes glitch-anim2 {
          0%{ transform:translateX(2px) skewX(1deg) }
          15%{ transform:translateX(-3px) skewX(-2deg) }
          35%{ transform:translateX(6px) skewX(3deg) }
          100%{ transform:translateX(2px) skewX(1deg) }
        }
      `}</style>
      <div className="glitch-wrap">
        <div className="text-center">
          <div className="glitch" data-text={text}>{text}</div>
          <p className="text-gray-400 mt-3">Subtle chromatic glitch effect.</p>
        </div>
      </div>
    </>
  );
};

/* -------------------------
   Page component
   ------------------------- */

const EffectComponents: React.FC = () => {
  // code strings for easy copy (kept short for example)
  const spotlightDefaultCode = `<Spotlight className="h-72 rounded-2xl">
  <div className="flex flex-col items-center justify-center h-full">
    <h3 className="text-xl font-bold">Spotlight Effect</h3>
    <p className="text-center text-gray-400 mt-2">Move your cursor to see the spotlight follow it</p>
  </div>
</Spotlight>`;


  const spotlightCyanCode = `<Spotlight className="h-72 rounded-2xl color-cyan">...`;
  const spotlightPurpleCode = `<Spotlight className="h-72 rounded-2xl color-purple">...`;
  const spotlightSunsetCode = `<Spotlight className="h-72 rounded-2xl color-sunset">...`;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Effect Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Beautiful visual effects and animations to enhance your user interface.
          </p>
        </div>
      </div>

      {/* Component Showcase */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Spotlight Collection */}
            <div className="relative">
              <EffectShowcase title="Spotlight Effect" description="Interactive spotlight that follows the cursor" code={spotlightDefaultCode}>
                <Spotlight className="h-72 rounded-2xl">
                  <div className="flex flex-col items-center justify-center h-full">
                    <h3 className="text-xl font-bold">Spotlight Effect</h3>
                    <p className="text-center text-gray-400 mt-2">
                      Move your cursor to see the spotlight follow it
                    </p>
                  </div>
                </Spotlight>
              </EffectShowcase>
            </div>

            <div className="relative">
              <EffectShowcase title="Spotlight — Cyan" description="Cyan-tinted spotlight variant" code={spotlightCyanCode}>
                <Spotlight className="h-72 rounded-2xl">
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-cyan-800/20 to-transparent">
                    <h3 className="text-xl font-bold text-cyan-200">Cyan Spotlight</h3>
                  </div>
                </Spotlight>
              </EffectShowcase>
            </div>

            <div className="relative">
              <EffectShowcase title="Spotlight — Purple" description="Purple-tinted spotlight variant" code={spotlightPurpleCode}>
                <Spotlight className="h-72 rounded-2xl">
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-purple-800/20 to-transparent">
                    <h3 className="text-xl font-bold text-purple-200">Purple Spotlight</h3>
                  </div>
                </Spotlight>
              </EffectShowcase>
            </div>

            <div className="relative">
              <EffectShowcase title="Spotlight — Sunset" description="Warm sunset-tinted spotlight variant" code={spotlightSunsetCode}>
                <Spotlight className="h-72 rounded-2xl">
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-yellow-400/10 via-red-400/10 to-pink-400/10">
                    <h3 className="text-xl font-bold text-amber-200">Sunset Spotlight</h3>
                  </div>
                </Spotlight>
              </EffectShowcase>
            </div>

            {/* Enhanced 3D Tilt */}
            <EffectShowcase title="3D Tilt Effect" description="Interactive card with smooth tilt">
              <EnhancedTilt className="h-72">
                <div className="h-72 flex flex-col items-center justify-center bg-gradient-to-br from-neon-purple/12 to-neon-cyan/8 p-6">
                  <h3 className="text-xl font-bold">3D Tilt Effect</h3>
                  <p className="text-gray-300 mt-2">
                    Smooth, performant tilt with subtle scale.
                  </p>
                </div>
              </EnhancedTilt>
            </EffectShowcase>

            {/* Gradient Border */}
            <EffectShowcase title="Gradient Border" description="Lively animated gradient border">
              <GradientBorderPreview>
                <div className="text-center">
                  <h3 className="text-xl font-bold">Gradient Border</h3>
                  <p className="text-gray-300 mt-2">
                    Multi-color conic gradient with soft blur.
                  </p>
                </div>
              </GradientBorderPreview>
            </EffectShowcase>

            {/* Glass Reveal */}
            <EffectShowcase title="Glass Reveal" description="Hover to reveal image under glass">
              <GlassRevealPreview image="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=60" />
            </EffectShowcase>

            {/* Text Sparkles */}
            <EffectShowcase title="Text Sparkles" description="Heading accented with sparkles">
              <TextSparklesPreview text="Sparkle Heading" />
            </EffectShowcase>

            {/* Magnetic Button */}
            <EffectShowcase title="Magnetic Button" description="Button that attracts cursor">
              <MagneticButtonPreview />
            </EffectShowcase>

            {/* Parallax */}
            <EffectShowcase title="Parallax Depth" description="Multiple layers react to pointer">
              <ParallaxPreview />
            </EffectShowcase>

            {/* Hover Scale */}
            <EffectShowcase title="Hover Scale" description="Scale + shadow for emphasis">
              <HoverScalePreview />
            </EffectShowcase>

            {/* NEW: Glow Pulse */}
            <EffectShowcase title="Glow Pulse" description="Ambient animated glow layers">
              <GlowPulsePreview />
            </EffectShowcase>

            {/* NEW: Wave Text */}
            <EffectShowcase title="Wave Text" description="Liquid-looking headline effect">
              <WaveTextPreview text="Liquid Headline" />
            </EffectShowcase>

            {/* NEW: Ripple Button */}
            <EffectShowcase title="Ripple Button" description="Click ripple feedback">
              <RippleButtonPreview />
            </EffectShowcase>

            {/* NEW: Particle Dots */}
            <EffectShowcase title="Particle Dots" description="Light particle pattern background">
              <ParticleDotsPreview />
            </EffectShowcase>

            {/* NEW: Floating Cards */}
            <EffectShowcase title="Floating Cards" description="Stack of floating cards with soft motion">
              <FloatingCardsPreview />
            </EffectShowcase>

            {/* NEW: Glitch Text */}
            <EffectShowcase title="Glitch Text" description="Chromatic text glitch">
              <GlitchTextPreview text="Glitch Demo" />
            </EffectShowcase>

          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Usage</h2>
          <div className="glass-morphism p-6 rounded-xl overflow-hidden relative">
            <CopyButton code={spotlightDefaultCode} />
            <pre className="text-sm text-gray-300 overflow-auto p-4">
{`// Import effect components
import { Spotlight } from "@/components/ui/spotlight";
import { Magnetic } from "@/components/ui/magnetic";
import TiltCard from "@/components/ui/tilt-card";
import { GradientBorder } from "@/components/ui/gradient-border";
import { GlassCard } from "@/components/ui/glass-card";

// Example: Enhanced 3D tilt
<EnhancedTilt>
  <div>...</div>
</EnhancedTilt>

// GradientBorderPreview, GlassRevealPreview, TextSparklesPreview are local helpers in this page for preview and copy.
`}
            </pre>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const EffectShowcase: React.FC<{
  title: string;
  description: string;
  children: React.ReactNode;
  code?: string;
}> = ({ title, description, children, code }) => {
  return (
    <div className="glass-morphism rounded-xl overflow-hidden hover:border-neon-purple/30 transition-colors relative">
      {code ? <CopyButton code={code} className="right-3 top-3" /> : null}
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div className="p-6 flex items-center justify-center bg-black/20">
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default EffectComponents;
