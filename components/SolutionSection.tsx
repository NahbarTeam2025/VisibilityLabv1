import React from 'react';
import { Search, Key, Network, PenTool, MapPin, Settings, Link, BarChart3 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const solutions = [
    { icon: <Search />, title: "Website- & Marktanalyse", desc: "Detaillierte Analyse des Ist-Zustands." },
    { icon: <Key />, title: "Keyword- & Themenstrategie", desc: "Gezielte Identifikation von Suchbegriffen." },
    { icon: <Network />, title: "Hub-and-Spoke Architektur", desc: "Logische, sternförmige Inhaltsstruktur." },
    { icon: <PenTool />, title: "Premium Content", desc: "Inhalte für Mensch und Maschine." },
    { icon: <MapPin />, title: "GEO-Optimierung", desc: "Dominanz in der lokalen Suche." },
    { icon: <Settings />, title: "Tech SEO", desc: "Core Web Vitals & strukturierte Daten." },
    { icon: <Link />, title: "Authority Building", desc: "Backlinks & digitale PR." },
    { icon: <BarChart3 />, title: "Analytics & Reporting", desc: "Erfolg wird messbar gemacht." },
  ];

  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden bg-slate-900">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 bg-mesh opacity-40"></div>
      <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-16 md:mb-20 lg:mb-24 reveal text-center lg:text-left">
          <div className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-widest text-accentBlue uppercase bg-blue-500/10 rounded-full border border-blue-500/20 shadow-sm backdrop-blur-md">
            Die Methode
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 md:mb-8 tracking-tight leading-tight">
            Die <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue to-accentCyan">VisibilityLab</span> Formel
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed lg:mx-0 mx-auto">
            Wir reparieren nicht nur – wir transformieren. Ein ganzheitlicher Prozess für nachhaltige digitale Dominanz, verpackt in modernste Technologie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {solutions.map((item, index) => (
            <div 
              key={index}
              className={`group glass-panel p-8 rounded-3xl hover:bg-slate-800/60 transition-all duration-300 hover:-translate-y-2 reveal reveal-delay-${(index % 4) * 100}`}
            >
              <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-accentBlue icon-hover group-hover:text-accentCyan group-hover:scale-110 shadow-lg">
                {React.cloneElement(item.icon as React.ReactElement, { className: "w-7 h-7" })}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accentCyan transition-colors tracking-tight">
                {item.title}
              </h3>
              <p className="text-base text-slate-400 leading-relaxed group-hover:text-slate-200 font-light">
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