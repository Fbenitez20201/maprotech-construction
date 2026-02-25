'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function BentoGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f5f3f0]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] leading-[1.15] tracking-tight"
          >
            From quiet corners to bold statements — <span className="text-[#b8b5b0]">construction that connects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-end gap-5"
          >
            <p className="text-[#666] text-[15px] leading-relaxed max-w-sm">
              With a seamless process and attention to detail, we turn ideas into beautiful, livable realities.
            </p>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors w-fit"
            >
              Get a Quote
            </button>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Row 1 */}
          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[20px] p-5 flex flex-col justify-between min-h-[260px]"
          >
            <div>
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#e8c547] text-[#e8c547]" />
                ))}
              </div>
              <p className="text-[#444] text-[13px] leading-relaxed">
                We needed a full rebranding, and this agency delivered beyond our expectations. From the new logo to the website design, everything feels cohesive and professional.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <div
                className="w-9 h-9 rounded-full bg-gray-200"
                style={{
                  backgroundImage: 'url(https://randomuser.me/api/portraits/women/44.jpg)',
                  backgroundSize: 'cover',
                }}
              />
              <div>
                <p className="text-[13px] font-medium text-[#1a1a1a]">Lena M</p>
                <p className="text-[11px] text-[#888]">Retreat Owner</p>
              </div>
            </div>
          </motion.div>

          {/* Image Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative rounded-[20px] overflow-hidden min-h-[260px]"
          >
            <Image
              src="/images/projects/kitchen2.jpg"
              alt="Modern interior"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Feature Card 01 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-[20px] p-5 flex flex-col justify-between min-h-[260px]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[#ccc] text-xs">01</span>
              <div className="w-5 h-5 text-[#ccc]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-[#1a1a1a] font-medium text-base mb-2">Meticulous detail</h4>
              <p className="text-[#888] text-[12px] leading-relaxed">
                We've delivered 50+ projects that help companies generate real results.
              </p>
            </div>
          </motion.div>

          {/* Image Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative rounded-[20px] overflow-hidden min-h-[260px]"
          >
            <Image
              src="/images/projects/bathroom.jpg"
              alt="Elegant bathroom"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Row 2 */}
          {/* Feature Card 02 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-[20px] p-5 flex flex-col justify-between min-h-[260px]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[#ccc] text-xs">02</span>
              <div className="w-5 h-5 text-[#ccc]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-[#1a1a1a] font-medium text-base mb-2">Sustainable by Nature</h4>
              <p className="text-[#888] text-[12px] leading-relaxed">
                We've delivered 50+ projects that help companies generate real results.
              </p>
            </div>
          </motion.div>

          {/* Image Card 3 - Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="relative rounded-[20px] overflow-hidden min-h-[260px] md:col-span-2"
          >
            <Image
              src="/images/projects/kitchen1.jpg"
              alt="Kitchen project"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Feature Card 03 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white rounded-[20px] p-5 flex flex-col justify-between min-h-[260px]"
          >
            <div className="flex items-center justify-between">
              <span className="text-[#ccc] text-xs">03</span>
              <div className="w-5 h-5 text-[#ccc]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
            </div>
            <div>
              <h4 className="text-[#1a1a1a] font-medium text-base mb-2">Beauty with purpose</h4>
              <p className="text-[#888] text-[12px] leading-relaxed">
                We've delivered 50+ projects that help companies generate real results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
