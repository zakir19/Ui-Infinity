import React, { useState, useEffect } from 'react';

// Assuming these are your own custom components.
const TiltCard = ({ className, children }) => <div className={className}>{children}</div>;
const GlassCard = ({ className, children }) => <div className={className}>{children}</div>;
const GradientBorder = ({ className, children }) => <div className={className}>{children}</div>;
const AspectRatio = ({ ratio, className, children }) => <div style={{ aspectRatio: ratio }} className={className}>{children}</div>;
const Footer = () => <footer className="text-center py-8 text-gray-500">Footer Content</footer>;

// ===================================================================
// FUNCTIONAL COPYBUTTON COMPONENT
// ===================================================================
const CopyButton = ({ code, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset button text after 2 seconds
    });
  };

  return (
    <button
      onClick={handleCopy}
      className={`absolute top-3 right-3 p-2 text-xs rounded transition-all z-20 ${
        copied
          ? 'bg-green-500 text-white'
          : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
      } ${className}`}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};


// ===================================================================
// YOUR CUSTOM CARD UI LIBRARY
// ===================================================================
const Card = ({ className, ...props }) => (
  <div
    className={`bg-gray-900 border border-white/10 rounded-xl shadow-lg text-white ${className}`}
    {...props}
  />
);
const CardHeader = ({ className, ...props }) => <div className={`p-6 border-b border-white/10 ${className}`} {...props} />;
const CardTitle = ({ className, ...props }) => <h3 className={`text-xl font-semibold tracking-tight ${className}`} {...props} />;
const CardDescription = ({ className, ...props }) => <p className={`text-sm text-gray-400 mt-1 ${className}`} {...props} />;
const CardContent = ({ className, ...props }) => <div className={`p-6 ${className}`} {...props} />;
const CardFooter = ({ className, ...props }) => <div className={`p-6 pt-0 flex items-center ${className}`} {...props} />;

// ===================================================================
// UNIQUE CARD COMPONENTS (FULL IMPLEMENTATIONS RESTORED)
// ===================================================================

// 1. Chrono-Shift Card
const ChronoShiftCard = () => {
  return (
    <>
      <style>{`
        .chrono-card { position: relative; overflow: hidden; background: #1a1a1a; color: white; }
        .chrono-layer { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; transition: clip-path 0.4s cubic-bezier(0.77, 0, 0.175, 1); clip-path: circle(0% at 50% 50%); }
        .chrono-card:hover .chrono-layer { clip-path: circle(75% at 50% 50%); transition-delay: 0s; }
        .layer-parchment { background-image: url('https://www.transparenttextures.com/patterns/old-paper.png'); background-color: #d2b48c; color: #5a3d2b; font-family: 'Courier New', monospace; transition-delay: 0.2s; }
        .layer-8bit { background-color: #000; color: #00ff00; font-family: 'Press Start 2P', sans-serif; text-shadow: 2px 2px #ff00ff; transition-delay: 0.1s; }
        .layer-modern { clip-path: circle(75% at 50% 50%); }
      `}</style>
      <div className="chrono-card w-full max-w-md h-64 rounded-lg p-6 flex flex-col justify-center items-center text-center">
        <div className="chrono-layer layer-parchment"><h3 className="text-lg font-bold">Era: Antiquity</h3><p className="text-sm">A message from the past.</p></div>
        <div className="chrono-layer layer-8bit"><h3 className="text-lg">LEVEL 1</h3><p className="text-sm mt-2">&lt;PRESS START&gt;</p></div>
        <div className="chrono-layer layer-modern"><h3 className="text-xl font-bold">Chrono-Shift Card</h3><p className="text-gray-400 text-sm mt-2">Hover to travel through time.</p></div>
      </div>
    </>
  );
};

