'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useI18n } from '@/lib/i18n';

const services = [
  {
    num: '01',
    title: 'Painting',
    titleEs: 'Pintura',
    subtitle: 'Interior & exterior finishes',
    subtitleEs: 'Acabados interiores y exteriores',
    image: '/images/services/painting.png',
    description: 'Transform your space with our professional painting services. We use premium paints and techniques for flawless, long-lasting finishes on any surface.',
    descriptionEs: 'Transforma tu espacio con nuestros servicios profesionales de pintura. Usamos pinturas y técnicas premium para acabados impecables y duraderos en cualquier superficie.',
    features: ['Interior painting', 'Exterior painting', 'Cabinet refinishing', 'Deck staining', 'Color consultation'],
    featuresEs: ['Pintura interior', 'Pintura exterior', 'Refinado de gabinetes', 'Tinte de terrazas', 'Consulta de colores'],
  },
  {
    num: '02',
    title: 'Roofing',
    titleEs: 'Techos',
    subtitle: 'Durable roof solutions',
    subtitleEs: 'Soluciones de techos duraderos',
    image: '/images/services/roofing.png',
    description: 'Protect your home with our expert roofing services. From repairs to complete replacements, we ensure your roof stands strong against the elements.',
    descriptionEs: 'Protege tu hogar con nuestros servicios expertos de techos. Desde reparaciones hasta reemplazos completos, aseguramos que tu techo resista los elementos.',
    features: ['Roof installation', 'Roof repair', 'Shingle replacement', 'Gutter installation', 'Roof inspection'],
    featuresEs: ['Instalación de techos', 'Reparación de techos', 'Reemplazo de tejas', 'Instalación de canaletas', 'Inspección de techos'],
  },
  {
    num: '03',
    title: 'Tile Work',
    titleEs: 'Azulejos',
    subtitle: 'Precision tile installation',
    subtitleEs: 'Instalación de azulejos de precisión',
    image: '/images/services/tile.png',
    description: 'Elevate your floors, walls, and surfaces with our precision tile installation. From classic ceramics to modern large-format tiles.',
    descriptionEs: 'Eleva tus pisos, paredes y superficies con nuestra instalación de azulejos de precisión. Desde cerámicas clásicas hasta azulejos modernos de gran formato.',
    features: ['Floor tiling', 'Backsplash installation', 'Shower tiling', 'Outdoor tile work', 'Tile repair'],
    featuresEs: ['Azulejos de piso', 'Instalación de backsplash', 'Azulejos de ducha', 'Azulejos exteriores', 'Reparación de azulejos'],
  },
  {
    num: '04',
    title: 'Plumbing',
    titleEs: 'Plomería',
    subtitle: 'Complete plumbing services',
    subtitleEs: 'Servicios completos de plomería',
    image: '/images/services/plumbing.png',
    description: 'Keep your water flowing smoothly with our comprehensive plumbing services. From fixtures to full system installations.',
    descriptionEs: 'Mantén el agua fluyendo sin problemas con nuestros servicios integrales de plomería. Desde accesorios hasta instalaciones completas de sistemas.',
    features: ['Fixture installation', 'Pipe repair', 'Water heater service', 'Drain cleaning', 'Bathroom remodel plumbing'],
    featuresEs: ['Instalación de accesorios', 'Reparación de tuberías', 'Servicio de calentador de agua', 'Limpieza de desagües', 'Plomería de remodelación de baños'],
  },
  {
    num: '05',
    title: 'Remodeling',
    titleEs: 'Remodelación',
    subtitle: 'Full home transformations',
    subtitleEs: 'Transformaciones completas del hogar',
    image: '/images/services/remodeling.png',
    description: 'Reimagine your living space with our complete remodeling services. We handle everything from design to final touches.',
    descriptionEs: 'Reimagina tu espacio habitable con nuestros servicios completos de remodelación. Manejamos todo, desde el diseño hasta los toques finales.',
    features: ['Kitchen remodeling', 'Bathroom renovation', 'Basement finishing', 'Room additions', 'Open concept conversions'],
    featuresEs: ['Remodelación de cocina', 'Renovación de baño', 'Acabado de sótano', 'Adiciones de habitaciones', 'Conversiones de concepto abierto'],
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t, language } = useI18n();

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" ref={ref} className="py-20 lg:py-28 bg-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white mb-4 tracking-tight">
            {t('services.title')}
          </h2>
          <p className="text-[#888] text-[15px] max-w-md">
            {t('services.description')}
          </p>
        </motion.div>

        {/* Services List */}
        <div className="border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="border-b border-white/10"
            >
              {/* Main Row */}
              <div
                onClick={() => toggleExpand(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group py-5 flex items-center gap-6 cursor-pointer transition-colors"
              >
                {/* Number */}
                <span className="text-[#555] text-sm font-medium w-8 flex-shrink-0">
                  {service.num}
                </span>

                {/* Image - appears on hover */}
                <div className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                  hoveredIndex === index || expandedIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                  <Image
                    src={service.image}
                    alt={language === 'es' ? service.titleEs : service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-[#aaa] transition-colors">
                    {language === 'es' ? service.titleEs : service.title}
                  </h3>
                  <p className="text-[#555] text-sm mt-0.5">
                    {language === 'es' ? service.subtitleEs : service.subtitle}
                  </p>
                </div>

                {/* Button */}
                <button className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${
                  expandedIndex === index 
                    ? 'bg-white text-[#1a1a1a] border-white' 
                    : 'border-white/20 text-white/50 group-hover:bg-white group-hover:text-[#1a1a1a] group-hover:border-white'
                }`}>
                  {expandedIndex === index ? (
                    <Minus className="w-4 h-4" strokeWidth={1.5} />
                  ) : (
                    <Plus className="w-4 h-4" strokeWidth={1.5} />
                  )}
                </button>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pl-14 lg:pl-20 pr-4">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Image */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden">
                          <Image
                            src={service.image}
                            alt={language === 'es' ? service.titleEs : service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        {/* Details */}
                        <div className="flex flex-col justify-center">
                          <p className="text-[#aaa] text-[15px] leading-relaxed mb-6">
                            {language === 'es' ? service.descriptionEs : service.description}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {(language === 'es' ? service.featuresEs : service.features).map((feature, i) => (
                              <li key={i} className="text-[#777] text-sm flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/contact"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-[#aaa] transition-colors group/btn"
                          >
                            {t('services.getQuote')}
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
