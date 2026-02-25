'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of construction services including painting, roofing, bricklaying, plumbing, carpentry, tile work, remodeling, fencing, and concrete work.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity. A simple renovation might take 1-2 weeks, while a full remodel could take 4-8 weeks. We provide detailed timelines during consultation.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes! We provide free, no-obligation estimates for all projects. Contact us to schedule a consultation and we\'ll assess your needs and provide a detailed quote.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. MaProTech Construction LLC is fully licensed and insured, giving you peace of mind that your project is in professional hands.',
  },
  {
    question: 'Do you work with clients outside Houston?',
    answer: 'Yes, we serve the greater Houston metropolitan area and surrounding communities. Contact us to discuss your location and project needs.',
  },
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="heading-lg text-dark"
          >
            Answers that bring clarity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-body max-w-sm"
          >
            We've answered the most common questions to help you move forward.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="divide-y divide-gray-100"
          >
            {faqs.map((faq, index) => (
              <div key={index} className="py-5">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-dark font-medium pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>

          {/* Image with CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden min-h-[400px]"
          >
            <Image
              src="/images/projects/kitchen2.jpg"
              alt="Construction work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
              <p className="text-white font-medium">Still have a question in mind?</p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-dark text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
