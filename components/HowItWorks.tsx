import React from 'react';
import { ClipboardCheck, FilePenLine, TrendingUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8 text-accentBlue" />,
      title: "1. Analyse & Strategie",
      desc: "Wir scannen Markt, Wettbewerb und Ihre Website. Das Ergebnis ist ein klarer, datenbasierter Fahrplan für Ihre digitale Dominanz."
    },
    {
      icon: <FilePenLine className="w-8 h-8 text-accentPurple" />,
      title: "2. Content & Umsetzung",
      desc: "Unser System baut die Content-Architektur auf und erstellt GEO-optimierte Inhalte, die Mensch und Maschine lieben."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "3. Review & Ausbau",
      desc: "Wir messen den Erfolg, optimieren kontinuierlich und bauen Ihre digitale Autorität systematisch aus."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent h-1/3 bottom-0"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20 reveal">
          <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-6 tracking-tight">
            So funktioniert's: In 3 klaren Schritten
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
            Kein Marketing-Voodoo, sondern ein transparenter und bewährter Prozess für messbare Ergebnisse.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
                <div key={index} className={`glass-card-hover p-8 rounded-3xl h-full flex flex-col items-start reveal reveal-delay-${index * 100}`}>
                    <div className="mb-6 p-4 rounded-2xl bg-slate-800/50 border border-white/5 shadow-inner icon-hover">
                       {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-lg text-slate-400 font-light leading-relaxed">
                      {step.desc}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
