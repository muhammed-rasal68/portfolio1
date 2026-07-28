// v1
import { ParticleBackground } from '@/components/ParticleBackground';
import { Navigation } from '@/components/Navigation';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      <main className="pt-24">
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
