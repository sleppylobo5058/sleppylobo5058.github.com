import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import EditorialMarquee from "@/components/EditorialMarquee";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Landing() {
  return (
    <div className="relative bg-background text-white min-h-screen overflow-x-hidden" data-testid="landing-page">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <EditorialMarquee />
        <Services />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
