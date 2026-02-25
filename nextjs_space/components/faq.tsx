'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, Minus } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const faqs = [
  {
    question: 'What services do you offer?',
    questionEs: '¿Qué servicios ofrecen?',
    answer: 'We offer a comprehensive range of construction services including painting, roofing, tile work, plumbing, and complete home remodeling. Each project is customized to meet your specific needs.',
    answerEs: 'Ofrecemos una amplia gama de servicios de construcción incluyendo pintura, techos, trabajo de azulejos, plomería y remodelación completa del hogar. Cada proyecto se personaliza para satisfacer tus necesidades específicas.',
  },
  {
    question: 'How long does a typical project take?',
    questionEs: '¿Cuánto tiempo toma un proyecto típico?',
    answer: 'Project timelines vary based on scope and complexity. A simple painting job might take 2-3 days, while a full kitchen remodel could take 4-6 weeks. We provide detailed timelines during our initial consultation.',
    answerEs: 'Los plazos de los proyectos varían según el alcance y la complejidad. Un trabajo de pintura simple puede tomar 2-3 días, mientras que una remodelación completa de cocina podría tomar 4-6 semanas. Proporcionamos cronogramas detallados durante nuestra consulta inicial.',
  },
  {
    question: 'Do you provide free estimates?',
    questionEs: '¿Proporcionan presupuestos gratuitos?',
    answer: 'Yes! We offer free, no-obligation estimates for all projects. Contact us to schedule a consultation where we\'ll assess your needs and provide a detailed quote.',
    answerEs: '¡Sí! Ofrecemos presupuestos gratuitos y sin compromiso para todos los proyectos. Contáctanos para programar una consulta donde evaluaremos tus necesidades y proporcionaremos una cotización detallada.',
  },
  {
    question: 'Are you licensed and insured?',
    questionEs: '¿Están licenciados y asegurados?',
    answer: 'Yes, Maprotech Construction LLC is fully licensed and insured. We carry comprehensive liability insurance and workers\' compensation to protect both our clients and team members.',
    answerEs: 'Sí, Maprotech Construction LLC está completamente licenciada y asegurada. Contamos con seguro de responsabilidad civil integral y compensación laboral para proteger tanto a nuestros clientes como a los miembros del equipo.',
  },
  {
    question: 'What areas do you serve?',
    questionEs: '¿Qué áreas atienden?',
    answer: 'We primarily serve the greater Houston, Texas area and surrounding communities. Contact us to confirm service availability in your specific location.',
    answerEs: 'Principalmente servimos el área metropolitana de Houston, Texas y las comunidades circundantes. Contáctanos para confirmar la disponibilidad del servicio en tu ubicación específica.',
  },
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, language } = useI18n();

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* FAQ List */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-[#f5f3f0] rounded-full text-sm font-medium text-[#666] mb-4">
                {t('faq.badge')}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] tracking-tight">
                {t('faq.title')}
              </h2>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  className="bg-[#f5f3f0] rounded-[16px] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left"
                  >
                    <span className="text-[#1a1a1a] font-medium text-[15px] pr-4">
                      {language === 'es' ? faq.questionEs : faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      openIndex === index ? 'bg-[#1a1a1a]' : 'bg-white'
                    }`}>
                      {openIndex === index ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#1a1a1a]" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-[#666] text-[14px] leading-relaxed">
                          {language === 'es' ? faq.answerEs : faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-[24px] overflow-hidden min-h-[400px] lg:min-h-full"
          >
            <Image
              src="/images/projects/kitchen2.jpg"
              alt="Construction work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-white text-xl font-medium mb-4">
                {t('faq.cta')}
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-white text-dark text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                {t('faq.contact')}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
