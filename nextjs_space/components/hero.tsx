'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

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
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 lg:px-8 flex flex-col justify-end pb-16 md:pb-24">
        {/* Bottom Content */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Left - Trust Badge + CTA */}
          <div className="flex flex-col gap-6">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                    style={{
                      backgroundImage: `url(https://images.pexels.com/photos/18159419/pexels-photo-18159419/free-photo-of-portrait-of-a-man-looking-through-a-round-hole.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1 + 30}.jpg)`,
                      backgroundSize: 'cover',
                    }}
                  />
                ))}
              </div>
              <span className="text-white text-sm font-medium">
                Trusted by over 100+ clients
              </span>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => scrollToSection('#contact')}
              className="btn-primary w-fit"
            >
              Get a Quote
            </motion.button>
          </div>

          {/* Right - Video Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="hidden md:flex items-center gap-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 max-w-xs"
          >
            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
              <video
                src="/images/project-video.mp4"
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                autoPlay
              />
            </div>
            <div className="flex-1">
              <p className="text-dark text-sm font-medium">Discover full video</p>
              <p className="text-gray-500 text-xs mt-1">See our latest projects</p>
            </div>
            <div className="w-10 h-6 bg-dark rounded-full flex items-center justify-end px-1">
              <div className="w-4 h-4 bg-white rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
