'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const stats = [
  { value: 15, suffix: '%', label: 'Ad impressions managed' },
  { value: 27, suffix: '+', label: 'Successful projects launched' },
  { value: 15, suffix: '%', label: 'Client satisfaction rate' },
  { value: 50, suffix: 'k+', label: 'Monthly website driven through SEO' },
];

function CountUp({ end, suffix, inView }: { end: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-left"
            >
              <p className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] mb-2 tracking-tight">
                <CountUp end={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="text-[#888] text-[13px]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
