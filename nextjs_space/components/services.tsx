'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Plus } from 'lucide-react';

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
    image: '/images/projects/kitchen1.jpg',
  },
  {
    num: '03',
    title: 'Tile Work',
    subtitle: 'Precision tile installation',
    image: '/images/projects/bathroom.jpg',
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

  return (
    <section id="services" ref={ref} className="py-20 bg-dark">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="heading-lg text-white mb-4">Our expertise</h2>
          <p className="text-gray-400 max-w-md">
            Comprehensive construction services tailored to bring your vision to life.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="divide-y divide-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group py-6 flex items-center gap-6 cursor-pointer hover:bg-white/5 -mx-4 px-4 rounded-xl transition-colors"
            >
              {/* Number */}
              <span className="text-gray-500 text-sm font-medium w-8">
                {service.num}
              </span>

              {/* Image */}
              <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-medium text-white group-hover:text-gray-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{service.subtitle}</p>
              </div>

              {/* Button */}
              <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-dark transition-all">
                <Plus className="w-5 h-5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
