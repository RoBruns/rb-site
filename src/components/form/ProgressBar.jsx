"use client";

import { motion } from "framer-motion";
import { EASE } from "./motion";

export function ProgressBar({ step, total }) {
    return (
        <div className="fixed top-0 left-0 z-50 flex w-full gap-2 px-1 pt-1">
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/8"
                >
                    <motion.div
                        className="absolute inset-0 origin-left bg-electric-blue"
                        initial={false}
                        animate={{ scaleX: i < step ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: EASE }}
                    />
                </div>
            ))}
        </div>
    );
}
