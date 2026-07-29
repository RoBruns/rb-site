"use client";

import { cn } from "../../utils/cn";
import { CHECKOUT_URL } from "./constants";

/* ------------------------------------------------------------------ */
/*  CTA da Comunidade. Por padrão vai direto ao checkout da Hubla.     */
/*  Passe href="#oferta" para apenas rolar até a seção de preço.       */
/*                                                                     */
/*  Design system novo: pill, sombra difusa azul, leve subida no hover */
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
                "cmn-btn group inline-flex items-center justify-center gap-2.5 font-semibold tracking-wide min-h-[48px]",
                size === "lg" ? "px-8 py-4 text-[15px]" : "px-6 py-3 text-sm",
                variant === "solid" &&
                    "cmn-btn-primary bg-electric-blue text-obsidian hover:bg-white",
                variant === "glass" &&
                    "cmn-pill text-ice hover:bg-white/10 hover:border-white/25",
                className
            )}
        >
            {children}
            <span
                aria-hidden="true"
                className="transition-transform duration-400 group-hover:translate-x-1"
            >
                →
            </span>
        </a>
    );
}
