'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: 'Their work brought our entire home to life—subtle, thoughtful, and timeless. Every element felt carefully crafted, both visually and functionally.',
    author: 'Maria G.',
    role: 'Homeowner',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    rating: 5,
  },
  {
    quote: 'The team captured our vision better than we imagined. From initial consultation to final touches, everything felt clear, smooth, and perfectly executed.',
    author: 'Robert K.',
    role: 'Business Owner',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 5,
  },
  {
    quote: 'We felt heard and understood at every step. Their construction choices were not just impressive—they told our story in ways we never could with words.',
    author: 'Jennifer L.',
    role: 'Property Manager',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
  },
  {
    quote: 'Professional, punctual, and precise. MaProTech delivered beyond our expectations. Highly recommend their services to anyone looking for quality work.',
    author: 'David M.',
    role: 'Restaurant Owner',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    rating: 5,
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] mb-12 tracking-tight max-w-2xl"
        >
          Don't just listen to us—<span className="text-[#b8b5b0]">see what our clients have to say.</span>
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-[20px] overflow-hidden cursor-pointer transition-all duration-300 ${
                index === activeIndex ? 'bg-[#1a1a1a]' : 'bg-[#f5f3f0]'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {index === activeIndex ? (
                /* Active Card with Image */
                <div className="relative h-full min-h-[380px]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${testimonial.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-medium text-sm">{testimonial.author}</p>
                    <p className="text-white/60 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              ) : (
                /* Inactive Card with Quote */
                <div className="p-5 flex flex-col justify-between h-full min-h-[380px]">
                  <div>
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#e8c547] text-[#e8c547]" />
                      ))}
                    </div>
                    <p className="text-[#444] text-[13px] leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <div
                      className="w-9 h-9 rounded-full bg-gray-200"
                      style={{
                        backgroundImage: `url(${testimonial.image})`,
                        backgroundSize: 'cover',
                      }}
                    />
                    <div>
                      <p className="text-[13px] font-medium text-[#1a1a1a]">{testimonial.author}</p>
                      <p className="text-[11px] text-[#888]">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
