'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function VideoSection() {
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with Play Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-[24px] overflow-hidden"
          >
            <Image
              src="/images/projects/kitchen3.jpg"
              alt="Project showcase"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-[#1a1a1a] ml-1" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-[#1a1a1a] text-xs font-medium px-3 py-1.5 rounded-full">
                Discover full video
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] leading-[1.15] tracking-tight">
              Construction that speaks before you ever say a word
            </h2>

            {/* Quote Card */}
            <div className="bg-white rounded-[20px] p-6">
              <p className="text-[#444] text-[14px] leading-relaxed italic mb-4">
                "The team at MaProTech exceeded all expectations. Their work transformed our home completely."
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[#1a1a1a] text-sm font-medium">Carlos R.</span>
                <span className="text-[#ccc]">—</span>
                <span className="text-[#888] text-sm">Houston, TX</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors w-fit"
            >
              Get a Quote
            </button>
          </motion.div>
        </div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-16"
        >
          {[
            { text: 'A team that brings clarity to every detail' },
            { text: 'Experts who translate vision into space' },
            { text: 'Craftsmen dedicated to perfection' },
            { text: 'Partners in building your dream' },
          ].map((item, index) => (
            <div key={index} className="relative aspect-[3/4] rounded-[20px] overflow-hidden group">
              <div
                className="absolute inset-0 bg-gray-200 transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww + index}.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium leading-snug">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
