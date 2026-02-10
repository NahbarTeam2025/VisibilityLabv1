import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-32">
      <div className="container text-center">
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 4rem', boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
            <path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3z"/>
          </svg>
        </div>
        
        <blockquote style={{ fontSize: '2.5rem', fontWeight: '900', lineHeight: '1.3', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
          „VisibilityLab hat unsere Website endlich strukturiert und sichtbar gemacht. Wir erreichen Bürger nun dort, wo sie suchen.“
        </blockquote>
        
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'inline-block' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.5rem' }}>Stadtverwaltung</div>
          <div style={{ color: '#3b82f6', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.875rem' }}>Falkenberg/Elster</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;