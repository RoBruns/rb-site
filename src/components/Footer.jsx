"use client";

import { Instagram, Linkedin, Mail, Youtube, Check } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
    const [emailCopied, setEmailCopied] = useState(false);

    const handleCopyEmail = async () => {
        try {
            await navigator.clipboard.writeText('contato@rodrigobruns.com.br');
            setEmailCopied(true);
            setTimeout(() => setEmailCopied(false), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy email:', err);
        }
    };

    return (
        <footer id="footer" data-theme="dark" className="w-full bg-obsidian py-16 px-6 text-ice relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
                <div className="max-w-md">
                    <div className="font-display font-black text-4xl uppercase tracking-tighter mb-4">
                        Rodrigo Bruns<span className="text-electric-blue">.</span>
                    </div>
                    <p className="opacity-60 text-sm font-sans tracking-wide leading-relaxed">
                        Coordenador de Preparação de Goleiros. Red Bull Bragantino. Evolução constante e excelência na formação e alto rendimento.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-display uppercase tracking-widest text-electric-blue font-bold">Navegação</h4>
                        <a href="#trajectory" className="hover:text-electric-blue transition-colors">Trajetória</a>
                        <a href="#methodology" className="hover:text-electric-blue transition-colors">Metodologia</a>
                        <a href="#results" className="hover:text-electric-blue transition-colors">Resultados</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-display uppercase tracking-widest text-electric-blue font-bold">Contato</h4>
                        <div className="flex items-center gap-6 mt-2 relative">
                            <a href="https://www.instagram.com/rodrigo.bruns/" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue hover:-translate-y-1 transition-all duration-300">
                                <Instagram size={24} strokeWidth={1.5} />
                            </a>
                            <a href="https://www.linkedin.com/in/rodrigo-bruns-378565176/" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue hover:-translate-y-1 transition-all duration-300">
                                <Linkedin size={24} strokeWidth={1.5} />
                            </a>

                            {/* Email Copy Button */}
                            <div className="relative group">
                                <button
                                    onClick={handleCopyEmail}
                                    className="hover:text-electric-blue hover:-translate-y-1 transition-all duration-300 flex items-center justify-center cursor-pointer"
                                    aria-label="Copy email address"
                                >
                                    {emailCopied ? (
                                        <Check size={24} strokeWidth={2} className="text-green-400" />
                                    ) : (
                                        <Mail size={24} strokeWidth={1.5} />
                                    )}
                                </button>

                                {/* Notification Tooltip */}
                                <div className={`absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] font-bold tracking-wider uppercase text-ice opacity-0 transition-all duration-300 pointer-events-none whitespace-nowrap ${emailCopied ? 'opacity-100 -translate-y-2' : ''}`}>
                                    Copiado!
                                </div>
                            </div>

                            <a href="https://www.youtube.com/@rgbruns" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue hover:-translate-y-1 transition-all duration-300">
                                <Youtube size={24} strokeWidth={1.5} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs opacity-40 uppercase tracking-widest">
                <span>© {new Date().getFullYear()} Rodrigo Bruns. All rights reserved.</span>
                <span>Aesthetic: Sharp Fluidity</span>
            </div>
        </footer>
    );
}
