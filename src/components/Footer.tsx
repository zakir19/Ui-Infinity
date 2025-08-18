import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <div className="absolute inset-0 bg-neon-purple rounded-full opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">U</div>
              </div>
              <span className="text-xl font-bold text-white">UIinfinity</span>
            </div>
            <p className="text-gray-400">
              Beautiful UI components with smooth animations and 3D effects.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/zakir19" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/zakir-husain-patel/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Components</FooterLink>
              <FooterLink href="#">Examples</FooterLink>
              <FooterLink href="#">Playground</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-medium mb-4" id="contact">Get in Touch</h3>
            <p className="text-gray-400 mb-4">
              Have questions? Reach out to us.
            </p>
            <form 
              action="https://formspree.io/f/xkgryprw" 
              method="POST" 
              className="flex"
            >
              <input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                required
                className="bg-gray-800 border border-gray-700 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-neon-purple"
              />
              <button type="submit" className="bg-neon-purple hover:bg-neon-purple/80 text-white px-4 py-2 rounded-r-md transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} UIinfinity. All rights reserved. Made with ❤️ by Zakir.
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-400 hover:text-neon-purple transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer;
