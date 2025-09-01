import React, { useEffect, useMemo, useRef, useState } from 'react';

// --- START: Missing Component Definitions ---

// Helper component for the copy button icon
const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// Helper component for the copy button icon
const CopyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
  </svg>
);


/**
 * @name CopyButton
 * @description A button that copies a given string to the clipboard and provides feedback.
 * @resolves ERROR: Could not resolve "@/components/ui/copy-button"
 */
const CopyButton: React.FC<{ code: string }> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white"
    >
      {copied ? <CheckIcon className="mr-2 h-4 w-4" /> : <CopyIcon className="mr-2 h-4 w-4" />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

/**
 * @name Footer
 * @description A simple footer component.
 * @resolves ERROR: Could not resolve "@/components/Footer"
 */
const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10">
            <div className="container mx-auto px-4 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
};

// --- END: Missing Component Definitions ---


// Reusable showcase wrapper with preview + code + copy
const Showcase: React.FC<{
  title: string;
  description: string;
  code: string;
  children: React.ReactNode;
}> = ({ title, description, code, children }) => {
  return (
    <div className="glass-morphism rounded-xl overflow-hidden relative border border-white/10">
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <CopyButton code={code} />
      </div>
      <div className="p-6 bg-black/20">
        {children}
      </div>
      <div className="border-t border-white/10">
        <pre className="text-xs text-gray-100 bg-[#0b1120] p-3 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

/* ============================
   1) ContentCarousel
   - autoplay, arrows, dots, swipe
   ============================ */
type ContentCarouselProps = {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
};
const ContentCarousel: React.FC<ContentCarouselProps> = ({
  items,
  autoPlay = true,
  interval = 3500,
  className = '',
}) => {
  const [index, setIndex] = useState(0);
  const count = items.length;
  const paused = useRef(false);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);

  const go = (to: number) => setIndex((to + count) % count);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  useEffect(() => {
    if (!autoPlay || count <= 1) return;
    const id = setInterval(() => {
      if (!paused.current) next();
    }, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, index, count]);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    deltaX.current = 0;
    paused.current = true;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (startX.current == null) return;
    deltaX.current = e.touches[0].clientX - startX.current;
  };
  const onTouchEnd = () => {
    if (Math.abs(deltaX.current) > 60) {
      if (deltaX.current < 0) next();
      else prev();
    }
    startX.current = null;
    deltaX.current = 0;
    paused.current = false;
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Content carousel"
    >
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {items.map((el, i) => (
          <div key={i} className="min-w-full">
            {el}
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 p-2 text-white"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 p-2 text-white"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? 'w-6 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const contentCarouselUsage = `// ContentCarousel usage
<ContentCarousel
  autoPlay
  interval={3500}
  items={[
    <div className="h-48 flex items-center justify-center bg-gradient-to-br from-indigo-500/30 to-cyan-500/20 rounded-xl border border-white/10">
      <h4 className="text-lg font-semibold">Slide One</h4>
    </div>,
    <div className="h-48 flex items-center justify-center bg-gradient-to-br from-rose-500/30 to-amber-500/20 rounded-xl border border-white/10">
      <h4 className="text-lg font-semibold">Slide Two</h4>
    </div>,
    <div className="h-48 flex items-center justify-center bg-gradient-to-br from-emerald-500/30 to-sky-500/20 rounded-xl border border-white/10">
      <h4 className="text-lg font-semibold">Slide Three</h4>
    </div>,
  ]}
/>`;

/* ============================
   2) CardCarousel (scroll-snap)
   - horizontal scroll, arrows, snapping
   ============================ */
type CardCarouselProps = {
  children: React.ReactNode;
  itemWidthClass?: string; // min-w class for items
};
const CardCarousel: React.FC<CardCarouselProps> = ({ children, itemWidthClass = 'min-w-[260px]' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollByAmount = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const amount = Math.max(280, Math.floor(el.clientWidth * 0.9));
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };
  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
        role="listbox"
        aria-label="Card carousel"
      >
        {React.Children.map(children, (child, i) => (
          <div key={i} className={`${itemWidthClass} snap-start`}>{child}</div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scrollByAmount(-1)}
          className="pointer-events-auto ml-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 p-2 text-white"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scrollByAmount(1)}
          className="pointer-events-auto mr-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 p-2 text-white"
        >
          ›
        </button>
      </div>
    </div>
  );
};

const cardCarouselUsage = `// CardCarousel usage (scroll-snap)
<CardCarousel>
  {[1,2,3,4,5,6].map(i => (
    <div key={i} className="h-44 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
      <p className="text-sm text-gray-300">Card #\${i}</p>
      <div className="mt-3 h-24 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20" />
      <button className="mt-3 px-3 py-1.5 rounded-md text-xs bg-white/10 hover:bg-white/20">Action</button>
    </div>
  ))}
</CardCarousel>`;

/* ============================
   3) CardSwiper (Tinder-like)
   - drag to dismiss, stack
   ============================ */
type CardSwiperItem = {
  id: string | number;
  title: string;
  image?: string;
};
type CardSwiperProps = {
  items: CardSwiperItem[];
  onDismiss?: (item: CardSwiperItem, dir: 'left' | 'right') => void;
};
const CardSwiper: React.FC<CardSwiperProps> = ({ items, onDismiss }) => {
  const [stack, setStack] = useState(items);
  const [idx, setIdx] = useState(0); // Index of the top card
  
  const dragStartRef = useRef<{ x: number; y: number } | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const threshold = 120; // Swipe distance to trigger dismiss

  const handlePointerDown = (e: React.PointerEvent) => {
    if (idx >= stack.length) return;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragStartRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setOffset({ x: dx, y: dy });
  };

  const handlePointerUp = () => {
    if (!dragStartRef.current) return;

    const dx = offset.x;
    if (Math.abs(dx) > threshold) {
      const dir = dx > 0 ? 'right' : 'left';
      const item = stack[idx]; 
      if (item) { 
        onDismiss?.(item, dir);
      }
      setIdx(prevIdx => prevIdx + 1); 
    }
    
    // Reset with a smooth transition
    setOffset({ x: 0, y: 0 });
    dragStartRef.current = null;
  };

  const rotation = Math.max(-15, Math.min(15, offset.x / 10));
  const opacity = Math.max(0, 1 - Math.abs(offset.x) / 260);

  return (
    <div className="relative h-80 w-full">
      {idx >= stack.length && (
        <div className="absolute inset-0 grid place-items-center text-sm text-gray-400">
          No more cards
        </div>
      )}
      
      {stack.slice(idx, idx + 3).reverse().map((item, i) => {
        const isTop = i === (stack.slice(idx, idx + 3).length - 1);
        const z = 30 - i;
        const scale = 1 - (stack.slice(idx, idx + 3).length - 1 - i) * 0.04;
        const translateY = (stack.slice(idx, idx + 3).length - 1 - i) * 10;
        
        const inMotion = isTop && dragStartRef.current;

        const style: React.CSSProperties = {
          transform: `translateY(${translateY}px) scale(${scale})`,
          zIndex: z,
          transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
        }

        if (isTop) {
          style.transform = `translate(${offset.x}px, ${offset.y + translateY}px) rotate(${rotation}deg) scale(${scale})`;
          style.opacity = opacity;
          if (!inMotion) {
             style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out'
          } else {
            style.transition = 'none';
          }
        }

        return (
          <div
            key={item.id}
            className="absolute inset-0 mx-auto max-w-md"
            style={{ zIndex: z }}
          >
            <div
              role="group"
              aria-label={item.title}
              onPointerDown={isTop ? handlePointerDown : undefined}
              onPointerMove={isTop ? handlePointerMove : undefined}
              onPointerUp={isTop ? handlePointerUp : undefined}
              className={`h-80 rounded-2xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-md shadow-xl ${isTop ? 'cursor-grab active:cursor-grabbing' : ''}`}
              style={style}
            >
              <div
                className="h-44 w-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    item.image ||
                    'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop'
                  })`,
                }}
              />
              <div className="p-4">
                <h4 className="text-white font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-1">
                  Swipe left or right to dismiss.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const cardSwiperUsage = `// CardSwiper usage
<CardSwiper
  items={[
    { id: 1, title: 'Aurora', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, title: 'Mountains', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, title: 'Desert', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop' },
  ]}
/>`;

/* ============================
   4) OTP Input
   - 4–6 digits, autoflow, paste, arrows
   ============================ */
type OtpInputProps = {
  length?: number;
  onComplete?: (value: string) => void;
  className?: string;
};
const OtpInput: React.FC<OtpInputProps> = ({ length = 6, onComplete, className = '' }) => {
  const [values, setValues] = useState<string[]>(Array.from({ length }, () => ''));
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const update = (i: number, v: string) => {
    const d = v.replace(/\D/g, '').slice(-1);
    const next = [...values];
    next[i] = d;
    setValues(next);
    if (d && i < length - 1) refs.current[i + 1]?.focus();
    const joined = next.join('');
    if (joined.length === length && !next.includes('')) onComplete?.(joined);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
    if (e.key === 'Backspace' && !values[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
    if (e.key === 'ArrowLeft' && i > 0) refs.current[i - 1]?.focus();
    if (e.key === 'ArrowRight' && i < length - 1) refs.current[i + 1]?.focus();
  };

  const onPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const text = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    if (!text) return;
    e.preventDefault();
    const next = Array.from({ length }, (_, i) => text[i] || '');
    setValues(next);
    const idx = Math.min(text.length, length - 1);
    refs.current[idx]?.focus();
    if (text.length === length) onComplete?.(text);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="OTP input">
      {values.map((val, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          inputMode="numeric"
          pattern="[0-9]*"
          aria-label={`Digit ${i + 1}`}
          maxLength={1}
          className="w-12 h-14 text-center text-xl font-semibold rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
          value={val}
          onChange={(e) => update(i, e.target.value)}
          onKeyDown={(e) => onKeyDown(e, i)}
          onPaste={onPaste}
        />
      ))}
    </div>
  );
};

const otpUsage = `// OTP input usage
<OtpInput
  length={6}
  onComplete={(code) => console.log('OTP:', code)}
/>`;

/* ============================
   5) SpecialCard
   - glass + gradient hover
   ============================ */
type SpecialCardProps = {
  title: string;
  description: string;
  cta?: React.ReactNode;
  image?: string;
};
const SpecialCard: React.FC<SpecialCardProps> = ({ title, description, cta, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage:
            'radial-gradient(600px 180px at 10% 10%, rgba(124,58,237,0.18), transparent 50%), radial-gradient(600px 180px at 90% 90%, rgba(6,182,212,0.18), transparent 50%)',
        }}
      />
      {image ? (
        <div
          className="h-40 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <div className="h-40 w-full bg-gradient-to-br from-indigo-500/20 to-cyan-500/20" />
      )}
      <div className="relative p-5">
        <h4 className="text-white font-semibold">{title}</h4>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
        <div className="mt-4">{cta}</div>
      </div>
    </div>
  );
};

const specialCardUsage = `// SpecialCard usage
<SpecialCard
  title="Pro Subscription"
  description="Unlock advanced features, priority support, and more."
  cta={<button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-sm">Upgrade</button>}
/>`;

/* ============================
   6) CoverFlowCarousel
   - 3D perspective, arrows
   ============================ */
type CoverFlowCarouselProps = {
  items: { id: number; image: string; title: string }[];
  className?: string;
};
const CoverFlowCarousel: React.FC<CoverFlowCarouselProps> = ({ items, className = '' }) => {
  const [index, setIndex] = useState(Math.floor(items.length / 2));
  const count = items.length;

  const go = (to: number) => setIndex((to + count) % count);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  return (
    <div className={`relative w-full h-64 flex items-center justify-center ${className}`}>
      <div className="relative w-full max-w-2xl" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
        {items.map((item, i) => {
          const offset = index - i;
          const isCurrent = i === index;
          const transform = `translateX(${-offset * 50}%) rotateY(${offset * -20}deg) scale(${isCurrent ? 1 : 0.8})`;
          const zIndex = count - Math.abs(offset);
          const opacity = Math.max(0, 1 - Math.abs(offset) * 0.3);

          return (
            <div
              key={item.id}
              onClick={() => setIndex(i)}
              className="absolute w-2/3 h-full top-0 left-1/2 -translate-x-1/2 transition-transform duration-500 ease-in-out cursor-pointer"
              style={{ transform, zIndex, opacity }}
            >
              <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-xl shadow-2xl" />
            </div>
          );
        })}
      </div>
       {/* Arrows */}
       <button
        type="button"
        aria-label="Previous item"
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 p-2 text-white z-50"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next item"
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 p-2 text-white z-50"
      >
        ›
      </button>
    </div>
  );
};

const coverFlowCarouselUsage = `// CoverFlowCarousel usage
<CoverFlowCarousel
  items={[
    { id: 1, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ab?q=80&w=1200&auto=format&fit=crop', title: 'Red Shoe' },
    { id: 2, image: 'https://images.unsplash.com/photo-1595950653106-60904f36224a?q=80&w=1200&auto=format&fit=crop', title: 'Colorful Shoe' },
    { id: 3, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop', title: 'Checkered Shoe' },
    { id: 4, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1200&auto=format&fit=crop', title: 'Brown Shoe' },
    { id: 5, image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop', title: 'White Shoe' },
  ]}
/>`;


/* ============================
   7) ImageComparisonSlider
   - drag handle to compare two images
   ============================ */
type ImageComparisonSliderProps = {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
  className?: string;
};
const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({ before, after, altBefore = 'Before', altAfter = 'After', className='' }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };
  
  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons !== 1) return; // Only move when mouse is down
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-2xl mx-auto aspect-video overflow-hidden rounded-xl select-none cursor-ew-resize ${className}`}
      onPointerMove={handlePointerMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image */}
      <img src={after} alt={altAfter} className="absolute inset-0 w-full h-full object-cover" />

      {/* Before Image (clipped) */}
      <div className="absolute inset-0 w-full h-full" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <img src={before} alt={altBefore} className="w-full h-full object-cover" />
      </div>

      {/* Slider Handle */}
      <div className="absolute inset-y-0 bg-white w-1 cursor-ew-resize" style={{ left: `calc(${sliderPos}% - 0.5px)` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-white shadow-xl grid place-items-center">
          <svg className="w-5 h-5 text-gray-600 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const imageComparisonSliderUsage = `// ImageComparisonSlider usage
<ImageComparisonSlider
  before="https://images.unsplash.com/photo-1526302924259-9343716a5875?q=80&w=1200&auto=format&fit=crop&grayscale=1"
  after="https://images.unsplash.com/photo-1526302924259-9343716a5875?q=80&w=1200&auto=format&fit=crop"
  altBefore="Black and white street"
  altAfter="Color street"
/>`;

/* ============================
   8) BlurComparisonSlider
   - drag handle to compare blurred and clear image
   ============================ */
type BlurComparisonSliderProps = {
  src: string;
  alt?: string;
  className?: string;
};
const BlurComparisonSlider: React.FC<BlurComparisonSliderProps> = ({ src, alt = 'Comparison image', className='' }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };
  
  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-2xl mx-auto aspect-video overflow-hidden rounded-xl select-none cursor-ew-resize ${className}`}
      onPointerMove={handlePointerMove}
      onTouchMove={handleTouchMove}
    >
      {/* Clear Image (Bottom layer) */}
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />

      {/* Blurred Image (Top layer, clipped) */}
      <div className="absolute inset-0 w-full h-full" style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}>
        <img src={src} alt={alt} className="w-full h-full object-cover filter blur-lg" />
      </div>

      {/* Slider Handle */}
      <div className="absolute inset-y-0 bg-white w-1 cursor-ew-resize" style={{ left: `calc(${sliderPos}% - 0.5px)` }}>
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-8 h-8 rounded-full bg-white shadow-xl grid place-items-center">
          <svg className="w-5 h-5 text-gray-600 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const blurComparisonSliderUsage = `// BlurComparisonSlider usage
