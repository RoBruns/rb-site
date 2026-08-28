"use client";

import { useCallback, useSyncExternalStore } from "react";
import { cn } from "../../utils/cn";
import { buildCheckoutUrl, sendTouch } from "../../utils/attribution";
import { CHECKOUT_URL } from "./constants";

/* ------------------------------------------------------------------ */
/*  CTA da Comunidade. Por padrão vai direto ao checkout da Hubla.     */
/*  Passe href="#oferta" para apenas rolar até a seção de preço.       */
/*                                                                     */
/*  Design system novo: pill, sombra difusa azul, leve subida no hover */
/* ------------------------------------------------------------------ */

// Cache mantém o snapshot estável; subscribe é vazio porque o valor não muda após a montagem.
const checkoutHrefCache = new Map();

const subscribeToCheckoutHref = () => () => {};

export function CheckoutButton({
    children = "Entrar na Comunidade",
    variant = "solid",
    size = "lg",
    className,
    href = CHECKOUT_URL,
}) {
    const isExternal = href.startsWith("http");
    // useSyncExternalStore mantém o HTML estático sem JS e atualiza o href na hidratação, sem useEffect.
    const getSnapshot = useCallback(() => {
        if (!isExternal) return href;

        if (!checkoutHrefCache.has(href)) {
            checkoutHrefCache.set(href, buildCheckoutUrl(href));
        }

        return checkoutHrefCache.get(href);
    }, [href, isExternal]);
    const getServerSnapshot = useCallback(() => href, [href]);
    const checkoutHref = useSyncExternalStore(
        subscribeToCheckoutHref,
        getSnapshot,
        getServerSnapshot
    );

    const handleClick = () => {
        sendTouch("checkout_iniciado");
    };

    return (
        <a
            href={checkoutHref}
            {...(isExternal ? { onClick: handleClick } : {})}
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
