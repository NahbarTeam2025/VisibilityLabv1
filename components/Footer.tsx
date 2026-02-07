import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-white/5 bg-[#020617]/90 backdrop-blur-xl relative overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          
          {/* Copyright */}
          <div className="text-slate-400 text-xs md:text-sm font-light tracking-wide order-3 md:order-1 text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="text-slate-200 font-semibold">VisibilityLab</span>. Alle Rechte vorbehalten.
          </div>
          
          {/* Social */}
          <div className="order-1 md:order-2">
            <a 
              href="https://www.linkedin.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-accentBlue/30 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              aria-label="LinkedIn Profil besuchen"
            >
              <Linkedin className="w-3.5 h-3.5 text-slate-400 group-hover:text-accentBlue transition-colors" />
              <span className="text-xs font-medium text-slate-300 group-hover:text-white uppercase tracking-wider">Follow me</span>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-xs md:text-sm font-medium order-2 md:order-3 text-slate-400">
             <a href="#" className="hover:text-white transition-colors hover:text-accentBlue transition-all duration-300">
                Impressum
             </a>
             <a href="#" className="hover:text-white transition-colors hover:text-accentBlue transition-all duration-300">
                Datenschutz
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;