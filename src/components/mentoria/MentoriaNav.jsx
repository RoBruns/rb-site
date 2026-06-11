"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "../../utils/cn";

export function MentoriaNav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-colors duration-500",
                scrolled
                    ? "bg-obsidian/85 backdrop-blur-md border-b border-white/10"
                    : "bg-transparent border-b border-transparent"
            )}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
                <span className="font-display font-bold text-base tracking-tight uppercase text-ice">
                    Rodrigo Bruns
                </span>

                <a
                    href="#candidatura"
                    className="text-[11px] font-bold uppercase tracking-[0.2em] text-ice/70 hover:text-electric-blue transition-colors duration-400"
                >
                    Candidatar-se
                </a>
            </div>
        </motion.header>
    );
}
