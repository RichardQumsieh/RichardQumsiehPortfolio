import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Contact } from '@/components/contact';
import { Testimonials } from '@/components/testimonials';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
