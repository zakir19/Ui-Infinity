import React, { useEffect, useState } from 'react';

// Lightweight preloader overlay with a glowing brand core
// Shows once per session, fades out smoothly
const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Only show once per session
    const hasSeen = sessionStorage.getItem('preloader_seen');
    if (hasSeen) return;

    setVisible(true);

    const done = () => {
      setTimeout(() => {
        setExiting(true);
        setTimeout(() => {
          setVisible(false);
          sessionStorage.setItem('preloader_seen', '1');
        }, 600);
      }, 700); // brief brand moment
    };

    if (document.readyState === 'complete') done();
    else window.addEventListener('load', done, { once: true });

    return () => window.removeEventListener('load', done);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[9999] grid place-items-center bg-background/95 backdrop-blur-xl transition-opacity duration-500 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Brand core */}
      <div className="relative w-40 h-40 md:w-56 md:h-56">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 blur-3xl opacity-40 animate-pulse" />
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-purple-400/70 to-cyan-300/70 border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.35)] animate-spin-slow" />
        <div className="absolute inset-10 rounded-full bg-background/70 border border-white/10" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-sm tracking-widest text-white/70">LOADING</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
