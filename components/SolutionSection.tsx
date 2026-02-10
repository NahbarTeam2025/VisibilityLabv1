import React from 'react';

const SolutionSection: React.FC = () => {
  const solutions = [
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>, title: "Website- & Marktanalyse", desc: "Detaillierte Analyse des Ist-Zustands.", beamColor: "rgba(59, 130, 246, 0.5)", duration: "4s" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/></svg>, title: "Keyword- & Themenstrategie", desc: "Gezielte Identifikation von Short- & Longtail-Keywords.", beamColor: "rgba(6, 182, 212, 0.5)", duration: "5.5s" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>, title: "Hub-and-Spoke Architektur", desc: "Logische, sternförmige Inhaltsstruktur für maximale Themenautorität.", beamColor: "rgba(168, 85, 247, 0.5)", duration: "3.5s" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/></svg>, title: "Premium Content", desc: "Inhalte für Mensch und Maschine.", beamColor: "rgba(59, 130, 246, 0.4)", duration: "7s" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, title: "GEO-Optimierung", desc: "Dominanz in der lokalen Suche für KMU und Organisationen.", beamColor: "rgba(6, 182, 212, 0.4)", duration: "6.5s" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"/></svg>, title: "Tech SEO", desc: "Core Web Vitals & strukturierte Daten.", beamColor: "rgba(168, 85, 247, 0.4)", duration: "5s" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>, title: "Authority Building", desc: "Backlinks & digitale PR.", beamColor: "rgba(59, 130, 246, 0.6)", duration: "4.2s" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>, title: "Analytics & Reporting", desc: "Erfolg wird messbar gemacht.", beamColor: "rgba(6, 182, 212, 0.6)", duration: "3s" },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="py-32">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.7rem', fontWeight: '900', color: '#3b82f6', backgroundColor: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            DIE BAUSTEINE DES SYSTEMS
          </div>
          <h2 className="text-4xl font-black mb-8">Die <span className="text-gradient" style={{whiteSpace: 'nowrap'}}>VisibilityLab</span> Bausteine</h2>
          <p style={{ color: '#94a3b8', maxWidth: '32rem', margin: '0 auto', lineHeight: '1.6' }}>Wir reparieren nicht nur – wir transformieren. Ein ganzheitlicher Prozess für nachhaltige digitale Dominanz, verpackt in modernste Technologie.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="glass-panel spotlight-card border-beam-card" 
              style={{ 
                padding: '2rem', 
                borderRadius: '1.5rem',
                ['--beam-color' as any]: item.beamColor,
                ['--beam-duration' as any]: item.duration
              } as React.CSSProperties}
              onMouseMove={handleMouseMove}
            >
              <div style={{ color: '#3b82f6', marginBottom: '1.5rem', width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(59, 130, 246, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.9375rem', fontWeight: '300' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;