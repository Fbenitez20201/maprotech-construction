'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useI18n();

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.services'), href: '/#services' },
    { name: t('nav.projects'), href: '/#projects' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
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
            <Link
              href="/"
              className={`text-xl font-medium tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-[#1a1a1a]' : 'text-white'
              }`}
            >
              Maprotech
            </Link>

            {/* Right side - Language Toggle + Menu */}
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gray-100 text-[#1a1a1a] hover:bg-gray-200' 
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                <Globe className="w-4 h-4" />
                {language.toUpperCase()}
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
                <div className="flex items-center gap-3">
                  {/* Language Toggle in Menu */}
                  <button
                    onClick={toggleLanguage}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <Globe className="w-4 h-4" />
                    {language.toUpperCase()}
                  </button>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6" strokeWidth={1.5} />
                  </button>
                </div>
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
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-5xl md:text-7xl font-medium text-white/90 hover:text-white transition-colors py-2 block"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Menu Footer */}
              <div className="py-8 border-t border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">{t('nav.getInTouch')}</p>
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
