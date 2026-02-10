import React, { useState } from 'react';

interface NavbarProps {
  onLegalClick?: (type: 'impressum' | 'datenschutz' | 'kontakt') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLegalClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setOpenFaqIndex(null);
  };

  const handleLegalClick = (type: 'impressum' | 'datenschutz' | 'kontakt') => {
    onLegalClick?.(type);
    setIsMenuOpen(false);
  };

  const faqs = [
    {
      q: "Was genau macht das Hub-and-Spoke System?",
      a: "Es strukturiert Ihre Website in Themencluster. Ein zentraler 'Hub' (Hauptthema) wird durch viele 'Spokes' (Detailartikel) gestützt. Suchmaschinen erkennen Sie dadurch als Experten in Ihrer Nische an."
    },
    {
      q: "Wie unterscheidet ihr euch von klassischen SEO-Agenturen?",
      a: "Wir verkaufen keine Stundenkontingente, sondern implementieren ein fertiges technisches System. Wir kombinieren GEO-Targeting mit modernster KI-Optimierung für die Suche von morgen."
    },
    {
      q: "Ist das System auch für sehr kleine Unternehmen bezahlbar?",
      a: "Ja, da unser System modular aufgebaut ist. Es wächst mit Ihrem Erfolg. Wir bieten Pakete an, die speziell auf die Bedürfnisse von KMU und lokalen Dienstleistern zugeschnitten sind."
    },
    {
      q: "Kann ich das System mit meiner bestehenden Website nutzen?",
      a: "In den meisten Fällen ja. Wir können das VisibilityLab System oft nahtlos in bestehende CMS wie WordPress oder Webflow integrieren oder eine dedizierte Subdomain dafür aufbauen."
    },
    {
      q: "Warum ist GEO-Optimierung so wichtig?",
      a: "Über 46% aller Google-Suchen haben eine lokale Absicht. Ohne GEO-Optimierung werden Sie von Kunden in Ihrer unmittelbaren Nähe schlichtweg nicht gefunden."
    }
  ];

  return (
    <nav className="fixed w-full z-50 py-3" style={{ 
      background: 'rgba(13, 31, 51, 0.85)', 
      backdropFilter: 'blur(16px)', 
      borderBottom: '1px solid rgba(255,255,255,0.08)',
    }}>
      <div className="container flex justify-between items-center">
        {/* Logo Bereich */}
        <div className="flex items-center gap-2">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexShrink: 0 
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: '900', letterSpacing: '-0.02em', marginLeft: '4px' }}>
            Visibility<span style={{ color: '#3b82f6' }}>Lab</span>
          </span>
        </div>
        
        {/* Burger Menü Icon */}
        <button 
          onClick={toggleMenu} 
          style={{ 
            background: 'transparent', 
            border: 'none', 
            cursor: 'pointer', 
            color: 'white',
            display: 'flex',
            padding: '4px'
          }}
          aria-label="Menü"
        >
          {isMenuOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Menü Overlay mit FAQ */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          maxHeight: 'calc(100vh - 100%)',
          background: '#0D1F33',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
          overflowY: 'auto'
        }}>
          {/* FAQ Section oben platziert für bessere Sichtbarkeit */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: '900', color: '#3b82f6', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>HÄUFIGE FRAGEN (FAQ)</div>
            {faqs.map((faq, index) => (
              <div key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '0.75rem' }}>
                <button 
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  style={{ 
                    width: '100%', 
                    textAlign: 'left', 
                    background: 'none', 
                    border: 'none', 
                    padding: 0, 
                    fontSize: '0.95rem', 
                    fontWeight: '600', 
                    color: openFaqIndex === index ? '#3b82f6' : '#cbd5e1', 
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'between',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ flex: 1, paddingRight: '1rem' }}>{faq.q}</span>
                  <span style={{ fontSize: '1.2rem', transition: 'transform 0.3s', transform: openFaqIndex === index ? 'rotate(45deg)' : 'rotate(0)' }}>+</span>
                </button>
                {openFaqIndex === index && (
                  <div style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: '#94a3b8', lineHeight: '1.6', animation: 'fadeIn 0.3s ease' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.05)' }} />

          {/* Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ fontSize: '0.65rem', fontWeight: '900', color: '#64748b', letterSpacing: '0.15em', marginBottom: '0.25rem' }}>RECHTLICHES</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              <button 
                onClick={() => handleLegalClick('impressum')} 
                style={{ background: 'none', border: 'none', padding: 0, fontSize: '1rem', fontWeight: '700', color: 'white', cursor: 'pointer' }}
              >
                Impressum
              </button>
              <button 
                onClick={() => handleLegalClick('datenschutz')} 
                style={{ background: 'none', border: 'none', padding: 0, fontSize: '1rem', fontWeight: '700', color: 'white', cursor: 'pointer' }}
              >
                Datenschutz
              </button>
              <button 
                onClick={() => handleLegalClick('kontakt')} 
                style={{ background: 'none', border: 'none', padding: 0, fontSize: '1rem', fontWeight: '700', color: '#3b82f6', cursor: 'pointer' }}
              >
                Kontakt
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;