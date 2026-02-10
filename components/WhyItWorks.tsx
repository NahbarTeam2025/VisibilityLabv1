import React from 'react';

const WhyItWorks: React.FC = () => {
  const reasons = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10"/><path d="M7 12h10"/><path d="M7 16h10"/></svg>,
      title: "Keine blinden Experimente",
      desc: "Wir nutzen bewährte Frameworks und echte Daten, keine Vermutungen. Sicherheit für Ihr Budget.",
      beamColor: "rgba(168, 85, 247, 0.6)",
      duration: "4s"
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
      title: "KI-First Ansatz",
      desc: "Wir optimieren für die Suchmaschinen von heute und die KI-Assistenten von morgen.",
      beamColor: "rgba(59, 130, 246, 0.6)",
      duration: "5s"
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
      title: "Skalierbare Architektur",
      desc: "Das Hub-and-Spoke System wächst mühelos mit Ihrem Unternehmen. Kein Flickenteppich mehr.",
      beamColor: "rgba(168, 85, 247, 0.4)",
      duration: "6.5s"
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      title: "Totale Transparenz",
      desc: "Sie sehen genau, was wir tun und was es bringt. Live-Dashboards, keine Blackbox.",
      beamColor: "rgba(59, 130, 246, 0.4)",
      duration: "3.5s"
    }
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.7rem', fontWeight: '900', color: '#a855f7', backgroundColor: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            PHILOSOPHIE
          </div>
          <h2 className="text-4xl font-black mb-6">Warum <span className="text-gradient-animated" style={{whiteSpace: 'nowrap'}}>VisibilityLab</span> funktioniert</h2>
        </div>

        <div className="grid grid-cols-1 md-grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="glass-panel border-beam-card" style={{ 
              padding: '2.5rem', 
              borderRadius: '2rem',
              ['--beam-color' as any]: reason.beamColor,
              ['--beam-duration' as any]: reason.duration
            }}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ color: index % 2 === 0 ? '#a855f7' : '#3b82f6', marginBottom: '1.5rem', width: '56px', height: '56px', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {reason.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{reason.title}</h3>
                <p style={{ color: '#94a3b8', fontWeight: '300', lineHeight: '1.6' }}>{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;