<BlurComparisonSlider
  src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
  alt="A dog looking at the camera"
/>`;

/* ============================
   9) InfiniteLoopCarousel (NEW)
   - Seamlessly loops content
   ============================ */
const InfiniteLoopCarousel: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const content = React.Children.toArray(children);
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="flex animate-infinite-scroll">
        {content}
        {content}
      </div>
       <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

const infiniteLoopCarouselUsage = `// InfiniteLoopCarousel usage
<InfiniteLoopCarousel>
  {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'JavaScript'].map((tech, i) => (
    <div key={i} className="flex-shrink-0 w-48 mx-4 p-4 rounded-xl border border-white/10 bg-white/5 text-center">
      <p className="font-semibold text-white">{tech}</p>
    </div>
  ))}
</InfiniteLoopCarousel>`;


/* ============================
   10) VerticalAccordionSlider (NEW)
   - Vertical layout that expands on hover
   ============================ */
type AccordionItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};
const VerticalAccordionSlider: React.FC<{ items: AccordionItem[]; className?: string }> = ({
  items,
  className = '',
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`flex w-full max-w-4xl mx-auto h-96 gap-2 ${className}`}>
      {items.map((item, index) => (
        <div
          key={item.id}
          className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out"
          style={{ width: hoveredIndex === index ? '40%' : `${100 / items.length}%` }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative h-full flex flex-col justify-end p-4 text-white">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <div
              className="transition-all duration-500 ease-in-out overflow-hidden"
              style={{ maxHeight: hoveredIndex === index ? '100px' : '0' }}
            >
              <p className="text-sm mt-2 text-white/80">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const verticalAccordionSliderUsage = `// VerticalAccordionSlider usage