// 2. Bioluminescent Flora Card
const BioluminescentFloraCard = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setMousePos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
        };
        const cardElement = document.querySelector('.bioluminescent-card-unique');
        if (cardElement) {
            cardElement.addEventListener('mousemove', handleMouseMove);
            return () => cardElement.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const cardStyle = {
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
        position: 'relative',
        background: '#0a0a0a',
        overflow: 'hidden',
    };

    return (
        <>
            <style>{`
                @keyframes pulse-glow {
                    0%, 100% { filter: drop-shadow(0 0 4px rgba(0, 255, 200, 0.6)); opacity: 0.8; }
                    50% { filter: drop-shadow(0 0 10px rgba(0, 255, 200, 0.9)); opacity: 1; }
                }
                .bioluminescent-card-unique::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0, 255, 200, 0.15) 0%, transparent 30%);
                    transition: background 0.2s;
                }
            `}</style>
            <div style={cardStyle} className="bioluminescent-card-unique w-full max-w-md h-64 rounded-lg flex justify-center items-center">
                <svg width="80%" height="80%" viewBox="0 0 200 200" style={{ animation: 'pulse-glow 5s infinite ease-in-out' }}>
                    <path d="M100,20 C140,20 180,60 180,100 S140,180 100,180 S20,140 20,100 S60,20 100,20 Z M100,30 C65,30 30,65 30,100 S65,170 100,170 S170,135 170,100 S135,30 100,30 Z" fill="none" stroke="#00ffc8" strokeWidth="1" />
                    <path d="M100,50 C127.6,50 150,72.4 150,100 S127.6,150 100,150 S50,127.6 50,100 S72.4,50 100,50 Z" fill="none" stroke="#00ffc8" strokeWidth="0.5" transform-origin="center" style={{ animation: 'spin 20s linear infinite' }} />
                    <circle cx="100" cy="100" r="10" fill="#00ffc8" />
                </svg>
                <div className="absolute text-center text-white">
                    <h3 className="font-semibold text-lg">Bioluminescence</h3>
                    <p className="text-sm text-gray-300">The card reacts to you.</p>
                </div>
            </div>
        </>
    );
};

// 3. Kinetic Sculpture Card
const KineticSculptureCard = () => {
    return (
        <>
            <style>{`
                .kinetic-container { perspective: 1000px; }
                .kinetic-sculpture { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
                .kinetic-container:hover .kinetic-sculpture { transform: rotateY(30deg) rotateX(-10deg); }
                .kinetic-panel { position: absolute; width: 50%; height: 50%; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); display: flex; justify-content: center; align-items: center; font-size: 2em; color: white; transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
                .kinetic-container:hover .panel-1 { transform: translateZ(40px) translateX(-10%) rotateY(-20deg); }
                .kinetic-container:hover .panel-2 { transform: translateZ(20px) translateX(10%) rotateY(-20deg); }
                .kinetic-container:hover .panel-3 { transform: translateZ(60px) translateX(-10%) rotateY(-20deg); }
                .kinetic-container:hover .panel-4 { transform: translateZ(30px) translateX(10%) rotateY(-20deg); }
            `}</style>
            <div className="kinetic-container w-full max-w-md h-64">
                <div className="kinetic-sculpture">
                    <div className="kinetic-panel panel-1" style={{ top: 0, left: 0 }}>K</div>
                    <div className="kinetic-panel panel-2" style={{ top: 0, left: '50%' }}>I</div>
                    <div className="kinetic-panel panel-3" style={{ top: '50%', left: 0 }}>N</div>
                    <div className="kinetic-panel panel-4" style={{ top: '50%', left: '50%' }}>E</div>
                </div>
            </div>
        </>
    );
};

// 4. Aether-Weave Card
const AetherWeaveCard = () => (
    <>
        <style>{`
            @keyframes weave {
                0% { transform: translate(0, 0) scale(1.2); }
                25% { transform: translate(10px, -10px) scale(1.2); }
                50% { transform: translate(0, 0) scale(1.2); }
                75% { transform: translate(-10px, 10px) scale(1.2); }
                100% { transform: translate(0, 0) scale(1.2); }
            }
            .aether-card { position: relative; overflow: hidden; background-color: #111; }
            .aether-card::before {
                content: ''; position: absolute; inset: -20px;
                background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%" height="100%" filter="url(%23noiseFilter)"/%3E%3C/svg%3E');
                opacity: 0.1; animation: weave 15s infinite ease-in-out;
            }
        `}</style>
        <div className="aether-card relative w-full max-w-md h-64 rounded-lg flex flex-col justify-center items-center text-center p-4">
            <div className="relative z-10">
                <h3 className="text-xl font-bold">Aether Weave</h3>
                <p className="text-gray-400 text-sm mt-2">The fabric of reality shifts.</p>
            </div>
        </div>
    </>
);

