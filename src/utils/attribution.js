"use client";

import { getCookie, getFbCookies, getFbcFromUrl, getUrlParams } from "./tracking";

const TRACKING_ID_KEY = "rb_tid";
const FIRST_TOUCH_KEY = "rb_first_touch";
const LAST_TOUCH_KEY = "rb_last_touch";
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

// Gera um UUID v4 sem depender de nenhuma biblioteca externa.
function newTrackingId() {
    try {
        if (typeof crypto !== "undefined" && crypto.randomUUID) {
            return crypto.randomUUID();
        }
    } catch {
        /* usa o fallback abaixo */
    }

    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (char) => {
        const random = Math.floor(Math.random() * 16);
        const value = char === "x" ? random : (random & 0x3) | 0x8;
        return value.toString(16);
    });
}

function getStoredValue(key) {
    try {
        return window.localStorage.getItem(key) || "";
    } catch {
        return "";
    }
}

function setStoredValue(key, value) {
    try {
        window.localStorage.setItem(key, value);
    } catch {
        /* silencioso por design */
    }
}

function setTrackingCookie(id) {
    try {
        document.cookie = `${TRACKING_ID_KEY}=${encodeURIComponent(id)}; Max-Age=${ONE_YEAR_IN_SECONDS}; Path=/; SameSite=Lax`;
    } catch {
        /* silencioso por design */
    }
}

function getCurrentTouch() {
    let params = {};
    let gclid = "";
    let landingPage = "";
    let referrer = "";

    try {
        params = getUrlParams();
        const searchParams = new URLSearchParams(window.location.search);
        gclid = searchParams.get("gclid") || "";
        landingPage = window.location.href;
        referrer = document.referrer || "";
    } catch {
        /* silencioso por design */
    }

    return {
        utm_source: params.utm_source || "",
        utm_medium: params.utm_medium || "",
        utm_campaign: params.utm_campaign || "",
        utm_content: params.utm_content || "",
        utm_term: params.utm_term || "",
        landing_page: landingPage,
        referrer,
        fbclid: params.fbclid || "",
        gclid,
        ocorrido_em: new Date().toISOString(),
    };
}

function getStoredTouch(key) {
    const value = getStoredValue(key);
    if (!value) return null;

    try {
        return JSON.parse(value);
    } catch {
        return null;
    }
}

// Lê o primeiro toque registrado para preservar a origem da aquisição.
export function getFirstTouch() {
    return getStoredTouch(FIRST_TOUCH_KEY);
}

// Persiste o primeiro toque e atualiza o último em todas as visitas e cliques.
export function recordTouch() {
    const touch = getCurrentTouch();

    if (!getFirstTouch()) {
        setStoredValue(FIRST_TOUCH_KEY, JSON.stringify(touch));
    }
    setStoredValue(LAST_TOUCH_KEY, JSON.stringify(touch));

    return touch;
}

// Identificador próprio do visitante, espelhado entre cookie e localStorage.
export function getTrackingId() {
    let localId = "";
    let cookieId = "";

    try {
        localId = getStoredValue(TRACKING_ID_KEY);
        cookieId = getCookie(TRACKING_ID_KEY);
    } catch {
        /* silencioso por design */
    }

    const trackingId = localId || cookieId || newTrackingId();

    if (!localId) setStoredValue(TRACKING_ID_KEY, trackingId);
    if (!cookieId) setTrackingCookie(trackingId);

    return trackingId;
}

// Monta a URL da Hubla no momento do clique, quando a URL atual ainda está disponível.
export function buildCheckoutUrl(baseUrl) {
    try {
        const checkoutUrl = new URL(baseUrl);
        const currentTouch = getCurrentTouch();
        const hasCurrentUtm = UTM_KEYS.some((key) => currentTouch[key]);
        const sourceTouch = hasCurrentUtm ? currentTouch : getFirstTouch() || {};

        UTM_KEYS.forEach((key) => {
            if (sourceTouch[key]) checkoutUrl.searchParams.set(key, sourceTouch[key]);
        });

        const trackingId = getTrackingId();
        if (trackingId) checkoutUrl.searchParams.set("sck", trackingId);
        if (sourceTouch.utm_campaign) {
            checkoutUrl.searchParams.set("src", sourceTouch.utm_campaign);
        }

        return checkoutUrl.toString();
    } catch {
        return baseUrl;
    }
}

// Envia o toque sem bloquear a navegação nem interferir na experiência do visitante.
export function sendTouch(tipo) {
    const touch = recordTouch();
    const trackingUrl = process.env.NEXT_PUBLIC_TRACK_URL;
    if (!trackingUrl) return;

    let fbp = "";
    let fbc = "";

    try {
        ({ fbp, fbc } = getFbCookies());
        fbc = fbc || getFbcFromUrl();
    } catch {
        /* silencioso por design */
    }

    try {
        fetch(trackingUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            keepalive: true,
            body: JSON.stringify({
                rb_tid: getTrackingId(),
                tipo,
                ...touch,
                fbp,
                fbc,
            }),
        }).catch(() => {});
    } catch {
        /* silencioso por design */
    }
}
