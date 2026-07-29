"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./ds.css";
import { ComunidadeNav } from "./ComunidadeNav";
import { ComunidadeHero } from "./ComunidadeHero";
import { Problema } from "./Problema";
import { Virada } from "./Virada";
import { Transformacoes } from "./Transformacoes";
import { QuemResponde } from "./QuemResponde";
import { ComoFunciona } from "./ComoFunciona";
import { NaoEPraVoce } from "./NaoEPraVoce";
import { Oferta } from "./Oferta";
import { FAQ } from "./FAQ";
import { CtaFinal } from "./CtaFinal";
import { StickyMobileCta } from "./StickyMobileCta";
import { ComunidadeFooter } from "./ComunidadeFooter";

export function ComunidadePage() {
    useEffect(() => {
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReduced) return;

        /* Rolagem suave. O rAF é conduzido na mão (em vez de autoRaf)
           porque assim o loop começa junto com o efeito e para junto
           com ele, sem depender do agendamento interno da lib. */
        const lenis = new Lenis({
            duration: 1.15,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.6,
        });

        let frame;
        const raf = (time) => {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);

        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (!target) return;

            const href = target.getAttribute("href");
            if (!href || href === "#") return;

            const element = document.querySelector(href);
            if (element) {
                e.preventDefault();
                lenis.scrollTo(element, { offset: -90, duration: 1.3 });
            }
        };

        document.documentElement.addEventListener("click", handleAnchorClick);

        return () => {
            document.documentElement.removeEventListener("click", handleAnchorClick);
            cancelAnimationFrame(frame);
            lenis.destroy();
        };
    }, []);

    return (
        <main className="cmn-scope w-full min-h-screen bg-obsidian font-sans text-ice selection:bg-electric-blue selection:text-obsidian">
            <ComunidadeNav />
            <ComunidadeHero />
            <Problema />
            <Virada />
            <Transformacoes />
            <QuemResponde />
            <ComoFunciona />
            <NaoEPraVoce />
            <Oferta />
            <FAQ />
            <CtaFinal />
            <StickyMobileCta />
            <ComunidadeFooter />
        </main>
    );
}
