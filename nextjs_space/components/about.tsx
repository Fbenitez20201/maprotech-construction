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
    <section id="about" ref={ref} className="py-20 lg:py-28 bg-[#f5f3f0]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] tracking-tight leading-[1.15]"
          >
            Meet the people behind<br />the process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#666] text-[15px] leading-relaxed max-w-sm"
          >
            Exceptional construction is a team effort. We collaborate closely to bring thoughtful results that not only meet but exceed your expectations.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden mb-4">
                <div
                  className="absolute inset-0 bg-gray-200 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
              <h3 className="text-[#1a1a1a] font-medium text-base">{member.name}</h3>
              <p className="text-[#888] text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 bg-white rounded-[20px]"
        >
          <div>
            <h3 className="text-[#1a1a1a] font-medium text-lg mb-1">Join us in building better spaces</h3>
            <p className="text-[#888] text-[14px]">Ready to build something meaningful together? Let's connect and turn ideas into impactful construction.</p>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors whitespace-nowrap w-fit"
          >
            Join us now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
