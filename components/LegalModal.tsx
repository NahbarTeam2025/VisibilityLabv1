import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'impressum' | 'datenschutz' | 'kontakt' | null;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen || !type) return null;

  const content = {
    impressum: {
      title: "Impressum",
      body: (
        <>
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>Angaben gemäß § 5 TMG</h3>
          <p>Robert Erbach<br />VisibilityLab<br />Musterstraße 1<br />12345 Musterstadt</p>
          
          <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Kontakt</h3>
          <p>Telefon: +49 (0) 123 456789<br />E-Mail: hallo@visibilitylab.de</p>
          
          <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Umsatzsteuer-ID</h3>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />DE 123 456 789</p>
          
          <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>Redaktionell verantwortlich</h3>
          <p>Robert Erbach<br />Musterstraße 1<br />12345 Musterstadt</p>
          
          <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>EU-Streitschlichtung</h3>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>https://ec.europa.eu/consumers/odr/</a>.<br />Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
        </>
      )
    },
    datenschutz: {
      title: "Datenschutzerklärung",
      body: (
        <>
          <h3 style={{ color: 'white', marginBottom: '1rem' }}>1. Datenschutz auf einen Blick</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          
          <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>2. Datenerfassung auf dieser Website</h3>
          <p><strong>Verantwortliche Stelle:</strong><br />Robert Erbach, Musterstraße 1, 12345 Musterstadt.<br />E-Mail: hallo@visibilitylab.de</p>
          <p><strong>SSL- bzw. TLS-Verschlüsselung:</strong><br />Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung.</p>
          
          <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>3. Datenverarbeitung durch CDN (esm.sh)</h3>
          <p>Wir nutzen den Dienst esm.sh, um Programmbibliotheken (wie React) schnell und effizient bereitzustellen. Hierbei wird technisch bedingt Ihre IP-Adresse an die Server von esm.sh übertragen. Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer stabilen und schnellen Website-Bereitstellung).</p>

          <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>4. Kontaktformular</h3>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
          
          <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>5. Ihre Rechte</h3>
          <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Zudem haben Sie ein Beschwerderecht bei der zuständigen Aufsichtsbehörde.</p>
        </>
      )
    },
    kontakt: {
      title: "Kontaktinformationen",
      body: (
        <>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Wir freuen uns auf Ihre Nachricht.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: '#3b82f6' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}>E-MAIL</div>
                <div style={{ fontSize: '1.125rem' }}>hallo@visibilitylab.de</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: '#3b82f6' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}>TELEFON</div>
                <div style={{ fontSize: '1.125rem' }}>+49 (0) 123 456789</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ color: '#3b82f6' }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <div>
                <div style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#64748b' }}>ADRESSE</div>
                <div style={{ fontSize: '1.125rem' }}>VisibilityLab<br />Musterstraße 1<br />12345 Musterstadt</div>
              </div>
            </div>
          </div>
        </>
      )
    }
  }[type];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(2, 6, 23, 0.9)',
      backdropFilter: 'blur(20px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }} onClick={onClose}>
      <div 
        style={{
          width: '100%',
          maxWidth: '700px',
          maxHeight: '85vh',
          backgroundColor: '#0D1F33',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '2rem',
          padding: '2.5rem',
          position: 'relative',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }} 
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            background: 'rgba(255,255,255,0.05)',
            border: 'none',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '2rem', color: 'white' }}>{content.title}</h2>
        
        <div style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '1rem' }}>
          {content.body}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;