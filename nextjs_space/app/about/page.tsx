'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import { useI18n } from '@/lib/i18n';
import { Shield, Clock, Award, Users, Target, Heart } from 'lucide-react';

const team = [
  {
    name: 'Juan Cerna',
    role: 'Founder & CEO',
    roleEs: 'Fundador y CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    bio: 'With over 15 years in the construction industry, Juan leads Maprotech with a vision of quality and integrity.',
    bioEs: 'Con más de 15 años en la industria de la construcción, Juan lidera Maprotech con una visión de calidad e integridad.',
  },
  {
    name: 'Yanira Arevalo',
    role: 'Operations Manager',
    roleEs: 'Gerente de Operaciones',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
    bio: 'Yanira ensures every project runs smoothly, coordinating teams and maintaining our high standards.',
    bioEs: 'Yanira asegura que cada proyecto funcione sin problemas, coordinando equipos y manteniendo nuestros altos estándares.',
  },
  {
    name: 'Sam Amaya',
    role: 'Lead Contractor',
    roleEs: 'Contratista Principal',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
    bio: 'Sam brings expert craftsmanship and attention to detail to every project he oversees.',
    bioEs: 'Sam aporta artesanía experta y atención al detalle a cada proyecto que supervisa.',
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Project Supervisor',
    roleEs: 'Supervisor de Proyectos',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    bio: 'Carlos coordinates on-site work, ensuring timelines are met and quality is maintained.',
    bioEs: 'Carlos coordina el trabajo en sitio, asegurando que se cumplan los plazos y se mantenga la calidad.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    titleEs: 'Integridad',
    description: 'We believe in honest communication and transparent pricing.',
    descriptionEs: 'Creemos en la comunicación honesta y precios transparentes.',
  },
  {
    icon: Award,
    title: 'Quality',
    titleEs: 'Calidad',
    description: 'We never compromise on materials or workmanship.',
    descriptionEs: 'Nunca comprometemos los materiales o la mano de obra.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    titleEs: 'Confiabilidad',
    description: 'We deliver on time and within budget, every time.',
    descriptionEs: 'Entregamos a tiempo y dentro del presupuesto, siempre.',
  },
  {
    icon: Users,
    title: 'Teamwork',
    titleEs: 'Trabajo en Equipo',
    description: 'Our success comes from collaboration and mutual respect.',
    descriptionEs: 'Nuestro éxito proviene de la colaboración y el respeto mutuo.',
  },
  {
    icon: Target,
    title: 'Excellence',
    titleEs: 'Excelencia',
    description: 'We strive to exceed expectations in every project.',
    descriptionEs: 'Nos esforzamos por superar las expectativas en cada proyecto.',
  },
  {
    icon: Heart,
    title: 'Passion',
    titleEs: 'Pasión',
    description: 'We love what we do, and it shows in our work.',
    descriptionEs: 'Amamos lo que hacemos, y se nota en nuestro trabajo.',
  },
];

export default function AboutPage() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { t, language } = useI18n();

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/80 mb-6">
              {t('about.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight max-w-3xl mx-auto">
              {t('about.title')}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {t('about.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden">
                <Image
                  src="/images/features/team_work.png"
                  alt="Our team at work"
                  fill
                  className="object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={storyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 bg-[#1a1a1a] text-white p-6 rounded-2xl shadow-xl"
              >
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="text-white/70 text-sm">{t('whyus.years')}</p>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-6 tracking-tight">
                {t('about.mission.title')}
              </h2>
              <p className="text-[#666] text-[15px] leading-relaxed mb-8">
                {t('about.mission.desc')}
              </p>
              
              <h3 className="text-2xl font-medium text-[#1a1a1a] mb-4 tracking-tight">
                {t('about.values.title')}
              </h3>
              <p className="text-[#666] text-[15px] leading-relaxed">
                {t('about.values.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 lg:py-28 bg-[#f5f3f0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] tracking-tight mb-4">
              {t('about.values.title')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-white rounded-[24px] p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
                  {language === 'es' ? value.titleEs : value.title}
                </h3>
                <p className="text-[#666] text-[15px] leading-relaxed">
                  {language === 'es' ? value.descriptionEs : value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a1a1a] tracking-tight mb-4">
              {t('about.team')}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={teamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium text-lg">{member.name}</p>
                    <p className="text-white/70 text-sm">{language === 'es' ? member.roleEs : member.role}</p>
                  </div>
                </div>
                <p className="text-[#666] text-sm leading-relaxed">
                  {language === 'es' ? member.bioEs : member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
