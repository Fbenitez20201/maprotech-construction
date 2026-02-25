'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const team = [
  {
    name: 'Juan Cerna',
    role: 'Founder & Lead Contractor',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Yanira Arevalo',
    role: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Sam Amaya',
    role: 'Senior Craftsman',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="section bg-gray-50">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="heading-lg text-dark"
          >
            Meet the people behind<br />the process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body max-w-md"
          >
            Exceptional construction is a team effort. We collaborate closely to bring thoughtful results that not only meet but exceed your expectations.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-4">
                <div
                  className="absolute inset-0 bg-gray-200 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-lg font-medium text-dark">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 bg-white rounded-3xl"
        >
          <div>
            <h3 className="text-xl font-medium text-dark mb-2">Join us in building better spaces</h3>
            <p className="text-gray-500">Ready to build something meaningful together? Let's connect and turn ideas into impactful construction.</p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary whitespace-nowrap"
          >
            Join us now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
