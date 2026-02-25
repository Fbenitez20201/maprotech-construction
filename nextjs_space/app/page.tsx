import Header from '@/components/header';
import Hero from '@/components/hero';
import BentoGrid from '@/components/bento-grid';
import Stats from '@/components/stats';
import Projects from '@/components/projects';
import Services from '@/components/services';
import Process from '@/components/process';
import WhyUs from '@/components/why-us';
import Gallery from '@/components/gallery';
import VideoSection from '@/components/video-section';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import WhatsAppButton from '@/components/whatsapp-button';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BentoGrid />
      <Stats />
      <Projects />
      <Services />
      <Process />
      <WhyUs />
      <Gallery />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
