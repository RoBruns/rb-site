"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { MasterclassPixel } from "./MasterclassPixel";
import { MasterclassNav } from "./MasterclassNav";
import { MasterclassHero } from "./MasterclassHero";
import { MasterclassProblem } from "./MasterclassProblem";
import { MasterclassCimo } from "./MasterclassCimo";
import { MasterclassAuthority } from "./MasterclassAuthority";
import { MasterclassForWhom } from "./MasterclassForWhom";
import { MasterclassOffer } from "./MasterclassOffer";
import { MasterclassFAQ } from "./MasterclassFAQ";
import { MasterclassFinalCta } from "./MasterclassFinalCta";
import { MasterclassFooter } from "./MasterclassFooter";

export function Masterclass() {
    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        const handleAnchorClick = (e) => {
            const target = e.target.closest('a[href^="#"]');
            if (target) {
                const href = target.getAttribute("href");
                if (href === "#") return;
                const element = document.querySelector(href);
                if (element) {
                    e.preventDefault();
                    lenis.scrollTo(element, { offset: -90, duration: 1.2 });
                }
            }
        };

        document.documentElement.addEventListener("click", handleAnchorClick);
        return () => {
            document.documentElement.removeEventListener("click", handleAnchorClick);
            lenis.destroy();
        };
    }, []);

    return (
        <main className="w-full min-h-screen bg-obsidian font-sans text-ice selection:bg-electric-blue selection:text-obsidian">
            <MasterclassPixel />
            <MasterclassNav />
            <MasterclassHero />
            <MasterclassProblem />
            <MasterclassCimo />
            <MasterclassAuthority />
            <MasterclassForWhom />
            <MasterclassOffer />
            <MasterclassFAQ />
            <MasterclassFinalCta />
            <MasterclassFooter />
        </main>
    );
}
