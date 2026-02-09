import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <PhilosophySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
