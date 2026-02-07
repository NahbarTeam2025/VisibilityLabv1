import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Nach oben scrollen"
      className={`
        fixed bottom-6 right-6 md:bottom-10 md:right-10 z-40 
        p-3 md:p-4 rounded-full 
        bg-slate-800/80 backdrop-blur-md 
        border border-white/10 
        shadow-[0_0_20px_rgba(0,0,0,0.5)] 
        text-white 
        transition-all duration-500 ease-out
        hover:bg-accentBlue hover:border-accentBlue/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-1 
        active:scale-90
        group
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
      `}
    >
      <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
      
      {/* Glow Effect inside button */}
      <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </button>
  );
};

export default ScrollToTop;