// 5. Fractal Gateway Card
const FractalGatewayCard = () => (
    <>
        <style>{`
            @keyframes zoom-in {
                from { transform: scale(1); opacity: 0.5; }
                to { transform: scale(4); opacity: 0; }
            }
            .fractal-card {
                background-color: #000;
                background-image: url('https://i.imgur.com/QIcNp6m.jpeg');
                background-size: cover; position: relative; overflow: hidden;
            }
            .fractal-layer { position: absolute; inset: 0; background: inherit; background-size: cover; opacity: 0; }
            .fractal-card:hover .fractal-layer { animation: zoom-in 2s ease-out; }
            .fractal-card:hover .layer-2 { animation-delay: 0.5s; }
            .fractal-card:hover .layer-3 { animation-delay: 1s; }
        `}</style>
        <div className="fractal-card relative w-full max-w-md h-64 rounded-lg flex flex-col justify-center items-center text-center p-4">
            <div className="fractal-layer layer-1"></div>
            <div className="fractal-layer layer-2"></div>
            <div className="fractal-layer layer-3"></div>
            <div className="relative z-10 bg-black/50 p-4 rounded-md">
                <h3 className="text-xl font-bold">Fractal Gateway</h3>
                <p className="text-gray-300 text-sm mt-2">Hover to open the portal.</p>
            </div>
        </div>
    </>
);

// 6. Crystalline Resonance Card
const CrystallineResonanceCard = () => (
    <>
        <style>{`
            @keyframes shimmer { 0% { transform: translateX(-100%) skewX(-20deg); } 100% { transform: translateX(200%) skewX(-20deg); } }
            @keyframes resonate { 0%, 100% { box-shadow: 0 0 15px -5px #89f7fe; } 50% { box-shadow: 0 0 25px 5px #89f7fe; } }
            .crystal-card {
                position: relative; overflow: hidden; background: linear-gradient(45deg, #1e3a8a, #3b0764);
                clip-path: polygon(0% 20px, 20px 0%, calc(100% - 20px) 0%, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0% calc(100% - 20px));
            }
            .crystal-card:hover { animation: resonate 2s infinite; }
            .shimmer-overlay { position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent); opacity: 0; transform: translateX(-100%); }
            .crystal-card:hover .shimmer-overlay { opacity: 1; animation: shimmer 1.5s ease-in-out; }
        `}</style>
        <div className="crystal-card relative w-full max-w-md h-64 flex flex-col justify-center items-center text-center p-4">
            <div className="shimmer-overlay"></div>
            <div className="relative z-10">
                <h3 className="text-xl font-bold">Crystalline Resonance</h3>
                <p className="text-gray-300 text-sm mt-2">The structure reacts to your presence.</p>
            </div>
        </div>
    </>
);

// ===================================================================
// COMPONENT SOURCE CODE FOOTER
// ===================================================================

const standardCardLibraryCode = `
// Basic Card component library
const Card = ({ className, ...props }) => ( <div className={\`...\`} {...props} /> );
const CardHeader = ({ className, ...props }) => <div className={\`...\`} {...props} />;
const CardTitle = ({ className, ...props }) => <h3 className={\`...\`} {...props} />;
const CardDescription = ({ className, ...props }) => <p className={\`...\`} {...props} />;
const CardContent = ({ className, ...props }) => <div className={\`...\`} {...props} />;
const CardFooter = ({ className, ...props }) => <div className={\`...\`} {...props} />;
`;

const chronoShiftCodeString = `
const ChronoShiftCard = () => {
  return (
    <>
      <style>{\` /* ... CSS styles ... */ \`}</style>
      <div className="chrono-card w-full max-w-md h-64 rounded-lg ...">
        <div className="chrono-layer layer-parchment">...</div>
        <div className="chrono-layer layer-8bit">...</div>
        <div className="chrono-layer layer-modern">...</div>
      </div>
    </>
  );
};`;

const bioluminescentCodeString = `
const BioluminescentFloraCard = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    useEffect(() => { /* ... mouse move logic ... */ }, []);
    const cardStyle = { '--mouse-x': \`\${mousePos.x}px\`, '--mouse-y': \`\${mousePos.y}px\`, ... };
    return (
        <>
            <style>{\` /* ... CSS styles ... */ \`}</style>
            <div style={cardStyle} className="bioluminescent-card-unique ...">
                <svg>...</svg>
                <div className="absolute ...">...</div>
            </div>
        </>
    );
};`;

const kineticCodeString = `
const KineticSculptureCard = () => {
    return (
        <>
            <style>{\` /* ... CSS styles ... */ \`}</style>
            <div className="kinetic-container w-full max-w-md h-64">
                <div className="kinetic-sculpture">
                    <div className="kinetic-panel panel-1" ...>K</div>
                    <div className="kinetic-panel panel-2" ...>I</div>
                    <div className="kinetic-panel panel-3" ...>N</div>
                    <div className="kinetic-panel panel-4" ...>E</div>
                </div>
            </div>
        </>
    );
};`;


