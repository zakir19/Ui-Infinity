
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Package, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-purple-500/20 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div 
            className="relative h-12 w-12"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-black text-xl">UI</div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              UIinfinity
            </span>
            <span className="text-xs text-gray-400 -mt-1">Components</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/components">Components</NavLink>
          <NavLink to="/charts">Charts</NavLink>
          <NavLink to="/">Lab</NavLink>
          
          <motion.a 
            href="https://github.com/zakir19/Ui-Infinity" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-lg hover:bg-purple-500/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="h-5 w-5" />
          </motion.a>
          
          <motion.a 
            href="https://www.npmjs.com/package/uiinfinity-components" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Package size={16} />
            Install
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-white p-2 rounded-lg hover:bg-purple-500/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-xl border-b border-purple-500/20 overflow-hidden"
          >
            <nav className="flex flex-col gap-2 py-4 px-4">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                <Sparkles size={16} />
                Home
              </MobileNavLink>
              <MobileNavLink to="/components" onClick={() => setIsMenuOpen(false)}>
                <Package size={16} />
                Components
              </MobileNavLink>
              <MobileNavLink to="/charts" onClick={() => setIsMenuOpen(false)}>
                <Sparkles size={16} />
                Charts
              </MobileNavLink>
              <MobileNavLink to="/lab" onClick={() => setIsMenuOpen(false)}>
                <Sparkles size={16} />
                Lab
              </MobileNavLink>
              
              <div className="flex gap-4 pt-4">
                <motion.a 
                  href="https://github.com/zakir19/Ui-Infinity" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex-1 px-4 py-3 bg-gray-800 rounded-lg text-center text-gray-400 hover:text-purple-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5 mx-auto mb-1" />
                  GitHub
                </motion.a>
                
                <motion.a 
                  href="https://www.npmjs.com/package/uiinfinity-components" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-center text-white font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  <Package className="h-5 w-5 mx-auto mb-1" />
                  Install
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
    <Link 
      to={to} 
      className="text-gray-400 hover:text-purple-400 transition-colors font-medium relative group"
    >
      {children}
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  </motion.div>
);

const MobileNavLink = ({ to, children, onClick }: { to: string, children: React.ReactNode, onClick: () => void }) => (
  <motion.div whileTap={{ scale: 0.95 }}>
    <Link 
      to={to} 
      className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors py-3 px-4 rounded-lg hover:bg-purple-500/10"
      onClick={onClick}
    >
      {children}
    </Link>
  </motion.div>
);

export default Navbar;
