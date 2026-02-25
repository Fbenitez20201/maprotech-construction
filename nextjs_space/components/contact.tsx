'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Loader2, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch(
        'https://n8n-n8n.fkoduq.easypanel.host/webhook-test/1ab1b9a8-bd02-4039-b21c-8353d4071042',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', lastname: '', email: '', message: '' });
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+1 (346) 743-0784',
      href: 'https://wa.link/eidv05',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (346) 743-0784',
      href: 'tel:+13467430784',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Houston, Texas',
      href: null,
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon - Sat: 7AM - 6PM',
      href: null,
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-28 bg-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-white mb-5 tracking-tight leading-[1.15]">
              Let's talk about your project
            </h2>
            <p className="text-[#888] text-[15px] mb-10 max-w-md">
              Ready to transform your space? Contact us today for a free consultation and estimate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  className="bg-white/5 rounded-[16px] p-4"
                >
                  <item.icon className="w-4 h-4 text-[#666] mb-3" strokeWidth={1.5} />
                  <p className="text-[#666] text-[12px] mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white font-medium text-sm hover:text-gray-300 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {isSubmitted ? (
              <div className="bg-white/5 rounded-[20px] p-8 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle className="w-14 h-14 text-green-400 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-medium text-white mb-2">Message Sent!</h3>
                <p className="text-[#888] text-sm">We'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-white text-sm underline hover:no-underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#555] focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      value={formData.lastname}
                      onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                      placeholder="Doe"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#555] focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@gmail.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#555] focus:outline-none focus:border-white/30 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help you..."
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-[#555] focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>

                {error && <p className="text-red-400 text-sm">{error}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-[#1a1a1a] font-medium py-3 rounded-xl hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
