'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ArrowUpRight, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Modern Kitchen Renovation',
    category: 'Kitchen',
    description: 'Complete kitchen transformation with custom cabinetry, quartz countertops, and modern appliances.',
    image: '/images/kitchen-wide.jpg',
    date: 'Jan 2026',
  },
  {
    title: 'Luxury Bathroom Design',
    category: 'Bathroom',
    description: 'Spa-inspired bathroom featuring premium fixtures, custom tilework, and elegant finishes.',
    image: '/images/bathroom.jpg',
    date: 'Dec 2025',
  },
  {
    title: 'Contemporary Kitchen',
    category: 'Kitchen',
    description: 'Sleek contemporary design with state-of-the-art appliances and innovative storage solutions.',
    image: '/images/kitchen-fridge.jpg',
    date: 'Nov 2025',
  },
  {
    title: 'Classic Kitchen Remodel',
    category: 'Kitchen',
    description: 'Timeless kitchen design blending traditional elegance with modern functionality.',
    image: '/images/kitchen.jpg',
    date: 'Oct 2025',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-24 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="accent-line" />
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Projects
              </h2>
              <p className="text-white/60 text-lg max-w-xl">
                Each project is intentional, timeless, and tailored. Showcasing our craftsmanship and innovation in construction.
              </p>
            </div>
            <p className="text-accent font-semibold">
              100+ Projects Completed
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects?.map?.((project, index) => (
            <motion.div
              key={project?.title ?? index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-dark-secondary rounded-2xl overflow-hidden card-hover"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project?.image ?? ''}
                  alt={project?.title ?? 'Project'}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-accent/90 rounded-full text-white text-sm font-medium">
                  {project?.category ?? ''}
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {project?.title ?? ''}
                </h3>
                <p className="text-white/60 text-sm mb-4 line-clamp-2">
                  {project?.description ?? ''}
                </p>
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{project?.date ?? ''}</span>
                </div>
              </div>
            </motion.div>
          )) ?? []}
        </motion.div>

        {/* Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-dark-secondary">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/images/project-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="px-4 py-2 bg-accent rounded-full text-white text-sm font-medium">
                Latest Project
              </span>
              <h3 className="text-2xl font-bold text-white mt-3">Watch Our Work in Action</h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
