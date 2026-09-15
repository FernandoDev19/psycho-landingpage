import AboutMeSection from "../components/AboutMeSection";
import CallActionSection from "../components/CallActionSection";
import EmpathySection from "../components/EmpathySection";
import Hero from "../components/Hero";
import ResultsSection from "../components/ResultsSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import WspFloatButton from "../components/ui/WspFloatButton";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex-1 w-full overflow-hidden">
        <Hero />
        <EmpathySection />
        <ServicesSection />
        <AboutMeSection />
        <ResultsSection />
        <TestimonialsSection />
        <CallActionSection />
      </main>

      <WspFloatButton />

      <Footer />
    </>
  );
}
