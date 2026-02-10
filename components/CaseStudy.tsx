import React, { useEffect, useState, useRef } from 'react';

// Erweiterte Komponente für animierte Zahlen (unterstützt Start- und Endwerte)
const CountUp: React.FC<{ start?: number; end: number; suffix?: string; prefix?: string; duration?: number }> = ({ 
  start = 0, 
  end, 
  suffix = '', 
  prefix = '',
  duration = 2000 
}) => {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function für smoothes Hoch/Runterzählen (easeOutExpo)
      const easeVal = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      // Berechnung basierend auf Start- und Endwert
      const currentCount = start + (end - start) * easeVal;
      setCount(Math.round(currentCount));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

const CaseStudy: React.FC = () => {
  return (
    <section id="case-study" className="py-32">
      <div className="container">
        {/* Main Grid: Wraps everything for correct alignment */}
        <div className="grid grid-cols-1 md-grid-cols-2 gap-12 md-items-start lg-gap-16">
          
          {/* Left Column: Contains both the intro and the story points */}
          <div className="flex flex-col gap-12 md-gap-20">
            {/* Intro Text */}
            <div>
              <div style={{ display: 'inline-block', padding: '0.4rem 1rem', borderRadius: '2rem', fontSize: '0.7rem', fontWeight: '900', color: '#a855f7', backgroundColor: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                CASE STUDY
              </div>
              <h2 className="font-black mb-8" style={{ fontSize: 'clamp(2.25rem, 10vw, 4rem)', lineHeight: 1.1, whiteSpace: 'nowrap' }}>Falkenberg/Elster</h2>
              <p style={{ color: '#cbd5e1', fontSize: '1.25rem', lineHeight: '1.7', maxWidth: '40rem' }}>
                Wie eine Stadtverwaltung von digitaler Unsichtbarkeit zu einer modernen Informationsdrehscheibe wurde.
              </p>
            </div>
            
            {/* Story Points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f87171', marginTop: '8px', flexShrink: 0 }}></div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Die Herausforderung</h3>
                  <p style={{ color: '#94a3b8', fontWeight: '300', lineHeight: '1.7', fontSize: '1.1rem' }}>
                    Wichtige Bürgerinformationen waren tief in PDF-Strukturen vergraben. Google-Rankings existierten für relevante lokale Begriffe kaum.
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#3b82f6', marginTop: '8px', flexShrink: 0 }}></div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Die Lösung</h3>
                  <p style={{ color: '#94a3b8', fontWeight: '300', lineHeight: '1.7', fontSize: '1.1rem' }}>
                    Implementierung einer Hub-and-Spoke Architektur. Aufbrechen von PDFs in indexierbare Web-Inhalte. GEO-Targeting für umliegende Gemeinden.
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981', marginTop: '8px', flexShrink: 0 }}></div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Das Ergebnis</h3>
                  <p style={{ color: '#94a3b8', fontWeight: '300', lineHeight: '1.7', fontSize: '1.1rem' }}>
                    Explosion der organischen Reichweite. Die Stadt ist nun für über 500 relevante Keywords auf Seite 1, was zu einer Verdreifachung qualifizierter Bürgeranfragen führte.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Stats Dashboard */}
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.05))', 
            padding: '3rem', 
            borderRadius: '2.5rem',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'rgba(59, 130, 246, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>
              </div>
              <h4 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Live Impact</h4>
            </div>

            <div style={{ display: 'grid', gap: '2rem' }}>
              {/* Sichtbarkeit Kachel */}
              <div className="glass-panel border-beam-card" style={{ 
                padding: '2.5rem', 
                borderRadius: '1.5rem', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'center', 
                alignItems: 'center',
                textAlign: 'center',
                ['--beam-color' as any]: 'rgba(59, 130, 246, 0.7)',
                ['--beam-duration' as any]: '2.5s'
              }}>
                <div>
                  <div style={{ fontSize: '4rem', fontWeight: '900', lineHeight: '1' }}>+<CountUp end={240} suffix="%" /></div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '900', color: '#3b82f6', letterSpacing: '0.15em', marginTop: '0.75rem', textTransform: 'uppercase' }}>SICHTBARKEIT</div>
                </div>
              </div>
              
              {/* Lokale Rankings Kachel */}
              <div className="glass-panel border-beam-card" style={{ 
                padding: '2.5rem', 
                borderRadius: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                ['--beam-color' as any]: 'rgba(168, 85, 247, 0.7)',
                ['--beam-duration' as any]: '4s'
              }}>
                <div style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '1' }}>
                  <CountUp start={20} end={3} prefix="Top " />
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: '900', color: '#a855f7', letterSpacing: '0.15em', marginTop: '0.75rem', textTransform: 'uppercase' }}>LOKALE RANKINGS</div>
              </div>

              {/* Mini Kacheln */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="glass-panel border-beam-card" style={{ 
                  padding: '1.5rem', 
                  borderRadius: '1.5rem', 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  ['--beam-color' as any]: 'rgba(203, 213, 225, 0.3)',
                  ['--beam-duration' as any]: '6s'
                }}>
                  <div style={{ fontSize: '2.25rem', fontWeight: '900' }}>-<CountUp end={45} suffix="%" /></div>
                  <div style={{ fontSize: '0.65rem', fontWeight: '900', color: '#cbd5e1', letterSpacing: '0.1em', marginTop: '0.25rem' }}>ABSPRUNGRATE</div>
                </div>
                <div className="glass-panel border-beam-card" style={{ 
                  padding: '1.5rem', 
                  borderRadius: '1.5rem', 
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  ['--beam-color' as any]: 'rgba(16, 185, 129, 0.5)',
                  ['--beam-duration' as any]: '5s'
                }}>
                  <div style={{ fontSize: '2.25rem', fontWeight: '900' }}><CountUp end={100} suffix="%" /></div>
                  <div style={{ fontSize: '0.65rem', fontWeight: '900', color: '#cbd5e1', letterSpacing: '0.1em', marginTop: '0.25rem' }}>KI-READY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;