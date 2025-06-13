import { Hero } from '@/components/hero';
import { Services } from '@/components/services';
import { Contact } from '@/components/contact';
import { Testimonials } from '@/components/testimonials';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hobbies } from '@/components/hobbies';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Hobbies />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
