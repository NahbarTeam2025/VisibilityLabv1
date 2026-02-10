import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <section className="py-32">
            <div className="container">
                <div className="glass-panel" style={{ padding: '4rem 2rem', borderRadius: '3rem', textAlign: 'center' }}>
                    <div style={{ marginBottom: '3rem', position: 'relative', display: 'inline-block' }}>
                        <div style={{ 
                          width: '180px', 
                          height: '180px', 
                          borderRadius: '50%', 
                          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(168, 85, 247, 0.4))', 
                          margin: '0 auto', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          padding: '4px',
                          border: '1px solid rgba(255,255,255,0.1)'
                        }}>
                          <div style={{ width: '100%', height: '100%', borderRadius: '50%', backgroundColor: '#0D1F33', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          </div>
                        </div>
                    </div>
                    
                    <h2 className="font-black mb-8" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', lineHeight: 1.1 }}>Ihr direkter Ansprechpartner</h2>
                    
                    <p style={{ color: '#cbd5e1', fontSize: '1.125rem', lineHeight: '1.7', maxWidth: '36rem', margin: '0 auto 2.5rem', fontWeight: '300' }}>
                        Mein Name ist Robert Erbach. Seit über 15 Jahren helfe ich Unternehmen dabei, im digitalen Lärm sichtbar zu werden. Ich habe VisibilityLab entwickelt, weil ich überzeugt bin, dass nachhaltiger Erfolg nicht auf Tricks, sondern auf einer klaren, intelligenten Struktur basiert. Mein Ziel ist Ihr messbarer Erfolg.
                    </p>
                    
                    <button className="btn-primary" style={{ padding: '0.8rem 2rem' }}>Erfolg messbar machen</button>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;