import React, { useState } from 'react';

interface ContactFormProps {
  onLegalClick?: (type: 'impressum' | 'datenschutz' | 'kontakt') => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onLegalClick }) => {
  const [formData, setFormData] = useState({ name: '', email: '', website: '', message: '' });
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Bitte akzeptieren Sie die Datenschutzbestimmungen.");
      return;
    }
    alert("Vielen Dank! Ihre Anfrage wurde gesendet.");
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', backgroundColor: 'transparent' }}>
      <div className="container">
        <div className="glass-panel" style={{ padding: '4rem 2.5rem', borderRadius: '3rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: 'rgba(168, 85, 247, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#a855f7', margin: '0 auto 2.5rem' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <h2 className="font-black mb-8" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', lineHeight: 1.1, hyphens: 'none' }}>Starten Sie die <span style={{whiteSpace: 'nowrap'}}>Transformation</span></h2>
            <p style={{ color: '#94a3b8', fontSize: '1.125rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>Eine kurze Nachricht genügt. Wir analysieren Ihre aktuelle Situation und melden uns mit konkreten Vorschlägen.</p>
          </div>
          
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            {/* Grid für die oberen 3 Felder */}
            <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-6">
              <div>
                <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cbd5e1' }}>NAME</label>
                <input 
                  type="text" 
                  placeholder="Max Mustermann"
                  required 
                  style={{ width: '100%', padding: '1.25rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem' }}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cbd5e1' }}>E-MAIL</label>
                <input 
                  type="email" 
                  placeholder="max@firma.de"
                  required 
                  style={{ width: '100%', padding: '1.25rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem' }}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="md-grid-cols-2 lg-grid-cols-1"> {/* Website nimmt auf mittleren screens ggf. volle Breite oder rückt nach */}
                <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cbd5e1' }}>WEBSITE</label>
                <input 
                  type="url" 
                  placeholder="https://www.ihre-firma.de"
                  required 
                  style={{ width: '100%', padding: '1.25rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem' }}
                  onChange={e => setFormData({...formData, website: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.75rem', fontWeight: '900', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cbd5e1' }}>NACHRICHT</label>
              <textarea 
                rows={5} 
                placeholder="Erzählen Sie uns kurz von Ihrem Projekt..."
                style={{ width: '100%', padding: '1.25rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '1rem', resize: 'none' }}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginTop: '0.5rem' }}>
              <input 
                type="checkbox" 
                id="privacy-optin" 
                required 
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                style={{ marginTop: '0.25rem', cursor: 'pointer' }}
              />
              <label htmlFor="privacy-optin" style={{ color: '#94a3b8', fontSize: '0.875rem', cursor: 'pointer', lineHeight: '1.4' }}>
                Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und für Rückfragen dauerhaft gespeichert werden. Ich habe die{' '}
                <span 
                  style={{ color: '#3b82f6', textDecoration: 'underline', cursor: 'pointer' }}
                  onClick={(e) => {
                    e.preventDefault();
                    onLegalClick?.('datenschutz');
                  }}
                >
                  Datenschutzerklärung
                </span>{' '}
                gelesen und akzeptiere diese.
              </label>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <button type="submit" className="btn-primary" style={{ padding: '1.25rem 3rem', width: '100%', md: 'auto', justifyContent: 'center', fontSize: '1.125rem' }}>
                Analyse anfordern
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;