<VerticalAccordionSlider
  items={[
    { id: 1, title: 'Forest Path', description: 'A serene path through a lush, green forest.', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, title: 'City Lights', description: 'The vibrant, bustling nightlife of a modern city.', image: 'https://images.unsplash.com/photo-1531932475436-b9a52853a48d?q=80&w=1200&auto=format&fit=crop' },
    { id: 3, title: 'Ocean View', description: 'Calm waves meeting the shore under a clear blue sky.', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200&auto=format&fit=crop' },
    { id: 4, title: 'Mountain Peak', description: 'The majestic view from the top of a snowy mountain.', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
  ]}
/>`;


// ============================
// Page
// ============================
const SliderComponents = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Slider Components
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A versatile collection of custom carousels, swipers, and interactive sliders — all built from scratch.
          </p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4 grid gap-8">
          {/* Content Carousel */}
          <Showcase
            title="Content Carousel"
            description="Autoplay, arrows, dots, swipe support."
            code={contentCarouselUsage}
          >
            <ContentCarousel
              autoPlay
              interval={3500}
              items={[
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-indigo-500/30 to-cyan-500/20 rounded-xl border border-white/10">
                  <h4 className="text-lg font-semibold">Slide One</h4>
                </div>,
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-rose-500/30 to-amber-500/20 rounded-xl border border-white/10">
                  <h4 className="text-lg font-semibold">Slide Two</h4>
                </div>,
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-emerald-500/30 to-sky-500/20 rounded-xl border border-white/10">
                  <h4 className="text-lg font-semibold">Slide Three</h4>
                </div>,
              ]}
            />
          </Showcase>

          {/* Card Carousel (scroll-snap) */}
          <Showcase
            title="Card Carousel"
            description="Horizontal scroll with snap and arrow controls."
            code={cardCarouselUsage}
          >
            <CardCarousel>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-44 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4">
                  <p className="text-sm text-gray-300">Card #{i}</p>
                  <div className="mt-3 h-24 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20" />
                  <button className="mt-3 px-3 py-1.5 rounded-md text-xs bg-white/10 hover:bg-white/20">
                    Action
                  </button>
                </div>
              ))}
            </CardCarousel>
          </Showcase>

          {/* Card Swiper */}
          <Showcase
            title="Card Swiper"
            description="Tinder-style swipeable card stack."
            code={cardSwiperUsage}
          >
            <CardSwiper
              items={[
                {
                  id: 1,
                  title: 'Aurora',
                  image:
                    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
                },
                {
                  id: 2,
                  title: 'Mountains',
                  image:
                    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
                },
                {
                  id: 3,
                  title: 'Desert',
                  image:
                    'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop',
                },
              ]}
              onDismiss={(item, dir) => console.log('Dismissed', item.title, dir)}
            />
          </Showcase>

          {/* OTP Input */}
          <Showcase
            title="OTP Input"
            description="Auto-focus, paste support, arrow/backspace navigation."
            code={otpUsage}
          >
            <OtpInput length={6} onComplete={(code) => console.log('OTP:', code)} />
          </Showcase>

          {/* Special Card */}
          <Showcase
            title="Special Card"
            description="Glassmorphism with gradient hover accent."
            code={specialCardUsage}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SpecialCard
                title="Pro Subscription"
                description="Unlock advanced features, priority support, and more."
                cta={
                  <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-sm">
                    Upgrade
                  </button>
                }
              />
              <SpecialCard
                title="Weekly Highlight"
                description="Curated content picked just for you."
                image="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop"
                cta={
                  <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-sm">
                    Explore
                  </button>
                }
              />
            </div>
          </Showcase>

          {/* Cover Flow Carousel */}
          <Showcase
            title="3D Cover Flow Carousel"
            description="A carousel with a 3D perspective effect."
            code={coverFlowCarouselUsage}
          >
            <CoverFlowCarousel
              items={[
                { id: 1, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ab?q=80&w=1200&auto=format&fit=crop', title: 'Red Shoe' },
                { id: 2, image: 'https://images.unsplash.com/photo-1595950653106-60904f36224a?q=80&w=1200&auto=format&fit=crop', title: 'Colorful Shoe' },
                { id: 3, image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop', title: 'Checkered Shoe' },
                { id: 4, image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1200&auto=format&fit=crop', title: 'Brown Shoe' },
                { id: 5, image: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?q=80&w=1200&auto=format&fit=crop', title: 'White Shoe' },
              ]}
            />
          </Showcase>

          {/* Image Comparison Slider */}
          <Showcase
            title="Image Comparison Slider"
            description="Drag the handle to compare two images."
            code={imageComparisonSliderUsage}
          >
            <ImageComparisonSlider
              before="https://images.unsplash.com/photo-1526302924259-9343716a5875?q=80&w=1200&auto=format&fit=crop&grayscale=1"
              after="https://images.unsplash.com/photo-1526302924259-9343716a5875?q=80&w=1200&auto=format&fit=crop"
              altBefore="Black and white street"
              altAfter="Color street"
            />
          </Showcase>

          {/* Blur Comparison Slider */}
          <Showcase
            title="Blur Comparison Slider"
            description="Drag the handle to reveal the clear version of a blurred image."
            code={blurComparisonSliderUsage}
            >
            <BlurComparisonSlider
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200&auto=format&fit=crop"
                alt="A dog looking at the camera"
            />
          </Showcase>

          {/* Infinite Loop Carousel */}
          <Showcase
            title="Infinite Loop Carousel"
            description="A seamless, looping carousel of content."
            code={infiniteLoopCarouselUsage}
          >
            <InfiniteLoopCarousel>
              {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'JavaScript'].map((tech, i) => (
                <div key={i} className="flex-shrink-0 w-48 mx-4 p-4 rounded-xl border border-white/10 bg-white/5 text-center">
                  <p className="font-semibold text-white">{tech}</p>
                </div>
              ))}
            </InfiniteLoopCarousel>
          </Showcase>

          {/* Vertical Accordion Slider */}
          <Showcase
            title="Vertical Accordion Slider"
            description="A vertical set of panels that expand on hover."
            code={verticalAccordionSliderUsage}
          >
            <VerticalAccordionSlider
              items={[
                { id: 1, title: 'Forest Path', description: 'A serene path through a lush, green forest.', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop' },
                { id: 2, title: 'City Lights', description: 'The vibrant, bustling nightlife of a modern city.', image: 'https://images.unsplash.com/photo-1531932475436-b9a52853a48d?q=80&w=1200&auto=format&fit=crop' },
                { id: 3, title: 'Ocean View', description: 'Calm waves meeting the shore under a clear blue sky.', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200&auto=format&fit=crop' },
                { id: 4, title: 'Mountain Peak', description: 'The majestic view from the top of a snowy mountain.', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop' },
              ]}
            />
          </Showcase>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SliderComponents;

