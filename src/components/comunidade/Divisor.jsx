"use client";

/* Divisor diagonal azul, no lugar do border-t reto usado nas outras páginas. */

export function Divisor({ className = "" }) {
    return (
        <div
            aria-hidden="true"
            className={`relative h-px w-full overflow-hidden ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />
        </div>
    );
}
