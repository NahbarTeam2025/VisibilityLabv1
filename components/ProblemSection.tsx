import React from 'react';

const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
      title: "Chaos Struktur",
      text: "Nutzer verlieren sich in unstrukturierten Menüs. Hohe Absprungraten sind die Folge, wenn die Website-Navigation unklar ist.",
      beamColor: "rgba(248, 113, 113, 0.6)",
      duration: "5s"
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="8.01"/><path d="M11 14v.01"/><path d="M8 11h.01"/><path d="M14 11h.01"/></svg>,
      title: "Unsichtbar",
      text: "Trotz guter Inhalte werden Sie bei Google nicht gefunden, weil die richtigen Keywords und die nötige Autorität fehlen.",
      beamColor: "rgba(248, 113, 113, 0.4)",
      duration: "7s"
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/><line x1="3" y1="3" x2="21" y2="21"/></svg>,
      title: "Lokal Verloren",
      text: "Lokale Kunden finden Ihre Konkurrenz. Wichtiger Umsatz geht verloren, weil Ihr Google Business Profil nicht optimiert ist.",
      beamColor: "rgba(248, 113, 113, 0.5)",
      duration: "6s"
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>,
      title: "KI-Blind",
      text: "ChatGPT & Co. können Ihre Informationen nicht verarbeiten. Sie verpassen die Zukunft der Suche.",
      beamColor: "rgba(248, 113, 113, 0.3)",
      duration: "8s"
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.7rem', fontWeight: '900', color: '#f87171', backgroundColor: 'rgba(248, 113, 113, 0.1)', border: '1px solid rgba(248, 113, 113, 0.2)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Herausforderungen
          </div>
          <h2 className="text-4xl font-black mb-8">Erkennen Sie sich wieder?</h2>
          <p style={{ fontSize: '1.125rem', color: '#94a3b8', maxWidth: '36rem', margin: '0 auto 2rem', fontWeight: '300' }}>
            Entwickelt für KMU, Organisationen und Kommunen, die digitale Komplexität in einen klaren Wettbewerbsvorteil verwandeln wollen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md-grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="glass-panel border-beam-card" style={{ 
              padding: '2.5rem', 
              borderRadius: '1.5rem',
              ['--beam-color' as any]: item.beamColor,
              ['--beam-duration' as any]: item.duration
            }}>
              <div style={{ marginBottom: '1.5rem', width: '56px', height: '56px', borderRadius: '14px', backgroundColor: 'rgba(255,255,255,0.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f87171' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>{item.title}</h3>
              <p style={{ color: '#94a3b8', fontWeight: '300', lineHeight: '1.6' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;