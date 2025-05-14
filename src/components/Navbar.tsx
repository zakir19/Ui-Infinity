
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github } from 'lucide-react';

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
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 bg-neon-purple rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold">U</div>
          </div>
          <span className="text-xl font-bold text-white">UIinfinity</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/components">Components</NavLink>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-md text-white font-medium hover:opacity-90 transition-all"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-morphism absolute top-full left-0 right-0 py-4">
          <nav className="flex flex-col gap-4 px-4">
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/components" onClick={() => setIsMenuOpen(false)}>Components</MobileNavLink>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              GitHub
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-md text-white font-medium hover:opacity-90 transition-all text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-gray-400 hover:text-white transition-colors"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, onClick, children }: { to: string, onClick: () => void, children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-gray-400 hover:text-white transition-colors py-2"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
