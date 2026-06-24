"use client";

/* ------------------------------------------------------------------ */
/*  Meta Pixel + CAPI — client-side tracking helpers                   */
/* ------------------------------------------------------------------ */
/*
 * Estratégia de deduplicação Pixel <> CAPI:
 *   - Geramos um único `event_id` por submit.
 *   - O Pixel dispara o "Lead" com esse event_id (client-side).
 *   - O mesmo event_id vai no payload do webhook -> n8n dispara o
 *     "Lead" via CAPI (server-side) com o MESMO event_id.
 *   - A Meta usa event_id + event_name para deduplicar os dois.
 *
 * Também coletamos _fbp / _fbc (cookies nativos do Pixel) e as UTMs
 * da URL, pra enriquecer o match quality no CAPI.
 */

export const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || "";

// Gera um event_id único (sem dependência externa).
export function newEventId() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

// Lê um cookie pelo nome (client-side).
function getCookie(name) {
    if (typeof document === "undefined") return "";
    const match = document.cookie.match(
        new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)")
    );
    return match ? decodeURIComponent(match[1]) : "";
}

// _fbp: cookie de browser do Pixel. _fbc: cookie de clique (derivado do fbclid).
export function getFbCookies() {
    return {
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
    };
}

// Se o usuário chegou via anúncio, a URL traz ?fbclid=... — o Pixel
// normalmente cria o _fbc, mas garantimos um fallback aqui.
export function getFbcFromUrl() {
    if (typeof window === "undefined") return "";
    const fbclid = new URLSearchParams(window.location.search).get("fbclid");
    if (!fbclid) return "";
    // Formato oficial: fb.1.<timestamp>.<fbclid>
    return `fb.1.${Date.now()}.${fbclid}`;
}

// Captura UTMs + fbclid da URL para armazenamento/atribuição.
export function getUrlParams() {
    if (typeof window === "undefined") return {};
    const p = new URLSearchParams(window.location.search);
    const out = {};
    for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"]) {
        const v = p.get(k);
        if (v) out[k] = v;
    }
    return out;
}

// Advanced Matching: re-inicializa o Pixel com os dados de contato (o próprio
// browser hasheia em SHA-256 antes de enviar). Isso NÃO duplica o evento — a
// dedup é por event_id + event_name, e o CAPI usa o MESMO event_id. Só enriquece
// o match do lado navegador, espelhando o que o CAPI já manda server-side.
// `user` aceita { email, phone, firstName, lastName }.
function applyAdvancedMatching(user) {
    if (!PIXEL_ID || !user) return;
    const am = {};
    if (user.email) am.em = String(user.email).trim().toLowerCase();
    if (user.phone) am.ph = String(user.phone).replace(/\D/g, "");
    if (user.firstName) am.fn = String(user.firstName).trim().toLowerCase();
    if (user.lastName) am.ln = String(user.lastName).trim().toLowerCase();
    if (Object.keys(am).length === 0) return;
    // Re-init é idempotente: atualiza o advanced matching do pixel já carregado.
    window.fbq("init", PIXEL_ID, am);
}

// Dispara um evento padrão no Pixel (client-side) com event_id p/ dedup
// Pixel<>CAPI. `custom` = parâmetros do evento (ex.: { fit }); `user` = dados de
// contato p/ advanced matching (hasheados pelo browser).
export function trackEvent(eventName, { eventId, custom = {}, user } = {}) {
    if (typeof window === "undefined" || typeof window.fbq !== "function") return;
    applyAdvancedMatching(user);
    window.fbq("track", eventName, custom, { eventID: eventId });
}

// Dispara o evento "Lead" no Pixel (client-side) com event_id p/ dedup.
export function trackLead({ eventId, value, currency = "BRL", user } = {}) {
    const custom = {};
    if (value != null) {
        custom.value = value;
        custom.currency = currency;
    }
    trackEvent("Lead", { eventId, custom, user });
}

// Dispara "SubmitApplication" (candidatura) com o parâmetro `fit` que distingue
// quem respondeu "faz sentido" (sim) de "não faz sentido" (nao). A campanha
// otimiza a conversão personalizada fit=sim; fit=nao alimenta retargeting.
export function trackSubmitApplication({ eventId, fit, user } = {}) {
    trackEvent("SubmitApplication", { eventId, custom: fit ? { fit } : {}, user });
}
