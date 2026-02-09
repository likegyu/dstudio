import { type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Navigation dict={dict} locale={locale as Locale} />
      <main>
        <HeroSection dict={dict} />
        <PhilosophySection dict={dict} />
        <ContactSection dict={dict} />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
