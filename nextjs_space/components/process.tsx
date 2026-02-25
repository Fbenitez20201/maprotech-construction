'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, ClipboardList, Hammer, CheckCircle } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useI18n();

  const steps = [
    {
      num: '01',
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
      icon: Phone,
    },
    {
      num: '02',
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
      icon: ClipboardList,
    },
    {
      num: '03',
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
      icon: Hammer,
    },
    {
      num: '04',
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
      icon: CheckCircle,
    },
  ];

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f5f3f0]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-[#666] mb-4">
            {t('process.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] tracking-tight mb-4">
            {t('process.title')}
          </h2>
          <p className="text-[#666] text-[15px] max-w-lg mx-auto">
            {t('process.description')}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-[24px] p-8 relative group hover:shadow-lg transition-shadow"
            >
              {/* Step number */}
              <span className="text-[80px] font-bold text-[#f5f3f0] absolute top-4 right-4 leading-none select-none">
                {step.num}
              </span>
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-6 relative z-10">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-[#666] text-[15px] leading-relaxed relative z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
