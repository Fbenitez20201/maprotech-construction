'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Facebook, Instagram, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (href: string) => {
    document?.querySelector?.(href)?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="relative h-16 w-56 mb-6">
              <Image
                src="/logo-white.png"
                alt="Maprotech Construction"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/60 mb-6 max-w-sm">
              Building dreams since 2015. We specialize in quality construction, remodeling, and renovation services for residential properties.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Maprotechconstructionllc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://wa.link/eidv05"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <Phone className="w-5 h-5 text-white" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Projects', 'About']?.map?.((item) => (
                <li key={item ?? ''}>
                  <button
                    onClick={() => scrollToSection(`#${item?.toLowerCase?.() ?? ''}`)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {item ?? ''}
                  </button>
                </li>
              )) ?? []}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a href="tel:+13467430784" className="hover:text-white transition-colors">
                  +1 (346) 743-0784
                </a>
              </li>
              <li>Houston, Texas</li>
              <li>Mon - Sat: 7AM - 6PM</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2026 Maprotech Construction LLC. All rights reserved.
            </p>
            <p className="text-white/40 text-sm">
              Building Dreams with Quality Craftsmanship
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
