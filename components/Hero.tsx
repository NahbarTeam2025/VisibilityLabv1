import React from 'react';
import { ArrowRight, Search, MapPin, BarChart2, Activity, Zap, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="sticky top-0 w-full min-h-screen bg-deepBlue flex flex-col">
      
      {/* 1. Background Atmosphere - Deep and Calm */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle Gradient Spotlights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accentBlue/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accentPurple/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        
        {/* Very subtle noise for texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* 2. Logo / Brand Header */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50 pointer-events-auto flex items-center gap-3 group cursor-default">
         <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-500 group-hover:rotate-90">
            {/* Custom CSS Logo Construction */}
            <div className="absolute inset-0 rounded-full border-2 border-accentBlue/30 group-hover:border-accentBlue transition-colors"></div>
            <div className="absolute inset-[30%] bg-accentBlue rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-accentPurple rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)] animate-pulse"></div>
         </div>
         <span className="text-xl md:text-2xl font-heading font-black tracking-tighter text-white">
            Visibility<span className="text-accentPurple">Lab</span>
         </span>
      </div>

      {/* "by Robert" - Aligned vertically with Logo */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50 h-10 md:h-12 flex items-center">
        <span className="font-heading text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/30 uppercase hover:text-white transition-colors cursor-default">
            by Robert
        </span>
      </div>

      <div className="container mx-auto z-10 px-4 sm:px-6 lg:px-8 flex-grow flex flex-col justify-start">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-center pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-20">
          
          {/* Left Column: Text Content */}
          <div className="order-2 lg:order-1 space-y-4 md:space-y-6 text-center lg:text-left">
            
            {/* Group Title and Badge for tight visual connection */}
            <div className="flex flex-col items-center lg:items-start gap-2">
                {/* Main Brand Name */}
                <div className="reveal">
                    <span className="text-5xl sm:text-6xl md:text-7xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-accentBlue to-accentPurple animate-gradient bg-[length:200%_auto] drop-shadow-2xl leading-[0.9]">
                        VisibilityLab
                    </span>
                </div>

                {/* Badge - Firmly under the title */}
                <div className="reveal reveal-delay-100">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-slate-300 text-xs font-bold tracking-widest uppercase hover:bg-white/10 transition-colors cursor-default">
                        <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accentPurple opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accentPurple"></span>
                        </span>
                        Ihr System für digitale Dominanz
                    </div>
                </div>
            </div>

            {/* Headline - Removed 'reveal' class so it's visible immediately */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight leading-[1.1] text-white mt-2 hidden sm:block">
              Sichtbarkeit durch <span className="relative inline-block text-white">
                System.
                {/* Underline decoration */}
                <svg className="absolute w-full h-3 bottom-0 left-0 text-accentBlue opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span><br/>
              Strukturieren Sie Ihren digitalen Erfolg.
            </h1>
            
            {/* Mobile simplified headline - Removed 'reveal' class */}
            <h1 className="text-4xl font-heading font-black tracking-tight leading-[1.1] text-white mt-2 sm:hidden">
              Sichtbarkeit durch <span className="text-accentBlue">System.</span>
            </h1>

            {/* Subline */}
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 reveal reveal-delay-300 mt-6">
              VisibilityLab ist Ihr KI-gestütztes System, das komplexe Daten in eine klare Hub-and-Spoke Architektur verwandelt. Dominieren Sie Ihre Nische – lokal, global und im KI-Web der Zukunft.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 md:pt-6 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="group relative w-full sm:w-auto px-8 py-4 bg-accentBlue text-white font-bold rounded-xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accentBlue to-accentCyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-3">
                  Kostenlose Visibility-Analyse
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={() => document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' })} 
                className="group w-full sm:w-auto px-8 py-4 text-white font-medium rounded-xl border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-3 hover:border-white/30"
              >
                Case Study ansehen
                <div className="w-1.5 h-1.5 rounded-full bg-accentPurple group-hover:shadow-[0_0_10px_#A855F7] transition-shadow"></div>
              </button>
            </div>
          </div>

          {/* Right Column: "The Digital Lens" Animation */}
          {/* Reduced height on mobile to ensure text is visible above fold */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center h-[320px] md:h-[500px] reveal reveal-delay-200 perspective-1000 lg:-mt-12">
             
             {/* Main Container for the Visual - Slightly smaller on mobile */}
             <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px]">
                
                {/* 1. Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accentBlue/20 rounded-full blur-[60px] animate-pulse-slow"></div>

                {/* 2. Rotating Rings (The Radar) */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] w-1 h-2 bg-white/50"></div>
                </div>
                
                <div className="absolute inset-[15%] rounded-full border border-dashed border-white/10 animate-spin-reverse-slow"></div>
                
                <div className="absolute inset-[-10%] rounded-full border border-accentBlue/10 flex items-center justify-center animate-[spin_30s_linear_infinite]">
                    <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,rgba(59,130,246,0.1)_360deg)]"></div>
                    <div className="absolute top-0 w-[1px] h-[50%] bg-gradient-to-b from-accentBlue/0 to-accentBlue/50 origin-bottom"></div>
                </div>

                {/* 3. Central Core */}
                <div className="absolute inset-0 m-auto w-28 h-28 md:w-40 md:h-40 bg-slate-900/80 backdrop-blur-xl rounded-full border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center z-20 overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-accentBlue/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <Search className="w-10 h-10 md:w-12 md:h-12 text-accentBlue relative z-10 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" strokeWidth={1.5} />
                    <div className="absolute top-0 w-full h-[2px] bg-accentCyan/50 shadow-[0_0_10px_#06B6D4] animate-[scan_3s_ease-in-out_infinite]"></div>
                </div>

                {/* 4. Floating Metric Cards */}
                <div className="absolute top-0 right-0 md:-right-10 translate-y-6 md:translate-y-10 animate-float" style={{ animationDelay: '0s' }}>
                    <div className="glass-panel px-3 py-2 md:px-4 md:py-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-xl backdrop-blur-md bg-slate-900/60 hover:scale-105 transition-transform cursor-default">
                        <div className="p-1.5 rounded-lg bg-green-500/10 text-green-400">
                            <Check className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                        <div>
                            <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Ranking</div>
                            <div className="text-xs md:text-sm font-bold text-white">Position #1</div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 left-0 md:bottom-10 md:-left-12 animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="glass-panel px-3 py-2 md:px-4 md:py-3 rounded-xl border border-white/10 flex items-center gap-3 shadow-xl backdrop-blur-md bg-slate-900/60 hover:scale-105 transition-transform cursor-default">
                        <div className="p-1.5 rounded-lg bg-accentBlue/10 text-accentBlue">
                            <Activity className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                        <div>
                            <div className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Traffic</div>
                            <div className="text-xs md:text-sm font-bold text-white">+245%</div>
                        </div>
                    </div>
                </div>

                <div className="absolute top-8 left-0 md:top-10 md:-left-4 animate-float" style={{ animationDelay: '2.5s' }}>
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full glass-panel border border-white/10 flex items-center justify-center bg-slate-900/60 shadow-lg text-accentPurple">
                      <BarChart2 className="w-5 h-5 md:w-6 md:h-6" />
                   </div>
                </div>

                <div className="absolute bottom-16 right-0 md:bottom-20 md:-right-8 animate-float" style={{ animationDelay: '1s' }}>
                   <div className="glass-panel px-2 py-1.5 md:px-3 md:py-2 rounded-lg border border-white/10 flex items-center gap-2 bg-slate-900/60">
                      <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 text-accentCyan" />
                      <span className="text-[10px] md:text-xs font-medium text-slate-200">Berlin</span>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
            0%, 100% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;