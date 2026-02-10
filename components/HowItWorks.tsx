import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
      title: "1. Analyse & Strategie",
      desc: "Wir scannen Markt, Wettbewerb und Ihre Website. Das Ergebnis ist ein klarer, datenbasierter Fahrplan.",
      beamColor: "rgba(59, 130, 246, 0.5)",
      duration: "3s"
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
      title: "2. Content & Umsetzung",
      desc: "Unser System baut die Content-Architektur auf und erstellt GEO-optimierte Inhalte, die Mensch und Maschine lieben.",
      beamColor: "rgba(6, 182, 212, 0.4)",
      duration: "4.5s"
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
      title: "3. Review & Ausbau",
      desc: "Wir messen den Erfolg, optimieren kontinuierlich und bauen Ihre digitale Autorität systematisch aus.",
      beamColor: "rgba(168, 85, 247, 0.4)",
      duration: "6s"
    }
  ];

  return (
    <section className="py-32">
      <div className="container">
        <h2 className="text-4xl font-black text-center mb-8">So funktioniert's</h2>
        <p style={{ color: '#94a3b8', textAlign: 'center', maxWidth: '32rem', margin: '0 auto 6rem', lineHeight: '1.6' }}>Kein Marketing-Voodoo, sondern ein transparenter und bewährter Prozess für messbare Ergebnisse.</p>
        
        <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="glass-panel border-beam-card" style={{ 
              padding: '2.5rem', 
              borderRadius: '1.5rem', 
              position: 'relative',
              ['--beam-color' as any]: step.beamColor,
              ['--beam-duration' as any]: step.duration
            }}>
              <div style={{ color: '#3b82f6', marginBottom: '1.5rem', width: '56px', height: '56px', borderRadius: '12px', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {step.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{step.title}</h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.6', fontWeight: '300' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;