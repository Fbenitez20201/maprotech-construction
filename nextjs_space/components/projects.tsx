'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: 'Modern Kitchen',
    date: 'Feb 2026',
    image: '/images/projects/kitchen2.jpg',
    category: 'Kitchen',
  },
  {
    title: 'Elegant Bathroom',
    date: 'Jan 2026',
    image: '/images/projects/bathroom.jpg',
    category: 'Bathroom',
  },
  {
    title: 'Contemporary Kitchen',
    date: 'Dec 2025',
    image: '/images/projects/kitchen1.jpg',
    category: 'Kitchen',
  },
  {
    title: 'Classic Design',
    date: 'Nov 2025',
    image: '/images/projects/kitchen3.jpg',
    category: 'Remodeling',
  },
  {
    title: 'Luxury Bathroom',
    date: 'Oct 2025',
    image: '/images/services/tile.png',
    category: 'Bathroom',
  },
  {
    title: 'Modern Remodel',
    date: 'Sep 2025',
    image: '/images/services/remodeling.png',
    category: 'Remodeling',
  },
];

const clientLogos = [
  '45 Degrees',
  'Cooperative',
  'CoreOS',
  'Frequencii',
  'LaunchSimple',
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Scroll-based horizontal movement
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Transform scroll progress to horizontal movement (moves left as you scroll down)
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] tracking-tight"
          >
            Our projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#666] text-[15px] leading-relaxed max-w-sm lg:text-right"
          >
            Each project is a reflection of our construction philosophy—intentional, timeless, and tailored.
          </motion.p>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center lg:justify-end gap-4 lg:gap-6 mb-8"
        >
          {clientLogos.map((logo, index) => (
            <span
              key={index}
              className="text-[#888] text-[13px] font-medium flex items-center gap-1.5"
            >
              <span className="w-4 h-4 rounded-full bg-[#eee]" />
              {logo}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Projects Carousel with scroll animation */}
      <div className="relative">
        <motion.div
          style={{ x }}
          className="flex gap-4 pl-6 lg:pl-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="flex-shrink-0 w-[280px] md:w-[400px] lg:w-[500px] group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Category tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[#1a1a1a] text-xs font-medium px-3 py-1.5 rounded-full">
                    {project.category}
                  </span>
                </div>
                {/* Arrow button on hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ChevronRight className="w-5 h-5 text-[#1a1a1a]" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[#888] text-[13px]">{project.date}</span>
                <h3 className="text-[#1a1a1a] font-medium text-base">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-4 lg:right-10 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10 hidden lg:flex"
        >
          <ChevronRight className="w-5 h-5 text-[#1a1a1a]" />
        </button>
      </div>
    </section>
  );
}
