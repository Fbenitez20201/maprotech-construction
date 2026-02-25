'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    num: '01',
    title: 'Painting',
    subtitle: 'Interior & exterior finishes',
    image: '/images/services/painting.png',
    description: 'Transform your space with our professional painting services. We use premium paints and techniques for flawless, long-lasting finishes on any surface.',
    features: ['Interior painting', 'Exterior painting', 'Cabinet refinishing', 'Deck staining', 'Color consultation'],
  },
  {
    num: '02',
    title: 'Roofing',
    subtitle: 'Durable roof solutions',
    image: '/images/services/roofing.png',
    description: 'Protect your home with our expert roofing services. From repairs to complete replacements, we ensure your roof stands strong against the elements.',
    features: ['Roof installation', 'Roof repair', 'Shingle replacement', 'Gutter installation', 'Roof inspection'],
  },
  {
    num: '03',
    title: 'Tile Work',
    subtitle: 'Precision tile installation',
    image: '/images/services/tile.png',
    description: 'Elevate your floors, walls, and surfaces with our precision tile installation. From classic ceramics to modern large-format tiles.',
    features: ['Floor tiling', 'Backsplash installation', 'Shower tiling', 'Outdoor tile work', 'Tile repair'],
  },
  {
    num: '04',
    title: 'Plumbing',
    subtitle: 'Complete plumbing services',
    image: '/images/services/plumbing.png',
    description: 'Keep your water flowing smoothly with our comprehensive plumbing services. From fixtures to full system installations.',
    features: ['Fixture installation', 'Pipe repair', 'Water heater service', 'Drain cleaning', 'Bathroom remodel plumbing'],
  },
  {
    num: '05',
    title: 'Remodeling',
    subtitle: 'Full home transformations',
    image: '/images/services/remodeling.png',
    description: 'Reimagine your living space with our complete remodeling services. We handle everything from design to final touches.',
    features: ['Kitchen remodeling', 'Bathroom renovation', 'Basement finishing', 'Room additions', 'Open concept conversions'],
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
            Our expertise
          </h2>
          <p className="text-[#888] text-[15px] max-w-md">
            Comprehensive construction services tailored to bring your vision to life.
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
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-[#aaa] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#555] text-sm mt-0.5">{service.subtitle}</p>
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
                            alt={service.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        
                        {/* Details */}
                        <div className="flex flex-col justify-center">
                          <p className="text-[#aaa] text-[15px] leading-relaxed mb-6">
                            {service.description}
                          </p>
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, i) => (
                              <li key={i} className="text-[#777] text-sm flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollToContact();
                            }}
                            className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-[#aaa] transition-colors group/btn"
                          >
                            Get a Quote
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
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
