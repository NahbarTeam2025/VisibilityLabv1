import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-24 md:py-32 lg:py-48 relative flex items-center justify-center overflow-hidden bg-slate-900 group">
      {/* Central glow - reactive to hover */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 rounded-full blur-[120px] opacity-60 transition-all duration-700 group-hover:opacity-80 group-hover:scale-110"></div>
      
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center relative z-10 reveal">
        {/* Main Content Container with Lift Effect */}
        <div className="mb-12 md:mb-16 transform transition-all duration-700 hover:-translate-y-2">
            
            <div className="inline-flex justify-center items-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 text-accentBlue mb-8 md:mb-12 shadow-[0_0_50px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_80px_rgba(168,85,247,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:border-accentPurple/30 group-hover:text-accentPurple">
                <Quote className="w-9 h-9 md:w-11 md:h-11 fill-current transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
            </div>
          
          <blockquote className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-white mb-12 md:mb-16 drop-shadow-xl tracking-tight transition-all duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-blue-200 group-hover:to-purple-200">
            <span className="text-slate-500 group-hover:text-accentPurple/50 transition-colors duration-500">„</span>
            VisibilityLab hat unsere Website endlich strukturiert und sichtbar gemacht. Wir erreichen Bürger nun dort, wo sie suchen.
            <span className="text-slate-500 group-hover:text-accentPurple/50 transition-colors duration-500">“</span>
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="w-20 h-1 bg-gradient-to-r from-accentBlue to-accentPurple rounded-full mb-8 transition-all duration-500 group-hover:w-32 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"></div>
            <cite className="not-italic transform hover:scale-105 transition-transform duration-300 cursor-default">
              <div className="text-2xl font-black text-white mb-1 tracking-tight">Stadtverwaltung</div>
              <div className="text-lg text-accentBlue font-bold tracking-wide uppercase group-hover:text-accentPurple transition-colors duration-500">Falkenberg/Elster</div>
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;