const componentCodes = [
    { title: "Standard Card Library", code: standardCardLibraryCode },
    { title: "Chrono-Shift Card", code: chronoShiftCodeString },
    { title: "Bioluminescent Flora Card", code: bioluminescentCodeString },
    { title: "Kinetic Sculpture Card", code: kineticCodeString },
    // You can add string versions of the other components here
];

const ComponentCodeFooter = () => (
    <section className="py-12 bg-black/20">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Component Source Code</h2>
            <div className="space-y-8">
                {componentCodes.map((comp, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold text-gray-300 mb-4">{comp.title}</h3>
                        <div className="glass-morphism p-2 rounded-xl overflow-hidden relative group">
                            <CopyButton code={comp.code.trim()} className="opacity-0 group-hover:opacity-100" />
                            <pre className="text-sm text-gray-300 overflow-auto p-4 max-h-96">
                                <code>{comp.code.trim()}</code>
                            </pre>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ===================================================================
// MAIN PAGE COMPONENT
// ===================================================================
const CardComponents = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-32 pb-12 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Card Components</h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">Beautiful and versatile card components with various styles and effects.</p>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CardShowcase title="Aether-Weave Card" description="Features a perpetually shifting, ethereal background." code={`<AetherWeaveCard />`}>
              <AetherWeaveCard />
            </CardShowcase>
            <CardShowcase title="Fractal Gateway Card" description="Opens a portal with an infinite zoom effect on hover." code={`<FractalGatewayCard />`}>
              <FractalGatewayCard />
            </CardShowcase>
            <CardShowcase title="Crystalline Resonance Card" description="A faceted crystal that shimmers and glows on hover." code={`<CrystallineResonanceCard />`}>
              <CrystallineResonanceCard />
            </CardShowcase>
            <CardShowcase title="Chrono-Shift Card" description="Glitches through stylistic eras on hover." code={`<ChronoShiftCard />`}>
              <ChronoShiftCard />
            </CardShowcase>
            <CardShowcase title="Bioluminescent Flora Card" description="Organic glowing patterns that react to your cursor." code={`<BioluminescentFloraCard />`}>
              <BioluminescentFloraCard />
            </CardShowcase>
            <CardShowcase title="Kinetic Sculpture Card" description="Content panels rearrange in 3D space on hover." code={`<KineticSculptureCard />`}>
              <KineticSculptureCard />
            </CardShowcase>
            <CardShowcase title="Standard Card" description="Basic card component with flexible content areas" code={standardCardLibraryCode}>
              <Card className="w-full max-w-md">
                <CardHeader><CardTitle>Card Title</CardTitle><CardDescription>Card description</CardDescription></CardHeader>
                <CardContent><p>This is the main content area.</p></CardContent>
                <CardFooter className="flex justify-between"><button className="text-sm text-blue-400">Cancel</button><button className="text-sm text-blue-400 font-medium">Continue</button></CardFooter>
              </Card>
            </CardShowcase>
            <CardShowcase title="Profile Card" description="Specialized card for user profiles" code={`<Card>...</Card>`}>
              <Card className="w-full max-w-md">
                <div className="p-6 flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-purple to-neon-cyan flex items-center justify-center text-2xl font-bold text-white">JD</div>
                  <div><h3 className="text-lg font-medium">Jane Doe</h3><p className="text-gray-400 text-sm">UX Designer</p></div>
                </div>
              </Card>
            </CardShowcase>
            <CardShowcase title="Image Card" description="Card with maintained aspect ratio for images" code={`<Card>...</Card>`}>
              <Card className="w-full max-w-md overflow-hidden p-0">
                <AspectRatio ratio={16/9} className="bg-black/20 flex items-center justify-center text-gray-400">Image Placeholder</AspectRatio>
                <CardContent className="p-4"><h3 className="text-lg font-medium">Image Title</h3></CardContent>
              </Card>
            </CardShowcase>
          </div>
        </div>
      </section>
      
      {/* Renders the new source code section */}
      <ComponentCodeFooter />
      
      <Footer />
    </div>
  );
};

// This wrapper component remains unchanged.
const CardShowcase = ({ title, description, children, code }) => {
  return (
    <div className="glass-morphism rounded-xl overflow-hidden hover:border-neon-purple/30 transition-colors group relative">
      <CopyButton code={code} className="opacity-0 group-hover:opacity-100" />
      <div className="p-4 border-b border-white/10">
        <h3 className="text-white font-medium">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
      <div className="p-8 flex items-center justify-center bg-black/20">
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardComponents;