'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';

const values = [
  {
    number: '01',
    icon: Target,
    title: 'Meticulous Detail',
    description: 'Every project receives our full attention to detail, ensuring flawless execution from start to finish.',
  },
  {
    number: '02',
    icon: Heart,
    title: 'Client Focused',
    description: 'Your vision drives our work. We listen, adapt, and deliver results that exceed expectations.',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We combine traditional craftsmanship with modern techniques for optimal results.',
  },
];

const team = [
  {
    name: 'Juan Cerna',
    role: 'Founder & CEO',
    description: 'With over 15 years of experience in construction, Juan leads our team with passion and expertise.',
  },
  {
    name: 'Yanira Arevalo',
    role: 'Co-founder & Co-owner',
    description: 'Yanira brings creative vision and business acumen to every project we undertake.',
  },
  {
    name: 'Sam Amaya',
    role: 'Project Manager',
    description: 'Sam ensures smooth project execution and maintains our high standards of communication.',
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 bg-cream section-light">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="accent-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Design That Speaks
          </h2>
          <p className="text-dark/60 text-lg max-w-2xl mx-auto">
            From quiet corners to bold statements — construction that connects. We transform ideas into beautiful, livable realities.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-3 gap-8 mb-24"
        >
          {values?.map?.((value, index) => {
            const IconComponent = value?.icon;
            return (
              <motion.div
                key={value?.title ?? index}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative bg-white rounded-2xl p-8 shadow-sm card-hover"
              >
                <span className="absolute top-6 right-6 text-6xl font-bold text-accent/10">
                  {value?.number ?? ''}
                </span>
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-accent" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">
                  {value?.title ?? ''}
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed">
                  {value?.description ?? ''}
                </p>
              </motion.div>
            );
          }) ?? []}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="accent-line mx-auto" />
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-4">
            Meet the Team
          </h2>
          <p className="text-dark/60 text-lg max-w-2xl mx-auto">
            Exceptional construction is a team effort. Meet the people behind the process.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team?.map?.((member, index) => (
            <motion.div
              key={member?.name ?? index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm card-hover"
            >
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-1">
                {member?.name ?? ''}
              </h3>
              <p className="text-accent font-medium text-sm mb-4">
                {member?.role ?? ''}
              </p>
              <p className="text-dark/60 text-sm">
                {member?.description ?? ''}
              </p>
            </motion.div>
          )) ?? []}
        </div>
      </div>
    </section>
  );
}
