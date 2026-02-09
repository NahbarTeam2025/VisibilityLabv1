import React from 'react';
import { Search, Key, Network, PenTool, MapPin, Settings, Link, BarChart3 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const solutions = [
    { icon: <Search />, title: "Website- & Marktanalyse", desc: "Detaillierte Analyse des Ist-Zustands." },
    { icon: <Key />, title: "Keyword- & Themenstrategie", desc: "Gezielte Identifikation von Short- & Longtail-Keywords." },
    { icon: <Network />, title: "Hub-and-Spoke Architektur", desc: "Logische, sternförmige Inhaltsstruktur für maximale Themenautorität." },
    { icon: <PenTool />, title: "Premium Content", desc: "Inhalte für Mensch und Maschine." },
    { icon: <MapPin />, title: "GEO-Optimierung", desc: "Dominanz in der lokalen Suche für KMU und Organisationen." },
    { icon: <Settings />, title: "Tech SEO", desc: "Core Web Vitals & strukturierte Daten." },
    { icon: <Link />, title: "Authority Building", desc: "Backlinks & digitale PR." },
    { icon: <BarChart3 />, title: "Analytics & Reporting", desc: "Erfolg wird messbar gemacht." },
  ];

  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-slate-900/90 backdrop-blur-sm">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-mesh opacity-40"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-16 md:mb-20 lg:mb-24 reveal text-center lg:text-left">
          <div className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-widest text-accentBlue uppercase bg-blue-500/10 rounded-full border border-blue-500/20 shadow-sm backdrop-blur-md">
            Die Bausteine des Systems
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 md:mb-8 tracking-tight leading-tight">
            Die <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-accentCyan">VisibilityLab</span> Bausteine
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed lg:mx-0 mx-auto">
            Wir reparieren nicht nur – wir transformieren. Ein ganzheitlicher Prozess für nachhaltige digitale Dominanz, verpackt in modernste Technologie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <div 
              key={index}
              className={`glass-card-hover p-8 rounded-3xl h-full flex flex-col items-start reveal reveal-delay-${(index % 4) * 100}`}
            >
              <div className="mb-6 p-4 rounded-2xl bg-slate-800/50 border border-white/5 shadow-inner icon-hover">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-8 h-8 text-accentBlue" })}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {item.title}
              </h3>
              <p className="text-lg text-slate-400 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;