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
  const { language, t } = useI18n();

  const navLinks = [
    { name: language === 'en' ? 'About' : 'Nosotros', href: '/about' },
    { name: language === 'en' ? 'Services' : 'Servicios', href: '/#services' },
    { name: language === 'en' ? 'Projects' : 'Proyectos', href: '/#projects' },
    { name: language === 'en' ? 'Gallery' : 'Galería', href: '/#gallery' },
    { name: language === 'en' ? 'Contact' : 'Contacto', href: '/contact' },
  ];

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
            <div className="relative h-12 w-32">
              <Image
                src="/images/logo.png"
                alt="Maprotech Construction LLC"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
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

      {/* Kiwoo Style Info Section */}
      <div className="bg-black py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {/* Left Column - Description & Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-white text-lg md:text-xl font-medium leading-snug mb-4">
                {language === 'en' 
                  ? 'Building spaces with quality, purpose, and lasting excellence.'
                  : 'Construyendo espacios con calidad, propósito y excelencia duradera.'}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {language === 'en'
                  ? 'Creating homes and renovations that balance functionality, emotion, and timeless aesthetics.'
                  : 'Creando hogares y renovaciones que equilibran funcionalidad, emoción y estética atemporal.'}
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/Maprotechconstructionllc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.link/eidv05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Center Column - Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <nav className="space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-white text-lg font-medium hover:text-gray-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* Right Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className="text-white text-lg font-medium mb-4">
                {language === 'en' ? 'Our Office' : 'Nuestra Oficina'}
              </h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Houston, Texas</p>
                <p>Greater Houston Area</p>
                <p className="text-[#25D366] mt-4">
                  {language === 'en' ? 'Mon - Fri: 8:00 AM – 6:00 PM (CST)' : 'Lun - Vie: 8:00 AM – 6:00 PM (CST)'}
                </p>
                <p className="text-gray-500">
                  {language === 'en' ? 'Closed on Public Holidays' : 'Cerrado en Días Festivos'}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Copyright Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2025 Maprotech Construction LLC. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/terms" className="text-[#b8aba2] hover:text-white transition-colors">
                {language === 'en' ? 'Terms of Service' : 'Términos de Servicio'}
              </Link>
              <Link href="/privacy" className="text-[#b8aba2] hover:text-white transition-colors">
                {language === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Large Logo Section */}
      <div className="bg-black py-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-[1400px] mx-auto px-6 lg:px-10"
        >
          <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px]">
            <Image
              src="/images/logo.png"
              alt="Maprotech Construction LLC"
              fill
              className="object-contain opacity-30"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
