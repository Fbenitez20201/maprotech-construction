'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Star, Plus } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import Link from 'next/link';

export default function BentoGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useI18n();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#f5f3f0]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] leading-[1.15] tracking-tight"
          >
            {t('bento.heading1')} <span className="text-[#b8b5b0]">{t('bento.heading2')}</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-end gap-5"
          >
            <p className="text-[#666] text-[15px] leading-relaxed max-w-sm">
              {t('bento.description')}
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors w-fit"
            >
              {t('hero.cta')}
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Row 1 */}
          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[20px] p-5 flex flex-col justify-between min-h-[260px]"
          >
            <div>
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#e8c547] text-[#e8c547]" />
                ))}
              </div>
              <p className="text-[#444] text-[13px] leading-relaxed">
                {t('bento.testimonial')}
              </p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <div
                className="w-9 h-9 rounded-full bg-gray-200"
                style={{
                  backgroundImage: 'url(https://randomuser.me/api/portraits/women/44.jpg)',
                  backgroundSize: 'cover',
                }}
              />
              <div>
                <p className="text-[13px] font-medium text-[#1a1a1a]">María G.</p>
                <p className="text-[11px] text-[#888]">{t('bento.testimonialRole')}</p>
              </div>
            </div>
          </motion.div>

          {/* Image Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="relative rounded-[20px] overflow-hidden min-h-[260px]"
          >
            <Image
              src="/images/projects/kitchen2.jpg"
              alt="Modern interior"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Feature Card 01 - with image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-[20px] overflow-hidden min-h-[260px] group"
          >
            <Image
              src="/images/features/detail_work.png"
              alt="Meticulous detail"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-xs">01</span>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                  <Plus className="w-4 h-4 text-white/60" />
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium text-base mb-2">{t('bento.feature1.title')}</h4>
                <p className="text-white/70 text-[12px] leading-relaxed">
                  {t('bento.feature1.desc')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Card 2 - updated bathroom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="relative rounded-[20px] overflow-hidden min-h-[260px]"
          >
            <Image
              src="/images/features/bathroom_reno.png"
              alt="Elegant bathroom"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Row 2 */}
          {/* Feature Card 02 - with image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-[20px] overflow-hidden min-h-[260px] group"
          >
            <Image
              src="/images/features/sustainable_build.png"
              alt="Sustainable by Nature"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-xs">02</span>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                  <Plus className="w-4 h-4 text-white/60" />
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium text-base mb-2">{t('bento.feature2.title')}</h4>
                <p className="text-white/70 text-[12px] leading-relaxed">
                  {t('bento.feature2.desc')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image Card 3 - Large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="relative rounded-[20px] overflow-hidden min-h-[260px] md:col-span-2"
          >
            <Image
              src="/images/features/living_space.png"
              alt="Beautiful living space"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Feature Card 03 - with image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-[20px] overflow-hidden min-h-[260px] group"
          >
            <Image
              src="/images/features/team_work.png"
              alt="Beauty with purpose"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-white/60 text-xs">03</span>
                <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                  <Plus className="w-4 h-4 text-white/60" />
                </div>
              </div>
              <div>
                <h4 className="text-white font-medium text-base mb-2">{t('bento.feature3.title')}</h4>
                <p className="text-white/70 text-[12px] leading-relaxed">
                  {t('bento.feature3.desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
