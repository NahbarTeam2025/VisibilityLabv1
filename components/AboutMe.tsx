import React from 'react';
import { User } from 'lucide-react';

const AboutMe: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-deepBlue relative">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 rounded-[2.5rem] reveal">
                    <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
                        <div className="md:col-span-1 flex justify-center">
                             <div className="relative w-48 h-48 rounded-full group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-accentBlue to-accentPurple rounded-full blur opacity-60 group-hover:opacity-80 transition-opacity duration-700 animate-pulse-slow"></div>
                                <div className="relative w-full h-full bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-700">
                                    {/* Placeholder for Photo */}
                                    <User className="w-24 h-24 text-slate-500" />
                                </div>
                             </div>
                        </div>
                        <div className="md:col-span-2 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-4 tracking-tight">
                                Ihr direkter Ansprechpartner
                            </h2>
                            <p className="text-lg text-slate-300 font-light leading-relaxed">
                                Mein Name ist Robert Erbach. Seit über 15 Jahren helfe ich Unternehmen dabei, im digitalen Lärm sichtbar zu werden. Ich habe VisibilityLab entwickelt, weil ich überzeugt bin, dass nachhaltiger Erfolg nicht auf Tricks, sondern auf einer klaren, intelligenten Struktur basiert. Mein Ziel ist Ihr messbarer Erfolg.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
