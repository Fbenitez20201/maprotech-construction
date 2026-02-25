'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Maprotech transformed our outdated kitchen into a stunning modern space. Their attention to detail and professionalism exceeded our expectations.",
    author: 'Maria Rodriguez',
    role: 'Homeowner, Houston',
    rating: 5,
  },
  {
    quote: "The team was incredibly responsive and delivered our bathroom renovation on time and within budget. Highly recommend their services!",
    author: 'James Wilson',
    role: 'Property Owner',
    rating: 5,
  },
  {
    quote: "From the initial consultation to the final walkthrough, the experience was seamless. They truly care about customer satisfaction.",
    author: 'Sarah Chen',
    role: 'Homeowner, Texas',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-dark-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="accent-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Stories
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Don&apos;t just listen to us—see what our partners have to say about working with Maprotech.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials?.map?.((testimonial, index) => (
            <motion.div
              key={testimonial?.author ?? index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass rounded-2xl p-8 card-hover"
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-accent mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial?.rating ?? 5 })?.map?.((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                )) ?? []}
              </div>

              {/* Quote Text */}
              <p className="text-white/80 mb-6 leading-relaxed">
                &quot;{testimonial?.quote ?? ''}&quot;
              </p>

              {/* Author */}
              <div>
                <p className="text-white font-semibold">{testimonial?.author ?? ''}</p>
                <p className="text-white/50 text-sm">{testimonial?.role ?? ''}</p>
              </div>
            </motion.div>
          )) ?? []}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-accent/10 rounded-2xl p-8"
        >
          <StatItem number="100+" label="Projects Completed" />
          <StatItem number="98%" label="Client Satisfaction" />
          <StatItem number="10+" label="Years Experience" />
          <StatItem number="50+" label="Happy Families" />
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: 'spring' }}
        className="text-3xl md:text-4xl font-bold text-accent mb-2"
      >
        {number ?? ''}
      </motion.div>
      <p className="text-white/60 text-sm">{label ?? ''}</p>
    </div>
  );
}
