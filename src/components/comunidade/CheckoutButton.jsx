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
                "cmn-btn group inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-wide sm:gap-2.5",
                size === "lg"
                    ? "min-h-[52px] px-6 py-4 text-[15px] sm:px-8"
                    : "min-h-[44px] px-4 py-2.5 text-[13px] sm:px-6 sm:py-3 sm:text-sm",
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
