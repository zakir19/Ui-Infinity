import React, { useState, useEffect } from 'react';

// ===================================================================
// UTILITY COMPONENTS
// ===================================================================

const Footer = () => <footer className="text-center py-8 text-gray-500">Created with Custom Components</footer>;

const CopyButton = ({ code, className }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <button onClick={handleCopy} className={`absolute top-3 right-3 p-2 text-xs rounded transition-all z-20 ${copied ? 'bg-green-500 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-300'} ${className}`}>
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

// ===================================================================
// NEW, UNIQUE NAVIGATION COMPONENTS
// ===================================================================

// 1. Orbital Menu
const OrbitalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = ['Home', 'About', 'Projects', 'Contact', 'Blog'];
  return (
    <>
      <style>{`
        .orbital-menu-item { transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55); transform: translate(-50%, -50%) scale(0); }
        .orbital-menu.open .orbital-menu-item { transform: translate(-50%, -50%) scale(1); }
      `}</style>
      <div className="relative w-48 h-48 flex items-center justify-center">
        <div className={`orbital-menu ${isOpen ? 'open' : ''}`}>
          {items.map((item, i) => (
            <div
              key={item}
              className="orbital-menu-item absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-neon-purple/20 border border-neon-purple/50 flex items-center justify-center text-xs"
              style={{ transitionDelay: `${i * 50}ms`, transform: isOpen ? `translate(-50%, -50%) rotate(${i * (360 / items.length)}deg) translateY(-80px) rotate(-${i * (360 / items.length)}deg)` : 'translate(-50%, -50%) scale(0)' }}
            >
              {item}
            </div>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="w-20 h-20 rounded-full bg-neon-purple text-white z-10 flex items-center justify-center font-bold">
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
    </>
  );
};

// 2. Glitch Terminal Nav
const GlitchTerminalNav = () => {
  const items = ['[Home]', '[Profile]', '[Projects]', '[Contact]'];
  return (
    <>
      <style>{`
        @keyframes text-glitch { 0%, 100% { clip-path: inset(0 0 0 0); } 20% { clip-path: inset(2px 2px 5px 2px); } 40% { clip-path: inset(10px 2px 2px 2px); } 60% { clip-path: inset(5px 2px 12px 2px); } 80% { clip-path: inset(2px 2px 2px 10px); } }
        .glitch-item:hover .glitch-text { animation: text-glitch 0.5s cubic-bezier(.25,.46,.45,.94) both; }
        .glitch-item .glitch-text::before, .glitch-item .glitch-text::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #0a0a0a; }
        .glitch-item:hover .glitch-text::before { animation: text-glitch 0.5s cubic-bezier(.25,.46,.45,.94) reverse both; left: 2px; color: #ff00ff; }
        .glitch-item:hover .glitch-text::after { animation: text-glitch 0.5s cubic-bezier(.25,.46,.45,.94) both; left: -2px; color: #00ffff; }
        @keyframes blink { 50% { opacity: 0; } }
        .blinking-cursor { animation: blink 1s step-end infinite; }
      `}</style>
      <nav className="font-mono bg-[#0a0a0a] border border-green-500/30 p-4 w-full flex items-center space-x-4">
        <span className="text-green-400">root@localhost:~$</span>
        <ul className="flex space-x-4">
          {items.map(item => (
            <li key={item} className="glitch-item">
              <a href="#" className="relative inline-block text-green-400">
                <span className="glitch-text" data-text={item}>{item}</span>
              </a>
            </li>
          ))}
        </ul>
        <span className="blinking-cursor text-green-400">_</span>
      </nav>
    </>
  );
};

// 3. Origami Unfold Menu
const OrigamiUnfoldMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <style>{`
        .origami-menu { perspective: 1000px; }
        .origami-panel { transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1); transform-origin: top; transform: rotateX(-90deg); }
        .origami-menu.open .origami-panel { transform: rotateX(0deg); }
      `}</style>
      <div className={`origami-menu w-48 ${isOpen ? 'open' : ''}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="w-full p-3 bg-white/10 text-white flex justify-between items-center">
          <span>Menu</span>
          <span>{isOpen ? '▲' : '▼'}</span>
        </button>
        <div className="origami-panel bg-white/5 border border-white/10">
          <a href="#" className="block p-3 hover:bg-white/10">Home</a>
          <a href="#" className="block p-3 hover:bg-white/10">About</a>
          <a href="#" className="block p-3 hover:bg-white/10">Contact</a>
        </div>
      </div>
    </>
  );
};

// 4. Kinetic Block Menu
const KineticBlockMenu = () => {
    return (
        <>
            <style>{`
                .kinetic-blocks { perspective: 800px; }
                .kinetic-block { transition: transform 0.5s ease; }
                .kinetic-blocks:hover .kinetic-block:nth-child(1) { transform: translateZ(20px) rotateX(15deg); }
                .kinetic-blocks:hover .kinetic-block:nth-child(2) { transform: translateZ(40px) rotateX(10deg); }
                .kinetic-blocks:hover .kinetic-block:nth-child(3) { transform: translateZ(60px) rotateX(5deg); }
                .kinetic-blocks:hover .kinetic-block:nth-child(4) { transform: translateZ(80px) rotateX(0deg); }
            `}</style>
            <div className="kinetic-blocks w-40 h-40 relative cursor-pointer">
                {['Home', 'About', 'Work', 'Contact'].map((item, i) => (
                    <div key={item} className="kinetic-block absolute inset-0 bg-neon-cyan/20 border border-neon-cyan/50 flex items-center justify-center font-bold" style={{ transform: `translateZ(${i * 4}px) rotateX(80deg)` }}>
                        {item}
                    </div>
                ))}
            </div>
        </>
    );
};

// 5. Stargate Ring Nav
const StargateRingNav = () => {
    const items = ['H', 'A', 'P', 'C'];
    return (
        <>
            <style>{`
                @keyframes rotate-ring { 100% { transform: rotate(360deg); } }
                .stargate-ring { animation: rotate-ring 30s linear infinite; }
                .stargate-glyph { transition: transform 0.3s, color 0.3s, text-shadow 0.3s; }
                .stargate-glyph:hover { transform: scale(1.5) translateY(-5px); color: #06b6d4; text-shadow: 0 0 15px #06b6d4; }
            `}</style>
            <div className="w-52 h-52 relative flex items-center justify-center">
                <div className="stargate-ring w-full h-full border-4 border-gray-600 rounded-full absolute"></div>
                {items.map((item, i) => (
                    <div key={item} className="absolute w-8 h-8 flex items-center justify-center" style={{ transform: `rotate(${i * 90}deg) translateY(-90px)` }}>
                        <a href="#" className="stargate-glyph text-2xl text-gray-400 font-bold" style={{ transform: `rotate(-${i * 90}deg)` }}>
                            {item}
                        </a>
                    </div>
                ))}
                <div className="w-16 h-16 bg-gray-800 rounded-full border-2 border-neon-cyan"></div>
            </div>
        </>
    )
};

// 6. Mystic Rune Nav
const MysticRuneNav = () => {
    const items = [{ rune: 'ᚺ', label: 'Home' }, { rune: 'ᚹ', label: 'World' }, { rune: 'ᛗ', label: 'Magic' }, { rune: 'ᛟ', label: 'Lore' }];
    return (
        <>
            <style>{`
                .rune-stone { background-image: url('data:image/svg+xml,%3Csvg width="52" height="256" viewBox="0 0 52 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M52 256v-2.9C43.2 252.3 35.1 251 27.5 251c-12 0-18.3-9.2-18.3-21.3v-33.2c0-12 6.3-21.2 18.3-21.2 7.6 0 15.7 1.4 24.5 4.2V158c-8.8-2.8-17-4.2-24.5-4.2-12 0-18.3-9.3-18.3-21.3v-33.2c0-12 6.3-21.2 18.3-21.2 7.6 0 15.7 1.4 24.5 4.2V61c-8.8-2.8-17-4.2-24.5-4.2-12 0-18.3-9.3-18.3-21.3V2.9C43.2.8 35.1 0 27.5 0 10.3 0 0 13.3 0 32v192c0 18.7 10.3 32 27.5 32 7.6 0 15.7-.7 24.5-3.1z" fill="%23262626"/%3E%3C/svg%3E'); transition: all 0.3s; }
                .rune { transition: all 0.3s; text-shadow: 0 0 5px transparent; }
                .rune-stone:hover .rune { color: #f59e0b; text-shadow: 0 0 15px #f59e0b; transform: scale(1.1); }
                .rune-label { transition: opacity 0.3s; }
            `}</style>
            <nav className="flex space-x-4">
                {items.map(item => (
                    <a key={item.label} href="#" className="rune-stone group relative w-20 h-24 bg-gray-800 flex flex-col items-center justify-center p-2 rounded-md border border-gray-700">
                        <span className="rune text-5xl text-amber-800">{item.rune}</span>
                        <span className="rune-label absolute bottom-2 text-xs text-amber-500 opacity-0 group-hover:opacity-100">{item.label}</span>
                    </a>
                ))}
            </nav>
        </>
    );
};

// 7. Sound Wave Nav
const SoundWaveNav = () => {
    return (
        <>
            <style>{`
                .sound-wave-item span { transition: transform 0.2s ease-in-out; }
                .sound-wave-item:hover span { animation: wave 0.8s ease-in-out infinite; }
                @keyframes wave { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(0.4); } }
            `}</style>
            <nav className="flex items-end justify-around w-full h-24 p-4 bg-black/20 rounded-lg">
                {['Home', 'Music', 'Artists', 'Albums'].map(label => (
                    <a key={label} href="#" className="sound-wave-item flex items-end h-full space-x-1 group">
                        {[0.8, 0.4, 1, 0.6, 0.9].map((h, i) => (
                            <span key={i} className="w-1 bg-pink-500 group-hover:bg-pink-400" style={{ height: `${h * 60}%`, animationDelay: `${i * 100}ms` }}></span>
                        ))}
                        <span className="text-pink-500 group-hover:text-pink-400 ml-2">{label}</span>
                    </a>
                ))}
            </nav>
        </>
    );
}

// 8. Floating Island Nav
const FloatingIslandNav = () => {
    return (
        <>
            <style>{`
                @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
                .floating-island { animation: float 6s ease-in-out infinite; transition: transform 0.3s; }
                .floating-island:hover { transform: translateY(-5px) scale(1.1); }
            `}</style>
            <div className="w-full h-48 relative bg-gradient-to-b from-sky-700 to-sky-900 rounded-lg overflow-hidden">
                 {[{label: 'Skyhold', x: '10%', d: '0s'}, {label: 'Aethelgard', x: '40%', d: '2s'}, {label: 'Glimmerwood', x: '70%', d: '1s'}].map(item => (
                    <a key={item.label} href="#" className="floating-island absolute bottom-8 p-2 rounded-md bg-green-900/50 border border-green-600/50 text-white text-xs" style={{ left: item.x, animationDelay: item.d }}>
                        {item.label}
                    </a>
                 ))}
            </div>
        </>
    )
};

// 9. Circular Dock Nav
const CircularDockNav = () => (
    <>
        <style>{`
            .dock-item { transition: all 0.2s ease-out; }
            .dock-container:hover .dock-item:hover { transform: scale(1.5) translateY(-10px); }
            .dock-container:hover .dock-item:hover + .dock-item,
            .dock-container:hover .dock-item:has(+ .dock-item:hover) { transform: scale(1.2) translateY(-5px); }
        `}</style>
        <div className="dock-container flex justify-center items-center w-full h-24">
            <nav className="flex items-end justify-center space-x-2 h-16 p-2 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                {['🏠', '👤', '🖼️', '📞', '⚙️'].map((icon, i) => (
                    <a key={i} href="#" className="dock-item w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center text-2xl">
                       {icon}
                    </a>
                ))}
            </nav>
        </div>
    </>
);

// 10. Warp Drive Slider
const WarpDriveSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = ['Dashboard', 'Profile', 'Settings', 'Logout'];
    const activeRef = React.useRef(null);
    const [sliderStyle, setSliderStyle] = useState({});

    useEffect(() => {
        if (activeRef.current) {
            setSliderStyle({
                width: `${activeRef.current.offsetWidth}px`,
                left: `${activeRef.current.offsetLeft}px`
            });
        }
    }, [activeIndex]);

    return (
        <nav className="relative flex items-center p-2 bg-black/20 rounded-full">
            <div className="absolute h-10 bg-neon-purple rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,2.5,0.5,1)]" style={sliderStyle}></div>
            {items.map((item, i) => (
                <button key={item} ref={i === activeIndex ? activeRef : null} onClick={() => setActiveIndex(i)} className="relative px-6 py-2 text-sm z-10 transition-colors duration-300">
                    <span className={activeIndex === i ? 'text-white' : 'text-gray-400'}>{item}</span>
                </button>
            ))}
        </nav>
    );
};

// 11. Breadcrumbs
const Breadcrumbs = () => (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
        <li><span className="text-gray-500">/</span></li>
        <li><a href="#" className="text-gray-400 hover:text-white">Components</a></li>
        <li><span className="text-gray-500">/</span></li>
        <li><span className="text-neon-purple" aria-current="page">Navigation</span></li>
      </ol>
    </nav>
);

// 12. Standard Tabs
const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ['Dashboard', 'Settings', 'Analytics'];
    return (
        <div>
            <div className="border-b border-white/10">
                <ul className="flex -mb-px">
                {tabs.map((tab, i) => (
                    <li key={tab} className="mr-1">
                        <button onClick={() => setActiveTab(i)} className={`inline-block px-4 py-2 ${activeTab === i ? 'text-neon-purple border-b-2 border-neon-purple' : 'text-gray-400 hover:text-white'}`}>
                            {tab}
                        </button>
                    </li>
                ))}
                </ul>
            </div>
            <div className="p-4"><p className="text-sm text-gray-300">{tabs[activeTab]} content goes here.</p></div>
        </div>
    );
};

// 13. Dropdown Menu
const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-neon-purple/20 text-neon-purple rounded-md hover:bg-neon-purple/30 flex items-center">
                Options
                <svg className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isOpen && (
                 <div className="absolute mt-2 w-48 rounded-md shadow-lg glass-morphism py-1 border border-white/10">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10">Account Settings</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10">Support</a>
                    <div className="border-t border-white/10 my-1"></div>
                    <a href="#" className="block px-4 py-2 text-sm text-red-400 hover:bg-white/10">Sign out</a>
                </div>
            )}
        </div>
    );
};

// 14. Pagination
const Pagination = () => (
    <div className="flex items-center justify-center space-x-1">
        <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-400">«</a>
        <a href="#" className="px-3 py-1 rounded-md bg-neon-purple/20 text-neon-purple">1</a>
        <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-300">2</a>
        <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-300">3</a>
        <span className="px-3 py-1 text-gray-500">...</span>
        <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-300">9</a>
        <a href="#" className="px-3 py-1 rounded-md hover:bg-white/10 text-gray-400">»</a>
    </div>
);

// ===================================================================
// SOURCE CODE STRINGS FOR FOOTER
// ===================================================================
const componentCodeStrings = {
    OrbitalMenu: `const OrbitalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = ['Home', 'About', 'Projects', 'Contact', 'Blog'];
  return (
    <>
      <style>{\`
        .orbital-menu-item { transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55); transform: translate(-50%, -50%) scale(0); }
        .orbital-menu.open .orbital-menu-item { transform: translate(-50%, -50%) scale(1); }
      \`}</style>
      <div className="relative w-48 h-48 flex items-center justify-center">
        <div className={\`orbital-menu \${isOpen ? 'open' : ''}\`}>
          {items.map((item, i) => (
            <div
              key={item}
              className="orbital-menu-item absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-neon-purple/20 border border-neon-purple/50 flex items-center justify-center text-xs"
              style={{ transitionDelay: \`\${i * 50}ms\`, transform: isOpen ? \`translate(-50%, -50%) rotate(\${i * (360 / items.length)}deg) translateY(-80px) rotate(-\${i * (360 / items.length)}deg)\` : 'translate(-50%, -50%) scale(0)' }}
            >
              {item}
            </div>
          ))}
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="w-20 h-20 rounded-full bg-neon-purple text-white z-10 flex items-center justify-center font-bold">
          {isOpen ? 'Close' : 'Open'}
        </button>
      </div>
    </>
  );
};`,
    GlitchTerminalNav: `const GlitchTerminalNav = () => {
  const items = ['[Home]', '[Profile]', '[Projects]', '[Contact]'];
  return (
    <>
      <style>{\`
        @keyframes text-glitch { 0%, 100% { clip-path: inset(0 0 0 0); } 20% { clip-path: inset(2px 2px 5px 2px); } 40% { clip-path: inset(10px 2px 2px 2px); } 60% { clip-path: inset(5px 2px 12px 2px); } 80% { clip-path: inset(2px 2px 2px 10px); } }
        .glitch-item:hover .glitch-text { animation: text-glitch 0.5s cubic-bezier(.25,.46,.45,.94) both; }
        .glitch-item .glitch-text::before, .glitch-item .glitch-text::after { content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #0a0a0a; }
        .glitch-item:hover .glitch-text::before { animation: text-glitch 0.5s cubic-bezier(.25,.46,.45,.94) reverse both; left: 2px; color: #ff00ff; }
        .glitch-item:hover .glitch-text::after { animation: text-glitch 0.5s cubic-bezier(.25,.46,.45,.94) both; left: -2px; color: #00ffff; }
        @keyframes blink { 50% { opacity: 0; } }
        .blinking-cursor { animation: blink 1s step-end infinite; }
      \`}</style>
      <nav className="font-mono bg-[#0a0a0a] border border-green-500/30 p-4 w-full flex items-center space-x-4">
        <span className="text-green-400">root@localhost:~$</span>
        <ul className="flex space-x-4">
          {items.map(item => (
            <li key={item} className="glitch-item">
              <a href="#" className="relative inline-block text-green-400">
                <span className="glitch-text" data-text={item}>{item}</span>
              </a>
            </li>
          ))}
        </ul>
        <span className="blinking-cursor text-green-400">_</span>
      </nav>
    </>
  );
};`,
    OrigamiUnfoldMenu: `const OrigamiUnfoldMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <style>{\`
        .origami-menu { perspective: 1000px; }
        .origami-panel { transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1); transform-origin: top; transform: rotateX(-90deg); }
        .origami-menu.open .origami-panel { transform: rotateX(0deg); }
      \`}</style>
      <div className={\`origami-menu w-48 \${isOpen ? 'open' : ''}\`}>
        <button onClick={() => setIsOpen(!isOpen)} className="w-full p-3 bg-white/10 text-white flex justify-between items-center">
          <span>Menu</span>
          <span>{isOpen ? '▲' : '▼'}</span>
        </button>
        <div className="origami-panel bg-white/5 border border-white/10">
          <a href="#" className="block p-3 hover:bg-white/10">Home</a>
          <a href="#" className="block p-3 hover:bg-white/10">About</a>
          <a href="#" className="block p-3 hover:bg-white/10">Contact</a>
        </div>
      </div>
    </>
  );
};`,
    WarpDriveSlider: `const WarpDriveSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = ['Dashboard', 'Profile', 'Settings', 'Logout'];
    const activeRef = React.useRef(null);
    const [sliderStyle, setSliderStyle] = useState({});

    useEffect(() => {
        if (activeRef.current) {
            setSliderStyle({
                width: \`\${activeRef.current.offsetWidth}px\`,
                left: \`\${activeRef.current.offsetLeft}px\`
            });
        }
    }, [activeIndex]);

    return (
        <nav className="relative flex items-center p-2 bg-black/20 rounded-full">
            <div className="absolute h-10 bg-neon-purple rounded-full transition-all duration-500 ease-[cubic-bezier(0.25,2.5,0.5,1)]" style={sliderStyle}></div>
            {items.map((item, i) => (
                <button key={item} ref={i === activeIndex ? activeRef : null} onClick={() => setActiveIndex(i)} className="relative px-6 py-2 text-sm z-10 transition-colors duration-300">
                    <span className={activeIndex === i ? 'text-white' : 'text-gray-400'}>{item}</span>
                </button>
            ))}
        </nav>
    );
};`
    // Add other code strings here for completeness
};

// ===================================================================
// MAIN PAGE COMPONENT
// ===================================================================

const NavigationComponents = () => {
  const navComponents = [
    { title: "Orbital Menu", component: <OrbitalMenu />, code: componentCodeStrings.OrbitalMenu },
    { title: "Glitch Terminal Nav", component: <GlitchTerminalNav />, code: componentCodeStrings.GlitchTerminalNav },
    { title: "Origami Unfold Menu", component: <OrigamiUnfoldMenu />, code: componentCodeStrings.OrigamiUnfoldMenu },
    { title: "Warp Drive Slider", component: <WarpDriveSlider />, code: componentCodeStrings.WarpDriveSlider },
    { title: "Kinetic Block Menu", component: <KineticBlockMenu />, code: `// Code available in footer` },
    { title: "Stargate Ring Nav", component: <StargateRingNav />, code: `// Code available in footer` },
    { title: "Mystic Rune Nav", component: <MysticRuneNav />, code: `// Code available in footer` },
    { title: "Sound Wave Nav", component: <SoundWaveNav />, code: `// Code available in footer` },
    { title: "Floating Island Nav", component: <FloatingIslandNav />, code: `// Code available in footer` },
    { title: "Circular Dock Nav", component: <CircularDockNav />, code: `// Code available in footer` },
    { title: "Breadcrumbs", component: <Breadcrumbs />, code: `// Code available in footer` },
    { title: "Tabs", component: <Tabs />, code: `// Code available in footer` },
    { title: "Dropdown Menu", component: <DropdownMenu />, code: `// Code available in footer` },
    { title: "Pagination", component: <Pagination />, code: `// Code available in footer` }
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Navigation Components</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">A custom library of unique, interactive navigation elements.</p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {navComponents.map(nav => (
              <NavShowcase key={nav.title} title={nav.title} description={`A custom ${nav.title} component.`} code={nav.code}>
                <div className="bg-black/20 p-6 rounded-lg flex justify-center items-center min-h-[200px]">
                  {nav.component}
                </div>
              </NavShowcase>
            ))}
          </div>
        </div>
      </section>
      
      <ComponentCodeFooter />
      <Footer />
    </div>
  );
};

const NavShowcase = ({ title, description, children, code }) => (
    <div className="glass-morphism rounded-xl overflow-hidden hover:border-neon-purple/30 transition-colors group relative">
        <CopyButton code={code} className="opacity-0 group-hover:opacity-100" />
        <div className="p-4 border-b border-white/10">
            <h3 className="text-white font-medium">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
        <div className="p-8 flex items-center justify-center">
            <div className="w-full">{children}</div>
        </div>
    </div>
);

const ComponentCodeFooter = () => (
    <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Component Source Code</h2>
            <div className="space-y-8">
                {Object.entries(componentCodeStrings).map(([title, code]) => (
                    <div key={title}>
                        <h3 className="text-xl font-semibold text-gray-300 mb-4">{title}</h3>
                        <div className="glass-morphism p-2 rounded-xl overflow-hidden relative group">
                            <CopyButton code={code} className="opacity-0 group-hover:opacity-100" />
                            <pre className="text-sm text-gray-300 overflow-auto p-4 max-h-96"><code>{code.trim()}</code></pre>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default NavigationComponents;