'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/70 backdrop-blur-xl shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Text style like Aestoria */}
            <button
              onClick={() => scrollToSection('#home')}
              className={`text-xl font-medium tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-[#1a1a1a]' : 'text-white'
              }`}
            >
              Maprotech
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled 
                  ? 'text-[#1a1a1a] hover:bg-black/5' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#1a1a1a]"
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex flex-col">
              {/* Menu Header */}
              <div className="flex items-center justify-between h-20">
                <span className="text-xl font-medium tracking-tight text-white">
                  Maprotech
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </div>

              {/* Menu Links */}
              <nav className="flex-1 flex flex-col justify-center">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                    >
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-5xl md:text-7xl font-medium text-white/90 hover:text-white transition-colors py-2"
                      >
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Menu Footer */}
              <div className="py-8 border-t border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Get in touch</p>
                    <a
                      href="tel:+13467430784"
                      className="text-white text-lg hover:text-gray-300 transition-colors"
                    >
                      +1 (346) 743-0784
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://www.facebook.com/Maprotechconstructionllc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://wa.link/eidv05"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
