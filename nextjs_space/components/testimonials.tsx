'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const testimonials = [
  {
    quote: 'Their work brought our entire home to life—subtle, thoughtful, and timeless. Every element felt carefully crafted, both visually and functionally.',
    quoteEs: 'Su trabajo dio vida a toda nuestra casa: sutil, reflexivo y atemporal. Cada elemento se sintió cuidadosamente elaborado, tanto visual como funcionalmente.',
    author: 'Maria G.',
    role: 'Homeowner',
    roleEs: 'Propietaria',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5,
  },
  {
    quote: 'The team captured our vision better than we imagined. From initial consultation to final touches, everything felt clear, smooth, and perfectly executed.',
    quoteEs: 'El equipo capturó nuestra visión mejor de lo que imaginábamos. Desde la consulta inicial hasta los toques finales, todo se sintió claro, fluido y perfectamente ejecutado.',
    author: 'Robert K.',
    role: 'Business Owner',
    roleEs: 'Empresario',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
  },
  {
    quote: 'We felt heard and understood at every step. Their construction choices were not just impressive—they told our story in ways we never could with words.',
    quoteEs: 'Nos sentimos escuchados y comprendidos en cada paso. Sus elecciones de construcción no solo fueron impresionantes, contaron nuestra historia de maneras que nunca pudimos con palabras.',
    author: 'Jennifer L.',
    role: 'Property Manager',
    roleEs: 'Administradora de Propiedades',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
  },
  {
    quote: 'Professional, punctual, and precise. MaProTech delivered beyond our expectations. Highly recommend their services to anyone looking for quality work.',
    quoteEs: 'Profesionales, puntuales y precisos. MaProTech superó nuestras expectativas. Recomiendo altamente sus servicios a cualquiera que busque trabajo de calidad.',
    author: 'David M.',
    role: 'Restaurant Owner',
    roleEs: 'Dueño de Restaurante',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t, language } = useI18n();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] mb-12 tracking-tight max-w-2xl"
        >
          {t('testimonials.title1')}<span className="text-[#b8b5b0]">{t('testimonials.title2')}</span>
        </motion.h2>

        {/* Testimonials Grid - No hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#f5f3f0] rounded-[20px] p-5 flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#e8c547] text-[#e8c547]" />
                  ))}
                </div>
                <p className="text-[#444] text-[13px] leading-relaxed">
                  {language === 'es' ? testimonial.quoteEs : testimonial.quote}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <div
                  className="w-9 h-9 rounded-full bg-gray-200"
                  style={{
                    backgroundImage: `url(${testimonial.image})`,
                    backgroundSize: 'cover',
                  }}
                />
                <div>
                  <p className="text-[13px] font-medium text-[#1a1a1a]">{testimonial.author}</p>
                  <p className="text-[11px] text-[#888]">{language === 'es' ? testimonial.roleEs : testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
