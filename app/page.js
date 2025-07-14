import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import Big5Section from '../components/sections/Big5Section';
import TherapeuticExcellenceSection from '../components/sections/TherapeuticExcellenceSection';
import ValuesSection from '../components/sections/ValuesSection';
import MissionSection from '../components/sections/MissionSection';
import CTASection from '../components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Big5Section />
        <TherapeuticExcellenceSection />
        <ValuesSection />
        <MissionSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
