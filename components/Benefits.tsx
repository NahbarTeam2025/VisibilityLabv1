import React from 'react';
import { Zap, BarChart, Clock, ArrowUpRight, Globe } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    { icon: <Zap />, text: "Blitzschnelle Ladezeiten" },
    { icon: <BarChart />, text: "Kristallklare Reports" },
    { icon: <Clock />, text: "Automatisierte Prozesse" },
    { icon: <ArrowUpRight />, text: "Exponentielles Wachstum" },
    { icon: <Globe />, text: "Lokale Marktführerschaft" }
  ];

  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Glass Container */}
          <div className="relative glass-panel rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 lg:p-28 overflow-hidden reveal hover:border-white/20 transition-all duration-500 shadow-2xl group">
             
             {/* Decorative Background Blobs within card */}
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 transition-all duration-1000 group-hover:bg-blue-500/30"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3 transition-all duration-1000 group-hover:bg-purple-500/30"></div>

             <div className="relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-16 items-center">
                <div className="lg:w-3/5 text-center lg:text-left">
                   <h2 className="text-4xl md:text-5xl xl:text-6xl font-heading font-black text-white mb-8 md:mb-10 leading-tight tracking-tight drop-shadow-md">
                     Ihr Vorteil: <br/>
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-accentCyan">Wettbewerbsvorsprung.</span>
                   </h2>
                   <p className="text-xl text-slate-300 font-light leading-relaxed">
                     Während Ihre Konkurrenz noch versucht, SEO zu verstehen, dominieren Sie bereits die Suchergebnisse. Investieren Sie in ein System, das messbare Ergebnisse liefert.
                   </p>
                </div>

                <div className="lg:w-2/5 w-full">
                   <ul className="space-y-4">
                     {benefits.map((benefit, index) => (
                       <li key={index} className="flex items-center gap-6 bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 hover:border-accentBlue/50 hover:bg-white/10 transition-all duration-300 hover:translate-x-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group/item cursor-default">
                          <div className="w-12 h-12 rounded-xl bg-accentBlue/10 border border-accentBlue/20 flex items-center justify-center flex-shrink-0 text-accentBlue group-hover/item:bg-accentBlue group-hover/item:text-white transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-6 shadow-sm group-hover/item:shadow-lg">
                            {React.cloneElement(benefit.icon as React.ReactElement, { className: "w-6 h-6 transition-transform duration-300 group-hover/item:scale-110" })}
                          </div>
                          <span className="text-lg md:text-xl font-semibold text-white group-hover/item:text-accentCyan transition-colors tracking-tight">
                            {benefit.text}
                          </span>
                       </li>
                     ))}
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;