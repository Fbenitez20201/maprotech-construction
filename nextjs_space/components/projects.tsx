'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Modern Kitchen',
    date: 'Feb 2026',
    image: '/images/projects/kitchen2.jpg',
    category: 'Remodeling',
  },
  {
    title: 'Elegant Bathroom',
    date: 'Jan 2026',
    image: '/images/projects/bathroom.jpg',
    category: 'Tile Work',
  },
  {
    title: 'Contemporary Kitchen',
    date: 'Dec 2025',
    image: '/images/projects/kitchen1.jpg',
    category: 'Renovation',
  },
  {
    title: 'Classic Kitchen Design',
    date: 'Nov 2025',
    image: '/images/projects/kitchen3.jpg',
    category: 'Remodeling',
  },
];

const clientLogos = [
  'Quality First',
  'HomeStyle',
  'Premier Build',
  'Urban Living',
  'Modern Spaces',
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" ref={ref} className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="heading-lg text-dark"
          >
            Our projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body max-w-md"
          >
            Each project is a reflection of our construction philosophy—intentional, durable, and tailored.
          </motion.p>
        </div>

        {/* Client Logos Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-8 mb-12 overflow-x-auto pb-4 scroll-container"
        >
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <span
              key={index}
              className="text-gray-400 font-medium whitespace-nowrap text-sm"
            >
              {logo}
            </span>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 img-hover-zoom">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-dark text-xs font-medium px-3 py-1.5 rounded-full">
                    {project.date}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-dark" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-dark">{project.title}</h3>
                <span className="text-gray-400 text-sm">{project.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
