'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Play } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function VideoSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useI18n();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f5f3f0]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with Play Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-[24px] overflow-hidden"
          >
            <Image
              src="/images/projects/kitchen3.jpg"
              alt="Project showcase"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-[#1a1a1a] ml-1" />
              </button>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] leading-[1.15] tracking-tight">
              {t('video.title')}
            </h2>

            {/* Quote Card */}
            <div className="bg-white rounded-[20px] p-6">
              <p className="text-[#444] text-[14px] leading-relaxed italic mb-4">
                "{t('video.quote')}"
              </p>
              <div className="flex items-center gap-2">
                <span className="text-[#1a1a1a] text-sm font-medium">Carlos R.</span>
                <span className="text-[#ccc]">—</span>
                <span className="text-[#888] text-sm">Houston, TX</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors w-fit"
            >
              {t('hero.cta')}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
