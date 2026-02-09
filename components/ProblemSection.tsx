import React from 'react';
import { AlertTriangle, SearchX, MapPinOff, Bot } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
      title: "Chaos Struktur",
      text: "Nutzer verlieren sich in unstrukturierten Menüs. Hohe Absprungraten sind die Folge, wenn die Website-Navigation unklar ist.",
    },
    {
      icon: <SearchX className="w-8 h-8 text-orange-400" />,
      title: "Unsichtbar",
      text: "Trotz guter Inhalte werden Sie bei Google nicht gefunden, weil die richtigen Keywords und die nötige Autorität fehlen.",
    },
    {
      icon: <MapPinOff className="w-8 h-8 text-pink-400" />,
      title: "Lokal Verloren",
      text: "Lokale Kunden finden Ihre Konkurrenz. Wichtiger Umsatz geht verloren, weil Ihr Google Business Profil nicht optimiert ist.",
    },
    {
      icon: <Bot className="w-8 h-8 text-blue-400" />,
      title: "KI-Blind",
      text: "ChatGPT & Co. können Ihre Informationen nicht verarbeiten. Sie verpassen die Zukunft der Suche.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Lighter Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deepBlue via-[#0f172a] to-[#1e293b]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      
      {/* Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20 reveal">
          <div className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-widest text-red-300 uppercase bg-red-500/10 rounded-full border border-red-500/20 shadow-sm backdrop-blur-sm">
            Herausforderungen
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 md:mb-8 tracking-tight leading-tight drop-shadow-lg">
            Erkennen Sie sich wieder?
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            Entwickelt für KMU, Organisationen und Kommunen, die digitale Komplexität in einen klaren Wettbewerbsvorteil verwandeln wollen.
          </p>
          <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-3xl mx-auto mt-4">
            Viele Organisationen haben wertvolles Wissen, aber es ist digital verschlossen. Das kostet Reichweite, Vertrauen und letztlich Umsatz.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {problems.map((item, index) => (
            <div 
              key={index} 
              className={`glass-card-hover p-8 md:p-10 rounded-3xl h-full flex flex-col items-start reveal reveal-delay-${(index + 1) * 100}`}
            >
              <div className="mb-6 p-4 rounded-2xl bg-slate-800/50 border border-white/5 shadow-inner icon-hover group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;