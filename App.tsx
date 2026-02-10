import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import SolutionSection from './components/SolutionSection';
import CaseStudy from './components/CaseStudy';
import WhyItWorks from './components/WhyItWorks';
import Benefits from './components/Benefits';
import Testimonial from './components/Testimonial';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LegalModal from './components/LegalModal';

const App: React.FC = () => {
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'impressum' | 'datenschutz' | 'kontakt' | null }>({
    isOpen: false,
    type: null
  });

  useEffect(() => {
    // Intersection Observer for Reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    
    // Global Mouse Tracking for Atmosphere Glow
    const handleGlobalMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      document.body.style.setProperty('--cursor-x', `${x}px`);
      document.body.style.setProperty('--cursor-y', `${y}px`);
    };
    
    window.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  const openLegal = (type: 'impressum' | 'datenschutz' | 'kontakt') => {
    setLegalModal({ isOpen: true, type });
    document.body.style.overflow = 'hidden';
  };

  const closeLegal = () => {
    setLegalModal({ isOpen: false, type: null });
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="relative w-full">
      <Navbar onLegalClick={openLegal} />
      
      {/* Background Layer: Base Color */}
      <div className="fixed inset-0 z-[-3]" style={{ backgroundColor: '#0D1F33' }}></div>
      
      {/* Background Layer: Micro Grid Pattern (Fills the emptiness) */}
      <div className="global-grid-bg"></div>
      
      {/* Background Layer: Vignette (Focuses the eye) */}
      <div className="global-vignette"></div>
      
      {/* Global Mouse Glow Atmosphere */}
      <div className="mouse-glow-bg"></div>
      
      <div className="fixed inset-0 z-[-1]" style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05), transparent 80%)'
      }}></div>
      
      {/* CSS-based Shooting Stars for Tech Feel */}
      <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="shooting-star" style={{ left: '20%', animationDelay: '0s', animationDuration: '6s' }}></div>
        <div className="shooting-star" style={{ left: '70%', animationDelay: '2s', animationDuration: '8s' }}></div>
        <div className="shooting-star" style={{ left: '40%', animationDelay: '4s', animationDuration: '5s' }}></div>
      </div>
      
      <Hero />
      <div className="reveal"><ProblemSection /></div>
      <div className="reveal" id="how-it-works"><HowItWorks /></div>
      <div className="reveal"><SolutionSection /></div>
      <div className="reveal" id="case-study"><CaseStudy /></div>
      <div className="reveal"><WhyItWorks /></div>
      <div className="reveal"><Benefits /></div>
      <div className="reveal"><Testimonial /></div>
      <div className="reveal"><AboutMe /></div>
      <div className="reveal"><ContactForm onLegalClick={openLegal} /></div>
      
      <Footer onLegalClick={openLegal} />
      
      <ScrollToTop />
      
      <LegalModal 
        isOpen={legalModal.isOpen} 
        onClose={closeLegal} 
        type={legalModal.type} 
      />
    </div>
  );
};

export default App;