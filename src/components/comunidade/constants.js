/* ------------------------------------------------------------------ */
/*  Fonte única de preço e checkout da Comunidade PGAR.                */
/*  Mudou o valor? Muda aqui, e a página inteira acompanha.            */
/* ------------------------------------------------------------------ */

export const CHECKOUT_URL_BASE = "https://pay.hub.la/SWYwhjMGcTtwMN8YuBu2";

/*  Preço cheio — vale a partir do 11º aluno.                         */
export const PRICE_CASH = "R$ 497";
export const PRICE_INSTALLMENT = "6x de R$ 92,33";
export const PRICE_FULL_LABEL = "R$ 497 à vista ou 6x de R$ 92,33";

/*  Só o número da parcela, para quando a frase já diz "6x de" ou
    "por mês" e repetir o prefixo ficaria redundante.                  */
export const PRICE_INSTALLMENT_VALUE = "R$ 92,33";

/* ------------------------------------------------------------------ */
/*  Lote promocional dos 10 primeiros.                                 */
/*                                                                     */
/*  Como funciona: os 10 primeiros usam o cupom PGAR297 no checkout e  */
/*  travam R$ 297 — e o cupom segue valendo nas renovações, ou seja,   */
/*  o preço dessa pessoa nunca sobe enquanto ela não cancelar.         */
/*                                                                     */
/*  Manutenção: baixe VAGAS_RESTANTES a cada venda. Chegou a zero (ou  */
/*  PROMO_ATIVA = false), toda a camada promocional some da página      */
/*  sozinha e fica só o preço cheio de R$ 497.                         */
/* ------------------------------------------------------------------ */

export const PROMO_ATIVA = true;
export const VAGAS_TOTAIS = 10;
export const VAGAS_RESTANTES = 10;

export const PROMO_CUPOM = "PGAR297";
export const PROMO_PRICE_CASH = "R$ 297";
export const PROMO_PRICE_INSTALLMENT = "6x de R$ 55,18";
export const PROMO_PRICE_INSTALLMENT_VALUE = "R$ 55,18";

/*  Um único ponto decide se a camada promocional aparece. Todo
    componente pergunta por aqui, para não haver página mostrando
    R$ 297 enquanto outra já mostra R$ 497.                            */
export const PROMO_VISIVEL = PROMO_ATIVA && VAGAS_RESTANTES > 0;

/*  O que o visitante paga hoje, de fato. Use estes dois em qualquer
    lugar que anuncie "o preço" sem falar de lote.                     */
export const PRECO_VIGENTE_CASH = PROMO_VISIVEL ? PROMO_PRICE_CASH : PRICE_CASH;
export const PRECO_VIGENTE_INSTALLMENT_VALUE = PROMO_VISIVEL
    ? PROMO_PRICE_INSTALLMENT_VALUE
    : PRICE_INSTALLMENT_VALUE;
export const PRECO_VIGENTE_INSTALLMENT = PROMO_VISIVEL
    ? PROMO_PRICE_INSTALLMENT
    : PRICE_INSTALLMENT;

/*  Enquanto houver vaga, o botão leva ao checkout com o cupom já
    aplicado — ninguém perde o desconto por esquecer de digitar.
    Acabou o lote, o link volta ao checkout limpo, no preço cheio.
    (buildCheckoutUrl usa URL/searchParams, então os parâmetros de
    atribuição são somados a este ?coupon= sem apagá-lo.)              */
export const CHECKOUT_URL = PROMO_VISIVEL
    ? CHECKOUT_URL_BASE + "?coupon=" + PROMO_CUPOM
    : CHECKOUT_URL_BASE;
