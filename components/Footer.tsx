import React from 'react';

interface FooterProps {
  onLegalClick?: (type: 'impressum' | 'datenschutz' | 'kontakt') => void;
}

const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  return (
    <footer style={{
      padding: '2rem 0', // Reduzierter Padding für ein kompakteres Design
      backgroundColor: '#0D1F33',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container">
        <div className="flex flex-col md-flex-row justify-between items-center gap-6">
          {/* Logo & Info */}
          <div className="flex items-center gap-2">
            <div style={{ 
              width: '20px', 
              height: '20px', 
              borderRadius: '4px', 
              background: 'linear-gradient(135deg, #3b82f6, #06b6d4)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
                <path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span style={{ fontSize: '1rem', fontWeight: '900' }}>VisibilityLab</span>
            <span style={{ color: '#475569', fontSize: '0.75rem', marginLeft: '0.5rem', display: 'none', md: 'inline' }}>| Strategisches Wachstum</span>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button 
              onClick={() => onLegalClick?.('impressum')}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#3b82f6'}
              onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}
            >
              Impressum
            </button>
            <button 
              onClick={() => onLegalClick?.('datenschutz')}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#3b82f6'}
              onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}
            >
              Datenschutz
            </button>
            <button 
              onClick={() => onLegalClick?.('kontakt')}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', color: '#64748b', fontSize: '0.8rem', fontWeight: '600', transition: 'color 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.color = '#3b82f6'}
              onMouseOut={(e) => e.currentTarget.style.color = '#64748b'}
            >
              Kontakt
            </button>
          </div>

          {/* Copyright */}
          <div style={{ fontSize: '0.75rem', color: '#475569', fontWeight: '500' }}>
            &copy; {new Date().getFullYear()} VisibilityLab
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;