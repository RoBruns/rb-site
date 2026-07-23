"use client";

import { DATE_FULL, TIME } from "./constants";

export function MasterclassFooter() {
    return (
        <footer className="w-full bg-obsidian border-t border-white/10 py-14 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                <div>
                    <p className="font-display font-bold uppercase tracking-tight text-ice text-lg">
                        Rodrigo Bruns
                    </p>
                    <p className="text-xs text-ice/40 mt-1.5">
                        Masterclass CIMO · Metodologia de preparação de goleiros
                    </p>
                </div>

                <div className="flex flex-col md:items-end gap-3">
                    <a
                        href="#inscricao"
                        className="text-[11px] font-bold uppercase tracking-[0.2em] text-electric-blue hover:text-ice transition-colors duration-400"
                    >
                        Garantir minha vaga →
                    </a>
                    <p className="text-[11px] text-ice/40">
                        Ao vivo · {DATE_FULL} · {TIME}
                    </p>
                    <p className="text-[11px] text-ice/30">
                        © 2026 Rodrigo Bruns. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
