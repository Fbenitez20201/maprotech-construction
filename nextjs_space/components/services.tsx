'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Paintbrush,
  Home,
  Wrench,
  Grid3X3,
  Palette,
  Fence,
  Building2,
  HardHat,
  Hammer,
} from 'lucide-react';

const services = [
  {
    icon: Paintbrush,
    title: 'Painting',
    description: 'Professional interior and exterior painting with premium finishes.',
    projects: 45,
  },
  {
    icon: Home,
    title: 'Roofing',
    description: 'Complete roofing solutions from repairs to full replacements.',
    projects: 32,
  },
  {
    icon: Building2,
    title: 'Bricklaying',
    description: 'Expert masonry work for walls, patios, and decorative elements.',
    projects: 28,
  },
  {
    icon: Wrench,
    title: 'Plumbing',
    description: 'Full-service plumbing installation, repair, and maintenance.',
    projects: 56,
  },
  {
    icon: Hammer,
    title: 'Carpentry',
    description: 'Custom woodwork, cabinetry, and structural carpentry.',
    projects: 38,
  },
  {
    icon: Grid3X3,
    title: 'Tile Work',
    description: 'Beautiful tile installations for floors, walls, and backsplashes.',
    projects: 67,
  },
  {
    icon: Palette,
    title: 'Remodeling',
    description: 'Complete home renovations that transform your living spaces.',
    projects: 41,
  },
  {
    icon: Fence,
    title: 'Fencing',
    description: 'Quality fencing solutions for privacy, security, and aesthetics.',
    projects: 23,
  },
  {
    icon: HardHat,
    title: 'Concrete Work',
    description: 'Driveways, patios, foundations, and decorative concrete.',
    projects: 34,
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="py-24 bg-cream section-light">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Our Expertise
          </h2>
          <p className="text-dark/60 text-lg max-w-2xl mx-auto">
            Elevating spaces with clarity and timeless aesthetic value. Discover the wide range of construction services we offer.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services?.map?.((service) => {
            const IconComponent = service?.icon;
            return (
              <motion.div
                key={service?.title ?? ''}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-8 card-hover shadow-sm hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                  <span className="text-4xl font-bold text-accent/20">
                    {String(service?.projects ?? 0).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-accent transition-colors">
                  {service?.title ?? ''}
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed">
                  {service?.description ?? ''}
                </p>
                <div className="mt-4 flex items-center text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {service?.projects ?? 0} Projects Completed
                </div>
              </motion.div>
            );
          }) ?? []}
        </motion.div>
      </div>
    </section>
  );
}
