"use client";

import { useEffect, useRef } from "react";
import { sendTouch } from "../utils/attribution";

// Registra uma única visita por montagem da página de venda.
export function AttributionTracker() {
    const hasTracked = useRef(false);

    useEffect(() => {
        if (hasTracked.current) return;
        hasTracked.current = true;
        sendTouch("visita");
    }, []);

    return null;
}
