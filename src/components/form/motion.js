/* ------------------------------------------------------------------ */
/*  Shared animation primitives for multi-step forms                   */
/* ------------------------------------------------------------------ */

export const EASE = [0.16, 1, 0.3, 1];

// Each step slides in from the direction of travel and out the other side.
export const stepVariants = {
    enter: (dir) => ({
        opacity: 0,
        x: dir > 0 ? 48 : -48,
        filter: "blur(6px)",
    }),
    center: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: EASE },
    },
    exit: (dir) => ({
        opacity: 0,
        x: dir > 0 ? -48 : 48,
        filter: "blur(6px)",
        transition: { duration: 0.4, ease: EASE },
    }),
};

// Stagger children inside a step for a refined cascade.
export const container = {
    center: {
        transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
};

export const item = {
    enter: { opacity: 0, y: 18 },
    center: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE },
    },
};
