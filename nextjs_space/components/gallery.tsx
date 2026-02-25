'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const images = [
  { src: '/images/projects/kitchen2.jpg', alt: 'Kitchen Remodel', category: 'Kitchen' },
  { src: '/images/projects/bathroom.jpg', alt: 'Bathroom Renovation', category: 'Bathroom' },
  { src: '/images/services/tile.png', alt: 'Tile Installation', category: 'Tile Work' },
  { src: '/images/projects/kitchen1.jpg', alt: 'Modern Kitchen', category: 'Kitchen' },
  { src: '/images/services/painting.png', alt: 'Interior Painting', category: 'Painting' },
  { src: '/images/services/roofing.png', alt: 'Roofing Project', category: 'Roofing' },
  { src: '/images/projects/kitchen3.jpg', alt: 'Kitchen Design', category: 'Kitchen' },
  { src: '/images/services/plumbing.png', alt: 'Plumbing Work', category: 'Plumbing' },
  { src: '/images/services/remodeling.png', alt: 'Home Remodeling', category: 'Remodeling' },
];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useI18n();

  const sectionRef = useRef<HTMLElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Adjusted transforms for full coverage on large monitors - start far right
  const x1 = useTransform(scrollYProgress, [0, 1], ['30%', '-40%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);

  const row1 = images.slice(0, 5);
  const row2 = images.slice(4, 9);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      <section ref={sectionRef} className="py-20 lg:py-28 bg-[#f5f3f0] overflow-hidden">
        <div ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-white rounded-full text-sm font-medium text-[#666] mb-4">
              {t('gallery.badge')}
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] tracking-tight mb-4">
              {t('gallery.title')}
            </h2>
            <p className="text-[#666] text-[15px] max-w-lg mx-auto">
              {t('gallery.description')}
            </p>
          </motion.div>
        </div>

        {/* Row 1 - moves left, starts from right */}
        <motion.div style={{ x: x1 }} className="flex gap-4 mb-4 justify-center">
          {row1.map((image, index) => (
            <motion.div
              key={`row1-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setSelectedImage(index)}
              className="flex-shrink-0 w-[250px] md:w-[350px] aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity p-4 text-white font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Row 2 - moves right, starts from left */}
        <motion.div style={{ x: x2 }} className="flex gap-4 justify-center">
          {row2.map((image, index) => (
            <motion.div
              key={`row2-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setSelectedImage(4 + index)}
              className="flex-shrink-0 w-[250px] md:w-[350px] aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity p-4 text-white font-medium">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
            className="absolute left-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />
            <p className="text-white text-center mt-4">
              {images[selectedImage].alt} - {images[selectedImage].category}
            </p>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
            className="absolute right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}
