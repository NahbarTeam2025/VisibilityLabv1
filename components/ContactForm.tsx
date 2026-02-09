import React, { useState } from 'react';
import { Send, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });
      setStatus('success');
      setFormData({ name: '', email: '', website: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-slate-900 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-slate-900 to-slate-900"></div>
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accentPurple/10 rounded-full blur-[100px] pointer-events-none translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 md:mb-20 reveal">
            <div className="inline-block p-4 rounded-2xl bg-gradient-to-br from-accentPurple/20 to-accentPurple/5 text-accentPurple mb-8 shadow-lg backdrop-blur-md border border-accentPurple/20 animate-float">
                <Mail className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-6 tracking-tighter drop-shadow-lg">
              Starten Sie die Transformation
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              Eine kurze Nachricht genügt. Wir analysieren Ihre aktuelle Situation und melden uns mit konkreten Vorschlägen.
            </p>
          </div>

          <div className="group glass-panel p-8 md:p-14 rounded-[2.5rem] border border-white/10 shadow-2xl reveal reveal-delay-200 relative overflow-hidden bg-slate-800/30 backdrop-blur-2xl">
            {/* Decorative Background Blobs */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accentBlue/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 transition-all duration-1000 group-hover:bg-accentBlue/30 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accentPurple/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 transition-all duration-1000 group-hover:bg-accentPurple/30 pointer-events-none"></div>

            {/* Subtle inner reflection */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {status === 'success' ? (
              <div className="text-center py-12 animate-pulse-glow-purple flex flex-col items-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500/20 to-green-500/5 text-green-400 rounded-full flex items-center justify-center mb-8 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Nachricht gesendet!</h3>
                <p className="text-slate-300 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                  Vielen Dank für Ihre Anfrage. Wir werden Ihre Website analysieren und uns in Kürze bei Ihnen melden.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="px-8 py-3.5 rounded-xl bg-slate-800/50 hover:bg-slate-700/80 text-white font-semibold transition-all border border-white/10 hover:border-white/20 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Neue Nachricht schreiben
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="w-full space-y-8 relative z-10"
                name="contact"
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3 group">
                    <label htmlFor="name" className="block text-sm font-bold text-white uppercase tracking-widest group-focus-within:text-accentPurple transition-colors ml-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-6 py-4 rounded-xl glass-input text-lg text-white placeholder-slate-400/70 transition-all duration-300 outline-none focus:ring-2 focus:ring-accentPurple/50 disabled:opacity-50 border border-white/10 hover:border-white/20 hover:bg-white/10 focus:bg-slate-900/60"
                      placeholder="Max Mustermann"
                    />
                  </div>

                  <div className="space-y-3 group">
                    <label htmlFor="email" className="block text-sm font-bold text-white uppercase tracking-widest group-focus-within:text-accentPurple transition-colors ml-1">E-Mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      className="w-full px-6 py-4 rounded-xl glass-input text-lg text-white placeholder-slate-400/70 transition-all duration-300 outline-none focus:ring-2 focus:ring-accentPurple/50 disabled:opacity-50 border border-white/10 hover:border-white/20 hover:bg-white/10 focus:bg-slate-900/60"
                      placeholder="max@firma.de"
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label htmlFor="website" className="block text-sm font-bold text-white uppercase tracking-widest group-focus-within:text-accentPurple transition-colors ml-1">Webseite</label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="w-full px-6 py-4 rounded-xl glass-input text-lg text-white placeholder-slate-400/70 transition-all duration-300 outline-none focus:ring-2 focus:ring-accentPurple/50 disabled:opacity-50 border border-white/10 hover:border-white/20 hover:bg-white/10 focus:bg-slate-900/60"
                    placeholder="https://www.ihre-firma.de"
                  />
                </div>

                <div className="space-y-3 group">
                  <label htmlFor="message" className="block text-sm font-bold text-white uppercase tracking-widest group-focus-within:text-accentPurple transition-colors ml-1">Nachricht</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="w-full px-6 py-4 rounded-xl glass-input text-lg text-white placeholder-slate-400/70 transition-all duration-300 outline-none resize-none focus:ring-2 focus:ring-accentPurple/50 disabled:opacity-50 border border-white/10 hover:border-white/20 hover:bg-white/10 focus:bg-slate-900/60"
                    placeholder="Erzählen Sie uns kurz von Ihrem Projekt..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 text-red-300 bg-red-500/10 p-4 rounded-xl border border-red-500/20 backdrop-blur-sm animate-pulse">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm font-medium">Fehler beim Senden. Bitte schreiben Sie direkt an roberterbach@web.de.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full group relative flex items-center justify-center px-8 py-5 text-xl font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:-translate-y-1 active:scale-[0.98] disabled:opacity-90 disabled:cursor-wait border border-white/10 ${status === 'submitting' ? 'bg-accentPurple/80' : 'bg-accentPurple hover:bg-accentPurpleHover'}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] transition-transform duration-1000 ${status === 'submitting' ? 'animate-[shine_1.5s_infinite]' : 'group-hover:translate-x-[100%]'}`}></div>
                  <span className="relative z-10 flex items-center gap-3 tracking-wide">
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-6 h-6 animate-spin text-white/90" />
                        <span className="animate-pulse">Wird gesendet...</span>
                      </>
                    ) : (
                      <>
                        Get Visibility
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </span>
                </button>
                
                <p className="text-center text-sm text-slate-500 mt-6 font-medium">
                  100% Kostenlos & Unverbindlich.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;