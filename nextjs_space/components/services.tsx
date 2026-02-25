'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    num: '01',
    title: 'Painting',
    subtitle: 'Interior & exterior finishes',
    image: '/images/projects/kitchen2.jpg',
  },
  {
    num: '02',
    title: 'Roofing',
    subtitle: 'Durable roof solutions',
    image: '/images/projects/bathroom.jpg',
  },
  {
    num: '03',
    title: 'Tile Work',
    subtitle: 'Precision tile installation',
    image: '/images/projects/kitchen1.jpg',
  },
  {
    num: '04',
    title: 'Plumbing',
    subtitle: 'Complete plumbing services',
    image: '/images/projects/kitchen3.jpg',
  },
  {
    num: '05',
    title: 'Remodeling',
    subtitle: 'Full home transformations',
    image: '/images/projects/kitchen2.jpg',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group py-5 flex items-center gap-6 cursor-pointer border-b border-white/10 transition-colors"
            >
              {/* Number */}
              <span className="text-[#555] text-sm font-medium w-8 flex-shrink-0">
                {service.num}
              </span>

              {/* Image - appears on hover */}
              <div className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 ${
                hoveredIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
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
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-[#1a1a1a] group-hover:border-white transition-all flex-shrink-0">
                <Plus className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
