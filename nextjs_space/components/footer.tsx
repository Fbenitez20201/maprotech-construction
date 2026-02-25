'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { Plus } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useI18n();

  return (
    <footer ref={ref}>
      {/* Large CTA Section */}
      <div className="relative min-h-[70vh] flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/footer-bg.jpg"
            alt="Luxurious interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex-1 flex flex-col max-w-[1400px] mx-auto px-6 lg:px-10 w-full py-12">
          {/* Top Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between mb-auto"
          >
            <span className="text-xl font-medium text-white">Maprotech</span>
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center">
              <Plus className="w-4 h-4 text-white/60" />
            </div>
          </motion.div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center my-auto py-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">
              {t('footer.tagline')}
            </h2>
            <p className="text-white/60 text-[15px] max-w-md mx-auto mb-8">
              {t('footer.description')}
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 bg-white text-dark text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              {t('hero.cta')}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1a1a1a] py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="text-white font-medium">Maprotech</span>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Maprotech Construction LLC. {t('footer.rights')}.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.facebook.com/Maprotechconstructionllc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="https://wa.link/eidv05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
