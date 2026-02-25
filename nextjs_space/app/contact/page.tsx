'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/header';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';
import { useI18n } from '@/lib/i18n';
import { Phone, MessageCircle, MapPin, Clock, Mail, Loader2, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { t, language } = useI18n();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = language === 'es' 
    ? ['Pintura', 'Techos', 'Azulejos', 'Plomería', 'Remodelación', 'Otro']
    : ['Painting', 'Roofing', 'Tile Work', 'Plumbing', 'Remodeling', 'Other'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch('https://n8n-n8n.fkoduq.easypanel.host/webhook-test/1ab1b9a8-bd02-4039-b21c-8353d4071042', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/80 mb-6">
              {t('contact.badge')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight max-w-3xl mx-auto">
              {t('contact.title')}
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#1a1a1a] rounded-[32px] p-8 lg:p-12 h-full">
                <h2 className="text-2xl md:text-3xl font-medium text-white mb-8">
                  {t('nav.getInTouch')}
                </h2>
                
                <div className="space-y-8">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.link/eidv05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">{t('contact.info.whatsapp')}</p>
                      <p className="text-white text-lg group-hover:text-white/80 transition-colors">+1 (240) 770-9873</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a href="tel:+13467430784" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">{t('contact.info.phone')}</p>
                      <p className="text-white text-lg group-hover:text-white/80 transition-colors">+1 (346) 743-0784</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a href="mailto:info@maprotechconstruction.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Email</p>
                      <p className="text-white text-lg group-hover:text-white/80 transition-colors">info@maprotechconstruction.com</p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">{t('contact.info.location')}</p>
                      <p className="text-white text-lg">Houston, Texas</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">{t('contact.info.hours')}</p>
                      <p className="text-white text-lg">{t('contact.info.hoursValue')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-medium text-[#1a1a1a] mb-2">
                      {t('contact.form.success')}
                    </h3>
                    <p className="text-[#666]">
                      {language === 'es' ? 'Nos pondremos en contacto pronto.' : "We'll get back to you soon."}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-[#1a1a1a] text-sm font-medium mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a] outline-none transition-colors"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#1a1a1a] text-sm font-medium mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a] outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#1a1a1a] text-sm font-medium mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-[#1a1a1a] text-sm font-medium mb-2">
                      {t('contact.form.service')}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a] outline-none transition-colors bg-white"
                    >
                      <option value="">{language === 'es' ? 'Seleccionar servicio' : 'Select a service'}</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[#1a1a1a] text-sm font-medium mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1a1a1a] focus:ring-1 focus:ring-[#1a1a1a] outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#1a1a1a] text-white font-medium rounded-full hover:bg-[#333] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      t('contact.form.submit')
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443088.12318235!2d-95.68191919453123!3d29.81735449999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1708900000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
