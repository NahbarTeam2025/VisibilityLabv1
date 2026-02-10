import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToCaseStudy = () => {
    document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center py-24 overflow-hidden">
      <style>{`
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); opacity: 0.3; }
          50% { transform: translate(20px, -30px); opacity: 0.6; }
        }
        
        @keyframes spoke-pulse {
          0%, 100% { opacity: 0.1; stroke-dashoffset: 100; }
          50% { opacity: 0.4; stroke-dashoffset: 0; }
        }

        @keyframes core-glow {
          0%, 100% { transform: scale(1); filter: blur(20px); opacity: 0.5; }
          50% { transform: scale(1.1); filter: blur(35px); opacity: 0.8; }
        }

        .network-node {
          fill: #007ACC;
          filter: drop-shadow(0 0 8px rgba(0, 122, 204, 0.6));
        }

        .network-node-alt {
          fill: #8E44AD;
          filter: drop-shadow(0 0 8px rgba(142, 68, 173, 0.6));
        }

        .network-spoke {
          stroke: rgba(255, 255, 255, 0.15);
          stroke-dasharray: 5;
          animation: spoke-pulse 8s linear infinite;
        }

        .hero-bg-accent-1 {
          position: absolute;
          top: 20%;
          left: 15%;
          width: 30vw;
          height: 30vw;
          background: radial-gradient(circle, rgba(0, 122, 204, 0.15) 0%, transparent 70%);
          filter: blur(60px);
          z-index: 0;
        }

        .hero-bg-accent-2 {
          position: absolute;
          bottom: 10%;
          right: 15%;
          width: 35vw;
          height: 35vw;
          background: radial-gradient(circle, rgba(142, 68, 173, 0.15) 0%, transparent 70%);
          filter: blur(80px);
          z-index: 0;
        }

        .hub-spoke-svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          opacity: 0.7;
        }

        .floating-node {
          animation: float-particle 10s ease-in-out infinite;
        }

        /* Improved clipping fix for animated text */
        .hero-title-system {
          background: linear-gradient(270deg, #007ACC, #06b6d4, #8E44AD, #007ACC);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-flow 6s ease infinite;
          display: inline-block;
        }

        .hero-subheading {
          font-size: 1.25rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: #94a3b8;
          text-transform: uppercase;
          opacity: 0.9;
          margin-top: -0.5rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .hero-subheading {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>

      {/* Background Decor */}
      <div className="hero-bg-accent-1"></div>
      <div className="hero-bg-accent-2"></div>
      
      {/* Central Hub Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, #007ACC 0%, transparent 70%)',
        animation: 'core-glow 6s ease-in-out infinite',
        zIndex: 0
      }}></div>

      {/* Hub and Spoke Network Visualization */}
      <svg className="hub-spoke-svg" viewBox="0 0 800 800">
        <g className="network-spokes">
          <line className="network-spoke" x1="400" y1="400" x2="200" y2="250" style={{ animationDelay: '0s' }} />
          <line className="network-spoke" x1="400" y1="400" x2="600" y2="300" style={{ animationDelay: '1s' }} />
          <line className="network-spoke" x1="400" y1="400" x2="550" y2="600" style={{ animationDelay: '2s' }} />
          <line className="network-spoke" x1="400" y1="400" x2="250" y2="550" style={{ animationDelay: '3.5s' }} />
          <line className="network-spoke" x1="400" y1="400" x2="400" y2="150" style={{ animationDelay: '0.5s' }} />
          <line className="network-spoke" x1="400" y1="400" x2="700" y2="450" style={{ animationDelay: '4s' }} />
        </g>
        <circle className="network-node floating-node" cx="200" cy="250" r="6" style={{ animationDelay: '0s' }} />
        <circle className="network-node-alt floating-node" cx="600" cy="300" r="5" style={{ animationDelay: '1.5s' }} />
        <circle className="network-node floating-node" cx="550" cy="600" r="7" style={{ animationDelay: '3s' }} />
        <circle className="network-node-alt floating-node" cx="250" cy="550" r="4" style={{ animationDelay: '2.2s' }} />
        <circle className="network-node floating-node" cx="400" cy="150" r="5" style={{ animationDelay: '1s' }} />
        <circle className="network-node-alt floating-node" cx="700" cy="450" r="6" style={{ animationDelay: '4.5s' }} />
        <circle cx="400" cy="400" r="30" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        <circle cx="400" cy="400" r="60" fill="transparent" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
      </svg>

      <div className="container z-10">
        <div className="flex flex-col items-center gap-3 mb-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-0.02em' }}>
              Visibility<span style={{ color: '#3b82f6' }}>Lab</span>
            </span>
          </div>

          {/* by Robert Erbach */}
          <div style={{ 
            fontSize: '0.9rem', 
            fontWeight: '600', 
            color: '#94a3b8', 
            letterSpacing: '0.05em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            opacity: 0.9
          }}>
            <span style={{ color: '#3b82f6', opacity: 0.6, fontWeight: '400', fontStyle: 'italic' }}>by</span> 
            <span style={{ color: 'white' }}>Robert Erbach</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight" style={{ lineHeight: '1.2', textShadow: '0 4px 20px rgba(0,0,0,0.6)' }}>
          Sichtbarkeit durch <br/>
          <span className="hero-title-system">System.</span>
        </h1>

        <div className="hero-subheading">
          Next Level SEO architecture
        </div>
        
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#cbd5e1',
          maxWidth: '38rem', 
          margin: '0 auto 3.5rem',
          lineHeight: '1.7',
          textShadow: '0 2px 10px rgba(0,0,0,0.4)',
          fontWeight: '300'
        }}>
          VisibilityLab ist Ihr KI-gestütztes System, das komplexe Daten in eine klare Hub-and-Spoke Architektur verwandelt. Dominieren Sie Ihre Nische – lokal, global und im KI-Web der Zukunft.
        </p>

        <div className="flex flex-col gap-8 items-center">
          <button onClick={scrollToContact} className="btn-primary btn-shimmer" style={{ 
            justifyContent: 'center',
            background: 'linear-gradient(to right, #007ACC, #2563eb)',
            boxShadow: '0 12px 24px -6px rgba(0, 122, 204, 0.5)',
            padding: '1.25rem 2.5rem',
            fontSize: '1.1rem'
          }}>
            Kostenlose Visibility-Analyse &rarr;
          </button>
          
          <button 
            onClick={scrollToCaseStudy} 
            style={{ 
              background: 'rgba(13, 31, 51, 0.4)', 
              backdropFilter: 'blur(8px)',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.75rem',
              color: '#cbd5e1', 
              border: '1px solid rgba(255,255,255,0.1)', 
              fontWeight: '700', 
              fontSize: '1rem', 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '0.75rem',
              marginTop: '0.5rem',
              transition: 'all 0.3s ease-in-out'
            }}
            onMouseOver={(e) => e.currentTarget.style.borderColor = 'rgba(142, 68, 173, 0.4)'}
            onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
          >
            Case Study ansehen <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#8E44AD', boxShadow: '0 0 10px #8E44AD' }}></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;