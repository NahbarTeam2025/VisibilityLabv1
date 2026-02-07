import React from 'react';
import { ClipboardList, Zap, Scaling, PieChart } from 'lucide-react';

const WhyItWorks: React.FC = () => {
  const reasons = [
    {
      icon: <ClipboardList />,
      title: "Keine blinden Experimente",
      desc: "Wir nutzen bewährte Frameworks und echte Daten, keine Vermutungen. Sicherheit für Ihr Budget."
    },
    {
      icon: <Zap />,
      title: "KI-First Ansatz",
      desc: "Wir optimieren für die Suchmaschinen von heute und die KI-Assistenten von morgen."
    },
    {
      icon: <Scaling />,
      title: "Skalierbare Architektur",
      desc: "Das Hub-and-Spoke System wächst mühelos mit Ihrem Unternehmen. Kein Flickenteppich mehr."
    },
    {
      icon: <PieChart />,
      title: "Totale Transparenz",
      desc: "Sie sehen genau, was wir tun und was es bringt. Live-Dashboards, keine Blackbox."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-900 relative">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20 lg:mb-24 reveal">
            <div className="inline-block px-4 py-2 mb-6 text-sm font-bold tracking-widest text-accentPurple uppercase bg-accentPurple/10 rounded-full border border-accentPurple/20 shadow-sm backdrop-blur-sm">
              Philosophie
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-8 tracking-tight drop-shadow-lg">
              Warum <span className="text-accentPurple">VisibilityLab</span> funktioniert
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {reasons.map((reason, index) => (
              <div key={index} className={`flex gap-6 md:gap-8 items-start p-8 md:p-10 rounded-[2rem] glass-card-hover group reveal reveal-delay-${(index + 1) * 100} h-full`}>
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-white/10 flex items-center justify-center text-accentPurple shadow-lg group-hover:scale-110 group-hover:bg-accentPurple group-hover:text-white transition-all duration-300">
                    {React.cloneElement(reason.icon as React.ReactElement, { className: "w-8 h-8" })}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accentPurple transition-colors tracking-tight">{reason.title}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed font-light group-hover:text-slate-300">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;