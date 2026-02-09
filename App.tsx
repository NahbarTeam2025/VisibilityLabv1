import React, { useEffect } from 'react';
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

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Perform animation once
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      // Increase negative margin to delay activation until element is well into viewport
      rootMargin: "0px 0px -100px 0px" 
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-white font-sans selection:bg-accentPurple selection:text-white overflow-x-hidden relative">
      {/* GLOBAL DYNAMIC BACKGROUND */}
      <div className="fixed inset-0 z-[-1] bg-[size:400%_400%] animate-gradient-xy bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#170e2e]"></div>
      
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <SolutionSection />
      <CaseStudy />
      <WhyItWorks />
      <Benefits />
      <Testimonial />
      <AboutMe />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;