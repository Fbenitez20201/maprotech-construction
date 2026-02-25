'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Award, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToContact = () => {
    document?.querySelector?.('#contact')?.scrollIntoView?.({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document?.querySelector?.('#projects')?.scrollIntoView?.({ behavior: 'smooth' });
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark z-10" />
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern construction and architecture"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 max-w-[1200px] mx-auto px-6 pt-32 pb-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <Award className="w-5 h-5 text-accent" />
              <span className="text-white/60 text-sm tracking-wider uppercase">
                Trusted by 100+ Homeowners
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-gradient">Building</span>
              <br />
              <span className="text-white">Your Dreams</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/60 text-lg md:text-xl mb-8 max-w-lg"
            >
              Transform your vision into reality with expert craftsmanship. From kitchens to complete renovations, we bring precision and excellence to every project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <button onClick={scrollToContact} className="btn-primary flex items-center justify-center gap-2">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/10 transition-all"
              >
                View Our Work
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              {[
                'Licensed & Insured',
                'Quality Craftsmanship',
                'Free Estimates',
              ]?.map?.((item) => (
                <div key={item ?? ''} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="text-white/70 text-sm">{item ?? ''}</span>
                </div>
              )) ?? []}
            </motion.div>
          </div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <StatCard number="100+" label="Projects Completed" />
                <StatCard number="10+" label="Years Experience" />
                <StatCard number="98%" label="Client Satisfaction" />
                <StatCard number="24/7" label="Support Available" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-4">
      <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{number ?? ''}</div>
      <div className="text-white/60 text-sm">{label ?? ''}</div>
    </div>
  );
}
