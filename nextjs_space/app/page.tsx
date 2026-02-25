import Header from '@/components/header';
import Hero from '@/components/hero';
import BentoGrid from '@/components/bento-grid';
import Stats from '@/components/stats';
import Projects from '@/components/projects';
import Services from '@/components/services';
import VideoSection from '@/components/video-section';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BentoGrid />
      <Stats />
      <Projects />
      <Services />
      <VideoSection />
      <Testimonials />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
