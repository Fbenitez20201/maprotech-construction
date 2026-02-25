'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, Award, Users, DollarSign, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n';

const reasons = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    titleEs: 'Licenciados y Asegurados',
    description: 'Fully licensed and insured for your peace of mind.',
    descriptionEs: 'Completamente licenciados y asegurados para tu tranquilidad.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    titleEs: 'Entrega a Tiempo',
    description: 'We respect your time and stick to our deadlines.',
    descriptionEs: 'Respetamos tu tiempo y cumplimos con nuestros plazos.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    titleEs: 'Calidad Garantizada',
    description: 'Premium materials and expert craftsmanship on every project.',
    descriptionEs: 'Materiales premium y artesanía experta en cada proyecto.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    titleEs: 'Equipo Experimentado',
    description: '15+ years of combined experience in construction.',
    descriptionEs: 'Más de 15 años de experiencia combinada en construcción.',
  },
  {
    icon: DollarSign,
    title: 'Fair Pricing',
    titleEs: 'Precios Justos',
    description: 'Competitive rates with transparent, upfront quotes.',
    descriptionEs: 'Tarifas competitivas con cotizaciones transparentes y directas.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer First',
    titleEs: 'Cliente Primero',
    description: 'Your satisfaction is our top priority, always.',
    descriptionEs: 'Tu satisfacción es nuestra máxima prioridad, siempre.',
  },
];

export default function WhyUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t, language } = useI18n();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden">
              <Image
                src="/images/services/painting.png"
                alt="Professional construction work"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 bg-[#1a1a1a] text-white p-6 rounded-2xl shadow-xl"
            >
              <p className="text-4xl font-bold mb-1">15+</p>
              <p className="text-white/70 text-sm">{t('whyus.years')}</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-[#f5f3f0] rounded-full text-sm font-medium text-[#666] mb-4">
                {t('whyus.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] tracking-tight mb-4">
                {t('whyus.title')}
              </h2>
              <p className="text-[#666] text-[15px] leading-relaxed mb-8">
                {t('whyus.description')}
              </p>
            </motion.div>

            {/* Reasons grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#f5f3f0] flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-5 h-5 text-[#1a1a1a]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1a1a1a] mb-1">
                      {language === 'es' ? reason.titleEs : reason.title}
                    </h3>
                    <p className="text-[#666] text-sm">
                      {language === 'es' ? reason.descriptionEs : reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
