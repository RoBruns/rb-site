"use client";

import { cn } from "../../utils/cn";
import { CHECKOUT_URL } from "./constants";

/* ------------------------------------------------------------------ */
/*  CTA: por padrão leva ao checkout da Hubla. Passe `href` (ex.:       */
/*  "#inscricao") para que o botão apenas role até a seção de oferta —  */
/*  só o botão da própria oferta usa o checkout.                        */
/* ------------------------------------------------------------------ */

export function BuyButton({
    children = "Garantir minha vaga",
    variant = "solid",
    size = "lg",
    className,
    href = CHECKOUT_URL,
}) {
    return (
        <a
            href={href}
            className={cn(
                "group inline-flex items-center justify-center gap-3 font-bold uppercase tracking-widest transition-colors duration-400",
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
