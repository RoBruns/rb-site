/* ------------------------------------------------------------------ */
/*  Constantes da Masterclass CIMO                                     */
/* ------------------------------------------------------------------ */

// Checkout (Hubla)
export const CHECKOUT_URL = "https://pay.hub.la/2q4gAr6ujjxmlMFssuhD";

// Dados da oferta
export const PRICE_LABEL = "R$ 69,90";

// Escassez — vagas restantes por este valor.
// Ajuste SPOTS_LEFT conforme as inscrições avançam (some daqui em um só lugar).
export const SPOTS_LEFT = 3;

// Data e hora
export const DATE_SHORT = "07 JUL";
export const DATE_FULL = "Terça-feira, 07 de julho";
export const TIME = "19h";

// Início da aula (alvo do countdown) — horário de Brasília
export const EVENT_START_ISO = "2026-07-07T19:00:00-03:00";

// WhatsApp do grupo (pós-compra): formato internacional, só dígitos
const WHATSAPP_NUMBER = "5511921657888";
const WHATSAPP_MESSAGE =
    "Olá! Acabei de garantir meu ingresso para a Masterclass CIMO do Rodrigo Bruns. " +
    "Gostaria de ser adicionado(a) ao grupo da masterclass, por favor.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
)}`;
