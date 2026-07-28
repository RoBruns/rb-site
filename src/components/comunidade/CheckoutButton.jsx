"use client";

import { cn } from "../../utils/cn";
import { CHECKOUT_URL } from "./constants";

/* ------------------------------------------------------------------ */
/*  CTA da Comunidade. Por padrão vai direto ao checkout da Hubla.     */
/*  Passe href="#oferta" para apenas rolar até a seção de preço.       */
/* ------------------------------------------------------------------ */

export function CheckoutButton({
    children = "Entrar na Comunidade",
    variant = "solid",
    size = "lg",
    className,
    href = CHECKOUT_URL,
}) {
    const isExternal = href.startsWith("http");

    return (
        <a
            href={href}
            {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            className={cn(
                "group inline-flex items-center justify-center gap-3 font-bold uppercase tracking-widest transition-colors duration-400 min-h-[44px]",
                size === "lg" ? "px-9 py-4 text-sm" : "px-6 py-3 text-xs",
                variant === "solid" &&
                    "border border-electric-blue bg-electric-blue text-obsidian hover:bg-transparent hover:text-electric-blue",
                variant === "outline" &&
                    "border border-electric-blue/60 text-electric-blue hover:bg-electric-blue hover:text-obsidian",
                className
            )}
        >
            {children}
            <span className="transition-transform duration-400 group-hover:translate-x-1">
                →
            </span>
        </a>
    );
}
