'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Plus } from 'lucide-react';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={ref} className="relative">
      {/* Main CTA Section */}
      <div className="relative h-[85vh] min-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/footer-bg.jpg"
            alt="Modern interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between h-20">
              <span className="text-xl font-medium tracking-tight text-white">
                Maprotech
              </span>
              <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                <Plus className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-4 tracking-tight"
          >
            Spaces Whisper
            <br />
            Your Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/70 mb-8 text-sm"
          >
            — Construction is the silent poetry that turns empty rooms into heartfelt homes
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => scrollToSection('#contact')}
            className="px-6 py-3 bg-white text-[#1a1a1a] text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            Get a Quote
          </motion.button>
        </div>

        {/* Bottom Footer Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="flex items-center justify-between py-6 border-t border-white/10">
              {/* Logo */}
              <div className="relative h-8 w-32">
                <Image
                  src="/logo-white.png"
                  alt="Maprotech Construction"
                  fill
                  className="object-contain object-left"
                />
              </div>

              {/* Links */}
              <div className="hidden md:flex items-center gap-6">
                <a
                  href="https://www.facebook.com/Maprotechconstructionllc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://wa.link/eidv05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </div>

              {/* Copyright */}
              <p className="text-white/40 text-xs">
                © 2024 MaProTech
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
