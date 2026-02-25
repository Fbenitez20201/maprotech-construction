'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'es';

interface Translations {
  [key: string]: {
    en: string;
    es: string;
  };
}

const translations: Translations = {
  // Header
  'nav.home': { en: 'Home', es: 'Inicio' },
  'nav.services': { en: 'Services', es: 'Servicios' },
  'nav.projects': { en: 'Projects', es: 'Proyectos' },
  'nav.about': { en: 'About', es: 'Nosotros' },
  'nav.contact': { en: 'Contact', es: 'Contacto' },
  'nav.getInTouch': { en: 'Get in touch', es: 'Contáctanos' },
  
  // Hero
  'hero.badge': { en: '#1 Construction Company', es: '#1 Empresa de Construcción' },
  'hero.title1': { en: 'Building Dreams', es: 'Construyendo Sueños' },
  'hero.title2': { en: 'Into Reality', es: 'En Realidad' },
  'hero.cta': { en: 'Get a Quote', es: 'Solicitar Cotización' },
  
  // Bento Grid
  'bento.heading1': { en: 'From quiet corners to bold statements —', es: 'De rincones tranquilos a declaraciones audaces —' },
  'bento.heading2': { en: 'construction that connects', es: 'construcción que conecta' },
  'bento.description': { en: 'With a seamless process and attention to detail, we turn ideas into beautiful, livable realities.', es: 'Con un proceso fluido y atención al detalle, convertimos ideas en realidades hermosas y habitables.' },
  'bento.feature1.title': { en: 'Meticulous detail', es: 'Detalle meticuloso' },
  'bento.feature1.desc': { en: "We've delivered 50+ projects that help companies generate real results.", es: 'Hemos entregado más de 50 proyectos que ayudan a las empresas a generar resultados reales.' },
  'bento.feature2.title': { en: 'Sustainable by Nature', es: 'Sostenible por naturaleza' },
  'bento.feature2.desc': { en: 'Eco-friendly building practices and materials for a better future.', es: 'Prácticas y materiales de construcción ecológicos para un futuro mejor.' },
  'bento.feature3.title': { en: 'Beauty with purpose', es: 'Belleza con propósito' },
  'bento.feature3.desc': { en: 'Expert craftsmanship that combines aesthetics with functionality.', es: 'Artesanía experta que combina estética con funcionalidad.' },
  
  // Stats
  'stats.impressions': { en: 'Ad impressions managed', es: 'Impresiones publicitarias gestionadas' },
  'stats.projects': { en: 'Successful projects launched', es: 'Proyectos exitosos lanzados' },
  'stats.satisfaction': { en: 'Client satisfaction rate', es: 'Tasa de satisfacción del cliente' },
  'stats.traffic': { en: 'Monthly website driven through SEO', es: 'Tráfico mensual web impulsado por SEO' },
  
  // Projects
  'projects.title': { en: 'Our projects', es: 'Nuestros proyectos' },
  'projects.description': { en: 'Each project is a reflection of our construction philosophy—intentional, timeless, and tailored.', es: 'Cada proyecto es un reflejo de nuestra filosofía de construcción: intencional, atemporal y personalizado.' },
  'projects.scroll': { en: 'Scroll to explore', es: 'Desplázate para explorar' },
  
  // Services
  'services.title': { en: 'Our expertise', es: 'Nuestra experiencia' },
  'services.description': { en: 'Comprehensive construction services tailored to bring your vision to life.', es: 'Servicios integrales de construcción diseñados para dar vida a tu visión.' },
  'services.getQuote': { en: 'Get a Quote', es: 'Solicitar Cotización' },
  
  // Process
  'process.badge': { en: 'How We Work', es: 'Cómo Trabajamos' },
  'process.title': { en: 'Our simple 4-step process', es: 'Nuestro simple proceso de 4 pasos' },
  'process.description': { en: "We've streamlined our process to make your construction project as smooth and stress-free as possible.", es: 'Hemos optimizado nuestro proceso para que tu proyecto de construcción sea lo más fluido y sin estrés posible.' },
  'process.step1.title': { en: 'Consultation', es: 'Consulta' },
  'process.step1.desc': { en: 'We start with a free consultation to understand your vision, needs, and budget.', es: 'Comenzamos con una consulta gratuita para entender tu visión, necesidades y presupuesto.' },
  'process.step2.title': { en: 'Planning & Quote', es: 'Planificación y Cotización' },
  'process.step2.desc': { en: 'Our team creates a detailed plan and provides a transparent, no-obligation estimate.', es: 'Nuestro equipo crea un plan detallado y proporciona un presupuesto transparente y sin compromiso.' },
  'process.step3.title': { en: 'Construction', es: 'Construcción' },
  'process.step3.desc': { en: 'Our skilled craftsmen bring your vision to life with quality workmanship.', es: 'Nuestros artesanos calificados dan vida a tu visión con mano de obra de calidad.' },
  'process.step4.title': { en: 'Final Walkthrough', es: 'Revisión Final' },
  'process.step4.desc': { en: 'We ensure every detail meets your expectations before project completion.', es: 'Nos aseguramos de que cada detalle cumpla con tus expectativas antes de la finalización del proyecto.' },
  
  // Why Us
  'whyus.badge': { en: 'Why Choose Us', es: 'Por Qué Elegirnos' },
  'whyus.title': { en: 'Building trust through quality work', es: 'Construyendo confianza a través de trabajo de calidad' },
  'whyus.description': { en: "We're not just builders—we're partners in bringing your vision to life. Here's why homeowners trust Maprotech Construction.", es: 'No solo somos constructores, somos socios para dar vida a tu visión. Aquí está por qué los propietarios confían en Maprotech Construction.' },
  'whyus.years': { en: 'Years of Experience', es: 'Años de Experiencia' },
  
  // Gallery
  'gallery.badge': { en: 'Gallery', es: 'Galería' },
  'gallery.title': { en: 'See our work in action', es: 'Mira nuestro trabajo en acción' },
  'gallery.description': { en: 'Browse through our portfolio of completed projects and get inspired for your next renovation.', es: 'Explora nuestro portafolio de proyectos completados e inspírate para tu próxima renovación.' },
  
  // Video Section
  'video.title': { en: 'Construction that speaks before you ever say a word', es: 'Construcción que habla antes de que digas una palabra' },
  'video.quote': { en: 'The team at MaProTech exceeded all expectations. Their work transformed our home completely.', es: 'El equipo de MaProTech superó todas las expectativas. Su trabajo transformó nuestra casa por completo.' },
  
  // Testimonials
  'testimonials.title1': { en: "Don't just listen to us—", es: 'No solo nos escuches—' },
  'testimonials.title2': { en: 'see what our clients have to say.', es: 'mira lo que dicen nuestros clientes.' },
  
  // FAQ
  'faq.badge': { en: 'FAQ', es: 'Preguntas Frecuentes' },
  'faq.title': { en: 'Questions? We have answers.', es: '¿Preguntas? Tenemos respuestas.' },
  'faq.cta': { en: 'Still have a question in mind?', es: '¿Todavía tienes alguna pregunta?' },
  'faq.contact': { en: 'Contact Us', es: 'Contáctanos' },
  
  // About Page
  'about.badge': { en: 'Our Story', es: 'Nuestra Historia' },
  'about.title': { en: 'Building the future, one project at a time', es: 'Construyendo el futuro, un proyecto a la vez' },
  'about.description': { en: 'Maprotech Construction LLC was founded with a simple vision: to deliver exceptional construction services that transform houses into homes. With over 15 years of combined experience, our team brings expertise, passion, and dedication to every project.', es: 'Maprotech Construction LLC fue fundada con una visión simple: ofrecer servicios de construcción excepcionales que transforman casas en hogares. Con más de 15 años de experiencia combinada, nuestro equipo aporta experiencia, pasión y dedicación a cada proyecto.' },
  'about.mission.title': { en: 'Our Mission', es: 'Nuestra Misión' },
  'about.mission.desc': { en: 'To provide high-quality construction services that exceed expectations while maintaining transparency, integrity, and respect for our clients and their homes.', es: 'Proporcionar servicios de construcción de alta calidad que superen las expectativas mientras mantenemos la transparencia, integridad y respeto por nuestros clientes y sus hogares.' },
  'about.values.title': { en: 'Our Values', es: 'Nuestros Valores' },
  'about.values.desc': { en: 'Quality craftsmanship, honest communication, and customer satisfaction are at the heart of everything we do.', es: 'La artesanía de calidad, la comunicación honesta y la satisfacción del cliente están en el corazón de todo lo que hacemos.' },
  'about.team': { en: 'Meet Our Team', es: 'Conoce a Nuestro Equipo' },
  
  // Contact Page
  'contact.badge': { en: 'Get In Touch', es: 'Ponte en Contacto' },
  'contact.title': { en: 'Let\'s build something amazing together', es: 'Construyamos algo increíble juntos' },
  'contact.description': { en: 'Ready to start your project? Contact us today for a free consultation and estimate.', es: '¿Listo para comenzar tu proyecto? Contáctanos hoy para una consulta y presupuesto gratuito.' },
  'contact.form.name': { en: 'Full Name', es: 'Nombre Completo' },
  'contact.form.email': { en: 'Email Address', es: 'Correo Electrónico' },
  'contact.form.phone': { en: 'Phone Number', es: 'Número de Teléfono' },
  'contact.form.service': { en: 'Service Needed', es: 'Servicio Necesario' },
  'contact.form.message': { en: 'Tell us about your project', es: 'Cuéntanos sobre tu proyecto' },
  'contact.form.submit': { en: 'Send Message', es: 'Enviar Mensaje' },
  'contact.form.sending': { en: 'Sending...', es: 'Enviando...' },
  'contact.form.success': { en: 'Message sent successfully!', es: '¡Mensaje enviado exitosamente!' },
  'contact.info.whatsapp': { en: 'WhatsApp', es: 'WhatsApp' },
  'contact.info.phone': { en: 'Phone', es: 'Teléfono' },
  'contact.info.location': { en: 'Location', es: 'Ubicación' },
  'contact.info.hours': { en: 'Working Hours', es: 'Horario de Trabajo' },
  'contact.info.hoursValue': { en: 'Mon - Fri: 7AM - 6PM', es: 'Lun - Vie: 7AM - 6PM' },
  
  // Footer
  'footer.tagline': { en: 'Spaces Whisper Your Story', es: 'Los Espacios Susurran Tu Historia' },
  'footer.description': { en: 'We believe every space has a story waiting to be told. Let us help you create yours.', es: 'Creemos que cada espacio tiene una historia esperando ser contada. Déjanos ayudarte a crear la tuya.' },
  'footer.rights': { en: 'All rights reserved', es: 'Todos los derechos reservados' },
  
  // Common
  'common.learnMore': { en: 'Learn More', es: 'Saber Más' },
  'common.viewAll': { en: 'View All', es: 'Ver Todo' },
};

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'es')) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
