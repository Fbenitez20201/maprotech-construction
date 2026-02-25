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
    <section ref={ref} className="section bg-white">
      <div className="container">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="heading-lg text-dark mb-12 max-w-2xl"
        >
          Don't just listen to us—see what our clients have to say.
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden ${
                index === activeIndex ? 'bg-dark' : 'bg-gray-50'
              } transition-colors duration-300`}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {index === activeIndex ? (
                /* Active Card with Image */
                <div className="relative h-full min-h-[400px]">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${testimonial.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ) : (
                /* Inactive Card with Quote */
                <div className="p-6 flex flex-col justify-between h-full min-h-[400px]">
                  <div>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <div
                      className="w-10 h-10 rounded-full bg-gray-200"
                      style={{
                        backgroundImage: `url(${testimonial.image})`,
                        backgroundSize: 'cover',
                      }}
                    />
                    <div>
                      <p className="text-sm font-medium text-dark">{testimonial.author}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
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
