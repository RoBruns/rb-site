"use client";

import { useSyncExternalStore } from "react";
import { cn } from "../../utils/cn";
import { EVENT_START_ISO } from "./constants";

const TARGET = new Date(EVENT_START_ISO).getTime();

/* ------------------------------------------------------------------ */
/*  Countdown até o início da aula. O tempo é lido como "store         */
/*  externo" (useSyncExternalStore): no servidor renderiza vazio       */
/*  (sem mismatch de hidratação) e no cliente atualiza a cada segundo. */
/*  Some sozinho quando a aula começa.                                 */
/* ------------------------------------------------------------------ */

function subscribe(callback) {
    const id = setInterval(callback, 1000);
    return () => clearInterval(id);
}

function getSecondsLeft() {
    return Math.max(0, Math.floor((TARGET - Date.now()) / 1000));
}

function getServerSecondsLeft() {
    return null;
}

export function Countdown({ className }) {
    const secondsLeft = useSyncExternalStore(
        subscribe,
        getSecondsLeft,
        getServerSecondsLeft
    );

    if (secondsLeft === null || secondsLeft <= 0) return null;

    const blocks = [
        ["dias", Math.floor(secondsLeft / 86400)],
        ["horas", Math.floor((secondsLeft % 86400) / 3600)],
        ["min", Math.floor((secondsLeft % 3600) / 60)],
        ["seg", secondsLeft % 60],
    ];

    return (
        <div className={cn("flex items-start gap-3 sm:gap-4", className)}>
            {blocks.map(([label, value], i) => (
                <div key={label} className="flex items-start gap-3 sm:gap-4">
                    <div className="flex flex-col items-center">
                        <span className="font-display font-bold text-electric-blue text-3xl md:text-4xl leading-none tabular-nums">
                            {String(value).padStart(2, "0")}
                        </span>
                        <span className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-ice/40">
                            {label}
                        </span>
                    </div>
                    {i < blocks.length - 1 && (
                        <span className="font-display font-bold text-ice/25 text-3xl md:text-4xl leading-none">
                            :
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}
