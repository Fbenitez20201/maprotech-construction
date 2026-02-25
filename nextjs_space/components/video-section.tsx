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
    <section ref={ref} className="section bg-cream">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden"
          >
            <video
              src="/images/project-video.mp4"
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-dark ml-1" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-dark text-xs font-medium px-3 py-1.5 rounded-full">
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
            <h2 className="heading-lg text-dark">
              Construction that speaks before you ever say a word
            </h2>

            {/* Quote */}
            <div className="bg-white rounded-2xl p-6">
              <p className="text-gray-600 italic mb-4">
                "The team at MaProTech exceeded all expectations. Their work transformed our home completely."
              </p>
              <div className="flex items-center gap-2">
                <span className="text-dark font-medium">Carlos R.</span>
                <span className="text-gray-400">—</span>
                <span className="text-gray-500 text-sm">Houston, TX</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary w-fit"
            >
              Get a Quote
            </button>
          </motion.div>
        </div>

        {/* Team Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {[
            { text: 'A team that brings clarity to every detail', img: 1 },
            { text: 'Experts who translate vision into space', img: 2 },
            { text: 'Craftsmen dedicated to perfection', img: 3 },
            { text: 'Partners in building your dream', img: 4 },
          ].map((item, index) => (
            <div key={index} className="relative aspect-[3/4] rounded-2xl overflow-hidden group">
              <div
                className="absolute inset-0 bg-gray-200"
                style={{
                  backgroundImage: `url(https://images.pexels.com/photos/15933270/pexels-photo-15933270.jpeg?cs=srgb&dl=pexels-oluwakoreimage-15933270.jpg&fm=jpg + index}.jpg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-sm font-medium">{item.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
