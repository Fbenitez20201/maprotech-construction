'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern construction"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 h-full max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col">
        {/* Main Content - Centered */}
        <div className="flex-1 flex flex-col items-center justify-center text-center pt-20">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/20">
              #1 Construction Company
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-8 max-w-4xl"
          >
            Building Dreams
            <br />
            Into Reality
          </motion.h1>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-3.5 bg-white text-dark text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            Get a Quote
          </motion.button>
        </div>

        {/* Bottom Content */}
        <div className="pb-8 flex items-end justify-between">
          {/* Trust Badge - Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white/80 bg-gray-300"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww + 30}.jpg)`,
                    backgroundSize: 'cover',
                  }}
                />
              ))}
            </div>
            <div className="text-white">
              <p className="text-sm font-medium">Trusted by over</p>
              <p className="text-sm font-medium">100+ clients</p>
            </div>
          </motion.div>

          {/* Video Card - Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-2 pr-4 border border-white/20"
          >
            <div className="relative w-20 h-14 rounded-xl overflow-hidden">
              <Image
                src="/images/projects/kitchen2.jpg"
                alt="Project preview"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-3">
              <div>
                <p className="text-white text-sm font-medium">Discover full</p>
                <p className="text-white text-sm font-medium">video</p>
              </div>
              <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Play className="w-3.5 h-3.5 text-white fill-white" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
