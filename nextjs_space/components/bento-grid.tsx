'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Star, Shield, Leaf, Sparkles } from 'lucide-react';

const features = [
  {
    num: '01',
    title: 'Meticulous Detail',
    desc: 'Every project crafted with precision',
    icon: Shield,
  },
  {
    num: '02',
    title: 'Quality Materials',
    desc: 'Only the finest materials used',
    icon: Leaf,
  },
  {
    num: '03',
    title: 'Expert Craftsmanship',
    desc: 'Skilled professionals at work',
    icon: Sparkles,
  },
];

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
    <section ref={ref} className="section bg-cream">
      <div className="container">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="heading-xl text-dark"
          >
            From quiet corners to bold statements — construction that connects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-end gap-6"
          >
            <p className="text-body max-w-md">
              With MaProTech Construction, you can trust that your ideas will be transformed into reality. We bring expertise, dedication, and craftsmanship to every project.
            </p>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary w-fit"
            >
              Get a Quote
            </button>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 flex flex-col justify-between min-h-[280px]"
          >
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              "MaProTech transformed our outdated kitchen into a modern masterpiece. The attention to detail was incredible."
            </p>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full bg-gray-200"
                style={{
                  backgroundImage: 'url(https://randomuser.me/api/portraits/women/44.jpg)',
                  backgroundSize: 'cover',
                }}
              />
              <div>
                <p className="text-sm font-medium text-dark">Sarah M.</p>
                <p className="text-xs text-gray-500">Homeowner</p>
              </div>
            </div>
          </motion.div>

          {/* Image Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden min-h-[280px]"
          >
            <Image
              src="/images/projects/kitchen2.jpg"
              alt="Kitchen project"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {features.map((feature, index) => (
              <div
                key={feature.num}
                className="bg-white rounded-3xl p-5 flex flex-col justify-between min-h-[140px] lg:min-h-[280px]"
              >
                <span className="text-gray-300 text-sm font-medium">{feature.num}</span>
                <div>
                  <h4 className="text-dark font-medium mb-1">{feature.title}</h4>
                  <p className="text-gray-500 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Image Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-3xl overflow-hidden min-h-[280px] md:col-span-2 lg:col-span-2"
          >
            <Image
              src="/images/projects/bathroom.jpg"
              alt="Bathroom project"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Image Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative rounded-3xl overflow-hidden min-h-[280px] md:col-span-2 lg:col-span-2"
          >
            <Image
              src="/images/projects/kitchen1.jpg"
              alt="Kitchen project"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
