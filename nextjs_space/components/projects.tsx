'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: 'Modern Kitchen',
    date: 'Feb 2026',
    image: '/images/projects/kitchen2.jpg',
  },
  {
    title: 'Elegant Bathroom',
    date: 'Jan 2026',
    image: '/images/projects/bathroom.jpg',
  },
  {
    title: 'Contemporary Kitchen',
    date: 'Dec 2025',
    image: '/images/projects/kitchen1.jpg',
  },
  {
    title: 'Classic Design',
    date: 'Nov 2025',
    image: '/images/projects/kitchen3.jpg',
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

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
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
            className="text-[#666] text-[15px] leading-relaxed max-w-sm text-right"
          >
            Each project is a reflection of our construction philosophy—intentional, timeless, and tailored.
          </motion.p>
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-end gap-6 mb-8"
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

        {/* Projects Carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 -mx-6 px-6 lg:-mx-10 lg:px-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
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
          </div>

          {/* Scroll Button */}
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors z-10 hidden lg:flex"
          >
            <ChevronRight className="w-5 h-5 text-[#1a1a1a]" />
          </button>
        </div>
      </div>
    </section>
  );
}
