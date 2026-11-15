import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { WhyStudioSection } from './components/WhyStudioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { COLLABORATION_TRACKS } from './data/studio';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>(
    COLLABORATION_TRACKS[0]
  );

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceAndScroll = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#08080A] text-[#F5F2EB] flex flex-col">
      <Navbar onNavigateContact={() => scrollToSection('contact')} />

      <main className="flex-1">
        <HeroSection
          onExploreWork={() => scrollToSection('work')}
          onLetsTalk={() => scrollToSection('contact')}
        />
        <AboutSection />
        <ServicesSection onSelectService={handleSelectServiceAndScroll} />
        <ProjectsSection onStartCollaboration={handleSelectServiceAndScroll} />
        <WhyStudioSection />
        <ContactSection
          selectedService={selectedService}
          onSelectService={setSelectedService}
        />
      </main>

      <Footer />
    </div>
  );
}
