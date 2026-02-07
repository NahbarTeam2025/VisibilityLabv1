import React, { useEffect } from 'react';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import CaseStudy from './components/CaseStudy';
import WhyItWorks from './components/WhyItWorks';
import Benefits from './components/Benefits';
import Testimonial from './components/Testimonial';
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
    <div className="min-h-screen bg-techBlue text-white font-sans selection:bg-accentPurple selection:text-white overflow-x-hidden relative">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <CaseStudy />
      <WhyItWorks />
      <Benefits />
      <Testimonial />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;