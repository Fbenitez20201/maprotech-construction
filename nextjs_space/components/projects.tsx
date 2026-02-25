'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

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
    image: '/images/features/bathroom_reno.png',
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
  const [carouselWidth, setCarouselWidth] = useState(0);

  useEffect(() => {
    // Calculate total carousel width needed
    const cardWidth = 500; // lg:w-[500px]
    const gap = 16; // gap-4
    const totalWidth = projects.length * (cardWidth + gap) - gap;
    const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1400;
    setCarouselWidth(Math.max(0, totalWidth - viewportWidth + 100));
  }, []);

  // Scroll progress for the pinned section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Transform scroll progress to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -carouselWidth]);

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="relative bg-white"
      style={{ height: `${150 + (carouselWidth / 3)}vh` }} // Dynamic height for scroll pinning
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center py-10">
        <div ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
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

        {/* Projects Carousel with scroll-linked horizontal movement */}
        <div className="overflow-hidden">
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
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[#888] text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <span>Scroll to explore</span>
          <ChevronRight className="w-4 h-4 animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
