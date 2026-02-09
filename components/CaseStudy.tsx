import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';

const CaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="py-24 md:py-32 lg:py-40 relative bg-slate-900">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1e293b] to-slate-900"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accentPurple/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-10 lg:space-y-12 reveal">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-accentPurple/10 border border-accentPurple/30 text-accentPurple text-sm font-bold tracking-widest uppercase mb-6 md:mb-8 shadow-sm backdrop-blur-md">
                Case Study
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black text-white leading-tight mb-6 md:mb-8 tracking-tighter drop-shadow-xl">
                Falkenberg/Elster
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                Wie eine Stadtverwaltung von digitaler Unsichtbarkeit zu einer modernen Informationsdrehscheibe wurde.
              </p>
            </div>

            <div className="space-y-8 lg:space-y-10">
              {/* Point 1 */}
              <div className="relative pl-10 group cursor-default">
                <div className="absolute left-0 top-2 w-[1px] h-full bg-gradient-to-b from-red-500/50 to-transparent"></div>
                <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] group-hover:scale-125 transition-transform"></div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">Die Herausforderung</h3>
                <p className="text-lg text-slate-400 font-light">
                  Wichtige Bürgerinformationen waren tief in PDF-Strukturen vergraben. Google-Rankings existierten für relevante lokale Begriffe kaum.
                </p>
              </div>

              {/* Point 2 */}
              <div className="relative pl-10 group cursor-default">
                <div className="absolute left-0 top-2 w-[1px] h-full bg-gradient-to-b from-accentBlue/50 to-transparent"></div>
                <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-accentBlue shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform"></div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accentBlue transition-colors">Die Lösung</h3>
                <p className="text-lg text-slate-400 font-light">
                  Implementierung einer Hub-and-Spoke Architektur. Aufbrechen von PDFs in indexierbare Web-Inhalte. GEO-Targeting für umliegende Gemeinden.
                </p>
              </div>

              {/* Point 3 */}
              <div className="relative pl-10 group cursor-default">
                <div className="absolute left-0 top-2 w-[1px] h-full bg-gradient-to-b from-green-500/50 to-transparent"></div>
                <div className="absolute -left-1.5 top-2 w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] group-hover:scale-125 transition-transform"></div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Das Ergebnis</h3>
                <p className="text-lg text-slate-400 font-light">
                  Explosion der organischen Reichweite. Die Stadt ist nun für über 500 relevante Keywords auf Seite 1, was zu einer Verdreifachung qualifizierter Bürgeranfragen führte.
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual/Stats */}
          <div className="lg:w-1/2 w-full reveal reveal-delay-200">
            <div className="relative group cursor-default">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accentBlue to-accentPurple rounded-[2.5rem] blur opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
              
              <div className="relative glass-panel rounded-[2.5rem] p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden transition-all duration-300">
                <div className="flex justify-between items-end mb-10 md:mb-12">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-4 tracking-tight group/title">
                      <div className="p-2.5 rounded-xl bg-green-500/10 border border-green-500/20">
                        <TrendingUp className="text-green-400 w-7 h-7" />
                      </div>
                      Wachstum
                    </h3>
                    <p className="text-slate-400 mt-2 font-medium ml-1">Vergleich: Vorher vs. Nachher</p>
                  </div>
                  <div className="text-right hidden sm:block">
                    <span className="text-xs font-mono text-slate-500 bg-slate-800/50 border border-white/10 px-3 py-1.5 rounded tracking-wider">PERIOD: 12 MONTHS</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {/* Stat Card 1 */}
                  <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-slate-800/40 to-slate-900/40 hover:from-slate-800/60 hover:to-accentBlue/20 p-6 rounded-2xl border border-white/5 relative overflow-hidden group/card transition-all duration-500 hover:border-accentBlue/30 hover:translate-y-[-2px] hover:shadow-lg">
                    <div className="absolute right-0 top-0 p-4 opacity-10 group-hover/card:opacity-30 transition-opacity">
                      <ArrowRight className="w-12 h-12 text-accentBlue" />
                    </div>
                    <div className="text-5xl font-black text-white mb-2 tracking-tighter transition-transform duration-500 group-hover/card:scale-105 origin-left">+240%</div>
                    <div className="text-xs font-bold text-accentBlue tracking-widest uppercase">Sichtbarkeit</div>
                  </div>

                  {/* Stat Card 2 */}
                  <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-slate-800/40 to-slate-900/40 hover:from-slate-800/60 hover:to-accentPurple/20 p-6 rounded-2xl border border-white/5 group/card transition-all duration-500 hover:border-accentPurple/30 hover:translate-y-[-2px] hover:shadow-lg">
                    <div className="text-5xl font-black text-white mb-2 tracking-tighter transition-transform duration-500 group-hover/card:scale-105 origin-left">Top 3</div>
                    <div className="text-xs font-bold text-accentPurple tracking-widest uppercase">Lokale Rankings</div>
                  </div>

                  {/* Stat Card 3 (Wide) */}
                  <div className="col-span-2 bg-gradient-to-r from-slate-800/60 to-slate-800/30 hover:from-slate-800 hover:to-slate-700/50 p-6 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 text-center sm:text-left transition-all duration-500 hover:border-white/20">
                    <div>
                      <div className="text-4xl font-black text-white mb-1 group-hover:text-red-400 transition-colors duration-300">-45%</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Absprungrate</div>
                    </div>
                    <div className="hidden sm:block h-10 w-[1px] bg-white/10 mx-4"></div>
                    <div>
                      <div className="text-4xl font-black text-white mb-1 group-hover:text-green-400 transition-colors duration-300">100%</div>
                      <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">KI-Ready</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-white/5">
                  <blockquote className="text-slate-300 text-lg italic border-l-2 border-accentBlue pl-6 py-1 font-light">
                    "VisibilityLab hat unsere digitale Präsenz nicht nur repariert, sondern revolutioniert."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;