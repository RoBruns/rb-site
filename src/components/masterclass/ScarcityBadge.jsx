"use client";

import { cn } from "../../utils/cn";
import { SPOTS_LEFT } from "./constants";

/* ------------------------------------------------------------------ */
/*  Faixa de escassez — vagas restantes por este valor.                */
/*  variant="bar"  → faixa fina para o header (largura total).          */
/*  variant="pill" → selo destacado para dentro da seção de oferta.    */
/*  O número vem de SPOTS_LEFT (constants.js) — trocar em um só lugar.  */
/* ------------------------------------------------------------------ */

const label =
    SPOTS_LEFT === 1 ? "Última vaga" : `Últimas ${SPOTS_LEFT} vagas`;

export function ScarcityBadge({ variant = "pill", className }) {
    if (variant === "bar") {
        return (
            <div
                className={cn(
                    "w-full bg-electric-blue text-obsidian",
                    className
                )}
            >
                <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 px-6 py-2 text-center">
                    <span className="relative flex h-2 w-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-obsidian/60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-obsidian" />
                    </span>
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] leading-none">
                        {label} — inscrições quase encerradas
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div
            className={cn(
                "inline-flex items-center gap-2 border border-electric-blue/40 bg-electric-blue/10 px-4 py-2",
                className
            )}
        >
            <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-blue/60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-electric-blue" />
            </span>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-electric-blue leading-none">
                {label} — vagas quase esgotadas
            </p>
        </div>
    );
}
