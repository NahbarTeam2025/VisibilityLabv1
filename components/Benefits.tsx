import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>, text: "Blitzschnelle Ladezeiten" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-4"/></svg>, text: "Kristallklare Reports" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, text: "Automatisierte Prozesse" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="7 7 17 7 17 17"/><line x1="7" y1="17" x2="17" y2="7"/></svg>, text: "Exponentielles Wachstum" },
    { icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>, text: "Lokale Marktführerschaft" }
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="glass-panel" style={{ padding: '3rem 2.5rem', borderRadius: '2.5rem' }}>
          
          <div className="grid grid-cols-1 md-grid-cols-2 gap-12 items-center">
            {/* Left Col */}
            <div>
              <h2 className="text-4xl font-black mb-8 leading-tight">
                Ihr Vorteil: <br/>
                <span style={{ 
                  color: '#06b6d4', 
                  fontSize: 'clamp(1rem, 5.8vw, 2.5rem)',
                  display: 'block',
                  maxWidth: '100%',
                  letterSpacing: '-0.04em',
                  lineHeight: '1.1',
                  overflowWrap: 'break-word',
                  hyphens: 'none'
                }}>
                  Wettbewerbsvorsprung.
                </span>
              </h2>
              <p style={{ fontSize: '1.125rem', color: '#cbd5e1', fontWeight: '300', lineHeight: '1.7', marginBottom: '2rem' }}>
                Während Ihre Konkurrenz noch versucht, SEO zu verstehen, dominieren Sie bereits die Suchergebnisse. Investieren Sie in ein System, das messbare Ergebnisse liefert.
              </p>
            </div>
            
            {/* Right Col */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {benefits.map((benefit, index) => (
                <div key={index} className="glass-panel" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  padding: '1.25rem', 
                  borderRadius: '1.25rem',
                  border: 'none', // Overriding to keep it clean since it's nested
                  backgroundColor: 'rgba(255,255,255,0.03)',
                  transition: 'transform 0.2s',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                >
                  <div style={{ color: '#3b82f6', display: 'flex', alignItems: 'center', flexShrink: 0 }}>{benefit.icon}</div>
                  <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;