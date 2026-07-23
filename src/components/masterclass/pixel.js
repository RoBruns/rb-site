/* ------------------------------------------------------------------ */
/*  Pixel da Masterclass — SEPARADO do pixel global (mentoria).         */
/*                                                                      */
/*  O nosso site dispara APENAS o PageView (ver MasterclassPixel.jsx),  */
/*  via `trackSingle`, para não contaminar o pixel da mentoria.         */
/*                                                                      */
/*  Os eventos de conversão (ViewContent, InitiateCheckout, Purchase)   */
/*  são enviados pela própria Hubla — Pixel + CAPI — usando este mesmo  */
/*  ID, configurados no checkout. Por isso NÃO os disparamos aqui, para */
/*  evitar contagem dobrada.                                            */
/* ------------------------------------------------------------------ */

export const MASTERCLASS_PIXEL_ID = "849616757958572";
