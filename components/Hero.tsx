import React, { useEffect, useRef } from 'react';
import { ArrowRight, Network, Radio, Globe, Database, Search, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current && window.innerWidth > 768) {
        // Move text slightly slower than scroll (0.3 speed) for better control
        // Opacity fade starts later (after 100px) and is more gradual
        const scrollY = window.scrollY;
        const opacity = scrollY > 100 ? 1 - (scrollY - 100) / 800 : 1;
        
        textRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
        textRef.current.style.opacity = `${Math.max(0, opacity)}`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Canvas Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseX: number;
      baseY: number;
      density: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.density = (Math.random() * 20) + 1;
        
        // Colors: #007ACC, #06B6D4, #8E44AD
        const colors = ['rgba(0, 122, 204, 0.8)', 'rgba(6, 182, 212, 0.8)', 'rgba(142, 68, 173, 0.8)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        
        if (distance < maxDistance) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (maxDistance - distance) / maxDistance;
            const directionX = forceDirectionX * force * this.density;
            const directionY = forceDirectionY * force * this.density;
            this.x -= directionX;
            this.y -= directionY;
        }

        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.min(window.innerWidth / 8, 120); 
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            // Use accentBlue (#007ACC) for lines
            ctx.strokeStyle = `rgba(0, 122, 204, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-deepBlue">
      {/* Coded Logo Brand - Top Left */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 z-50 pointer-events-auto flex items-center gap-2 group cursor-default">
         <div className="relative w-11 h-11 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-105">
            {/* Magnifying Glass */}
            <Search className="w-full h-full text-accentBlue drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" strokeWidth={2.5} />
            
            {/* Analytics Bars inside glass */}
            <div className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-[45%] flex items-end gap-[2px] md:gap-[3px] h-4 md:h-5">
                <div className="w-1 md:w-1.5 h-[40%] bg-white rounded-t-[1px] shadow-[0_0_5px_white]"></div>
                <div className="w-1 md:w-1.5 h-[70%] bg-white rounded-t-[1px] shadow-[0_0_5px_white]"></div>
                <div className="w-1 md:w-1.5 h-[100%] bg-white rounded-t-[1px] shadow-[0_0_5px_white]"></div>
            </div>

            {/* Location Pin Overlay */}
            <div className="absolute -top-1 -right-1 md:-right-2 filter drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]">
                <div className="relative">
                    {/* Background to mask the glass line behind pin */}
                    <div className="absolute inset-1 bg-deepBlue rounded-full"></div>
                    <MapPin className="relative w-5 h-5 md:w-7 md:h-7 text-accentPurple fill-accentPurple/20" />
                    {/* Circuit dot inside pin */}
                    <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[2px] h-[2px] bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-[2px] w-[1px] h-[3px] bg-white/50"></div>
                </div>
            </div>
         </div>
         
         {/* Text Brand */}
         <div className="flex flex-col justify-center leading-none select-none">
            <span className="text-2xl md:text-3xl font-heading font-black tracking-tighter text-white drop-shadow-md">
                Visibility<span className="text-accentPurple">Lab</span>
            </span>
         </div>
      </div>

      {/* Signature Label */}
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50 pointer-events-auto">
        <span className="font-heading text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/20 hover:text-accentPurple transition-all duration-500 cursor-default uppercase">
            by Robert
        </span>
      </div>

      {/* Canvas Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
      />

      {/* Static Gradient Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-accentBlue/30 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-accentPurple/30 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-accentCyan/30 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-deepBlue/90 pointer-events-none"></div>
      </div>

      <div className="container mx-auto z-10 px-4 sm:px-6 lg:px-8 pt-32 pb-10 lg:pt-48 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content with Parallax Ref */}
          <div ref={textRef} className="order-2 lg:order-1 space-y-10 lg:pr-8 text-center lg:text-left transition-transform will-change-transform">
            
            {/* Primary Headline: Massive Brand Name with Sleek Gradient */}
            <div className="reveal">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-accentBlue to-accentPurple drop-shadow-[0_0_25px_rgba(0,122,204,0.3)] select-none animate-gradient bg-[length:200%_auto]">
                VisibilityLab
              </h1>
            </div>

            {/* Secondary Headline / Subhead */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 tracking-tight leading-tight reveal reveal-delay-200">
              Digitale Dominanz <br className="hidden sm:block" />
              <span className="text-accentPurple relative inline-block">
                durch Struktur.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accentPurple opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l-0 lg:border-l-4 border-accentBlue/40 lg:pl-8 reveal reveal-delay-300">
              Wir verwandeln unsichtbare Websites in leistungsstarke Hubs. Maximieren Sie Ihre Reichweite durch intelligente SEO-Strategien und Hub-and-Spoke Architekturen.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4 justify-center lg:justify-start reveal reveal-delay-400">
              {/* Primary CTA with Enhanced Pulsing Glow */}
              <button 
                onClick={scrollToContact}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-accentBlue rounded-full overflow-hidden transition-all duration-300 hover:scale-105 animate-pulse-glow-blue active:scale-[0.98] active:brightness-110"
              >
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
                <span className="relative z-10 flex items-center gap-2 tracking-wide">
                  Jetzt Sichtbarkeit steigern
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              
              {/* Secondary CTA */}
              <button 
                onClick={() => document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' })} 
                className="w-full sm:w-auto px-10 py-5 text-lg font-bold text-gray-300 hover:text-white transition-all flex items-center justify-center gap-3 group hover:bg-white/5 rounded-full border border-white/5 hover:border-white/20 active:scale-[0.98] active:bg-white/10"
              >
                Case Study ansehen
                <span className="w-8 h-[2px] bg-gray-500 group-hover:bg-white group-hover:w-12 transition-all duration-300"></span>
              </button>
            </div>
            
          </div>

          {/* Dynamic Hub and Spoke Visual */}
          <div className="order-1 lg:order-2 relative flex justify-center items-center perspective-1000 reveal reveal-delay-200">
             <div className="relative w-full max-w-[650px] aspect-square animate-float">
                
                {/* Central Hub Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-accentBlue/20 rounded-full blur-[90px] animate-pulse-slow"></div>

                {/* Main Hub Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                   
                   {/* Center Core Hub */}
                   <div className="relative w-40 h-40 md:w-52 md:h-52 glass-card rounded-full flex items-center justify-center border-2 border-accentCyan/30 shadow-[0_0_60px_rgba(6,182,212,0.4)] z-20 hover:scale-110 transition-transform duration-500 bg-techBlue/50 group cursor-pointer active:scale-95">
                      <div className="absolute inset-0 bg-accentCyan/10 rounded-full animate-pulse"></div>
                      <div className="absolute inset-[-6px] rounded-full border border-accentCyan/20 animate-spin-slow"></div>
                      <Network className="w-16 h-16 md:w-20 md:h-20 text-accentCyan drop-shadow-lg group-hover:text-white transition-colors duration-500 group-hover:scale-110" />
                   </div>

                   {/* Orbital Rings */}
                   <div className="absolute w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full border border-white/5 animate-spin-slow pointer-events-none">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3 h-3 bg-accentCyan rounded-full shadow-[0_0_15px_#06B6D4]"></div>
                   </div>
                   <div className="absolute w-[480px] h-[480px] md:w-[600px] md:h-[600px] rounded-full border border-dashed border-white/10 animate-spin-reverse-slow pointer-events-none"></div>

                   {/* --- Spoke 1: Top Right (Data Source) --- */}
                   <div className="absolute top-[8%] right-[8%] flex flex-col items-center animate-float" style={{ animationDelay: '0.5s' }}>
                      <div className="relative z-10 p-5 glass rounded-2xl border border-accentPurple/40 shadow-lg group hover:border-accentPurple hover:shadow-[0_0_35px_rgba(142,68,173,0.4)] transition-all cursor-pointer hover:-translate-y-3 hover:scale-105 bg-techBlue/60 active:scale-95 duration-300">
                         <Radio className="w-8 h-8 text-accentPurple group-hover:animate-bounce group-hover:text-white transition-colors" />
                      </div>
                      {/* Animated Line */}
                      <svg className="absolute top-full right-full w-32 h-32 pointer-events-none -mr-10 -mt-10 hidden md:block overflow-visible">
                         <path 
                           d="M100,20 Q60,60 20,100" 
                           fill="none" 
                           stroke="#8E44AD" 
                           strokeWidth="2" 
                           strokeDasharray="6,6"
                           className="animate-dash opacity-60"
                         />
                      </svg>
                   </div>

                   {/* --- Spoke 2: Bottom Left (Status) --- */}
                   <div className="absolute bottom-[15%] left-[0%] flex flex-col items-center animate-float" style={{ animationDelay: '1.5s' }}>
                      <div className="relative z-10 p-5 glass rounded-2xl border border-accentBlue/40 shadow-lg flex items-center gap-4 pr-6 hover:scale-110 hover:-translate-y-1 hover:border-accentBlue/80 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition-all bg-techBlue/60 cursor-pointer active:scale-95 duration-300">
                         <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse-fast shadow-[0_0_12px_#4ade80]"></div>
                         <div>
                            <div className="text-[11px] text-gray-400 uppercase tracking-wider font-bold">Status</div>
                            <div className="text-base font-bold text-white">Indexiert</div>
                         </div>
                      </div>
                      {/* Animated Line */}
                      <svg className="absolute bottom-full left-full w-40 h-40 pointer-events-none -ml-6 -mb-6 hidden md:block overflow-visible">
                         <path 
                           d="M20,100 Q60,60 100,20" 
                           fill="none" 
                           stroke="#007ACC" 
                           strokeWidth="2"
                           strokeDasharray="6,6" 
                           className="animate-dash opacity-60"
                         />
                      </svg>
                   </div>

                   {/* --- Spoke 3: Bottom Right (Rank) --- */}
                   <div className="absolute bottom-[8%] right-[10%] animate-float" style={{ animationDelay: '2.5s' }}>
                       <div className="glass px-7 py-5 rounded-2xl border border-white/10 flex items-center gap-4 shadow-xl backdrop-blur-md bg-techBlue/60 hover:border-accentCyan/80 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all cursor-pointer hover:-translate-y-2 hover:scale-105 active:scale-95 duration-300 group">
                           <Globe className="w-6 h-6 text-accentCyan group-hover:rotate-12 transition-transform" />
                           <span className="text-base font-bold text-white group-hover:text-accentCyan transition-colors">SEO Rank #1</span>
                       </div>
                   </div>

                   {/* --- Spoke 4: Top Left (Database) --- */}
                   <div className="absolute top-[18%] left-[10%] animate-float" style={{ animationDelay: '1s' }}>
                       <div className="w-16 h-16 glass rounded-full flex items-center justify-center border border-white/10 shadow-lg bg-techBlue/60 hover:bg-techBlue hover:border-white/50 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all cursor-pointer group hover:scale-125 active:scale-95 duration-300">
                           <Database className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors" />
                       </div>
                   </div>

                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;